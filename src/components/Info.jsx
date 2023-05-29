import { Button, Table, TableBody, TableCell, TableHead, TableRow,TableContainer, Paper, Card} from '@mui/material'
import NavBar from './NavBar';
import { useState } from 'react';

const Info = ({user})=>{
    const [open, setOpen] = useState(false);
    return(
        <div>
        <NavBar />
        <Card>
        <TableContainer>
        <Table align='center' sx={{ maxWidth: 650,minWidth:"500px"}} aria-label="simple table">
            <TableHead style={{textAlign:"left"}} >
                <TableRow style={{fontFamily:"fantasy",fontSize:"50px",textAlign:'center'}}>DETAILS</TableRow>
                <TableCell style={{fontFamily:"cursive"}}>User Info</TableCell>
            </TableHead>
            <TableBody>
            <TableRow>
               <TableCell>Username</TableCell>
               <TableCell align='right'><Button variant='outlined'size="small" color="inherit">view profile</Button></TableCell>
                <TableCell><Button  variant='outlined'size="small" color="error">restrict User</Button></TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        </Card>
        </div>
    );
}
export default Info