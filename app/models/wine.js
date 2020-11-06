import Model, { attr } from '@ember-data/model';

export default class WineModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') img;
  @attr('number') price;
}
