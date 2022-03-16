import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutContainerComponent } from './components/layout/app-layout-container.component';
import { TasksContainerComponent } from './components/tasks/tasks-container.component';
import { WelcomeComponent } from './components/layout/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'projects', component: TasksContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
