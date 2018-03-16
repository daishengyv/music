
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
         <Layout style={{ padding: '24px 0', background: '#fff' }}>

         <Row>
             <Col xs={0} sm={0} md={2} lg={3} xl={3} xxl={3}></Col>

             <Col xs={24} sm={24} md={10} lg={15} xl={15} xxl={15}>

             <Content style={{ padding: '0 24px', minHeight: 280 }}>
             
          
             

             <div className="clearFloat">
             <header style={{width:'100%',borderBottom:'2px solid red',paddingTop:'20px'}}>
             <h3> <span style={{border:'4px solid red',borderRadius:'100%',width:'12px',height:'12px'}}></span> 新碟上架</h3>
             </header>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}><Icon type="play-circle-o" /></span><span>sssssssssssssss</span></div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>  </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>
             <div style={{float:'left',width:'140px',paddingLeft:'2%',paddingTop:'2%'}}><img style={{width:'100%',marginBottom:'-20px'}} src="http://p1.music.126.net/7ACmNrSV20eUnAsD98F7xQ==/109951163093989641.jpg" alt=""/> <span style={{display:'inline-block',color:'#fff',width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>1111111111</span><span>sssssssssssssss</span>   </div>

             </div>

             <div className="clearFloat">
             <header style={{width:'100%',borderBottom:'2px solid red',paddingTop:'20px'}}>
             <h3> <span style={{border:'4px solid red',borderRadius:'100%',width:'12px',height:'12px'}}></span> 榜单</h3>
             </header>

             <List
             itemLayout="horizontal"
             dataSource={data1}
             renderItem={item => (
             <List.Item>
                 <List.Item.Meta
                 avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                 title={<a href="https://ant.design">{item.title}</a>}
                 description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                 />
             </List.Item>
             )}
             />
      
             </div>
             

         </Content>

             </Col>
             <Col xs={0} sm={0} md={10} lg={3} xl={3} xxl={3}>
             <Sider width={200} style={{ background: '#fff',borderLeft:'1px solid #D4D4D4',padding:'0 20px',height:'100%' }}>
         <div style={{borderBottom:'1px solid #D4D4D4'}}>入驻歌手</div>
         <Menu
             mode="inline"
             defaultSelectedKeys={['1']}
             defaultOpenKeys={['sub1']}
             style={{ height: '100%' }}
         >
         <Menu.Item key="1"><Icon type="user" /><span>nav 1</span></Menu.Item>
         <Menu.Item key="2"><Icon type="video-camera" /><span>nav 2</span></Menu.Item>
         <Menu.Item key="3"><Icon type="upload" /><span>nav 3</span></Menu.Item>
         </Menu>
         </Sider>

             </Col>
             <Col xs={0} sm={0} md={2} lg={3} xl={3} xxl={3}></Col>
         </Row>

        
         </Layout>
         </Content>
         <Footer style={{ textAlign: 'center' }}>
         Ant Design ©2016 Created by Ant UED
         </Footer>
     </Layout>

    
      <RouterSubitem />

  </div>
    )
  }
}

export default TopicIndex