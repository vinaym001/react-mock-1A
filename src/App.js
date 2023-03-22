import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { isSaved: false, text: "" };

  onTextInput = (event) => {
    this.setState({ text: event.target.value });
  };

  toggleBtn=()=>{
      this.setState(prevState=>({
          isSaved:!prevState.isSaved
      }))
  }
 

  render() {
    const { isSaved, text } = this.state;
    return (
      <div>
        <div>
          {isSaved ? (
            <p>{text}</p>
          ) : (
            <input value={text} type="text" onChange={this.onTextInput} />
          )}
          <button type="button" onClick={this.toggleBtn}>
            {isSaved ? "edit" : "save"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
