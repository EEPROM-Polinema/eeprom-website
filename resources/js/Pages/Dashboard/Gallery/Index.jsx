import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

export default function Index({ auth, galleries }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gallery Management</h2>}
        >
            <Head title="Gallery Management" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold">Gallery Images</h3>
                                <Link
                                    href={route('gallery.create')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Add New Image
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {galleries.map((gallery) => (
                                    <div key={gallery.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <div className="relative aspect-w-16 aspect-h-9">
                                            <img
                                                src={`/storage/${gallery.image_path}`}
                                                alt={gallery.title}
                                                className="object-cover w-full h-48 cursor-pointer"
                                                onClick={() => setSelectedImage(gallery)}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-lg font-semibold mb-2">{gallery.title}</h4>
                                            {gallery.description && (
                                                <p className="text-gray-600 text-sm mb-4">{gallery.description}</p>
                                            )}
                                            <div className="flex justify-end space-x-2">
                                                <Link
                                                    href={route('gallery.edit', gallery.id)}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route('gallery.destroy', gallery.id)}
                                                    method="delete"
                                                    as="button"
                                                    className="text-red-600 hover:text-red-800"
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

            {/* Image Preview Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg max-w-2xl w-full mx-4">
                        <div className="relative">
                            <img
                                src={`/storage/${selectedImage.image_path}`}
                                alt={selectedImage.title}
                                className="w-full h-auto rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="text-gray-600 mt-2">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
} 