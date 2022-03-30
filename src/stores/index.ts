import { create } from 'mobx-persist';
import AppStore from './app.store';

class RootStore {
  app: AppStore;

  constructor() {
    this.app = new AppStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('app', store.app);

export { RootStore, AppStore };
export default store;
