import React, {useState} from 'react'
import Button from '@mui/material/Button'

const EmailTemplate = () => {
    const [emailTemplate, setEmailTemplate] = useState();
    
    return (
        <Button onClick={e => console.log("clicked on the button")} variant="contained">EmailTemplateView</Button>
    )
}

export default EmailTemplate