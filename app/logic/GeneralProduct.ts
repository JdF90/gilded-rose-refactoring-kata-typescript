import {Item} from '../domain/Item';

export function updateGeneralProduct(item: Item) {
  if (item.sellIn < 0) {
    item.quality -= 2;
  } else {
    item.quality--;
  }
  if (item.quality <= 0) {
    item.quality = 0;
  }
}
