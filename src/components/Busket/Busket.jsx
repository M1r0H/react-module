import React from 'react';
import { useSelector } from 'react-redux';
import GoodsCard from '../Cards/Card/Card.jsx';
import '../Cards/card.css'



export const Busket = ({ location: { pathname } }) => {
    const { BuyData: { data } } = useSelector(({ BuyData }) => ({ BuyData }));

    const spawnCard = () => {
        if (data.length !== 0) {
            return data.map(({ goods: { id, name, description, images, price } }) => {
                return (
                    <React.Fragment key={id}>
                        <GoodsCard
                            pathname={pathname}
                            id={id}
                            name={name}
                            description={description}
                            images={images}
                            price={price}
                        />
                    </React.Fragment>
                )
            })
        }
    }

    return (
        <div className="cards">
            {data.length === 0
                ?
                <h1 className="busket-empty">Busket is emty</h1>
                :
                spawnCard()
            }
        </div>
    )
}