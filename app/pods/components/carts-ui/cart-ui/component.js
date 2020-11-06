import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartsUiCartUiComponent extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart(wine){
    this.cart.addToCart(wine);
  }
}
