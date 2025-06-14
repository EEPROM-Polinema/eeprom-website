<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AchievementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $achievements = Achievement::latest()->paginate(10);
        return Inertia::render('Dashboard/Achievements/Index', [
            'achievements' => $achievements
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Achievements/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'achievement_date' => 'required|date',
            'competition_name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'is_published' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('achievements', 'public');
            $validated['image_path'] = $path;
        }

        Achievement::create($validated);

        return redirect()->route('achievements.index')
            ->with('success', 'Achievement created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Achievement $achievement)
    {
        return Inertia::render('Dashboard/Achievements/Edit', [
            'achievement' => $achievement
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Achievement $achievement)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'achievement_date' => 'required|date',
            'competition_name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'is_published' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($achievement->image_path) {
                Storage::disk('public')->delete($achievement->image_path);
            }
            $path = $request->file('image')->store('achievements', 'public');
            $validated['image_path'] = $path;
        }

        $achievement->update($validated);

        return redirect()->route('achievements.index')
            ->with('success', 'Achievement updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Achievement $achievement)
    {
        if ($achievement->image_path) {
            Storage::disk('public')->delete($achievement->image_path);
        }
        
        $achievement->delete();

        return redirect()->route('achievements.index')
            ->with('success', 'Achievement deleted successfully.');
    }
}
