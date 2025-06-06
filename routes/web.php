<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
});


Route::middleware('auth')->group(function () {
    // User Dashboard
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
    
    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Member Routes
    Route::get('/voting', fn() => Inertia::render('Voting/Index'))->name('voting');
    Route::get('/uang-kas', fn() => Inertia::render('Payment/Index'))->name('uang-kas');
    
    // Admin Routes
    Route::prefix('admin')->group(function () {
        Route::get('/', fn() => Inertia::render('Admin/Dashboard'))->name('admin.dashboard');
    });
});

require __DIR__.'/auth.php';
