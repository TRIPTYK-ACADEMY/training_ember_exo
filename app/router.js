import EmberRouter from '@ember/routing/router';
import config from 'training-ember-exo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('shop', {path: "/magasin"});
  this.route('wines', {path: "/stock"}, function() {
    this.route('wine-detail', {
      path: '/:wine_id'
    });
  });
});
