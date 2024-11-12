<?php

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use PhpParser\Node\Stmt\TryCatch;

function apiResponseWithSuccess(string $message, $data = [], int $code = Response::HTTP_OK)
{
    if ($data) {
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
    if ($message instanceof ValidationException) {
        return response()->json([
            'status' => 'error',
            'message' => $message->getMessage(),
            'errors' => $message->errors(),
        ], $code);
    } else if (is_object($message)) {
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

if (!function_exists('fileUpload')) {
    function fileUpload(string $path, $file, string $oldfile =""): string 
    {
        if($oldfile && Storage::exists($oldfile)) {
            Storage::delete($oldfile);
        }
        
        $extension = $file->getClientOriginalExtension();
        $fileName = date("d-m-Y") . '-' . time();
        $fileNameWithExtension = $fileName . '.' . $extension;

        try {
            if(Storage::exists($path . '/' . $fileName . '.' . $extension)) {
                $fileNameWithExtension = $fileName . (1) . '.' . $extension;
            }

            return Storage::putFileAs($path, $file, $fileNameWithExtension);
        } catch (\Throwable $th) {
            return Storage::putFileAs($path, $file, $fileNameWithExtension);
        }
    }
}
