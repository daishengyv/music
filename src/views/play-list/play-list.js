import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import {  playMusic, getList } from '../../redux/topic-list.reducer'
import { Link } from 'react-router-dom'
import { Menu,Dropdown, Input, Layout,Row, Col, Card,Breadcrumb, Icon, Avatar, Slider, Button, Carousel,List,Tag ,Collapse} from 'antd'

import axios from 'axios'

import RouterSubitem from '../../router/subitem'

import { BrowserRouter } from 'react-router-dom'

import { menuSchema, linkSchema, menuSeek } from '../../utils/schema'
const { Meta } = Card

const ButtonGroup = Button.Group
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const Search = Input.Search


const Panel = Collapse.Panel;






@connect(
  state => state.topicListReducer,
  { playMusic, getList }
)
class playLists extends Component {
    state = {
      playData:{},
      list:[]
    }

    componentDidMount() {
     
      this.getPlayList(this.props.location.search.match(/(\d+)/)[0])
        console.log(this.props.location,this)
    }

    componentWillReceiverProps(nextProps){
        if(nextProps.location.search !== this.props.location.search) {
            console.log(this.props.location)
        }
    }

    getPlayList(id){
      axios.get('/playlist/detail?id=' + id).then((res)=>{
        this.setState({playData:res.data.playlist,list:res.data.playlist.tracks})
        console.log(res.data.playlist)
      }).catch((err)=>{
        console.log(err)
      })
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
    const { topics, loading } = this.props

  
    return (
      <div style={{height:'100%',background:'#F5F5F5',overflowY:'auto',overflowX:'hidden'}}>


<Row>
             <Col xs={0} sm={0} md={1} lg={2} xl={2} xxl={2}></Col>

             <Col xs={24} sm={24} md={22} lg={20} xl={20} xxl={20}>

             
      <header style={{border:'1px solid #D3D3D3',margin:'0 auto',backgroundColor:'#fff'}}>
     
     <Content className='hot-recom'>


     <div style={{float:'left',width:'75%',borderRight:'1px solid #E1E1E1',padding:'4% 3%'}}>

     
     <Row>
             <Col xs={0} sm={0} md={6} lg={6} xl={6} xxl={6}>
             <img style={{width:'100%',padding:'0.5%',border:'1px solid #D5D5D5'}} src= {this.state.playData.coverImgUrl} />
             </Col>
             <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18} style={{padding:'0 0 5% 5%'}}>
             <h2 style={{}}> <Tag color="#CF1818" style={{borderRadius:' 70% 0'}}>歌单 ·</Tag>  {this.state.playData.name}</h2>
       <p>
         <img src="http://p1.music.126.net/eKcEL3WVOZdYjAfEQUdLqQ==/19052337486645099.jpg?param=40y40" alt=""/> <a href="javascript:;"> 升冉珏 </a> <span> 2018-01-08&nbsp;创建 </span>
       </p>
       <p style={{height:'32px',overflow:'hidden'}}>
       
     
     <ButtonGroup style={{marginRight:'1%'}}>
     <Button type="primary" onClick={()=>{console.log(this,this.props.getList(this.props.location.search.match(/(\d+)/)[0]))}}>播放 <Icon type="play-circle-o" /></Button>
     <Button type="primary"><Icon type="plus" /></Button>
     </ButtonGroup>

     
       <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="folder-add" /> (123)</Button>
       <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="share-alt" /> (123)</Button>
       <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="download" /> 下载</Button>
       <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="message" /> (123)</Button>
   
       </p>
       <p> 标签:&nbsp;  <Tag color="red">华语</Tag> <Tag color="gold">浪漫</Tag> <Tag color="lime">流行</Tag> </p>
      
        <Collapse bordered={false} >
          <Panel header="介绍:" key="1">
             <p style={{ paddingLeft: 24 }}>
              {this.state.playData.description}
            </p>
          </Panel>
        </Collapse>
             </Col>

     </Row>

     <Content>
       <header className='clearFloat' style={{borderBottom:'2px solid #C20C0C'}}>
         <span style={{font:'bold 20px/20px 微软雅黑'}}>歌曲列表</span>  <Tag color="#87d068">{this.state.list.length}首歌</Tag> <span style={{float:'right'}}>播放: <Tag color="#f50"> {this.state.playData.playCount}</Tag></span> 
       </header>
       <div style={{border:'1px solid #D9D9D9'}}>  
       <div style={{height:'35px',backgroundColor:'#F3F3F3',borderBottom:'1px solid #D9D9D9',lineHeight:'35px'}}>
       <span style={{height:'100%',width:'13%',borderRight:'1px solid #D9D9D9'}}></span>
       <span style={{height:'100%',width:'37%',borderRight:'1px solid #D9D9D9',verticalAlign:'top'}}> &nbsp; 歌曲标题</span>

       <span style={{height:'100%',width:'15%',borderRight:'1px solid #D9D9D9',verticalAlign:'top'}}> &nbsp; 时长</span>
       <span style={{height:'100%',width:'17%',borderRight:'1px solid #D9D9D9',verticalAlign:'top'}}> &nbsp; 歌手</span>
       <span style={{height:'100%',width:'17%',verticalAlign:'top'}}> &nbsp; 专辑</span>
       </div>

       
       {
        this.state.list.map((item,i) =>(
          <div style={{height:'30px',backgroundColor:`${i%2?'#F3F3F3':'#fff'}`,lineHeight:'30px'}} onClick={()=>{this.props.playMusic( item.al.id + ',' + item.id,item.name,item.ar[0].name )}} >
          <span style={{height:'100%',width:'13%',overflow:'hidden'}}>&nbsp; &nbsp;  {i}  &nbsp; <Icon type="play-circle-o" /></span>
          <span style={{height:'100%',width:'37%',verticalAlign:'top',overflow:'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}> &nbsp; {item.name}</span>
   
          <span style={{height:'100%',width:'15%',verticalAlign:'top'}}> &nbsp; { this.changeTime((item.dt + '' ).substr(0,3))}  </span>
          <span style={{height:'100%',width:'17%',verticalAlign:'top',overflow:'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}> &nbsp; {item.ar[0].name}</span>
          <span style={{height:'100%',width:'17%',verticalAlign:'top',overflow:'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}> &nbsp; {item.al.name}</span>
          </div>
        ))
    }

       </div>


     </Content>


     
     </div>
     <div style={{float:'left',width:'25%',padding:'4%'}}>
     <img style={{width:'100%'}} src="https://iadmat.nosdn.127.net/ad.bid.material_3773aa117202497ca347644cb4aeb73e?imageView&thumbnail=200x220&quality=100" alt=""/>
     </div>
     </Content>
    
   </header>

   

   <footer style={{ textAlign: 'center' }}>
   Dai Sheng Yu ©2017 Created by Antd React
   </footer>
             
             
             </Col>

             <Col xs={0} sm={0} md={1} lg={2} xl={2} xxl={2}></Col>

</Row>



  </div>
    )
  }
}

export default playLists