import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { Blog } from 'src/app/Blog';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  @Output() onAddBlog: EventEmitter<Blog> = new EventEmitter()

  title:string='1';
  desc: string='2';
  read: boolean=false;
  displayForm:boolean=false;
  subscription: Subscription= new Subscription();
  constructor(private uiService: UiService){
    this.subscription=this.uiService.onDisplay().subscribe(value=> this.displayForm=value);
  }
  ngOnInit(): void {
  }
  onSubmit()
  {
    if(!this.title)
    {
      alert('Please enter text');
      return;
    }
    const newBlog = {
      title:this.title,
      desc: this.desc,
      read: this.read
  }
  this.onAddBlog.emit(newBlog);
  this.title=''
  this.desc=''
  this.read=false;
  }
 
}
