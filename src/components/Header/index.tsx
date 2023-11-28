import React from 'react'
import { HeaderProps } from './types'

export const Header = ({ links }: HeaderProps) => {
  return (
    <header className='bg-white'>
      <nav>
        <ul className='flex gap-6 py-5 px-8'>
        {links.map(link => (
          <a key={link.label} href={link.url}>
            <li className='text-black'>{link.label}</li>
          </a>
        ))}   
        </ul>
      </nav>
    </header>
  )
}
