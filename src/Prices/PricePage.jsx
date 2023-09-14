import { useEffect, useState } from "react";
import { NOW_TIMESTAMP } from "../Body/consts";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function PricePage() {
    const electricityPrice = useSelector((state) => state.electricityPrice);
    const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
    const [currentPrice, setCurrentPrice] = useState(0);
    const checked = true;
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!electricityPrice) return;
        const { price } = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);
        setCurrentPrice(price);
    }, [electricityPrice, pathname]);

    const electricityWithTax = currentPrice + (currentPrice / 100) * 20;
    const gasPriceWithTax = (gasCurrentPrice + (gasCurrentPrice / 100) * 20);

    return (
        <div className="d-flex flex-column align-items-center">
            <h2>{pathname === '/PricePage/kw' ? 'Electricity price with tax:' : 'Electricity normal price'}</h2>
            <h2 className="mt-2">{pathname === '/PricePage/kw' ? parseFloat(electricityWithTax).toFixed(2) : currentPrice}</h2>
            <div className="mb-5">sents/kw</div>
            <h2>{pathname === '/PricePage/kw' ? 'Gas price with tax:' : 'Gas normal price'}</h2>
            <h2>{pathname === '/PricePage/kw' ? parseFloat(gasPriceWithTax).toFixed(2) : parseFloat(gasCurrentPrice).toFixed(2)}</h2>
            <div className="mb-5">m³</div>


            <div className="mb-5">
                <Form.Check
                    inline
                    label="Price now"
                    defaultChecked={checked}
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() => navigate('/PricePage')}
                />
                <Form.Check
                    inline
                    label="Price with taxes"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() => navigate('/PricePage/kw')}
                />
            </div>
            <div className='text-center p-4 mt-5'>
                © 2023 All rights reserved
                <a className='nav-link' href='/'>
                    ReactApp | EnergyToday
                </a>
            </div>
        </div>
    )
}


export default PricePage;