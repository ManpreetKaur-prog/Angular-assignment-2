import { Component } from '@angular/core';
import { BlogguardService } from 'src/app/services/blogguard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BlogguardService]
})
export class DashboardComponent {

}
