import {Item} from '../domain/Item';

export function updateConjuredProduct(item: Item) {
  if (item.sellIn < 0) {
    item.quality -= 4;
  } else {
    item.quality -= 2;
  }
  if (item.quality <= 0) {
    item.quality = 0;
  }
}
