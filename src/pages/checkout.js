import React from 'react';
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/cartSlice';
import { useSession } from 'next-auth/client';
import Currency from 'react-currency-formatter';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();
    
    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        const checkoutSession = await axios.post('api/create-checkout-session', {
            items: items,
            email: session.user.email
        });

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if(result.error) alert(result.error.message);
    }

    return (
        <div className="bg-gray-200">
            <Header />
            <main className="mt-5 lg:flex max-w-screen-2xl mx-auto">
                <div className="flex flex-col p-6 space-y-10 bg-white">
                    <h1 className="text-2xl font-bold border-b pb-5">
                        {
                            items.length === 0 ? 'Giỏ hàng của bạn đang rỗng như tương lai của bạn vậy 😢' : "Giỏ của bạn có hàng 😁"
                        }
                    </h1>
                    {
                        items.map((items, i) =>(
                            <CheckoutProduct 
                                key={i}
                                id={items.id}
                                title={items.title}
                                price={items.price}
                                description={items.description}
                                category={items.category}
                                image={items.image}
                            />
                        ))
                    }
                </div>
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {
                        items.length > 0 && (
                            <>
                                <h2 className="whitespace-nowrap font-bold">Số sản phẩm ({items.length}): {' '}
                                    <span className="font-semibold">
                                        <Currency quantity={total} currency="USD" /> 
                                    </span>
                                </h2>

                                <button 
                                    role="link"
                                    onClick={createCheckoutSession}
                                    disabled={!session}
                                    className={`button mt-2 ${!session && 'from-gray-300 to-gray-600 border-gray-200 text-yellow-500' }`}>
                                    {
                                        !session ?  'Đăng nhập để đặt hàng' : 'Đặt hàng'
                                    }
                                </button>
                            </>
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Checkout;

