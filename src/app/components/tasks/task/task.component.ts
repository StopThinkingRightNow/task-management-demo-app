import { Component, OnInit, Input } from '@angular/core';
import { TaskDetails } from '../../../models/task-details.model';
import { RepositoryService } from '../../../services/repository.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  taskDetails: TaskDetails;

  @Input()
  showActions = true;

  @Input()
  icon: string

  projectId: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
    });
  }

  onDeleteTask() {
    this.repositoryService.deleteTask(this.projectId, this.taskDetails.id);
  }

  onEditTask() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '50%',
      data: { ...this.taskDetails, isUpdate: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      const payload: TaskDetails = { ...this.taskDetails, ...result };
      this.repositoryService.updateTask(this.projectId, payload);
    });
  }

}
