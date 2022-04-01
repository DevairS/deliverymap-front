declare namespace Delivery {
  type Data = {
    id?: number;
    name: string;
    date: string;
    startingPoint: {
      latitude: string;
      longitude: string;
    };
    deliveryPoint: {
      latitude: string;
      longitude: string;
    };
  };
}
