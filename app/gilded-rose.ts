import {Item} from '../app/domain/Item';
import {updateAgedBrie} from '../app/logic/AgedBrie';
import {updateBackstagePasses} from '../app/logic/BackstagePasses';
import {updateSulfuras} from '../app/logic/Sulfuras';
import {updateGeneralProduct} from '../app/logic/GeneralProduct';
import {updateConjuredProduct} from '../app/logic/ConjuredProducts';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];
      if (currentItem.name == 'Sulfuras, Hand of Ragnaros') {
        updateSulfuras(currentItem);
      } else {
        updateOtherProducts(currentItem);
      }
    }

    return this.items;
  }
}

function updateOtherProducts(item: Item) {
  item.sellIn--;
  switch(item.name) {
    case 'Aged Brie':
      updateAgedBrie(item);
      break;
    case 'Backstage passes to a TAFKAL80ETC concert':
      updateBackstagePasses(item);
      break;
    case 'Conjured Mana Cake':
      updateConjuredProduct(item);
      break;
    default:
      updateGeneralProduct(item);
  }
}
