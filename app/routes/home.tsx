import type { Route } from "./+types/home";

// Meta function to define metadata for the route.
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Simple starter" }, // Updated title
    { name: "description", content: "A simple starter for React Router" }, // Updated description
  ];
}

// Loader function to fetch data for the route.
export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY }; // Keep existing loader data if needed
}

// Home component for the default route.
export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      hello
    </main>
  );
}
