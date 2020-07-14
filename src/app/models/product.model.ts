import {Category} from "./category.model";
import { Chip } from './chip.model';

export class Product {
    id:number;
    categories?:Category[];
    name:String;
    description:String;
    price:number;
    chip?:Chip;
    image?:String;
  }