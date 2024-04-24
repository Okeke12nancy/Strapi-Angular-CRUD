import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { UpdateNewsComponent }
import { NewsListComponent } from './news-list/news-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'articles/:id', component: NewsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
