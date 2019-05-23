export default function(state= null,action){
    switch(action.type) {
        case 'GET_BOOK':
        return action.payload;

        default:
        return state;
    }
}