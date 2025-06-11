<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contact = Contact::first();
        return Inertia::render('Dashboard/Contact/Index', [
            'contact' => $contact
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'email' => 'nullable|email|max:255',
            'whatsapp_name' => 'nullable|string|max:255',
            'whatsapp_number' => 'nullable|string|max:255',
        ]);

        $contact = Contact::first();
        if ($contact) {
            $contact->update($validated);
        } else {
            Contact::create($validated);
        }

        return redirect()->back()->with('success', 'Contact information updated successfully.');
    }
} 