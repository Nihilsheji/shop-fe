import React from "react";
import { Container, Stack, Card, CardHeader, CardContent, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default class Register extends React.Component {

    render() {
        return (
            <Stack direction="row">
                <Container 
                    style={{ 
                        minWidth: '400px', 
                        width: '400px', 
                        margin: 0, 
                        position: 'relative' 
                    }}>
                    <Card 
                        style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            width: '80%',
                        }}>
                        <CardHeader title="Rejestracja" align="center"></CardHeader>
                        <CardContent>
                            <Stack>

                                <TextField 
                                    label="E-mail"
                                    type="email" 
                                    variant="outlined"
                                    style={{
                                        marginTop: '10px'
                                    }}/>

                                <TextField 
                                    style={{
                                        marginTop: '10px'
                                    }}
                                    label="Hasło"
                                    type="password"
                                    variant="outlined"/>

                                <TextField
                                    label="Imię"
                                    style={{
                                        marginTop: '10px'
                                    }}
                                    variant="outlined"/>

                                <TextField
                                    label="Nazwisko"
                                    style={{
                                        marginTop: '10px'
                                    }}
                                    variant="outlined"/>

                                <TextField
                                    label="Data urodzenia"
                                    type="date"
                                    style={{
                                        marginTop: '10px'
                                    }}                    
                                    InputLabelProps={{
                                      shrink: true,
                                    }}/>

                                <Button 
                                    style={{
                                        marginTop: '10px'
                                    }}
                                    variant="outlined">
                                    <DoubleArrowIcon/>
                                </Button>

                                <Typography 
                                    variant="caption" 
                                    align="center" 
                                    style={{ marginTop: '10px' }}>
                                    Masz już konto? <Link to="/register">Zaloguj się</Link>
                                </Typography>

                            </Stack>
                        </CardContent>
                    </Card>
                    <Container 
                        style={{
                            position: 'absolute',
                            bottom: '50px',
                            left: '0',  
                            width: '100%'                         
                        }}>
                        <img 
                            src="logo.jpg" 
                            height="100px" 
                            alt="Szop logo"
                            style={{
                                display: 'block',
                                margin: '0 auto'
                            }}/>
                        <Typography 
                            align="center"
                            color="lightgray"
                            variant="subtitle2">
                            by SHOP
                        </Typography>
                    </Container>
                    
                </Container>      
                <Container 
                    style={{ 
                        height: '100vh',
                        maxWidth: 'none',
                        margin: 0, 
                        padding: 0, 
                        background: 'url(https://unsplash.it/1200/800)',
                        backgroundSize: 'cover',
                    }}>                    
                </Container>  
            </Stack>
            
        )
    }
}