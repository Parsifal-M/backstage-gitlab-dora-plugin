import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  Button,
  makeStyles,
} from '@material-ui/core';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  datePicker: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));



export const DeployFrequencyForm = () => {
  const classes = useStyles();


  const handleProjectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  };

  return (
    <Card>
      <CardHeader title="Deployment Frequency Dates" />
      <CardContent>
        <FormControl className={classes.formControl}>
          <InputLabel id="project-select-label">Project</InputLabel>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={classes.datePicker}
          label="Start Date"
          value="StartDate"
        />
        <DatePicker
          className={classes.datePicker}
          label="End Date"
          value="EndDate"
        />
        </LocalizationProvider>
        <Button variant="contained" color="primary">
          Calculate
        </Button>
      </CardContent>
    </Card>
  );
};
