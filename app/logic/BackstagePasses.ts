import {Item} from '../domain/Item';
import {IS_TOP_QUALITY} from '../helpers/QualityHelper';

export function updateBackstagePasses(item: Item) {
  if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
    console.error('The item must be the Backstage passes to a TAFKAL80ETC concert');
    return;
  }
  if (item.sellIn < 0) {
    item.quality = 0;
  }
  else if (item.sellIn <= 5) {
    item.quality += 3;
  }
  else if (item.sellIn <= 10) {
    item.quality += 2;
  } else {
    item.quality++;
  }
  if (IS_TOP_QUALITY(item.quality)) {
    item.quality = 50;
  }
}
