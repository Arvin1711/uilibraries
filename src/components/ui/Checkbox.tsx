import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  color?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, error = false, disabled = false, className = '', id, color, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    const checkboxStyles = `w-4 h-4 bg-gray-100 rounded focus:outline-none ${
      error ? 'border-red-500' : 'border-gray-300'
    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${!color ? 'text-green-600' : ''}`;
    
    const labelStyles = `text-sm font-medium ${
      error ? 'text-red-600' : 'text-gray-700'
    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`;
    
    const helperStyles = `text-xs mt-1 ${
      error ? 'text-red-500' : 'text-gray-500'
    }`;

    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            className={checkboxStyles}
            style={color ? { accentColor: color } : undefined}
            {...props}
          />
          {label && (
            <label htmlFor={checkboxId} className={`ml-2 ${labelStyles}`}>
              {label}
            </label>
          )}
        </div>
        {helperText && (
          <p className={helperStyles}>{helperText}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
