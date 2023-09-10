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


    if (pathname === '/PricePage/kw') {
        return (
            <>
                <h2>Electricity price with tax: </h2>
                <h2>{(currentPrice + (currentPrice / 100) * 20)}</h2>
                <div>sents/kw</div>
                <h2>Gas price with tax: </h2>
                <h2>{(gasCurrentPrice + (gasCurrentPrice / 100) * 20)}</h2>
            </>
        )
    } else {
        return (
            <>
                <h2>Electricity normal price</h2>
                <h2>{currentPrice}</h2>
                <div>sents/kw</div>
                <h2>Gas normal price</h2>
                <h2>{parseFloat(gasCurrentPrice).toFixed(2)}</h2>
            </>
        )

    }

    // return (
    //     <>
    //         <h2>Electricity</h2>
    //         <h2>{currentPrice}</h2>
    //         <div>sents/kw</div>
    //         <h2>Gas</h2>
    //         <h2>{parseFloat(gasCurrentPrice).toFixed(2)}</h2>
    //     </>
    // )
}


export default PricePage;