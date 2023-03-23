import {Category} from "@/enums/Category";
import {Purchase} from "@/types/Purchase";

export const purchases: Array<Purchase> = [{
    id: "1",
    datetime: "07.01.2022",
    customer_id: "1",
    brand_id: "2",
    category: Category.skirt,
    sum: 50
},{
    id: "1",
    datetime: "07.01.2022",
    customer_id: "1",
    brand_id: "1",
    category: Category.blouse,
    sum: 23.4
},{
    id: "2",
    datetime: "10.05.2022",
    customer_id: "3",
    brand_id: "3",
    category: Category.dress,
    sum: 67
},{
    id: "3",
    datetime: "07.02.2023",
    customer_id: "2",
    brand_id: "2",
    category: Category.blouse,
    sum: 5.5
}]