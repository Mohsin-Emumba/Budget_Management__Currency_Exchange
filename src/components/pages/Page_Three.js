import React, { Fragment } from 'react';
import './Page_Three.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Converter from '../Converter/Converter';
import Rates from '../Rates/Rates';
import About from '../About/About';


const PageThree = () => {
    return (
        <Fragment>

            <Converter />
            <About />



        </Fragment>
    )
}
export default PageThree