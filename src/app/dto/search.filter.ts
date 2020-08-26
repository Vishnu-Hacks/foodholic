export class SearchFilter {
  sortBy: string;
  filterBy: FilterBy[];
}

export class FilterBy {
  field: string;
  value: string;
}

export class FilterConstants {
  static SORT_BY_PRICE_HIGH_TO_LOW = 'priceHighToLow';
  static SORT_BY_PRICE_LOW_TO_HIGH = 'priceLowToHigh';
  static SORT_BY_RELEVANCE = 'relevance';
  static SORT_BY_DISCOUNT = 'discount';

}
