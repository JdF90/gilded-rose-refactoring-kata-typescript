import {Item} from '../domain/Item';
import {IS_TOP_QUALITY} from '../helpers/QualityHelper';

export function updateAgedBrie(item: Item) {
  if (item.name != 'Aged Brie') {
    console.error('The item must be an aged brie');
    return;
  }
  if (IS_TOP_QUALITY(item.quality)) {
    return;
  }
  item.quality++;
}
