import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'


const UserView = () => {

    var[users,setUser] = useState([]);


    useEffect(()=> {
        axios.get('http://localhost:3002/View')
        .then(response=>{
            console.log("response:",response.data)
            setUser(users=response.data);
        })
        .catch(err=>console.log(err))
    },[])




  return (
    <div>
        <TableContainer>
        <Table>
                <TableHead><br/><br/><br/><br/>
                    <TableRow>
                        <TableCell style={{color:"red"}}>Name</TableCell>
                        
                    </TableRow>
                    
                </TableHead>
                <TableBody>
                {
                    users.map((value,index)=>{
                        return(
                    <TableRow>
                        <TableCell><Button>{value.sname}</Button></TableCell>
                    </TableRow>
                        );
                        })}
                </TableBody>
                </Table>
                </TableContainer>
    </div>
  )
}

export default UserView