<?php

use App\Http\Controllers\AccountsController;
use App\Http\Controllers\DevelopersController;
use App\Http\Controllers\InquiriesController;
use App\Http\Controllers\PropertiesController;
use App\Http\Controllers\PropertyImagesController;
use App\Http\Controllers\PropertyLocationsController;
use App\Http\Controllers\StatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::apiResource('accounts', AccountsController::class);
// Route::apiResource('developers', DevelopersController::class);
Route::apiResource('inquiries', InquiriesController::class);
Route::apiResource('status', StatusController::class);
Route::apiResource('properties', PropertiesController::class);
Route::apiResource('property_images', PropertyImagesController::class);
Route::apiResource('property_locations', PropertyLocationsController::class);


Route::get('accounts', [AccountsController::class, 'index']);
Route::post('login', [AccountsController::class, 'login']);
Route::post('signup', [AccountsController::class,'signup']);

// Route::delete('delete_properties/{id}', [PropertiesController::class,'destroy']);