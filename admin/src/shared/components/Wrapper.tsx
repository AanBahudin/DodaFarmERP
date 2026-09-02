import { cn } from '@/lib/utils'
import React from 'react'

type WrapperProps = {
    className?: string,
    children: React.ReactNode
}

const Wrapper = ({className, children} : WrapperProps) => {
  return (
    <main className={cn('w-full p-2', className)}>
        {children}
    </main>
  )
}

export default Wrapper