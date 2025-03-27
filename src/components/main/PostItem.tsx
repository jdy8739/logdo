const PostItem = ({
  title,
  date,
  slug,
}: {
  title: string;
  date: string;
  slug: string;
}) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{slug}</p>
    </article>
  );
};

export default PostItem;
