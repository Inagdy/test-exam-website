import { ExamesArray } from './../../../../core/interfaces/exames-array';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { AllserviceService } from '../../../../core/services/allservice.service';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-category',
  standalone: true,
  imports: [],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss',
})
export class AllCategoryComponent implements OnInit {
  examesdata!:ExamesArray[];
  
  private call: any
  constructor(
    private _allserviceService: AllserviceService,
    @Inject(PLATFORM_ID) private platform: object
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
     this.call = this._allserviceService.getTestData().subscribe({
        next: (data) => {
          console.log(data)
          this.examesdata = data.subjects;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
//   ngOnDestroy(): void {
//     this.call.unsubscribe();
//  }
}
