import React, { Component } from 'react';
import axios from 'axios';

class ClashOfClansData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clanData: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:3002/clans'; // Update the URL to match your server

    axios.get(apiUrl)
      .then(response => {
        this.setState({
          clanData: response.data,
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  }

  render() {
    const { clanData, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>List of Clash of Clans Clans</h1>
        <ul>
          {Object.keys(clanData).map((tag, index) => (
            <li key={index}>
              <h2>Clan Name: {clanData[tag].name}</h2>
              <p>Description: {clanData[tag].description}</p>
              <p>Clan Level: {clanData[tag].clanLevel}</p>
              <img src={clanData[tag].badgeUrls.small} alt={clanData[tag]} />
              {/* Add more data points as needed */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClashOfClansData;