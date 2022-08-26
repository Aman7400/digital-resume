import { Icon } from '@iconify/react';
import Link from 'next/link';
import {  contacts } from '../utils/data';




export default function ContactCard() {
    return (

        <section className='mb-4'>
            <h1 className="font-mono font-extrabold text-lg mb-2">Contact Details</h1>
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
        <section className="flex-row flex p-1 items-center text-gray-600 hover:font-bold  hover:text-gray-800">
            <span className="mr-4 text-2xl">
                <Icon icon={icon} />
            </span>
            <Link href={href} passHref={true} >
                <span className="italic font-mono text-md cursor-pointer">
                    {title}
                </span>
            </Link>
        </section>
    )
}