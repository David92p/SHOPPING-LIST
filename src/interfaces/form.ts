import { Products } from "./products";
import { Measures } from "./measures";

export interface Form {
  type: string;
  select: HTMLSelectElement;
  list: Products | Measures;
}
