import { TaskStatus } from '../models/task-details.model';

export const mockData =  [
  {
    id: 'project-id-1',
    name: 'Sales Tasks',
    description: 'Manages sales daily activities',
    tasks: [
      {
        id: 'sales-task-id-1',
        title: 'Check the Product Package',
        description: 'Check Product package',
        timestamp: new Date().toISOString(),
        status: TaskStatus.CREATED,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'sales-task-id-2',
        title: 'Check the Product Quality',
        description: 'Check Product Quality',
        timestamp: new Date().toISOString(),
        status: TaskStatus.PROGRESS,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      }
    ]
  },
  {
    id: 'project-id-2',
    name: 'My Day to Day Tasks',
    description: 'Manages Studies activities',
    tasks: [
      {
        id: 'Studies-task-id-1',
        title: 'Read about the History between 1990 - 2000',
        description: 'Books to refer , BOOK-1, BOOK-2',
        timestamp: new Date().toISOString(),
        status: TaskStatus.CREATED,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'Studies-task-id-2',
        title: 'Watch a Radhe Shaym Movie',
        description: '',
        timestamp: new Date().toISOString(),
        status: TaskStatus.PROGRESS,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'Studies-task-id-3',
        title: 'Spend some time with kids',
        description: 'Play running game, chess',
        timestamp: new Date().toISOString(),
        status: TaskStatus.COMPLETED,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'Studies-task-id-4',
        title: 'Cook chicken curry',
        description: 'New chicken preparation link..',
        timestamp: new Date().toISOString(),
        status: TaskStatus.PENDING,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      }
    ]
  },
  {
    id: 'project-id-3',
    name: 'Project Tasks',
    description: 'Manages Studies activities',
    tasks: [
      {
        id: 'Studies-task-id-1',
        title: 'Investigate on view document',
        description: 'Links for reference, link 1, link 2',
        timestamp: new Date().toISOString(),
        status: TaskStatus.CREATED,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'Studies-task-id-2',
        title: 'Meeting at 10 clock with CEO',
        description: 'Topic is: Recruiting new staff',
        timestamp: new Date().toISOString(),
        status: TaskStatus.PROGRESS,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'Studies-task-id-3',
        title: 'A live session on angular training',
        description: 'Number of audience 10, topis: Angular Forms',
        timestamp: new Date().toISOString(),
        status: TaskStatus.COMPLETED,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'Studies-task-id-4',
        title: 'A session Nx Workspace',
        description: 'Manage new microfrontends',
        timestamp: new Date().toISOString(),
        status: TaskStatus.PROGRESS,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      },
      {
        id: 'Studies-task-id-6',
        title: 'A session Nx Workspace',
        description: 'Dive deep into nx',
        timestamp: new Date().toISOString(),
        status: TaskStatus.PENDING,
        userDetails: {
          id: 'user-1',
          username: 'Siva'
        }
      }
    ]
  }
];
