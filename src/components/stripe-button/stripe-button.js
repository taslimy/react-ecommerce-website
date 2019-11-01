import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutbutton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_waYSC93xSL0dx7nRsq8Lyk8R00q7O3nLzA';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='eCommerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutbutton;
