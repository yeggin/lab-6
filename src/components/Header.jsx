import { useContext } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import "../styles/Header.css"
import { Link } from 'react-router-dom';
import { TitleContext } from '../context/TitleContext';


const Header = () => {
    const { title } = useContext(TitleContext);

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#4a4a4a', width: '100%'}}>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <Button color="inherit" component={Link} to="/"> Home </Button>
                <Button color="inherit" component={Link} to="/employee-management">Employee Management</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
