'use client';

import React, { useState } from 'react';

interface ColorShade {
    name: string;
    value: string;
    variable: string;
}

interface ColorPalette {
    name: string;
    shades: ColorShade[];
}

export default function ColorsPage() {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const colorPalettes: ColorPalette[] = [
        {
            name: 'Primary',
            shades: [
                { name: '50', value: '#eff6ff', variable: 'var(--primary-50)' },
                { name: '100', value: '#dbeafe', variable: 'var(--primary-100)' },
                { name: '200', value: '#bfdbfe', variable: 'var(--primary-200)' },
                { name: '300', value: '#93c5fd', variable: 'var(--primary-300)' },
                { name: '400', value: '#60a5fa', variable: 'var(--primary-400)' },
                { name: '500', value: '#3b82f6', variable: 'var(--primary-500)' },
                { name: '600', value: '#2563eb', variable: 'var(--primary-600)' },
                { name: '700', value: '#1d4ed8', variable: 'var(--primary-700)' },
                { name: '800', value: '#1e40af', variable: 'var(--primary-800)' },
                { name: '900', value: '#1e3a8a', variable: 'var(--primary-900)' },
                { name: '950', value: '#172554', variable: 'var(--primary-950)' },
            ],
        },
        {
            name: 'Secondary',
            shades: [
                { name: '50', value: '#f8fafc', variable: 'var(--secondary-50)' },
                { name: '100', value: '#f1f5f9', variable: 'var(--secondary-100)' },
                { name: '200', value: '#e2e8f0', variable: 'var(--secondary-200)' },
                { name: '300', value: '#cbd5e1', variable: 'var(--secondary-300)' },
                { name: '400', value: '#94a3b8', variable: 'var(--secondary-400)' },
                { name: '500', value: '#64748b', variable: 'var(--secondary-500)' },
                { name: '600', value: '#475569', variable: 'var(--secondary-600)' },
                { name: '700', value: '#334155', variable: 'var(--secondary-700)' },
                { name: '800', value: '#1e293b', variable: 'var(--secondary-800)' },
                { name: '900', value: '#0f172a', variable: 'var(--secondary-900)' },
                { name: '950', value: '#020617', variable: 'var(--secondary-950)' },
            ],
        },
        {
            name: 'Success',
            shades: [
                { name: '50', value: '#f0fdf4', variable: 'var(--success-50)' },
                { name: '100', value: '#dcfce7', variable: 'var(--success-100)' },
                { name: '200', value: '#bbf7d0', variable: 'var(--success-200)' },
                { name: '300', value: '#86efac', variable: 'var(--success-300)' },
                { name: '400', value: '#4ade80', variable: 'var(--success-400)' },
                { name: '500', value: '#22c55e', variable: 'var(--success-500)' },
                { name: '600', value: '#16a34a', variable: 'var(--success-600)' },
                { name: '700', value: '#15803d', variable: 'var(--success-700)' },
                { name: '800', value: '#166534', variable: 'var(--success-800)' },
                { name: '900', value: '#14532d', variable: 'var(--success-900)' },
                { name: '950', value: '#052e16', variable: 'var(--success-950)' },
            ],
        },
        {
            name: 'Warning',
            shades: [
                { name: '50', value: '#fffbeb', variable: 'var(--warning-50)' },
                { name: '100', value: '#fef3c7', variable: 'var(--warning-100)' },
                { name: '200', value: '#fde68a', variable: 'var(--warning-200)' },
                { name: '300', value: '#fcd34d', variable: 'var(--warning-300)' },
                { name: '400', value: '#fbbf24', variable: 'var(--warning-400)' },
                { name: '500', value: '#f59e0b', variable: 'var(--warning-500)' },
                { name: '600', value: '#d97706', variable: 'var(--warning-600)' },
                { name: '700', value: '#b45309', variable: 'var(--warning-700)' },
                { name: '800', value: '#92400e', variable: 'var(--warning-800)' },
                { name: '900', value: '#78350f', variable: 'var(--warning-900)' },
                { name: '950', value: '#451a03', variable: 'var(--warning-950)' },
            ],
        },
        {
            name: 'Error',
            shades: [
                { name: '50', value: '#fef2f2', variable: 'var(--error-50)' },
                { name: '100', value: '#fee2e2', variable: 'var(--error-100)' },
                { name: '200', value: '#fecaca', variable: 'var(--error-200)' },
                { name: '300', value: '#fca5a5', variable: 'var(--error-300)' },
                { name: '400', value: '#f87171', variable: 'var(--error-400)' },
                { name: '500', value: '#ef4444', variable: 'var(--error-500)' },
                { name: '600', value: '#dc2626', variable: 'var(--error-600)' },
                { name: '700', value: '#b91c1c', variable: 'var(--error-700)' },
                { name: '800', value: '#991b1b', variable: 'var(--error-800)' },
                { name: '900', value: '#7f1d1d', variable: 'var(--error-900)' },
                { name: '950', value: '#450a0a', variable: 'var(--error-950)' },
            ],
        },
        {
            name: 'Info',
            shades: [
                { name: '50', value: '#ecfeff', variable: 'var(--info-50)' },
                { name: '100', value: '#cffafe', variable: 'var(--info-100)' },
                { name: '200', value: '#a5f3fc', variable: 'var(--info-200)' },
                { name: '300', value: '#67e8f9', variable: 'var(--info-300)' },
                { name: '400', value: '#22d3ee', variable: 'var(--info-400)' },
                { name: '500', value: '#06b6d4', variable: 'var(--info-500)' },
                { name: '600', value: '#0891b2', variable: 'var(--info-600)' },
                { name: '700', value: '#0e7490', variable: 'var(--info-700)' },
                { name: '800', value: '#155e75', variable: 'var(--info-800)' },
                { name: '900', value: '#164e63', variable: 'var(--info-900)' },
                { name: '950', value: '#083344', variable: 'var(--info-950)' },
            ],
        },
        {
            name: 'Gray',
            shades: [
                { name: '50', value: '#f9fafb', variable: 'var(--gray-50)' },
                { name: '100', value: '#f3f4f6', variable: 'var(--gray-100)' },
                { name: '200', value: '#e5e7eb', variable: 'var(--gray-200)' },
                { name: '300', value: '#d1d5db', variable: 'var(--gray-300)' },
                { name: '400', value: '#9ca3af', variable: 'var(--gray-400)' },
                { name: '500', value: '#6b7280', variable: 'var(--gray-500)' },
                { name: '600', value: '#4b5563', variable: 'var(--gray-600)' },
                { name: '700', value: '#374151', variable: 'var(--gray-700)' },
                { name: '800', value: '#1f2937', variable: 'var(--gray-800)' },
                { name: '900', value: '#111827', variable: 'var(--gray-900)' },
                { name: '950', value: '#030712', variable: 'var(--gray-950)' },
            ],
        },
        {
            name: 'Red',
            shades: [
                { name: '50', value: '#fef2f2', variable: 'var(--red-50)' },
                { name: '100', value: '#fee2e2', variable: 'var(--red-100)' },
                { name: '200', value: '#fecaca', variable: 'var(--red-200)' },
                { name: '300', value: '#fca5a5', variable: 'var(--red-300)' },
                { name: '400', value: '#f87171', variable: 'var(--red-400)' },
                { name: '500', value: '#ef4444', variable: 'var(--red-500)' },
                { name: '600', value: '#dc2626', variable: 'var(--red-600)' },
                { name: '700', value: '#b91c1c', variable: 'var(--red-700)' },
                { name: '800', value: '#991b1b', variable: 'var(--red-800)' },
                { name: '900', value: '#7f1d1d', variable: 'var(--red-900)' },
                { name: '950', value: '#450a0a', variable: 'var(--red-950)' },
            ],
        },
        {
            name: 'Orange',
            shades: [
                { name: '50', value: '#fff7ed', variable: 'var(--orange-50)' },
                { name: '100', value: '#ffedd5', variable: 'var(--orange-100)' },
                { name: '200', value: '#fed7aa', variable: 'var(--orange-200)' },
                { name: '300', value: '#fdba74', variable: 'var(--orange-300)' },
                { name: '400', value: '#fb923c', variable: 'var(--orange-400)' },
                { name: '500', value: '#f97316', variable: 'var(--orange-500)' },
                { name: '600', value: '#ea580c', variable: 'var(--orange-600)' },
                { name: '700', value: '#c2410c', variable: 'var(--orange-700)' },
                { name: '800', value: '#9a3412', variable: 'var(--orange-800)' },
                { name: '900', value: '#7c2d12', variable: 'var(--orange-900)' },
                { name: '950', value: '#431407', variable: 'var(--orange-950)' },
            ],
        },
        {
            name: 'Amber',
            shades: [
                { name: '50', value: '#fffbeb', variable: 'var(--amber-50)' },
                { name: '100', value: '#fef3c7', variable: 'var(--amber-100)' },
                { name: '200', value: '#fde68a', variable: 'var(--amber-200)' },
                { name: '300', value: '#fcd34d', variable: 'var(--amber-300)' },
                { name: '400', value: '#fbbf24', variable: 'var(--amber-400)' },
                { name: '500', value: '#f59e0b', variable: 'var(--amber-500)' },
                { name: '600', value: '#d97706', variable: 'var(--amber-600)' },
                { name: '700', value: '#b45309', variable: 'var(--amber-700)' },
                { name: '800', value: '#92400e', variable: 'var(--amber-800)' },
                { name: '900', value: '#78350f', variable: 'var(--amber-900)' },
                { name: '950', value: '#451a03', variable: 'var(--amber-950)' },
            ],
        },
        {
            name: 'Yellow',
            shades: [
                { name: '50', value: '#fefce8', variable: 'var(--yellow-50)' },
                { name: '100', value: '#fef9c3', variable: 'var(--yellow-100)' },
                { name: '200', value: '#fef08a', variable: 'var(--yellow-200)' },
                { name: '300', value: '#fde047', variable: 'var(--yellow-300)' },
                { name: '400', value: '#facc15', variable: 'var(--yellow-400)' },
                { name: '500', value: '#eab308', variable: 'var(--yellow-500)' },
                { name: '600', value: '#ca8a04', variable: 'var(--yellow-600)' },
                { name: '700', value: '#a16207', variable: 'var(--yellow-700)' },
                { name: '800', value: '#854d0e', variable: 'var(--yellow-800)' },
                { name: '900', value: '#713f12', variable: 'var(--yellow-900)' },
                { name: '950', value: '#422006', variable: 'var(--yellow-950)' },
            ],
        },
        {
            name: 'Lime',
            shades: [
                { name: '50', value: '#f7fee7', variable: 'var(--lime-50)' },
                { name: '100', value: '#ecfccb', variable: 'var(--lime-100)' },
                { name: '200', value: '#d9f99d', variable: 'var(--lime-200)' },
                { name: '300', value: '#bef264', variable: 'var(--lime-300)' },
                { name: '400', value: '#a3e635', variable: 'var(--lime-400)' },
                { name: '500', value: '#84cc16', variable: 'var(--lime-500)' },
                { name: '600', value: '#65a30d', variable: 'var(--lime-600)' },
                { name: '700', value: '#4d7c0f', variable: 'var(--lime-700)' },
                { name: '800', value: '#3f6212', variable: 'var(--lime-800)' },
                { name: '900', value: '#365314', variable: 'var(--lime-900)' },
                { name: '950', value: '#1a2e05', variable: 'var(--lime-950)' },
            ],
        },
        {
            name: 'Green',
            shades: [
                { name: '50', value: '#f0fdf4', variable: 'var(--green-50)' },
                { name: '100', value: '#dcfce7', variable: 'var(--green-100)' },
                { name: '200', value: '#bbf7d0', variable: 'var(--green-200)' },
                { name: '300', value: '#86efac', variable: 'var(--green-300)' },
                { name: '400', value: '#4ade80', variable: 'var(--green-400)' },
                { name: '500', value: '#22c55e', variable: 'var(--green-500)' },
                { name: '600', value: '#16a34a', variable: 'var(--green-600)' },
                { name: '700', value: '#15803d', variable: 'var(--green-700)' },
                { name: '800', value: '#166534', variable: 'var(--green-800)' },
                { name: '900', value: '#14532d', variable: 'var(--green-900)' },
                { name: '950', value: '#052e16', variable: 'var(--green-950)' },
            ],
        },
        {
            name: 'Emerald',
            shades: [
                { name: '50', value: '#ecfdf5', variable: 'var(--emerald-50)' },
                { name: '100', value: '#d1fae5', variable: 'var(--emerald-100)' },
                { name: '200', value: '#a7f3d0', variable: 'var(--emerald-200)' },
                { name: '300', value: '#6ee7b7', variable: 'var(--emerald-300)' },
                { name: '400', value: '#34d399', variable: 'var(--emerald-400)' },
                { name: '500', value: '#10b981', variable: 'var(--emerald-500)' },
                { name: '600', value: '#059669', variable: 'var(--emerald-600)' },
                { name: '700', value: '#047857', variable: 'var(--emerald-700)' },
                { name: '800', value: '#065f46', variable: 'var(--emerald-800)' },
                { name: '900', value: '#064e3b', variable: 'var(--emerald-900)' },
                { name: '950', value: '#022c22', variable: 'var(--emerald-950)' },
            ],
        },
        {
            name: 'Sky',
            shades: [
                { name: '50', value: '#f0f9ff', variable: 'var(--sky-50)' },
                { name: '100', value: '#e0f2fe', variable: 'var(--sky-100)' },
                { name: '200', value: '#bae6fd', variable: 'var(--sky-200)' },
                { name: '300', value: '#7dd3fc', variable: 'var(--sky-300)' },
                { name: '400', value: '#38bdf8', variable: 'var(--sky-400)' },
                { name: '500', value: '#0ea5e9', variable: 'var(--sky-500)' },
                { name: '600', value: '#0284c7', variable: 'var(--sky-600)' },
                { name: '700', value: '#0369a1', variable: 'var(--sky-700)' },
                { name: '800', value: '#075985', variable: 'var(--sky-800)' },
                { name: '900', value: '#0c4a6e', variable: 'var(--sky-900)' },
                { name: '950', value: '#082f49', variable: 'var(--sky-950)' },
            ],
        },
        {
            name: 'Blue',
            shades: [
                { name: '50', value: '#eff6ff', variable: 'var(--blue-50)' },
                { name: '100', value: '#dbeafe', variable: 'var(--blue-100)' },
                { name: '200', value: '#bfdbfe', variable: 'var(--blue-200)' },
                { name: '300', value: '#93c5fd', variable: 'var(--blue-300)' },
                { name: '400', value: '#60a5fa', variable: 'var(--blue-400)' },
                { name: '500', value: '#3b82f6', variable: 'var(--blue-500)' },
                { name: '600', value: '#2563eb', variable: 'var(--blue-600)' },
                { name: '700', value: '#1d4ed8', variable: 'var(--blue-700)' },
                { name: '800', value: '#1e40af', variable: 'var(--blue-800)' },
                { name: '900', value: '#1e3a8a', variable: 'var(--blue-900)' },
                { name: '950', value: '#172554', variable: 'var(--blue-950)' },
            ],
        },
        {
            name: 'Indigo',
            shades: [
                { name: '50', value: '#eef2ff', variable: 'var(--indigo-50)' },
                { name: '100', value: '#e0e7ff', variable: 'var(--indigo-100)' },
                { name: '200', value: '#c7d2fe', variable: 'var(--indigo-200)' },
                { name: '300', value: '#a5b4fc', variable: 'var(--indigo-300)' },
                { name: '400', value: '#818cf8', variable: 'var(--indigo-400)' },
                { name: '500', value: '#6366f1', variable: 'var(--indigo-500)' },
                { name: '600', value: '#4f46e5', variable: 'var(--indigo-600)' },
                { name: '700', value: '#4338ca', variable: 'var(--indigo-700)' },
                { name: '800', value: '#3730a3', variable: 'var(--indigo-800)' },
                { name: '900', value: '#312e81', variable: 'var(--indigo-900)' },
                { name: '950', value: '#1e1b4b', variable: 'var(--indigo-950)' },
            ],
        },
        {
            name: 'Purple',
            shades: [
                { name: '50', value: '#faf5ff', variable: 'var(--purple-50)' },
                { name: '100', value: '#f3e8ff', variable: 'var(--purple-100)' },
                { name: '200', value: '#e9d5ff', variable: 'var(--purple-200)' },
                { name: '300', value: '#d8b4fe', variable: 'var(--purple-300)' },
                { name: '400', value: '#c084fc', variable: 'var(--purple-400)' },
                { name: '500', value: '#a855f7', variable: 'var(--purple-500)' },
                { name: '600', value: '#9333ea', variable: 'var(--purple-600)' },
                { name: '700', value: '#7e22ce', variable: 'var(--purple-700)' },
                { name: '800', value: '#6b21a8', variable: 'var(--purple-800)' },
                { name: '900', value: '#581c87', variable: 'var(--purple-900)' },
                { name: '950', value: '#3b0764', variable: 'var(--purple-950)' },
            ],
        },
        {
            name: 'Pink',
            shades: [
                { name: '50', value: '#fdf2f8', variable: 'var(--pink-50)' },
                { name: '100', value: '#fce7f3', variable: 'var(--pink-100)' },
                { name: '200', value: '#fbcfe8', variable: 'var(--pink-200)' },
                { name: '300', value: '#f9a8d4', variable: 'var(--pink-300)' },
                { name: '400', value: '#f472b6', variable: 'var(--pink-400)' },
                { name: '500', value: '#ec4899', variable: 'var(--pink-500)' },
                { name: '600', value: '#db2777', variable: 'var(--pink-600)' },
                { name: '700', value: '#be185d', variable: 'var(--pink-700)' },
                { name: '800', value: '#9d174d', variable: 'var(--pink-800)' },
                { name: '900', value: '#831843', variable: 'var(--pink-900)' },
                { name: '950', value: '#500724', variable: 'var(--pink-950)' },
            ],
        },
        {
            name: 'Rose',
            shades: [
                { name: '50', value: '#fff1f2', variable: 'var(--rose-50)' },
                { name: '100', value: '#ffe4e6', variable: 'var(--rose-100)' },
                { name: '200', value: '#fecdd3', variable: 'var(--rose-200)' },
                { name: '300', value: '#fda4af', variable: 'var(--rose-300)' },
                { name: '400', value: '#fb7185', variable: 'var(--rose-400)' },
                { name: '500', value: '#f43f5e', variable: 'var(--rose-500)' },
                { name: '600', value: '#e11d48', variable: 'var(--rose-600)' },
                { name: '700', value: '#be123c', variable: 'var(--rose-700)' },
                { name: '800', value: '#9f1239', variable: 'var(--rose-800)' },
                { name: '900', value: '#881337', variable: 'var(--rose-900)' },
                { name: '950', value: '#4c0519', variable: 'var(--rose-950)' },
            ],
        },
    ];

    const copyToClipboard = (text: string, colorName: string) => {
        navigator.clipboard.writeText(text);
        setCopiedColor(colorName);
        setTimeout(() => {
            setCopiedColor(null);
        }, 2000);
    };

    const getTextColor = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 155 ? '#000000' : '#FFFFFF';
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-2xl font-bold mb-1 text-gray-600">Color System</h1>
                <p className="text-sm text-gray-600">
                    A comprehensive color palette system inspired by Tailwind CSS. Click on any color to copy its CSS variable.
                </p>
            </div>

            <div className="space-y-4">
                {colorPalettes.map((palette) => (
                    <div key={palette.name} className="bg-white rounded-lg shadow-sm p-3">
                        <h2 className="text-lg font-semibold mb-2 text-gray-600">{palette.name}</h2>

                        {/* Color Swatches */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-2">
                            {palette.shades.map((shade) => (
                                <div
                                    key={shade.name}
                                    className="group relative cursor-pointer transition-transform hover:scale-105"
                                    onClick={() => copyToClipboard(shade.variable, `${palette.name}-${shade.name}`)}
                                    title="Click to copy CSS variable"
                                >
                                    {copiedColor === `${palette.name}-${shade.name}` && (
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap z-10 animate-fade-in">
                                            Copied!
                                        </div>
                                    )}
                                    <div
                                        className="h-16 rounded shadow-sm flex items-center justify-center font-medium text-base transition-shadow hover:shadow-md"
                                        style={{
                                            backgroundColor: shade.value,
                                            color: getTextColor(shade.value),
                                        }}
                                    >
                                        {shade.name}
                                    </div>
                                    <div className="mt-1.5">
                                        <div className="text-sm space-y-0.5">
                                            <div className="font-mono text-gray-500">{shade.value}</div>
                                            {/* <div className="font-mono text-gray-400 text-xs">{shade.variable}</div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Usage Examples */}
                        <div className="mt-2 p-2 bg-gray-50 rounded">
                            <h3 className="text-xs font-semibold mb-1 text-gray-600">Usage:</h3>
                            <div className="text-xs font-mono">
                                <div className="text-gray-700">
                                    <span className="text-purple-600">CSS:</span>{' '}
                                    <span className="bg-white px-1 py-0.5 rounded">
                                        var(--{palette.name.toLowerCase()}-500)
                                    </span>
                                </div>
                                {/* <div className="text-gray-700">
                  <span className="text-purple-600">Tailwind:</span>{' '}
                  <span className="bg-white px-2 py-1 rounded">
                    bg-{palette.name.toLowerCase()}-500
                  </span>
                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Color Usage Guide */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-600">Color Usage Guide</h2>
                <div className="grid md:grid-cols-2 gap-3">
                    <div>
                        <h3 className="font-semibold text-sm mb-1 text-gray-600">Using CSS Variables</h3>
                        <pre className="bg-gray-900 text-white p-2 rounded text-xs overflow-x-auto">
                            {`.my-element {
                background-color: var(--primary-500);
                color: var(--gray-50);
                border: 1px solid var(--primary-700);
                }`}</pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm mb-1 text-gray-600">Using Tailwind Classes</h3>
                        <pre className="bg-gray-900 text-white p-2 rounded text-xs overflow-x-auto">
                            {`<div className="bg-primary-500 
              text-gray-50 
              border border-primary-700">
  Hello World
</div>`}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
