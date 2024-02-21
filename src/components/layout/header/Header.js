import Link from 'next/link';
import React from 'react';
import '@/app/globals.css';
import LisotripLogo from '@/components/AtomicComponents/Atoms/Logos/Logos';
import Button from '@/components/AtomicComponents/Atoms/Buttons/Button';

const Header = () => {
    return (
        <div className='flex items-center justify-between py-4 shadow-md mx-auto px-48'>
            <div>
                <Link href="/"><LisotripLogo className={"w-44"} src={"/lisotrip-bgfree.png"} alt={"lisotrip-logo"} /></Link>
            </div>
            <div className="flex items-center gap-7">
                <Link href="/login">
                    <Button className='bg-primary-color hover:bg-primary-color-hover hover:duration-200 flex justify-center text-white font-semibold px-10 py-3  rounded-full'>Sign In</Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;