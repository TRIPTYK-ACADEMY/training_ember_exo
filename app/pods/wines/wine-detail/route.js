import Route from '@ember/routing/route';

export default class WinesWineDetailRoute extends Route {
  model(params){
    return this.store.findRecord('wine', params.wine_id)
  }
}
