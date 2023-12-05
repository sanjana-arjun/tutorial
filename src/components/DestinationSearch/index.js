import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    SearchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  render() {
    const {SearchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(SearchInput.toLowerCase()),
    )

    return (
      <div className="user-card-container">
        <div>
          <h1 className="header">Destination Search</h1>
          <div>
            <input
              type="search"
              placeholder="Search"
              value={SearchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
              alt="search icon"
              className="delete-img"
            />
          </div>
          <ul>
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
