import { Component, Input } from '@angular/core';
import { NewsArticle } from '../models/news';


@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})

export class NewsCardComponent {
  @Input() news!: NewsArticle;
}
