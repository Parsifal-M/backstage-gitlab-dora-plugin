import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography } from '@material-ui/core';
import { DeployFrequencyFormProps } from '../../types/DeployFrequencyProps';



export const DeployFrequencyForm = ({ onProjectIdSubmit }: DeployFrequencyFormProps) => {
  const [projectId, setProjectId] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onProjectIdSubmit(parseInt(projectId, 10));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectId(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Deployment Frequency Calculator
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            margin="normal"
            id="projectId"
            label="Project ID"
            value={projectId}
            onChange={handleInputChange}
            data-testid="projectId"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            data-testid="calculate"
          >
            Calculate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
