import React, { Component } from 'react';
import style1 from '../css/style1.module.css';
import arrow from '../images/chevron-down-solid.svg';
import { Img, DivAccordion, DivContent } from './styled-components/FoodsStyledComp';
import Food from './Food';
import img1 from '../images/peperoni-pizza.jpg';
import img2 from '../images/soshi1.jpg';
import img3 from '../images/file-sokhari.jpeg';
import img4 from '../images/felafel.jpg';
// __________________________________________________________________________________

class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    };

    clickAccordion = () => {
        this.setState({ flag: !this.state.flag });

    }

    render() {

        return (

            <div className={style1.container}>
                <DivAccordion x={this.state.flag} onClick={this.clickAccordion}>
                    <span>Digital Products</span>
                    <Img src={arrow} alt="arrow" x={this.state.flag} />
                </DivAccordion>

                <DivContent x={this.state.flag}>
                    {this.state.flag ? (
                        <>
                            <Food img={img1} title='Peperoni Pizza' price={150}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, illum!</Food>
                            <Food img={img2} title='Soshi' price={210} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, officiis.</Food>
                            <Food img={img3} title={'Fried chicken fillet'} price={79} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur sit.</Food>
                            <Food img={img4} title='Felafel' price={35} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit debitis perferendis neque id!</Food>
                        </>
                    ) : (
                        <></>
                    )}
                </DivContent>


            </div>
        );
    }
}

export default Foods;