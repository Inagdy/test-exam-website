import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttom',
  standalone: true,
  imports: [],
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.scss',
})
export class ButtomComponent {
  @Input() text: string = 'add';
  @Input() customStyles!: { [key: string]: string | number };
  @Output() clickEmiter: EventEmitter<any> = new EventEmitter<any>();


  actionFire(e:any){
    this.clickEmiter.emit(e)
  }
}
