import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  // makeStyles,
} from '@material-ui/core';
import { fetchDeploymentFrequency } from '../../api/doraApi';
import { DeployFrequencyProps } from '../../types/DeployFrequencyProps';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   datePicker: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//   },
// }));



export const DeployFrequency = ({
  project,
  date,
  gitlabAccessToken,
}: DeployFrequencyProps) => {
  // const classes = useStyles();
  const [deployFrequency, setDeployFrequency] = useState<number | null>(null);

  useEffect(() => {
    if (project && date) {
      fetchDeploymentFrequency(project, date, gitlabAccessToken)
        .then((data) => setDeployFrequency(data.deployFrequency))
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error));
    }
  }, [project, date, gitlabAccessToken]);

  return (
    <Card>
      <CardHeader title="Deployment Frequency" />
      <CardContent>
        {deployFrequency !== null ? (
          <h1>{deployFrequency} deploys per day</h1>
        ) : (
          <h1>Deployment Frequency Will Go Here</h1>
        )}
      </CardContent>
    </Card>
  );
};
