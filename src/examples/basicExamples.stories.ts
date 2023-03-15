import vueRouter from "../withVueRouter";

import routerViewWrapper from "./components/routerViewWrapper.vue";

export default {
  title: "Basic Router View Wrapper",
  component: routerViewWrapper,
};

export const Default = {
  render: () => ({
    components: { RouterViewWrapper: routerViewWrapper },
    template: `
      <RouterViewWrapper>
        <router-view />
      </RouterViewWrapper>
    `,
  }),

  decorators: [vueRouter()],
};

export const WithTransition = {
  render: () => ({
    components: { RouterViewWrapper: routerViewWrapper },
    template: `
      <RouterViewWrapper title="Storybook Vue 3 Router with Transition">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </RouterViewWrapper>
    `,
  }),

  decorators: [vueRouter()],
};

export const WithInitialRoute = {
  render: () => ({
    components: { RouterViewWrapper: routerViewWrapper },
    template: `
      <RouterViewWrapper title="Storybook Vue 3 Router with Initial Route Option">
        <router-view></router-view>
      </RouterViewWrapper>
    `,
  }),

  decorators: [
    vueRouter(undefined, {
      initialRoute: "/about",
    }),
  ],
};

export const WithVueRouteOptions = {
  render: () => ({
    components: { RouterViewWrapper: routerViewWrapper },
    template: `
      <RouterViewWrapper title="Storybook Vue 3 Router with Vue Router Options">
        <router-view></router-view>
      </RouterViewWrapper>
    `,
  }),

  decorators: [
    vueRouter(undefined, {
      initialRoute: "/about",
      vueRouterOptions: {
        linkActiveClass: "activeLink",
      },
    }),
  ],
};
