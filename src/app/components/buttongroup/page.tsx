'use client';

import { useState } from 'react';
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";

export default function ButtonGroupPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Button Group Component</h1>
        <p className="text-gray-600 mt-2">Group buttons together horizontally or vertically</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          {/* Horizontal Button Group */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Horizontal Button Group</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Primary Variant</p>
                <ButtonGroup variant="horizontal">
                  <Button variant="outlined">Left</Button>
                  <Button variant="outlined">Middle</Button>
                  <Button variant="outlined">Right</Button>
                </ButtonGroup>
              </div>

              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Multiple Buttons</p>
                <ButtonGroup variant="horizontal">
                  <Button variant="outlined">One</Button>
                  <Button variant="outlined">Two</Button>
                  <Button variant="outlined">Three</Button>
                  <Button variant="outlined">Four</Button>
                </ButtonGroup>
              </div>
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
{`<ButtonGroup variant="horizontal">
  <Button variant="outlined">Left</Button>
  <Button variant="outlined">Middle</Button>
  <Button variant="outlined">Right</Button>
</ButtonGroup>

<ButtonGroup variant="horizontal">
  <Button variant="outlined">One</Button>
  <Button variant="outlined">Two</Button>
  <Button variant="outlined">Three</Button>
  <Button variant="outlined">Four</Button>
</ButtonGroup>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Vertical Button Group */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Vertical Button Group</h3>
            <div className="p-4 rounded-lg inline-block">
              <p className="text-sm text-gray-600 mb-3 font-medium">Vertical Stack</p>
              <ButtonGroup variant="vertical">
                <Button variant="outlined">Top</Button>
                <Button variant="outlined">Middle</Button>
                <Button variant="outlined">Bottom</Button>
              </ButtonGroup>
            </div>            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('vertical')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['vertical'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['vertical'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['vertical'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<ButtonGroup variant="vertical">
  <Button variant="outlined">Top</Button>
  <Button variant="outlined">Middle</Button>
  <Button variant="outlined">Bottom</Button>
</ButtonGroup>`}
                  </pre>
                </div>
              )}
            </div>            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('vertical')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['vertical'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['vertical'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['vertical'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<ButtonGroup variant="vertical">
  <Button variant="outlined">Top</Button>
  <Button variant="outlined">Middle</Button>
  <Button variant="outlined">Bottom</Button>
</ButtonGroup>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Different Variants */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Different Button Variants</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Primary Buttons</p>
                <ButtonGroup variant="horizontal">
                  <Button variant="primary">Save</Button>
                  <Button variant="primary">Save & Close</Button>
                  <Button variant="primary">Save & New</Button>
                </ButtonGroup>
              </div>

              <div className="p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3 font-medium">Secondary Buttons</p>
                <ButtonGroup variant="horizontal">
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="secondary">Reset</Button>
                  <Button variant="secondary">Clear</Button>
                </ButtonGroup>
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
{`<ButtonGroup variant="horizontal">
  <Button variant="primary">Save</Button>
  <Button variant="primary">Save & Close</Button>
  <Button variant="primary">Save & New</Button>
</ButtonGroup>

<ButtonGroup variant="horizontal">
  <Button variant="secondary">Cancel</Button>
  <Button variant="secondary">Reset</Button>
  <Button variant="secondary">Clear</Button>
</ButtonGroup>`}
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
{`<ButtonGroup variant="horizontal">
  <Button variant="outlined">Left</Button>
  <Button variant="outlined">Middle</Button>
  <Button variant="outlined">Right</Button>
</ButtonGroup>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
