import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskDetails } from '../../models/task-details.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent implements OnInit {

  createdTasks$: Observable<TaskDetails[]>;
  pendingTasks$: Observable<TaskDetails[]>;
  inProgressTasks$: Observable<TaskDetails[]>;
  completedTasks$: Observable<TaskDetails[]>;

  createdTasks: TaskDetails[];
  pendingTasks: TaskDetails[];
  inProgressTasks: TaskDetails[];
  completedTasks: TaskDetails[];

  realData: any;
  projectId: string;

  constructor(private route: ActivatedRoute, private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
      this.fetchTasks();
    });
  }

  fetchTasks() {
    this.createdTasks$ = this.repositoryService.getCreatedTasks(this.projectId).pipe(tap((tasks) => { this.createdTasks = tasks }));
    this.inProgressTasks$ = this.repositoryService.getInProgressTasks(this.projectId).pipe(tap((tasks) => { this.inProgressTasks = tasks }));
    this.pendingTasks$ = this.repositoryService.getPendingTasks(this.projectId).pipe(tap((tasks) => { this.pendingTasks = tasks }));
    this.completedTasks$ = this.repositoryService.geCompletedTasks(this.projectId).pipe(tap((tasks) => { this.completedTasks = tasks }));
  }

  onPending(event: CdkDragDrop<any>) {
    this.drop(event);
    this.repositoryService.moveToPending(this.projectId, event.container.data[event.currentIndex].id);
  }
  onCreate(event: CdkDragDrop<any>) {
    this.drop(event);
    this.repositoryService.moveToPending(this.projectId, event.container.data[event.currentIndex].id);
  }
  onProgress(event: CdkDragDrop<any>) {
    this.drop(event);
    this.repositoryService.moveToProgress(this.projectId, event.container.data[event.currentIndex].id);
  }
  onComplete(event: CdkDragDrop<any>) {
    this.drop(event);
    this.repositoryService.completeTask(this.projectId, event.container.data[event.currentIndex].id);
  }

  private drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
