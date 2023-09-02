import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from '../Blog';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private backendUrl: string ='http://localhost:3000/blogs'
  constructor(private httpclient: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.httpclient.get<Blog[]>(this.backendUrl);
    // const todos = of(TODOS);
    // return todos;
  }
  deleteBlog(blog:Blog): Observable<Blog>
  {
    const url=  `${this.backendUrl}/${blog.id}`;  
    return this.httpclient.delete<Blog>(url)
  }
  addBlogElement(blog: Blog ): Observable<Blog>{
    return this.httpclient.post<Blog> (this.backendUrl,blog, options)
  }
}
