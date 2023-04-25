import React from 'react'
import Button from '@mui/material/Button'
import TemplatesIndexTable from './TemplatesIndexTable'

function App() {
  return (
    <div>
      <Button onClick={e => console.log("clicked on the button")} variant="contained">Hello There</Button>
      <TemplatesIndexTable />
    </div>
  )
}

export default App;
