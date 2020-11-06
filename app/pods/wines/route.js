import Route from '@ember/routing/route';

export default class WinesRoute extends Route {
  model(){
    return this.store.findAll('wine');
  }
}
