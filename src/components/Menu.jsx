import React, { Component } from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react'
import Search from './Search'
import _ from 'lodash'
import CardGrid from '../container/CardGrid'
import addPoints from '../hooks/AddPoints'
export default class Menu extends Component {
  state = {
    activeItem: 'home',
    coins: 0,
    value: 0,
    name: 'Julia',
    search: '',
    data: [{
      "img": {
        "url": "https://coding-challenge-api.aerolab.co/images/Phantom2-x1.png",
        "hdUrl": "https://coding-challenge-api.aerolab.co/images/Phantom2-x2.png"
      },
      "_id": "5a0b3611734d1d08bf7084eb",
      "name": "Phantom 2",
      "cost": 500,
      "category": "Drones"
    }],
    category: 'Phones',
    options: [
      { key: 1, text: 'Phones', value: 1 },
      { key: 2, text: 'Gamming', value: 2 },
      { key: 3, text: 'Laptops', value: 3 },
      { key: 4, text: 'Cameras', value: 4 },
      { key: 5, text: 'Monitors & TV', value: 5 },
      { key: 6, text: 'Audio', value: 6 },
      { key: 7, text: 'Drones', value: 7 },
      { key: 8, text: 'PC Accessories', value: 8 },
      { key: 9, text: 'Smart Home', value: 9 },
      { key: 10, text: 'Tablets & E-readers', value: 10 },
    ]
  }
  traerBusqueda = () => {
    this.setState({

    })
  }
  handleCoins = (e, { coins }) => this.setState({ ...this.state, coins: coins })
  handleItemClick = (e, { name }) => this.setState({ ...this.state, activeItem: name })
  handleClick = (e, { value }) => {
    return (
      <>
        {this.setState({ ...this.state, value: value })}
        {/* <addPoints amount={this.state.value} /> */}
      </>

    )
  }
  handleAddPoints = (points) => {
    return (
      this.setState({
        coins: this.state.coins + points
      })
    )
  }
  handleClickCategory = (e, { value }) => this.setState({ ...this.state, category: this.state.options[value - 1]?.text })
  handleData = ({ data }) => {
    this.setState({
      data: data
    })
  }
  render() {
    const { coins } = this.state.coins;



    return (
      <>
        <Menu color="blue" inverted size="large">
          {/* <Menu.Item>
            <Menu.Item
              name='History'
              active={activeItem === 'History'}
              onClick={this.handleItemClick}
            />
          </Menu.Item> */}
          <Menu.Item >
            <Menu.Item>
              <Dropdown
                clearable
                floating
                item
                selection
                placeholder='Category'
                value={this.state.category}
                options={[
                  { key: 1, text: 'Phones', value: 1 },
                  { key: 2, text: 'Gaming', value: 2 },
                  { key: 3, text: 'Laptops', value: 3 },
                  { key: 4, text: 'Cameras', value: 4 },
                  { key: 5, text: 'Monitors & TV', value: 5 },
                  { key: 6, text: 'Audio', value: 6 },
                  { key: 7, text: 'Drones', value: 7 },
                  { key: 8, text: 'PC Accessories', value: 8 },
                  { key: 9, text: 'Smart Home', value: 9 },
                  { key: 10, text: 'Tablets & E-readers', value: 10 },
                ]}
                onChange={this.handleClickCategory}
              >
              </Dropdown>
            </Menu.Item>
            <Menu.Menu position='right' >
              <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                  <input
                    className='prompt'
                    type='text'
                    placeholder='Search keyword ...'
                    onChange={(e) => {
                      console.log(e.target.value)
                      this.setState({
                        search: e.target.value
                      })
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        this.setState({
                          search: e.target.value
                        })
                      }
                    }}

                  />
                </div>
                <div className='results' />
              </div>
              <Button color='teal' onClick={
                () => {
                  this.props.traerBusqueda({ search: this.props.search })
                }
              }>Search</Button>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Dropdown
              clearable
              floating
              item
              selection
              placeholder='Add Points'
              value={this.state.value}
              options={[
                { key: 1, text: '1.000 Pts', value: 1000 },
                { key: 2, text: '3.000 Pts', value: 3000 },
                { key: 3, text: '5.000 Pts', value: 5000 },
              ]}
              onChange={this.handleClick}
              onClick={this.handleClick}
            >
            </Dropdown>
          </Menu.Item>
          <Menu.Item position='right'>
            {this.state.name}
            {coins}
            <img src='../../public/icons/coin.svg' alt="coins" />
          </Menu.Item>
        </Menu>
        <CardGrid category={this.state.category} onChange={this.handleData} />
      </>
    )
  }
}