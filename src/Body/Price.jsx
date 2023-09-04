import { useEffect, useState } from "react";
import { ELECTR, NOW_TIMESTAMP } from "./consts";


function Price({ electricityPrice, gasCurrentPrice, activeEnergy }) {

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