// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Suspense } from "solid-js";
import { TurboContext } from "turbo-solid";

export default function Root() {
  async function fetcher(key, { signal }) {
    console.log("Fetching", key);
    const response = await fetch(key, { signal });
    if (!response.ok) throw "Response error: not 2XX.";
    return await response.json();
  }

  const turboSettings = {
    fetcher,
    refetchOnFocus: false,
    refetchOnConnect: false,
  };

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorBoundary>
          <Suspense>
            <TurboContext.Provider value={turboSettings}>
              <Routes />
            </TurboContext.Provider>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
