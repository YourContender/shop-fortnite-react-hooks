import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";
import Cart from "./Cart";
import BasketList from "./BasketList";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.featured)
                setLoading(false)
            })
    }, []) 

    const changeOrder = (item) => {
        console.log(item);
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
        
        if (itemIndex < 0) {
            const newElem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newElem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem, 
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
           setOrder(newOrder);
        }
    }

    return (
        <main className='container content'>  
            <Cart handleBasketShow={handleBasketShow} quantity={order.length}/>
            {loading ? <Preloader /> : <GoodsList goods={goods} changeOrder={changeOrder}/>}
            {isBasketShow ? <BasketList order={order} handleBasketShow={handleBasketShow}/> : null}
        </main>
    )
}

export default Shop;