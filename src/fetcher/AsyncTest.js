import lscache from 'lscache';

class AsyncTest {
  constructor() {
    this.LS_KEY = 'data';
  }

  // using async implicityly wraps this function in promise
  async get(what = null) {
    if (this.isArray && !what) {
      return [];
    }

    // this returns a promise which is resolving here,
    // stopping execution of the rest of the get function
    // simulateDelay is resolving here your just are not capturing the value in a variable
    await this.simulateDelay();
    let data = await lscache.get(this.LS_KEY);
    data = data || {};

    // because async was used your function get was retuning a promise which needed resolving
    return Promise.resolve(data[what]);
  }

  // eslint-disable-next-line class-methods-use-this
  simulateDelay(seconds = 3000) {
    return new Promise((r) => {
      setTimeout(() => {
        r('something');
      }, seconds);
    });
  }
}

export default AsyncTest;