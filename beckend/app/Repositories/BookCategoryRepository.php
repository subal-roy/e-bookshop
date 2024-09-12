<?php

namespace App\Repositories;

use App\Models\BookCategory;
use App\Repositories\Repository;
use Exception;

class BookCategoryRepository implements Repository{

    public function show($id) {
        $bookCategory = BookCategory::find($id);
        if(!$bookCategory)
            return apiResponseWithError('BookCategory not found.', 404);  
        else 
            return apiResponseWithSuccess('BookCategory retrieved successfully', $bookCategory);
    }

    public function update($request, $bookCategory) {
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

    public function delete($id) {
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