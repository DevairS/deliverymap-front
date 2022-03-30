declare namespace Delivery {
  type Data = {
    id?: number;
    name: string;
    date: string;
    startingPoint: {
      latitude: number;
      longitude: number;
    };
    deliveryPoint: {
      latitude: number;
      longitude: number;
    };
  };
}
