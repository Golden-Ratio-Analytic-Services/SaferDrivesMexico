import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function HomePage(){

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          start: data.get('start'),
          end: data.get('end'),
        });
      };


    return(
     <Box className='home' width="80%" m="30px auto" >
        <Box display="flex" flexWrap="wrap" columnGap="40px">

        <Box flex="1 1 40%" mb="40px">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="start"
              label="Start"
              name="start"
              autoComplete="start"
              autoFocus
              color='success'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="end"
              label="End"
              type="end"
              id="end"
              autoComplete="current-end"
              color='success'
            />

            {<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='success'
            > Submit </Button>}
        </Box>
        </Box>

        <Box flex="1 1 50%" mb="40px">
        MAP
        </Box>

            </Box>
        </Box>
      
    );
}

export default HomePage;