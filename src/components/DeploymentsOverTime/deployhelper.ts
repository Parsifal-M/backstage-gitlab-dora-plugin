import { GitlabDeployFrequencyApiCall } from '../../types/doraApiProps';

export function getDeploymentsByDay(deployments: GitlabDeployFrequencyApiCall[]) {
  const deploymentsByDay = [0, 0, 0, 0, 0, 0, 0]; // Initialize an array to hold the deployments for each day of the week (starting from Monday)

  deployments.forEach(deployment => {
    const createdAt = new Date(deployment.created_at);
    const dayOfWeek = createdAt.getDay(); // Returns an integer between 0 (Sunday) and 6 (Saturday)
    deploymentsByDay[dayOfWeek]++; // Increment the count for the corresponding day of the week
  });

  return deploymentsByDay;
}
