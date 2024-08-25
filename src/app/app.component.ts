import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectiveComponent } from './objective/objective.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';
import { OthersComponent } from './others/others.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ObjectiveComponent, 
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CoursesComponent,
    OthersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myResume';
}
