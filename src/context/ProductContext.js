import React,{createContext, useState, useEffect} from "react";

// create context
const ProductContext = ({children})=>{

    // product state
    const [products, setProducts] = useState([]);

    // fetch products
    useEffect(()=>{
        const fetchProducts = async() =>{
            try {
                const response = await fetch(`${Astro.url.origin}/api/products.json`);
                const products = response.json();
            } catch (error) {
                console.error("Error Fetching productContext", error);
            }finally{
                setLoading(false);
            };
    
        };
        fetchProducts();
    }, []);

    return <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider;