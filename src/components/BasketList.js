import BasketItem from "./BasketItem";

function BasketList(props) {
    const { order, handleBasketShow } = props;

    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price * elem.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map((item) => {
                    return <BasketItem key={item.id} {...item}/>
                }) : <li className="collection-item">Корзина пустая</li>
            }
            <li className="collection-item active">Общая стоимость {totalPrice}</li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export default BasketList;