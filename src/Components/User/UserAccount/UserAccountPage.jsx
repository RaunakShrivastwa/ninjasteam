import React from 'react';
import UserHorizontalTabs from './UserHorizontalTabs';
import NavigationMenu from '../../NavigationBar/NavigationMenu';

const UserAccountPage = () => {
    return (
        <>
            <NavigationMenu />
            <div className="container mt-5 pt-5">
                <UserHorizontalTabs />
            </div>
        </>
    );
};

export default UserAccountPage;