import React from 'react'
import { AppBar, Toolbar, Typography, Container } from "@mui/material"
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">
                <Toolbar>
                        <Typography component="h4" variant="h5" fontWeight="700" flex={1}>
                        <Link style={{textDecoration:"none",color:"#fff"}} to="/">پریمال بلاگ</Link>
                        </Typography>
                    <BookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;