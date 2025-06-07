<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function index()
    {
        $teamMembers = TeamMember::where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('Landing/Index', [
            'teamMembers' => $teamMembers
        ]);
    }
} 