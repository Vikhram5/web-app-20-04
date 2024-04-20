import React from 'react';
import BarChartComp from './BarChart';

const data = [
    { "Schedule Name": "Schedule 1", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 2", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 3", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 4", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 5", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 6", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 7", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 8", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 9", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 10", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 11", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 12", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 1", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 2", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 3", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 4", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 5", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 6", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 7", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 8", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 9", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 10", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 11", "Passenger Count": 20 },
    { "Schedule Name": "Schedule 12", "Passenger Count": 15 },
    { "Schedule Name": "Schedule 1", "Passenger Count": 10 },
    { "Schedule Name": "Schedule 2", "Passenger Count": 20 },
    

    // Add more data as needed
];

const App = () => {
    return (
        <div>
            <h1>Passenger Count by Schedule</h1>
            <BarChartComp data={data} />
        </div>
    );
};

export default App;