class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let item of this.items) {
      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert" &&
        item.name != "Conjured Mana Cake"
      ) {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality--;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality++;
          if (
            item.name == "Backstage passes to a TAFKAL80ETC concert" &&
            item.sellIn < 11
          ) {
            item.quality++;
          }
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }
      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0) {
              if (item.name != "Sulfuras, Hand of Ragnaros") {
                item.quality--;
              }
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality++;
          }
        }
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
