
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Reports: React.FC = () => {
    return (
        <motion.div
            key="reports"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Reports
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                View and manage all your generated reports
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        title: 'Monthly Performance',
                        date: 'December 2025',
                        status: 'Completed',
                        color: 'from-green-400 to-green-600',
                    },
                    {
                        title: 'User Activity Report',
                        date: 'November 2025',
                        status: 'Completed',
                        color: 'from-blue-400 to-blue-600',
                    },
                    {
                        title: 'Revenue Summary',
                        date: 'October 2025',
                        status: 'Completed',
                        color: 'from-purple-400 to-purple-600',
                    },
                    {
                        title: 'Q4 Quarterly Report',
                        date: 'December 2025',
                        status: 'Pending',
                        color: 'from-yellow-400 to-yellow-600',
                    },
                    {
                        title: 'Customer Feedback',
                        date: 'December 2025',
                        status: 'In Progress',
                        color: 'from-pink-400 to-pink-600',
                    },
                    {
                        title: 'System Performance',
                        date: 'December 2025',
                        status: 'Completed',
                        color: 'from-indigo-400 to-indigo-600',
                    },
                ].map((report, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className={`h-24 rounded-lg bg-gradient-to-br ${report.color} mb-4`} />
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                            {report.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            {report.date}
                        </p>
                        <div className="flex items-center justify-between">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${report.status === 'Completed'
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                    : report.status === 'Pending'
                                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
                                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                                    }`}
                            >
                                {report.status}
                            </span>
                            <Button variant="ghost" className="text-blue-600 dark:text-blue-400 text-sm">
                                Download
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Reports;
