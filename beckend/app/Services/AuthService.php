<?php

namespace App\Services;

use App\Models\User;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class AuthService
{
    public function register($request)
    {
        $fields = $request->only('name','email', 'password');

        $user = User::create($fields);
        $token = $user->createToken($request->name);

        return apiResponseWithSuccess('You have registered successfully', [
            'user' => $user,
            'token' => $token->plainTextToken,
        ]);
    }

    public function login($request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !(Hash::check($request->password, $user->password))) {

            return apiResponseWithError('Incorrect credentials! Please try again.', 400);
        }

        $token = $user->createToken($user->name);

        return apiResponseWithSuccess('Logged in successfully', [
            'user' => $user,
            'token' => $token->plainTextToken,
        ]);
    }

    public function sendResetPasswordLink($request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return apiResponseWithError('User not found with this email', 404);
        }

        $token = Password::createToken($user);

        $user->notify(new ResetPasswordNotification($token));

        return apiResponseWithSuccess('Password reset link is sent to your email.', ['token' => $token]);
    }

    public function resetPassword($request)
    {
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                    'remember_token' => Str::random(60)
                ])->save();
            }
        );

        return $status == Password::PASSWORD_RESET ? apiResponseWithSuccess('Password updated successfully.')
                                                   : apiResponseWithError('Invalid token or email.', 400);
    }

    public function changePassword($request)
    { 
        $user = $request->user();

        if (!$user || !(Hash::check($request->old_password, $user->password))) {
            return apiResponseWithError('Please enter old password correctly.', 400);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return apiResponseWithSuccess('Password changed successfuly.');
    }
}
