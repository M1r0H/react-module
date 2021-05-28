import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../card.css'
import { useDispatch } from 'react-redux';
import { deleteBuyValue, setBuyValue } from '../../../store/actions/actions';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function GoodsCard({ pathname, _id, name, description, images, price }) {
    const dispatcher = useDispatch()
    const goodsInfo = {
        _id: _id,
        name: name,
        description: description,
        images: images,
        price: price
    }
    const classes = useStyles();
    const setBuy = () => {
        dispatcher(setBuyValue(goodsInfo))
    }
    const deleteGoods = () => {
        dispatcher(deleteBuyValue(_id))
    }
    const card = () => {
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`http://shop-roles.asmer.fs.a-level.com.ua/${images[0].url}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Price: {price}$
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {pathname === '/main/busket' ?
                        <Button size="small" color="primary" onClick={deleteGoods}>
                            <DeleteIcon />
                        </Button>
                        :
                        <Button size="small" color="primary" onClick={setBuy}>
                            Buy
                    </Button>}
                </CardActions>
            </Card>
        )
    }
    return (
        <>{card()}</>
    );
}