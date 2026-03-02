import type { DefineComponent, SlotsType } from "vue";
type IslandComponent<T> = DefineComponent<
  {},
  { refresh: () => Promise<void> },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  SlotsType<{ fallback: { error: unknown } }>
> &
  T;

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true;
  hydrateOnIdle?: number | true;
  hydrateOnInteraction?:
    | keyof HTMLElementEventMap
    | Array<keyof HTMLElementEventMap>
    | true;
  hydrateOnMediaQuery?: string;
  hydrateAfter?: number;
  hydrateWhen?: boolean;
  hydrateNever?: true;
};
type LazyComponent<T> = DefineComponent<
  HydrationStrategies,
  {},
  {},
  {},
  {},
  {},
  {},
  { hydrated: () => void }
> &
  T;

export const BackToTop: (typeof import("../app/components/BackToTop.vue"))["default"];
export const Offcanvus: (typeof import("../app/components/Offcanvus.vue"))["default"];
export const Preloader: (typeof import("../app/components/Preloader.vue"))["default"];
export const ScrollCounter: (typeof import("../app/components/ScrollCounter.vue"))["default"];
export const SearchPopup: (typeof import("../app/components/SearchPopup.vue"))["default"];
export const Footer: (typeof import("../app/components/footer/Footer.vue"))["default"];
export const FooterOne: (typeof import("../app/components/footer/FooterOne.vue"))["default"];
export const FooterThree: (typeof import("../app/components/footer/FooterThree.vue"))["default"];
export const FooterTwo: (typeof import("../app/components/footer/FooterTwo.vue"))["default"];
export const Header: (typeof import("../app/components/header/Header.vue"))["default"];
export const HeaderOne: (typeof import("../app/components/header/HeaderOne.vue"))["default"];
export const HeaderNavMenu: (typeof import("../app/components/header/NavMenu.vue"))["default"];
export const SectionsAboutSectionOne: (typeof import("../app/components/sections/AboutSectionOne.vue"))["default"];
export const SectionsAboutSectionThree: (typeof import("../app/components/sections/AboutSectionThree.vue"))["default"];
export const SectionsAboutSectionTwo: (typeof import("../app/components/sections/AboutSectionTwo.vue"))["default"];
export const SectionsBlogDetailsSection: (typeof import("../app/components/sections/BlogDetailsSection.vue"))["default"];
export const SectionsBlogGridSection: (typeof import("../app/components/sections/BlogGridSection.vue"))["default"];
export const SectionsBlogListSection: (typeof import("../app/components/sections/BlogListSection.vue"))["default"];
export const SectionsBlogSectionOne: (typeof import("../app/components/sections/BlogSectionOne.vue"))["default"];
export const SectionsBlogSectionThree: (typeof import("../app/components/sections/BlogSectionThree.vue"))["default"];
export const SectionsBlogSectionTwo: (typeof import("../app/components/sections/BlogSectionTwo.vue"))["default"];
export const SectionsBrandSectionOne: (typeof import("../app/components/sections/BrandSectionOne.vue"))["default"];
export const SectionsBreadcrumb: (typeof import("../app/components/sections/Breadcrumb.vue"))["default"];
export const SectionsContactSectionOne: (typeof import("../app/components/sections/ContactSectionOne.vue"))["default"];
export const SectionsCounterSectionOne: (typeof import("../app/components/sections/CounterSectionOne.vue"))["default"];
export const SectionsCtaSectionOne: (typeof import("../app/components/sections/CtaSectionOne.vue"))["default"];
export const SectionsCtaSectionThree: (typeof import("../app/components/sections/CtaSectionThree.vue"))["default"];
export const SectionsCtaSectionTwo: (typeof import("../app/components/sections/CtaSectionTwo.vue"))["default"];
export const SectionsCustomerSupportSectionOne: (typeof import("../app/components/sections/CustomerSupportSectionOne.vue"))["default"];
export const SectionsFaqSectionOne: (typeof import("../app/components/sections/FaqSectionOne.vue"))["default"];
export const SectionsHeroSectionOne: (typeof import("../app/components/sections/HeroSectionOne.vue"))["default"];
export const SectionsHeroSectionThree: (typeof import("../app/components/sections/HeroSectionThree.vue"))["default"];
export const SectionsHeroSectionTwo: (typeof import("../app/components/sections/HeroSectionTwo.vue"))["default"];
export const SectionsPricingSectionOne: (typeof import("../app/components/sections/PricingSectionOne.vue"))["default"];
export const SectionsPricingSectionThree: (typeof import("../app/components/sections/PricingSectionThree.vue"))["default"];
export const SectionsPricingSectionTwo: (typeof import("../app/components/sections/PricingSectionTwo.vue"))["default"];
export const SectionsProcessSectionOne: (typeof import("../app/components/sections/ProcessSectionOne.vue"))["default"];
export const SectionsProcessSectionThree: (typeof import("../app/components/sections/ProcessSectionThree.vue"))["default"];
export const SectionsProjectDetailsSection: (typeof import("../app/components/sections/ProjectDetailsSection.vue"))["default"];
export const SectionsProjectSectionOne: (typeof import("../app/components/sections/ProjectSectionOne.vue"))["default"];
export const SectionsProjectSectionThree: (typeof import("../app/components/sections/ProjectSectionThree.vue"))["default"];
export const SectionsProjectSectionTwo: (typeof import("../app/components/sections/ProjectSectionTwo.vue"))["default"];
export const SectionsServiceDetailsSectionOne: (typeof import("../app/components/sections/ServiceDetailsSectionOne.vue"))["default"];
export const SectionsServiceSectionFour: (typeof import("../app/components/sections/ServiceSectionFour.vue"))["default"];
export const SectionsServiceSectionOne: (typeof import("../app/components/sections/ServiceSectionOne.vue"))["default"];
export const SectionsServiceSectionThree: (typeof import("../app/components/sections/ServiceSectionThree.vue"))["default"];
export const SectionsServiceSectionTwo: (typeof import("../app/components/sections/ServiceSectionTwo.vue"))["default"];
export const SectionsTeamDetailsSection: (typeof import("../app/components/sections/TeamDetailsSection.vue"))["default"];
export const SectionsTeamOneSlider: (typeof import("../app/components/sections/TeamOneSlider.vue"))["default"];
export const SectionsTeamSectionOne: (typeof import("../app/components/sections/TeamSectionOne.vue"))["default"];
export const SectionsTeamSectionThree: (typeof import("../app/components/sections/TeamSectionThree.vue"))["default"];
export const SectionsTeamSectionTwo: (typeof import("../app/components/sections/TeamSectionTwo.vue"))["default"];
export const SectionsTestimonialSectionOne: (typeof import("../app/components/sections/TestimonialSectionOne.vue"))["default"];
export const SectionsTestimonialSectionThree: (typeof import("../app/components/sections/TestimonialSectionThree.vue"))["default"];
export const SectionsTestimonialSectionTwo: (typeof import("../app/components/sections/TestimonialSectionTwo.vue"))["default"];
export const SectionsTestimonialSliderOne: (typeof import("../app/components/sections/TestimonialSliderOne.vue"))["default"];
export const SectionsTestimonialSliderThree: (typeof import("../app/components/sections/TestimonialSliderThree.vue"))["default"];
export const SectionsTestimonialSliderTwo: (typeof import("../app/components/sections/TestimonialSliderTwo.vue"))["default"];
export const SectionsWhyChooseSectionOne: (typeof import("../app/components/sections/WhyChooseSectionOne.vue"))["default"];
export const SectionsWhyChooseTwo: (typeof import("../app/components/sections/WhyChooseTwo.vue"))["default"];
export const NuxtWelcome: (typeof import("../node_modules/nuxt/dist/app/components/welcome.vue"))["default"];
export const NuxtLayout: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout"))["default"];
export const NuxtErrorBoundary: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue"))["default"];
export const ClientOnly: (typeof import("../node_modules/nuxt/dist/app/components/client-only"))["default"];
export const DevOnly: (typeof import("../node_modules/nuxt/dist/app/components/dev-only"))["default"];
export const ServerPlaceholder: (typeof import("../node_modules/nuxt/dist/app/components/server-placeholder"))["default"];
export const NuxtLink: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-link"))["default"];
export const NuxtLoadingIndicator: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator"))["default"];
export const NuxtTime: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue"))["default"];
export const NuxtRouteAnnouncer: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer"))["default"];
export const NuxtImg: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs"))["NuxtImg"];
export const NuxtPicture: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs"))["NuxtPicture"];
export const NuxtPage: (typeof import("../node_modules/nuxt/dist/pages/runtime/page"))["default"];
export const NoScript: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["NoScript"];
export const Link: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Link"];
export const Base: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Base"];
export const Title: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Title"];
export const Meta: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Meta"];
export const Style: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Style"];
export const Head: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Head"];
export const Html: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Html"];
export const Body: (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Body"];
export const NuxtIsland: (typeof import("../node_modules/nuxt/dist/app/components/nuxt-island"))["default"];
export const LazyBackToTop: LazyComponent<
  (typeof import("../app/components/BackToTop.vue"))["default"]
>;
export const LazyOffcanvus: LazyComponent<
  (typeof import("../app/components/Offcanvus.vue"))["default"]
>;
export const LazyPreloader: LazyComponent<
  (typeof import("../app/components/Preloader.vue"))["default"]
>;
export const LazyScrollCounter: LazyComponent<
  (typeof import("../app/components/ScrollCounter.vue"))["default"]
>;
export const LazySearchPopup: LazyComponent<
  (typeof import("../app/components/SearchPopup.vue"))["default"]
>;
export const LazyFooter: LazyComponent<
  (typeof import("../app/components/footer/Footer.vue"))["default"]
>;
export const LazyFooterOne: LazyComponent<
  (typeof import("../app/components/footer/FooterOne.vue"))["default"]
>;
export const LazyFooterThree: LazyComponent<
  (typeof import("../app/components/footer/FooterThree.vue"))["default"]
>;
export const LazyFooterTwo: LazyComponent<
  (typeof import("../app/components/footer/FooterTwo.vue"))["default"]
>;
export const LazyHeader: LazyComponent<
  (typeof import("../app/components/header/Header.vue"))["default"]
>;
export const LazyHeaderOne: LazyComponent<
  (typeof import("../app/components/header/HeaderOne.vue"))["default"]
>;


export const LazyHeaderNavMenu: LazyComponent<
  (typeof import("../app/components/header/NavMenu.vue"))["default"]
>;
export const LazySectionsAboutSectionOne: LazyComponent<
  (typeof import("../app/components/sections/AboutSectionOne.vue"))["default"]
>;
export const LazySectionsAboutSectionThree: LazyComponent<
  (typeof import("../app/components/sections/AboutSectionThree.vue"))["default"]
>;
export const LazySectionsAboutSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/AboutSectionTwo.vue"))["default"]
>;
export const LazySectionsBlogDetailsSection: LazyComponent<
  (typeof import("../app/components/sections/BlogDetailsSection.vue"))["default"]
>;
export const LazySectionsBlogGridSection: LazyComponent<
  (typeof import("../app/components/sections/BlogGridSection.vue"))["default"]
>;
export const LazySectionsBlogListSection: LazyComponent<
  (typeof import("../app/components/sections/BlogListSection.vue"))["default"]
>;
export const LazySectionsBlogSectionOne: LazyComponent<
  (typeof import("../app/components/sections/BlogSectionOne.vue"))["default"]
>;
export const LazySectionsBlogSectionThree: LazyComponent<
  (typeof import("../app/components/sections/BlogSectionThree.vue"))["default"]
>;
export const LazySectionsBlogSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/BlogSectionTwo.vue"))["default"]
>;
export const LazySectionsBrandSectionOne: LazyComponent<
  (typeof import("../app/components/sections/BrandSectionOne.vue"))["default"]
>;
export const LazySectionsBreadcrumb: LazyComponent<
  (typeof import("../app/components/sections/Breadcrumb.vue"))["default"]
>;
export const LazySectionsContactSectionOne: LazyComponent<
  (typeof import("../app/components/sections/ContactSectionOne.vue"))["default"]
>;
export const LazySectionsCounterSectionOne: LazyComponent<
  (typeof import("../app/components/sections/CounterSectionOne.vue"))["default"]
>;
export const LazySectionsCtaSectionOne: LazyComponent<
  (typeof import("../app/components/sections/CtaSectionOne.vue"))["default"]
>;
export const LazySectionsCtaSectionThree: LazyComponent<
  (typeof import("../app/components/sections/CtaSectionThree.vue"))["default"]
>;
export const LazySectionsCtaSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/CtaSectionTwo.vue"))["default"]
>;
export const LazySectionsCustomerSupportSectionOne: LazyComponent<
  (typeof import("../app/components/sections/CustomerSupportSectionOne.vue"))["default"]
>;
export const LazySectionsFaqSectionOne: LazyComponent<
  (typeof import("../app/components/sections/FaqSectionOne.vue"))["default"]
>;
export const LazySectionsHeroSectionOne: LazyComponent<
  (typeof import("../app/components/sections/HeroSectionOne.vue"))["default"]
>;
export const LazySectionsHeroSectionThree: LazyComponent<
  (typeof import("../app/components/sections/HeroSectionThree.vue"))["default"]
>;
export const LazySectionsHeroSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/HeroSectionTwo.vue"))["default"]
>;
export const LazySectionsPricingSectionOne: LazyComponent<
  (typeof import("../app/components/sections/PricingSectionOne.vue"))["default"]
>;
export const LazySectionsPricingSectionThree: LazyComponent<
  (typeof import("../app/components/sections/PricingSectionThree.vue"))["default"]
>;
export const LazySectionsPricingSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/PricingSectionTwo.vue"))["default"]
>;
export const LazySectionsProcessSectionOne: LazyComponent<
  (typeof import("../app/components/sections/ProcessSectionOne.vue"))["default"]
>;
export const LazySectionsProcessSectionThree: LazyComponent<
  (typeof import("../app/components/sections/ProcessSectionThree.vue"))["default"]
>;
export const LazySectionsProjectDetailsSection: LazyComponent<
  (typeof import("../app/components/sections/ProjectDetailsSection.vue"))["default"]
>;
export const LazySectionsProjectSectionOne: LazyComponent<
  (typeof import("../app/components/sections/ProjectSectionOne.vue"))["default"]
>;
export const LazySectionsProjectSectionThree: LazyComponent<
  (typeof import("../app/components/sections/ProjectSectionThree.vue"))["default"]
>;
export const LazySectionsProjectSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/ProjectSectionTwo.vue"))["default"]
>;
export const LazySectionsServiceDetailsSectionOne: LazyComponent<
  (typeof import("../app/components/sections/ServiceDetailsSectionOne.vue"))["default"]
>;
export const LazySectionsServiceSectionFour: LazyComponent<
  (typeof import("../app/components/sections/ServiceSectionFour.vue"))["default"]
>;
export const LazySectionsServiceSectionOne: LazyComponent<
  (typeof import("../app/components/sections/ServiceSectionOne.vue"))["default"]
>;
export const LazySectionsServiceSectionThree: LazyComponent<
  (typeof import("../app/components/sections/ServiceSectionThree.vue"))["default"]
>;
export const LazySectionsServiceSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/ServiceSectionTwo.vue"))["default"]
>;
export const LazySectionsTeamDetailsSection: LazyComponent<
  (typeof import("../app/components/sections/TeamDetailsSection.vue"))["default"]
>;
export const LazySectionsTeamOneSlider: LazyComponent<
  (typeof import("../app/components/sections/TeamOneSlider.vue"))["default"]
>;
export const LazySectionsTeamSectionOne: LazyComponent<
  (typeof import("../app/components/sections/TeamSectionOne.vue"))["default"]
>;
export const LazySectionsTeamSectionThree: LazyComponent<
  (typeof import("../app/components/sections/TeamSectionThree.vue"))["default"]
>;
export const LazySectionsTeamSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/TeamSectionTwo.vue"))["default"]
>;
export const LazySectionsTestimonialSectionOne: LazyComponent<
  (typeof import("../app/components/sections/TestimonialSectionOne.vue"))["default"]
>;
export const LazySectionsTestimonialSectionThree: LazyComponent<
  (typeof import("../app/components/sections/TestimonialSectionThree.vue"))["default"]
>;
export const LazySectionsTestimonialSectionTwo: LazyComponent<
  (typeof import("../app/components/sections/TestimonialSectionTwo.vue"))["default"]
>;
export const LazySectionsTestimonialSliderOne: LazyComponent<
  (typeof import("../app/components/sections/TestimonialSliderOne.vue"))["default"]
>;
export const LazySectionsTestimonialSliderThree: LazyComponent<
  (typeof import("../app/components/sections/TestimonialSliderThree.vue"))["default"]
>;
export const LazySectionsTestimonialSliderTwo: LazyComponent<
  (typeof import("../app/components/sections/TestimonialSliderTwo.vue"))["default"]
>;
export const LazySectionsWhyChooseSectionOne: LazyComponent<
  (typeof import("../app/components/sections/WhyChooseSectionOne.vue"))["default"]
>;
export const LazySectionsWhyChooseTwo: LazyComponent<
  (typeof import("../app/components/sections/WhyChooseTwo.vue"))["default"]
>;
export const LazyNuxtWelcome: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/welcome.vue"))["default"]
>;
export const LazyNuxtLayout: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout"))["default"]
>;
export const LazyNuxtErrorBoundary: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue"))["default"]
>;
export const LazyClientOnly: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/client-only"))["default"]
>;
export const LazyDevOnly: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/dev-only"))["default"]
>;
export const LazyServerPlaceholder: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/server-placeholder"))["default"]
>;
export const LazyNuxtLink: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-link"))["default"]
>;
export const LazyNuxtLoadingIndicator: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator"))["default"]
>;
export const LazyNuxtTime: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue"))["default"]
>;
export const LazyNuxtRouteAnnouncer: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer"))["default"]
>;
export const LazyNuxtImg: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs"))["NuxtImg"]
>;
export const LazyNuxtPicture: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs"))["NuxtPicture"]
>;
export const LazyNuxtPage: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/pages/runtime/page"))["default"]
>;
export const LazyNoScript: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["NoScript"]
>;
export const LazyLink: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Link"]
>;
export const LazyBase: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Base"]
>;
export const LazyTitle: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Title"]
>;
export const LazyMeta: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Meta"]
>;
export const LazyStyle: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Style"]
>;
export const LazyHead: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Head"]
>;
export const LazyHtml: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Html"]
>;
export const LazyBody: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/head/runtime/components"))["Body"]
>;
export const LazyNuxtIsland: LazyComponent<
  (typeof import("../node_modules/nuxt/dist/app/components/nuxt-island"))["default"]
>;

export const componentNames: string[];
