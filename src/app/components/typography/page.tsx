'use client';

import { useState } from 'react';
import Typography from "@/components/ui/Typography";

export default function TypographyPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Typography Component</h1>
        <p className="text-gray-600 mt-2">Text components with various styles and colors</p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {/* Headings */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Headings</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg">
                <Typography variant="h1">Heading 1</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="h2">Heading 2</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="h3">Heading 3</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="h4">Heading 4</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="h5">Heading 5</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="h6">Heading 6</Typography>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('headings')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['headings'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['headings'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['headings'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Subtitles */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Subtitles</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg">
                <Typography variant="subtitle1">Subtitle 1 - Medium weight text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="subtitle2">Subtitle 2 - Smaller medium weight text</Typography>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('subtitles')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['subtitles'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['subtitles'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['subtitles'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<Typography variant="subtitle1">Subtitle 1 - Medium weight text</Typography>
<Typography variant="subtitle2">Subtitle 2 - Smaller medium weight text</Typography>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Body Text</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg">
                <Typography variant="body1">
                  Body 1 - This is the default body text. Perfect for paragraphs and general content.
                </Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body2">
                  Body 2 - Smaller body text. Ideal for secondary information and descriptions.
                </Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="caption">
                  Caption - Very small text for labels, captions, and helper text.
                </Typography>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('body')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['body'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['body'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['body'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<Typography variant="body1">
  Body 1 - This is the default body text.
</Typography>

<Typography variant="body2">
  Body 2 - Smaller body text.
</Typography>

<Typography variant="caption">
  Caption - Very small text.
</Typography>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg">
                <Typography variant="body1" color="primary">Primary Color Text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" color="secondary">Secondary Color Text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" color="success">Success Color Text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" color="error">Error Color Text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" color="warning">Warning Color Text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" color="default">Default Color Text</Typography>
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
{`<Typography variant="body1" color="primary">Primary Color Text</Typography>
<Typography variant="body1" color="secondary">Secondary Color Text</Typography>
<Typography variant="body1" color="success">Success Color Text</Typography>
<Typography variant="body1" color="error">Error Color Text</Typography>
<Typography variant="body1" color="warning">Warning Color Text</Typography>
<Typography variant="body1" color="default">Default Color Text</Typography>`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Alignment */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Text Alignment</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg">
                <Typography variant="body1" align="left">Left aligned text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" align="center">Center aligned text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" align="right">Right aligned text</Typography>
              </div>
              <div className="p-4 rounded-lg">
                <Typography variant="body1" align="justify">
                  Justified text - This longer paragraph demonstrates how justify alignment distributes text evenly across the full width of the container.
                </Typography>
              </div>
            </div>
            
            {/* Code Section */}
            <div className="mt-4">
              <button
                onClick={() => toggleSection('alignment')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${openSections['alignment'] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {openSections['alignment'] ? 'Hide Code' : 'Show Code'}
              </button>
              {openSections['alignment'] && (
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                  <pre className="text-sm">
{`<Typography variant="body1" align="left">Left aligned text</Typography>
<Typography variant="body1" align="center">Center aligned text</Typography>
<Typography variant="body1" align="right">Right aligned text</Typography>
<Typography variant="body1" align="justify">
  Justified text - This longer paragraph demonstrates justify alignment.
</Typography>`}
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
{`<Typography variant="h3" color="primary" align="center">
  Welcome to Our App
</Typography>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

