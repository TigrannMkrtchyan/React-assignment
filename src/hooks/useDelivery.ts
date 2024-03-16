import { useContext } from 'react';
import { DeliveryContext } from '@/context';

export const useDelivery = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error(
      'useDelivery must be used within an DeliveryProvider'
    );
  }

  return context;
};
