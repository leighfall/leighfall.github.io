export interface IReadingBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  summary: string;
  status: 'currentlyReading' | 'wantToRead' | 'read';
  review?: string;
}
