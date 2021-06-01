import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from 'react-redux';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export const ButtonBusket = () => {
    const { BuyData: { data } } = useSelector(({ BuyData }) => ({ BuyData }));

    return (
        <Link to={{
            pathname: "/main/busket",
            state: {
                name: "Busket"
            }
        }}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={data.length} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Link>
    )
}