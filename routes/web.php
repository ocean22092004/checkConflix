<?php

use App\Http\Controllers\GhnController;
use GPBMetadata\Google\Api\Http;
use Illuminate\Support\Facades\Route;

Route::resource('ghn', GhnController::class);
Route::put('ghn/update', [GhnController::class, 'update'])->name('ghn.update');
Route::post('/ghn/update-session', [GhnController::class, 'updateSession'])->name('ghn.update-sesion');
Route::post('/ghn/update-shipment/{id}', [GhnController::class, 'updateShipment'])->name('ghn.update-shipment');
Route::post('/ghn/cancel-order/{id}', [GhnController::class, 'cancelOrder'])->name('ghn.cancel-order');

