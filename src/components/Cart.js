function Cart(props) {
    const {quantity} = props;

    return (
        <div className="cart yellow darken-2">
            <i className="material-icons">shopping_cart</i>
                {quantity ? (
                    <span className="cart-quantity">{quantity}</span>
                ) : null}
        </div>
    )
}

export default Cart;