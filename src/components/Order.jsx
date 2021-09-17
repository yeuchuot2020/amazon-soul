import React from 'react';
import moment from 'moment';
import Currency from 'react-currency-formatter';

const Order = ({ id, amount, amountShipping, items, timestamp, images}) => {
    return (
        <div className="relative border-2 rounded-md border-green-600">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-lg text-yellow-700">
                <div>
                    <p>Đơn hàng đã đặt</p>
                    <p>{moment.unix(timestamp).format('DD.MM.YYYY')}</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">Tổng cộng: <Currency quantity={amount} currency="USD" /></p>
                    <p>
                        Sẽ đến trong vài ngày tới.{' '}
                        Phí ship: <Currency quantity={amountShipping} currency="USD" className="font-semibold" /> 
                    </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-green-700">
                    {items.length} món hàng
                </p>
            </div>
            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {
                        images.map((image) => (
                            <img src={image} alt="" className="h-20 object-contain sm:h-32" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Order
