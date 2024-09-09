import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  public showContent = signal(false);




  public toggleContent() {
    this.showContent.update(value => !value);
  }

}
