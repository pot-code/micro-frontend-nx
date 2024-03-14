import { useEffect, useRef } from 'react';
import { createApp } from 'vue';

export default function VueRemote() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ignored = false;
    import('vue-remote/App').then(({ default: App }) => {
      if (ignored) return;

      if (containerRef.current) {
        const app = createApp(App);
        app.mount(containerRef.current);
      }
    });

    return () => {
      ignored = true;
    };
  });

  return <div ref={containerRef} />;
}
