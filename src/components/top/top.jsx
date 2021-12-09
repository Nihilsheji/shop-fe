import React from "react";
import { Stack, Button, Link, AppBar, Container, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import authService from '../../services/auth';
export default class Top extends React.Component {

    constructor(props) {
        super(props);
        // this.isLoggedIn = props.logged;
        // this.username = props.username;
    }

    isLoggedIn = true; //! change to false
    username = "Someone"; //! change to empty 

    render() {
        const notLoggedSection = (<>
            <Link href="/login">
                <Button 
                    variant="outlined" 
                    color="primary"
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    Logowanie
                </Button>
            </Link>
            <Link href="/register">
                <Button 
                    variant="outlined" 
                    color="primary"
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    Rejestracja
                </Button>
            </Link>
        </>);

        const loggedSection = <Typography>Welcome { this.username }</Typography>;

        const authSection = this.isLoggedIn ? loggedSection : notLoggedSection; 

        return (
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <image 
                        src="logo.jpg" 
                        class="nav_logo"
                        height="30px"
                        alt="Shop logo"
                        style={{
                            display: 'block',
                            height: '100%'
                        }}/>
                    <Typography variant="h6">
                        Shopp
                    </Typography>

                    <div style={{ flexGrow: 1 }}></div>

                    <Container>
                        { authSection }
                    </Container>
                                    
                </Toolbar>
            </AppBar>
        )
    }
}