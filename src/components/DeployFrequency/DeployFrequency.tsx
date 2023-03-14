import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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



export const DeployFrequency = () => {
  const classes = useStyles();


  const handleProjectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  };

  return (
    <Card>
      <CardHeader title="Deployment Frequency" />
      <CardContent>
        <h1>Deployment Frequency Will Go Here</h1>
      </CardContent>
    </Card>
  );
};
