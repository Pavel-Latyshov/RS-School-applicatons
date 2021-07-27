import { ADD_NEW_CATEGORY } from './types';

const initialState: any = {
  category: {
    action_a: './images/open.jpg',
    action_b: './images/swim.jpg',
    action_c: './images/hug.jpg',
    adjective: './images/happy.jpg',
    animal_a: './images/lion.jpg',
    animal_b: './images/dog.jpg',
    clothes: './images/shirt.jpg',
    emotions: './images/angry.jpg',
  },
};

export const CategoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
