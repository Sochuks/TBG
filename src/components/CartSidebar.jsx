import { useCartStore } from '../store/cartStore';


const CartSidebar=({})=>{
    const cart = useCartStore((state) => state.cart);
    const isSidebarOpen = useCartStore((state) => state.isSidebarOpen);
    const toggleSidebar = useCartStore((state) => state.toggleSidebar);
    const clearCart = useCartStore((state) => state.clearCart);
    return(
        <div className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}>
            {/* SideBar Header here */}
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='text-sm font-semibold'>Shopping Bag</div>
                <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>

            </div>
            {/* SideBar Body */}
            <div className="p-4">
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.actual_price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>    
        )}
      </div>
      <button
              onClick={clearCart}
              className="mt-4 flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4M4 7h16"
                />
              </svg>
              Clear Cart
            </button>


        </div>
    )
};
export default CartSidebar