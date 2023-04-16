export const ADD_ALBUM_ROCK = "ADD_ALBUM_ROCK"
export const ADD_ALBUM_HIP = "ADD_ALBUM_HIPPOP"
export const ADD_ALBUM_POP = "ADD_ALBUM_POP"
export const ADD_ALBUM_ARTIS = "ADD_ALBUM_ARTIS"
export const ADD_SINGLE_ALBUM = "ADD_SINGLE_ALBUM"
export const ADD_QUERY_RESULT = "ADD_QUERY_RESULT"

export const addAlbumRock = (album)=>{
    return{
        type: ADD_ALBUM_ROCK,
        payload:album
    }
}
export const addAlbumHipPop = (album)=>{
    return{
        type: ADD_ALBUM_HIP,
        payload:album
    }
}
export const addAlbumPop = (album)=>{
    return{
        type: ADD_ALBUM_POP,
        payload:album
    }
}
export const addAlbumArtis = (album)=>{
    return{
        type:ADD_ALBUM_ARTIS,
        payload:album
    }
}
export const addSingleAlbum = (album)=>{
    return {
        type:ADD_SINGLE_ALBUM,
        payload:album
    }
}
export const addQueryResult = (album)=>{
    return {
        type: ADD_QUERY_RESULT,
        payload:album
    }
}
let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
export const addAlbumArtistaThunk = (artistName,gender)=>{
    return async (dispatch, getState)=>{
        try {
            let resp = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q='+artistName,{
                method: "GET",
                headers,

            })
            if(resp.ok){
                let {data}= await resp.json()
                if(gender==="rock"){
                    dispatch(addAlbumRock(data))
                    
                    
                }else if(gender ==="hipHop"){
                    dispatch(addAlbumHipPop(data))
                    
                }else if(gender==="pop"){
                    dispatch(addAlbumPop(data))
                }else if(gender==="albumArtist"){
                    dispatch(addAlbumArtis(data))
                }else{
                    dispatch(addQueryResult(data))
                }
                
            }
        } catch (error) {
            
        }
    }
}

export const addSingleAlbumThunk = (id)=>{
    return async (dispatch,getState)=>{
        try {
            let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+id,{
                method:"GET",
                headers,
            })
            if(resp.ok){
                let data = await resp.json()
                console.log(data)
                 dispatch(addSingleAlbum(data))
            }
        } catch (error) {
            
        }
    }

}