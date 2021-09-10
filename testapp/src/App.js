import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users").then((res) =>
      res.json().then((result) => {
        console.log(res);
        this.setState({ users: result.data });
        console.log(this.state.users);
      })
    );
  }

  render() {
    return (
      <div class="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Avtar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users
              ? this.state.users.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>
                        {item.first_name} &nbsp;
                        {item.last_name}
                      </td>
                      <td>{item.email}</td>
                      <td>
                        <img src={item.avatar} />
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
