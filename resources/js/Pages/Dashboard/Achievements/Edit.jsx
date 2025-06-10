import { Head, useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from 'react';

export default function Edit({ auth, achievement }) {
    const [imagePreview, setImagePreview] = useState(
        achievement.image_path ? `/storage/${achievement.image_path}` : null
    );
    
    const { data, setData, put, processing, errors } = useForm({
        title: achievement.title,
        description: achievement.description,
        image: null,
        achievement_date: achievement.achievement_date,
        competition_name: achievement.competition_name || '',
        position: achievement.position || '',
        is_published: achievement.is_published,
        _method: 'PUT'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('achievements.update', achievement.id));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Achievement</h2>}
        >
            <Head title="Edit Achievement" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="description" value="Description" />
                                    <TextArea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('description', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="current_image" value="Current Image" />
                                    <div className="mt-2">
                                        <img
                                            src={`/storage/${achievement.image_path}`}
                                            alt={achievement.title}
                                            className="w-48 h-48 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <InputLabel htmlFor="new_image" value="New Image (optional)" />
                                    <input
                                        type="file"
                                        id="new_image"
                                        name="image"
                                        className="mt-1 block w-full"
                                        onChange={handleImageChange}
                                        accept="image/*"
                                    />
                                    <InputError message={errors.image} className="mt-2" />
                                    {imagePreview && (
                                        <div className="mt-2">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-48 h-48 object-cover rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <InputLabel htmlFor="achievement_date" value="Achievement Date" />
                                    <TextInput
                                        id="achievement_date"
                                        type="date"
                                        name="achievement_date"
                                        value={data.achievement_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('achievement_date', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.achievement_date} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="competition_name" value="Competition Name" />
                                    <TextInput
                                        id="competition_name"
                                        type="text"
                                        name="competition_name"
                                        value={data.competition_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('competition_name', e.target.value)}
                                    />
                                    <InputError message={errors.competition_name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="position" value="Position" />
                                    <TextInput
                                        id="position"
                                        type="text"
                                        name="position"
                                        value={data.position}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('position', e.target.value)}
                                    />
                                    <InputError message={errors.position} className="mt-2" />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="is_published"
                                        checked={data.is_published}
                                        onChange={(e) => setData('is_published', e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                    <InputLabel htmlFor="is_published" value="Published" className="ml-2" />
                                </div>

                                <div className="flex items-center justify-end">
                                    <Link
                                        href={route('achievements.index')}
                                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                    >
                                        Cancel
                                    </Link>
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Update Achievement
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 