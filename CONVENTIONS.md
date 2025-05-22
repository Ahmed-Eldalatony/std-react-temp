# 📁 React Project Conventions

## 1. 📂 Folder Structure

Organize your project by features to enhance scalability and maintainability. Each feature encapsulates its components, state management, and related logic.

```
src/
├── app/                 # Application-level configurations
│   ├── App.tsx
│   └── index.tsx
├── features/            # Feature-specific modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── services/
│   │   └── index.ts
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       ├── store/
│       ├── services/
│       └── index.ts
├── shared/              # Reusable components and utilities
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── styles/
│   └── utils/
├── routes/              # Route definitions
│   ├── _auth.login.tsx
│   ├── _auth.register.tsx
│   ├── dashboard.tsx
│   └── index.tsx
├── assets/              # Static assets like images and fonts
├── styles/              # Global styles and themes
└── store/               # Global state management (if any)
    ├── index.ts
```

*Source: [Structuring Large Enterprise React Applications](https://medium.com/@viktor.tomilin/structuring-large-enterprise-react-applications-best-practices-c9a2e4e2c5b8)*

## 2. 🧩 Feature Modules

Each feature module should be self-contained, including its components, hooks,  stores, services, and utilities.

Example: `features/auth/`

```
auth/
├── components/
│   ├── LoginForm.tsx
│   └── RegisterForm.tsx
├── hooks/
│   └── useAuth.ts
├── store/
│   └── authStore.ts
├── services/
│   └── authService.ts
└── index.ts
```

*Source: [Building Scalable React Applications with Feature-Based Architecture](https://medium.com/@harutyunabgaryann/building-scalable-react-applications-with-feature-based-architecture-41219d5549df)*

## 3. 🔗 Routing with React Router

Utilize file-based routing conventions inspired by Remix for clarity and scalability.

* **Pathless Routes**: Use a leading underscore (`_`) to denote layout routes without adding to the URL path.

  ```
  routes/
  ├── _auth.login.tsx
  ├── _auth.register.tsx
  ├── dashboard.tsx
  └── index.tsx
  ```

  * `/login` → `routes/_auth.login.tsx` (uses `_auth.tsx` layout)
  * `/register` → `routes/_auth.register.tsx` (uses `_auth.tsx` layout)


## 4. 🧠 State Management with useContext

Implement state management using  within each feature module.

Example: `features/auth/store/authStore.ts`


## 5. 🎨 Styling with Tailwind CSS v4 and ShadCN

* **Global Styles**: Configure Tailwind CSS v4 in the `styles/` directory.
* **Component Styling**: Utilize ShadCN UI components for consistent design and accessibility.
* **Utility Classes**: Apply Tailwind utility classes directly in JSX for rapid styling.

*Source: [A Comprehensive Guide to Building Using React, ShadCN, React Hook Form, Tailwind CSS, and](https://medium.com/@hamzamurtaza/a-comprehensive-guide-to-building-using-react-shadcn-react-hook-form-tailwind-css-and-zustand-62e422f537f8)*

## 6. 🧪 Testing

Currently, no testing framework is integrated. Consider adding testing tools like Jest or React Testing Library in the future to ensure code reliability.

## 7. 📦 Shared Components and Utilities

Place reusable components, hooks, services, and utilities in the `shared/` directory to promote reusability and avoid duplication.

Example: `shared/components/Button.tsx`

```tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;
```

*Source: [Best Practices for Structuring Your React Projects](https://bestpractices.net/best-practices-for-structuring-your-react-projects/)*

## 8. 🧹 Naming Conventions

* **Components**: PascalCase (e.g., `LoginForm.tsx`)
* **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`)
* **Stores**: camelCase with `Store` suffix (e.g., `authStore.ts`)
* **Services**: camelCase with `Service` suffix (e.g., `authService.ts`)
* **Utilities**: camelCase (e.g., `validators.ts`)

*Source: [Mastering React Folder Structure for Scalable Apps](https://infinitejs.com/posts/mastering-react-folder-structure/)*

## 9. 🚀 Performance Optimization

* **Code Splitting**: Use React's `lazy` and `Suspense` for lazy loading components.

  ```tsx
  import React, { lazy, Suspense } from 'react';

  const Dashboard = lazy(() => import('./features/dashboard/Dashboard'));

  const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
  ```

* **Memoization**: Use `React.memo` and `useMemo` to prevent unnecessary re-renders.

*Source: [Structure React Projects for Scale & Maintenance](https://tillitsdone.com/blogs/react-project-structure-guide/)*

## 10. 🛠 Tooling

* **Formatting and Linting**: Use Biome for consistent code formatting and linting.

  * Implement request and response interceptors for logging and error handling.

---
