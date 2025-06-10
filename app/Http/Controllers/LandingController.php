<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use App\Models\Achievement;
use App\Models\Gallery;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        $teamMembers = TeamMember::where('is_active', true)
            ->orderBy('order')
            ->get();
        $achievements = Achievement::where('is_published', true)
            ->orderBy('achievement_date', 'desc')
            ->get();
        $galleries = Gallery::latest()->get();

        return Inertia::render('Landing/Index', [
            'teamMembers' => $teamMembers,
            'achievements' => $achievements,
            'galleries' => $galleries
        ]);
    }
} 