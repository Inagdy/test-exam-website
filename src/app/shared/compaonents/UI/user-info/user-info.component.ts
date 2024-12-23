import { Component, NgModule, OnInit } from '@angular/core';
import { LoginApiRes } from '../../../../../../dist/auth-api/lib/interfaces/loginRes';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ProgressBarModule, ToastModule, TabMenuModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  items: MenuItem[] | undefined;
  userData: LoginApiRes = {
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
      createdAt: '',
    },
  };

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('userinfo');

      if (storedData) {
        try {
          this.userData = JSON.parse(storedData);
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
