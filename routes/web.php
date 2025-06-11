<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeamMemberController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AchievementController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ContactController;
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
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('team-members', TeamMemberController::class);
    Route::resource('achievements', AchievementController::class);
    Route::resource('gallery', GalleryController::class);
    
    // Contact Routes
    Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
    Route::patch('/contact', [ContactController::class, 'update'])->name('contact.update');
});

require __DIR__.'/auth.php';
