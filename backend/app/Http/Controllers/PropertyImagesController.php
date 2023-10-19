<?php

namespace App\Http\Controllers;

use App\Models\Property_images;
use Illuminate\Http\Request;

class PropertyImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Property_images::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $property_image = new Property_images();

        $property_image->image_path = $request->image_path;
        $property_image->property_id = $request->property_id;
       
        $property_image->save();

        return response()->json([
            "message" => "Succesful",
            "data" => $property_image,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Property_images  $property_images
     * @return \Illuminate\Http\Response
     */
    public function show(Property_images $property_images)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Property_images  $property_images
     * @return \Illuminate\Http\Response
     */
    public function edit(Property_images $property_images)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Property_images  $property_images
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property_images $property_images)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Property_images  $property_images
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property_images $property_images)
    {
        //
    }
}
