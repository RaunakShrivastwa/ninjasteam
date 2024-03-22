import React from 'react';
import AddProfile from './AddProfile';

const UserProfileLink = () => {
    return (
        <div>
            <div class="card border border-dark border-2 rounded rounded-lg my-3">
                <div class="card-body">
                    <span class='h4'>Profile Links</span>

                    <AddProfile />
                </div>
            </div>
        </div>
    )
}

export default UserProfileLink