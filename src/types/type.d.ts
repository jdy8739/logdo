type Post = Queries.IndexPageQuery['allContentfulBlogPost']['nodes'];

type PostItem = Post extends ReadonlyArray<infer U> ? U : never;

export type { Post, PostItem };
