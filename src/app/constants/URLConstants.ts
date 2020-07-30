import {environment} from "../../environments/environment";

export const URLConstants = {
    MENU:environment.base_url + 'menu',
    INFORMATION: environment.base_url+'information',
    PAST_ORDERS: environment.base_url+'past_orders',
    PROFILE:"",
    ALL_PRODUCTS: environment.base_url+'all_products',
    SAVE_ADDRESS:"",
    DELETE_ADDRESS:"",
    UPDATE_ADDRESS: "",
    ADDRESS_LIST: environment.base_url+'address_list',
    CEP:"https://viacep.com.br/ws/{CEP_TO_CHANGE}/json/unicode/"
}
