import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `<ul>
  <li (click)="onCityClicked(city)" 
  [ngClass]="{'alert alert-info':city === selection}">
    {{city}}</li>
</ul>
<p>Count: {{counterRender()}}</p>`,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {

  @Input() city!: string;
  @Input() selection!: string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string): void {
    // emmit
    this.cityClickedEvent.emit(city);
  }

  counterRender(): boolean {
    console.log('Render cities');
    return true;
  }

}
