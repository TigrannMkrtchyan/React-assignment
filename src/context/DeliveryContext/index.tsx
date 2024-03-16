'use client';
import React, { createContext, useState } from 'react';
import { IDeliveryContext } from './types';

export const DeliveryContext = createContext<IDeliveryContext | undefined>(
  undefined
);

export const DeliveryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deliveredSequence, setDeliveredSequence] = useState<number>(1);

  const completeDelivery = () => setDeliveredSequence(deliveredSequence + 1);

  const contextValue = { deliveredSequence, completeDelivery };

  return (
    <DeliveryContext.Provider value={contextValue}>
      {children}
    </DeliveryContext.Provider>
  );
};
