import GoodItem from "./GoodItem";

function GoodsList(props) {
    const {goods = []} = props

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => {
               return <GoodItem key={item.id} {...item}/>
            })} 
        </div>
    )
}

export default GoodsList;