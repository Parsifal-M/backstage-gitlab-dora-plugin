import { GitlabDeployFrequencyApiCall, GitlabProjectApiCall } from '../types/doraApiProps';

export async function getGitlabProjects(): Promise<GitlabProjectApiCall[]> {
  try {
    const response = await fetch('https://gitlab.com/api/v4/projects');
    const projects = await response.json();
    return projects;
  } catch (error) {
    throw new Error('Failed to fetch GitLab projects');
  }
}

export async function getGitlabDeployments(projectId: number): Promise<GitlabDeployFrequencyApiCall[]> {
  try {
    const response = await fetch(`https://gitlab.com/api/v4/projects/${projectId}/deployments`);
    const deployments = await response.json();
    return deployments;
  } catch (error) {
    throw new Error('Failed to fetch GitLab deployments');
  }
}
