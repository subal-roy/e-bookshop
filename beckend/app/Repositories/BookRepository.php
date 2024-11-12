<?php
namespace App\Repositories;

use App\Models\Book;
use App\Repositories\Repository;

class BookRepository implements Repository {
    public function save($request) {
        $book = new Book();
        $book->fill($request->only($book->getFillable()));
        if($request->hasfile('image')) {
            $book->image = fileUpload('book/images', $request->file('image'));
        }
        $book->save();
        return apiResponseWithSuccess('New Book created successfully!', $book);
    }
}