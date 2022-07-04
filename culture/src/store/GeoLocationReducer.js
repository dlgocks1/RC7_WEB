const initialState ={
    latitude : "37.5652352",
    longitude : "127.1791616",
}

const SET_GEO_LOCATION = "SET_GEO_LOCATION"

export const setGeoLocation = (data) =>{
    return{
        type : SET_GEO_LOCATION,
        data : data,
    }
}

const GeoLocationReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_GEO_LOCATION :{
            return {
                ...state,
                latitude : action.data.latitude,
                longitude : action.data.longitude,
            }
        }

        default : {
            return{
                ...state,
            }
        }
    }
}

export default GeoLocationReducer;