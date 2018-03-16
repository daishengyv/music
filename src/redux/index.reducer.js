import { combineReducers } from 'redux'
import { topicListReducer } from './topic-list.reducer'
import { topicDetailReducer } from './topic-detail.reducer'
import { mainData } from './main-data'
         
export default combineReducers({
  topicListReducer,
  topicDetailReducer,
  mainData
})