'use client';

import { useState } from 'react';
import Checkbox from "@/components/ui/Checkbox";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);
  const [interests, setInterests] = useState({
    sports: false,
    music: true,
    reading: false,
  });
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInterestChange = (key: keyof typeof interests) => {
    setInterests(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Checkbox Component</h1>
        <p className="text-gray-600 mt-2">Checkbox inputs with labels, helper text, and states</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {/* Basic Checkbox */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Basic Checkbox</h3>
            <div className="p-4 rounded-lg space-y-3">
              <Checkbox label="Accept terms and conditions" />
              <Checkbox label="Subscribe to newsletter" />
              <Checkbox label="Remember me" defaultChecked />
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
{`<Checkbox label="Accept terms and conditions" />
<Checkbox label="Subscribe to newsletter" />
<Checkbox label="Remember me" defaultChecked />`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Checkbox with Helper Text */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">With Helper Text</h3>
            <div className="p-4 rounded-lg space-y-4">
              <Checkbox 
                label="Enable notifications" 
                helperText="You will receive email notifications for important updates"
              />
              <Checkbox 
                label="Two-factor authentication" 
                helperText="Add an extra layer of security to your account"
                defaultChecked
              />
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
{`<Checkbox 
  label="Enable notifications" 
  helperText="You will receive email notifications for important updates"
/>
<Checkbox 
  label="Two-factor authentication" 
  helperText="Add an extra layer of security to your account"
  defaultChecked
/>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Disabled State</h3>
            <div className="p-4 rounded-lg space-y-3">
              <Checkbox label="Disabled unchecked" disabled />
              <Checkbox label="Disabled checked" disabled defaultChecked />
              <Checkbox 
                label="Disabled with helper text" 
                helperText="This option is not available"
                disabled 
              />
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
{`<Checkbox label="Disabled unchecked" disabled />
<Checkbox label="Disabled checked" disabled defaultChecked />
<Checkbox 
  label="Disabled with helper text" 
  helperText="This option is not available"
  disabled 
/>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Error State */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Error State</h3>
            <div className="p-4 rounded-lg space-y-3">
              <Checkbox 
                label="I agree to the terms" 
                error 
                helperText="You must accept the terms to continue"
              />
              <Checkbox 
                label="I confirm I'm 18 or older" 
                error 
                helperText="This field is required"
              />
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
{`<Checkbox 
  label="I agree to the terms" 
  error 
  helperText="You must accept the terms to continue"
/>
<Checkbox 
  label="I confirm I'm 18 or older" 
  error 
  helperText="This field is required"
/>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Controlled Checkbox */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Controlled Checkbox</h3>
            <div className="p-4 rounded-lg space-y-4">
              <Checkbox 
                label="Controlled checkbox" 
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                helperText={checked ? "Checkbox is checked" : "Checkbox is unchecked"}
              />
              <p className="text-sm text-gray-600">Current state: {checked ? 'Checked' : 'Unchecked'}</p>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('controlled')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['controlled'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['controlled'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['controlled'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`const [checked, setChecked] = useState(false);

<Checkbox 
  label="Controlled checkbox" 
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  helperText={checked ? "Checkbox is checked" : "Checkbox is unchecked"}
/>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Practical Example */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Horizontal Layout</h3>
            <div className="p-4 rounded-lg bg-gray-50">
              <p className="text-sm font-medium text-gray-700 mb-3">Select your interests:</p>
              <div className="flex gap-6">
                <Checkbox 
                  label="Sports" 
                  checked={interests.sports}
                  onChange={() => handleInterestChange('sports')}
                />
                <Checkbox 
                  label="Music" 
                  checked={interests.music}
                  onChange={() => handleInterestChange('music')}
                />
                <Checkbox 
                  label="Reading" 
                  checked={interests.reading}
                  onChange={() => handleInterestChange('reading')}
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Selected: {Object.keys(interests).filter(k => interests[k as keyof typeof interests]).join(', ') || 'None'}
              </p>
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
{`const [interests, setInterests] = useState({
  sports: false,
  music: true,
  reading: false,
});

const handleInterestChange = (key: keyof typeof interests) => {
  setInterests(prev => ({ ...prev, [key]: !prev[key] }));
};

<div className="flex gap-6">
  <Checkbox 
    label="Sports" 
    checked={interests.sports}
    onChange={() => handleInterestChange('sports')}
  />
  <Checkbox 
    label="Music" 
    checked={interests.music}
    onChange={() => handleInterestChange('music')}
  />
  <Checkbox 
    label="Reading" 
    checked={interests.reading}
    onChange={() => handleInterestChange('reading')}
  />
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
{`import Checkbox from '@/components/ui/Checkbox';

<Checkbox 
  label="Accept terms" 
  helperText="Please read and accept our terms"
  onChange={(e) => console.log(e.target.checked)}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
