import { useEffect, useRef } from 'react';
import { createApp, defineAsyncComponent } from 'vue';

const component = defineAsyncComponent(() => import('vue-remote/App'));

export default function VueRemote() {
  const containerRef = useRef(null);

  useEffect(() => {
    const app = createApp(component);
    if (containerRef.current) {
      app.mount(containerRef.current);
    }

    return () => {
      app.unmount();
    };
  });

  return <div ref={containerRef} />;
}
