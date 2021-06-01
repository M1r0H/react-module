import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../card.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBuyValue, setBuyValue } from '../../../store/actions/actions';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '../Modal/Modal';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function GoodsCard({ pathname, id, name, description, images, price }) {
    const [modalActive, setModalActive] = useState(false)
    const [counter, setCounter] = useState(1)
    const { BuyData: { data } } = useSelector(({ BuyData }) => ({ BuyData }));
    const classes = useStyles();
    const dispatcher = useDispatch()
    const goodsInfo = {
        id: id,
        name: name,
        description: description,
        images: images,
        price: price,
        count: counter
    }

    const addCount = () => {
        setCounter(prevCount => prevCount + 1)
    }
    const setBuy = () => {
        if (data.length !== 0) {
            const newData = data.some(item => item.goods.id === id)
            if (!newData) {
                dispatcher(setBuyValue({ ...goodsInfo, count: counter }))
            }
        } else {
            dispatcher(setBuyValue({ ...goodsInfo, count: counter }))
        }
    }
    const deleteGoods = () => {
        if (goodsInfo.count !== 1) {
            setCounter(prevCount => prevCount - 1)
        } else {
            dispatcher(deleteBuyValue(id))
        }
    }
    const modal = () => {
        setModalActive(true)
    }
    const card = () => {
        return (
            <>
                <Card className={classes.root}>
                    <CardActionArea>
                        <div onClick={modal}>
                            <CardMedia
                                className={classes.media}
                                image={`http://shop-roles.asmer.fs.a-level.com.ua/${images[0].url}`}
                                title="Contemplative Reptile"
                            />
                        </div>
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Price: {price * counter}$
                        </Typography>
                        {pathname === '/main/busket' ?
                            <Typography gutterBottom variant="h6" component="h2">
                                Quantity: {goodsInfo.count}
                                <button className="add-button" onClick={addCount}>Add goods</button>
                            </Typography>
                            :
                            ''
                        }
                    </CardContent>
                    <CardActions>
                        {pathname === '/main/busket' ?
                            <Button size="small" color="primary" onClick={deleteGoods}>
                                <DeleteIcon />
                            </Button>
                            :
                            <Button size="small" color="primary" onClick={setBuy} >
                                Buy
                            </Button>}
                    </CardActions>
                </Card>
                <Modal active={modalActive} setActive={setModalActive}>
                    <img src={`http://shop-roles.asmer.fs.a-level.com.ua/${images[0].url}`} alt="" />
                </Modal>
            </>
        )
    }
    return (
        <>{card()}</>
    );
}