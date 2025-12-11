import type { IReadingBook } from '@/models/ReadingBook';

export const READING_BOOKS: IReadingBook[] = [
  {
    id: 'why-we-sleep',
    title: 'Why We Sleep',
    author: 'Matthew Walker',
    coverImage: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501144325/why-we-sleep-9781501144325_hr.jpg',
    summary: 'An exploration of the science behind sleep and its vital role in our lives.',
    status: 'currentlyReading',
  },
  {
    id: 'the-invisible-life-of-addie-larue',
    title: 'The Invisible Life of Addie LaRue',
    author: 'V. E. Schwab',
    coverImage: 'https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9780765387561.jpg',
    summary: 'A sweeping fantasy about a woman cursed to be forgotten by everyone she meets.',
    status: 'currentlyReading',
  },
  {
    id: 'the-reformatory',
    title: 'The Reformatory',
    author: 'Tananarive Due',
    coverImage: 'https://rep.club/cdn/shop/products/9781982188344_360x.jpg?v=1698950400', // Retail source
    summary: 'A ghost story and historical thriller set in a haunted reform school.',
    status: 'read',
    review: '',
  },
  {
    id: 'die-with-zero',
    title: 'Die With Zero',
    author: 'Bill Perkins',
    coverImage: 'https://m.media-amazon.com/images/I/61%2B4EHZ4faL._AC_UF1000%2C1000_QL80_.jpg', // Official site source
    summary: 'A guide to making the most of your life and money before it’s too late.',
    status: 'read',
    review: '',
  },
  {
    id: 'the-happiness-project',
    title: 'The Happiness Project',
    author: 'Gretchen Rubin',
    coverImage: 'https://images.penguinrandomhouse.com/cover/9780061583261', // Penguin Random House
    summary: 'One woman’s year-long experiment to increase her own happiness.',
    status: 'wantToRead',
  },
  {
    id: 'the-memory-police',
    title: 'The Memory Police',
    author: 'Yoko Ogawa',
    coverImage: 'https://images.penguinrandomhouse.com/cover/9781101911815', // Penguin Random House
    summary: 'A haunting Orwellian novel about the power and fragility of memory.',
    status: 'wantToRead',
  },
];
