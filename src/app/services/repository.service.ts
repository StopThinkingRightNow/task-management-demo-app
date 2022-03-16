import { Injectable } from '@angular/core';
import { TaskDetails, TaskStatus } from '../models/task-details.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProjectDetails } from '../models/project-details.model';
import { mockData } from './mock.data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  projectRepository: ProjectDetails[] = mockData;
  private dataSubject = new BehaviorSubject<ProjectDetails[]>(this.projectRepository);
  projectObservable$: Observable<ProjectDetails[]>;

  constructor() {
    this.initProjectData();
  }

  initProjectData() {
    this.dataSubject.next(this.projectRepository);
    this.projectObservable$ = this.dataSubject.asObservable();
  }

  getProjects(): Observable<ProjectDetails[]> {
    return this.projectObservable$.pipe(map((projects) => {
      return projects.map((project) => { return { name: project.name, id: project.id, description: project.description } });
    }));
  }

  createProject(project: ProjectDetails) {
    this.projectRepository.push(project);
    this.dataSubject.next(this.projectRepository);
  }

  getCreatedTasks(projectId: string): Observable<TaskDetails[]> {
    return this.projectObservable$.pipe(map(() => {
      return this.filterTasksByStatus(this.getTasksByProjectId(projectId), TaskStatus.CREATED);
    }));
  }

  getPendingTasks(projectId: string): Observable<TaskDetails[]> {
    return this.projectObservable$.pipe(map(() => {
      return this.filterTasksByStatus(this.getTasksByProjectId(projectId), TaskStatus.PENDING);
    }));
  }

  geCompletedTasks(projectId: string): Observable<TaskDetails[]> {
    return this.projectObservable$.pipe(map(() => {
      return this.filterTasksByStatus(this.getTasksByProjectId(projectId), TaskStatus.COMPLETED);
    }));
  }

  getInProgressTasks(projectId: string): Observable<TaskDetails[]> {
    return this.projectObservable$.pipe(map(() => {
      return this.filterTasksByStatus(this.getTasksByProjectId(projectId), TaskStatus.PROGRESS);
    }));
  }

  createTask(projectId: string, taskDetails: TaskDetails) {
    const currentProject: ProjectDetails = this.findProjectById(projectId);
    if (currentProject) {
      currentProject.tasks?.push(taskDetails);
    }
    this.dataSubject.next(this.projectRepository);
  }

  updateTask(projectId: string, taskDetails: TaskDetails) {
    const currentTask: TaskDetails = this.findTaskById(this.findProjectById(projectId), taskDetails.id);

    if (currentTask) {
      this.findProjectById(projectId).tasks = this.findProjectById(projectId).tasks?.map((task) => {
        if (task.id === currentTask.id) {
          task = taskDetails;
        }
        return task
      });

      this.dataSubject.next(this.projectRepository);
    }
  }

  deleteTask(projectId: string, taskId: string) {
    const currentTask: TaskDetails = this.findTaskById(this.findProjectById(projectId), taskId);

    if (currentTask) {
      this.findProjectById(projectId).tasks = this.findProjectById(projectId).tasks?.filter((task) => task.id !== taskId);
      this.dataSubject.next(this.projectRepository);
    }
  }

  completeTask(projectId: string, taskId: string) {
    const currentTask: TaskDetails = this.findTaskById(this.findProjectById(projectId), taskId);

    if (currentTask) {
      currentTask.status = TaskStatus.COMPLETED;
      this.dataSubject.next(this.projectRepository);
    }
  }

  moveToOpen(projectId: string, taskId: string) {
    const currentTask: TaskDetails = this.findTaskById(this.findProjectById(projectId), taskId);

    if (currentTask) {
      currentTask.status = TaskStatus.CREATED;
      this.dataSubject.next(this.projectRepository);
    }
  }

  moveToPending(projectId: string, taskId: string) {
    const currentTask: TaskDetails = this.findTaskById(this.findProjectById(projectId), taskId);

    if (currentTask) {
      currentTask.status = TaskStatus.PENDING;
      this.dataSubject.next(this.projectRepository);
    }
  }

  moveToProgress(projectId: string, taskId: string) {
    const currentTask: TaskDetails = this.findTaskById(this.findProjectById(projectId), taskId);

    if (currentTask) {
      currentTask.status = TaskStatus.PROGRESS;
      this.dataSubject.next(this.projectRepository);
    }
  }

  private findProjectById(projectId: string): ProjectDetails {
    return this.projectRepository.filter((project: ProjectDetails) => project.id === projectId)[0];
  }

  private findTaskById(projectDetails: ProjectDetails, taskId: string): TaskDetails {
    return <TaskDetails>projectDetails?.tasks?.filter((task: TaskDetails) => task?.id === taskId)[0];
  }

  private getTasksByProjectId(projectId: string): TaskDetails[] {
    return <TaskDetails[]>this.findProjectById(projectId)?.tasks;
  }

  private filterTasksByStatus(tasks: TaskDetails[], status: string): TaskDetails[] {
    return <TaskDetails[]>tasks?.filter((task) => task?.status === status);
  }
}
