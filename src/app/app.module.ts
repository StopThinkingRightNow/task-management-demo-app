import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutContainerComponent } from './components/layout/app-layout-container.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TasksContainerComponent } from './components/tasks/tasks-container.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskPoolComponent } from './components/tasks/task-pool/task-pool.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CreateProjectComponent } from './components/tasks/create-project/create-project.component';
import { WelcomeComponent } from './components/layout/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutContainerComponent,
    TasksContainerComponent,
    TaskPoolComponent,
    TaskComponent,
    CreateTaskComponent,
    CreateProjectComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    TextFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
