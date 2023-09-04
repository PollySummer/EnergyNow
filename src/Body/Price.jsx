import { useEffect, useState } from "react";
import { NOW_TIMESTAMP, ELECTR, GAS } from "./consts";


function Price({ electricityPrice, activeEnergy, latestGasPrice }) {
    const [currentElectrPrice, setCurrentElecrPrice] = useState(0);
    const [currentGasPrice, setCurrentGasPrice] = useState(0);

    useEffect(() => {
        if (!electricityPrice || !latestGasPrice) return;

        const energy = {
            [ELECTR]: {
                data: electricityPrice.ee,
            },
            [GAS]: {
                data: latestGasPrice,
            },
        }

        const mainData = energy[activeEnergy].data.map((data) =>
        ({
            ...data,
        })
        )
        if (activeEnergy === ELECTR) {
            setCurrentElecrPrice(mainData);

        } else if (activeEnergy === GAS) {
            setCurrentGasPrice(mainData);
        }

    }, [electricityPrice, latestGasPrice, activeEnergy]);


    // useEffect(() => {
    //     if (!electricityPrice) return;
    //     const { price } = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);
    //     setCurrentPrice(price);
    // }, [electricityPrice]);

    return (
        <>
            {
                (activeEnergy === ELECTR ? currentElectrPrice : currentGasPrice) &&
                (activeEnergy === ELECTR ? currentElectrPrice : currentGasPrice).map((item) => (
                    <h3>
                        {activeEnergy === ELECTR && item.timestamp === NOW_TIMESTAMP ?
                            item.price : activeEnergy === GAS && item.price}
                    </h3>
                ))
            }
            <div>sents/kw</div>
        </>
    )
}

export default Price;