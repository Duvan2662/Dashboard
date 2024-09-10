import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent,CommonModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  public currentFramework = computed(
    () =>  `change detection - ${this.frameworkAsSignal().name}`
  )

  constructor(){
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React'
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))
      console.log('Hecho.......');
    }, 3000);
  }

}
