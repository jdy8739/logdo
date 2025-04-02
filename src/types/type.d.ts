type Post = Queries.IndexPageQuery['allContentfulBlogPost']['nodes'];

type PostItem = Post extends ReadonlyArray<infer U> ? U : never;

type PostDetail =
  PageProps<Queries.PostPageQuery>['data']['contentfulBlogPost'];

export type { Post, PostItem, PostDetail };
