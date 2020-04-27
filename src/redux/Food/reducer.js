const initialState = {
    name: '',
    imgUrl: '',
    detail: '',
    recipes: '',
    cook: ''
}

export const FoodForm = (data = initialState, action) => {
    switch (action.type) {
        case 'NAME': return { ...data, name: action.name }
        case 'IMGURL': return { ...data, imgUrl: action.imgUrl }
        case 'DETAIL': return { ...data, detail: action.detail }
        case 'RECIPES': return { ...data, recipes: action.recipes }
        case 'COOK': return { ...data, cook: action.cook }
        default: return data;
    }
}


export const FoodReducer = (foods = [], action) => {
    switch (action.type) {
        case 'ADD_FOOD': return action.foods
        default: return foods;
    }
}