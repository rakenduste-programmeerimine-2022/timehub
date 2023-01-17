import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred, so... Welcome to the error page, where errors reside.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}