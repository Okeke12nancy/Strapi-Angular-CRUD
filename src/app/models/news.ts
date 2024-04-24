export interface ApiResponse<T> {
  message?: string;
  data: T;
}

export interface NewsArticle {
  id?: string;
  title: string;
  content: string;
  author: string;
  date: Date
  imageUrl: string;
  createdAt?: Date; // Optional timestamp for creation
  updatedAt?: Date; // Optional timestamp for updates
}

