import React, { useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { GitlabDeployments } from '../TotalDeployments/GitlabDeployments';
import { DeployFrequencyForm } from '../DeployFrequencyForm/DeployFrequencyForm';
import { DeploymentsOverTime } from '../DeploymentsOverTime/DeploymentsOverTime';

export const DoraPage = () => {
  const [projectId, setProjectId] = useState<number | null>(null);

  const handleProjectIdSubmit = (submittedProjectId: number) => {
    setProjectId(submittedProjectId);
  };

  return (
    <Page themeId="tool">
      <Header title="Welcome to gitlab-dora!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <ContentHeader title="Dora Metrics">
          <SupportButton>A description of your plugin goes here.</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item md={12}>
            <InfoCard title="">
              <DeployFrequencyForm onProjectIdSubmit={handleProjectIdSubmit} />
            </InfoCard>
          </Grid>
        </Grid>
          <Grid container spacing={3} direction="row">
            <Grid item md={6}>
              <InfoCard title="Deployments Over Time">
                <DeploymentsOverTime projectId={projectId} />
              </InfoCard>
            </Grid>
            <Grid item md={6}>
              <InfoCard title="Total Deployments">
                <GitlabDeployments projectId={projectId} />
              </InfoCard>
            </Grid>
          </Grid>
      </Content>
    </Page>
  );
};
