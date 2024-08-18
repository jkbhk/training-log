import { Component } from '@angular/core';
import { StraightSetComponent } from '../straight-set/straight-set.component';
import { AmrapSetComponent } from '../amrap-set/amrap-set.component';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [StraightSetComponent,AmrapSetComponent],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {

}
