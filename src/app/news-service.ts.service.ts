import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { NewsArticle } from '../app/models/news';
import { switchMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class NewsServiceTsService {
  apiUrl = 'http://localhost:3000/news';

  private newsSubject = new BehaviorSubject<NewsArticle[]>([]);
  news$: Observable<NewsArticle[]> = this.newsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getNews().subscribe(news => {
      this.newsSubject.next(news);
    });
  }


  // this the get news that works with json-server
  getNews(): Observable<NewsArticle[]> {
    return timer(0, 5000).pipe(
      switchMap(() => this.http.get<NewsArticle[]>(this.apiUrl))
    );
  }


  // this is the create news that works with json server
  createNews(news: NewsArticle): Observable<NewsArticle> {
    return this.http.post<NewsArticle>(this.apiUrl, news, httpOptions);
  }

  // this is the get news that works with the endpoint
  // getNews(): Observable<NewsArticle[]> {
  //   return this.http.get<NewsArticle[]>('localhost:1337/api/news-apps?populate=*');
  // }

  // this is the create news that works with the endpoint
  // createNews(news: NewsArticle): Observable<NewsArticle> {
  //   return this.http.post<NewsArticle>('http://localhost:1337/api/news-apps', news, httpOptions);
  // }

  // Get a specific news article by ID
  getNewsById(id: number): Observable<NewsArticle> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<NewsArticle>(url);
  }

  // Update an existing news article
  updateNews(news: NewsArticle): Observable<NewsArticle> {
    const url = `${this.apiUrl}/${news.id}`;
    return this.http.put<NewsArticle>(url, news, httpOptions);
  }

  // Delete a news article by ID
  deleteNews(id: number): Observable<any> {
    // const url = `${this.apiUrl}/${id}`;
    console.log(id)
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
