export const ADD_TO_FAV = "ADD_TO_FAV"
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV"
export const addTrackFav = (track)=>{
    return {
        type:ADD_TO_FAV,
        payload:track,
        
    }
}
export const removeTrack = (i)=>{
    return{
        type:REMOVE_FROM_FAV,
        payload:i,
        
    }
}
let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

export const addTrackFavThunk = (id)=>{
    return async(dispatch,getState)=>{
        try {
            let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/track/"+id,{
                method:"GET",
                headers,
            }
            )
            if(resp.ok){
                let data = await resp.json()
                dispatch(addTrackFav(data))
            }
            
        } catch (error) {
            
        }
    }
}