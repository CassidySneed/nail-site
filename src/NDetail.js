import React from 'react'
import { useLocation } from 'react-router'
import data from './data'
import { useParams } from "react-router-dom";
import './NDetail.css'

function NDetail() {
    const { id } = useParams();

    const item = data[id]
    return (
        <div>

            <div className='detail'>
                <img
                    src={item.image}
                    width="300"
                    height="300"
                    alt="Hello"
                />
                <h1>{item.name}</h1>
                <p id='price'>{item.price}</p>
                <div className='Group'>
                    <div className='Btn-Group'>
                        <button id='ATC'>ADD TO CART</button>
                        <button id='BIN'>BUY IT NOW</button>
                    </div>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NDetail