import React from 'react';

type ElementType = keyof React.JSX.IntrinsicElements;

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'subtitle1' | 'subtitle2';
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'default';
  align?: 'left' | 'center' | 'right' | 'justify';
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'body1', children, className = '', color = 'default', align = 'left' }, ref) => {
    const variantStyles = {
      h1: 'text-5xl font-bold',
      h2: 'text-4xl font-bold',
      h3: 'text-3xl font-semibold',
      h4: 'text-2xl font-semibold',
      h5: 'text-xl font-semibold',
      h6: 'text-lg font-semibold',
      subtitle1: 'text-base font-medium',
      subtitle2: 'text-sm font-medium',
      body1: 'text-base font-normal',
      body2: 'text-sm font-normal',
      caption: 'text-xs font-normal',
    };
    
    const colorStyles = {
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      success: 'text-green-600',
      error: 'text-red-600',
      warning: 'text-yellow-600',
      default: 'text-gray-900',
    };
    
    const alignStyles = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    };
    
    const combinedClassName = `${variantStyles[variant]} ${colorStyles[color]} ${alignStyles[align]} ${className}`;
    
    const variantToElement: Record<typeof variant, ElementType> = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      subtitle1: 'h6',
      subtitle2: 'h6',
      body1: 'p',
      body2: 'p',
      caption: 'span',
    };
    
    const Component = variantToElement[variant] as ElementType;
    
    return React.createElement(
      Component,
      { ref: ref as any, className: combinedClassName },
      children
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
