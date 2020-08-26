export class UrlConstant {

  public static DEV_URL_PREFIX = 'http://fiweadminportaldev-env.eba-prmacaby.ap-south-1.elasticbeanstalk.com/';
  public static LOCAL_URL_PREFIX = 'http://192.168.1.4:8080/';

  public static UPDATE_PICKUP_STATION = UrlConstant.LOCAL_URL_PREFIX + 'pickup/';
  public static GET_PICKUP_STATION = UrlConstant.LOCAL_URL_PREFIX + 'pickup/';
  public static GET_ALL_PICKUP_STATION = UrlConstant.LOCAL_URL_PREFIX + 'all/pickup/';

  public static GET_CATEGORY_PRODUCTS = UrlConstant.LOCAL_URL_PREFIX + 'all/product/';
  public static GET_PRODUCT = UrlConstant.LOCAL_URL_PREFIX + 'product/';
  public static UPDATE_PRODUCT = UrlConstant.LOCAL_URL_PREFIX + 'product/';
  public static GET_ALL_PRODUCT = UrlConstant.LOCAL_URL_PREFIX + 'all/hub/products/';
  public static DELETE_PRODUCT = UrlConstant.LOCAL_URL_PREFIX + 'delete/product/';

  public static GET_CATEGORY = UrlConstant.LOCAL_URL_PREFIX + 'category/';
  public static GET_ALL_PARENT_CATEGORY = UrlConstant.LOCAL_URL_PREFIX + '/all/parent/category';
  public static GET_ALL_SUB_CATEGORY = UrlConstant.LOCAL_URL_PREFIX + '/all/sub-category/';
  public static UPDATE_CATEGORY = UrlConstant.LOCAL_URL_PREFIX + 'update/category';
  public static DELETE_CATEGORY = UrlConstant.LOCAL_URL_PREFIX + 'delete/category/';


  public static UPDATE_HUB = UrlConstant.LOCAL_URL_PREFIX + 'update/hub';
  public static UPDATE_HUB_STATUS = UrlConstant.LOCAL_URL_PREFIX + 'update/hub/status';
  public static GET_HUB = UrlConstant.LOCAL_URL_PREFIX + 'hub/';
  public static GET_ALL_HUB = UrlConstant.LOCAL_URL_PREFIX + 'all/hub/';

  public static GET_ALL_DEALS = UrlConstant.LOCAL_URL_PREFIX + 'all/deals/';
  public static SAVE_DEAL = UrlConstant.LOCAL_URL_PREFIX + 'save/deal';
  public static GET_DEAL = UrlConstant.LOCAL_URL_PREFIX + 'deal/';
  public static ARCHIVE_DEAL = UrlConstant.LOCAL_URL_PREFIX + 'archive/deal/';
  public static GET_ALL_ARCHIVE_DEALS = UrlConstant.LOCAL_URL_PREFIX + 'archive/deal/';


  public static GOOGLE_LOCATION_SEARCH = UrlConstant.LOCAL_URL_PREFIX + 'location/autocomplete?q=';
  public static GOOGLE_LOCATION_FIND = UrlConstant.LOCAL_URL_PREFIX + 'location/places/';

  public static DELETE_IMAGE = UrlConstant.LOCAL_URL_PREFIX + 'delete/image';
  public static IMAGE_UPLOAD = UrlConstant.LOCAL_URL_PREFIX + 'upload/hub/images';

  public static INCOMING_ORDERS = UrlConstant.LOCAL_URL_PREFIX + 'incoming/orders/';
  // {hubId}/{statusCode}/{pageNum}/{type}
  public static ORDERS_BY_STATUS = UrlConstant.LOCAL_URL_PREFIX + 'orders/by/status/';
  public static CHANGE_ORDER_STATUS = UrlConstant.LOCAL_URL_PREFIX + 'change/status/';
  public static ORDER_DETAIL = UrlConstant.LOCAL_URL_PREFIX + 'orders/detail/';
  public static SORTED_ORDED_ITEMS = UrlConstant.LOCAL_URL_PREFIX + 'sorted/order/items/';

}
