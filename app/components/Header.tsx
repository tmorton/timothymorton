import { useRef } from "react";
import clsx from "clsx";
import { Container } from "~/components/Container";
import { Link } from "@remix-run/react";

import avatarImage from "~/images/avatar.jpg";

export function Header() {
  const isHomePage = true; // TODO - get from route data

  let headerRef = useRef<React.ElementRef<"div">>(null);
  let avatarRef = useRef<React.ElementRef<"div">>(null);
  let isInitial = useRef(true);

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      {isHomePage && (
        <>
          <div
            ref={avatarRef}
            className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
          />
          <Container
            className="top-0 order-last -mb-3 pt-3"
            style={{
              position:
                "var(--header-position)" as React.CSSProperties["position"],
            }}
          >
            <div
              className="top-[var(--avatar-top,theme(spacing.3))] w-full"
              style={{
                position:
                  "var(--header-inner-position)" as React.CSSProperties["position"],
              }}
            >
              <div className="relative">
                <AvatarContainer
                  className="absolute left-0 top-3 origin-left transition-opacity"
                  style={{
                    opacity: "var(--avatar-border-opacity, 0)",
                    transform: "var(--avatar-border-transform)",
                  }}
                />
                <Avatar
                  large
                  className="block h-16 w-16 origin-left"
                  style={{ transform: "var(--avatar-image-transform)" }}
                />
              </div>
            </div>
          </Container>
        </>
      )}
      <div
        ref={headerRef}
        className="top-0 z-10 h-16 pt-6"
        style={{
          position: "var(--header-position)" as React.CSSProperties["position"],
        }}
      >
        <Container
          className="top-[var(--header-top,theme(spacing.6))] w-full"
          style={{
            position:
              "var(--header-inner-position)" as React.CSSProperties["position"],
          }}
        >
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              {/* {!isHomePage && (
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              )} */}
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              {/* <MobileNavigation className="pointer-events-auto md:hidden" />
              <DesktopNavigation className="pointer-events-auto hidden md:block" /> */}
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">{/* <ThemeToggle /> */}</div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

function AvatarContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "to"> & {
  large?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <img
        src={avatarImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
      />
    </Link>
  );
}
