import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import NotificationPreference from './NotificationPrefrence';
import MyOrderAccount from './MyOrderAccount';
import UserWallet from './UserWallet';
import UserGeneralSetting from './UserGeneralSetting';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel"
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

const UserHorizontalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            bgcolor: 'background.paper', overflowY: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none', orientation: "vertical"
        }}>
            <div style={{ overflowX: 'auto' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                    className="pb-1 border border-3 border-danger border-top-0 border-start-0 border-end-0 text-danger"
                >
                    <Tab label="General" />
                    <Tab label="Notification Preferences" />
                    <Tab label="My Order" />
                    <Tab label="My Wallet" />
                </Tabs>
            </div>

            <TabPanel value={value} index={0}>
                <UserGeneralSetting />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <NotificationPreference />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <MyOrderAccount />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <UserWallet />
            </TabPanel>
        </Box>
    );
}

export default UserHorizontalTabs