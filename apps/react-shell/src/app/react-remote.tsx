import React, { Suspense } from 'react';

const RemoteComponent = React.lazy(() => import('react-remote/App'));

export default function ReactRemote() {
  return (
    <Suspense fallback="Loading...">
      <RemoteComponent />
    </Suspense>
  );
}
