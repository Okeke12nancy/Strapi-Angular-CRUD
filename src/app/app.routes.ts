import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { UpdateNewsComponent }
import { NewsListComponent } from './news-list/news-list.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: '', component:NewsListComponent  },
  // { path: 'news/update/:id', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
