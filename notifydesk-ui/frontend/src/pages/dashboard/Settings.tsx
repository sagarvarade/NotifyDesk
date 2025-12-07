
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Settings: React.FC = () => {
    const { user } = useAuth();

    // Settings Form State
    const [settingsForm, setSettingsForm] = useState({
        fullName: user?.name || '',
        email: user?.email || '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        notifications: true,
    });

    const handleSettingsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Settings updated:', settingsForm);
        alert('Settings saved successfully!');
    };

    return (
        <motion.div
            key="settings"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Settings
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                Manage your account preferences and settings
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                        Profile
                    </h2>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mb-4" />
                        <p className="font-semibold text-slate-900 dark:text-white">
                            {user?.name}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            {user?.email}
                        </p>
                        <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700">
                            Edit Profile
                        </Button>
                    </div>
                </motion.div>

                {/* Account Settings Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                        Account Settings
                    </h2>
                    <form onSubmit={handleSettingsSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Full Name
                            </label>
                            <Input
                                type="text"
                                value={settingsForm.fullName}
                                onChange={(e) =>
                                    setSettingsForm({
                                        ...settingsForm,
                                        fullName: e.target.value,
                                    })
                                }
                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Email Address
                            </label>
                            <Input
                                type="email"
                                value={settingsForm.email}
                                onChange={(e) =>
                                    setSettingsForm({
                                        ...settingsForm,
                                        email: e.target.value,
                                    })
                                }
                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                            />
                        </div>

                        <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                                Change Password
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Current Password
                                    </label>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        value={settingsForm.currentPassword}
                                        onChange={(e) =>
                                            setSettingsForm({
                                                ...settingsForm,
                                                currentPassword: e.target.value,
                                            })
                                        }
                                        className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        New Password
                                    </label>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        value={settingsForm.newPassword}
                                        onChange={(e) =>
                                            setSettingsForm({
                                                ...settingsForm,
                                                newPassword: e.target.value,
                                            })
                                        }
                                        className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Confirm Password
                                    </label>
                                    <Input
                                        type="password"
                                        placeholder="••••••••"
                                        value={settingsForm.confirmPassword}
                                        onChange={(e) =>
                                            setSettingsForm({
                                                ...settingsForm,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button
                                type="submit"
                                className="flex-1 bg-blue-600 hover:bg-blue-700"
                            >
                                Save Changes
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 dark:border-slate-600"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Settings;
