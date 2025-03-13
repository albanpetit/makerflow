import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function AppNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <h1 className="text-xl font-extrabold text-primary">MakerFlow</h1>
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        to="/parts"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Parts
      </Link>
      <a
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Storages locations
      </a>
      <a
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Distributors
      </a>
      <a
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projecs
      </a>
    </nav>
  );
}
