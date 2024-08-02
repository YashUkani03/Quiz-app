import { Button } from '@mui/material'
import React from 'react'

function Navbar() {
    return (
        <div className="grid min-h-[80px] w-full place-items-center overflow-x-scroll rounded-lg p-2 lg:overflow-visible">
            <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-black rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div className="flex items-center justify-center text-blue-gray-900">
                    <div className="flex items-center gap-4 ">
                        <div className="hidden mr-4 lg:block">
                            <ul className="flex flex-col gap-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    <Button style={{ display: 'flex', alignItems: 'center', color: 'white', borderColor: 'teal' }} variant='outlined'>
                                        Home
                                    </Button>
                                </li>
                                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    <Button style={{ display: 'flex', alignItems: 'center', color: 'white', borderColor: 'teal' }} variant='outlined'>
                                        Quiz
                                    </Button>
                                </li>
                                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    <Button style={{ display: 'flex', alignItems: 'center', color: 'white', borderColor: 'teal' }} variant='outlined'>
                                        Results
                                    </Button>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
