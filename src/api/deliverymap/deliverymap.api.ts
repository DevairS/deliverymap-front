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
      const { data } = await api.get(`/delivery/${id}`);
      return data;
    } catch (err) {
      throw Error(err);
    }
  };
}
