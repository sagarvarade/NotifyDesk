
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    path: string;
}

interface SidebarProps {
    sidebarOpen: boolean;
    activeMenu: string;
    menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, activeMenu, menuItems }) => {
    return (
        <AnimatePresence>
            {sidebarOpen && (
                <motion.aside
                    initial={{ x: -250 }}
                    animate={{ x: 0 }}
                    exit={{ x: -250 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-800 shadow-xl z-50 overflow-hidden"
                >
                    <div className="p-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            NotifyDesk
                        </h2>
                    </div>
                    <nav className="mt-6 px-4">
                        <div className="space-y-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeMenu === item.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    <div className={activeMenu === item.id ? 'animate-bounce' : ''}>
                                        {item.icon}
                                    </div>
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ))}
                        </div>


                    </nav>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
