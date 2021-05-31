import React, { useEffect } from "react"
import "../assets/css/ocean.css"

const PlanetNetuno = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  return (
    <div
      style={{
        position: "fixed",
        display: "block",
        height: "300px",
        width: "100%",
        bottom: "0px",
        marginLeft: "-20px",
      }}
    >
      <svg id="wave" viewBox=" 0 0 1320 500">
        <path
          d="M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500"
          fill="#304074"
        />
        <path
          fillOpacity="0.5"
          d="M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500"
          fill="#ff8d04"
        />
        <path
          d="M0,192
      C220,100,440,100,660,192
      C880,290,1100,290,1320,192
      L1320 500
      L0 500"
          fill="#7f9bff"
        />
      </svg>
    </div>
  )
}

export default PlanetNetuno
