
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  BackToTop: typeof import("../../app/components/BackToTop.vue")['default']
  Offcanvus: typeof import("../../app/components/Offcanvus.vue")['default']
  Preloader: typeof import("../../app/components/Preloader.vue")['default']
  ScrollCounter: typeof import("../../app/components/ScrollCounter.vue")['default']
  SearchPopup: typeof import("../../app/components/SearchPopup.vue")['default']
  Footer: typeof import("../../app/components/footer/Footer.vue")['default']
  FooterOne: typeof import("../../app/components/footer/FooterOne.vue")['default']
  FooterThree: typeof import("../../app/components/footer/FooterThree.vue")['default']
  FooterTwo: typeof import("../../app/components/footer/FooterTwo.vue")['default']
  Header: typeof import("../../app/components/header/Header.vue")['default']
  HeaderOne: typeof import("../../app/components/header/HeaderOne.vue")['default']
  HeaderThree: typeof import("../../app/components/header/HeaderThree.vue")['default']
  HeaderTwo: typeof import("../../app/components/header/HeaderTwo.vue")['default']
  HeaderNavMenu: typeof import("../../app/components/header/NavMenu.vue")['default']
  SectionsAboutSectionOne: typeof import("../../app/components/sections/AboutSectionOne.vue")['default']
  SectionsAboutSectionThree: typeof import("../../app/components/sections/AboutSectionThree.vue")['default']
  SectionsAboutSectionTwo: typeof import("../../app/components/sections/AboutSectionTwo.vue")['default']
  SectionsBlogDetailsSection: typeof import("../../app/components/sections/BlogDetailsSection.vue")['default']
  SectionsBlogGridSection: typeof import("../../app/components/sections/BlogGridSection.vue")['default']
  SectionsBlogListSection: typeof import("../../app/components/sections/BlogListSection.vue")['default']
  SectionsBlogSectionOne: typeof import("../../app/components/sections/BlogSectionOne.vue")['default']
  SectionsBlogSectionThree: typeof import("../../app/components/sections/BlogSectionThree.vue")['default']
  SectionsBlogSectionTwo: typeof import("../../app/components/sections/BlogSectionTwo.vue")['default']
  SectionsBrandSectionOne: typeof import("../../app/components/sections/BrandSectionOne.vue")['default']
  SectionsBreadcrumb: typeof import("../../app/components/sections/Breadcrumb.vue")['default']
  SectionsContactSectionOne: typeof import("../../app/components/sections/ContactSectionOne.vue")['default']
  SectionsCounterSectionOne: typeof import("../../app/components/sections/CounterSectionOne.vue")['default']
  SectionsCtaSectionOne: typeof import("../../app/components/sections/CtaSectionOne.vue")['default']
  SectionsCtaSectionThree: typeof import("../../app/components/sections/CtaSectionThree.vue")['default']
  SectionsCtaSectionTwo: typeof import("../../app/components/sections/CtaSectionTwo.vue")['default']
  SectionsCustomerSupportSectionOne: typeof import("../../app/components/sections/CustomerSupportSectionOne.vue")['default']
  SectionsFaqSectionOne: typeof import("../../app/components/sections/FaqSectionOne.vue")['default']
  SectionsHeroSectionOne: typeof import("../../app/components/sections/HeroSectionOne.vue")['default']
  SectionsHeroSectionThree: typeof import("../../app/components/sections/HeroSectionThree.vue")['default']
  SectionsHeroSectionTwo: typeof import("../../app/components/sections/HeroSectionTwo.vue")['default']
  SectionsPricingSectionOne: typeof import("../../app/components/sections/PricingSectionOne.vue")['default']
  SectionsPricingSectionThree: typeof import("../../app/components/sections/PricingSectionThree.vue")['default']
  SectionsPricingSectionTwo: typeof import("../../app/components/sections/PricingSectionTwo.vue")['default']
  SectionsPrivacyPolicyInfo: typeof import("../../app/components/sections/PrivacyPolicyInfo.vue")['default']
  SectionsProcessSectionOne: typeof import("../../app/components/sections/ProcessSectionOne.vue")['default']
  SectionsProcessSectionThree: typeof import("../../app/components/sections/ProcessSectionThree.vue")['default']
  SectionsProjectDetailsSection: typeof import("../../app/components/sections/ProjectDetailsSection.vue")['default']
  SectionsProjectSectionOne: typeof import("../../app/components/sections/ProjectSectionOne.vue")['default']
  SectionsProjectSectionThree: typeof import("../../app/components/sections/ProjectSectionThree.vue")['default']
  SectionsProjectSectionTwo: typeof import("../../app/components/sections/ProjectSectionTwo.vue")['default']
  SectionsServiceDetailsSectionOne: typeof import("../../app/components/sections/ServiceDetailsSectionOne.vue")['default']
  SectionsServiceSectionFour: typeof import("../../app/components/sections/ServiceSectionFour.vue")['default']
  SectionsServiceSectionOne: typeof import("../../app/components/sections/ServiceSectionOne.vue")['default']
  SectionsServiceSectionThree: typeof import("../../app/components/sections/ServiceSectionThree.vue")['default']
  SectionsServiceSectionTwo: typeof import("../../app/components/sections/ServiceSectionTwo.vue")['default']
  SectionsTeamDetailsSection: typeof import("../../app/components/sections/TeamDetailsSection.vue")['default']
  SectionsTeamOneSlider: typeof import("../../app/components/sections/TeamOneSlider.vue")['default']
  SectionsTeamSectionOne: typeof import("../../app/components/sections/TeamSectionOne.vue")['default']
  SectionsTeamSectionThree: typeof import("../../app/components/sections/TeamSectionThree.vue")['default']
  SectionsTeamSectionTwo: typeof import("../../app/components/sections/TeamSectionTwo.vue")['default']
  SectionsTestimonialSectionOne: typeof import("../../app/components/sections/TestimonialSectionOne.vue")['default']
  SectionsTestimonialSectionThree: typeof import("../../app/components/sections/TestimonialSectionThree.vue")['default']
  SectionsTestimonialSectionTwo: typeof import("../../app/components/sections/TestimonialSectionTwo.vue")['default']
  SectionsTestimonialSliderOne: typeof import("../../app/components/sections/TestimonialSliderOne.vue")['default']
  SectionsTestimonialSliderThree: typeof import("../../app/components/sections/TestimonialSliderThree.vue")['default']
  SectionsTestimonialSliderTwo: typeof import("../../app/components/sections/TestimonialSliderTwo.vue")['default']
  SectionsWhyChooseSectionOne: typeof import("../../app/components/sections/WhyChooseSectionOne.vue")['default']
  SectionsWhyChooseTwo: typeof import("../../app/components/sections/WhyChooseTwo.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyBackToTop: LazyComponent<typeof import("../../app/components/BackToTop.vue")['default']>
  LazyOffcanvus: LazyComponent<typeof import("../../app/components/Offcanvus.vue")['default']>
  LazyPreloader: LazyComponent<typeof import("../../app/components/Preloader.vue")['default']>
  LazyScrollCounter: LazyComponent<typeof import("../../app/components/ScrollCounter.vue")['default']>
  LazySearchPopup: LazyComponent<typeof import("../../app/components/SearchPopup.vue")['default']>
  LazyFooter: LazyComponent<typeof import("../../app/components/footer/Footer.vue")['default']>
  LazyFooterOne: LazyComponent<typeof import("../../app/components/footer/FooterOne.vue")['default']>
  LazyFooterThree: LazyComponent<typeof import("../../app/components/footer/FooterThree.vue")['default']>
  LazyFooterTwo: LazyComponent<typeof import("../../app/components/footer/FooterTwo.vue")['default']>
  LazyHeader: LazyComponent<typeof import("../../app/components/header/Header.vue")['default']>
  LazyHeaderOne: LazyComponent<typeof import("../../app/components/header/HeaderOne.vue")['default']>
  LazyHeaderThree: LazyComponent<typeof import("../../app/components/header/HeaderThree.vue")['default']>
  LazyHeaderTwo: LazyComponent<typeof import("../../app/components/header/HeaderTwo.vue")['default']>
  LazyHeaderNavMenu: LazyComponent<typeof import("../../app/components/header/NavMenu.vue")['default']>
  LazySectionsAboutSectionOne: LazyComponent<typeof import("../../app/components/sections/AboutSectionOne.vue")['default']>
  LazySectionsAboutSectionThree: LazyComponent<typeof import("../../app/components/sections/AboutSectionThree.vue")['default']>
  LazySectionsAboutSectionTwo: LazyComponent<typeof import("../../app/components/sections/AboutSectionTwo.vue")['default']>
  LazySectionsBlogDetailsSection: LazyComponent<typeof import("../../app/components/sections/BlogDetailsSection.vue")['default']>
  LazySectionsBlogGridSection: LazyComponent<typeof import("../../app/components/sections/BlogGridSection.vue")['default']>
  LazySectionsBlogListSection: LazyComponent<typeof import("../../app/components/sections/BlogListSection.vue")['default']>
  LazySectionsBlogSectionOne: LazyComponent<typeof import("../../app/components/sections/BlogSectionOne.vue")['default']>
  LazySectionsBlogSectionThree: LazyComponent<typeof import("../../app/components/sections/BlogSectionThree.vue")['default']>
  LazySectionsBlogSectionTwo: LazyComponent<typeof import("../../app/components/sections/BlogSectionTwo.vue")['default']>
  LazySectionsBrandSectionOne: LazyComponent<typeof import("../../app/components/sections/BrandSectionOne.vue")['default']>
  LazySectionsBreadcrumb: LazyComponent<typeof import("../../app/components/sections/Breadcrumb.vue")['default']>
  LazySectionsContactSectionOne: LazyComponent<typeof import("../../app/components/sections/ContactSectionOne.vue")['default']>
  LazySectionsCounterSectionOne: LazyComponent<typeof import("../../app/components/sections/CounterSectionOne.vue")['default']>
  LazySectionsCtaSectionOne: LazyComponent<typeof import("../../app/components/sections/CtaSectionOne.vue")['default']>
  LazySectionsCtaSectionThree: LazyComponent<typeof import("../../app/components/sections/CtaSectionThree.vue")['default']>
  LazySectionsCtaSectionTwo: LazyComponent<typeof import("../../app/components/sections/CtaSectionTwo.vue")['default']>
  LazySectionsCustomerSupportSectionOne: LazyComponent<typeof import("../../app/components/sections/CustomerSupportSectionOne.vue")['default']>
  LazySectionsFaqSectionOne: LazyComponent<typeof import("../../app/components/sections/FaqSectionOne.vue")['default']>
  LazySectionsHeroSectionOne: LazyComponent<typeof import("../../app/components/sections/HeroSectionOne.vue")['default']>
  LazySectionsHeroSectionThree: LazyComponent<typeof import("../../app/components/sections/HeroSectionThree.vue")['default']>
  LazySectionsHeroSectionTwo: LazyComponent<typeof import("../../app/components/sections/HeroSectionTwo.vue")['default']>
  LazySectionsPricingSectionOne: LazyComponent<typeof import("../../app/components/sections/PricingSectionOne.vue")['default']>
  LazySectionsPricingSectionThree: LazyComponent<typeof import("../../app/components/sections/PricingSectionThree.vue")['default']>
  LazySectionsPricingSectionTwo: LazyComponent<typeof import("../../app/components/sections/PricingSectionTwo.vue")['default']>
  LazySectionsPrivacyPolicyInfo: LazyComponent<typeof import("../../app/components/sections/PrivacyPolicyInfo.vue")['default']>
  LazySectionsProcessSectionOne: LazyComponent<typeof import("../../app/components/sections/ProcessSectionOne.vue")['default']>
  LazySectionsProcessSectionThree: LazyComponent<typeof import("../../app/components/sections/ProcessSectionThree.vue")['default']>
  LazySectionsProjectDetailsSection: LazyComponent<typeof import("../../app/components/sections/ProjectDetailsSection.vue")['default']>
  LazySectionsProjectSectionOne: LazyComponent<typeof import("../../app/components/sections/ProjectSectionOne.vue")['default']>
  LazySectionsProjectSectionThree: LazyComponent<typeof import("../../app/components/sections/ProjectSectionThree.vue")['default']>
  LazySectionsProjectSectionTwo: LazyComponent<typeof import("../../app/components/sections/ProjectSectionTwo.vue")['default']>
  LazySectionsServiceDetailsSectionOne: LazyComponent<typeof import("../../app/components/sections/ServiceDetailsSectionOne.vue")['default']>
  LazySectionsServiceSectionFour: LazyComponent<typeof import("../../app/components/sections/ServiceSectionFour.vue")['default']>
  LazySectionsServiceSectionOne: LazyComponent<typeof import("../../app/components/sections/ServiceSectionOne.vue")['default']>
  LazySectionsServiceSectionThree: LazyComponent<typeof import("../../app/components/sections/ServiceSectionThree.vue")['default']>
  LazySectionsServiceSectionTwo: LazyComponent<typeof import("../../app/components/sections/ServiceSectionTwo.vue")['default']>
  LazySectionsTeamDetailsSection: LazyComponent<typeof import("../../app/components/sections/TeamDetailsSection.vue")['default']>
  LazySectionsTeamOneSlider: LazyComponent<typeof import("../../app/components/sections/TeamOneSlider.vue")['default']>
  LazySectionsTeamSectionOne: LazyComponent<typeof import("../../app/components/sections/TeamSectionOne.vue")['default']>
  LazySectionsTeamSectionThree: LazyComponent<typeof import("../../app/components/sections/TeamSectionThree.vue")['default']>
  LazySectionsTeamSectionTwo: LazyComponent<typeof import("../../app/components/sections/TeamSectionTwo.vue")['default']>
  LazySectionsTestimonialSectionOne: LazyComponent<typeof import("../../app/components/sections/TestimonialSectionOne.vue")['default']>
  LazySectionsTestimonialSectionThree: LazyComponent<typeof import("../../app/components/sections/TestimonialSectionThree.vue")['default']>
  LazySectionsTestimonialSectionTwo: LazyComponent<typeof import("../../app/components/sections/TestimonialSectionTwo.vue")['default']>
  LazySectionsTestimonialSliderOne: LazyComponent<typeof import("../../app/components/sections/TestimonialSliderOne.vue")['default']>
  LazySectionsTestimonialSliderThree: LazyComponent<typeof import("../../app/components/sections/TestimonialSliderThree.vue")['default']>
  LazySectionsTestimonialSliderTwo: LazyComponent<typeof import("../../app/components/sections/TestimonialSliderTwo.vue")['default']>
  LazySectionsWhyChooseSectionOne: LazyComponent<typeof import("../../app/components/sections/WhyChooseSectionOne.vue")['default']>
  LazySectionsWhyChooseTwo: LazyComponent<typeof import("../../app/components/sections/WhyChooseTwo.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
