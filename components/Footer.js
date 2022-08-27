import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="p-4 flex flex-col items-center text-subHeading justify-center text-white">
            <h1 className="font-mono  font-bold text-md">
                Built with 
               <Icon icon="bi:balloon-heart-fill" className=" ml-2 pulse inline-block text-heading" />
            </h1>
            <p className="my-1 font-mono italic font-light text-xs">
                by
            </p>
            <p className="font-bold font-mono text-xs text-heading cursor-pointer ">
                <Link href="https://github.com/rockstar-technologies">
                    <span className=''>
                        Rockstar Technologies
                    </span>
                </Link> &copy; {new Date().getFullYear()}
            </p>
        </div>
    )
}

export default Footer