import { useEffect, useState } from "react";
import { ELECTR, NOW_TIMESTAMP } from "./consts";
import { useSelector } from 'react-redux';

function Price() {
    const electricityPrice = useSelector((state) => state.electricityPrice);
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
    const [currentPrice, setCurrentPrice] = useState(0);

    //hook - функции, с помощью которых можно подцепиться к состоянию реакта из функции. 
    //они помогают избежать использование классов
    
    //useEffect - это реакт-хук, который запускается после того, как компонент закончил свой рендер.
    //useEffect принимает в себяя 2 аргумента:
    //1 - функция, которую нужно запустить 
    //2 - массив зависимостей
    //useEffect следит за зависимостями и при изменении их значения, он перезапускает переданную ему функцию
    //useEffect используется например для получения данных внутри компонента, чтобы иметь контроль над запросом
    //получения данных не зависят от отрисовки компоненентов. Избежать лишних запросов при каждой отрисовке компонентов
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