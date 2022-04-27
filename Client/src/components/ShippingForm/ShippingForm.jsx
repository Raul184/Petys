import React from 'react';
import { Cont, Form, Input } from './ShippingForm.styles';

export const ShippingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <Cont>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="State" />
        <Input placeholder="City" />
        <Input placeholder="Address" />
        <Input placeholder="CPN" />
      </Form>
    </Cont>
  );
};
