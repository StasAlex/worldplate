'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/random', label: '🎲 Random Recipe' },
    { href: '/account', label: '👤 Account' },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="w-full bg-white shadow py-3 px-4 flex gap-4 text-sm sticky top-0 z-50">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:underline ${pathname === item.href ? 'font-semibold' : ''}`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}
