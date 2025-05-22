TITLE: Installing React Router via npm
DESCRIPTION: Installs the React Router package using npm. This command adds React Router as a dependency to the project.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/installation.md#2025-04-22_snippet_1

LANGUAGE: shellscript
CODE:
```
npm i react-router
```

----------------------------------------

TITLE: Link with To Prop
DESCRIPTION: Demonstrates the usage of the `to` prop, which can be a string or a partial Path object, to specify the destination of the link.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/components/Link.md#_snippet_8

LANGUAGE: tsx
CODE:
```
<Link to="/some/path" />

<Link
  to={{
    pathname: "/some/path",
    search: "?query=string",
    hash: "#hash",
  }}
/>
```

----------------------------------------

TITLE: Defining and Using clientLoader for Data Fetching in React Router (TSX)
DESCRIPTION: This snippet demonstrates how to define and export a clientLoader function to fetch data for a route. It also shows how to receive and render the loaded data within the component using the loaderData prop.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md#_snippet_5

LANGUAGE: tsx
CODE:
```
// existing imports
import { getContacts } from "./data";

// existing exports

export async function clientLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function App({ loaderData }) {
  const { contacts } = loaderData;

  return (
    <>
      <div id="sidebar">
        {/* other elements */}
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {contact.favorite ? (
                      <span>★</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      {/* other elements */}
    </>
  );
}
```

----------------------------------------

TITLE: Creating a new React Router app using npm
DESCRIPTION: This command uses npm to create a new React Router application. It initializes a new project with the necessary dependencies and configuration for React Router.
SOURCE: https://github.com/remix-run/react-router/blob/main/packages/create-react-router/README.md#2025-04-22_snippet_0

LANGUAGE: sh
CODE:
```
npm create react-router
```

----------------------------------------

TITLE: Creating a Data Router with createBrowserRouter and RouterProvider
DESCRIPTION: This code snippet shows how to create a data router using createBrowserRouter and RouterProvider. It defines a route configuration with a path, Component, and loader, and then renders the application within a RouterProvider, passing the router instance as a prop.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/modes.md#_snippet_1

LANGUAGE: tsx
CODE:
```
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: loadRootData,
  },
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
```

----------------------------------------

TITLE: Using Link Component in React Router
DESCRIPTION: This snippet shows how to use the Link component from React Router for basic navigation without active styling. It's used within a component to create a simple login link.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/navigating.md#2025-04-22_snippet_5

LANGUAGE: tsx
CODE:
```
import { Link } from "react-router";

export function LoggedOutMessage() {
  return (
    <p>
      You've been logged out.{" "}
      <Link to="/login">Login again</Link>
    </p>
  );
}
```

----------------------------------------

TITLE: Using useNavigate in a Functional Component (TSX)
DESCRIPTION: Demonstrates importing and calling the `useNavigate` hook within a React functional component. It shows how to get the navigate function and use it, specifically to navigate back in the browser's history stack when a button is clicked.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useNavigate.md#_snippet_0

LANGUAGE: TSX
CODE:
```
import { useNavigate } from "react-router";

function SomeComponent() {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
    />
  );
}
```

----------------------------------------

TITLE: Configuring React Router in a React Application
DESCRIPTION: Basic setup of React Router in a React application. This snippet demonstrates how to import necessary components, define routes, and render them within the app structure.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/index.md#2025-04-22_snippet_1

LANGUAGE: jsx
CODE:
```
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

----------------------------------------

TITLE: Initializing RouterProvider with createBrowserRouter in React Router
DESCRIPTION: This example demonstrates how to set up a React Router application using RouterProvider and createBrowserRouter. It shows the typical pattern of creating a router instance and rendering it at the root of the application.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/data-routers/RouterProvider.md#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router";
import { createRoot } from "react-dom/client";
let router = createBrowserRouter();
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

----------------------------------------

TITLE: Basic Route Configuration in TypeScript
DESCRIPTION: Demonstrates how to configure basic routes using the route function from React Router. It shows the structure of a route with a path pattern and a file path to the route module.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/routing.md#2025-04-22_snippet_0

LANGUAGE: typescript
CODE:
```
import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("some/path", "./some/file.tsx"),
  // pattern ^           ^ module file
] satisfies RouteConfig;
```

----------------------------------------

TITLE: Implementing Client-Side Navigation with React Router Link (TSX)
DESCRIPTION: This snippet shows how to replace standard HTML <a> tags with React Router's <Link> component to enable client-side navigation. This prevents full page reloads when navigating between routes.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md#_snippet_4

LANGUAGE: tsx
CODE:
```
import {
  Form,
  Link,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";

// existing imports & exports

export default function App() {
  return (
    <>
      <div id="sidebar">
        {/* other elements */}
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* other elements */}
    </>
  );
}
```

----------------------------------------

TITLE: Bootstrapping a React Project with Vite
DESCRIPTION: Uses npx to create a new React project using the Vite template. This command initiates the project setup process.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/installation.md#2025-04-22_snippet_0

LANGUAGE: shellscript
CODE:
```
npx create-vite@latest
```

----------------------------------------

TITLE: Calling Actions with Form in React Router
DESCRIPTION: Demonstrates how to call an action using a Form component in React Router. This method causes a navigation and adds a new entry to the browser history.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/actions.md#2025-04-22_snippet_2

LANGUAGE: tsx
CODE:
```
import { Form } from "react-router";

function SomeComponent() {
  return (
    <Form action="/projects/123" method="post">
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

----------------------------------------

TITLE: Using useLocation Hook for Side Effects in React Router
DESCRIPTION: This snippet demonstrates how to use the useLocation hook from react-router to perform side effects when the location changes, such as sending pageview data to Google Analytics.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useLocation.md#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import * as React from 'react'
import { useLocation } from 'react-router'

function SomeComponent() {
  let location = useLocation()

  React.useEffect(() => {
    // Google Analytics
    ga('send', 'pageview')
  }, [location]);

  return (
    // ...
  );
}
```

----------------------------------------

TITLE: Basic BrowserRouter Usage
DESCRIPTION: This code snippet shows the basic usage of `BrowserRouter` without the `React.startTransition` future flag. This represents the existing behavior without the flag enabled.
SOURCE: https://github.com/remix-run/react-router/blob/main/packages/react-router/CHANGELOG.md#_snippet_39

LANGUAGE: JSX
CODE:
```
<BrowserRouter>
  <Routes>{/*...*/}</Routes>
</BrowserRouter>
```

----------------------------------------

TITLE: Demonstrating useSearchParams() Hook Usage in React Router
DESCRIPTION: This code snippet shows how to use the useSearchParams() hook in React Router to manipulate the search portion of the URL. It's used in a component that searches for GitHub users and displays their profiles.
SOURCE: https://github.com/remix-run/react-router/blob/main/examples/search-params/README.md#2025-04-22_snippet_0

LANGUAGE: TypeScript
CODE:
```
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/search-params?file=src/App.tsx)
```

----------------------------------------

TITLE: Implementing a Loader and Component with Route Module API
DESCRIPTION: This code snippet shows how to implement a loader and component using the Route Module API. The loader fetches product data based on the pid parameter, and the component renders the product name from the loader data.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/modes.md#_snippet_3

LANGUAGE: ts
CODE:
```
import { Route } from "+./types/product.tsx";

export async function loader({ params }: Route.LoaderArgs) {
  let product = await getProduct(params.pid);
  return { product };
}

export default function Product({
  loaderData,
}: Route.ComponentProps) {
  return <div>{loaderData.product.name}</div>;
}
```

----------------------------------------

TITLE: Creating a Router with Route Objects - TSX
DESCRIPTION: Demonstrates how to create a router instance using `createBrowserRouter` with an array of route objects, including loaders for data fetching.  This example shows a basic route configuration with nested routes and a loader function that fetches data based on route parameters. The `request.signal` is used for aborting the fetch on unmount.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/custom.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { createBrowserRouter } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "shows/:showId",
        Component: Show,
        loader: ({ request, params }) =>
          fetch(`/api/show/${params.id}.json`, {
            signal: request.signal,
          }),
      },
    ],
  },
]);
```

----------------------------------------

TITLE: Installing React Router via npm
DESCRIPTION: Command to install React Router using npm package manager. This is the first step in setting up React Router in a project.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/index.md#2025-04-22_snippet_0

LANGUAGE: shell
CODE:
```
npm install react-router-dom
```

----------------------------------------

TITLE: New React Router Implementation with RouterProvider
DESCRIPTION: Updated implementation using createBrowserRouter and RouterProvider, demonstrating the new approach with route configuration objects.
SOURCE: https://github.com/remix-run/react-router/blob/main/decisions/0005-remixing-react-router.md#2025-04-22_snippet_6

LANGUAGE: tsx
CODE:
```
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function NewApp() {
  return <RouterProvider router={router} />;
}
```

----------------------------------------

TITLE: Creating and Rendering a React Router Configuration
DESCRIPTION: Sets up a basic React Router configuration using createBrowserRouter and renders it using RouterProvider. This snippet demonstrates how to define a simple route and integrate it into a React application.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/installation.md#2025-04-22_snippet_2

LANGUAGE: tsx
CODE:
```
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
```

----------------------------------------

TITLE: Defining Route with Loader and Accessing Data (TSX)
DESCRIPTION: Illustrates how to define a route object that includes a `loader` function to fetch data based on a dynamic parameter (`:teamId`) and how the component accesses this data using the `useLoaderData` hook.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/routing.md#_snippet_2

LANGUAGE: tsx
CODE:
```
import {
  createBrowserRouter,
  useLoaderData,
} from "react-router";

createBrowserRouter([
  {
    path: "/teams/:teamId",
    loader: async ({ params }) => {
      let team = await fetchTeam(params.teamId);
      return { name: team.name };
    },
    Component: Team,
  },
]);
```

LANGUAGE: tsx
CODE:
```
function Team() {
  let data = useLoaderData();
  return <h1>{data.name}</h1>;
}
```

----------------------------------------

TITLE: Configuring Basic Route with createBrowserRouter (TSX)
DESCRIPTION: Demonstrates the minimum configuration required for a route using `createBrowserRouter` in React Router. It defines a single route at the root path '/' that renders the `Root` component.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/routing.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { createBrowserRouter } from "react-router";

function Root() {
  return <h1>Hello world</h1>;
}

const router = createBrowserRouter([
  { path: "/", Component: Root },
]);
```

----------------------------------------

TITLE: Accessing Loader Data in React Component
DESCRIPTION: This code shows how to access data provided by a route loader within a React component using the useLoaderData hook from React Router. The hook returns the data object, which can then be destructured to access specific properties.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/data-loading.md#_snippet_1

LANGUAGE: tsx
CODE:
```
import { useLoaderData } from "react-router";

function MyRoute() {
  const { records } = useLoaderData();
  return <div>{records.length}</div>;
}
```

----------------------------------------

TITLE: Creating New React Router Project
DESCRIPTION: Command to create a new React Router project using the official template creator.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/installation.md#2025-04-22_snippet_0

LANGUAGE: shellscript
CODE:
```
npx create-react-router@latest my-react-router-app
```

----------------------------------------

TITLE: Defining a Route Module in TypeScript
DESCRIPTION: Shows the structure of a route module file, including the loader function for data fetching and the default export component for rendering. It demonstrates type safety and data passing between the loader and component.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/routing.md#2025-04-22_snippet_3

LANGUAGE: tsx
CODE:
```
// provides type safety/inference
import type { Route } from "./+types/team";

// provides `loaderData` to the component
export async function loader({ params }: Route.LoaderArgs) {
  let team = await fetchTeam(params.teamId);
  return { name: team.name };
}

// renders after the loader is done
export default function Component({
  loaderData,
}: Route.ComponentProps) {
  return <h1>{loaderData.name}</h1>;
}
```

----------------------------------------

TITLE: Using useSearchParams Hook
DESCRIPTION: This example demonstrates how to import and use the `useSearchParams` hook from React Router to access and update URL search parameters within a component.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useSearchParams.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { useSearchParams } from "react-router";

export function SomeComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  // ...
}
```

----------------------------------------

TITLE: Configuring Complex Routes in React Router
DESCRIPTION: This snippet shows a more complex route configuration, including nested routes, index routes, and routes with parameters. It demonstrates how to structure a larger application with multiple pages and nested layouts.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/declarative/routing.md#2025-04-22_snippet_1

LANGUAGE: tsx
CODE:
```
<Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route>
</Routes>
```

----------------------------------------

TITLE: Navigating to a Specific Path (TSX)
DESCRIPTION: Provides examples of how to use the function returned by `useNavigate` to navigate to a specific URL path. It shows the common usage with a simple path string and also includes an example demonstrating navigation with query parameters.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useNavigate.md#_snippet_2

LANGUAGE: TSX
CODE:
```
navigate("/some/route");
navigate("/some/route?search=param");
```

----------------------------------------

TITLE: Updating Search Params with Different Methods in React Router
DESCRIPTION: This snippet demonstrates various ways to update search parameters using the setSearchParams function. It shows how to set individual parameters, merge with existing params, and replace all params.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/how-to/search-params.md#2025-04-22_snippet_2

LANGUAGE: jsx
CODE:
```
// Set one parameter
setSearchParams({ sort: "ascending" });

// Merge with existing parameters
setSearchParams(prevParams => {
  prevParams.set("sort", "ascending");
  return prevParams;
});

// Replace all existing parameters
setSearchParams({ sort: "ascending", filter: "name" });
```

----------------------------------------

TITLE: Rendering Nested Routes with Outlet (TSX)
DESCRIPTION: Shows how a parent component (`Dashboard`) renders its nested child routes using the `<Outlet />` component provided by React Router.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/routing.md#_snippet_4

LANGUAGE: tsx
CODE:
```
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home> or <Settings> */}
      <Outlet />
    </div>
  );
}
```

----------------------------------------

TITLE: Configuring Routes in React Router
DESCRIPTION: Sets up the initial route configuration for the signup form using React Router's route definition.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/how-to/form-validation.md#2025-04-22_snippet_0

LANGUAGE: typescript
CODE:
```
import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("signup", "signup.tsx"),
] satisfies RouteConfig;
```

----------------------------------------

TITLE: Installing React Router v7
DESCRIPTION: Command to install the latest version of react-router-dom using npm.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/upgrading/v6.md#2025-04-22_snippet_5

LANGUAGE: shellscript
CODE:
```
npm install react-router-dom@latest
```

----------------------------------------

TITLE: Define Initial Sidebar Layout Component (TSX)
DESCRIPTION: Provides the initial code for `app/layouts/sidebar.tsx`, defining a basic React component that imports and renders the `<Outlet>` component from `react-router` to serve as a placeholder for nested routes.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md#_snippet_13

LANGUAGE: tsx
CODE:
```
import { Outlet } from "react-router";

export default function SidebarLayout() {
  return <Outlet />;
}
```

----------------------------------------

TITLE: Defining Loader and Using Data in Component (TSX)
DESCRIPTION: Illustrates how to define an asynchronous `loader` function to fetch data before rendering and how to access that data via the `loaderData` prop in the route's default component.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/route-module.md#_snippet_3

LANGUAGE: TSX
CODE:
```
export async function loader() {
  return { message: "Hello, world!" };
}

export default function MyRoute({ loaderData }) {
  return <h1>{loaderData.message}</h1>;
}
```

----------------------------------------

TITLE: Programmatic Navigation with useNavigate Hook
DESCRIPTION: Example of using the useNavigate hook for programmatic navigation after form submission or other events.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/declarative/navigating.md#2025-04-22_snippet_6

LANGUAGE: tsx
CODE:
```
import { useNavigate } from "react-router";

export function LoginPage() {
  let navigate = useNavigate();

  return (
    <>
      <MyHeader />
      <MyLoginForm
        onSuccess={() => {
          navigate("/dashboard");
        }}
      />
      <MyFooter />
    </>
  );
}
```

----------------------------------------

TITLE: Simplified React Router Form Implementation
DESCRIPTION: Streamlined form implementation using React Router's built-in features for state management and validation.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/explanation/state-management.md#2025-04-22_snippet_10

LANGUAGE: tsx
CODE:
```
import { useNavigation } from "react-router";
import type { Route } from "./+types/signup";

export async function action({
  request,
}: ActionFunctionArgs) {
  const errors = await validateSignupRequest(request);
  if (errors) {
    return { ok: false, errors: errors };
  }
  await signupUser(request);
  return { ok: true, errors: null };
}

export function Signup({
  actionData,
}: Route.ComponentProps) {
  const navigation = useNavigation();

  const userNameError = actionData?.errors?.userName;
  const passwordError = actionData?.errors?.password;
  const isSubmitting = navigation.formAction === "/signup";

  return (
    <Form method="post">
      <p>
        <input type="text" name="username" />
        {userNameError ? <i>{userNameError}</i> : null}
      </p>

      <p>
        <input type="password" name="password" />
        {passwordError ? <i>{passwordError}</i> : null}
      </p>

      <button disabled={isSubmitting} type="submit">
        Sign Up
      </button>

      {isSubmitting ? <BusyIndicator /> : null}
    </Form>
  );
}
```

----------------------------------------

TITLE: Configure Contact Route in routes.ts (TSX)
DESCRIPTION: Adds a new route definition to the `routes.ts` configuration file. It maps the URL pattern `/contacts/:contactId` (where `:contactId` is a dynamic segment) to the `routes/contact.tsx` module using the `route` helper function from `@react-router/dev/routes`.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md#_snippet_1

LANGUAGE: tsx
CODE:
```
import type { RouteConfig } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
  route("contacts/:contactId", "routes/contact.tsx")
] satisfies RouteConfig;
```

----------------------------------------

TITLE: Using useNavigate Hook in React Router
DESCRIPTION: This snippet demonstrates the use of the useNavigate hook from React Router. It shows how to programmatically navigate the user to a new page without user interaction, in this case, logging out after inactivity.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/navigating.md#2025-04-22_snippet_9

LANGUAGE: tsx
CODE:
```
import { useNavigate } from "react-router";

export function useLogoutAfterInactivity() {
  let navigate = useNavigate();

  useFakeInactivityHook(() => {
    navigate("/logout");
  });
}
```

----------------------------------------

TITLE: Using Outlet Component for Nested Routes in React Router
DESCRIPTION: This snippet shows how to use the Outlet component from React Router to render child routes within a parent component. It demonstrates the implementation of a Dashboard component that renders its child routes.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/declarative/routing.md#2025-04-22_snippet_3

LANGUAGE: tsx
CODE:
```
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}
```

----------------------------------------

TITLE: Implementing Client Actions in React Router
DESCRIPTION: Demonstrates how to define and use a client-side action in a React Router component. The action handles form submission to update a project title.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/framework/actions.md#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
// route('/projects/:projectId', './project.tsx')
import type { Route } from "./+types/project";
import { Form } from "react-router";
import { someApi } from "./api";

export async function clientAction({
  request,
}: Route.ClientActionArgs) {
  let formData = await request.formData();
  let title = formData.get("title");
  let project = await someApi.updateProject({ title });
  return project;
}

export default function Project({
  actionData,
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Project</h1>
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </Form>
      {actionData ? (
        <p>{actionData.title} updated</p>
      ) : null}
    </div>
  );
}
```

----------------------------------------

TITLE: Basic Route with Loader and Component (TSX)
DESCRIPTION: Defines a simple route module with a `clientLoader` function to fetch data from local storage and a default component that displays the loaded data using the `useLoaderData` hook.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/how-to/fetchers.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { useLoaderData } from "react-router";

export async function clientLoader({ request }) {
  let title = localStorage.getItem("title") || "No Title";
  return { title };
}

export default function Component() {
  let data = useLoaderData();
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
```

----------------------------------------

TITLE: Using Dynamic Segments in React Router
DESCRIPTION: This snippet demonstrates how to use dynamic segments in React Router. Dynamic segments start with a colon and allow for parameterized routes. The useParams hook is used to access the dynamic segment values in the component.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/declarative/routing.md#2025-04-22_snippet_6

LANGUAGE: tsx
CODE:
```
<Route path="teams/:teamId" element={<Team />} />
```

LANGUAGE: tsx
CODE:
```
import { useParams } from "react-router";

export default function Team() {
  let params = useParams();
  // params.teamId
}
```

----------------------------------------

TITLE: Accessing Route Parameters using useParams Hook
DESCRIPTION: Shows how to access route parameters using the useParams hook from React Router. The example demonstrates accessing a city parameter and using it to fetch data.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/declarative/url-values.md#2025-04-22_snippet_1

LANGUAGE: tsx
CODE:
```
import { useParams } from "react-router";

function City() {
  let { city } = useParams();
  let data = useFakeDataLibrary(`/api/v2/cities/${city}`);
  // ...
}
```

----------------------------------------

TITLE: Processing Form Data and Redirecting in Remix Action (TSX)
DESCRIPTION: Provides a complete example of a Remix `action` function. It demonstrates retrieving form data, using `Object.fromEntries` to create an updates object, calling an asynchronous update function, and finally returning a `redirect` response to navigate the user to another page.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md#_snippet_30

LANGUAGE: tsx
CODE:
```
export async function action({
  params,
  request,
}: Route.ActionArgs) {
  invariant(params.contactId, "Missing contactId param");
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
```

----------------------------------------

TITLE: Rendering a Component in a Route
DESCRIPTION: This code snippet shows how to define a route with a specific component that will be rendered when the route is active. It also includes the definition of the component itself, which returns some JSX to be displayed.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/route-object.md#_snippet_1

LANGUAGE: tsx
CODE:
```
createBrowserRouter([
  {
    path: "/",
    Component: MyRouteComponent,
  },
]);

function MyRouteComponent() {
  return (
    <div>
      <h1>Look ma!</h1>
      <p>
        I'm still using React Router after like 10 years.
      </p>
    </div>
  );
}
```

----------------------------------------

TITLE: Basic Link Usage
DESCRIPTION: Demonstrates the basic usage of the `<Link>` component to navigate to a specified route.  It shows how to define the destination route using the `to` prop, both as a string and as an object with pathname, search, and hash properties.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/components/Link.md#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Link } from "react-router";

<Link to="/dashboard">Dashboard</Link>;

<Link
  to={{
    pathname: "/some/path",
    search: "?query=string",
    hash: "#hash",
  }}
/>;
```

----------------------------------------

TITLE: Accessing FormData in Remix Action (TSX)
DESCRIPTION: Demonstrates how to retrieve form data within a Remix `action` function using `request.formData()`. It shows how to access individual field values by their name using `formData.get('fieldName')`.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md#_snippet_28

LANGUAGE: tsx
CODE:
```
export const action = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const firstName = formData.get("first");
  const lastName = formData.get("last");
  // ...
};
```

----------------------------------------

TITLE: Implementing an Error Boundary with useRouteError in React Router
DESCRIPTION: Example of creating an Error Boundary component that uses the useRouteError hook to access and display error messages thrown during action functions, loader functions, or component renders.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useRouteError.md#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
export function ErrorBoundary() {
  const error = useRouteError();
  return <div>{error.message}</div>;
}
```

----------------------------------------

TITLE: Linking Between Routes in React Router
DESCRIPTION: This snippet shows how to create links between routes using the Link and NavLink components from React Router. It demonstrates creating a navigation header with active state styling for the home link.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/declarative/routing.md#2025-04-22_snippet_7

LANGUAGE: tsx
CODE:
```
import { NavLink, Link } from "react-router";

function Header() {
  return (
    <nav>
      {/* NavLink makes it easy to show active states */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Home
      </NavLink>

      <Link to="/concerts/salt-lake-city">Concerts</Link>
    </nav>
  );
}
```

----------------------------------------

TITLE: Updating Search Params with useSearchParams Hook in React Router
DESCRIPTION: This snippet shows how to update search parameters using the useSearchParams hook. It demonstrates setting new values, deleting parameters, and replacing the entire search string.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/how-to/search-params.md#2025-04-22_snippet_1

LANGUAGE: jsx
CODE:
```
import * as React from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  function handleSubmit(event) {
    event.preventDefault();
    // The serialize function is some custom logic
    let params = serialize(event.target);
    setSearchParams(params);
  }
  return <form onSubmit={handleSubmit}>...<!-- your form elements --></form>;
}
```

----------------------------------------

TITLE: Accessing Dynamic Route Params in Component (TSX)
DESCRIPTION: Imports and uses the `useParams` hook from `react-router` within a React component. This hook provides access to the dynamic segment values parsed from the URL, allowing components to use them for rendering or logic.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/routing.md#_snippet_10

LANGUAGE: tsx
CODE:
```
import { useParams } from "react-router";

function Team() {
  // params are available in components through useParams
  let params = useParams();
  // ...
}
```

----------------------------------------

TITLE: Creating a Route `action` for `useFetcher` Submissions (TSX)
DESCRIPTION: Defines an asynchronous `action` function for a route in Remix/React Router. This function receives form data submitted by a `<fetcher.Form>` or standard `<Form>`, processes it (e.g., updates data), and returns a result. It demonstrates accessing form data and calling a data update utility.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/tutorials/address-book.md#_snippet_49

LANGUAGE: tsx
CODE:
```
// existing imports
import { getContact, updateContact } from "../data";
// existing imports

export async function action({
  params,
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

// existing code
```

----------------------------------------

TITLE: Using useNavigate() Hook in React Router
DESCRIPTION: This snippet demonstrates the usage of the useNavigate() hook for imperative navigation after form submission in React Router. It's typically used in event handlers or effects.
SOURCE: https://github.com/remix-run/react-router/blob/main/examples/auth/README.md#2025-04-22_snippet_0

LANGUAGE: JavaScript
CODE:
```
const navigate = useNavigate();
// ...
navigate('/dashboard');
```

----------------------------------------

TITLE: Creating Route with Loader in React Router
DESCRIPTION: This code demonstrates how to create a route with a loader function using createBrowserRouter in React Router. The loader function fetches data and returns it as an object. The Component property specifies the React component to render for this route.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/data-loading.md#_snippet_0

LANGUAGE: tsx
CODE:
```
createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      // return data from here
      return { records: await getSomeRecords() };
    },
    Component: MyRoute,
  },
]);
```

----------------------------------------

TITLE: Loading Data with Route Loader
DESCRIPTION: This code snippet demonstrates how to use a route loader to fetch data before rendering a component. It uses useLoaderData to access the data within the component.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/route-object.md#_snippet_2

LANGUAGE: tsx
CODE:
```
import {
  useLoaderData,
  createBrowserRouter,
} from "react-router";

createBrowserRouter([
  {
    path: "/",
    loader: loader,
    Component: MyRoute,
  },
]);

async function loader({ params }) {
  return { message: "Hello, world!" };
}

function MyRoute() {
  let data = useLoaderData();
  return <h1>{data.message}</h1>;
}
```

----------------------------------------

TITLE: Using useActionData Hook with Form Submission in React Router
DESCRIPTION: This snippet demonstrates how to use the useActionData hook in conjunction with a Form component to handle form submissions and display the returned action data. It includes an action function that processes the form data and a component that renders the form and displays the result.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/hooks/useActionData.md#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import { Form, useActionData } from "react-router";

export async function action({ request }) {
  const body = await request.formData();
  const name = body.get("visitorsName");
  return { message: `Hello, ${name}` };
}

export default function Invoices() {
  const data = useActionData();
  return (
    <Form method="post">
      <input type="text" name="visitorsName" />
      {data ? data.message : "Waiting..."}
    </Form>
  );
}
```

----------------------------------------

TITLE: Configuring Nested Routes with Children (TS)
DESCRIPTION: Demonstrates how to create nested routes by defining a parent route with a `children` array. This configuration creates both `/dashboard` and `/dashboard/settings` paths.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/routing.md#_snippet_3

LANGUAGE: ts
CODE:
```
createBrowserRouter([
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
      { path: "settings", Component: Settings },
    ],
  },
]);
```

----------------------------------------

TITLE: Basic NavLink Import and Usage
DESCRIPTION: Shows how to import and use the NavLink component in a React Router application.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/api/components/NavLink.md#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
import { NavLink } from "react-router";
<NavLink to="/message" />;
```

----------------------------------------

TITLE: Implementing Add to Cart Functionality with Progressive Enhancement in React
DESCRIPTION: This snippet demonstrates a simple Add to Cart button implementation using React Router's Form component. It works without JavaScript and can be progressively enhanced with client-side behavior.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/explanation/progressive-enhancement.md#2025-04-22_snippet_0

LANGUAGE: tsx
CODE:
```
export function AddToCart({ id }) {
  return (
    <Form method="post" action="/add-to-cart">
      <input type="hidden" name="id" value={id} />
      <button type="submit">Add To Cart</button>
    </Form>
  );
}
```

----------------------------------------

TITLE: Calling Actions with Form in React Router
DESCRIPTION: Shows how to use the Form component from react-router to submit data to an action. This method causes a navigation and adds a new entry to the browser history.
SOURCE: https://github.com/remix-run/react-router/blob/main/docs/start/data/actions.md#2025-04-22_snippet_1

LANGUAGE: tsx
CODE:
```
import { Form } from "react-router";

function SomeComponent() {
  return (
    <Form action="/projects/123" method="post">
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```
