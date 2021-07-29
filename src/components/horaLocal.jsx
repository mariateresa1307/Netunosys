import React, { useState, useEffect } from "react"
import { DateTime } from "luxon"
import Typography from "@material-ui/core/Typography"

function getCurren() {
  return DateTime.now().setLocale("es").toFormat("dd MMMM yyyy HH:mm:ss")
}

export function Horalocal(props) {
  const [state, setState] = useState(getCurren())

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setState(getCurren())
      //console.log("rerende")
    }, 1000)

    return () => {
      window.clearInterval(intervalRef)
    }
  }, [])

  return (
    <>
      <Typography variant="">{state}</Typography>
    </>
  )
}
