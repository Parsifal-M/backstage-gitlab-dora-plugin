import React, { PropsWithChildren } from 'react';
import { GaugeCard } from '@backstage/core-components';
import Grid from '@material-ui/core/Grid';

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <Grid container spacing={2}>
    {children}
  </Grid>
);

export default {
  title: 'Data Display/Progress Card',
  component: GaugeCard,
};

export const Deployments = () => (
  <Wrapper>
    <Grid item>
      <GaugeCard title="Successful Deployments" progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard title="Failed Deployments" progress={0.57} />
    </Grid>
  </Wrapper>
);
