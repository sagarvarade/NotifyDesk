import React from 'react';
import { motion } from 'framer-motion';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md w-full"
            >
                <div className="flex justify-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                        <FileQuestion className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                    Page Not Found
                </h1>

                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => navigate(-1)}
                        className="gap-2"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </Button>

                    <Link to="/dashboard">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full sm:w-auto gap-2"
                        >
                            <Home size={18} />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
