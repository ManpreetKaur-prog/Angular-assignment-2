import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {

  }
  
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs) => this.blogs = blogs);
  }
  deleteBlog(blog: Blog){
      this.blogService
      .deleteBlog(blog)
      .subscribe(()=>(this.blogs=this.blogs.filter(td=> td.id !== blog.id)))
  }
  onMarkItAsRead(blog:Blog)
  {
      blog.read=!blog.read;
  }
  onAddBlog(blog: Blog)
  {
      this.blogService.addBlogElement(blog).subscribe((blog)=> this.blogs.push(blog) )
  }
}
