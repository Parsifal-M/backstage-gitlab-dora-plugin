import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { getDeploymentsByDay } from './deployhelper';
import { GitlabDeployFrequencyApiCall } from '../../types/doraApiProps';
import { getGitlabDeployments } from '../../api/doraApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DeploymentsOverTimeProps {
  projectId: number | null;
}

export function DeploymentsOverTime({ projectId }: DeploymentsOverTimeProps) {
  const [deployments, setDeployments] = useState<GitlabDeployFrequencyApiCall[]>([]);

  

  async function fetchDeployments(id: number) {
    const fetchedDeployments = await getGitlabDeployments(id);
    setDeployments(fetchedDeployments);
  }

  useEffect(() => {
    if (projectId !== null) {
      fetchDeployments(projectId);
    }
  }, [projectId]);

  // Fetch the deployments and calculate the number of deployments by day of the week
  const deploymentsByDay = getDeploymentsByDay(deployments);

  // Define the chart data and options
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Number of deployments',
        data: deploymentsByDay,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  console.log('Deployments by day:', deploymentsByDay);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
