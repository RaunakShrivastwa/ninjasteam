import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import CourseSlideContent from './CourseSlideContent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const CourseSlideTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            bgcolor: 'background.paper',
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
        }}>
            <div style={{ overflowX: 'auto' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                    className="border border-3 border-danger border-top-0 border-start-0 border-end-0 text-danger"
                >
                    <Tab label="All" />
                    <Tab label="Data Structure and Algorithm" />
                    <Tab label="Placement and Test Series" />
                    <Tab label="Programming Language" />
                    <Tab label="Web Development" />
                    <Tab label="Machine Learning and Data Science" />
                    <Tab label="FullStack" />
                    <Tab label="Backend" />
                </Tabs>
            </div>
            <TabPanel value={value} index={0}>
                <CourseSlideContent content="All" datas='9' />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <CourseSlideContent content="Data Structure and Algorithm" datas="1" />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <CourseSlideContent content="Placement and Test Series" datas="2" />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <CourseSlideContent content="Programming Language" datas="3" />
            </TabPanel>

            <TabPanel value={value} index={4}>
                <CourseSlideContent content="Web Development" datas="4" />
            </TabPanel>

            <TabPanel value={value} index={5}>
                <CourseSlideContent content="Machine Learning and Data Science" datas="5" />
            </TabPanel>

            <TabPanel value={value} index={6}>
                <CourseSlideContent content="Frontend" datas="6" />
            </TabPanel>

            <TabPanel value={value} index={7}>
                <CourseSlideContent content="Backend" datas="7" />
            </TabPanel>

        </Box>
    );
};

export default CourseSlideTab;
