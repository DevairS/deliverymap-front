import api from '../api';

export default class DeliveryMapApi {
  createDelivery = async (delivery: Delivery.Data): Promise<void> => {
    try {
      await api.post('/delivery', delivery);
    } catch (err) {
      throw Error(err);
    }
    return api.post('/delivery', delivery);
  };

  getDeliveryList = async (): Promise<Delivery.Data[]> => {
    try {
      const { data } = await api.get(`/delivery`);
      return data;
    } catch (err) {
      throw Error(err);
    }
  };
}
