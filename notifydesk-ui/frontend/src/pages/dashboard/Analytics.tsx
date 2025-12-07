
import React from 'react';
import { motion } from 'framer-motion';

const Analytics: React.FC = () => {
    return (
        <motion.div
            key="analytics"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Analytics
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                Track key metrics and performance indicators
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    {
                        label: 'Total Pageviews',
                        value: '45,231',
                        change: '+12.5%',
                        icon: '📊',
                    },
                    {
                        label: 'Unique Visitors',
                        value: '12,584',
                        change: '+8.2%',
                        icon: '👥',
                    },
                    {
                        label: 'Bounce Rate',
                        value: '24.5%',
                        change: '-3.1%',
                        icon: '📉',
                    },
                    {
                        label: 'Avg. Session Time',
                        value: '4m 32s',
                        change: '+5.7%',
                        icon: '⏱️',
                    },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                            {stat.label}
                        </p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            {stat.value}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                        Traffic by Source
                    </h2>
                    <div className="space-y-4">
                        {['Direct', 'Organic Search', 'Social Media', 'Referral'].map((source, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                                <span className="text-slate-700 dark:text-slate-300">{source}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{
                                                width: `${Math.random() * 80 + 20}%`,
                                            }}
                                        />
                                    </div>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 w-12 text-right">
                                        {Math.floor(Math.random() * 40 + 10)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                        Top Pages
                    </h2>
                    <div className="space-y-3">
                        {[
                            { page: '/', views: '12,534' },
                            { page: '/products', views: '8,342' },
                            { page: '/about', views: '6,234' },
                            { page: '/contact', views: '4,128' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                                    {item.page}
                                </span>
                                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                                    {item.views}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Analytics;
