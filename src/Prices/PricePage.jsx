import { useEffect, useState } from "react";
import { NOW_TIMESTAMP } from "../Body/consts";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

function PricePage() {
    const electricityPrice = useSelector((state) => state.electricityPrice);
    const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
    const [currentPrice, setCurrentPrice] = useState(0);
    const { pathname } = useLocation();

    useEffect(() => {
        if (!electricityPrice) return;
        const { price } = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);
        setCurrentPrice(price);
    }, [electricityPrice, pathname]);

    const electricityWithTax = currentPrice + (currentPrice / 100) * 20;
    const gasPriceWithTax = (gasCurrentPrice + (gasCurrentPrice / 100) * 20);


    return (
        <>
            <h2>{pathname === '/PricePage/kw' ? 'Electricity price with tax:' : 'Electricity normal price'}</h2>
            <h2>{pathname === '/PricePage/kw' ? electricityWithTax : currentPrice}</h2>
            <div>sents/kw</div>
            <h2>{pathname === '/PricePage/kw' ? 'Gas price with tax:' : 'Gas normal price'}</h2>
            <h2>{pathname === '/PricePage/kw' ? gasPriceWithTax : gasCurrentPrice}</h2>
            <div>m³</div>
        </>
    )
}


export default PricePage;