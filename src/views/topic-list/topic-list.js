
import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import {  playMusic ,getList,getTopList } from '../../redux/topic-list.reducer'
import { Link } from 'react-router-dom'
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
  { playMusic,getList,getTopList }
)
class topicList extends Component {
    state = {
      playData:{},
      list:[],
      data:{},
      menuList:[
        {title:'云音乐新歌榜',imgUrl:'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40'},
        {title:'云音乐热歌榜',imgUrl:'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40'},
        {title:'网易原创歌曲榜',imgUrl:'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40'},
        {title:'云音乐飙升榜',imgUrl:'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'},
        {title:'云音乐电音榜',imgUrl:'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40'},
        {title:'UK排行榜周榜',imgUrl:'http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=40y40'},
        {title:'美国Billboard周榜',imgUrl:'http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=40y40'},
        {title:'KTV嗨榜',imgUrl:'http://p1.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg?param=40y40'},
        {title:'iTunes榜',imgUrl:'http://p1.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg?param=40y40'},
        {title:'Hit FM Top榜',imgUrl:'http://p1.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=40y40'},
        {title:'日本Oricon周榜',imgUrl:'http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=40y40'},
        {title:'韩国Melon排行榜周榜',imgUrl:'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'},
        {title:'韩国Mnet排行榜周榜',imgUrl:'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'},
        {title:'韩国Melon原声周榜',imgUrl:'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'},
        {title:'中国TOP排行榜(港台榜)',imgUrl:'http://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=40y40'},
        {title:'中国TOP排行榜(内地榜)',imgUrl:'http://p1.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=40y40'},
        {title:'香港电台中文歌曲榜',imgUrl:'http://p1.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=40y40'},
        {title:'华语金曲榜',imgUrl:'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'},
        {title:'中国嘻哈榜',imgUrl:'http://p1.music.126.net/_nwkQTFtOdAjFvOI8Wg7Tg==/18922595114302109.jpg?param=40y40'},
        {title:'法国 NRJ EuroHot 30周榜',imgUrl:'http://p1.music.126.net/6O0ZEnO-I_RADBylVypprg==/109951162873641556.jpg?param=40y40'},
        {title:'台湾Hito排行榜',imgUrl:'http://p1.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg?param=40y40'},
        {title:'全球电子舞曲榜',imgUrl:'http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg?param=40y40'},
        {title:'云音乐ACG音乐榜',imgUrl:'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40'},
        {title:'云音乐嘻哈榜',imgUrl:'http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40'}
      ],
      loading:true
    }

    componentDidMount() {
     
    //   this.getPlayList(this.props.location.search.match(/(\d+)/)[0])
    //     console.log(this.props.location,this)


    this.changePId(0)

    }

    componentWillReceiverProps(nextProps){
        // if(nextProps.location.search !== this.props.location.search) {
        //     console.log(this.props.location)
        // }
    }

 


    changeTime(num){
      num = parseInt(num)
      let m = Math.floor(num%3600/60)
      m = m<=9? '0'+ m:m
      let s = Math.floor(num%60)
      s = s<=9? '0'+ s:s
      return m +':'+s
  }

  changePId(i){

    this.props.getTopList(i)
    
    this.setState({loading:true})
    
    axios.get('/top/list?idx=' + i).then((res) => {
      this.setState({data:res.data.playlist,list:res.data.playlist.tracks,loading:false})
    })
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
    <div  style={{ background: '#fff',height:'100%',float:'left',width:'25%',padding:'4% 0' }}>
      <div style={{textAlign:'center',font:'16px 微软雅黑',backgroundColor:'#C20C0C',color:'#fff',lineHeight:'60px'}}>音乐特色榜</div>
      <Menu
      mode="inline"
      defaultSelectedKeys={['0']}
      defaultOpenKeys={['sub1']}
      onClick={(item)=>{ this.changePId(item.key) }}
      >
      {
        this.state.menuList.map((item,i)=>(
            <Menu.Item key={i}  style={{height:'60px', lineHeight:'60px',overflow:'hidden', whiteSpace:'pre-wrap'  }} >
            <img src={item.imgUrl} alt=""/>
              <span style={{fontSize:'12px'}}>&nbsp;    {item.title}</span>
            </Menu.Item>))
      }
      </Menu>
    </div>
    <div style={{float:'right',width:'75%',padding:'4% 3%',borderLeft:'1px solid #E1E1E1'}}>
      <Spin size="large"  style={{textAlign:'center',width:'100%'}}  spinning={this.state.loading}  />
      <Row>
             <Col xs={0} sm={0} md={6} lg={6} xl={6} xxl={6}>
             <img style={{width:'100%',padding:'0.5%',border:'1px solid #D5D5D5'}} src= {this.state.data.coverImgUrl} />
             </Col>
             <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18} style={{padding:'0 0 5% 5%'}}>
             <h2 style={{}}>   {this.state.data.name}</h2>
       <p>
           <span><Icon type="clock-circle-o" /> 最近更新：01月20日&nbsp; （每天更新）</span>
       </p>
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
       <p> 标签:&nbsp;  <Tag color="red">华语</Tag> <Tag color="gold">浪漫</Tag> <Tag color="lime">流行</Tag> </p>
</Col></Row>

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
</Content>
</header>
<footer style={{ textAlign: 'center',lineHeight:'80px' }}>Dai Sheng Yu ©2017 Created by Antd React</footer> 
</Col>
<Col xs={0} sm={0} md={1} lg={2} xl={2} xxl={2}></Col>
</Row>
</div>
    )
  }
}

export default topicList