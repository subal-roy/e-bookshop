<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterVendorRequest;
use App\Http\Requests\UpdateVendorRequest;
use App\Models\Vendor;
use Illuminate\Http\Request;
use PHPUnit\TextUI\Configuration\Php;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vendors = Vendor::paginate(10);
        return apiResponseWithSuccess('Vendor list with pagination retrieved successfully', $vendors);
    }

    public function list()
    {
        $vendors = Vendor::all();
        return apiResponseWithSuccess('Vendor list retrieved successfully', $vendors);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function registerVendor(RegisterVendorRequest $request)
    {
        try{
            $vendor = Vendor::create($request->validated());
            return apiResponseWithSuccess('Vendor registered successfully.', $vendor);
        }catch(\Exception $e) {
            return apiResponseWithError('Error while registering vendor: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Vendor $vendor)
    {
        return apiResponseWithSuccess('Vendor retrieved successfully.', $vendor);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVendorRequest $request, Vendor $vendor)
    {
        try{
            $vendor->update($request->validated());
            return apiResponseWithSuccess('Vendor updated successfully.', $vendor);
        }catch(\Exception $e) {
            return apiResponseWithError('Error while updating vendor: '. $e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vendor $vendor)
    {  
        try {
            $vendor->delete();
            return apiResponseWithSuccess('Vendor deleted successfully.');
        } catch (\Exception $e) {
            return apiResponseWithError('Error while deleting the vedor: '. $e->getMessage());
        }
    }
}
