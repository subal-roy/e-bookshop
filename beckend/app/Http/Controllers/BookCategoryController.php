<?php

namespace App\Http\Controllers;

use App\Models\BookCategory;
use App\Http\Requests\StoreBookCategoryRequest;
use App\Http\Requests\UpdateBookCategoryRequest;
use App\Repositories\BookCategoryRepository;

class BookCategoryController extends Controller
{

    public function __construct(private BookCategoryRepository $repository)
    {
        
    }
    /**
     * Display a listing with pagination of the resource.
     */
    public function index()
    {
        $bookCategories = BookCategory::paginate(3);

        return apiResponseWithSuccess('BookCategory list with pagination retrieved succussfully', $bookCategories);
    }

     /**
     * Display a listing of the resource.
     */
    public function list()
    {
        $bookCategoryList = BookCategory::select('id', 'name')->get();

        return apiResponseWithSuccess('BookCategory list retrived successfully', $bookCategoryList);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookCategoryRequest $request)
    {
        $bookCategory = BookCategory::create($request->validated());

        return apiResponseWithSuccess('BookCategory created successfully', $bookCategory);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return $this->repository->show($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookCategory $bookCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookCategoryRequest $request, BookCategory $bookCategory)
    {
        return $this->repository->update($request, $bookCategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        return $this->repository->delete($id);
    }
}
