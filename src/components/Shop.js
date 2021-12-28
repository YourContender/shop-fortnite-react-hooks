import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import GoodsList from "./GoodsList";
import Preloader from "./Preloader";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const createMethodIncDec = (id, action) => {
        const newOrder = order.map((elem) => {
            if (id === elem.id) {
                const newQuantity = elem.quantity + action;
                return {
                    ...elem,
                    quantity: newQuantity >= 1 ? newQuantity : 0
                }
            } else {
                return elem
            }
        })
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const deleteProd = (id) => {
        let filtered = order.filter(item => {
            return item.id !== id
        })

        setOrder(filtered);
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
        setAlertName(item.name)
    }

    const closeAlert = () => {
        setAlertName('')
    }

    return (
        <main className='container content'>  
            <Cart handleBasketShow={handleBasketShow} quantity={order.length}/>
            {loading ? <Preloader /> : <GoodsList goods={goods} changeOrder={changeOrder}/>}
            {isBasketShow ? <BasketList order={order} handleBasketShow={handleBasketShow} deleteProd={deleteProd} createMethodIncDec={createMethodIncDec}/> : null}
            {alertName ? <Alert name={alertName} closeAlert={closeAlert}/> : null}
        </main>
    )
}

export default Shop;