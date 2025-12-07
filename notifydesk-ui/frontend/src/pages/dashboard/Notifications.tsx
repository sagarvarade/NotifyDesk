
import React from 'react';
import { motion } from 'framer-motion';

const Notifications: React.FC = () => {
    return (
        <motion.div
            key="notifications"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Notifications
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                Stay updated with all your alerts and notifications
            </p>
            <div className="space-y-4">
                {[
                    {
                        title: 'New User Signup',
                        description: 'A new user has registered on your platform',
                        time: '2 hours ago',
                        type: 'info',
                    },
                    {
                        title: 'System Maintenance',
                        description: 'Scheduled maintenance completed successfully',
                        time: '5 hours ago',
                        type: 'success',
                    },
                    {
                        title: 'Security Alert',
                        description: 'Multiple login attempts detected from unknown location',
                        time: '1 day ago',
                        type: 'warning',
                    },
                    {
                        title: 'Payment Received',
                        description: 'Payment of $1,299.99 has been received',
                        time: '2 days ago',
                        type: 'success',
                    },
                ].map((notif, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 ${notif.type === 'info'
                                ? 'border-l-blue-500'
                                : notif.type === 'success'
                                    ? 'border-l-green-500'
                                    : 'border-l-yellow-500'
                            }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <p className="font-semibold text-slate-900 dark:text-white text-lg">
                                    {notif.title}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                    {notif.description}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
                                    {notif.time}
                                </p>
                            </div>
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-4 ${notif.type === 'info'
                                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                                        : notif.type === 'success'
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
                                    }`}
                            >
                                {notif.type}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Notifications;
