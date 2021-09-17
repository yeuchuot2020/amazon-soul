import React from 'react';
import Image from 'next/image';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../slices/cartSlice';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const CheckoutProduct = ({ id, title, price, description, category, image, rating }) => {

    const dispatch = useDispatch();

    const addItemToCart = () => {
        const product = {
            id, title, price, description, category, image, rating 
        }

        //Push item in redux store
        dispatch(addToCart(product));
    }

    const removeItemFromCart = () => {

        dispatch(removeFromCart({ id }))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} width={200} height={200} objectFit="contain" />

            <div className="col-span-3 mx-5">
                <p className="text-base font-semibold">{title}</p>
                <div className="flex">
                    {
                        Array(rating).fill().map((_, i) => (
                            <StarIcon className="h-4 text-yellow-400" />
                        ))
                    }
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="USD" />
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToCart} className="button font-semibold ">Thêm vào giỏ</button>
                <button onClick={removeItemFromCart} className="button font-semibold ">Xóa khỏi giỏ</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
