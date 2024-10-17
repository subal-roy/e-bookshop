<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// api for Authentication 
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');



Route::apiResource('book-categories', BookCategoryController::class);
Route::get('book-category-list', [BookCategoryController::class, 'list']);
