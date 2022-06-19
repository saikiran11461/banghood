import React, { useState } from 'react';
import {Paper,Tabs,Tab,Typography,Box} from '@mui/material';
// import {Tabs} from '@mui/material';
// import Tab from '@mui/material';
// import Typography from '@mui/material';
// import {Box} from '@mui/material';

import Login from '../Pages/login';
import {Signup} from '../Pages/singup';


const Account = () => {
    const [ value, setValue ] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = { width: 340, margin: "auto" };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={ value !== index }
                id={ `simple-tabpanel-${index}` }
                aria-labelledby={ `simple-tab-${index}` }
                { ...other }
            >
                { value === index && (
                    <Box>
                        <Typography>{ children }</Typography>
                    </Box>
                ) }
            </div>
        );
    }

    return (
        <Paper style={ paperStyle }>
            <Tabs
                value={ value }
                indicatorColor="primary"
                textColor="primary"
                onChange={ handleChange }
                aria-label="disabled tabs example"
            >
                <Tab label="SIGN IN" />

                <Tab label="I'M NEW HERE" />
            </Tabs>
            <TabPanel value={ value } index={ 0 }>
                <Login handleChange={ handleChange } />
            </TabPanel>
            <TabPanel value={ value } index={ 1 }>
                <Signup handleChange={ handleChange } />
            </TabPanel>
        </Paper>

    );
};

export default Account;