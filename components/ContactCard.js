import { Icon } from '@iconify/react';
import Link from 'next/link';

const contacts = [
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'akar-icons:twitter-fill' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'akar-icons:linkedin-fill' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'akar-icons:github-fill' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'carbon:location-heart-filled' },
    { href: "www.facebook.xom", title: "www.facebook.xom", icon: 'fluent:mail-16-filled' },
]

export default function ContactCard() {
    return (
        <div className="flex-1 p-2 ">
            <section className="bg-[#ccc9c9de]  shadow-lg p-4">
                <h1 className="font-mono mb-2">Contact</h1>
                <section>
                    {
                        contacts.map(({ icon, title, href }, i) => <ContactListItems key={i} icon={icon} title={title} href={href} />)
                    }
                </section>
            </section>
        </div>
    )
}

function ContactListItems({ icon, title, href }) {
    return (
        <section className="flex-row flex p-1 items-center">
            <span className="p-2 mr-2 text-2xl">
                <Icon icon={icon} />
            </span>
            <Link href={href} passHref={true} >
                <span className="font-mono text-xl hover:font-bold cursor-pointer">
                    {title}
                </span>
            </Link>
        </section>
    )
}