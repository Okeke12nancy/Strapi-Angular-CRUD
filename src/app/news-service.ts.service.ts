import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsArticle } from '../app/models/news';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsServiceTsService {

  apiUrl = 'http://localhost:1337/newApp';

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(this.apiUrl);
  }

  // Create a new news article
  createNews(news: NewsArticle): Observable<NewsArticle> {
    return this.http.post<NewsArticle>(this.apiUrl, news, httpOptions);
  }

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
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}




