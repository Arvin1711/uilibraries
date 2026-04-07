import React from 'react';

export interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, variant = 'horizontal', className = '' }, ref) => {
    const baseStyles = 'inline-flex';
    
    const variantStyles = {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    };
    
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;
    
    // Clone children to apply specific styles
    const modifiedChildren = React.Children.map(children, (child, index) => {
      if (React.isValidElement<{ className?: string }>(child)) {
        const isFirst = index === 0;
        const isLast = index === React.Children.count(children) - 1;
        
        let additionalClasses = '';
        
        if (variant === 'horizontal') {
          if (!isFirst && !isLast) {
            additionalClasses = 'rounded-none border-l-0';
          } else if (isFirst) {
            additionalClasses = 'rounded-r-none';
          } else if (isLast) {
            additionalClasses = 'rounded-l-none border-l-0';
          }
        } else {
          if (!isFirst && !isLast) {
            additionalClasses = 'rounded-none border-t-0';
          } else if (isFirst) {
            additionalClasses = 'rounded-b-none';
          } else if (isLast) {
            additionalClasses = 'rounded-t-none border-t-0';
          }
        }
        
        return React.cloneElement(child, {
          className: `${child.props.className || ''} ${additionalClasses}`,
        } as any);
      }
      return child;
    });
    
    return (
      <div ref={ref} className={combinedClassName} role="group">
        {modifiedChildren}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
