import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ teamMembers }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMembers = teamMembers.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Team Members
                    </h2>
                    <Link
                        href={route('team-members.create')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Add New Member
                    </Link>
                </div>
            }
        >
            <Head title="Team Members" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search members..."
                                    className="w-full px-4 py-2 border rounded-md"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredMembers.map((member) => (
                                    <div key={member.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                                        <div className="relative h-48">
                                            {member.image_path ? (
                                                <img
                                                    src={`/storage/${member.image_path}`}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                                                    <span className="text-gray-400">No image</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {member.position}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                                {member.description}
                                            </p>
                                            <div className="mt-4 flex justify-end space-x-2">
                                                <Link
                                                    href={route('team-members.edit', member.id)}
                                                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route('team-members.destroy', member.id)}
                                                    method="delete"
                                                    as="button"
                                                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 