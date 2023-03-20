import "./App.css";
import { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        Subject: {title: 'WEB', sub: 'World Wide Web!'},
        contents: [
          {id:1, title:'HTML', desc:'HTML is HyperText ...'},
          {id:2, title:'CSS', desc:'CSS is for design'},
          {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
        ]
    }
}
  render() {
    return (
      <div className="App">
        <Subject title={this.state.Subject.title} sub={this.state.Subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperTest markup Language."></Content>
      </div>
    );
  }
}

export default App;
