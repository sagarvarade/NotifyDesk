
import React from 'react';
import { motion } from 'framer-motion';

const Overview: React.FC = () => {
    return (
        <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Users', value: '2,543', color: 'bg-blue-500' },
                    { label: 'New Messages', value: '847', color: 'bg-green-500' },
                    { label: 'Active Sessions', value: '123', color: 'bg-purple-500' },
                    { label: 'Pending Tasks', value: '42', color: 'bg-orange-500' },
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className={`${card.color} w-12 h-12 rounded-lg mb-4 opacity-20`} />
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                            {card.label}
                        </p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                            {card.value}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Overview;
