import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Header from '../components/Header';
import {useRouter} from 'next/router';

const Success = () => {
    const router = useRouter();
    return (
        <div className="bg-green-100 h-screen">
            <Header />
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10">
                    <div className="flex">
                        <CheckCircleIcon className="text-[#da8836] h-12" />
                        <h1 className="text-3xl ">
                            Đơn hàng của bạn ok rùi đóa, hãy chờ shipper nhé 😘😘
                        </h1>
                    </div>
                    <button 
                        onClick={() => router.push('/order')}
                        className="button font-semibold mt-20">Xem đơn hàng</button>
                </div>
            </main>
        </div>
    )
}

export default Success
