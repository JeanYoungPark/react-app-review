import "./App.css";
import { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 2,
      Subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "Welcome", sub: "Welcome to the world wide web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText ..." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    let _title,
      _desc, _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.sub;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if (this.state.mode === "create") {
      _article = <CreateContent></CreateContent>;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        ></Subject>
        <TOC data={this.state.contents} onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id: Number(id)
        });
        }.bind(this)}></TOC>
        <Control onChangeMode={function(mode){
          this.setState({mode:mode});
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
