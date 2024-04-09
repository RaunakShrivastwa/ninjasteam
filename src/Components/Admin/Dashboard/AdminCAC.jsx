import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { ResponsiveContainer } from 'recharts';

const chartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    width: 500,
    height: 300,
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
        },
    },
};
const dataset = [
    { Social_Media: 486, month: 'Jan' },
    { Social_Media: 78, month: 'Fev' },
    { Social_Media: 106, month: 'Mar' },
    { Social_Media: 92, month: 'Apr' },
    { Social_Media: 92, month: 'May' },
    { Social_Media: 103, month: 'June' },
    { Social_Media: 105, month: 'July' },
    { Social_Media: 106, month: 'Aug' },
    { Social_Media: 95, month: 'Sept' },
    { Social_Media: 97, month: 'Oct' },
    { Social_Media: 76, month: 'Nov' },
    { Social_Media: 103, month: 'Dec' }
];

const valueFormatter = (value) => `${value}mm`;
export default function AdminCAC() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                    { dataKey: 'Social_Media', label: 'Social_Media', valueFormatter }
                ]}
                {...chartSetting}
            />
        </ResponsiveContainer>
    );
}
