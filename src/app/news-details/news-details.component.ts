import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsServiceTsService } from '../news-service.ts.service';
import { NewsListComponent } from '../news-list/news-list.component';
import { CreateNewsAppComponent } from '../create-news-app/create-news-app.component';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [NewsListComponent, CreateNewsAppComponent, ModalComponent, FormsModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css',
})
export class NewsDetailsComponent {
  newsArticles: any = [];
  deleteModalOpen: boolean = false;
  editModalOpen: boolean = false;
  articleId: any = '';
  articleDetails: any = {};

  constructor(
    private newsService: NewsServiceTsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const articleId = params['id'];
      this.newsService.getNewsById(articleId).subscribe((latestNews) => {
        this.articleDetails = latestNews;
        console.log(articleId, 'mmm');
      });
    });
  }

  deleteNews() {
    this.newsService.deleteNews(this.articleDetails.id).subscribe(() => {
      this.newsArticles = this.newsArticles.filter(
        (news: any) => news.id !== this.articleDetails.id
      );
      this.router.navigate(['']);
    });
  }

  edit(){
    this.editModalOpen = true
  }

  backToHomepage(){
    this.router.navigate(['']);
  }

  editNews(){
    this.newsService.updateNews(this.articleDetails).subscribe(() => {
      this.editModalOpen = false
    })
  }

  deleteModalToggle(open: boolean) {
    this.deleteModalOpen = open;
  }
  cancel() {
    this.deleteModalOpen = false;
  }
  deleteConfirm() {
    this.deleteModalOpen = true;
  }
}
