import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import addUser from '../actions/userAction'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const InputForm = () => {

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [profession, setProfession] = useState("");
    const classes = useStyles();

    const onClickEvent = () => {
        let user = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            profession: profession
        }
        console.log(user);
        dispatch(addUser(user));
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField id="firstName" label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} variant="filled" />
                        <TextField id="lastName" label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} variant="filled" />
                        <TextField id="age" label="Age" value={age} onChange={e => setAge(e.target.value)} variant="filled" />
                        <TextField id="profession" label="Profession" value={profession} onChange={e => setProfession(e.target.value)} variant="filled" />
                        <Button variant="contained" color="secondary" onClick={(e) => onClickEvent(e)}>
                            Add User
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default InputForm;
