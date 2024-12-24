<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

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
        'page_count',
        'slug'
    ];


    protected static function boot()
    {
        parent::boot();
        static::creating(function(Book $book) {
            $slug = self::generateSlug($book->name);
            $book->slug = $slug;
        });
        static::updating(function (Book $book) {
            $slug = self::generateSlug($book->name, $book->id);
            $book->slug = $slug;
        });
    }

    private static function generateSlug($name, $id = null)
    {
        $slug = Str::slug($name);
        $query = Book::where('slug', $slug);
        if ($id) {
            $query->where('id' != $id);
        }
        $count = $query->count();

        while ($count > 0) {
            $slug = Str::slug($name) . '-' . ++$count;
            $query = Book::where('slug', $slug);
            if ($id) {
                $query->where('id', '!=', $id);
            }
            if (!$query->exists()) {
                break;
            }
        }
        return $slug;
    }

    public function category()
    {
        return $this->belongsTo(BookCategory::class, 'book_category_id');
    }
}
