import React from 'react';
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
import { DeployFrequency } from '../DeployFrequency/DeployFrequency';
import { DeployFrequencyForm } from '../DeployFrequencyForm/DeployFrequencyForm';

export const DoraPage = () => (
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
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              All content should be wrapped in a card like this.
            </Typography>
          </InfoCard>
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <DeployFrequency project='' date='2023-03-15' gitlabAccessToken='' />
        </Grid>
        <Grid item>
          <DeployFrequencyForm />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
