import React from "react";
import './CartButton.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

function CartButton() {
    const [count, setCount] = useState(1);
    

    function handleChange1() {
        setCount(count + 1);
    }

    function handleChange2() {
        if (count > 1){
            setCount(count - 1);
        }
    }
    return (<>
        <div className="alignBtn">
            <div className="AddSubtractBox">
                <button class="add-button" onClick={handleChange2}>
                    <RemoveIcon />
                </button>
                <input class="quantity-input" type="text" value={count} disabled/>
                <button class="subtract-button" onClick={handleChange1}>
                    <AddIcon />
                </button>
            </div>
            <button class="delete-button">
                <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
            </button>
        </div> 
    </>)
}

export default CartButton;