import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ stats }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Total Members Card */}
                        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Active Members
                                            </dt>
                                            <dd className="text-3xl font-semibold text-gray-900 dark:text-white">
                                                {stats.active_members}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
                                <div className="text-sm">
                                    <Link href={route('team-members.index')} className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                        View all members
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Achievements Card */}
                        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Published Achievements
                                            </dt>
                                            <dd className="text-3xl font-semibold text-gray-900 dark:text-white">
                                                {stats.published_achievements}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
                                <div className="text-sm">
                                    <Link href={route('achievements.index')} className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                        View all achievements
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Total Gallery Images Card */}
                        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                                                Gallery Images
                                            </dt>
                                            <dd className="text-3xl font-semibold text-gray-900 dark:text-white">
                                                {stats.total_gallery_images}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
                                <div className="text-sm">
                                    <Link href={route('gallery.index')} className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                        View all images
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Members List */}
                    <div className="mt-8">
                        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="p-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                    Recent Team Members
                                </h3>
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                                        {stats.latest_members.map((member) => (
                                            <li key={member.id} className="py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        {member.image_path ? (
                                                            <img
                                                                className="h-10 w-10 rounded-full"
                                                                src={`/storage/${member.image_path}`}
                                                                alt={member.name}
                                                            />
                                                        ) : (
                                                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                                <span className="text-blue-600 font-medium">
                                                                    {member.name.charAt(0)}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                                            {member.name}
                                                        </p>
                                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                            {member.position}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route('team-members.edit', member.id)}
                                                            className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-600"
                                                        >
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Achievements List */}
                    <div className="mt-8">
                        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
                            <div className="p-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                    Recent Achievements
                                </h3>
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                                        {stats.latest_achievements.map((achievement) => (
                                            <li key={achievement.id} className="py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        {achievement.image_path ? (
                                                            <img
                                                                className="h-10 w-10 rounded-lg object-cover"
                                                                src={`/storage/${achievement.image_path}`}
                                                                alt={achievement.title}
                                                            />
                                                        ) : (
                                                            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                                                <span className="text-blue-600 font-medium">
                                                                    {achievement.title.charAt(0)}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                                            {achievement.title}
                                                        </p>
                                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                            {new Date(achievement.achievement_date).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            href={route('achievements.edit', achievement.id)}
                                                            className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-600"
                                                        >
                                                            View
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
