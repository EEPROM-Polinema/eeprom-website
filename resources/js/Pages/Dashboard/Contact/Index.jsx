import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Contact({ contact }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        email: contact?.email || '',
        whatsapp_name: contact?.whatsapp_name || '',
        whatsapp_number: contact?.whatsapp_number || '',
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('contact.update'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                    Contact Information
                </h2>
            }
        >
            <Head title="Contact Information" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="whatsapp_name" value="WhatsApp Contact Name" />
                                    <TextInput
                                        id="whatsapp_name"
                                        type="text"
                                        name="whatsapp_name"
                                        value={data.whatsapp_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('whatsapp_name', e.target.value)}
                                    />
                                    <InputError message={errors.whatsapp_name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="whatsapp_number" value="WhatsApp Number" />
                                    <TextInput
                                        id="whatsapp_number"
                                        type="text"
                                        name="whatsapp_number"
                                        value={data.whatsapp_number}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('whatsapp_number', e.target.value)}
                                        placeholder="Example: 6281234567890"
                                    />
                                    <InputError message={errors.whatsapp_number} className="mt-2" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                                    {recentlySuccessful && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} 