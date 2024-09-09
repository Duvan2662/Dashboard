import { Component, signal } from '@angular/core';


type Grade = 'A'|'B'|'C'


@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular','React','Vue','Svelt','Qwik']);
  public frameworks2 = signal([]);







  public toggleContent() {
    this.showContent.update(value => !value);
  }

}
