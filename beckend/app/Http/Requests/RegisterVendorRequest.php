<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterVendorRequest extends FormRequest
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
            'user_id' => 'required|exists:users,id|unique:vendors',
            'store_name' => 'required|string',
            'store_description' => 'nullable|string',
            'location' => 'nullable|string',
        ];
    }

    public function messages()
    {
        return [
            'user_id.unique' => 'You have already registered as a vendor'
        ];
    }
}
