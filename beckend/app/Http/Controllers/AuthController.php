<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\ChangePasswordRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Http\Requests\Auth\SendResetPasswordRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(private AuthService $service) {}
    public function register(RegisterRequest $request)
    {
        return $this->service->register($request);
    }

    public function login(LoginRequest $request)
    {
        return $this->service->login($request);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return [
            'message' => 'You are logged out'
        ];
    }

    public function sendResetPasswordLink(SendResetPasswordRequest $request)
    {
        return $this->service->sendResetPasswordLink($request);
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        return $this->service->resetPassword($request);
    }

    public function changePassword(ChangePasswordRequest $request) {
        return $this->service->changePassword($request);
    }
}
