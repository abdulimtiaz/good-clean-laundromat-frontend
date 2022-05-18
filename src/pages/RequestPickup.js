import React, { Fragment } from 'react';
import '../stylesheets/RequestPickup.css'

const RequestPickup = () => {
    return (
        <Fragment>
            <p id="p1">
                Local Laundromat<br/><br/>
                Pickup Confirmation page<br/>
                We have received your order.<br/>
        
            </p>

            <p id="p2">
                Driver is going to pickup your laundry soon.<br/><br/>
                We will charge you once we have successfully completed your order.<br/><br/>
                
                We accept all major credit or debit cards beside cash payment.<br/><br/>
                Thank you for choosing us.<br/><br/>

                <a href="p1.html" id="home">
                    Return to our Homepage
                </a>
            </p>
        </Fragment>
    );
};

export default RequestPickup;
