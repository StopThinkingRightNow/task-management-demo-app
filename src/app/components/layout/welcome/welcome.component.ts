import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from '../../tasks/create-project/create-project.component';
import { RepositoryService } from '../../../services/repository.service';
import { ProjectDetails } from '../../../models/project-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(public dialog: MatDialog, private repositoryService: RepositoryService, private router: Router) { }

  onCreateProject(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      const payload: ProjectDetails = { id: '' + Date.now(), ...result, timestamp: Math.floor(Date.now() / 1000), tasks: [] };
      this.repositoryService.createProject(payload);
      if (result) {
        this.router.navigate(['/projects'], { queryParams: { id: payload.id } });
      }
    });
  }
}
