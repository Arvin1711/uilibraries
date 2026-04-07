'use client';

import { useState } from 'react';
import * as Icons from '@/components/ui/Icon';

export default function IconsPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const copyIconCode = (iconName: string) => {
    const code = `<${iconName} />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const iconList = [
    { name: 'AddIcon', component: Icons.AddIcon },
    { name: 'DeleteIcon', component: Icons.DeleteIcon },
    { name: 'EditIcon', component: Icons.EditIcon },
    { name: 'SettingsIcon', component: Icons.SettingsIcon },
    { name: 'CheckIcon', component: Icons.CheckIcon },
    { name: 'CloseIcon', component: Icons.CloseIcon },
    { name: 'ArrowRightIcon', component: Icons.ArrowRightIcon },
    { name: 'ArrowLeftIcon', component: Icons.ArrowLeftIcon },
    { name: 'ArrowUpIcon', component: Icons.ArrowUpIcon },
    { name: 'ArrowDownIcon', component: Icons.ArrowDownIcon },
    { name: 'DownloadIcon', component: Icons.DownloadIcon },
    { name: 'UploadIcon', component: Icons.UploadIcon },
    { name: 'SearchIcon', component: Icons.SearchIcon },
    { name: 'MenuIcon', component: Icons.MenuIcon },
    { name: 'HomeIcon', component: Icons.HomeIcon },
    { name: 'UserIcon', component: Icons.UserIcon },
    { name: 'HeartIcon', component: Icons.HeartIcon },
    { name: 'StarIcon', component: Icons.StarIcon },
    { name: 'MailIcon', component: Icons.MailIcon },
    { name: 'BellIcon', component: Icons.BellIcon },
    { name: 'CalendarIcon', component: Icons.CalendarIcon },
    { name: 'FileIcon', component: Icons.FileIcon },
    { name: 'FolderIcon', component: Icons.FolderIcon },
    { name: 'ImageIcon', component: Icons.ImageIcon },
    { name: 'InfoIcon', component: Icons.InfoIcon },
    { name: 'WarningIcon', component: Icons.WarningIcon },
    { name: 'ErrorIcon', component: Icons.ErrorIcon },
    { name: 'SuccessIcon', component: Icons.SuccessIcon },
    { name: 'ChevronRightIcon', component: Icons.ChevronRightIcon },
    { name: 'ChevronLeftIcon', component: Icons.ChevronLeftIcon },
    { name: 'ChevronUpIcon', component: Icons.ChevronUpIcon },
    { name: 'ChevronDownIcon', component: Icons.ChevronDownIcon },
    { name: 'MoreVerticalIcon', component: Icons.MoreVerticalIcon },
    { name: 'MoreHorizontalIcon', component: Icons.MoreHorizontalIcon },
    { name: 'EyeIcon', component: Icons.EyeIcon },
    { name: 'EyeOffIcon', component: Icons.EyeOffIcon },
    { name: 'LockIcon', component: Icons.LockIcon },
    { name: 'UnlockIcon', component: Icons.UnlockIcon },
    { name: 'RefreshIcon', component: Icons.RefreshIcon },
    { name: 'ShareIcon', component: Icons.ShareIcon },
    { name: 'CopyIcon', component: Icons.CopyIcon },
    { name: 'TrashIcon', component: Icons.TrashIcon },
    { name: 'SaveIcon', component: Icons.SaveIcon },
    { name: 'PrintIcon', component: Icons.PrintIcon },
    { name: 'FilterIcon', component: Icons.FilterIcon },
    { name: 'SortIcon', component: Icons.SortIcon },
    { name: 'GridIcon', component: Icons.GridIcon },
    { name: 'ListIcon', component: Icons.ListIcon },
  ];

  const filteredIcons = iconList.filter(icon =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Icon Component</h1>
        <p className="text-gray-600 mt-2">Icon library for your application</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {/* Search Bar */}
          <div>
            <div className="relative">
              <Icons.SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="small" />
              <input
                type="text"
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-700 text-gray-700"
              />
            </div>
          </div>

          {/* All Icons Grid */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              {searchQuery ? `Found ${filteredIcons.length} icons` : `All Icons (${iconList.length})`}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {filteredIcons.map(({ name, component: IconComponent }) => (
                <div
                  key={name}
                  onClick={() => copyIconCode(name)}
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-blue-50 hover:border-blue-300 border border-transparent transition-all cursor-pointer relative group"
                  title="Click to copy"
                >
                  <IconComponent size="medium" />
                  <span className="text-xs text-gray-600 mt-2 text-center break-words">
                    {name.replace('Icon', '')}
                  </span>
                  {copiedIcon === name && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                      Copied!
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {filteredIcons.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No icons found matching "{searchQuery}"
              </div>
            )}
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('all')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['all'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['all'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['all'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`import { AddIcon, DeleteIcon, EditIcon } from '@/components/ui/Icon';

<AddIcon size="medium" />
<DeleteIcon size="large" />
<EditIcon size="small" />`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Icon Sizes */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Icon Sizes</h3>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Icons.SettingsIcon size="small" />
                <span className="text-sm text-gray-600">Small (16px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.SettingsIcon size="medium" />
                <span className="text-sm text-gray-600">Medium (24px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.SettingsIcon size="large" />
                <span className="text-sm text-gray-600">Large (32px)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.SettingsIcon size={48} />
                <span className="text-sm text-gray-600">Custom (48px)</span>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('sizes')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['sizes'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['sizes'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['sizes'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<SettingsIcon size="small" />   // 16px
<SettingsIcon size="medium" />  // 24px (default)
<SettingsIcon size="large" />   // 32px
<SettingsIcon size={48} />      // Custom size`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Icon Colors */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Icon Colors</h3>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Icons.HeartIcon size="large" color="currentColor" />
                <span className="text-sm text-gray-600">Default</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.HeartIcon size="large" color="#3B82F6" />
                <span className="text-sm text-gray-600">Blue</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.HeartIcon size="large" color="#EF4444" />
                <span className="text-sm text-gray-600">Red</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.HeartIcon size="large" color="#10B981" />
                <span className="text-sm text-gray-600">Green</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icons.HeartIcon size="large" color="#F59E0B" />
                <span className="text-sm text-gray-600">Orange</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-purple-600">
                <Icons.HeartIcon size="large" />
                <span className="text-sm text-gray-600">currentColor</span>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('colors')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['colors'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['colors'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['colors'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<HeartIcon color="currentColor" />  // Default
<HeartIcon color="#3B82F6" />       // Blue
<HeartIcon color="#EF4444" />       // Red

// Or use with Tailwind classes
<div className="text-purple-600">
  <HeartIcon />  // Will be purple
</div>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Usage Example */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Usage Example</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`import { AddIcon, DeleteIcon, EditIcon } from '@/components/ui/Icon';

function MyComponent() {
  return (
    <div>
      <AddIcon size="medium" color="#3B82F6" />
      <DeleteIcon size={32} />
      <EditIcon className="text-green-600" />
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
