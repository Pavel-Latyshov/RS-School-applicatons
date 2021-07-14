const initialState: any = {
    category: {
        action_a: "./images/open.jpg",
        action_b: "./images/swim.jpg",
        action_c: "./images/hug.jpg",
        adjective: "./images/happy.jpg",
        animal_a: "./images/lion.jpg",
        animal_b: "./images/dog.jpg",
        clothes: "./images/shirt.jpg",
        emotions: "./images/angry.jpg"
    }
}

export const CategoriesReducer = (state = initialState, action: any) => {

    switch (action.type) {
        default: return state
    }
}