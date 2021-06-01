const initialState = {
    data: []
}
export default function ActionReducer(state = initialState, action) {
    switch (action.type) {
        case 'BUY':
            return {
                ...state,
                data: [...state.data, { goods: action.payload }]
            };
        case 'DELETE':
            return {
                ...state,
                data: state.data.filter(data => data.goods.id !== action.payload)
            };
        default:
            return state;
    }
}