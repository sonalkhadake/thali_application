import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 0,
  products: [
    {
      id: 1,
      Name: "Chapati",
      Price: 10,
      Calories:"297 Calories per 1oog",
      Description: "A round flat unleavened bread of India that is usually made of whole wheat flour and cooked on a griddle.",
    
      Image:
        "https://zaykarecipes.com/wp-content/uploads/2017/02/soft-roti-recipe.jpg"
    },

    {
      id: 2,
      Name: "Rice",
      Price: 15,
      Description: "Jeera rice is a popular fried rice dish having the flavour of cumin that’s easy to make and goes well with any Indian side dish or gravy.",

      Calories:"130 Calories per 1oog",
    
      Image:
        "https://tse3.mm.bing.net/th?id=OIP.w5kX6MKMsvJ0915EpCWgXAHaFj&pid=Api&P=0&w=239&h=179"
    },
    {
      id: 3,
      Name: "Sabji",
      Price: 300,
      Calories:"65 Calories per 1oog",
      Description:"Paneer Butter Masala is one of India’s most popular paneer gravy recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is one that I have been making for a long time.",
      Image:
        "https://i.pinimg.com/originals/f5/6b/02/f56b025869058205da4999f8a35d0109.jpg"
    },
    {
      id: 4,
      Name: "Pickle",
      Price: 10,
      Description: "Mango pickle is a traditional Indian condiment usually prepared with raw mangoes, ingredients and oil. It can be eaten with every meal.",
      Calories:"28 Calories per cup",
    
      Image:
        "https://i0.wp.com/mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2016/12/mango-pickle-recipe-step-by-step-instructions-7.jpg?fit=1490%2C1166&ssl=1"
    },
    {
      id: 5,
      Name: "Curd",
      Price: 15,
      Calories:"98 Calories per 100g",
      Description:"Yogurt or curd based side dish is quite popular in Indian sub-continent. Any Indian home or restaurant menu is empty without yogurt based condiment known as “raita”.",
      Image:
        "https://hellolife4u.com/wp-content/uploads/2020/09/CURD2-1050x675.jpg"
    },
    {
      id: 6,
      Name: "Daal",
      Description:" Daal is a popular lentil based dish from the North Indian Cuisine and is often made in Indian homes.",
      Calories:"198 Calorie per bowl",
      Price: 50,
      
      Image:
        "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/15-feb/Dhaba_Style_Dal_Fry_Recipe-1.jpg"
    },
    {
      id: 7,
      Name: "Sweet",
      Description: "These soft sugar syrup soaked balls are a treat always. Sometimes to satisfy your sweet cravings, we making Gulab jamun.",
      Calories:"350 Calories per 2 pieces",
      Price: 150,
      
      Image:
        "https://www.lieferando.de/foodwiki/uploads/sites/8/2017/05/gulab-jamun-5-1080x881.jpg"
    },
    {
        id: 8,
        Name: "Icecream",
        Price: 150,
        Calories:"207 Calories per 2 100g",
        Description:"It Is Loaded With Vitamins and Minerals. Ice-cream contains milk and milk solids, which means whenever you eat ice cream, your body obtains the goodness of vitamin D.",
        Image:
          "https://tse2.mm.bing.net/th?id=OIP.mB0y6WQMfmtmnLdejjl8wwHaE7&pid=Api&P=0&w=300&h=300"
      }
  ],

  thali: []
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTothali: (state, action) => {
      state.thali.push(action.payload);
    },
    RemoveItems:(state, action)=>{
      state.thali = state.thali.filter(
        thaliItem => thaliItem.id!==action.payload.thaliItemId
      )
    },
    CheckOut:(state)=>{
      if(state.thali.length<2){
        alert("Thali must have atleast two items")
      }

       else 
      
        {
        alert("Proceed for the Payment")
      }
      
    }
  }
});

export const { addTothali, RemoveItems, CheckOut } = counterSlice.actions;
export const getTotal = state =>{
  return state.counter.thali.reduce((total, CartItem) => {
    return CartItem.totalPrice + total;

  },0)
}


export default counterSlice.reducer;
