export class Product {

    title: string;
    productCode: string;
    parentCategoryCode: string;
    priority: number;
    dailyLimit: number;
    mrp: number;
    hubPrice: number;
    customerDiscount: number;
    retailDiscount: number;
    mainImage: string;
    images: string[];
    customerPrice: number;
    retailPrice: number;
    status: number;
    retailMinOrder: number;
    customerMaxOrder: number
    customerProduct: boolean;
    retailProduct: boolean;
    searchKeyword: string;

    constructor() {
      
    }
}