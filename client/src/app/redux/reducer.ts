import { AppState } from './appState';
import { Action } from './action';
import { ActionType } from './actionType';

export class Reducer {
    public static reduce(oldState: AppState, action: Action): AppState {
        let newState = { ...oldState };

        switch (action.type) {

            // Logout case:
            case ActionType.LogOut:
                newState.products = [];
                newState.customer = null;
                newState.admin = null;
                newState.categories = [];
                newState.cartsItems = [];
                newState.cartItem = null;
                newState.cart = null;
                newState.cities = [];
                newState.totalAmount = 0;
                newState.latestOrder = null;
                break;

            // Get all products case:
            case ActionType.GetAllProducts:
                newState.products = action.payload;
                break;

            // Get all cartsItems by cartID case:
            case ActionType.CountAllProducts:
                newState.countProducts = action.payload;
                break;

            // Get all cartsItems by cartID case:
            case ActionType.CountAllOrders:
                newState.countOrders = action.payload;
                break;

            // Get all cartsItems by cartID case:
            case ActionType.GetAllCartsItems:
                newState.cartsItems = action.payload;
                break;

            // Add one product to cart Item:
            case ActionType.AddCartItem:
                newState.cartsItems.push(action.payload);
                break;

            //Get one customer case:
            case ActionType.GetOneCustomer:
                newState.customer = action.payload;
                break;

            // Get all carts case:
            case ActionType.GetAllCarts:
                newState.carts = action.payload;
                break;

            // Get one cart case:
            case ActionType.GetOneCart:
                newState.cart = action.payload;
                break;

            // Get admin case:
            case ActionType.GetAdmin:
                newState.admin = action.payload;
                break;

            // Get all categories case:
            case ActionType.GetCategories:
                newState.categories = action.payload;
                break;

            // Delete one cartItem case:
            case ActionType.DeleteOneCartItem:
                let index2 = -1;
                for (let i = 0; i < newState.cartsItems.length; i++) {
                    if (newState.cartsItems[i]._id === action.payload) {
                        index2 = i;
                    }
                }
                if (index2 !== -1) {
                    newState.cartsItems.splice(index2, 1);
                }
                break;

            // Delete all cartsItems from cart case:
            case ActionType.DeleteCartsItems:
                for (let i = 0; i < newState.cartsItems.length; i++) {
                    if (newState.cartsItems[i].cart._id === action.payload) {
                        newState.cartsItems = [];
                    }
                }
                break;

            // Get all cities case:
            case ActionType.GetCities:
                newState.cities = action.payload;
                break;

            // Save total amount:
            case ActionType.SaveTotalAmount:
                newState.totalAmount = action.payload;
                break;

            // Update cart status from "open:true" to "open:false" case:
            case ActionType.UpdateOneCart:
                for (let i = 0; i < newState.carts.length; i++) {
                    if (newState.carts[i]._id === action.payload._id) {
                        newState.carts[i] = action.payload;
                    }
                }
                break;

            // Update customer status from "newCustomer:true" to "newCustomer:false" case:
            case ActionType.UpdateCustomer:
                newState.customer = action.payload;
                break;

            // get usrtomer's latest order:
            case ActionType.GetLatestOrder:
                newState.latestOrder = action.payload;
                break;
        }
        return newState;
    }
}