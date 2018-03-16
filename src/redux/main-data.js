import axios from 'axios'

const GET_TOPICS_SUCC = 'GET_TOPICS_SUCC'
const GET_TOPICS_ERR = 'GET_TOPICS_ERR'
const GET_PLAYLIST_SUCC = 'GET_PLAYLIST_SUCC'
const GET_PLAYLIST_ERR =  'GET_PLAYLIST_ERR'
const GET_TOPLIST_SUCC = 'GET_TOPLIST_SUCC'
const GET_TOPLIST_ERR =  'GET_TOPLIST_ERR'


const GET_DATA_SUCC = 'GET_TOPLIST_SUCC'
const GET_DATA_ERR =  'GET_TOPLIST_ERR'

const LOADING = 'LOADING'
const LOADEND = 'LOADENG'

let init = {
  loading: false,
  playData:[],
  playList:[]
}

export function mainData(state = init, action) {
 
  if (action.type === GET_TOPICS_SUCC) {
    console.log(1111,action)
    return { ...state, success: action.payload.success, topics: action.payload.data }
  }
  
  if (action.type === GET_TOPICS_ERR) {
    console.log(2222,action)
    return { ...state, msg: action.payload.msg , topics: action.payload }
  }

  if (action.type === GET_PLAYLIST_SUCC) {
    console.log(3333,action)
    return { ...state, success: action.payload.success, playData: action.payload.data }
  }
  
  if (action.type === GET_PLAYLIST_ERR) {
    console.log(4444,action)
    return { ...state, msg: action.payload.msg , playData: action.payload }
  }

  console.log(9999,action)
  return state
}




export function getData(search) {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('/personalized').then((res)=>{

     
     
      if (res.status === 200) {
        console.log(res.data.result)
        dispatch({ type: GET_DATA_SUCC, payload: res.data.result })
      } else {
        dispatch({ type: GET_DATA_ERR, payload: res.data.result })
      }
      dispatch({ type: LOADEND })

    }).catch((err)=>{
      if (err.response) {
        dispatch({ type: GET_DATA_ERR, payload: err.response.data })
      } else {
        dispatch({ type: GET_DATA_ERR, payload: {msg: err.message } })
      }
  
      console.log(err)
    })
  }
}














































