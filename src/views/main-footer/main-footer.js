
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTopicList } from '../../redux/topic-list.reducer'


import { Menu,Dropdown, Input, Layout,Row, Col, Card,Breadcrumb, Icon, Avatar, Slider, Button, Carousel,List,Tag ,Collapse ,Spin} from 'antd'

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
    { getTopicList }
  )
class MainFooter extends Component {

    state = {
        value: null,
        beginTime:0,
        allTime:0,
        switch:'caret-right',
        collapsed: false,
        time:'null',

        playData:{},
      list:[],
      data:{},
   
      loading:true

      }
   

      onCollapse = (collapsed) => {
        console.log(collapsed)
        this.setState({ collapsed })
      }

      componentDidMount() {
       
          let that = this
         

          setTimeout(function(){

               console.log(that.music.currentTime,that.music.duration,that.state);

           
               console.log( that.changeTime(that.music.duration))


               that.time = setInterval(function(){
                console.log(that.music.currentTime,that.music.duration)
                that.setState({beginTime:that.music.currentTime,allTime:that.music.duration})
                 
                
                },1000/60)


            },500)

        

        // (()=>{

        //   axios.get('/search', {
        //     params: {
        //       keywords : '海阔天空'
        //     },
        //   }).then((res) => {
        //     console.log(res)
        //   })
    
        // })()
        //-webkit-linear-gradient(left, blue 26%, orange 37%, yellow 36%)



    }

    componentWillUnmount() {
        console.log('this is componentWillUnmount')
    
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
<footer style={{height:'10%',position:'relative'}}>
<div style={{position:'absolute',height:'0%',width:'100%', backgroundColor:'#C20C0C',bottom:'100%',zIndex:'10',overflow:'hidden'}}>
<Row>
<Col xs={0} sm={0} md={1} lg={2} xl={2} xxl={2}></Col>
<Col xs={24} sm={24} md={22} lg={20} xl={20} xxl={20}>
<header className='hot-recom' style={{border:'1px solid #D3D3D3',margin:'0 auto',backgroundColor:'#fff'}}>

<div  style={{float:'left',width:'50%',height:'420px',overflowY:'outo',textAlign:'center',overflowY:'auto'}}>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
   <p>今天我 寒夜里看雪飘过</p>
</div>

<div style={{float:'right', width:'50%',padding:'4% 3%',borderLeft:'1px solid #E1E1E1'}}>

    <Spin size="large"  style={{textAlign:'center',width:'100%'}}  spinning={this.state.loading}  />
        
    <p style={{height:'32px',overflow:'hidden'}}>
        <ButtonGroup style={{marginRight:'1%'}}>
        <Button type="primary" onClick={()=>{console.log(this)}}>播放 <Icon type="play-circle-o" /></Button>
        <Button type="primary"><Icon type="plus" /></Button>
        </ButtonGroup>
        <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="folder-add" /> (123)</Button>
        <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="share-alt" /> (123)</Button>
        <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="download" /> 下载</Button>
        <Button style={{marginRight:'1%',backgroundColor:'#F6F6F6'}}><Icon type="message" /> (123)</Button>
    </p>
        
    <div style={{border:'1px solid #D9D9D9'}}>  
        <div style={{height:'35px',backgroundColor:'#F3F3F3',borderBottom:'1px solid #D9D9D9',lineHeight:'35px'}}>
            <span style={{height:'100%',width:'17%',borderRight:'1px solid #D9D9D9'}}></span>
            <span style={{height:'100%',width:'41%',borderRight:'1px solid #D9D9D9',verticalAlign:'top'}}> &nbsp; 歌曲标题</span>
            <span style={{height:'100%',width:'19%',borderRight:'1px solid #D9D9D9',verticalAlign:'top'}}> &nbsp; 时长</span>
            <span style={{height:'100%',width:'23%',verticalAlign:'top'}}> &nbsp; 歌手</span>
        </div>
        <div style={{height:'300px',overflowY:'auto'}}>   
            {
            this.props.playData.map((item,i) =>(
            <div style={{height:'30px',backgroundColor:`${i%2?'#F3F3F3':'#fff'}`,lineHeight:'30px'}} onClick={()=>{this.props.playMusic( item.al.id + ',' + item.id,item.name,item.ar[0].name )}} >
            <span style={{height:'100%',width:'17%',overflow:'hidden'}}>&nbsp; &nbsp;  {i}  &nbsp; <Icon type="play-circle-o" /></span>
            <span style={{height:'100%',width:'41%',verticalAlign:'top',overflow:'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}> &nbsp; {item.name}</span>
            <span style={{height:'100%',width:'19%',verticalAlign:'top'}}> &nbsp; { this.changeTime((item.dt + '' ).substr(0,3))}  </span>
            <span style={{height:'100%',width:'23%',verticalAlign:'top',overflow:'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}> &nbsp; {item.ar[0].name}</span>
            </div>
            ))
            }
        </div>     
    </div>
</div>

</header>
</Col>
<Col xs={0} sm={0} md={1} lg={2} xl={2} xxl={2}></Col>
</Row>
</div>








        <div style={{width:'100%',height:'6%',background:'#fff',position:'relative',backgroundColor: 'rgba(0,0,0,0.3)'}}>
            <div style={{position:'absolute',width:`${this.state.beginTime/this.state.allTime*100}%`,height:'100%',top:'0',backgroundColor:'#C20C0C'}}></div>
            <div style={{position:'absolute',bottom:'115%',width:'80px',marginLeft:'-80px',textAlign:'center',left:`${this.state.beginTime/this.state.allTime*100}%`,backgroundColor:'rgba(0,0,0,0.1)'}}>{this.changeTime(this.state.beginTime)}/{this.changeTime(this.state.allTime)}</div>
        </div>
        <Row style={{height:'94%',overflow:'hidden'}}>
            <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} style={{height:'100%'}}>
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                <img style={{height:'100%',margin:'0 1%'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/>
                <div>
                    <div onClick={()=>{console.log(this)}}>ssssssss {this.props.topics.mname}</div>
                    <div> {this.props.topics.rname}</div>
                </div>
            </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}  style={{height:'100%'}}>
            <audio  ref={(audio) => {this.music = audio;}} src= { this.props.topics.data[0].url  } />
                <ButtonGroup style={{height:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Button type="primary" size='large' style={{border:'0'}} ghost>
                        <Icon style={{color:'#000', fontSize:'20px'}} type="heart-o" />
                    </Button>
                    <Button type="primary" size='large'  style={{border:'0'}} ghost>
                        <Icon style={{color:'#000', fontSize:'20px'}} type="retweet" /> <Icon type="swap-right" />
                    </Button>
                    <Button type="primary" size='large' style={{border:'0'}} ghost>
                        <Icon style={{color:'#000', fontSize:'20px'}} type="backward" />
                    </Button>
                    <Button type="primary" size='large' style={{border:'0'}} ghost onClick = {()=>{
                        this.music.paused ? this.music.play() : this.music.pause();
                        this.music.paused ? this.setState({switch: 'caret-right'}) : this.setState({switch: 'pause'});
                        console.log(this);
                        console.log(this.music.duration,this.music.paused) }}>
                        <Icon style={{color:'#000', fontSize:'20px'}}  type = {this.state.switch} />
                    </Button>
                    <Button type="primary" size='large' style={{border:'0'}} ghost>
                        <Icon style={{color:'#000', fontSize:'20px'}} type="forward" />
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
    </footer>
        )
    }
}

export default MainFooter