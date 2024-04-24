import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { NewsArticle } from '../models/news';
import { NewsServiceTsService } from '../news-service.ts.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-news-app',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './create-news-app.component.html',
  styleUrl: './create-news-app.component.css',
})
export class CreateNewsAppComponent {
  newsArticles: NewsArticle[] = [];
  @Output() create = new EventEmitter<void>();

  newArticle: NewsArticle = {
    title: '',
    content: '',
    author: '',
    date: new Date(),
    imageUrl: '',
  };

  // newArticleForm: FormGroup; // Declare FormGroup for reactive form

  constructor(private newsService: NewsServiceTsService) {
    //   // this.newArticleForm = this.fb.group ({
    //   //   title: ['', Validators.required],
    //   //   content: ['', Validators.required],
    //   //   author: ['', Validators.required],
    //   //   date: [new Date(), Validators.required],
    //   //   imageUrl: ['', Validators.required]
    //   // });
  }

  ngOnInit(){
    console.log(this.newArticle)
  }

  onSubmit() {
    console.log(this.newArticle)
    if (this.newArticle) {
      const article: any = {
        title: this.newArticle.title,
        content: this.newArticle.content,
        author: this.newArticle.author,
      };
      console.log(article)
      this.newsArticles.push(article)
      this.newsService.createNews(article).subscribe(() => {
        this.newArticle.title = '';
        this.newArticle.content = '';
        this.newArticle.author = '';
        this.create.emit();
      });
    }
  }
}
