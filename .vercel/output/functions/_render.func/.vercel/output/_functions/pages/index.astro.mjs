/* empty css                                */
import { g as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, h as renderSlot, a as renderComponent } from '../chunks/astro/server_DCNCIf8N.mjs';
import { a as $$Icon, $ as $$Layout } from '../chunks/Layout_DER3NCUb.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BOIh38pZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${className}`, "class")}> <div class="px-6 md:px-16"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/maticanzani/Documents/Personal/vale/adesso/src/components/Container.astro", void 0);

const Vale = new Proxy({"src":"/_astro/vale.wc-rVYP6.jpeg","width":857,"height":1014,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maticanzani/Documents/Personal/vale/adesso/src/images/vale.jpeg";
							}
							
							return target[name];
						}
					});

const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "w-full bg-quaternary" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-start justify-around gap-8 flex-col pt-12"> <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:w-9/12 mx-auto"> <div class="flex flex-col justify-center items-center md:text-lg px-2"> <h3 class="text-5xl md:text-6xl text-start font-semibold py-8 w-full" id="about-me">
About Me
</h3> <div class="flex flex-col gap-4" id="about-text"> <p>
As a certified mindfulness coach aligned and trained with the ICF
            Core Competencies, I specialize in helping individuals and teams
            overcome stress, improve focus, and cultivate greater resilience.
</p> <p>
Through personalized coaching sessions, I guide clients to develop
            practical mindfulness techniques and cultivate a positive mindset
            that empowers them to achieve their goals.
</p> </div> </div> ${renderComponent($$result2, "Image", $$Image, { "src": Vale, "alt": "Vale Borzori", "class": "max-w-md rounded-xl shadow-md w-full", "id": "Vale" })} </div> </div> <div class="flex flex-col justify-center items-center gap-10 bg-secondary border-none rounded-xl px-8 py-10 w-full lg:w-8/12 mx-auto text-center my-20 shadow-md"> <h4 class="text-2xl md:text-4xl font-extrabold text-center">
Discover Your Path to Unbound Potential
</h4> <div class="space-y-0"> <p class="md:text-lg text-pretty">
Are you feeling stuck, unsure of your direction, or limited by negative
        thoughts?
</p> <p class="md:text-lg text-pretty">
As a dedicated life coach, I specialize in guiding individuals to unlock
        their full potential through mindset transformation, mindfulness
        techniques, and a positive focus.
</p> </div> </div> <div class="flex justify-center mx-auto w-full py-14"> <spam class="text-xl italic font-semibold font-kumbh leading-snug">
Let's break free from limitations and discover the boundless possibilities
      that await you.
</spam> </div> ` })} `;
}, "/Users/maticanzani/Documents/Personal/vale/adesso/src/components/AboutMe.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="card" class="bg-quaternary border-none rounded-xl p-8 sm:min-h-56 sm:max-w-[19rem] shrink-0 shadow-md flex justify-center md:justify-start items-start flex-col"> <span class="text-2xl font-noto font-semibold">${title}</span> <p class="pt-4 md:text-lg"> ${body} </p> </div>`;
}, "/Users/maticanzani/Documents/Personal/vale/adesso/src/components/Card.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const cardsData = [
    {
      title: "Professional growth:",
      body: "Coaching equips people to navigate challenges and roadblocks they may face."
    },
    {
      title: "Professional growth:",
      body: "A dedicated Coach holds people accountable for attaining goals on their path to growth."
    },
    {
      title: "Achieving potential:",
      body: "People are empowered to reach their goal milestones and inspired to go after what\u2019s next."
    },
    {
      title: "Sustained well-being:",
      body: "When people feel at their best, they perform at their best in all they do."
    }
  ];
  const howWorksData = [
    {
      icon: "notebook",
      alt: "coaching sessions",
      body: "Your coaching sessions will be thoughtfully designed to meet your personal, professional, and developmental goals, ensuring a balanced and tailored approach to your unique needs."
    },
    {
      icon: "users",
      alt: "one-on-one sessions",
      body: "Engage in one-on-one sessions to start a self discovery journey. Your progress will be tracked with regular assessments, enjoying the flexibility you require by choosing your own schedule."
    },
    {
      icon: "messages",
      alt: "holistic approach",
      body: "Experience a holistic approach to growth, focusing on both achieving goals and promoting overall well-being, empowering you to pursue new challenges and opportunities."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "w-full" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-start justify-around gap-8 flex-col pt-12"> <h3 class="text-4xl md:text-5xl text-start font-semibold" id="services">
What is coaching?
</h3> <div class="flex flex-col gap-2 md:text-lg px-2"> <p>
Coaching is when an individual works with a trained professional in a
        process of self-discovery and self- awareness.
</p><p>
Working together, a Coach helps an individual identify strengths and
        develop goals.
</p><p>
Together, a coach and coachee practice and build the skills and
        behaviors required to make progress toward their goals.
</p> </div> </div> <div class="flex justify-around items-center gap-8 flex-col px-0 md:p-4 mx-auto w-full mt-12" id="coaching"> <div class="flex justify-around items-start md:items-center flex-col md:p-4 mx-auto w-full mt-12"> <h3 class="text-3xl md:text-[2.7rem] font-semibold mb-12">
Why work with a Coach
</h3> <div class="flex justify-center items-center gap-8 flex-col md:flex-row md:w-9/12 flex-wrap p-4 xl:w-full xl:flex-nowrap mx-auto"> ${cardsData.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": card.title, "body": card.body })}`)} </div> </div> </div> ` })} ${renderComponent($$result, "Container", $$Container, { "class": "w-full bg-quaternary" }, { "default": ($$result2) => renderTemplate` <div class="flex items-start justify-center mx-auto gap-8 flex-col py-12"> <h3 class="text-4xl md:text-5xl font-semibold" id="how-it-work">
How it works
</h3> <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap md:flex-row justify-around px-2 md:text-lg py-12 w-full text-center"> ${howWorksData.map((data) => renderTemplate`<div class="border-b-2 border-primary pb-14 max-w-sm flex flex-col justify-center items-center w-full"> ${renderComponent($$result2, "Icon", $$Icon, { "name": data.icon, "height": 72, "width": 72, "class": "m-8 text-tertiary", "id": data.icon })} <p>${data.body}</p> </div>`)} </div> </div> ` })} `;
}, "/Users/maticanzani/Documents/Personal/vale/adesso/src/components/Services.astro", void 0);

const $$Subscribe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "w-full bg-quaternary" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row items-center justify-start mx-auto md:my-12 md:p-12"> <div class="flex flex-col items-center justify-center text-center w-11/12 md:justify-start gap-4"> <h3 class="text-2xl font-semibold font-kumbh">
Get notified when I publish new articles
</h3> <p>Stay up to date with the latest news, announcements, and articles.</p> </div> <form action="/subscribe" method="post"> <div class="flex flex-col md:flex-row justify-center items-center gap-4"> <input type="email" name="email" placeholder="Enter your email" required class="px-4 py-2 rounded-lg"> <button class="bg-tertiary text-white rounded-lg font-light px-8 py-2 text-sm w-auto h-auto" type="submit">
Subscribe
</button> </div> </form> </div> ` })}`;
}, "/Users/maticanzani/Documents/Personal/vale/adesso/src/components/Subscribe.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Adesso Coaching" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center flex-col h-screen"> <h1 class="font-noto font-semibold text-7xl md:text-[10rem] leading-none">
Adesso
</h1> <h2 class="font-noto md:text-[8rem] text-6xl leading-none">Coaching</h2> </div> ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Services", $$Services, {})} <div class="md:w-9/12 bg-quaternary flex flex-col justify-center items-center mx-auto p-8 rounded-3xl gap-10 my-10"> <div class="max-w-xl"> <h4 class="text-4xl py-4 font-semibold">Get online session.</h4> <div class="space-y-2"> <p>
Together, we'll embark on a journey of self-discovery, exploring your
          unique strengths, values, and aspirations.
</p> <p>
Whether you're seeking greater career satisfaction, improved
          relationships, or personal growth, I'm here to support you every step
          of the way.
</p> </div> </div> <button class="bg-tertiary text-white rounded-lg font-light px-8 py-2 text-sm w-auto">
Book now
</button> </div> ${renderComponent($$result2, "Subscribe", $$Subscribe, {})} ` })} `;
}, "/Users/maticanzani/Documents/Personal/vale/adesso/src/pages/index.astro", void 0);

const $$file = "/Users/maticanzani/Documents/Personal/vale/adesso/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
