import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComp = ({ data }) => {
    return (
        <div style={{ height: 400, display: 'flex', justifyContent: 'center', overflowX: 'scroll' }}>
            <ScatterChart width={1000} height={400}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Schedule Name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Scatter name="Passenger Count" data={data} fill="#8884d8" />
            </ScatterChart>
        </div>
    );
};

export default BarChartComp;