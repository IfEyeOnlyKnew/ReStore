import { Typography, AppBar, Toolbar, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {    
return(
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography variant="h6">
                BC Doran
                </Typography>   
                <Switch checked={darkMode} onChange={handleThemeChange}  />
        </Toolbar>
    </AppBar>
)
}