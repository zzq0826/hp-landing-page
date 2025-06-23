import { LoadingOrError } from "components/LoadingOrError";
import { Home } from "pages/home";
import { Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Route, Routes } from "react-router";

function renderError({ error }: FallbackProps) {
  return <LoadingOrError error={error} />;
}

export function App() {
  return (
    <ErrorBoundary fallbackRender={renderError}>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
