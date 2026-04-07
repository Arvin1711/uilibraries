# UI Component Library

A Next.js-based UI component library featuring reusable components styled with Tailwind CSS.

## Features

- ✨ Built with Next.js 16 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🧩 Reusable UI components

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the project for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Variants
- `primary` - Primary action button (blue)
- `secondary` - Secondary action button (gray)
- `outlined` - Outlined button with border
- `text` - Text-only button

#### Sizes
- `small` - Compact button
- `medium` - Default size
- `large` - Large button

#### Usage Example

```tsx
import Button from '@/components/ui/Button';

export default function Example() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" size="large">Large Secondary</Button>
      <Button variant="outlined" disabled>Disabled</Button>
    </div>
  );
}
```

## Project Structure

```
UILibraries/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page with component demos
│   │   └── globals.css   # Global styles
│   └── components/
│       └── ui/           # UI component library
│           ├── Button.tsx
│           └── index.ts
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Technologies

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React 19** - UI library

## License

MIT
