import Container from '@/components/general/container'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <Container>
      <main className='h-screen space-y-6'>
        <h1 className='text-center text-9xl font-bold mt-18 bg-linear-to-b bg-clip-text from-neutral-200 dark:from-neutral-800 to-neutral-50 dark:via-neutral-800 dark:to-neutral-950 text-transparent select-none'>AK</h1>
        <div className='flex justify-center relative'>
          <h1 className='text-center text-4xl tracking-tight font-inter font-medium'>404 - Page Not Found</h1>
        </div>
        <div className='flex justify-center'>
          <p className='text-center max-w-sm text-muted-foreground text-lg'>Oops! The page you're looking for doesn't exist. It might have been moved or deleted.</p>
        </div>
        <div className='flex justify-center'>
          <Link href={'/'}>
            <Button><ArrowLeft />Back to home</Button>
          </Link>
        </div>
      </main>
    </Container>
  )
}

export default Notfound
