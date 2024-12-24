<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Models\Book;
use App\Repositories\BookRepository;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function __construct(private BookRepository $repository) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $books = $this->repository->paginate($request);
        return apiResponseWithSuccess("Book data retrieved successfully", $books);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BookRequest $request)
    {
        return $this->repository->save($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(String $slug)
    {
        $book = Book::where('slug', $slug)->firstOrFail();
        return apiResponseWithSuccess('Data retrived successfully', $book);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
