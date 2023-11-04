import CountUpContent from "@/utils/CountUpContent";
import React from "react";
const CounterDefault = () => {
    const counters = [
        {
            countIcon: 'fas fa-check-square',
            countIconPrefix: 'fas',
            countNum: 267,
            countTitle: 'Projects Completed'
        },
        {
            countIcon: 'fas fa-heart',
            countIconPrefix: 'fas',
            countNum: 133,
            countTitle: 'Happy Clients'
        },
        {
            countIcon: 'fas fa-clock',
            countIconPrefix: 'fas',
            countNum : 11680,
            countTitle: 'Hours On 24*7 Service'
        }
        // {
        //     countIcon: 'fas fa-trophy',
        //     countIconPrefix: 'fas',
        //     countNum : 894,
        //     countTitle: 'IT Consultant'
        // }
    ];

    return(
        <div className="counter-area pt-130 pb-100" style={{ background: "url(assets/img/bg/bg-3.jpg)" }}>
            <div className="container">
                {counters &&
                <div className="row">
                    {counters.map( (item, num) => (
                    <div key={num} className="col-xl-4 col-lg-4 col-md-6">
                        <div className="counter-wrapper mb-30">
                            <div className="counter-icon">
                                <i className={item.countIcon}></i>
                            </div>
                            <div className="counter-text">
                                <h1 className="d-flex"><span className="counter">
                                <CountUpContent number={item.countNum} text="" />
                                </span><span className="plus-icon">+</span></h1>
                                <p>{item.countTitle}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}
export default CounterDefault;