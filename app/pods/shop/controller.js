import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShopController extends Controller {
  queryParams = ['title', 'price']
  @tracked title;
  @tracked price;

  @tracked options = [
    {
      title: "Prix croissant",
      field: "price",
      dir: "asc"
    },
    {
      title: "Prix décroissant",
      field: "price",
      dir: "desc"
    },
    {
      title: "Nom du produit croissant",
      field: "title",
      dir: "asc"
    },
    {
      title: "Nom du produit décroissant",
      field: "title",
      dir: "desc"
    }
  ]

  get filteredWines(){
    let wines = this.model;
    if(this.title){
      if(this.title === "asc"){
        return wines.sortBy("title")
      } else{
        return wines.sortBy('title').reverse();
      }
    }
    if(this.price){
      if(this.price === "asc"){
        return wines.sortBy("price")
      } else{
        return wines.sortBy('price').reverse();
      }
    }

    return wines;
  }
}
