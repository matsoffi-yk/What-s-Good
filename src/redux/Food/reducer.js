const initialState = {
    name: '',
    imgUrl: '',
    detial: '',
    recipes: '',
    cook: '',
}

export const formReducer = (data = initialState, action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...data,
                foods: [...data.foods, action.payload]
            }
        default: return data;
    }
}


export const FoodReducer = (foods = [], action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            return [
                ...foods,
                action.payload
            ]
        default: return foods;
    }
}