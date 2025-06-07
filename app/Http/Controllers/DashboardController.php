<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_members' => TeamMember::count(),
            'active_members' => TeamMember::where('is_active', true)->count(),
            'latest_members' => TeamMember::latest()->take(5)->get(),
        ];

        return Inertia::render('Dashboard/Index', [
            'stats' => $stats
        ]);
    }
} 