import React, { Component } from 'react';
import '../css/main_style2.scss';
import about from '../images/about.jpg';
// __________________________________________________________________________________

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='about-us'>
                <h1 className='about-title'>درباره ما</h1>
                <div className='about-us-desc'>
                    <img src={about} alt="about-img" />
                    <p>در این سایت ما به بررسی فیلم های برتر سینمای ایران و جهان میپردازیم و با سرچ کردن فیلم در ژانرهای مختلف و همچین سال های متفاوت به آن دسته از فیلم هایی که بیشترین امتیاز را در میان مردم گرفته اند ، دست میابیم.
                        همچین درخصوص اخبار و اطلاعات مختلف و بازیگران و کادر تشکیل دهنده فیلم اطلاعاتی را در اختیار بیننده قرار میدهیم
                    </p>
                </div>

            </div>
        );
    }
}

export default AboutUs;