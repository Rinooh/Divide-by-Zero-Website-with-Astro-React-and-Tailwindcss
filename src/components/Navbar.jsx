import React, { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { LinearGradient } from 'react-text-gradients'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex">
                <a href="/" className="-m-1.5 p-1.5 text-3xl italic font-bold">
                    <LinearGradient className='drop-shadow-5xl' gradient={['to left', '#D733A0 ,#8C16C5']}>
                        Divide by Zero
                    </LinearGradient>
                </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:justify-end">
                <Popover.Group style={{alignItems: 'baseline'}} className="hidden lg:flex lg:gap-x-10">
                    <a href="#Introduction" className="text-xl leading-6  hover:text-pink">
                        Introduction
                    </a>
                    <a href="#OurDivisions" className="text-xl leading-6  hover:text-pink">
                        Our Divisions
                    </a>
                    <a href="#OurClans" className="text-xl leading-6  hover:text-pink">
                        Our Clans
                    </a>
                    <a href="#Partners" className="text-xl leading-6  hover:text-pink">
                        Partners
                    </a>
                    <a href="#FAQ" className="text-xl leading-6  hover:text-pink">
                        FAQ
                    </a>
                    <a href="https://discord.gg/dbz-alliance" className="text-xl leading-6 animate-bounce font-light overflow-hidden text-center relative block no-underline rounded-md mx-auto gradientBorder">
                        <span className='text-xl py-2 bg-black rounded m-1 block hover:text-pink'>Join Now</span>
                    </a>
                </Popover.Group>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="/" className="-m-1.5 p-1.5">
                    <img
                        className="w-auto"
                        src="../../public/images/DBZMini.png"
                        alt="Divide by Zero Mini Logo"
                    />
                    </a>
                    <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 "
                    onClick={() => setMobileMenuOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-white">
                    <div className="space-y-2 py-6">
                        <a
                        href="#Introduction"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:text-pink"
                        >
                        Introduction
                        </a>
                        <a
                        href="#OurDivisions"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:text-pink"
                        >
                        Our Divisions
                        </a>
                        <a
                        href="#OurClans"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:text-pink"
                        >
                        Our Clans
                        </a>
                        <a
                        href="#Partners"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:text-pink"
                        >
                        Partners
                        </a>
                        <a
                        href="#FAQ"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:text-pink"
                        >
                        FAQ
                        </a>
                    </div>
                    <div className="py-6">
                        <a href="https://discord.gg/dbz-alliance" className="text-xl leading-6  font-light overflow-hidden text-center relative block no-underline rounded-md gradientBorder">
                            <span className='text-xl py-2 bg-black rounded m-1 block hover:'>Join Now</span>
                        </a>
                    </div>
                    </div>
                </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    </>
  )
}

export default Navbar