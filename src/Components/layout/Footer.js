import { Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <Typography component="p" variant='p' bgcolor="#f7f7f7" color="primary" padding={1} textAlign="center" mt={10} >
                        طراحی شده توسط آرین سالم آبادی
                </Typography>
            </footer>
        </div>
    )
}

export default Footer;