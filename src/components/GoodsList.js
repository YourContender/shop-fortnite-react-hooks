import GoodItem from "./GoodItem";

function GoodsList(props) {
    const {goods = [], changeOrder} = props


    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => {
               return <GoodItem key={item.id} changeOrder={changeOrder} {...item}/>
            })} 
        </div>
    )
}

export default GoodsList;