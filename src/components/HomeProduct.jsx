import React from 'react';
import {useCartStore} from '../store/cartStore'

const HomeProduct = ({product}) =>{
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAddToCart = (e) => {
      e.preventDefault(); // Prevent page reload if in a form
      console.log('Add to Cart clicked, product:', product); // Debug click
      addToCart(product);
      console.log('After addToCart called'); // Confirm execution
    };
  
    return(
        <a  className="group block overflow-hidden cursor-pointer">
            <div className="relative h-[350px] sm:h-[450px]">
                <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
            </div>

            <div className="relative bg-white pt-3">
                <h3 className="text-sm text-deep-olive group-hover:underline group-hover:underline-offset-4">
                {product.name}
                </h3>
                <div className='flex justify-between'>
                <p className="mt-1.5 tracking-wide text-gray-900">{product.actual_price}</p>
                <p className="mt-1.5 tracking-wide text-gray-900">SIZE: {product.size}</p>
   
                </div>
                {/* Cart Button */}
                <button
                    onClick={() => addToCart(product)}
                    className="group mt-4 inline-flex items-center gap-1 font-medium text-blue-600"
                >

                    <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                    </span>
                    <p>Add to Cart</p>
                </button>
            </div>
        </a>
    )
};

export default HomeProduct