import React, { Component } from 'react';
// import Foods from './components/Foods';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import '../src/css/main_style2.scss';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Movies from './components/Movies';
// __________________________________________________________________________________

// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {}
//     render() {
//         return (
//             <>
//                 {/* Exersice1 */}
//                 <Foods />
//             </>
//         );
//     }
// }
// export default App;

// ---------------------------------------------------------------------------

class App extends Component {

    render() {
        return (

            <>
                <div dir='rtl'>
                    <header>
                        <div className='navbar'>
                            <ul className='nav'>
                                <li className='nav-item'><Link to='/'>خانه</Link></li>
                                <li className='nav-item'> <Link to='/about-us/'>درباره ما</Link></li>
                                <li className='nav-item'> <Link to='/movies/'>فیلم ها</Link></li>
                            </ul>
                        </div>

                    </header>
                    <Routes>
                        <Route path='/' element={<Slider />}></Route>
                        <Route path='/about-us/' element={<AboutUs />}></Route>
                        <Route path='/movies/' element={<Movies />}></Route>
                    </Routes>
                </div>
            </>
        );
    }
}

export default App;