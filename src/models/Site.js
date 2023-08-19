import { Model, Field } from "json-modelizer";

export default class Site extends Model {
  static _table = "sitez";
  static schema = {
    title: Field.String(),
    poster: Field.String().Nullable(),
    url: Field.String(),
    description: Field.Text(),
  };
}
