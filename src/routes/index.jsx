import { createTurboResource } from "turbo-solid";

export default function Home() {
  const [posts] = createTurboResource(
    () => "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <main>
      <For each={posts()}>{(post) => <h1>{post.title}</h1>}</For>
    </main>
  );
}
