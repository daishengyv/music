import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import TopicIndex from '../views/topic-index/topic-index'
import TopicOther from '../views/topic-other/topic-other'
import PlayList from '../views/play-list/play-list'
import TopList from '../views/topic-list/topic-list'
import MainUndefind from '../views/main-undefind/main-undefind'
import TopicPlayList from '../views/topic-playList/topic-playList'
import TopicDjradio from '../views/topic-djradio/topic-djradio'
import TopicArtist from '../views/topic-artist/topic-artist'
import TopicAlbum from '../views/topic-album/topic-album'

export default () => (
  <div style={{height:'74%'}}>
    <Switch>
      <Route path="/" exact render={() => (<Redirect to="/index" />)} />,
      <Route path="/index" exact component={TopicIndex} />
      <Route path="/my" component={MainUndefind} />
      <Route path="/friend" component={MainUndefind} />
      <Route path="/product" component={MainUndefind} />
      <Route path="/nmusician" component={MainUndefind} />
      <Route path="/download" component={MainUndefind} />



      <Route path="/discover" component={TopicIndex} />
      <Route path="/toplist" component={TopList} />
      <Route path="/playlist" component={TopicOther} />
      <Route path="/djradio" component={TopicOther} />
      <Route path="/artist" component={TopicOther} />
      <Route path="/album" component={TopicOther} />


      <Route path="/list" component={PlayList} />




    </Switch>
  </div>
)
