import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Users, Bell, Settings as SettingsIcon, CreditCard, PieChart, Component } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

// Components
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

interface MenuItem {
  id: string; // Used for highlighting, should match the path segment
  label: string;
  icon: React.ReactNode;
  path: string;
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Determine active menu based on current path
  const currentPath = location.pathname.split('/').pop() || 'overview';

  const menuItems: MenuItem[] = [
    {
      id: 'overview',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard/overview'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <PieChart size={20} />,
      path: '/dashboard/analytics'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <MessageSquare size={20} />,
      path: '/dashboard/messages'
    },
    {
      id: 'users',
      label: 'Users',
      icon: <Users size={20} />,
      path: '/dashboard/users'
    },
    {
      id: 'inputs',
      label: 'UI Elements',
      icon: <Component size={20} />,
      path: '/dashboard/inputs'
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: <CreditCard size={20} />,
      path: '/dashboard/reports'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell size={20} />,
      path: '/dashboard/notifications'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon size={20} />,
      path: '/dashboard/settings'
    },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeMenu={currentPath} // Use current path segment for highlighting
        menuItems={menuItems}
      />

      <div className={`flex-1 flex flex-col h-full transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header
          setSidebarOpen={setSidebarOpen}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          handleLogout={handleLogout}
          user={user}
        />

        <main className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
