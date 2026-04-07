'use client';

import { useState } from 'react';
import Radio, { RadioGroup } from "@/components/ui/Radio";

export default function RadioPage() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedOrientation, setSelectedOrientation] = useState('vertical');
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Radio Component</h1>
        <p className="text-gray-600 mt-2">Radio buttons for selecting a single option from a group</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {/* Basic Radio */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Basic Radio Buttons</h3>
            <div className="p-4 rounded-lg">
              <RadioGroup 
                name="basic" 
                value={selectedValue} 
                onChange={setSelectedValue}
              >
                <Radio value="option1" label="Option 1" id="option1" />
                <Radio value="option2" label="Option 2" id="option2" />
                <Radio value="option3" label="Option 3" id="option3" />
              </RadioGroup>
              <p className="text-sm text-gray-600 mt-4">Selected: {selectedValue}</p>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('basic')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['basic'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['basic'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['basic'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<RadioGroup name="basic" value={selectedValue} onChange={setSelectedValue}>
  <Radio value="option1" label="Option 1" id="option1" />
  <Radio value="option2" label="Option 2" id="option2" />
  <Radio value="option3" label="Option 3" id="option3" />
</RadioGroup>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Radio with Helper Text */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">With Helper Text</h3>
            <div className="p-4 rounded-lg">
              <RadioGroup 
                name="helper" 
                value={selectedSize} 
                onChange={setSelectedSize}
              >
                <Radio 
                  value="small" 
                  label="Small" 
                  id="small" 
                  helperText="Compact size for tight spaces"
                />
                <Radio 
                  value="medium" 
                  label="Medium" 
                  id="medium" 
                  helperText="Default size for most use cases"
                />
                <Radio 
                  value="large" 
                  label="Large" 
                  id="large" 
                  helperText="Larger size for better visibility"
                />
              </RadioGroup>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('helper')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['helper'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['helper'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['helper'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<RadioGroup name="helper" value={selectedSize} onChange={setSelectedSize}>
  <Radio 
    value="small" 
    label="Small" 
    id="small" 
    helperText="Compact size for tight spaces"
  />
  <Radio 
    value="medium" 
    label="Medium" 
    id="medium" 
    helperText="Default size for most use cases"
  />
</RadioGroup>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Horizontal Orientation */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Horizontal Layout</h3>
            <div className="p-4 rounded-lg">
              <RadioGroup 
                name="orientation" 
                value={selectedOrientation} 
                onChange={setSelectedOrientation}
                orientation="horizontal"
              >
                <Radio value="vertical" label="Vertical" id="vertical" />
                <Radio value="horizontal" label="Horizontal" id="horizontal" />
                <Radio value="grid" label="Grid" id="grid" />
              </RadioGroup>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('horizontal')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['horizontal'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['horizontal'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['horizontal'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<RadioGroup 
  name="orientation" 
  value={selectedOrientation} 
  onChange={setSelectedOrientation}
  orientation="horizontal"
>
  <Radio value="vertical" label="Vertical" id="vertical" />
  <Radio value="horizontal" label="Horizontal" id="horizontal" />
  <Radio value="grid" label="Grid" id="grid" />
</RadioGroup>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Disabled State</h3>
            <div className="p-4 rounded-lg">
              <RadioGroup name="disabled" value="enabled">
                <Radio value="enabled" label="Enabled Option" id="enabled" />
                <Radio value="disabled1" label="Disabled Option 1" id="disabled1" disabled />
                <Radio value="disabled2" label="Disabled Option 2" id="disabled2" disabled />
              </RadioGroup>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('disabled')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['disabled'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['disabled'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['disabled'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<RadioGroup name="disabled" value="enabled">
  <Radio value="enabled" label="Enabled Option" id="enabled" />
  <Radio value="disabled1" label="Disabled Option 1" id="disabled1" disabled />
  <Radio value="disabled2" label="Disabled Option 2" id="disabled2" disabled />
</RadioGroup>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Error State */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Error State</h3>
            <div className="p-4 rounded-lg">
              <RadioGroup name="error" value="">
                <Radio 
                  value="option1" 
                  label="Option 1" 
                  id="error1" 
                  error 
                  helperText="This field is required"
                />
                <Radio value="option2" label="Option 2" id="error2" />
              </RadioGroup>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('error')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['error'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['error'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['error'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<RadioGroup name="error" value="">
  <Radio 
    value="option1" 
    label="Option 1" 
    id="error1" 
    error 
    helperText="This field is required"
  />
  <Radio value="option2" label="Option 2" id="error2" />
</RadioGroup>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Practical Example */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Practical Example - Plan Selection</h3>
            <div className="p-4 rounded-lg bg-gray-50">
              <RadioGroup name="plan" value="pro">
                <Radio 
                  value="basic" 
                  label="Basic Plan" 
                  id="basic" 
                  helperText="$9/month - Perfect for individuals"
                />
                <Radio 
                  value="pro" 
                  label="Pro Plan" 
                  id="pro" 
                  helperText="$29/month - Best for professionals"
                />
                <Radio 
                  value="enterprise" 
                  label="Enterprise Plan" 
                  id="enterprise" 
                  helperText="$99/month - For large teams"
                />
              </RadioGroup>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('practical')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['practical'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['practical'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['practical'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<RadioGroup name="plan" value="pro">
  <Radio 
    value="basic" 
    label="Basic Plan" 
    id="basic" 
    helperText="$9/month - Perfect for individuals"
  />
  <Radio 
    value="pro" 
    label="Pro Plan" 
    id="pro" 
    helperText="$29/month - Best for professionals"
  />
  <Radio 
    value="enterprise" 
    label="Enterprise Plan" 
    id="enterprise" 
    helperText="$99/month - For large teams"
  />
</RadioGroup>`}
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
{`<RadioGroup name="options" value={selected} onChange={setSelected}>
  <Radio value="1" label="Option 1" id="opt1" />
  <Radio value="2" label="Option 2" id="opt2" />
  <Radio value="3" label="Option 3" id="opt3" />
</RadioGroup>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

