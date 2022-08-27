import { Icon } from '@iconify/react';
import Link from 'next/link';
import {  contacts } from '../utils/data';




export default function ContactCard() {
    return (

        <section className='mb-4'>
            <h1 className="font-mono font-extrabold text-lg mb-2 text-heading">Contact Details</h1>
            <section>
                {
                    contacts.map((contact, i) => <ContactListItems key={i} {...contact} />)
                }
            </section>
        </section>

    )
}

function ContactListItems({ icon, title, href }) {
    return (
        <section className="flex-row flex p-1 drop-shadow-md hover:drop-shadow-2xl items-center text-subHeading font-bold cursor-pointer  hover:text-white">
            <span className="mr-4 text-2xl">
                <Icon icon={icon} />
            </span>
            <Link href={href} passHref={true} >
                <span className="font-mono text-md  cursor-pointer">
                    {title}
                </span>
            </Link>
        </section>
    )
}