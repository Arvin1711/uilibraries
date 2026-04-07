'use client';

import React, { useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

interface SidebarSubItem {
  id: string;
  label: string;
  href: string;
}

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  subItems?: SidebarSubItem[];
}

export default function Sidebar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const [expandedItems, setExpandedItems] = useState<string[]>(['components']);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const sidebarItems: SidebarItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      href: '/',
    },
    {
      id: 'components',
      label: 'Components',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      subItems: [
        { id: 'buttons', label: 'Buttons', href: '/components/buttons' },
        { id: 'buttongroup', label: 'Button Group', href: '/components/buttongroup' },
        { id: 'typography', label: 'Typography', href: '/components/typography' },
        { id: 'radio', label: 'Radio', href: '/components/radio' },
        { id: 'checkbox', label: 'Checkbox', href: '/components/checkbox' },
        { id: 'icons', label: 'Icons', href: '/components/icons' },
      ],
    },
    {
      id: 'colors',
      label: 'Colors',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      href: '/components/colors',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      href: '/settings',
    },
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-900 text-white min-h-screen transition-all duration-300 ease-in-out flex flex-col fixed left-0 top-0 bottom-0 z-20`}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-xl font-bold">Admin Panel</h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors ml-auto"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              {item.subItems ? (
                // Menu item with submenu
                <div 
                  className="relative"
                  onMouseEnter={() => isCollapsed && setHoveredItem(item.id)}
                  onMouseLeave={() => isCollapsed && setHoveredItem(null)}
                >
                  <button
                    onClick={() => !isCollapsed && toggleExpanded(item.id)}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors group w-full"
                    title={isCollapsed ? item.label : undefined}
                  >
                    <span className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <>
                        <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            expandedItems.includes(item.id) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                  
                  {/* Submenu - expanded mode */}
                  {!isCollapsed && expandedItems.includes(item.id) && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <a
                            href={subItem.href}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors text-sm text-gray-300 hover:text-white"
                          >
                            <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Submenu - collapsed mode (popup on right) */}
                  {isCollapsed && hoveredItem === item.id && (
                    <div className="absolute left-full top-0 ml-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-30">
                      <div className="px-4 py-2">
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                      </div>
                      <ul className="py-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <a
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 transition-colors text-sm text-gray-300 hover:text-white"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                // Regular menu item without submenu
                <a
                  href={item.href}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors group"
                  title={isCollapsed ? item.label : undefined}
                >
                  <span className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold">AD</span>
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-gray-400 truncate">admin@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
