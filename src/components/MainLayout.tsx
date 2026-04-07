'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import Header from '@/components/Header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`flex-1 flex flex-col transition-all duration-300 ${
      isCollapsed ? 'ml-20' : 'ml-64'
    }`}>
      <Header />
      <main className="flex-1 bg-gray-50 mt-[57px]">
        {children}
      </main>
    </div>
  );
}
