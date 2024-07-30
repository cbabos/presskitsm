import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>You're looking for some information but apperantly it's new address is somewhere in the </p>
      <p>
        <i>{ isRouteErrorResponse(error) && (error.statusText || error.data?.message || 'Unknown error.') }</i>
      </p>
    </div>
  );
}
