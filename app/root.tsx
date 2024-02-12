import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css"; // injects CSS into the page as inline styles (from Vite)
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <div className="flex w-full">
          <Layout>
            <Outlet />
          </Layout>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
