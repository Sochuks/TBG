import { listProducts } from "../../utils/db";

export async function GET(){
    try {
        const products = await listProducts();
        return new Response(JSON.stringify({ products }), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
            headers: { "Content-Type": "application/json" },
            status: 500
        });
    }
  
}