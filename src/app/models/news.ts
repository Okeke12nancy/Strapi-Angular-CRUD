export interface NewsArticle {
  id?: string;
  title: string;
  content: string;
  author: string;
  // date: Date
  imageUrl: string;
  createdAt?: Date; 
  updatedAt?: Date; 
}

