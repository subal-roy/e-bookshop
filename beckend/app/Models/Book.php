<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'name',
        'book_category_id',
        'vendor_id',
        'isbn',
        'description',
        'price',
        'image',
        'format',
        'page_count'
    ];
}
