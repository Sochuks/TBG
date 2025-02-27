
const CartSidebar=({})=>{
    return(
        <div class={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg`}>
            {/* SideBar Header here */}
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='text-sm font-semibold'>Shopping Bag</div>
                <button class="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>

            </div>
            {/* SideBar Body */}
            <p>stew</p>
        </div>
    )
};
export default CartSidebar