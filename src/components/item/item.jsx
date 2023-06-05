import React from 'react'
import "./item.css"

export default function item() {
  return (
      <>
          {/* <!-- Card --> */}
          <div className="col-3">
              <div className="w-400 mw-full"> 
                  <div className="card">
                      <h2 className="card-title title_card">
                          Powerade
                      </h2>
                      <p className="text-muted card_description">
                          Bebida deportiva, energizante completa. (Mountain view)
                      </p>
                      <div className="text-right card_button"> 
                          <div className="row">
                              <button className="btn btn-danger" type="button">-</button>
                              <a href="#" className="btn">10</a>
                              <button className="btn btn-success" type="button">+</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*end Card*/ }
    </>
  )
}

