import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsArticle } from '../models/news';
import { NewsServiceTsService } from '../news-service.ts.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  newsArticles: NewsArticle[] = []

  constructor(private newsService: NewsServiceTsService, private router: Router){

  }

  ngOnInit(){
    this.newsService.news$.subscribe((latestNews) => {
      this.newsArticles = latestNews;
      console.log(this.newsArticles)
    });
  }

  // onReadMore(article: any) {
  //   console.log(article);
  //   this.router.navigate(['articles']); 
  // }

  onReadMore(article: any) {
    this.router.navigate(['/articles', article.id]);
  }
}
