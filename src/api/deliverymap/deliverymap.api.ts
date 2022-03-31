import api from '../api';

export default class DeliveryMapApi {
  createDelivery = async (delivery: Delivery.Data): Promise<void> => {
    try {
      await api.post('/delivery', delivery);
    } catch (err) {
      throw Error(err);
    }
  };

  getDeliveryList = async (): Promise<Delivery.Data[]> => {
    try {
      const { data } = await api.get(`/delivery`);
      return data;
    } catch (err) {
      throw Error(err);
    }
  };

  getDeliveryById = async (id: string): Promise<Delivery.Data> => {
    try {
      // const { data } = await api.get(`/delivery/${id}`);
      return {
        id: 1,
        name: 'Devair',
        date: '1998-10-27T00:00:00.000Z',
        startingPoint: {
          latitude: 20,
          longitude: 10,
        },
        deliveryPoint: {
          latitude: 20,
          longitude: 10,
        },
      };
    } catch (err) {
      throw Error(err);
    }
  };
}
