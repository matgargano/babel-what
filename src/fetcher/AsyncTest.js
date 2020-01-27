import lscache from 'lscache';

class AsyncTest {
  constructor() {
    this.LS_KEY = 'data';
  }

  

  async get(what = null) {
    if (this.isArray && !what) {
      return [];
    }
    await this.simulateDelay();
    let data = await lscache.get(this.LS_KEY);
    data = data || {};
    return data[what];
  }

  // eslint-disable-next-line class-methods-use-this
  simulateDelay(seconds = 3000) {
    return new Promise((r) => {
      setTimeout(() => {
        r();
      }, seconds);
    });
  }
}

export default AsyncTest;