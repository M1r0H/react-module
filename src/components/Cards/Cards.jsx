import React, { useEffect } from 'react';
import GoodsCard from './Card/Card.jsx';
import { useLazyQuery } from '@apollo/client';
import { FIND_CATEGORY_ONE_QUERY } from '../../core/Cards/find-goods-query';
import './card.css'

export default function MediaCard({ location: { pathname, state: { id } } }) {
    const [FindCategory, { data: categoryData }] = useLazyQuery(FIND_CATEGORY_ONE_QUERY);
    useEffect(() => {
        FindCategory({
            variables: {
                query: `[{\"_id\":\"${id}\"}]`
            }
        });
    }, [FindCategory, id])
    const spawnCard = () => {
        if (categoryData) {
            const { CategoryFindOne: { goods } } = categoryData
            return goods.map(({ _id, name, description, images, price }) => {
                return (
                    <React.Fragment key={_id}>
                        <GoodsCard
                            pathname={pathname}
                            id={_id}
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
        <>{spawnCard()}</>
    );
}