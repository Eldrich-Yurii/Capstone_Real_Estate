<?php

namespace App\Http\Controllers;

use App\Models\Property_locations;
use Illuminate\Http\Request;

class PropertyLocationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Property_locations::all();
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
        $property_location = new Property_locations();

        $property_location->city = $request->city;
        $property_location->province = $request->province;
        $property_location->property_id = $request->property_id;
       
        $property_location->save();

        return response()->json([
            "message" => "Succesful",
            "data" => $property_location,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Property_locations  $property_locations
     * @return \Illuminate\Http\Response
     */
    public function show(Property_locations $property_locations)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Property_locations  $property_locations
     * @return \Illuminate\Http\Response
     */
    public function edit(Property_locations $property_locations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Property_locations  $property_locations
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property_locations $property_locations)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Property_locations  $property_locations
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property_locations $property_locations)
    {
        //
    }
}
