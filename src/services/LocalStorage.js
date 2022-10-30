export const removeItem = (item) => {
    window.localStorage.removeItem(item);
}

export const getItem = (item) => {
   return  window.localStorage.getItem(item);
}

export const setItem = (ItemName, newItem) => {
    window.localStorage.setItem(ItemName, newItem);
}