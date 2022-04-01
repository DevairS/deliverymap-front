import { makeAutoObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { translateGeolocation } from '~/translate';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  theme: App.Theme = 'dark';

  @persist('object')
  userLocation: GeolocationPosition = null;

  setTheme = (): void => {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  };

  getGeolocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

  setGeolocation = async (): Promise<void> => {
    try {
      this.userLocation = await this.getGeolocation();
    } catch (error) {
      throw new Error(translateGeolocation(error.code));
    }
  };
}

export default AppStore;
