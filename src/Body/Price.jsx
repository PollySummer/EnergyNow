import { useEffect, useState } from "react";
import { NOW_TIMESTAMP, ELECTR, GAS } from "./consts";


function Price({ electricityPrice, latestGasPrice, activeEnergy }) {
    const [currentPrice, setCurrentPrice] = useState(0);

    useEffect(() => {
        if (!electricityPrice && !latestGasPrice) return;
        const energy = {
            [ELECTR]: {
                data: electricityPrice,
            },
            [GAS]: {
                data: latestGasPrice,
            },
        }
        if (energy[activeEnergy].data === ELECTR) {
            const { price } = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);
            setCurrentPrice(price);
            console.log({ price });
            
        } else if (energy[activeEnergy].data === GAS) {
            const { price } = latestGasPrice?.find(item => item.timestamp === NOW_TIMESTAMP);
            setCurrentPrice(price);
            console.log({ price });
        }

    }, [electricityPrice, latestGasPrice, activeEnergy]);

    return (
        <>
            <h3>{currentPrice}</h3>
            <div>sents/kw</div>
        </>
    )
}

export default Price;