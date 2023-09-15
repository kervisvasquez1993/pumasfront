import React, { useState } from 'react'

const PaypalForm = () => {

    const [donationAmount, setDonationAmount] = useState(10);

    const handleAmountChange = (event) => {
        setDonationAmount(event.target.value);
    }
    return (
        <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
        >
            <input type="hidden" name="hosted_button_id" value="GSNFUYGA96BXL" />

            {/* Campo de entrada para el monto de la donación */}
            <input
                type="number"
                name="amount"
                placeholder="Monto de donación"
                value={donationAmount}
                onChange={handleAmountChange}
            />

            <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
            />
            <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
            />
        </form>
    );
}

export default PaypalForm