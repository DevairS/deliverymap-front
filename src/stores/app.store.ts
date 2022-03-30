import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  theme: App.Theme = 'dark';

  setTheme = (): void => {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  };
}

export default AppStore;
