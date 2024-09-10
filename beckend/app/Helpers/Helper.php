<?php

use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

function apiResponseWithSuccess(string $message, $data = [], int $code = Response::HTTP_OK)
{
    if($data) {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ], $code);
    } else {
        return response()->json([
            'status' => 'success',
            'message' => $message
        ], $code);
    }
}

function apiResponseWithError(mixed $message, $code = 400)
{
    if($message instanceof ValidationException) {
        return response()->json([
            'status' => 'error',
            'message' => $message->getMessage(),
            'errors' => $message->errors(),
        ], $code);
    } else if(is_object($message)) {
        return response()->json([
            'status' => 'error',
            'message' => $message->first(),
            'errors' => $message->errors()
        ], $code);
    } else {
        return response()->json([
            'status' => 'error',
            'message' => $message
        ], $code);
    }

}