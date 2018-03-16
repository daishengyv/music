
import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { getTopicList, getPlayList } from '../../redux/topic-list.reducer'
import { Link } from 'react-router-dom'
import { Menu,Dropdown, Input, Layout,Row, Col, Card,Breadcrumb, Icon, Avatar, Slider, Button, Carousel,List } from 'antd'

import axios from 'axios'

import RouterSubitem from '../../router/subitem'

import { BrowserRouter } from 'react-router-dom'

import { menuSchema, linkSchema, menuSeek } from '../../utils/schema'
const { Meta } = Card

const ButtonGroup = Button.Group
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const Search = Input.Search


class TopicIndex extends Component {
    state = {
       hot:[],
       bn:'sssssss'
    }

    componentDidMount() {
      
        console.log(this.props.location)
        axios.get('/personalized').then((res) => {
           
            this.setState({hot:res.data.result})
            console.log(res.data.result,this.state.hot)
          })
        
    }

    componentWillReceiverProps(nextProps){
        if(nextProps.location.search !== this.props.location.search) {
            console.log(this.props.location)
        }

    }
 
  render() {
    const data1 = [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];

 
     
    return (
      <div style={{height:'100%',background:'#F5F5F5',overflowY:'auto',overflowX:'hidden'}}>

    
     <Layout>
         <Content >
        <h1 style={{height:'50%',textAlign:'center',lineHeight:'260px'}}>未开发，敬请期待</h1>
         </Content>
         <Footer style={{ textAlign: 'center' }}>
         DaiShengYu ©2017 Created by  React and Ant UED
         </Footer>
     </Layout>

    

  </div>
    )
  }
}

export default TopicIndex