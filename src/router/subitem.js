import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import TopicRecommend from '../views/topic-list/topic-sub-recommend'



export default () => (
  <div style={{height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <Switch>
      <Route path="/" exact render={() => (<Redirect to="/index" />)} />,
      <Route path="/index/discover" component={TopicRecommend} />
    </Switch>
  </div>
)
