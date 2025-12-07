
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Mail, Lock, Search, Calendar, Palette } from 'lucide-react';

const InputsDemo: React.FC = () => {
    const [sliderValue, setSliderValue] = useState([50]);
    const [switchState, setSwitchState] = useState(false);
    const [dateValue, setDateValue] = useState('');

    return (
        <motion.div
            key="inputs-demo"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 p-4"
        >
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    UI Elements & Input Compendium
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                    A comprehensive showcase of all available input components and reusable UI elements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Standard Text Inputs */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 space-y-6 border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">Aa</span>
                        Text Inputs
                    </h2>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="default-input">Default Input</Label>
                            <Input id="default-input" placeholder="Type something..." />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email-input">Email Input</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input id="email-input" type="email" placeholder="Email address" className="pl-9" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password-input">Password Input</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input id="password-input" type="password" placeholder="Password" className="pl-9" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="search-input">Search Input</Label>
                            <div className="relative">
                                <Search className="absolute right-3 top-3 h-4 w-4 text-slate-400" />
                                <Input id="search-input" type="search" placeholder="Search..." className="rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selection Controls */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 space-y-6 border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">☑️</span>
                        Selection Controls
                    </h2>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <Label>Checkbox</Label>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-300"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label>Switch Toggle</Label>
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode" checked={switchState} onCheckedChange={setSwitchState} />
                                <Label htmlFor="airplane-mode">Airplane Mode</Label>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label>Radio Group</Label>
                            <RadioGroup defaultValue="option-one">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Comfortable</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">Compact</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                {/* Advanced Inputs */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 space-y-6 border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">⚙️</span>
                        Advanced Inputs
                    </h2>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Slider (Range)</Label>
                            <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                className="w-full"
                                onValueChange={setSliderValue}
                            />
                            <p className="text-sm text-slate-500 text-right">Value: {sliderValue}</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="select-demo">Select Dropdown</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="date-input">Date Picker (Native)</Label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input
                                    id="date-input"
                                    type="date"
                                    className="pl-9"
                                    value={dateValue}
                                    onChange={(e) => setDateValue(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* File & Others */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 space-y-6 border border-slate-100 dark:border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg">📂</span>
                        File & Text Area
                    </h2>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="file-input">File Upload</Label>
                            <div className="flex items-center gap-2">
                                <Input id="file-input" type="file" className="file:bg-blue-50 file:text-blue-700 file:border-0 file:rounded-md file:px-2 file:py-1 file:mr-4 file:text-sm file:font-semibold hover:file:bg-blue-100" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="color-input">Color Picker</Label>
                            <div className="flex items-center gap-4">
                                <div className="relative w-full">
                                    <Palette className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                    <Input id="color-input" type="color" className="h-10 w-full p-1 pl-9" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="textarea-input">Text Area</Label>
                            <Textarea id="textarea-input" placeholder="Type your message here..." className="min-h-[100px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </div>
        </motion.div>
    );
};

export default InputsDemo;
