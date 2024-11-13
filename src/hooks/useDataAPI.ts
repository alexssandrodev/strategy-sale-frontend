'use client';

import { api } from "@/constants/api";
import { SaleType } from "@/types/SaleType";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { ProductType } from "@/types/ProductType";
import { CategoryType } from "@/types/CategoryType";
import { Product } from "@/types/Product";
import { Purchase } from "@/types/Purchase";

function useDataAPI() {

    const baseUrl = api;
    const [sales, setSales] = useState<SaleType[]>([]);
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [saleDetail, setSaleDetail] = useState<SaleType>({} as SaleType);
    const [productOuput, setProductOutput] = useState<ProductType>({} as ProductType);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [productDetail, setProductDetail] = useState<Product>({} as Product);
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);

    const userData = {
        token: 'erefdgdgd',
        userPayload: {
            userId: 'wewewewwew',
            name: 'wewewewwew',
            email: 'wewewewwew'
        }
    }
    const { user, setUser } = useContext(AuthContext);
    const router = useRouter();

    const loadSales = useCallback(async () => {
        try {
            const response = await fetch(`${baseUrl}/sales/${userData.userPayload.userId}`, {
                cache: 'no-store',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setSales(data);
        } catch (error) {
            console.log(error);
        }
    }, [baseUrl, user.token, userData.userPayload.userId]);

    const loadPurchases = useCallback(async () => {
        try {
            const response = await fetch(`${baseUrl}/purchases`, {
                cache: 'no-store',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setPurchases(data);
        } catch (error) {
            console.log(error);
        }
    }, [baseUrl, user.token]);

    const loadProducts = useCallback(async () => {
        try {
            const response = await fetch(`${baseUrl}/products`, {
                cache: 'no-store',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }, [baseUrl, user.token]);

    async function loadSaleById(sale_id: string) {
        try {
            const response = await fetch(`${baseUrl}/sale-detail/${sale_id}`, {
                cache: 'no-store',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setSaleDetail(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function loadProductById(product_id: string) {
        try {
            const response = await fetch(`${baseUrl}/product_detail/${product_id}`, {
                cache: 'no-store',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            setProductDetail(data);
        } catch (error) {
            console.log(error);
        }
    }

    const loadCategories = useCallback(async () => {
        try {
            const response = await fetch(`${baseUrl}/categories`, {
                cache: 'no-store'
            });
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    }, [baseUrl]);

    function redirect(time: number, url: string) {
        setTimeout(() => {
            router.push(url);
        }, time);
    }

    function handleActiveMessage() {
        setActive(true);
        setTimeout(() => {
            setActive(false);
        }, 7000);
    }

    async function login(email: string, password: string) {
        try {
            const response = await fetch(`${baseUrl}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
            if (data.statusCode === 500) {
                setMessage(data.message);
                setStatus(response.ok);
                handleActiveMessage();
                return;
            }
            if (response.ok) {
                
                setUser(data);
            }
            setMessage(data.message);
            setStatus(response.ok);
            handleActiveMessage();
            redirect(5000, '/');
        } catch (error) {
            console.log(error);
        }
    }

    async function signup(name: string, email: string, password: string) {
        try {
            const response = await fetch(`${baseUrl}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            const data = await response.json();

            if (data.statusCode === 500) {
                setMessage(data.message);
                setStatus(response.ok);
                handleActiveMessage();
                return;
            }
            setMessage(data.message);
            setStatus(response.ok);
            handleActiveMessage();
            redirect(5000, '/login');
        } catch (error) {
            console.log(error);
        }
    }

    async function createSale(title: string, date: string) {
        try {
            const response = await fetch(`${baseUrl}/sales/${userData.userPayload.userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    title,
                    created_at: date
                })
            });
            const data = await response.json();

            if (data.statusCode === 500) {
                setMessage(data.message);
                setStatus(response.ok);
                handleActiveMessage();
                return;
            }
            setMessage(data.message);
            setStatus(response.ok);
            handleActiveMessage();
        } catch (error) {
            console.log(error);
        }
    }

    async function createPurchase(saleId: string, products: string[]) {
        try {
            const response = await fetch(`${baseUrl}/purchases`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    sale_id: saleId,
                    user_id: userData.userPayload.userId,
                    products
                })
            });
            const data = await response.json();

            if (data.statusCode === 500) {
                setMessage(data.message);
                setStatus(response.ok);
                handleActiveMessage();
                return;
            }
            setMessage(data.message);
            setStatus(response.ok);
            handleActiveMessage();
        } catch (error) {
            console.log(error);
        }
    }

    async function createProduct(sale_id: string, title: string, price: number, category: string, description: string, quantity: number, createdAt: Date) {
        try {
            const response = await fetch(`${baseUrl}/products/${userData.userPayload.userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    sale_id,
                    title: title,
                    price,
                    category,
                    description,
                    quantity,
                    created_at: createdAt
                })
            });
            const data = await response.json();

            if (data.statusCode === 500) {
                setMessage(data.message);
                setStatus(response.ok);
                handleActiveMessage();
                return;
            }
            setMessage(data.message);
            setStatus(response.ok);
            handleActiveMessage();
            setProductOutput(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadSales();
        loadCategories();
        loadProducts();
        loadPurchases();
    }, [loadSales, loadPurchases, loadProducts, loadCategories]);

    return {
        sales,
        login,
        signup,
        createSale,
        loadSaleById,
        createProduct,
        loadProductById,
        createPurchase,
        productDetail,
        saleDetail,
        productOuput,
        categories,
        products,
        purchases,
        message,
        status,
        active
    }

}

export { useDataAPI };
