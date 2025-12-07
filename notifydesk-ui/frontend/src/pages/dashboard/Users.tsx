
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Users: React.FC = () => {
    // Users Form State
    const [userForm, setUserForm] = useState({
        name: '',
        email: '',
        role: 'Editor',
    });

    const handleUserSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('User added:', userForm);
        setUserForm({ name: '', email: '', role: 'Editor' });
        alert('User added successfully!');
    };

    return (
        <motion.div
            key="users"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Users
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                Manage your team members and add new users
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Add User Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                        Add New User
                    </h2>
                    <form onSubmit={handleUserSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Full Name
                            </label>
                            <Input
                                type="text"
                                placeholder="John Doe"
                                value={userForm.name}
                                onChange={(e) =>
                                    setUserForm({ ...userForm, name: e.target.value })
                                }
                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Email Address
                            </label>
                            <Input
                                type="email"
                                placeholder="john@example.com"
                                value={userForm.email}
                                onChange={(e) =>
                                    setUserForm({ ...userForm, email: e.target.value })
                                }
                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Role
                            </label>
                            <Select
                                value={userForm.role}
                                onValueChange={(value) =>
                                    setUserForm({ ...userForm, role: value })
                                }
                            >
                                <SelectTrigger className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600">
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Viewer">Viewer</SelectItem>
                                    <SelectItem value="Editor">Editor</SelectItem>
                                    <SelectItem value="Admin">Admin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700"
                        >
                            Add User
                        </Button>
                    </form>
                </motion.div>

                {/* Users List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                        Team Members
                    </h2>
                    <div className="space-y-3">
                        {[
                            { name: 'John Doe', role: 'Admin', status: 'Active', avatar: '/images/male.png' },
                            { name: 'Jane Smith', role: 'Editor', status: 'Active', avatar: '/images/female.png' },
                            { name: 'Bob Johnson', role: 'Viewer', status: 'Inactive', avatar: '/images/male.png' },
                            { name: 'Alice Brown', role: 'Editor', status: 'Active', avatar: '/images/female.png' },
                        ].map((user, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-600 object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white text-sm">
                                                {user.name}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {user.role}
                                            </p>
                                        </div>
                                    </div>
                                    <span
                                        className={`text-xs font-medium px-2 py-1 rounded ${user.status === 'Active'
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-400'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Users;
