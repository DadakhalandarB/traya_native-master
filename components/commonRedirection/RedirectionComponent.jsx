"use client";
import { useRouter } from "next/navigation";

const RedirectionComponent = (props) => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    <div>Redirecting...</div>;
    router.push(props.url, undefined, { shallow: true });
    return null;
  }
};

export default RedirectionComponent;
