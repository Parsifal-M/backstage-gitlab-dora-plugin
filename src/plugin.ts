import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const gitlabDoraPlugin = createPlugin({
  id: 'gitlab-dora',
  routes: {
    root: rootRouteRef,
  },
});

export const GitlabDoraPage = gitlabDoraPlugin.provide(
  createRoutableExtension({
    name: 'GitlabDoraPage',
    component: () =>
      import('./components/DoraPage').then(m => m.DoraPage),
    mountPoint: rootRouteRef,
  }),
);
