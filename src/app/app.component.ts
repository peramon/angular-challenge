import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'challengeOne';
  url = 'https://miro.medium.com/v2/resize:fit:563/1*wmiHccq6imyMUakUZV_f6g.png';
  
  // Two-way Data Binding
  name!: string;

  // Directives
  cities = ['Madrid','Barcelona','Sevilla'];

  // Component Life Cycle
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Change-> ', changes);
  // }

  // ngOnInit(): void{
  //   console.log('OnInit');
  // }

  // ngOnDestroy(): void {
  //   console.log('Destroy');
  // }

  // Event Binding
  selection!: string;

  onCityClicked(city: string): void{
    console.log('City ->',city)
    this.selection = city;
  }

  onClear(): void{
    this.selection = '';
  }
}

