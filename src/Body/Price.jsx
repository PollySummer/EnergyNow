import { useEffect, useState } from "react";
import { ELECTR, NOW_TIMESTAMP } from "./consts";
import { useSelector } from 'react-redux';

function Price() {
    const electricityPrice = useSelector((state) => state.electricityPrice);
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
    const [currentPrice, setCurrentPrice] = useState(0);

    useEffect(() => {
        if (!electricityPrice) return;
        const current = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);
        setCurrentPrice(current?.price || 0);
    }, [electricityPrice]);


    return (
        <>
            <h3>{activeEnergy === ELECTR ? currentPrice : parseFloat(gasCurrentPrice).toFixed(2)}</h3>
            <div>sents/kw</div>
        </>
    )
}

export default Price;