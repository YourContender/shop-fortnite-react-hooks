function BasketItem(props) {
    const {id, name, quantity, price} = props;

    return (
        <li className="collection-item">
            {name} x{quantity} = {price}
            <span className="secondary-content">
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}

export default BasketItem;