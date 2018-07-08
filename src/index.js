import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



console.log('done1');

this.content = "content";
this.props = {className:'myClass',children:'xxxxx'}
this.element = <div {...this.props}></div>
ReactDOM.render(this.element,document.getElementById('hello'))



this.Message = (props) => <div>{props.msg}</div>
this.element = (
    <div className="container">
        <this.Message msg="hello world"/>
        <this.Message msg="Goodbye world"/>
    </div>
)
ReactDOM.render(this.element,document.getElementById('test'))




// marche pas
// this.Message = (props) => <div>{props.msg}</div>
// this.element = (
//     <div className="container">
//         <this.Message>hello world"</this.Message>
//         <this.Message>Goodbye world"</this.Message>
//     </div>
// )
// ReactDOM.render(this.element,document.getElementById('test'))
