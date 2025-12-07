
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Messages: React.FC = () => {
    // Messages Form State
    const [messageForm, setMessageForm] = useState({
        recipient: '',
        subject: '',
        message: '',
    });

    const handleMessageSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Message sent:', messageForm);
        setMessageForm({ recipient: '', subject: '', message: '' });
        alert('Message sent successfully!');
    };

    return (
        <motion.div
            key="messages"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Messages
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                Send and manage your messages
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Send Message Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                        Send Message
                    </h2>
                    <form onSubmit={handleMessageSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Recipient
                            </label>
                            <Input
                                type="email"
                                placeholder="recipient@example.com"
                                value={messageForm.recipient}
                                onChange={(e) =>
                                    setMessageForm({ ...messageForm, recipient: e.target.value })
                                }
                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Subject
                            </label>
                            <Input
                                type="text"
                                placeholder="Message subject"
                                value={messageForm.subject}
                                onChange={(e) =>
                                    setMessageForm({ ...messageForm, subject: e.target.value })
                                }
                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Message
                            </label>
                            <Textarea
                                placeholder="Type your message here..."
                                value={messageForm.message}
                                onChange={(e) =>
                                    setMessageForm({ ...messageForm, message: e.target.value })
                                }
                                className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                            Send Message
                        </Button>
                    </form>
                </motion.div>

                {/* Recent Messages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                        Recent Messages
                    </h2>
                    <div className="space-y-3">
                        {[
                            { name: 'Sarah Anderson', time: '2 mins ago' },
                            { name: 'Mike Johnson', time: '1 hour ago' },
                            { name: 'Emma Davis', time: '3 hours ago' },
                        ].map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                            >
                                <p className="font-medium text-slate-900 dark:text-white text-sm">
                                    {msg.name}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {msg.time}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Messages;
