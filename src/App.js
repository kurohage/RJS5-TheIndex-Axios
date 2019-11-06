import React, { Component } from "react";
import axios from "axios";

//import authors from "./data.js";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: [],
    loading: true
  };

  selectAuthor = async author => {
    this.setState({ loading: true });

    try {
      let res = await axios.get(
        `https://the-index-api.herokuapp.com/api/authors/${author.id}/`
      );
      this.setState({ loading: false });
      this.setState({ currentAuthor: res.data });
    } catch (error) {
      console.log(`Select Author - Data Get Error: ${error}`);
    }
  };

  unselectAuthor = () => this.setState({ currentAuthor: null });

  getContentView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.authors}
          selectAuthor={this.selectAuthor}
        />
      );
    }
  };

  async componentDidMount() {
    try {
      let res = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/"
      );
      let data = res.data;
      this.setState({ loading: false });
      this.setState({ authors: data });
    } catch (error) {
      console.log(`Mount - Data Get Error: ${error}`);
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">
            {this.state.loading ? "Loading data..." : this.getContentView()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
