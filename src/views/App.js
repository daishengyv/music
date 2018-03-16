import './antd.css'
import React, { Component } from 'react'
import axios from 'axios'


import MainHeader from './main-header/main-header'
import TopicIndex from './topic-index/topic-index'
import MainSubment from './main-submenu/main-submenu'
import RouterIndex from '../router/index'
import MainFooter from './main-footer/main-footer'
import { Menu,Dropdown, Input, Layout,Row, Col, Card,Breadcrumb, Icon, Avatar, Slider, Button, Carousel,List } from 'antd'
const { Meta } = Card

const ButtonGroup = Button.Group
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const Search = Input.Search



const data = [
  {
    title: 'Title 1',
    src:'http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg'
  },
  {
    title: 'Title 2',
    src:'http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg'
  },
  {
    title: 'Title 3',
    src:'http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg'
  },
  {
    title: 'Title 4',
    src:'http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg'
  },
];


class App extends Component {
    constructor() {
        super()
        this.state = {
          value: null,
          beginTime:0,
          allTime:0,
          switch:'caret-right',
          collapsed: false,
          time:'null'
        }
      }

      onCollapse = (collapsed) => {
        console.log(collapsed)
        this.setState({ collapsed })
      }

      componentDidMount() {
       
          let that = this
         

        //   setTimeout(function(){
        //        console.log(that.music.currentTime,that.music.duration);
        //        that.setState({allTime:that.music.duration})
        //        console.log(that.state)


        //        console.log( that.changeTime(that.music.duration))


        //        that.time = setInterval(function(){
        //         console.log(that.music.currentTime,that.music.duration)
        //         that.setState({beginTime:that.music.currentTime})
                 
                
        //         },1000/60)
        //     },500)

        




             // console.log(this,this.state,this.music)

        // (()=>{

        //   axios.get('/search', {
        //     params: {
        //       keywords : '海阔天空'
        //     },
        //   }).then((res) => {
        //     console.log(res)
        //   })
    
        // })()



    }

    componentWillUnmount() {
        console.log('this is componentWillUnmount')
    
    }
    currentTime(){
        
    }
    changeTime(num){
        num = parseInt(num)
        let m = Math.floor(num%3600/60)
        m = m<=9? '0'+ m:m
        let s = Math.floor(num%60)
        s = s<=9? '0'+ s:s
        return m +':'+s
    }
    render() {

        return (
            <div style={{width:'100%',height:'100%'}}>
                <MainHeader />
                <RouterIndex />
                <MainFooter/>
            </div>
        )
    }
}

export default App