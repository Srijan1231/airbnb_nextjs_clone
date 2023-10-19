import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar';
import { Modal } from './components/Modal/Modal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}
const font = Nunito({
  subsets:['latin'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Modal/>
        {children}
        </body>
    </html>
  )
}
