<?php

namespace App\Http\Controllers;

use App\Repositories\AuthRepository;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(private AuthRepository $repository) {}
    public function register(Request $request)
    {
        return $this->repository->register($request);
    }

    public function login(Request $request)
    {
        return $this->repository->login($request);
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
        return $this->repository->sendResetPasswordLink($request);
    }

    public function resetPassword(Request $request) {
        return $this->repository->resetPassword($request);
    }
}
