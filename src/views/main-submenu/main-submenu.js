import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu,Dropdown, Input, Layout,Row, Col, Card,Breadcrumb, Icon, Avatar, Slider, Button, Carousel,List } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { menuSchema, linkSchema, menuSeek } from '../../utils/schema'
const { Meta } = Card
const ButtonGroup = Button.Group
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const Search = Input.Search

class MainSubmenu extends Component {

    render() {

        return(
            <BrowserRouter  basename='index'>
                <Menu
                defaultSelectedKeys={['discover']}
                mode="horizontal"
                theme="dark"
                style={{backgroundColor:'transparent', width:'60%',height:'20px',lineHeight:'19px',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}
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
            </BrowserRouter>
            
        )

    }
}


export default MainSubmenu