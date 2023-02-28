import "@/styles/custom-props.scss";
import { Parameters } from "@storybook/addons";
import { withScreenshot } from "storycap";
import { RouterContext } from "next/dist/shared/lib/router-context";

export const decorators: unknown[] = [withScreenshot];

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      old_se: {
        name: "iPhoneSE 1st gen",
        styles: {
          width: "320px",
          height: "568px",
        },
      },
      se: {
        name: "iPhoneSE 3rd gen",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      xr: {
        name: "iPhoneXR",
        styles: {
          width: "414px",
          height: "896px",
        },
      },
      ipad: {
        name: "iPad",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      ipad_pro: {
        name: "iPad Pro",
        styles: {
          width: "1024px",
          height: "1366px",
        },
      },
      screen: {
        name: "Screen",
        styles: {
          width: "1280px",
          height: "720px",
        },
      },
      wide_screen: {
        name: "Wide Screen",
        styles: {
          width: "1600px",
          height: "900px",
        },
      },
      fullhd: {
        name: "FullHD",
        styles: {
          width: "1920px",
          height: "1080px",
        },
      },
    },
  },
  screenshot: {
    skip: true,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
