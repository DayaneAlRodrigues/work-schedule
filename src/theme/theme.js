import React from 'react'
import { createTheme } from "@material-ui/core";

 const theme = createTheme({
    palette:{
        primary:{
            main: "#f00"
        },
        secondary:{
            main: "0f0"
        }
    },
    typography: {
        fontFamily: 'Comic Sans MS',
        body2: {
            fontFamily: "Times New Roman",
            fontSize: "1.1rem"
        }
    },
    shape: {
        borderRadius:30
    },
    spacing:8,
    overrides: {
        MuiButton:{
            root: {
                textTransform: "none"
            },

        }
    }
})
export default theme;