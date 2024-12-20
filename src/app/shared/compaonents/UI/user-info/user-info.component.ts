import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { LoginApiRes } from '../../../../../../dist/auth-api/lib/interfaces/loginRes';



@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit  {

  userData: LoginApiRes ={
    message: '',
    token: '',
    user: {
      _id: '',
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: '',
      isVerified: false,
      createdAt: ''
    }
  }; // Use any or define an appropriate interface


  ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('userinfo');

      if (storedData) {
        try {
          this.userData = JSON.parse(storedData); // Parse the JSON string
          console.log(this.userData.user.firstName); 
        } catch (error) {
          console.error('Error parsing localStorage data:', error);
        }
      } else {
        console.warn('No user info found in localStorage');
      }
    } else {
      console.warn('localStorage is not available');
    }
  }
}