<?php

namespace App\Repositories;

use App\Models\Book;
use App\Repositories\Repository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class BookRepository implements Repository
{

    public function paginate(Request $request)
    {
        $query = Book::query();

        $books = $this->applyFilters($query, $request->query->all())->paginate(10);

        return $books;
    }

    public function applyFilters(Builder $query, array $filters = [])
    {
        foreach ($filters as $key => $value) {
            if ($value !== null && $value !== '') {
                switch ($key) {
                    case 'term':
                        $query->where(function (Builder $query) use ($value) {
                            $query->where('name', 'like', '%' . $value . '%')
                                ->orWhere('description', 'like', '%' . $value . '%');
                        });
                        break;
                    case 'category':
                        $query->whereHas('category', function (Builder $query) use ($value) {
                            $query->where('name', 'like', '%' . $value . '%');
                        });
                        break;
                    case 'publisher':
                        $query->where('publisher', 'like', '%' . $value . '%');
                        break;
                    case 'author':
                        $query->where('author', 'like', '%' . $value . '%');
                        break;
                    case 'in_stock';
                        $query->where('in_stock', filter_var($value, FILTER_VALIDATE_BOOLEAN));
                        break;
                    default:
                        break;
                }
            }
        }
        return $query;
    }

    public function save($request)
    {
        $book = new Book();
        $book->fill($request->only($book->getFillable()));
        if ($request->hasfile('image')) {
            $book->image = fileUpload('book/images', $request->file('image'));
        }
        $book->save();
        return apiResponseWithSuccess('New Book created successfully!', $book);
    }
}