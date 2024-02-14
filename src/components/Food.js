import React, { Component } from 'react';
import '../css/main_style.scss';
// __________________________________________________________________________________

class Food extends Component {
    constructor(props) {
        super(props);
        this.state={ like: false }
    };

    likeHandler = () => {
        this.setState({ like: true });
    }

    render() {
        const { like } = this.state;
        const { img, title, price, children } = this.props;

        return (

            <div className='food-container'>
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <span>{price} $</span>
                <p>{children}</p>

                {like ? (
                    <i class="fa-solid fa-heart" style={{color:'#ff0000'}}></i>
                ) : (
                    <i class="fa-regular fa-heart" onClick={this.likeHandler}></i>
                )}
            </div>
        );
    }
}

export default Food;