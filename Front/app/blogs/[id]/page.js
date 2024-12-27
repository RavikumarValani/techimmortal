import { use } from "react";
import BlogDetail from "../../components/BlogDetail";

export const metadata = {
  title: "Tech Immortals | Blogs",
  description: "Tech Immortals | Blogs",
};

export default function BlogPost({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  return (
    <>
      <BlogDetail id={id} />
    </>
  );
}
