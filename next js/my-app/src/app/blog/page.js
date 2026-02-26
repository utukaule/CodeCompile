
import Posts from "./components/Posts";
const page = async () => {
  // const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const blogs = await data.json();
  // let blogs = [
  //   {
  //     id: 1,
  //     title: "blog 1",
  //   },
  //   {
  //     id: 2,
  //     title: "blog 2",
  //   },
  //   {
  //     id: 3,
  //     title: "blog 3",
  //   },
  // ];

  const promise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      Blog page
      <Posts promise={promise} />
    </div>
  );
};

export default page;
