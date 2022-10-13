import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className='h-12 flex items-center gap-3 w-full py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = (props: TextInputIconProps) => {
  return (
    <Slot className='w-6 h-6 text-gray-400' {...props} />
  )
}
TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

const TextInputInput = (props: TextInputInputProps) => {
  return (
      <input
        className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
        {...props}
      />
  )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}