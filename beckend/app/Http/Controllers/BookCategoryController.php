<?php

namespace App\Http\Controllers;

use App\Models\BookCategory;
use App\Http\Requests\StoreBookCategoryRequest;
use App\Http\Requests\UpdateBookCategoryRequest;
use Exception;
use PhpParser\Node\Stmt\TryCatch;

use function PHPUnit\Framework\returnSelf;

class BookCategoryController extends Controller
{

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
        $bookCategories = BookCategory::all();

        return apiResponseWithSuccess('BookCategory list retrived successfully', $bookCategories);
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
        $bookCategory = BookCategory::find($id);
        if(!$bookCategory)
            return apiResponseWithError('BookCategory not found.', 404);  
        else 
            return apiResponseWithSuccess('BookCategory retrieved successfully', $bookCategory);
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
        try {
            if($bookCategory->update($request->validated()))
                return apiResponseWithSuccess('BookCategory updated successfully', $bookCategory);
        } catch (\Exception $e) {
            if($e->getCode() == 23000){
                return apiResponseWithError('This category name already exists', 500);
            }
            return apiResponseWithError('Failed to update' . $e->getMessage(), 500);
        }
        
        return apiResponseWithError('Failed to update', 500);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $bookCategory = BookCategory::find($id);

        if(!$bookCategory)
            return apiResponseWithError('BookCategory not found', 404);
        
        try {
            if($bookCategory->delete())
                return apiResponseWithSuccess('BookCategory deleted successfully');
        } catch (Exception $e) {
            return apiResponseWithError('Failed to delete this BookCategory: ' . $e->getMessage());
        }
        
        return apiResponseWithError('Failed to delete this BookCategory', 500);
    }
}
