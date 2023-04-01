export interface GitlabProjectApiCall {
  name: string;
  id: number;
  }

export interface GitlabDeployFrequencyApiCall {
  status: string;
  environment: string;
}