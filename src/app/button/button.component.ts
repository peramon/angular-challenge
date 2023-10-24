import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>
  <p>Count: {{counterRender()}}</p>`,
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  // Working with @Input() Decorator
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  counterRender(): boolean {
    console.log('Render button');
    return true;
  }
}
