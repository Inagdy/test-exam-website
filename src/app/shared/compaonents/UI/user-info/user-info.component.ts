import { Component, inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  email:string=''
  
  ngOnInit(): void {
    // if(localStorage.getItem('userinfo')!== null){

    //   const userString = localStorage.getItem('userinfo');
    //   const user = userString ? JSON.parse(userString) : null;
    //   console.log(user)
    // }
  }

}
