import { gitlabDoraPlugin } from './plugin';

describe('gitlab-dora', () => {
  it('should export plugin', () => {
    expect(gitlabDoraPlugin).toBeDefined();
  });
});
