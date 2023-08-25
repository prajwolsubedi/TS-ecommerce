export interface CartItem{
    id: number;
    title: string;
    price: number;
    image: string;
    totalPrice: number;
    quantity: number;
}

type Rating = {
    rate: number,
    count: number,
}

export interface ProductItem{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating
}