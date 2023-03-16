import { DeploymentFrequencyResponse } from "../types/doraApiProps";

export async function fetchDeploymentFrequency(
  project: string,
  date: string,
  gitlabAccessToken: string
): Promise<DeploymentFrequencyResponse> {
  const projectId = encodeURIComponent(project);
  const url = `https://gitlab.com/api/v4/projects//deployments`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${gitlabAccessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch deployments");
  }

  const deployments = await response.json();
  const filteredDeployments = deployments.filter((deployment: any) => {
    const deploymentDate = new Date(deployment.created_at);
    const inputDate = new Date(date);
    return (
      deploymentDate.getFullYear() === inputDate.getFullYear() &&
      deploymentDate.getMonth() === inputDate.getMonth() &&
      deploymentDate.getDate() === inputDate.getDate()
    );
  });

  const deployFrequency = filteredDeployments.length;
  return { deployFrequency };
}
