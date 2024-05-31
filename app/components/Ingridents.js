"use client"
import { useState } from 'react';
const Ingridents = () => {
    const items = [{ id:1, name: 'Patty', price: 80 }, { id:2, name: 'Cheese', price: 10 }, { id:3, name: 'Tomatoes', price: 20 }, { id:4, name: 'Onions', price: 20 }, { id:5, name: 'Lettuce', price: 20 }];
    const [selectedItems, setSelectedItems] = useState([]);
    const handleCheckboxChange = (event, item) => {
        if (event.target.checked) {
            setSelectedItems((prevItems) => [...prevItems, item]);
        } else {
            setSelectedItems((prevItems) => prevItems.filter((i) => i.name !== item.name));
        }
    };
    const total = selectedItems.reduce((sum, item) => sum + item.price, 20);
    
    return (
        <>
               {/* code for list */}
            <div className='list_cntnr'>
                <div className='list'>
                    <p className='text-center'><strong>Ingredients</strong></p>
                    <ul>
                        {selectedItems.map((item) => (
                            <li key={item.name}>
                                {item.name}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            {/* code for buttons of Ingridents */}
            <div className='ing'>
                <div className='ings'>
                    <p>Choose what goes to your Burger</p>
                    <div className="btns-grp">
                        {items.map(item => (
                            <div key={item.name}>
                                <label class="btn btn-warning btn-sm" id={item.id}>
                                    <input class="btn-check" type="checkbox" name={item.name} id={item.id}  onChange={(e) => handleCheckboxChange(e, item)} />{item.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* code for pay */}
            <div className="paid">
                <span>Current Order Total:</span>
                <h5><strong>INR {total}</strong></h5>
                <hr />
                <div className="pay_btn">
                    <span>To Pay:</span>
                    <button type="button" className="btn btn-danger btn-sm">Pay and receive order</button>
                </div>
            </div>
        </>
    )
}

export default Ingridents;