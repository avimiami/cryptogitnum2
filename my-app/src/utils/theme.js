import { createTheme } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'

const theme = createTheme({
    palette:{
        primary:{
            main: '#053e85',
        },
        secondary: {
            main: '#64748B',
        },
        thirdYellow: {
            main: 'yellow'
        }
    }
})

export default theme