import React from "react"
import "./section.css"

export default function section() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Hello world section</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">hello dude</div>
          <div className="col-sm-4">hello dude</div>
          <div className="col-sm-4">hello dude</div>
        </div>
      </div>
    </section>
  )
}
