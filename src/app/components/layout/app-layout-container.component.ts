import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from '../tasks/create-project/create-project.component';
import { RepositoryService } from '../../services/repository.service';
import { Router } from '@angular/router';
import { ProjectDetails } from '../../models/project-details.model';

@Component({
  selector: 'app-app-layout-container',
  templateUrl: './app-layout-container.component.html',
  styleUrls: ['./app-layout-container.component.scss']
})
export class AppLayoutContainerComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  projects$: Observable<ProjectDetails[]>;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryService.initProjectData();
    this.projects$ = this.repositoryService.getProjects();
  }

  navigateToTasks(project: any) {
    this.router.navigate(['/projects'], { queryParams: { id: project.id } });
  }

  onCreateProject(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      const payload: ProjectDetails = { id: '' + Date.now(), ...result, timestamp: Math.floor(Date.now() / 1000), tasks: [] };
      this.repositoryService.createProject(payload);
      this.router.navigate(['/projects'], { queryParams: { id: payload.id } });
    });
  }
}
