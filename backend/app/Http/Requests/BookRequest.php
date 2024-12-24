<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'isbn' => 'required|string|max:14|unique:books,isbn',
            'description' => 'required|string|max:2000',
            'image' => 'sometimes|nullable|file|mimes:jpeg,png,jpg,gif|max:2048',
            'price' => 'required|numeric',
            'page_count' => 'sometimes|nullable|integer:min:1',
            'format' => 'required|in:Hardcover,Paperback,eBook,Audiobook',
            'vendor_id' => 'required|exists:vendors,id',
            'book_category_id' => 'required|exists:book_categories,id'
        ];
    }
}
