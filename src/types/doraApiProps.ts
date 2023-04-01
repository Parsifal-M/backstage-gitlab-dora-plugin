export interface GitlabProjectApiCall {
  name: string;
  id: number;
  }

export interface GitlabDeployFrequencyApiCall {
  created_at: string | number | Date;
  deployable: any;
  status: string;
  environment: string;
}