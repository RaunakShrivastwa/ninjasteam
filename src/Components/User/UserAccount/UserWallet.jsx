import React from 'react'

var userWallet = [{
    icon: "/Image/UserImage/ninjasCoin.svg",
    coin: 0,
    title: "Ninja Coins"
}, {
    icon: "/Image/UserImage/ninjasCoinPlus.svg",
    coin: 0,
    title: "Ninja Coins Plus"
}]
const UserWallet = () => {
    return (
        <>
            <div>
                <h2 class="fw-bold">My Wallet</h2>
                <p>Wallet amount can be used to get discounts on our courses</p>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                    {
                        userWallet.map((wallet) => {
                            return <div class="col">
                                <div class="card h-100 border border-2 border-dark">
                                    <div className="card-body">
                                        <div class="d-flex bd-highlight m-0">
                                            <div class="me-2">
                                                <img src={wallet.icon} alt="ninjasCoin.svg" />
                                            </div>
                                            <div class="ms-2 d-flex align-items-center">
                                                <p className="p-0 m-0">
                                                    <span className="h3 fw-bolder">{wallet.coin}</span><br />
                                                    <span className="h5 fw-light">{wallet.title}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UserWallet