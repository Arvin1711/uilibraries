import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', className = '', children, disabled, startIcon, endIcon, iconOnly = false, ...props }, ref) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none';
    
    // Size variants
    const sizeStyles = {
      small: iconOnly ? 'p-1.5' : 'px-3 py-1.5 text-sm',
      medium: iconOnly ? 'p-2' : 'px-4 py-2 text-base',
      large: iconOnly ? 'p-3' : 'px-6 py-3 text-lg',
    };
    
    // Icon size based on button size
    const iconSizeStyles = {
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
    };
    
    // Color variants
    const variantStyles = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300',
      outlined: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300',
      text: 'bg-transparent text-blue-600 hover:bg-blue-50 disabled:text-blue-300',
    };
    
    // Disabled styles
    const disabledStyles = disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer';
    
    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;
    
    // Clone icons with currentColor to inherit button text color
    const cloneIconWithColor = (icon: React.ReactNode) => {
      if (React.isValidElement(icon)) {
        return React.cloneElement(icon as React.ReactElement<any>, { color: 'currentColor' });
      }
      return icon;
    };

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {startIcon && <span className={`${iconSizeStyles[size]} ${children ? 'mr-2' : ''}`}>{cloneIconWithColor(startIcon)}</span>}
        {children}
        {endIcon && <span className={`${iconSizeStyles[size]} ${children ? 'ml-2' : ''}`}>{cloneIconWithColor(endIcon)}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
