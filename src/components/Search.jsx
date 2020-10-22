// Aplicar un filtro a los productos disponibles, ya sea por categoría o precio.
// Si la busqueda es un texto es por categoria o 

import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'


const initialState = { isLoading: false, results: [], value: '' };

export default class SearchExampleStandard extends Component {
  
 
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.name) || re.test(result.category) || re.test(result.cost) || re.test(result.img.url)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            input={{ icon: 'search', iconPosition: 'left' }}
            loading={isLoading}
            autocomplete={true}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    )
  }
}