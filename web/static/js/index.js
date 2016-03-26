// Phoenix' dependencies
import '../../../deps/phoenix_html/priv/static/phoenix_html'
import { Socket } from 'phoenix'
import '../css/app.scss'

import React, { Component } from 'react'
// import { ContentState, convertToRaw, convertFromRaw } from 'draft-js'
import { render } from 'react-dom'
// import Post from "./components/Post"

window.React = React

class Root extends Component {
  constructor() {
    super()
    this.socket = new Socket("/socket",
                              {
                                params: {
                                  token: window.userToken
                                },
                                logger: (kind, msg, data) => {
                                  console.log(`${kind}: ${msg}`, data)
                                }
                              }
                            )
    this.socket.connect()
    this.channel = this.socket.channel("posts:lobby", {})
    this.channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })

    this.channel.on("post_update", this.handlePayload.bind(this))

    this.userId = Math.floor(1000 * Math.random(10))
    this.state = {
      content: null
    }
  }

  handlePayload(payload) {
    let { content, userId } = payload
    if (userId === this.userId) return
    let contentState = ContentState.createFromBlockArray(convertFromRaw(content))
    this.setState({ contentState })
  }

  handleChange(change) {
    let content = convertToRaw(change.getCurrentContent())
    this.channel.push("change", { content, userId: this.userId })
      .receive("ok", resp => { console.log("response: ", resp) })
  }

  render() {
    let { contentState } = this.state
    return (
      <div>
        <h1>...</h1>
      </div>
    )
  }
}

render(<Root />, document.getElementById('root'))
