import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  element = React.createElement('span',{id:'toto',className:'toto',children:['hello','word']})
  element2 = <span className="titi"><br/>titi</span>
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js{this.element}<br/>{this.element2}</code> and save to reload.
        </p>
        <Hello content="content"/>

        <Test content="test"/>

        <SayHello firstName="kjkjkjkj" lastName="lklklk" titi="lkkl"/>
        <Ticks/>

        <Events style={{display:'bloc',height:30,width:30}}/>

        <div id="umount"><Mystates prop={{lapse:0,running:false,stuff:'stuff',other:'other',isHidden:false}}/></div>

        <Formulaire/>
      </div>
    );
  }
}

class Hello extends App{
  constructor (props){
    super(props);
    this.text = 'hello';
  }
  render(){
    return (<div id={this.text}>{this.props.content}</div>)
  }
}

class Test extends App{
  constructor (props){
    super(props);
    this.text = 'test';
  }
  render(){
    return (<div id={this.text}>{this.props.content}</div>)
  }
}


class SayHello extends App{
  constructor (props){
    super(props);
    this.text = 'hello';
  }
  // static propTypes = {
  //   string(props, propName, componentName){
  //     if(typeof props[propName] !== 'string'){return new Error('not a string!')}
  //   }
  // }
  static propTypes = {
    firstName : PropTypes.string.isRequired,
    lastName : PropTypes.string.isRequired
  }
  toto= "mlmlml"
  // static propTypes = {
  //   firstName : true,
  //   lasttName : 'kjkjkjkj'
  // }
  render (){
    const {firstName,lastName} = this.props
    return(
      <span>firstName : {firstName},lastName : {lastName}</span>
    )
  }
}

SayHello.propTypes = {
  titi : PropTypes.string.isRequired
}


class Ticks extends App{
  constructor(props){
    super(props)
    this.state = {time:0}
  }
  // tick(){
  //   this.time = new Date().toLocaleTimeString();
  //   // return this.time
  // }
  
  componentDidMount(){
    this.interval=setInterval(() => {
      this.setState({time:this.state.time+1})
      //console.log(this.state.time)
    },500)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return <div><input type="text" value={this.state.time}/></div>
  }
}


class Events extends App{
  constructor(props){
    super(props)
    this.state = {userName:''}
  }

  randomtext = () => {
    let text = ''
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  clic = (evt) => {
    console.log('clic')
    console.log('event',evt) // proxy react
    console.log('native event',evt.nativeEvent) // event natif
    console.log(this.props)
    this.setState({userName : this.randomtext()})
  }

  changeText = (evt) => {
    console.log(evt.target.value)
    this.setState({userName : evt.target.value})
  }

  render(){
    return(
    <div>
      <button {...this.props} onClick={this.clic}></button>
      <input onChange={this.onChange} value={this.state.userName}/>
      <input onChange={this.changeText}/>
    </div>
    )
  }
}






class Mystates extends App{
  constructor(props){
    super(props)
    console.log('props', props)
    this.state=props.prop
    console.log('state', this.state)
    this.refs = React.createRef();
  }

  myinterval = () => {
    // const startt = Date.now() - this.state.lapse
    this.setState({lapse:Date.now()-this.st})
  }

  handlerClick = (evt) => {
    console.log(evt.target.id)
    switch(evt.target.id){
      case 'watch':
        let state = this.state.running === true ? {lapse:0,running:false} : {lapse:10,running:true}
        // this.setState(state)
        this.setState(state, () =>{
          if(state.running){
            this.st  = Date.now()-state.lapse
            this.timer = setInterval(this.myinterval,100)
          }else{
            clearInterval(this.timer)
          }
          return  {running: !state.running}
        })
        
        break;
        case 'clear':
        state = {lapse:0,running:false}
        this.setState(state, () =>{
          clearInterval(this.timer)
        })
        break;
        default:
        break;
      }
    
      console.log(this.state) // this.state pas encore à jour

  }

  componentDidMount(){
    console.log('rootNode',this.rootNode)
  }

  componentDidUpdate(){
    // this.setState(state => {
    //   console.log(state.running)
    //   if(state.running){
    //     const st = Date.now()-state.lapse
    //     this.timer = setInterval(this.myinterval(st))
    //   }else{
    //     clearInterval(this.timer) 
    //   }
    // })
    // console.log('componentDidUpdate', this.state)
    console.log('componentDidUpdate')
  }
  
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  hidding = (evt) => {
    console.log(evt.target.checked)
    const state = evt.target.checked ? {isHidden:false} : {isHidden:true}
    // let mountNode = ReactDOM.findDOMNode('umount');
    console.log('refs', this.Refs)
    this.setState(state, () =>{
      if(state.isHidden){
        // document.getElementById('umount').children
        this.rootNode.remove()
      }else{
        this.rootNode.remove()
        // this.rootNode.style.display='none'
        // ReactDOM.unmountComponentAtNode(mountNode);
      }
        return{isHidden:!state.isHidden}
      })
  }

  render(){
    const buttonStyles ={
      border:'1px solid #ccc',
      backgroundColor:'#666',
      fontSize:'2em',
      padding:10,
      margin:5,
      color:'#fff'
    }
    const {lapse,running} = this.state 
    console.log('lapse',lapse)
    console.log('running',running)
    return (
    <div ref={node => (this.rootNode = node)}>state : {lapse} ms<br/>
      <button onClick={this.handlerClick} id="watch" style={buttonStyles}>{running ? 'Stop': 'watch'}</button>
      <button onClick={this.handlerClick} id="clear" style={buttonStyles}>Clear</button>
      <label htmlFor="hide">hide<input type="checkbox" name="hide" id="hide" onChange={this.hidding}/></label>
    </div>)
  }

}




class Formulaire extends App{
  // constructor(props){
  //   super(props)
  // }

  handlerSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.inputNode.value)
  }

  render(){
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>Name : <input type="text" name="userName" ref={node => this.inputNode = node}/></label>
        <input type="submit" value="envoyer"/>
      </form>
    )
  }
}

// class Greeting extends React.Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.name}</h1>
//     );
//   }
// }

// // Specifies the default values for props:
// Greeting.defaultProps = {
//   name: 'Stranger'
// };

// // Renders "Hello, Stranger":
// ReactDOM.render(
//   <Greeting />,
//   document.getElementById('example')
// );

export default App;


