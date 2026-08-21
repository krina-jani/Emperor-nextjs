import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'name'> {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => {
  const IconComponent = (LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ size?: number | string; color?: string; className?: string }>
  >)[name];

  if (name === 'Figma') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 9a3.5 3.5 0 1 1 0 7H12V9z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      </svg>
    );
  }

  if (!IconComponent) {
    // Return a default fallback icon if it doesn't exist
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      {...props}
    />
  );
};

export default Icon;
