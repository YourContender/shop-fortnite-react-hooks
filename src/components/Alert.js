import React from "react";
import { useEffect } from "react";

function Alert(props) {
    const {name, closeAlert} = props;

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerID)
        }
    }, [name])

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    )
}

export default Alert;