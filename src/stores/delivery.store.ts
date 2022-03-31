import { makeAutoObservable, runInAction } from 'mobx';
import { persist } from 'mobx-persist';
import { DeliveryMapApi } from '~/api';
import { formatDate } from '~/utils';

class DeliveryStore {
  deliveryMapApi: DeliveryMapApi;

  constructor() {
    makeAutoObservable(this);
    this.deliveryMapApi = new DeliveryMapApi();
  }

  @persist('list')
  deliveryList: Delivery.Data[] = [];

  createDelivery = async (delivery: Delivery.Data): Promise<void> => {
    try {
      await this.deliveryMapApi.createDelivery(delivery);
    } catch (err) {
      throw new Error(err);
    }
  };

  getDeliveryList = async (): Promise<void> => {
    const data = await this.deliveryMapApi.getDeliveryList();
    const cloneData = data.map((el) => {
      const dateFormated = formatDate(el.date, 'dd/MM/yyyy');
      return { ...el, date: dateFormated };
    });

    runInAction(() => {
      this.deliveryList = cloneData;
    });
  };

  getDeliveryById = async (id: string): Promise<Delivery.Data> => {
    const data = await this.deliveryMapApi.getDeliveryById(id);
    const dateFormated = formatDate(data.date, 'dd/MM/yyyy');
    return { ...data, date: dateFormated };
  };
}

export default DeliveryStore;
