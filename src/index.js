import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tyler McGinnis",
      friends: ["Jake Lingwall", "Sarah Drasner", "Merrick Christensen"]
    };

    this.addFriend = this.addFriend.bind(this);
  }

  addFriend(friend) {
    this.setState(state => ({
      friends: state.friends.concat([friend])
    }));
  }

  render() {
    return (
      <div>
        <h3> Name : {this.state.name}</h3>
        <AddFriend addNew={this.addFriend} />
        <FriendsList names={this.state.friends} />
      </div>
    );
  }
}

class AddFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: ""
    };

    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ""
    });
  }
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    );
  }
}

class FriendsList extends React.Component {
  render() {
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {this.props.names.map(friend => (
            <li>{friend}</li>
          ))}
        </ul>
      </div>
    );
  }
}

FriendsList.defaultProps = {
  names: []
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "esti"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      userName: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.userName}!</h1>
        <p>I am the {this.props.owner}</p>
        Change name:
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <FriendsContainer name={this.state.userName} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App owner="React HelloWorld App" />, rootElement);
