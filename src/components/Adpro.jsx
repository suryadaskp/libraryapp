import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
 <Box component="span"sx={{ display: '-ms-flexbox', mx: '5px', transform: 'scale(0.10)' }}></Box>
export default function BasicCard() {
  return (
    <div align="center">
         <NavBar/>
    
    <Card align='center'style={{maxWidth:"500px",maxHeight:"500px",minHeight:"400px"}} sx={{marginTop:"200px"}}>
      <CardContent>
      <Typography style={{fontFamily:"unset"}}>WELCOME ADMIN</Typography>
        <Box sx={{borderRadius:'30000px',border:'5px solid black',maxWidth:"105px",maxHeight:"150px"}}><ManageAccountsIcon sx={{ fontSize: 100 }}/></Box>
        <Typography></Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{marginTop:"300px"}}>Learn More</Button>
        </CardActions>

    </Card>
  
    </div>
  );
}