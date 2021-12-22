function BasketItem(props) {
    const {id, name, quantity, price, deleteProd, createMethodIncDec} = props;

    return (
        <li className="collection-item">
            {name} 
            <i className="material-icons basket-arrow" onClick={() => createMethodIncDec({id, name, quantity, price}, -1)}>chevron_left</i>
                x{quantity === 0 ? deleteProd(id) : quantity} 
            <i className="material-icons basket-arrow" onClick={() => createMethodIncDec({id, name, quantity, price}, 1)}>chevron_right</i>
            = {price * quantity}
            <span className="secondary-content" onClick={() => deleteProd(id)}>
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}

export default BasketItem;