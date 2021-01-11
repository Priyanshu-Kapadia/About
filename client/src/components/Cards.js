import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out these Super Amazing Shopera</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Get Levis Jeans At ShreeRam Store'
                            label='ShreeRam Store'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Amazing Moblies Offers and Discount in Blue Moon'
                            label='Blue Moon'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Best Lenovo Laptops, Monitors and Accessories'
                            label='Lenovo'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='For Household Items Visit Mahadev Traders'
                            label='Mahadev Traders'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Novelty Super Market'
                            label='Super Market'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards
