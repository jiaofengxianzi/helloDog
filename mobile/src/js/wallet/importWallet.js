require("../../css/mReset.scss");
require("../../css/mCommon.scss");
require("../../css/wallet/importwallet.scss");

import React from 'react';
import ReactDom from 'react-dom';
import Header from '../common/components/Header.jsx';
import Footer from '../common/components/Footer.jsx';
import ImportWallet from './components/importWallet.jsx';

function StatApp(){
    return(
        <div>
            <Header  title="导入钱包"/>
            <ImportWallet />

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