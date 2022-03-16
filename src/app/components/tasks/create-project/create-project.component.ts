import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskDetails, TaskStatus } from 'src/app/models';
import { DialogData } from '../create-task/create-task.component';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CreateProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: new FormControl('')
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.dialogRef.close(this.projectForm.value);
  }

}
