import React, { Component } from "react";
import "./item.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Item extends Component {
    
    constructor(props) {
        super(props);
        this.state = { itemInCart: 0, cartItems: this.props.cartItems };
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.cartItems.length) {
            this.setState({ itemInCart: 0 });
        }
    }

    addToCart(item) {
        this.props.addToCart(item);
        this.setState({ itemInCart: this.state.itemInCart + 1 });
    }

    render() {
        let item = this.props.products;
        return (
                <Card className="product">
                <CardActionArea className="product-image-container">
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    title={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    
                    <Typography variant="body3" color="textSecondary" component="p">
                        {"Quantity:" + this.state.itemInCart}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button id="add-button" onClick={() => this.addToCart(item)}>
                      Add to Cart
                  </Button>
                  <Typography variant="h4" color="textSecondary" component="h2">
                        {item.price + "$"}
                    </Typography>
                </CardActions>
              </Card>
              );
    }
};

