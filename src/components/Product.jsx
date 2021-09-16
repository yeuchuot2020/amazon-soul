import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../slices/cartSlice';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {

    const dispatch =  useDispatch()
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    
    const addItemToCart = () => {
        const product = {
            id, title, price, description, category, image
        };

        dispatch(addToCart(product));
    }

    return (
        <div className="relative flex flex-col m-6 bg-white z-30 p-7">
            <p className="absolute top-2 right-2 text-xs italic text-gray-500">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-2">{title}</h4>
            <div className="flex">
                {
                    Array(rating).fill().map((_, i) => (
                        <StarIcon className="h-4 text-yellow-400" />
                    ))
                }
            </div>
            <div className="mb-4">
                <Currency quantity={price} currency="VND" />
            </div>
            <button onClick={addItemToCart} className="mt-auto text-sm font-medium button">Add to cart</button>
        </div>
    )
}

export default Product;
