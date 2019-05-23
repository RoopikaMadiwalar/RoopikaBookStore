export const ageUpAscn = (val) => {
    return { type:"AGE_UP", value: val};
};

export const ageUp = val =>{
    return dispatch => {
        setTimeout(() => {
            dispatch(ageUpAscn(val));
        },5000)
    }
}

export const ageDown = (val) => {
    return { type:"AGE_UP", value: val};
};