import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { RepositoryService } from '../../../services/repository.service';

@Component({
  selector: 'app-task-pool',
  templateUrl: './task-pool.component.html',
  styleUrls: ['./task-pool.component.scss']
})
export class TaskPoolComponent implements OnInit {

  @Input()
  title: string = ''

  @Input()
  projectId: string

  @Input()
  showAddAction = false;

  @Input()
  color = 'black'

  @Input()
  icon = 'add';

  constructor(public dialog: MatDialog, private repositoryService: RepositoryService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '50%',
      data: { isUpdate: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.repositoryService.createTask(this.projectId, result);
    });
  }

}
