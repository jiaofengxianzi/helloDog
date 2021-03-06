require("../../css/mReset.scss");
require("../../css/mCommon.scss");
require("../../css/index/breed.scss");

import React from 'react';
import ReactDom from 'react-dom';
import Header from '../common/components/Header.jsx';
import Footer from '../common/components/Footer.jsx';
import Breed from './components/Breed.jsx';

function StatApp(){
    return(
        <div>
            <Header hearderSty="2" title={HD_lANG['petInfo6-2'][globalLang]}/>
            <Breed />
            <Footer active="1"/>
        </div>
    )
}

function  app() {
    ReactDom.render(
        <StatApp />,
        document.getElementById('app')
    )
}
app();