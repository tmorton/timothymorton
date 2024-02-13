import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Container } from "~/components/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "~/components/Icons";

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
        <div className="mt-6 flex gap-6">
          <SocialLink
            to="https://www.linkedin.com/in/tim-morton-4222533/"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
          <SocialLink
            to="https://github.com/tmorton/"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <SocialLink
            to="mailto:tim@timothymorton.com"
            aria-label="Email"
            icon={MailIcon}
          />
        </div>
      </Container>
    </>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}
