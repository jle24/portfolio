"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from "react";

const Nav = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className='flex-between w-full mb-16 py-1 sticky top-0 shadow-xl bg-blue-600 border-b-2 border-x-2 border-blue-600 px-3 rounded-b-xl'>
            <div className='flex gap-2 items-center'>
                <Link href="/" className=''>
                    <Image src="/tailwind.svg"
                        alt="Website Logo"
                        width={50}
                        height={50}
                        className='object-contain'
                    />
                </Link>
            </div>

            {/* Desktop Navigation*/}
            <div className='sm:flex hidden gap-10 md:gap-10 ml-auto text-white'>
                <Link href="/resume" className='font-bold'>
                    Resume
                </Link>
                <Link href="/projects" className='font-bold'>
                    Projects
                </Link>
                <Link href="/experience" className='font-bold'>
                    Experience
                </Link>
                <div className="text-center flex-row">
                <a
                    href="https://github.com/jle24"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github px-1"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/lejonathan24"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin px-1"></i>
                </a>
            </div>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                <div className="flex">
                    <Image
                        src={"/ham_icon.svg"}
                        width={25}
                        height={25}
                        className="rounded-full"
                        alt="profile"
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link
                                href="/resume"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Resume
                            </Link>
                            <Link
                                href="/projects"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/experience"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                            >
                                Experience
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav
