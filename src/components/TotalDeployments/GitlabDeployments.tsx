import React, { PropsWithChildren, useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getGitlabDeployments } from '../../api/doraApi';

ChartJS.register(ArcElement, Tooltip, Legend);

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <div style={{ width: '300px', height: '300px', margin: 'auto' }}>{children}</div>
);


interface GitlabDeploymentsProps {
  projectId: number | null;
}

export const GitlabDeployments = ({ projectId }: GitlabDeploymentsProps) => {
  const [successfulDeployments, setSuccessfulDeployments] = useState<number | null>(null);
  const [failedDeployments, setFailedDeployments] = useState<number | null>(null);
  const [cancelledDeployments, setCancelledDeployments] = useState<number | null>(null);
  const [blockedDeployments, setBlockedDeployments] = useState<number | null>(null);
  const [skippedDeployments, setSkippedDeployments] = useState<number | null>(null);


  const fetchDeploymentData = async (gitlabProjectId: number) => {
    try {
      const deployments = await getGitlabDeployments(gitlabProjectId);

      const successful = deployments.filter((deployment) => deployment.status === 'success').length;
      const failed = deployments.filter((deployment) => deployment.status === 'failed').length;
      const canceled = deployments.filter((deployment) => deployment.status === 'canceled').length;
      const blocked = deployments.filter((deployment) => deployment.status === 'blocked').length;
      const skipped = deployments.filter((deployment) => deployment.status === 'skipped').length;

      setSuccessfulDeployments(successful);
      setFailedDeployments(failed);
      setCancelledDeployments(canceled);
      setBlockedDeployments(blocked);
      setSkippedDeployments(skipped);

      
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error fetching deployment data: ${error.message}`);
      } else {
        throw new Error('Error fetching deployment data');
      }
    }
  };

  useEffect(() => {
    if (projectId) {
      fetchDeploymentData(projectId);
    }
  }, [projectId]);

  const data = {
    labels: ['Successful', 'Failed', 'Cancelled', 'Blocked', 'Skipped'],
    datasets: [
      {
        label: 'Deployments',
        data: [successfulDeployments ?? 0, failedDeployments ?? 0, cancelledDeployments ?? 0, blockedDeployments ?? 0, skippedDeployments ?? 0],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  

  const options = {
    plugins: {
      legend: {
        labels: {
          boxWidth: 5,
          fontSize: 10,
          color: "white"
        },
      },
    },
  };
  

  return (
    <Wrapper>
      <Pie data={data} options={options} />
    </Wrapper>
  );
};

