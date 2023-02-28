import NextLink from "next/link";
import { ComponentProps, FC, memo } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

/**
 * Next.jsのLinkコンポーネントのラッパーコンポーネント
 * Storybookでの切り替えはv7でいらなくなる予定
 * https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/#routing
 */
const Link: FC<LinkProps> = memo(props => {
  const { children, className, href, ...attr } = props;

  if (process.env.STORYBOOK) {
    return (
      <NextLink href={href} legacyBehavior>
        <a className={className} {...attr}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <NextLink href={href} className={className} {...attr}>
      {children}
    </NextLink>
  );
});

export default Link;
