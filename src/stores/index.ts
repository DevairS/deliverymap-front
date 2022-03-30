import { create } from 'mobx-persist';
import AppStore from './app.store';
import DeliveryStore from './delivery.store';

class RootStore {
  app: AppStore;

  delivery: DeliveryStore;

  constructor() {
    this.app = new AppStore();
    this.delivery = new DeliveryStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('app', store.app);
hydrate('delivery', store.delivery);

export { RootStore, AppStore, DeliveryStore };
export default store;
