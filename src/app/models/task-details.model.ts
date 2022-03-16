import { UserDetails } from './user.model';

export enum TaskStatus {
  CREATED = 'created',
  PENDING = 'inPending',
  PROGRESS = 'inProgress',
  COMPLETED = 'completed'
}

export interface TaskDetails {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: TaskStatus,
  userDetails?: UserDetails
}
