'use client';

import { useState } from 'react';
import Button from "@/components/ui/Button";
import { AddIcon, CheckIcon, CloseIcon, ArrowRightIcon, DownloadIcon, EditIcon, DeleteIcon, SettingsIcon, HeartIcon } from "@/components/ui/Icon";

export default function ButtonsPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Button Component</h1>
        <p className="text-gray-600 mt-2">Versatile button component with multiple variants and sizes</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Button Variants Section */}
        <div className="space-y-6">
          {/* Variants */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Primary</p>
                <Button variant="primary">Primary Button</Button>
              </div>
              
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Secondary</p>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Outlined</p>
                <Button variant="outlined">Outlined Button</Button>
              </div>
              
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Text</p>
                <Button variant="text">Text Button</Button>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('variants')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['variants'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['variants'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['variants'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outlined">Outlined Button</Button>
<Button variant="text">Text Button</Button>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Small</p>
                <Button variant="primary" size="small">Small Button</Button>
              </div>
              
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Medium</p>
                <Button variant="primary" size="medium">Medium Button</Button>
              </div>
              
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Large</p>
                <Button variant="primary" size="large">Large Button</Button>
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
{`<Button variant="primary" size="small">Small Button</Button>
<Button variant="primary" size="medium">Medium Button</Button>
<Button variant="primary" size="large">Large Button</Button>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Icon Buttons */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Icon Buttons</h3>
            
            {/* Buttons with Start Icons */}
            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-3 font-medium">With Start Icon</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" startIcon={<AddIcon />}>
                  Add Item
                </Button>
                <Button variant="secondary" startIcon={<CheckIcon />}>
                  Save
                </Button>
                <Button variant="outlined" startIcon={<CloseIcon />}>
                  Cancel
                </Button>
              </div>
            </div>

            {/* Buttons with End Icons */}
            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-3 font-medium">With End Icon</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" endIcon={<ArrowRightIcon />}>
                  Next
                </Button>
                <Button variant="outlined" endIcon={<DownloadIcon />}>
                  Download
                </Button>
              </div>
            </div>

            {/* Icon Only Buttons */}
            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-3 font-medium">Icon Only</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" iconOnly startIcon={<EditIcon />} />
                <Button variant="secondary" iconOnly startIcon={<DeleteIcon />} />
                <Button variant="outlined" iconOnly startIcon={<SettingsIcon />} />
                <Button variant="text" iconOnly startIcon={<HeartIcon />} />
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('icons')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['icons'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['icons'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['icons'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`import { AddIcon, ArrowRightIcon, DownloadIcon } from '@/components/ui/Icon';

// With Start Icon
<Button variant="primary" startIcon={<AddIcon />}>
  Add Item
</Button>

// With End Icon
<Button variant="primary" endIcon={<ArrowRightIcon />}>
  Next
</Button>

// Icon Only
<Button variant="primary" iconOnly startIcon={<EditIcon />} />
<Button variant="outlined" iconOnly startIcon={<SettingsIcon />} />
<Button variant="text" iconOnly startIcon={<HeartIcon />} />`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Normal</p>
                <Button variant="primary">Normal State</Button>
              </div>
              
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Disabled</p>
                <Button variant="primary" disabled>Disabled State</Button>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('states')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['states'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['states'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['states'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<Button variant="primary">Normal State</Button>
<Button variant="primary" disabled>Disabled State</Button>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Usage Example</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`<Button variant="primary" size="medium">
  Click Me
</Button>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

