
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu,Dropdown, Input, Layout,Row, Col, Card,Breadcrumb, Icon, Avatar, Slider, Button, Carousel,List } from 'antd'
import style from './style'
import { connect } from 'react-redux'
import { getPlayList } from '../../redux/topic-list.reducer'

import { menuSchema, linkSchema, menuSeek } from '../../utils/schema'

import { BrowserRouter } from 'react-router-dom'
const { Meta } = Card

const ButtonGroup = Button.Group
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const Search = Input.Search


class MainHeader extends Component {
  state = {
    aaa:'aaa',
    show:'flex'
  }

  componentDidMount() {
    console.log(this)
  }
  showSubitem(id){

    return  id == 'index' ? this.setState({show:'flex'}) : this.setState({show:'none'})
  }
 
  render() {

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    )

 

    return (
      <header style={{height:'16%',background:'#242427',overflow:'hidden'}}>
      <Row style={{height:'66%',overflow:'hidden',padding:'0 1%'}}>
          <Col xs={10} sm={10} md={5} lg={5} xl={5} xxl={5} style={{height:'100%'}}>
          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
              <h1 style={{height:'30px', margin:'0 auto',color:'#fff',textShadow:'1px 1px rgba(255,255,255,1)'}}>DG MUSIC</h1>
          </div>
          </Col>
          <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={19}  style={{height:'100%'}}>
          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
          
          
          <Menu
          defaultSelectedKeys={['index']}
          mode="horizontal"
          theme="dark"
          style={{backgroundColor:'#242427',height:'100%'}}
          onTitleClick={()=>{console.log(this,11111)}}
         
          >

          {
            Object.keys(menuSchema).map((itemKey) =>(
              <Menu.Item style={{height:'100%',paddingTop:'5px',fontSize:'14px'}} key={itemKey} >
              <Link to={itemKey}  onClick = {()=>{this.showSubitem(itemKey)}}>
              {menuSchema[itemKey]} <sub></sub>
              </Link>
              </Menu.Item>
            ))
          }

         
          </Menu>
          <div style={{margin:'0 1%'}}>
              <Search
              placeholder="音乐/音乐/音乐"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
              enterButton
              />
          </div>

          <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
              登陆 <Icon type="down" />
              </a>
          </Dropdown>
          </div>
          </Col>
          <Col xs={14} sm={14} md={0} lg={0} xl={0} xxl={0}  style={{height:'100%'}}>

          <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>

              <div style={{marginRight:'5%'}}>
              <Search
              placeholder="音乐/音乐/音乐"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
              enterButton
              />
              </div>


              <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
              登陆 <Icon type="down" />
              </a>
              </Dropdown>
              </div>
          </Col>
      </Row>
      <div className='head-menu' style={{height:'34%',backgroundColor:'#C20C0C',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>


     
      <Menu
      defaultSelectedKeys={['discover']}
      mode="horizontal"
      theme="dark"
      style={{backgroundColor:'transparent',lineHeight:'19px',width:'60%',display:`${this.state.show}`,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}
      >
      {
          Object.keys(menuSeek).map((itemKey) =>(
              <Menu.Item style={{height:'20px',fontSize:'12px'}} key={itemKey}>
              <Link to={itemKey}>
              {menuSeek[itemKey]}
              </Link>
              </Menu.Item>
          ) ) 
      }
      </Menu>
 
   </div>
   
  </header>
    )
  }
}

export default MainHeader