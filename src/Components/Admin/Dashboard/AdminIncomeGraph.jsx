import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ResponsiveContainer } from 'recharts';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const AdminIncomeGraph = () => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                series={[
                    { data: pData, label: 'pv' }
                ]}
                xAxis={[{ scaleType: 'band', data: xLabels }]} // Changed scaleType to 'band'
            />
        </ResponsiveContainer>
    );
}

export default AdminIncomeGraph;