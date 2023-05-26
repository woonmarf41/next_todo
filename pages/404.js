import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
      //   router.push('/')
    }, 3000);
    return () => {
      console.log("clean up");
    };
  });

  return (
    <>
      <h1>404 Page not found</h1>
    </>
  );
};

export default NotFoundPage;
