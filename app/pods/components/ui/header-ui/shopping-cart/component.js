import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UiHeaderUiShoppingCartComponent extends Component {
  @service('shopping-cart') cart;

  @tracked isMenuActive = false;

  @action
  openMenu(){
    this.isMenuActive = !this.isMenuActive;
  }
  @action
  closeMenu(){
    this.isMenuActive = false;
  }
}
