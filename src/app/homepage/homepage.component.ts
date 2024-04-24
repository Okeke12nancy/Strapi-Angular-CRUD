import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsServiceTsService } from '../news-service.ts.service';
import { NewsListComponent } from '../news-list/news-list.component';
import { CreateNewsAppComponent } from '../create-news-app/create-news-app.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NewsListComponent, CreateNewsAppComponent, ModalComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  
  
}
