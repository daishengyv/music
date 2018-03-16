<footer style={{height:'10%'}}>
<div style={{width:'100%',height:'6%',background:'#fff',position:'relative',background: '-webkit-linear-gradient(left, blue 26%, orange 37%, yellow 36%)'}}>
    <div style={{position:'absolute',width:`${this.state.beginTime/this.state.allTime*100}%`,height:'100%',top:'0',backgroundColor:'#000'}}></div>
    <div style={{position:'absolute',bottom:'115%',width:'80px',marginLeft:'-80px',textAlign:'center',left:`${this.state.beginTime/this.state.allTime*100}%`,backgroundColor:'#f1f2f3'}}>{this.changeTime(this.state.beginTime)}/{this.changeTime(this.state.allTime)}</div>
</div>
<Row style={{height:'94%',overflow:'hidden'}}>
    <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12} style={{height:'100%'}}>
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
        <img style={{height:'100%',margin:'0 1%'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/>
        <div>
            <div onClick={()=>{console.log(this)}}>是個好人</div>
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