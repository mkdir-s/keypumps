export const addItemToBasket = (productData) => ({type: 'ADD_ITEM', productData: productData})
export const removeItemFromBasket = (productData) => ({type: 'REMOVE_ITEM', productData: productData})