import { makeAutoObservable, runInAction } from 'mobx';
import { fetchCity, fetchOpenWeather, fetchWeather } from '../api/api';

interface ICoords {
  lat: number;
  lon: number;
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  data: any;
  coords: ICoords = {} as ICoords;

  setCity = async () => {
    await fetchCity().then((data: any) => {
      runInAction(() => {
        this.coords.lat = data.data[0].lat;
        this.coords.lon = data.data[0].lon;
      });
    });
    await fetchOpenWeather(this.coords.lat, this.coords.lon).then(
      (data: any) => {
        runInAction(() => {
          this.data = data.data;
        });
      }
    );
  };

  setWeather = () => {
    fetchWeather(this.coords.lat, this.coords.lon).then((data: any) => {
      runInAction(() => {
        this.data = data;
      });
    })
  };

  getData = () => {
    console.log(this.coords);
  };
}

export const store = new Store();
