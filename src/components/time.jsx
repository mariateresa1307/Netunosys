import React, { useState } from "react"
import { KeyboardDateTimePicker } from "@material-ui/pickers"

function InlineDateTimePickerDemo(props) {
  const [selectedDate, handleDateChange] = useState(new Date("2021-05-31T00:00:00.000Z"))

  return (
    <>
      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        label={props.label}
        fullWidth
        inputVariant="filled"
        value={selectedDate}
        onChange={handleDateChange}
        disablePast
        format="DD/MM/YYYY HH:mm"
      />
    </>
  )
}

export default InlineDateTimePickerDemo
