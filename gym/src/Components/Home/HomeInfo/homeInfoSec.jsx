import React from 'react';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import './homeInfoSec.css';

const HomeInfoSec = () => {
    return(<>
    <div className='infoSec txtItemAlign Mont100'>
        <div className="inviCard">
            <GppGoodOutlinedIcon sx={{height:50, width:50,color: '#393E46'}}/>
            <p style={{fontWeight: '100'}}>Our products are of the highest quality</p>
        </div>
        <div className="inviCard">
            <LocalShippingOutlinedIcon sx={{height:50, width:50,color: '#393E46'}}/>
            <p style={{fontWeight: '100'}}>Free Shipping</p>
        </div>
        <div className="inviCard">
            <FitnessCenterOutlinedIcon sx={{height:50, width:50,color: '#393E46'}}/>
            <p style={{fontWeight: '100'}}>Authenticity Guaranteed</p>
        </div>
        <div className="inviCard">
            <CurrencyRupeeOutlinedIcon sx={{height:50, width:50,color: '#393E46'}}/>
            <p style={{fontWeight: '100'}}>Shop with us & save upto 35%</p>
        </div>
    </div>
</>);};
export default HomeInfoSec;