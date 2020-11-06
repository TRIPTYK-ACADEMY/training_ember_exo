import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StockUiFormUiComponent extends Component {
  @service router;

  @tracked title;
  @tracked description;
  @tracked img;
  @tracked price;

  constructor(owner, args) {
    super(owner, args)
    this.title = '';
    this.description = '';
    this.img = '';
    this.price = null;
  }

  @action
  save(e) {
    e.preventDefault();
    this.args.wine.description = this.description;
    this.args.wine.title = this.title;
    this.args.wine.img = this.img
    this.args.wine.price = parseInt(this.price) || 0;
    this.args.wine.save()
    this.router.transitionTo('wines');
  }

  @action
  reset(e) {
    e.target.reset();
    this.router.transitionTo('wines');
  }

  @action
  update() {
    this.description = this.args.wine.description;
    this.title = this.args.wine.title
    this.img = this.args.wine.img
    this.price = this.args.wine.price
  }

}
