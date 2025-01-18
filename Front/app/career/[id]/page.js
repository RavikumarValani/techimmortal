import { use } from "react";
import JobDetail from "../../components/JobDetail";

export const metadata = {
  title: "Tech Immortals | Career",
  description: "Tech Immortals | Career",
};

export default function JobPage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;

  return (
    <>
      <JobDetail id={id} />
    </>
  );
}
