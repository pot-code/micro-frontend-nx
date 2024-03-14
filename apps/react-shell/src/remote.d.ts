declare module 'vue-remote/App' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'react-remote/App' {
  export default function App(): JSX.Element;
}
