import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  data = [];

  getData = () => {
    console.log(this.data);
  };
}

export const store = new Store();
