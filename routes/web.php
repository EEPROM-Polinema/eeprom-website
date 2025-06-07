<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeamMemberController;
use App\Http\Controllers\LandingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [LandingController::class, 'index'])->name('landing');

Route::middleware('auth')->group(function () {
    // User Dashboard
    Route::get('/dashboard', fn() => Inertia::render('Dashboard/Index'))->name('dashboard');
    
    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');

    Route::resource('team-members', TeamMemberController::class);
});

require __DIR__.'/auth.php';
