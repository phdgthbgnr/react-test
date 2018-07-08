import React, { Component } from 'react';
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


