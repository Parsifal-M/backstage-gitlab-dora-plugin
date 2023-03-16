import React from 'react';
import { render, screen } from '@testing-library/react';
import { DeployFrequency } from './DeployFrequency';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { setupRequestMockHandlers } from '@backstage/test-utils';

describe('DeployFrequency', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('', (_, res, ctx) =>
        res(ctx.status(200), ctx.delay(2000), ctx.json({})),
      ),
    );
  });
  it('should render', async () => {
    await render(<DeployFrequency project='' date='' gitlabAccessToken='' />);
    expect(await screen.findByTestId('progress')).toBeInTheDocument();
  });
});
