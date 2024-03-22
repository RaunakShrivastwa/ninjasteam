import React from 'react';

var notificationData = [{
    title: "Transactional Emails",
    info: "This includes Login OTPs, Receipts and password reset links.",
    toggle: "true"
}, {
    title: "Course updates",
    info: "Receive all important updates and reminders for your active courses",
    toggle: "true"
}, {
    title: "Code Studio Updates",
    info: "Get notified about your activities and latest updates on Codestudio",
    toggle: "true"
}, {
    title: "Events",
    info: "Receive updates about your registered Events",
    toggle: "true"
}, {
    title: "Placement Opportunities",
    info: "Get all updates for latest Job and Internship opportunities posted by Coding Ninjas Placement Cell",
    toggle: "true"
}, {
    title: "Offers / Discounts / New Course launches",
    info: "Stay updated with latest promotional offers and discount coupons running on Coding Ninjas courses and services",
    toggle: "true"
}]

const NotificationPreference = () => {
    return (
        <>
            <div className="py-3 m-0">
                <div className="row m-0 d-flex align-items-center px-2 mb-4">
                    <div class="col-10">
                        <h4 class="py-0 mb-0 fw-bold">Your notification preferences</h4>
                        <p class="fs-6 ">You can manage the channels through which you want to receive notifications</p>
                    </div>
                    <div class="col-2">
                        <div className="d-flex justify-content-center">
                            <button type="button" class="btn btn-warning">Warning</button>
                        </div>
                    </div>
                </div>

                <div>
                    {
                        notificationData.map((data, index) => {
                            return <>
                                <div className="row m-0 d-flex align-items-center px-2">
                                    <div class="col-10">
                                        <h5 class="py-0 mb-0 fst-normal">{data.title}</h5>
                                        <p class="fs-6 fw-light">{data.info}</p>
                                    </div>
                                    <div class="col-2">
                                        <div className="d-flex justify-content-center">
                                            <button type="button" class="btn btn-warning fw-bold text-danger">{data.toggle}</button>
                                        </div>
                                    </div>
                                    {index < notificationData.length - 1 && <hr />}
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default NotificationPreference;
