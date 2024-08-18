import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExerciseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trainer';

}
