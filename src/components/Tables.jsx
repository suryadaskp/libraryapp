import { Button, Table, TableBody, TableCell, TableHead, TableRow,TableContainer, Paper, Box} from '@mui/material'
import NavBar from './NavBar';
import { useState } from 'react';
import { AddBox } from '@mui/icons-material';

const Tables = ({user})=>{
    const [open, setOpen] = useState(false);
    return(
        <div>
        <NavBar />
        <TableContainer>
        <Table align='center' sx={{ maxWidth: 650,minWidth:"500px"}} aria-label="simple table">
            <TableHead style={{textAlign:"-moz-initial"}} >
                <TableRow style={{fontFamily:"fantasy",fontSize:"40px"}}sx={{}}>BOOK DETAILS</TableRow>
                <TableCell>BOOKNAMES</TableCell>
            </TableHead>
            <TableBody>
            <TableRow>
               <TableCell>bookname</TableCell>
               <TableCell align='right'><Button size="small" variant='outlined' color="error">delete</Button></TableCell>
                <TableCell><Button size="small" variant='contained'>update</Button></TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}
export default Tables