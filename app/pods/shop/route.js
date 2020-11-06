import Route from '@ember/routing/route';

export default class ShopRoute extends Route {
  queryParams = {
    title: {
      refreshModel: true
    },
    price: {
      refreshModel: true
    }
  }

  model(){
    return this.store.findAll('wine');
  }
}
