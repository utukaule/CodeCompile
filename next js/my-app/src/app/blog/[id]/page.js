import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  return <div>individual blog {id}</div>;
};

export default page;
