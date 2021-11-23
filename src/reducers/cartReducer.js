const initialState = {
  cart: []
};
// []
export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      console.tron.log('action', action) // => { type: "ADD_TO_CART", data: data }
      // kiem tra sp da co trong gio hang hay chua
      const isIndExisted = state.cart?.findIndex(e => e?._id === action.data?._id) // nếu có sp thì trả ra index của phần tử đó, còn không thì trả ra -1
      if (isIndExisted !== -1) {
        state.cart[isIndExisted].quantity = state.cart[isIndExisted].quantity + 1
        console.tron.log('state.cart', state.cart)
        return {
          cart: [...state.cart]
        }
      } else {
        // chua co trong gio hang
        return {
          cart: [...state.cart, action.data]
        };
      }

    case "INCREASE_QUANTITY":
      const isIndExistedIncreaseQuantity = state.cart?.findIndex(e => e?._id === action.data?._id) // tim index cua item đấy trong mảng cart
      state.cart[isIndExistedIncreaseQuantity].quantity = state.cart[isIndExistedIncreaseQuantity].quantity + 1
      return {
        cart: [...state.cart]
      }
    case "REDUCE_QUANTITY":
      const isIndExistedReduceQuantity = state.cart?.findIndex(e => e?._id === action.data?._id)
      state.cart[isIndExistedReduceQuantity].quantity = state.cart[isIndExistedReduceQuantity].quantity - 1
      return {
        cart: [...state.cart]
      }

    case "REMOVE_ALL":
      return {
        cart: []
      }



    default:
      return state;
  }
}
