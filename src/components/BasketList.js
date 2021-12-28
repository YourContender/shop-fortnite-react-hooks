import BasketItem from "./BasketItem";

function BasketList(props) {
    const { order, handleBasketShow, deleteProd, createMethodIncDec } = props;

    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price * elem.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map((item) => {
                    return <BasketItem key={item.id} deleteProd={deleteProd} createMethodIncDec={createMethodIncDec} {...item}/>
                }) : <li className="collection-item">Корзина пустая</li>
            }
            <li className="collection-item active">
                Общая стоимость: {totalPrice}  
            </li>
            <li className="collection-item active">
                <button className="secondary-content btn btn-small">
                    Оформить    
                </button>    
            </li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export default BasketList;