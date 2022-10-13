import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean
}

export const Text = ({ size = 'md', children, asChild }: TextProps) => {
  const Tag = asChild ? Slot : 'span'

  return (
    <Tag
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        }
      )}
    >
      { children }
    </Tag>
  )
}