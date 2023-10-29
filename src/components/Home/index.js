import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {loader: true, list: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(each => this.convertCase(each))

    console.log(updateData)
    this.setState({list: updateData, loader: false})
  }

  convertCase = each => ({
    id: each.id,
    name: each.name,
    teamImageUrl: each.team_image_url,
  })

  renderHome = () => {
    const {list} = this.state

    return (
      <div className="home-container">
        <div className="logoCard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        <ul className="list">
          {list.map(each => (
            <TeamCard key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {loader} = this.state

    return (
      <div className="main-container">
        {loader ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}

export default Home
