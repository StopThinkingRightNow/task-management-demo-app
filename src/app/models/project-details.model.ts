import { TaskDetails } from './task-details.model';

export interface ProjectDetails {
  id?: string;
  name?: string;
  description?: string;
  tasks?: TaskDetails[];
}

