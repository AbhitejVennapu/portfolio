import React from 'react'
import { Avatar, Typography, Stack, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { useTheme } from '@emotion/react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import { MUIWrapperContext } from './MUIWrapper'
import abhitej from '../assets/abhitej.png'
import './Profile.css'

const Profile = () => {
    const theme = useTheme()
    const muiUtils = React.useContext(MUIWrapperContext)
    return (
        <Box className="profile">
            <Box
                sx={{
                    maxHeight: '100vh',
                    height: '100vh',

                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#000' : '#FFF',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? '#FFF' : '#000',
                    paddingLeft: '7.5%',
                    paddingRight: '7.5%',
                    position: 'relative',
                }}
            >
                <Box sx={{ position: 'absolute', top: '3%', left: '3%' }}>
                    <IconButton
                        sx={{ ml: 1 }}
                        color="inherit"
                        onClick={muiUtils.toggleColorMode}
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </Box>
                <Stack spacing={0} sx={{ alignItems: 'center' }}>
                    <Avatar
                        alt="Abhitej Vennapu"
                        src={abhitej}
                        sx={{ width: 120, height: 120 }}
                    />
                    <Typography
                        sx={{
                            fontWeight: '800',
                            [theme.breakpoints.up('xs')]: {
                                fontSize: '28px',
                            },
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '32px',
                            },
                            [theme.breakpoints.up('md')]: {
                                fontSize: '45px',
                            },
                        }}
                    >
                        Abhitej Vennapu
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) =>
                                theme.palette.mode === 'dark' ? '#BBB' : '#777',
                            fontWeight: '700',
                            [theme.breakpoints.up('xs')]: {
                                fontSize: '17px',
                            },
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '20px',
                            },
                            [theme.breakpoints.up('md')]: {
                                fontSize: '25px',
                            },
                        }}
                    >
                        Frontend Developer
                    </Typography>
                </Stack>
                <Box
                    sx={{
                        paddingTop: '30px',
                        maxHeight: '25%',
                        overflow: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            color: (theme) =>
                                theme.palette.mode === 'dark' ? '#BBB' : '#777',
                            textAlign: 'justify',
                        }}
                    >
                        Frontend-focused Software Developer with 4+ years of
                        experience spanning the full software development
                        lifecycle, including design, development, data modeling,
                        architecture, and testing. Proven ability to translate
                        complex requirements into intuitive, performant user
                        interfaces. Passionate about building high-quality,
                        scalable frontend applications with a strong focus on
                        clean code, user experience, and modern best practices.
                    </Typography>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '3%', left: '7.5%' }}>
                    <Stack spacing={1}>
                        <Stack direction="row" spacing={2}>
                            <a
                                href="mailto:abhi.tej98@gmail.com"
                                target="_blank"
                            >
                                <EmailIcon
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.mode === 'dark'
                                                ? '#FFF'
                                                : '#000',
                                        [theme.breakpoints.up('xs')]: {
                                            fontSize: '20px',
                                        },
                                        [theme.breakpoints.up('sm')]: {
                                            fontSize: '22px',
                                        },
                                        [theme.breakpoints.up('md')]: {
                                            fontSize: '24px',
                                        },
                                    }}
                                ></EmailIcon>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abhitej-vennapu/"
                                target="_blank"
                            >
                                <LinkedInIcon
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.mode === 'dark'
                                                ? '#FFF'
                                                : '#000',
                                        [theme.breakpoints.up('xs')]: {
                                            fontSize: '20px',
                                        },
                                        [theme.breakpoints.up('sm')]: {
                                            fontSize: '22px',
                                        },
                                        [theme.breakpoints.up('md')]: {
                                            fontSize: '24px',
                                        },
                                    }}
                                ></LinkedInIcon>
                            </a>
                            <a
                                href="https://github.com/AbhitejVennapu"
                                target="_blank"
                            >
                                <GitHubIcon
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.mode === 'dark'
                                                ? '#FFF'
                                                : '#000',
                                        [theme.breakpoints.up('xs')]: {
                                            fontSize: '20px',
                                        },
                                        [theme.breakpoints.up('sm')]: {
                                            fontSize: '22px',
                                        },
                                        [theme.breakpoints.up('md')]: {
                                            fontSize: '24px',
                                        },
                                    }}
                                ></GitHubIcon>
                            </a>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <CopyrightIcon
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? '#BBB'
                                            : '#777',
                                    [theme.breakpoints.up('xs')]: {
                                        fontSize: '12px',
                                    },
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: '16px',
                                    },
                                    [theme.breakpoints.up('md')]: {
                                        fontSize: '19px',
                                    },
                                }}
                            >
                                {' '}
                            </CopyrightIcon>
                            <Typography
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? '#BBB'
                                            : '#777',

                                    [theme.breakpoints.up('xs')]: {
                                        fontSize: '8px',
                                    },
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: '10px',
                                    },
                                    [theme.breakpoints.up('md')]: {
                                        fontSize: '13px',
                                    },
                                }}
                            >
                                {' '}
                                Abhitej Vennapu | Frontend Developer | 2025{' '}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default Profile
