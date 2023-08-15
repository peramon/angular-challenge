import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  // Working with @Input() Decorator
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  // Component Life Cycle
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change-> ', changes);
  }

  ngOnInit(): void{
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
