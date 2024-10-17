/* empty css                                */
import { _ as _page$1 } from '../chunks/post-1_CV5Tr6Ge.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DCNCIf8N.mjs';
import { $ as $$Layout } from '../chunks/Layout_DER3NCUb.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values(/* #__PURE__ */ Object.assign({"./posts/post-1.md": _page$1}));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Articles" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1> My Articles</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <ul class="text-slate-50"> ${allPosts.map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></li>`)} </ul> ` })}`;
}, "/Users/maticanzani/Documents/Personal/vale/adesso/src/pages/blog.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/vale/adesso/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
