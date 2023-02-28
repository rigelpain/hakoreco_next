---
to: src/pages/<%= path %>.tsx
---
<% if (isSsg) { -%>import { GetStaticPaths, GetStaticPropsResult } from "next";
<% } -%>
<% if (hasLayout) { -%>import { ReactElement } from "react";
<% } -%>
<% if (isSsg || hasLayout) { -%>

<% } -%>
<% if (hasMeta) { -%>import Head from "@/components/lib/Head";
<% } -%>
import { NextPageWithLayout } from "@/types/next";

<% if (isSsg) { -%>
type <%= pageName %>PageProps = object;
<% } -%>

const <%= pageName %>: NextPageWithLayout<% if (isSsg) { -%><<%= pageName %>PageProps><% } -%> = (<% if (isSsg) { -%>props<% } -%>) => {
  return (
    <>
<% if (hasMeta) { -%>      <Head>
        <title><%= path %> page</title>
      </Head>
<% } -%>
    </>
  );
};

<% if (hasLayout) { -%>
<%= pageName %>.getLayout = (page: ReactElement) => {
  return <>{page}</>; // Layoutをインポートすること
};

<% } -%>
<% if (isSsg) { -%>
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps = async (): Promise<GetStaticPropsResult<<%= pageName %>PageProps>> => {
  return {
    props: {},
  }
}

<% } -%>
export default <%= pageName %>;
