"use client";

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 py-1 sticky top-0 bg-white border-b-2 border-x-2 px-3 rounded-b-xl'>
            <Link href="/" className='flex gap-2 flex-center'>
                <Image src="/tailwind.svg"
                    alt="Website Logo"
                    width={50}
                    height={50}
                    className='object-contain'
                />
                <p className='logo_text'>Portfolio</p>
            </Link>

            {/* Desktop Navigation*/}
            <div className='sm:flex hidden items-center'>
                {/* Add navigation items aligned to the right */}
                <div className='flex gap-3 md:gap-5 ml-auto'>
                    <Link href="/resume" className='black_btn'>
                        Resume
                    </Link>
                    <Link href="/projects" className='black_btn'>
                        Projects
                    </Link>
                    <Link href="/experience" className='black_btn'>
                        Experience
                    </Link>
                </div>
            </div>

        </nav>


    )
}

export default Nav