import { createSlice } from "@reduxjs/toolkit";

export const addtocartSlice = createSlice({
  name: "addToCart",
  initialState: {
    products: [
      {
        id: 1,
        title: "Samsung S21",
        description: "black in color",
        price: 2500,
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 1,
      },
      {
        id: 2,
        title: "Samsung M21",
        description: "white in color",
        price: 2500,
        img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 1,
      },
      {
        id: 3,
        title: "Redmi 9",
        description: "black in color",
        price: 3500,
        img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
        quantity: 1,
      },
      {
        id: 4,
        title: "Iphone 12",
        description: "Best mobile ever",
        price: 90500,
        img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
        quantity: 1,
      },
      {
        id: 5,
        title: "Samsung S21",
        description: "black in color",
        price: 2500,
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 1,
      },
      {
        id: 6,
        title: "Redmi 9",
        description: "black in color",
        price: 3500,
        img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
        quantity: 1,
      },
      {
        id: 7,
        title: "Samsung S21",
        description: "black in color",
        price: 2500,
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 1,
      },
      {
        id: 8,
        title: "Iphone 12",
        description: "Best mobile ever",
        price: 90500,
        img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
        quantity: 1,
      },
      {
        id: 9,
        title: "Samsung S21",
        description: "black in color",
        price: 2500,
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 1,
      },
    ],
    total: 0,
    count: 0,
    addedProduct: [],
    quantity: 1,
  },
  reducers: {
    addToCart: (state, action) => {
      state.count = state.count + 1;
      state.addedProduct = [...state.addedProduct, action.payload];
      state.total += action.payload.price;
    },
    increment: (state, action) => {
      state.quantity += 1;
      console.log(state.quantity);
      state.addedProduct = [
        ...state.addedProduct.map((val, index) => {
          return val.id === action.payload.id
            ? {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                price: val.price + state.products[val.id - 1].price,
                img: val.img,
                quantity: val.quantity + 1,
              }
            : val;
        }),
      ];
      state.total = state.total + state.products[action.payload.id - 1].price;
    },
    decrement: (state, action) => {
      state.quantity -= 1;
      state.addedProduct = [
        ...state.addedProduct.map((val) => {
          return val.id === action.payload.id
            ? {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                price:
                  val.price - state.products[val.id - 1].price <= 0
                    ? val.price
                    : val.price - state.products[val.id - 1].price,
                img: val.img,
                quantity: val.quantity - 1 <= 0 ? 1 : val.quantity - 1,
              }
            : val;
        }),
      ];
      if(action.payload.quantity===1){
      }else{
        state.total=state.total-state.products[action.payload.id-1].price
      }
      //state.total = state.total - state.products[action.payload.id - 1].price;
    },
  },
});
export const { addToCart, increment, decrement, counter } =
  addtocartSlice.actions;
export default addtocartSlice.reducer;
