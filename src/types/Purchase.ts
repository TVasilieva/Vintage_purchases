import {Category} from "@/enums/Category"

export type Purchase = {
    id: string,
    datetime: string,
    customer_id: string,
    category: Category,
    brand_id: string,
    sum: number
}