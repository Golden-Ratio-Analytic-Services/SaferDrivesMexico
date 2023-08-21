import { Box } from "@mui/material";
import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';



function NavBar (){

   
    return (
        <Box className={classes.header}>
        <div className={classes.logo}>Safer Drive Mexico</div>
        <nav>
          <ul>
            <li>
              <Link href='/'>Link 1</Link>
            </li>
            <li>
              <Link href='/home'>Link 2</Link>
            </li>
          </ul>
        </nav>
      </Box>
    )
};

export default NavBar;