import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader ({ request } : LoaderArgs) {
  let url = new URL(request.url);
  let name = url.searchParams.get("name")?.trim();

  let message = 'Welcome to Remix';
  if (name) {
    message += `, ${name}!`;
  }

  return json({
    message
  })
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>{message}</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
