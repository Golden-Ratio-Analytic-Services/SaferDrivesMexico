import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { green } from '@mui/material/colors'


const About= () => {

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    }

    const [tabValue, setTabValue] = useState("thomas");

    
    return (<Box width="80%" m="30px auto">
    <h1 align='center'>Purpose</h1>
    <p align='justify'>Safer Drives Mexico is a mapping or routing application meant to 
        allow users to avoid high risk zones traveling within and through Mexico. 
        The objective is to allow users to avoid high risk social behavior to 
        allow for a more enjoyable and safer trip.</p>
    <h1 align='center'>Our Team</h1>
        {/* INFORMATION */}
        <Box m="20px 0" >
            <Tabs value={tabValue} onChange={handleChange} 
            textColor="black"
            TabIndicatorProps={{
                style: {
                  backgroundColor: "green",
                }
              }}>
                <Tab label="Thomas Thelen" value="thomas" />
                <Tab label="Dennis Irorere" value="dennis" />
                <Tab label="Dylan -" value="dylan" />
                <Tab label="Nelson" value="nelson" />
            </Tabs>
        </Box>
            <Box display='flex' flexWrap="wrap" gap="15px">
            {tabValue === 'thomas' && (<div><p align='justify'>Insert bio here 1 of 4</p></div>)}
            {tabValue === 'dennis' && (<div><p align='justify'>Dennis is passionate about entrepreneurship and emerging technologies, particularly in the area of distributed storage,
             complex system, artificail intelligence and spatial analytics. He has observed a growing interest in utilizing artificial intelligence, distributed storage and processing
             to provide competitive advantage and solutions for businesses.</p></div>)}
            {tabValue === 'dylan' && (<div><p align='justify'>Insert bio here 3 of 4</p></div>)}
            {tabValue === 'nelson' && (<div><p align='justify'>Nelson is an incredibly enthusiastic Associate Software Developer with experience in full-stack development 
            and a strong background in cellular systems research. Skilled in Python, JavaScript, and R, with expertise in frameworks such as Flask and React.js. She is committed 
            to delivering high-quality code and collaborating effectively with cross-functional teams. 
            She loves solution oriented teams that empower people and support diversity.</p></div>)}
        </Box>
    

    <h1 align='center'>Additional Resources</h1>
    <p>LOOP THROUGH CITATION THAT YOU KEEP IN A SEPARATE FILE AS NEEDED</p>
    
    </Box>)
}

export default About;