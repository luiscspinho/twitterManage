import React from 'react';

class App extends React.Component {
    render(){
        let cat = this.props.cat
        return (
          <div>
            <Title text="Text" />
            <NestedH1>Hello World and cat {cat} with Component heart <Heart />  bla bla</NestedH1>
          </div>
        )
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

const NestedH1 = (props) => <h1>{props.children}</h1>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

App.defaultProps = {
  cat: 123
}

export default App