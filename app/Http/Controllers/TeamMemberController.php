<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class TeamMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teamMembers = TeamMember::orderBy('order')->get();
        return Inertia::render('Dashboard/TeamMembers/Index', [
            'teamMembers' => $teamMembers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/TeamMembers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('team-members', 'public');
            $validated['image_path'] = $path;
        }

        // Set the order to be the last position
        $validated['order'] = TeamMember::max('order') + 1;

        TeamMember::create($validated);

        return redirect()->route('team-members.index')
            ->with('success', 'Team member created successfully.');
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
    public function edit(TeamMember $teamMember)
    {
        return Inertia::render('Dashboard/TeamMembers/Edit', [
            'teamMember' => $teamMember
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TeamMember $teamMember)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'order' => 'required|integer|min:1|unique:team_members,order,' . $teamMember->id,
            'is_active' => 'boolean'
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($teamMember->image_path) {
                Storage::disk('public')->delete($teamMember->image_path);
            }
            $path = $request->file('image')->store('team-members', 'public');
            $validated['image_path'] = $path;
        }

        $teamMember->update($validated);

        return redirect()->route('team-members.index')
            ->with('success', 'Team member updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TeamMember $teamMember)
    {
        if ($teamMember->image_path) {
            Storage::disk('public')->delete($teamMember->image_path);
        }
        
        $teamMember->delete();

        return redirect()->route('team-members.index')
            ->with('success', 'Team member deleted successfully.');
    }

    /**
     * Reorder team members.
     */
    public function reorder(Request $request)
    {
        $validated = $request->validate([
            'orders' => 'required|array',
            'orders.*.id' => 'required|exists:team_members,id',
            'orders.*.order' => 'required|integer|min:1'
        ]);

        foreach ($validated['orders'] as $order) {
            TeamMember::where('id', $order['id'])->update(['order' => $order['order']]);
        }

        return back()->with('success', 'Team members reordered successfully');
    }
}
