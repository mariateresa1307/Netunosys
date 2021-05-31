import React, { Fragment, useState } from "react"
import { KeyboardDatePicker } from "@material-ui/pickers"

function KeyboardDatePickerExample(props) {
  const [selectedDate, handleDateChange] = useState(new Date())

  return (
    <Fragment>
      <KeyboardDatePicker
        label={props.label}
        value={props.value}
        inputVariant="filled"
        clearable
        value={selectedDate}
        fullWidth
        placeholder="10/10/2018"
        onChange={(date) => handleDateChange(date)}
        minDate={new Date()}
        format="DD/MM/YYYY"
      />
    </Fragment>
  )
}

export default KeyboardDatePickerExample
