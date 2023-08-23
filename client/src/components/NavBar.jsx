import { Box } from "@mui/material";
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';



function NavBar (){
   
    return (
        <Box className={classes.header}>
        <Link to="/" className={classes.logo} >Safer Drive Mexico</Link>
        <nav>
          <ul>
            <li>
              <Link to='/info'>Info</Link>
            </li>
          </ul>
        </nav>
      </Box>
    )
};

export default NavBar;