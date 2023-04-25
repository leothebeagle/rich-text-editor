import React, { useState, useEffect }  from 'react';
import { Table, TableBody, TableContainer, TableRow, TableCell, TableHead } from '@mui/material'
import Paper from '@mui/material/Paper'
import EmailTemplate from './EmailTemplate'

const TemplatesIndexTable = () => {
    const [emailTemplates, setEmailTemplates ] = useState([]);
    const [rowClicked, setRowClicked] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setEmailTemplates(data);
                console.log("email templates data: " + emailTemplates)
            } catch (error) {
                console.error("error fetching posts: ", error)
            }
        }
        fetchData();
    }, [])

    const handleRowClick = () => {
        setRowClicked(true);
    }

    return (
        <TableContainer component={Paper} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {emailTemplates.map((emailTemplate) => (
                        <TableRow key={emailTemplate.id} onClick={() => handleRowClick()}>
                            <TableCell align="right">{emailTemplate.id}</TableCell>
                            <TableCell align="left">{emailTemplate.title}</TableCell>
                            <TableCell align="left">{emailTemplate.body}</TableCell>
                            {rowClicked && <EmailTemplate />}
                        </TableRow>
                    )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TemplatesIndexTable;