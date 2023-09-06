import { useEffect, useState } from 'react';
import moment from 'moment';
import { ELECTR, GAS, NOW_TIMESTAMP } from './consts';
import { useSelector } from 'react-redux';
import {
    LineChart, Line, XAxis,
    YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer,
    ReferenceLine
} from 'recharts';

function Chart() {
    const electricityPrice = useSelector((state) => state.electricityPrice);
    const gasPrice = useSelector((state) => state.gasPrice);
    const activeEnergy = useSelector((state) => state.activeEnergy);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (!electricityPrice || !gasPrice) return;

        const energy = {
            [ELECTR]: {
                data: electricityPrice.ee,
                format: 'HH'
            },
            [GAS]: {
                data: gasPrice.common,
                format: 'DD'
            },
        }

        const data = energy[activeEnergy].data.map(data =>
        ({
            ...data, interval: moment.unix(data.timestamp).format(energy[activeEnergy].format)
        })
        )
        setChartData(data);
    }, [electricityPrice, gasPrice, activeEnergy]);

    return (
        <div className='chartsContainer'>
            <ResponsiveContainer height='100%' width='100%'>
                <LineChart
                    data={chartData}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="interval" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <ReferenceLine x={chartData.findIndex(({ timestamp }) => timestamp === NOW_TIMESTAMP)} stroke={'red'} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;