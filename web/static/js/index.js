// Phoenix' dependencies
import '../../../deps/phoenix_html/priv/static/phoenix_html'
import { Socket } from 'phoenix'
import '../css/app.scss'

import React, { Component } from 'react'
// import { ContentState, convertToRaw, convertFromRaw } from 'draft-js'
import { render } from 'react-dom'

window.React = React

class Root extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>...</h1>
      </div>
    )
  }
}

render(<Root />, document.getElementById('root'))
