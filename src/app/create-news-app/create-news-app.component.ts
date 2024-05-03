import { Component } from '@angular/core';
import { NewsArticle } from '../models/news';
import { NewsServiceTsService } from '../news-service.ts.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-news-app',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './create-news-app.component.html',
  styleUrl: './create-news-app.component.css',
})
export class CreateNewsAppComponent {
  newsArticles: NewsArticle[] = [];
  isLoading: boolean = false;

  newArticle: NewsArticle = {
    title: '',
    content: '',
    author: '',
    date: new Date(),
    imageUrl: '',
  };


  constructor(
    private newsService: NewsServiceTsService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    console.log(this.newArticle);
  }

  isEmpty(value: string | null): boolean {
    return value === '' || value === null;
  }

  onSubmit() {
    if (
      this.isEmpty(this.newArticle.title) ||
      this.isEmpty(this.newArticle.content) ||
      this.isEmpty(this.newArticle.author)
    ) {
      this.toastr.warning(
        'Please fill in all required fields: Title, Content, and Author.'
      );
      return; // Prevent further processing if fields are empty
    } else {
      console.log(this.newArticle);
      const article: any = {
        title: this.newArticle.title,
        content: this.newArticle.content,
        author: this.newArticle.author,
        // date: new Date(),
        imageUrl: this.newArticle.imageUrl,
      };
      console.log(article);
      this.isLoading = true;
      this.newsArticles.push(article);
      this.newsService.createNews({ data: article }).subscribe(() => {
        this.newArticle.title = '';
        this.newArticle.content = '';
        this.newArticle.author = '';
        this.isLoading = false;
      });
      this.toastr.success('Article Created');
    }
  }
}
