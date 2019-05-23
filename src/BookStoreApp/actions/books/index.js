import ajax from '../../utils/ajax';

function add(payload) {
    return {
        type: 'ADD_BOOK',
        payload
    };
};

function get(){
    return{
        type: 'GET_BOOK',
        payload: ajax({
            url:'/Books'
        })
    }
}

export {
    add,
    get
}