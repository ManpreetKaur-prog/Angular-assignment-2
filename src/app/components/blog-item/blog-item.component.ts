import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Blog } from 'src/app/Blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent {
  @Input() blog: Blog = {   id:3,
    title: 'Blog-1',
    desc: 'Description of Blog-1',
    read: false
  };

  @Output() onDeleteBlog: EventEmitter<Blog>=new EventEmitter;

  @Output() OnmarkItAsRead: EventEmitter<Blog>=new EventEmitter;
  
    faTimes=faTimes;
    onDelete(blog: Blog)
    {
      this.onDeleteBlog.emit(blog)
    }
    markItAsRead(blog:Blog)
    { 
      this.OnmarkItAsRead.emit(blog)
    }
}
