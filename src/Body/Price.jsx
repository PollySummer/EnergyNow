import { useEffect, useState } from "react";
import { NOW_TIMESTAMP} from "./consts";


function Price({ electricityPrice}) {
    const [currentPrice, setCurrentPrice] = useState(0);


    useEffect(() => {
        if (!electricityPrice) return;
        const { price } = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);
        setCurrentPrice(price);
    }, [electricityPrice]);

    return (
        <>
            <h3>{currentPrice}</h3>
            <div>sents/kw</div>
        </>
    )
}

export default Price;