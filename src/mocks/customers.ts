import {Customer} from "@/types/Customer";

export const customers: Array<Customer> = [{
    id: "1",
    last_name: "Васильева",
    first_name: "Тоня",
    second_name: "Михайловна",
    birth_date: "03.09.1997",
    contact_number: "+375(29)893-3320",
    agreement: false,
    created_at: "01.07.2021",
    last_updated_at: "01.07.2021"
},{
    id: "2",
    last_name: "Басалай",
    first_name: "Евгений",
    second_name: "Юрьевич",
    birth_date: "06.02.1997",
    contact_number: "+375(29)893-0853",
    agreement: true,
    created_at: "15.11.2022",
    last_updated_at: "16.12.2022"
},{
    id: "3",
    last_name: "Трушин",
    first_name: "Александр",
    second_name: "Артемович",
    birth_date: "18.08.1999",
    contact_number: "+375(44)552-8599",
    agreement: true,
    created_at: "05.03.2022",
    last_updated_at: "08.03.2022"
}]