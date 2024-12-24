<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookCategoryController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\VendorController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// api for Authentication 
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::post('reset-password-link', [AuthController::class, 'sendResetPasswordLink']);
Route::post('reset-password', [AuthController::class, 'resetPassword']);
Route::post('change-password', [AuthController::class, 'changePassword'])->middleware('auth:sanctum');



Route::apiResource('book-categories', BookCategoryController::class);
Route::get('book-category-list', [BookCategoryController::class, 'list']);

Route::get('vendors', [VendorController::class, 'index']);
Route::get('vendors/{vendor}', [VendorController::class, 'show']);
Route::get('vendor-list', [VendorController::class, 'list']);
Route::post('register-vendor', [VendorController::class, 'registerVendor'])->named('vendor.register');
Route::put('vendors/{vendor}', [VendorController::class, 'update']);
Route::delete('vendors/{vendor}', [VendorController::class, 'destroy']);

Route::apiResource('books', BookController::class);