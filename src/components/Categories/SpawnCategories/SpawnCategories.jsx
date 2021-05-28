import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import './spawnCategories.css'
import { Link } from 'react-router-dom'
import { FIND_CATEGORY_MUTATION } from '../../../core/Categories/find-categories-mutation.js';
import CategoryIcon from '@material-ui/icons/Category';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export const SpawnCategories = () => {
    const [FindImage, { data }] = useLazyQuery(FIND_CATEGORY_MUTATION);
    useEffect(() => {
        FindImage();
    }, [FindImage])
    const spawnCategories = () => {
        if (data) {
            const { CategoryFind } = data
            return CategoryFind.map(({ _id, name, goods }) => {
                if (goods !== null){
                    return (
                        <ListItem key={_id}>
                            <ListItemIcon>
                                <CategoryIcon />
                            </ListItemIcon>
                            <Link to={{
                                pathname: `/main/category/${name}`,
                                state: {
                                    id: _id, 
                                    name: name
                                }
                            }}>{name}</Link>
                        </ListItem>
                    )
                }
                return ''
            });
        }
    }
    return (
        <>
            <div className="categories-list">{spawnCategories()}</div>
        </>
    )
}