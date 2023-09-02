import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Blog App'
  displayForm:boolean=false;
  subscription: Subscription=new Subscription();
  //creating constructor to inject the service

  constructor(private uiService: UiService)
  {
      this.subscription=this.uiService.onDisplay().subscribe(value=> this.displayForm=value);
  }
  addBlog() {
    this.uiService.displayForm();
    
  }
}
