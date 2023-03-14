import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { gitlabDoraPlugin, GitlabDoraPage } from '../src/plugin';

createDevApp()
  .registerPlugin(gitlabDoraPlugin)
  .addPage({
    element: <GitlabDoraPage />,
    title: 'Root Page',
    path: '/gitlab-dora'
  })
  .render();
