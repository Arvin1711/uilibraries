import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: 'small' | 'medium' | 'large' | number;
  color?: string;
}

const sizeMap = {
  small: 16,
  medium: 24,
  large: 32,
};

const Icon: React.FC<IconProps & { children: React.ReactNode }> = ({ 
  size = 'medium', 
  color = '#707070',
  children,
  className = '',
  ...props 
}) => {
  const iconSize = typeof size === 'number' ? size : sizeMap[size];
  
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
};

// Common Icons
export const AddIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const DeleteIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
  </Icon>
);

export const EditIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Icon>
);

export const SettingsIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
  </Icon>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M20 6L9 17l-5-5" />
  </Icon>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </Icon>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Icon>
);

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </Icon>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Icon>
);

export const ArrowDownIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </Icon>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </Icon>
);

export const UploadIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
  </Icon>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </Icon>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </Icon>
);

export const HomeIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <path d="M9 22V12h6v10" />
  </Icon>
);

export const UserIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Icon>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </Icon>
);

export const StarIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Icon>
);

export const MailIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </Icon>
);

export const BellIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
  </Icon>
);

export const CalendarIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Icon>
);

export const FileIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
    <path d="M13 2v7h7" />
  </Icon>
);

export const FolderIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </Icon>
);

export const ImageIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </Icon>
);

export const InfoIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </Icon>
);

export const WarningIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <path d="M12 9v4M12 17h.01" />
  </Icon>
);

export const ErrorIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6M9 9l6 6" />
  </Icon>
);

export const SuccessIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M9 18l6-6-6-6" />
  </Icon>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M15 18l-6-6 6-6" />
  </Icon>
);

export const ChevronUpIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M18 15l-6-6-6 6" />
  </Icon>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
);

export const MoreVerticalIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </Icon>
);

export const MoreHorizontalIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </Icon>
);

export const EyeIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

export const EyeOffIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
  </Icon>
);

export const LockIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </Icon>
);

export const UnlockIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 019.9-1" />
  </Icon>
);

export const RefreshIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
  </Icon>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </Icon>
);

export const CopyIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </Icon>
);

export const TrashIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </Icon>
);

export const SaveIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
    <path d="M17 21v-8H7v8M7 3v5h8" />
  </Icon>
);

export const PrintIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </Icon>
);

export const FilterIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </Icon>
);

export const SortIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 6h18M7 12h14M11 18h10" />
  </Icon>
);

export const GridIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </Icon>
);

export const ListIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </Icon>
);

export default Icon;
