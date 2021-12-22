function Cart(props) {
    const {quantity, handleBasketShow} = props;

    return (
        <div className="cart yellow darken-2" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
                {quantity ? (
                    <span className="cart-quantity">{quantity}</span>
                ) : null}
        </div>
    )
}

export default Cart;