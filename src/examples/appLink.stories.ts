import vueRouter from "../withVueRouter";

import appLink from "./components/appLink.vue";
import routerViewWrapper from "./components/routerViewWrapper.vue";

export default {
  title: "Router Link",
  component: routerViewWrapper,
};

export const Default = {
  render: () => ({
    components: { appLink: appLink, RouterViewWrapper: routerViewWrapper },
    template: `
      test
    <RouterViewWrapper title="Storybook Vue 3 Router custom appLink component">
      <div>
        <div style="display: flex; gap: 1em">
          <appLink to="/">appLink: Home</appLink>
          <appLink to="/about/">appLink: About</appLink>
          <appLink to="https://www.google.com">appLink: External Link</appLink>
        </div>
        <router-view />
      </div>
    </RouterViewWrapper>
    `,
  }),

  decorators: [vueRouter()],
};
