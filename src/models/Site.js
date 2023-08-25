import { Field, Model } from "json-modelizer";

export default class Site extends Model {
  static _table = "sitez";
  static schema = {
    title: Field.String,
    poster: Field.String.Default("/images/placeholder.webp"),
    url: Field.String,
    description: Field.Text,
  };
}
