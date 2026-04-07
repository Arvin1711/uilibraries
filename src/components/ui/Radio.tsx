'use client';

import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error = false, helperText, className = '', disabled, ...props }, ref) => {
    const baseStyles = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none';
    const errorStyles = error ? 'border-red-500 text-red-600' : '';
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    const radioClassName = `${baseStyles} ${errorStyles} ${disabledStyles}`;
    
    return (
      <div className={`flex items-start ${className}`}>
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="radio"
            className={radioClassName}
            disabled={disabled}
            {...props}
          />
        </div>
        {(label || helperText) && (
          <div className="ml-2 text-sm">
            {label && (
              <label
                htmlFor={props.id}
                className={`font-medium ${disabled ? 'text-gray-400' : 'text-gray-900'} ${
                  error ? 'text-red-600' : ''
                } cursor-pointer`}
              >
                {label}
              </label>
            )}
            {helperText && (
              <p className={`text-xs ${error ? 'text-red-500' : 'text-gray-500'} mt-1`}>
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export interface RadioGroupProps {
  children: React.ReactNode;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  value,
  onChange,
  className = '',
  orientation = 'vertical',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const orientationStyles = {
    horizontal: 'flex flex-row gap-4',
    vertical: 'flex flex-col gap-2',
  };

  return (
    <div className={`${orientationStyles[orientation]} ${className}`} role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioProps>(child)) {
          return React.cloneElement(child, {
            name,
            checked: child.props.value === value,
            onChange: handleChange,
          } as any);
        }
        return child;
      })}
    </div>
  );
};

export default Radio;
