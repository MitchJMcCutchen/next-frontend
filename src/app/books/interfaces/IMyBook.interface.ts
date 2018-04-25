export interface IMyBook {
  userId: string;
  bookId: string;
  title: string;
  description: string;
  authors: string[];
  images: {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  rating: {
    overall: boolean;
    plot: boolean;
    style: boolean;
    genre: boolean;
    character: boolean;
  };
  review: string;
}
