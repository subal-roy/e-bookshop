<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(private AuthService $service) {}
    public function register(Request $request)
    {
        return $this->service->register($request);
    }

    public function login(Request $request)
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

    public function sendResetPasswordLink(Request $request)
    {
        return $this->service->sendResetPasswordLink($request);
    }

    public function resetPassword(Request $request)
    {
        return $this->service->resetPassword($request);
    }

    public function changePassword(Request $request) {
        return $this->service->changePassword($request);
    }
}
