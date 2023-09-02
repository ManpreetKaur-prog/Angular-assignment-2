import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() text: string = 'aa';
  @Input() color: string = 'pink';

  @Output() btnClick = new EventEmitter();

  //constructor(text: string, color: string) {
   //   this.text = text;
   //   this.color = color;
 // }


 onClick() {
  this.btnClick.emit();
  
 }

}
