export interface IDeliveryContext {
  deliveredSequence: number;
  completeDelivery: () => void;
}
