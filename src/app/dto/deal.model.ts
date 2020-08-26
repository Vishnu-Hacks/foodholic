import { DealItem } from "./deal-item.model";

export class Deal {

    id: number;
    priorityOrder: number;
    hubCode: string;
    title: string; // title to display in the app besides the deal
    imageLink: string; // only for banners
    dealType: string; // banner, slide, listing
    itemType: string; // category,product, none
    dealItem: DealItem[];

    constructor() {
        this.dealItem = [];
    }
}


