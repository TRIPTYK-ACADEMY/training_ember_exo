import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class ShoppingCartService extends Service {
  @tracked _items = [];

  get numberOfItems(){
    return this._items.reduce((prev,next)=>{
      return prev+next.qt;
    },0)
  }

  get total(){
    return this._items.reduce((prev,next)=>{
      return prev+(next.qt * next.wine.price);
    },0)
  }

  get items(){
    return this._items;
  }

  addToCart(wine)
  {
    let item = this._items.find((item) => item.wine === wine);
    item ? set(item,'qt',item.qt+1) :this._items.push({wine,qt:1})
    this._items=[...this._items]
  }
}
