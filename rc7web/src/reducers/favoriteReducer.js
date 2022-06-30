const initialState = {itemList : [
    {
        id: 1,
        imgURL: "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b"
    },
    {
        id:2,
        imgURL : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0TQHSEkFWs5o4yxLpxECOd0LLz8jYSVSPfYTGUqeobbo47v3ZtLUlHy0_iB902i_Qkaym_5xqtBmrbSC-SA3IGiFEBqHB60ws.webp?r=e21",
    },
    {
        id:3,
        imgURL : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016",
    },
    {
        id:4,
        imgURL : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeCe-kvmuDkecOXPKIE8a_TqHhxJJVGe3QBNm6lXk_JLgAm_auorhMHjb-btjetwACpRfm7gP0_9NuFQglcSsJ-P5hSFO1eypgk.webp?r=d9d",
    },
    {
        id:5,
        imgURL : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
    },
    {
        id:6,
        imgURL : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYgWJ6sza5wAeAXUIQQjnhcB27IvrAodRxKEZLtIg6nKsw8UjQT0Fdr1_mdMvVnIsM3upB8DViSzFW3aaaxz2-q1NXHW2xSjiC7BKMkwq7Zr9e31DXc3RxmYfixuzS356Zn_zmfsbkwi9Vw3CYJu3pXntR-5OcFzCltupe30B4GknJ30sJrg_PpSOc0uZ01T2H2O.webp?r=7ff",
    }
]}

const ADD_FAVERITE_DATA = "ADD_FAVERITE_DATA"
const SUB_FAVERITE_DATA = "SUB_FAVERITE_DATA"
const SET_FAVERITE_DATA = "SET_FAVERITE_DATA"

export const addFaveriteDataAction = (data) =>{
    return{
        type : ADD_FAVERITE_DATA,
        data : data,
    }
}

export const setFaveriteDataAction = (data) =>{
    return{
        type : SET_FAVERITE_DATA,
        data : data,
    }
}


export const subFaveriteDataAction = (data) =>{
    return{
        type : SUB_FAVERITE_DATA,
        data : data,
    }
}

const favoriteDataReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FAVERITE_DATA :{
            return {
                ...state,
                itemList : [...state.itemList, action.data],
            }
        }
        case SUB_FAVERITE_DATA :{
            return {
                ...state,
                itemList : state.itemList.filter((element) => element.id !== action.data.id),
            }
        }
        case SET_FAVERITE_DATA:{
            return {
                ...state,
                itemList : action.data,
        }
        }
        default : {
            return{
                ...state,
            }
        }
    }
}

export default favoriteDataReducer;