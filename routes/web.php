<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/shop-left-sidebar', function () {
    return inertia('ShopLeftSidebar');
});

Route::get('/blog', function () {
    return inertia('Blog');
});

Route::get('/show', function () {
    return inertia('ShowProduct');
});

Route::get('/test', function () {
    return inertia('Test');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
