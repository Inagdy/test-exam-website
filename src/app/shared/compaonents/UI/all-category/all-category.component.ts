import { Component, inject, OnInit } from '@angular/core';
import { GetAllExamesService } from '../../../../core/services/get-all-exames.service';
import { LoginApiRes } from '../../../../../../dist/auth-api/lib/interfaces/loginRes';

@Component({
  selector: 'app-all-category',
  standalone: true,
  imports: [],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss',
})
export class AllCategoryComponent implements OnInit {
  private readonly _GetAllExamesService = inject(GetAllExamesService);
  storedData:LoginApiRes ={
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
     const userInfo = localStorage.getItem('userinfo');
     if (userInfo) {
       this.storedData = JSON.parse(userInfo);
     } else {
       console.warn('No user info found in localStorage');
     }
      console.warn('localStorage is not available');
    }

  
   this._GetAllExamesService.getAllExames(this.storedData.token).subscribe(() => {
     next: (res:any) => {
       console.log(res);
     };
   });
  }
}
