import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button/Button'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Heading } from './components/Heading/Heading'
import { Text } from './components/Text/Text'
import { TextInput } from './components/TextInput/TextInput'
import { Logo } from './Logo'
import './styles/global.css'

export const App = () => {
  return (
   <div className="flex flex-col w-screen h-screen bg-gray-900 items-center justify-center text-gray-100">
    <header className='flex flex-col items-center'>
      <Logo />

      <Heading size='lg' className='mt-4 mb-2'>Ignite Lab</Heading>
      <Text className='text-gray-400' size='lg'>Login and start your experience!</Text>
    </header>

    <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
      <label htmlFor="email" className='flex flex-col gap-3'>
        <Text className='font-semibold'>E-mail address</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input type="email" id='email' placeholder='email@example.com'/>
        </TextInput.Root>
      </label>

      <label htmlFor="password" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Your password</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>

          <TextInput.Input type="password" id='password' placeholder='*************'/>
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className='flex items-center gap-2'>
        <Checkbox id='remember' />
        <Text size='sm' className='text-gray-400'>Remember me for 30 days</Text>
      </label>

      <label htmlFor="submit" className='mt-4'>
        <Button type='submit' id='submit'>
          Login
        </Button>
      </label>
    </form>

    <footer className='flex flex-col items-center gap-4 mt-8'>
      <Text asChild size='sm'>
        <a className='text-gray-400 underline hover:text-gray-200' href="">Forgot your password?</a>
      </Text>
      <Text asChild size='sm'>
        <a className='text-gray-400 underline hover:text-gray-200' href="">Don&apos;t have an account? Create one!</a>
      </Text>
    </footer>
   </div>
  )
}
