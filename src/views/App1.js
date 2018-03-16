import './antd.css'
import React, { Component } from 'react'
import axios from 'axios'

import { Menu,Dropdown, Input, Layout,Row, Col, Card,Breadcrumb, Icon, Avatar, Slider, Button, Carousel,List } from 'antd'
const { Meta } = Card

const ButtonGroup = Button.Group
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const Search = Input.Search




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
);







class App extends Component {
    constructor() {
        super()
        this.state = {
          value: null,
          beginTime:'00:00',
          switch:'caret-right',
          collapsed: false
        }
      }

      onCollapse = (collapsed) => {
        console.log(collapsed)
        this.setState({ collapsed })
      }

      componentDidMount() {
        this.setState({value:123})
          console.log(this.music)
          let that = this
         

          setTimeout(function(){
               console.log(that.music.currentTime,that.music.duration)}
               
               ,500)
       

          setInterval(function(){console.log(that.music.currentTime,that.music.duration)},500)



          axios.get('/personalized').then((res) => {
              console.log(res)
            })




    }

    componentWillUnmount() {
        console.log('this is componentWillUnmount')
    
    }
    currentTime(){
        
    }

    render() {
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


        return (
            <div style={{width:'100%',height:'100%'}}>

                <header style={{height:'10%',background:'#242427',overflow:'hidden',padding:'0 1%'}}>
                    <Row style={{height:'100%',overflow:'hidden'}}>
                        <Col xs={10} sm={10} md={5} lg={5} xl={5} xxl={5} style={{height:'100%'}}>
                        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <h1 style={{height:'30px',overflow:'hidden', margin:'0 auto',color:'#fff',textShadow:'1px 1px rgba(255,255,255,1)'}}>DG MUSIC</h1>
                        </div>
                        </Col>
                        <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={19}  style={{height:'100%'}}>
                        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <Menu
                        defaultSelectedKeys={['1']}
                        mode="horizontal"
                        theme="dark"
                        style={{backgroundColor:'#242427',height:'100%'}}
                        >
                            <Menu.Item  style={{height:'100%',paddingTop:'5px',fontSize:'14px'}} key="1">发现音乐 <sub></sub> </Menu.Item>
                            <Menu.Item  style={{height:'100%',paddingTop:'5px',fontSize:'14px'}} key="2">我的音乐 <sub></sub> </Menu.Item>
                            <Menu.Item  style={{height:'100%',paddingTop:'5px',fontSize:'14px'}} key="3">朋友 <sub></sub> </Menu.Item>
                            <Menu.Item  style={{height:'100%',paddingTop:'5px',fontSize:'14px'}} key="4">商城 <sub></sub> </Menu.Item>
                            <Menu.Item  style={{height:'100%',paddingTop:'5px',fontSize:'14px'}} key="5">音乐人 <sub></sub> </Menu.Item>
                            <Menu.Item  style={{height:'100%',paddingTop:'5px',fontSize:'14px',position:'relative'}} key="6">下载客户端 <sub></sub> </Menu.Item>
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
                        <Col xs={14} sm={14} md={19} lg={19} xl={19} xxl={19}  style={{height:'100%'}}>

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
                </header>
                <div class='head-menu' style={{height:'5%',backgroundColor:'#C20C0C'}}>
                <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <Menu
                        defaultSelectedKeys={['1']}
                        mode="horizontal"
                        theme="dark"
                        style={{backgroundColor:'transparent', width:'60%',height:'20px',lineHeight:'19px',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}
                        >
                            <Menu.Item  style={{height:'20px',fontSize:'12px'}} key="1">推荐</Menu.Item>
                            <Menu.Item  style={{height:'20px',fontSize:'12px'}} key="2">排行榜</Menu.Item>
                            <Menu.Item  style={{height:'20px',fontSize:'12px'}} key="3">歌单</Menu.Item>
                            <Menu.Item  style={{height:'20px',fontSize:'12px'}} key="4">主播电台</Menu.Item>
                            <Menu.Item  style={{height:'20px',fontSize:'12px'}} key="5">歌手</Menu.Item>
                            <Menu.Item  style={{height:'20px',fontSize:'12px'}} key="6">新片上架</Menu.Item>
                        </Menu>
                </div>
                </div>



              

                <div style={{height:'75%',background:'#F5F5F5',overflowY:'auto',overflowX:'hidden'}}>

                    <Carousel style={{ width:'100%'}} effect="fade" autoplay>
                    <div style={{backgroundColor:'#E7F1FD'}}><img style={{width:'50%',margin:'0 auto'}} src="http://p1.music.126.net/8tmDjz-gEauy7rVX8ks1xQ==/109951163099816068.jpg" alt=""/></div>
                    <div style={{backgroundColor:'#F5F1F0'}}><img style={{width:'50%',margin:'0 auto'}} src="http://p1.music.126.net/WmjJ4ev6mpS-OPvfZcNE9g==/109951163099071631.jpg" alt=""/></div>
                    <div style={{backgroundColor:'#7E7D83'}}><img style={{width:'50%',margin:'0 auto'}} src="http://p1.music.126.net/3AwmSILD3LeKBG7_KJjL2g==/109951163100194971.jpg" alt=""/></div>
                    <div style={{backgroundColor:'#410B49'}}><img style={{width:'50%',margin:'0 auto'}} src="http://p1.music.126.net/duSAXyarULbHqx-kdU4Hug==/109951163100187049.jpg" alt=""/></div>
                    </Carousel>
                   

                    <Layout>
                        <Content >
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>

                        <Row>
                            <Col xs={0} sm={0} md={2} lg={3} xl={3} xxl={3}></Col>

                            <Col xs={24} sm={24} md={10} lg={15} xl={15} xxl={15}>

                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            
                            <div class="clearFloat" style={{paddingBottom:'20px'}}>
                            <header style={{width:'100%',borderBottom:'2px solid red'}}>
                            <h3> <span style={{border:'4px solid red',borderRadius:'100%',width:'12px',height:'12px'}}></span> 热门推荐</h3>
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
                            
                        
                           

                            <div class="clearFloat">
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

                            <div class="clearFloat">
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


                    
                  
                </div>






                <footer style={{height:'10%'}}>
                    <div style={{width:'100%',height:'6%',background:'#fff',position:'relative',background: '-webkit-linear-gradient(left, blue 26%, orange 37%, yellow 36%)'}}>
                        <div style={{position:'absolute',width:'10%',height:'100%',top:'0',backgroundColor:'#000'}}></div>
                        <div style={{position:'absolute',bottom:'115%',width:'80px',marginLeft:'-80px',textAlign:'center',left:'10%',backgroundColor:'#fff'}}>{this.state.beginTime}/</div>
                    </div>
                    <Row style={{height:'94%',overflow:'hidden'}}>
                        <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} style={{height:'100%'}}>
                        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <img style={{height:'100%',margin:'0 1%'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/>
                            <div>
                                <div>是個好人</div>
                                <div>JANKDJJDJK</div>
                            </div>
                        </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}  style={{height:'100%'}}>
                        <audio  ref={(audio) => {this.music = audio;}} src="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3" />
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
            </div>
        )
    }
}

export default App