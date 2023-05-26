export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const post = await res.json();

  return {
    props: { post },
  };
};

const TodoDetail = ({ post }) => {
  return (
    <>
      <h1>Detail Page</h1>
      <li>{post.title}</li>
    </>
  );
};

export default TodoDetail;
