import React from 'react';
import { ShoppingCartIcon, SearchIcon, MenuIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/cartSlice';
import Image from 'next/image';


const Header = () => {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

    return (
        <header>
            {/* Header Top */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="flex items-center ml-5 flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
                        src="/logo.png"
                        width={120}
                        height={40}
                        alt=""
                        objectFit="contain"
                        className="cursor-pointer "
                    />
                </div>
                <div className="flex items-center h-10 bg-red-100 hover:bg-yellow-200 ml-5 rounded-md flex-grow cursor-pointer">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none " type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                <div className="text-white flex items-center text-xs space-x-6 ml-5 mr-5 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>
                            {
                                session ? `Hello, ${session.user.name}` : 'Hello, Sign in'
                            }
                        </p>
                        <p className="text-lg font-bold md:text-sm">Account & List</p>
                    </div>
                    <div className="link">
                        <p className="font-normal">Return</p>
                        <p className="text-lg font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div
                        onClick={() => router.push('/checkout')}
                        className="flex relative link items-center">
                        <span className="absolute top-0 right-0 md:right-6 bg-yellow-300 h-4 w-4 text-center rounded-full text-black">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-8" />
                        <p className="text-lg mt-2 font-extrabold md:text-sm hidden md:inline">Cart</p>
                    </div>
                </div>
            </div>
            {/* Header Bottom */}
            <div className="flex items-center space-x-3 p-2 bg-amazon_blue-light text-white text-sm font-medium">
                <p className="link flex items-center ml-5">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Today's Deals</p>
                <p className="link">Customer Service</p>
                <p className="link">Registry</p>
                <p className="link">Gift Cards</p>
                <p className="link hidden lg:inline-flex">Sell</p>

            </div>
        </header>
    )
}

export default Header;
