import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewsServiceTsService } from './news-service.ts.service';
import { NewsArticle } from './models/news';
import { NewsCardComponent } from './news-card/news-card.component';
import { CreateNewsAppComponent } from './create-news-app/create-news-app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { NewsDetailsComponent } from './news-details/news-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewsCardComponent, CreateNewsAppComponent, NewsListComponent, NewsDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  newsArticles: NewsArticle[] =[]
  error: any;

  // constructor(private newsService: NewsServiceTsService) { }
  ngOnInit() {

  }
  // ngOnInit() {
  //   this.newsService.getNews()
  //     .subscribe(
  //       (data) => this.newsArticles = data,
  //       (error) => this.error = error
  //     );
  // }


  // getNews() {
  //   // Call this method to refresh news list (optional)
  //   this.newsService.getNews()
  //     .subscribe(articles => this.newsArticles = articles);
  // }

//   deleteNews(id: number) {
//     this.newsService.deleteNews(id)
//       .subscribe(() => {
//         // Update the list after successful deletion (optional)
//       });
//   }
}







