import type { MetaFunction } from "@remix-run/node";
import { Container } from "~/components/Container";

export default function Index() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Timothy Morton
          </h1>
          <h2 className="text-3xl  tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Engineering for humans
          </h2>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hello, I'm Tim. I'm a <strong>product focused</strong> and{" "}
            <strong>full stack</strong> software engineer based in the
            Washington, DC area. I'm currently seeking a senior+ role in a
            product focused company.
          </p>
        </div>
      </Container>
    </>
  );
}
