// Import necessary components from Material-UI
import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// Customize the theme if needed
const theme = createTheme();


// Create a functional component for the button
const MyButton = (props) => {
   
  return (
    <ThemeProvider  theme={theme}>
        <div  className={props.class}  >
        <Button  variant={props.varient} color={props.color}>
        {props.signin}
      </Button>
        </div>
     
    </ThemeProvider>
  );
}

// Export the component for use in your application
export default MyButton;
