import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Services!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    {/* <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />

                    </ul> */}
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='The world of currency exchange'
                            label='Currency Exchange'
                            path='/exchange'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='The world of currency rates'
                            label='Currency Rates'
                            path='/rates'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Manage your budgets'
                            label='Budget Management'
                            path='/budget'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;