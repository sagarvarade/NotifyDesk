
import React from 'react';
import { Menu, Search, Filter, Bell, User, Settings as SettingsIcon } from 'lucide-react';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
    setSidebarOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
    dropdownOpen: boolean;
    setDropdownOpen: (open: boolean) => void;
    handleLogout: () => void;
    user: { name: string; email: string; avatar?: string } | null;
}

const Header: React.FC<HeaderProps> = ({
    setSidebarOpen,
    dropdownOpen,
    setDropdownOpen,
    handleLogout,
    user
}) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 dark:border-slate-700">
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setSidebarOpen((prev) => !prev)}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        <Menu size={20} className="text-slate-600 dark:text-slate-300" />
                    </button>
                    <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-700 rounded-lg px-4 py-2 w-64">
                        <Search size={18} className="text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none focus:outline-none ml-2 w-full text-slate-700 dark:text-slate-200"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors relative">
                        <Filter size={20} className="text-slate-600 dark:text-slate-300" />
                    </button>
                    {/* Theme Toggle */}
                    <div className="flex items-center gap-2 mr-2">
                        <button onClick={toggleTheme} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                            {theme === 'light' ? (
                                <Sun size={20} className="text-amber-500" />
                            ) : (
                                <Moon size={20} className="text-blue-400" />
                            )}
                        </button>
                    </div>
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors relative">
                        <Bell size={20} className="text-slate-600 dark:text-slate-300" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
                        >
                            <img
                                src={user?.avatar}
                                alt="Profile"
                                className="w-8 h-8 rounded-full border-2 border-slate-200 dark:border-slate-600"
                            />
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                    {user?.name}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Admin
                                </p>
                            </div>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 animate-in fade-in slide-in-from-top-2">
                                <button className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2">
                                    <User size={16} /> Profile
                                </button>
                                <button className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2">
                                    <SettingsIcon size={16} /> Settings
                                </button>
                                <div className="my-1 border-t border-slate-100 dark:border-slate-700" />
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
