// index.jsx
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

export default function Index({ auth, galleries }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredGalleries = galleries.filter(gallery =>
        gallery.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (gallery.description && gallery.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        Gallery
                    </h2>
                </div>
            }
        >
            <Head title="Gallery" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="relative w-full md:w-96">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search images..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <Link
                                    href={route('gallery.create')}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors flex items-center gap-2 whitespace-nowrap"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    Add New Image
                                </Link>
                            </div>

                            {filteredGalleries.length === 0 ? (
                                <div className="text-center py-12">
                                    <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">No gallery images found</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Try adjusting your search or add a new image.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredGalleries.map((gallery) => (
                                        <div key={gallery.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-600 transition-transform hover:scale-[1.02]">
                                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-800">
                                                <img
                                                    src={`/storage/${gallery.image_path}`}
                                                    alt={gallery.title}
                                                    className="w-full h-full object-cover cursor-pointer"
                                                    onClick={() => setSelectedImage(gallery)}
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{gallery.title}</h4>
                                                {gallery.description && (
                                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{gallery.description}</p>
                                                )}
                                                <div className="flex justify-end space-x-2">
                                                    <Link
                                                        href={route('gallery.edit', gallery.id)}
                                                        className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors flex items-center gap-1"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route('gallery.destroy', gallery.id)}
                                                        method="delete"
                                                        as="button"
                                                        className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors flex items-center gap-1"
                                                        onClick={(e) => {
                                                            if (!confirm('Are you sure you want to delete this image?')) {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Preview Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
                        <div className="relative">
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 text-white dark:text-gray-300 bg-black dark:bg-gray-700 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img
                                src={`/storage/${selectedImage.image_path}`}
                                alt={selectedImage.title}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="text-gray-600 dark:text-gray-300 mt-2">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}