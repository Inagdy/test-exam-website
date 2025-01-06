import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ProgressBarModule, ToastModule, TabMenuModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit  {
 fName!:string
 lName!:string
 constructor(@Inject(PLATFORM_ID) private platform: object){}
ngOnInit(): void {
  if(isPlatformBrowser(this.platform)){
    this.fName =localStorage.getItem("firstName")!
    this.lName =localStorage.getItem("lastName")!
  }
}


}
