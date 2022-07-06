import { createTheme } from "@mui/material";
import { blue, grey, purple } from '@material-ui/core/colors';

 const theme = createTheme({
    palette:{
        primary:{
            main: purple[700],
            dark: purple[800],
            light: purple[500],
            contrastText: '#ffffff',
        },
        secondary:{
            main: grey[500],
            dark: grey[400],
            light: grey[300],
            contrastText: '#ffffff',
        },
        background: {
            default: '#000000' ,
            paper: '#f7f6f3',
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
                textTransform: "none",
                textDecoration: 'none'
            },

        }
    }
})
export default theme;