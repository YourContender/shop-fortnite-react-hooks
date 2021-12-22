import '../index.css'

function GoodItem(props) {
    const {id, name, description, price, full_background, changeOrder} = props;

    return (
        <div className="card" id={id} style={{backgroundColor: 'rgb(247, 247, 41)'}}>
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button onClick={() => changeOrder({id, name, price, full_background})} className="btn">Купить</button>
                <p className="right" style={{fontSize: '20px', marginTop: '5px'}}>{price} UAH</p>
            </div>
        </div>
    )
}

export default GoodItem;