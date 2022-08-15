const ADD_FAVERITE_DATA = "ADD_FAVERITE_DATA"
const SUB_FAVERITE_DATA = "SUB_FAVERITE_DATA"
const SET_FAVERITE_DATA = "SET_FAVERITE_DATA"

export const addFaveriteDataAction = (data) =>({
        type : ADD_FAVERITE_DATA,
        data,
    })

export const setFaveriteDataAction = (data) =>({
        type : SET_FAVERITE_DATA,
        data,
    })


export const subFaveriteDataAction = (data) =>({
        type : SUB_FAVERITE_DATA,
        data,
    })
