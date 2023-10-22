<?php

namespace App\Http\Controllers;

use App\Http\Resources\InquiriesResource;
use App\Models\Inquiries;
use Illuminate\Http\Request;

class InquiriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(["data" => InquiriesResource::collection(Inquiries::all())]);
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
        $inquiry = new Inquiries();

        $inquiry->first_name = $request->first_name;
        $inquiry->middle_name = $request->middle_name;
        $inquiry->last_name = $request->last_name;
        $inquiry->birth_date = $request->birth_date;
        $inquiry->contact_number = $request->contact_number;
        $inquiry->email = $request->email;
        $inquiry->property_id = $request->property_id;
        $inquiry->monthly_salary = $request->monthly_salary;
       
        $inquiry->save();

        return response()->json([
            "message" => "Succesful",
            "data" => $inquiry,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inquiries  $inquiries
     * @return \Illuminate\Http\Response
     */
    public function show(Inquiries $inquiries)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inquiries  $inquiries
     * @return \Illuminate\Http\Response
     */
    public function edit(Inquiries $inquiries)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Inquiries  $inquiries
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Select * from inquiries where id = $id
        $inquiry = Inquiries::find($id);

        
        $inquiry->first_name = $request->first_name;
        $inquiry->middle_name = $request->middle_name;
        $inquiry->last_name = $request->last_name;
        $inquiry->birth_date = $request->birth_date;
        $inquiry->contact_number = $request->contact_number;
        $inquiry->email = $request->email;
        $inquiry->property_id = $request->property_id;
        $inquiry->monthly_salary = $request->monthly_salary;
       
        $inquiry->save();

        return response()->json([
            "message" => "Update Succesful!",
            "data" => $inquiry,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inquiries  $inquiries
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inquiries $id)
    {
        // Select * from inquiries where id = $id;
        $inquiry = Inquiries::find($id);

        $inquiry->delete();

        return response()->json([
            "message" => "Deleted Succesfully!",
            "data" => $inquiry,
        ]);
    }
}
