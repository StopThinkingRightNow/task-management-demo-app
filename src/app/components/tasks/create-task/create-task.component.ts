import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskStatus, TaskDetails } from '../../../models/task-details.model';

export interface DialogData {
  id: string
  title: string;
  description: string;
  status: TaskStatus
  isUpdate: boolean
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  taskGroupForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.taskGroupForm = this.fb.group({
      title: new FormControl(this.data?.title),
      description: new FormControl(this.data?.description)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (!this.data?.isUpdate) {
      this.dialogRef.close(this.createTaskPayload());
    } else {
      this.dialogRef.close({ ...this.data, ...this.taskGroupForm.value });
    }
  }

  private createTaskPayload(): TaskDetails {
    return {
      id: '' + Date.now(),
      ...this.taskGroupForm.value,
      status: this.data.status ? this.data.status : TaskStatus.CREATED,
      timestamp: Math.floor(Date.now() / 1000)
    }
  }
}

