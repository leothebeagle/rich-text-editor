import React from 'react'
import Button from '@mui/material/Button'
import TemplatesIndexTable from './TemplatesIndexTable'
import EmailTemplate from './EmailTemplate'
import './styles.css'

function App() {
  return (
    <div>
      {/* <Button onClick={e => console.log("clicked on the button")} variant="contained">Hello There</Button> */}
      {/* <TemplatesIndexTable /> */}
      <EmailTemplate />
    </div>
  )
}

export default App;
