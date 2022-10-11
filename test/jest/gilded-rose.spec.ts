import {GildedRose} from '@/gilded-rose';
import {Item} from '@/domain/Item';

describe('Gilded Rose', () => {

  it('should never have a product with a quality below 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('should lower the quality and date with 1 when the day has ended and both are greater then 1', () => {
    const gildedRose = new GildedRose([new Item('foo', 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(4);
  });

  it('should lower the quality with 2 when the sell in date has passed', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(4);
  });

  it('should never have a product with a quality below 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('should increase the quality with 1 of the Aged Brie the older it gets', () => {
    const agedBrie = 'Aged Brie';
    const gildedRose = new GildedRose([new Item(agedBrie, 4, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(agedBrie);
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(11);
  });

  it('should never increase the quality of Aged Brie above 50', () => {
    const agedBrie = 'Aged Brie';
    const gildedRose = new GildedRose([new Item(agedBrie, 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(agedBrie);
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });

  it('should never increase the quality of Backstage passes above 50', () => {
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(backstagePasses, 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(backstagePasses);
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });

  it('should increase the quality of Backstage passes with 1 when the sellin date is larger then 10', () => {
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(backstagePasses, 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(backstagePasses);
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });

  it('should increase the quality of Backstage passes with 2 when the sellin date is lesser or equal to 10', () => {
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(backstagePasses, 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(backstagePasses);
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });

  it('should increase the quality of Backstage passes with 2 when the sellin date is lesser or equal to 5', () => {
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(backstagePasses, 4, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(backstagePasses);
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(23);
  });

  it('should drop the quality of the Backstage passes to 0 when the sellin date has been passed', () => {
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(backstagePasses, 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(backstagePasses);
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('should never alters the quality of the Sulfuras', () => {
    const sulfuras = 'Sulfuras, Hand of Ragnaros';
    const gildedRose = new GildedRose([new Item(sulfuras, 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(sulfuras);
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it('should decrease conjured items with 4 when the sellin date has been passed', () => {
    const conjuredManaCake = 'Conjured Mana Cake';
    const gildedRose = new GildedRose([new Item(conjuredManaCake, 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(conjuredManaCake);
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(26);
  });

  it('should decrease conjured items with 2 when the sellin date has not been passed', () => {
    const conjuredManaCake = 'Conjured Mana Cake';
    const gildedRose = new GildedRose([new Item(conjuredManaCake, 2, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(conjuredManaCake);
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(28);
  });

});
