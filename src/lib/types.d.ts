// types.d.ts
export interface BlogPostFields {
  title: string;
  date: string;
  description: string;
  slug: string;
  image: string;
}

export interface BlogPost {
  fields: BlogPostFields;
}

export interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
  image: string;
}
