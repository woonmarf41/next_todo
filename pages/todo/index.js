import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
};

const TodoPage = ({ posts }) => {
  return (
    <>
      <h1>ALL TO DO</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/todo/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </>
  );
};

export default TodoPage;
