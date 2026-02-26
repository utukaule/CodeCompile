"use client";
import React, { use } from "react";
import Link from "next/link";
const Posts = ({ promise }) => {
  const blogs = use(promise);
  return (
    <div>
      <ul className="">
        {blogs.map((blog) => {
          return (
            <li className="border mt-3" key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <b>{blog.title}l;</b>
              </Link>
              <p>{blog.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
