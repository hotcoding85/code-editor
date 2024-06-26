export enum PageType {
  Admin = '/admin',
  AppDetail = '/apps/[userName]/[appSlug]',
  // Features = '/features',
  // Docs = '/docs',
  // Pricing = '/pricing',
  // Tutorials = '/tutorials',
  AppList = '/apps',
  Atoms = '/atoms',
  AtomList = '/apps/[userName]/[appSlug]/atoms',
  AtomTypeList = '/atom-types',
  ComponentDetail = '/components/[componentId]',
  ComponentDetailV2 = '/library/[libraryId]/component/[componentId]',
  ComponentList = '/components',
  Home = '/',
  LambdaList = '/lambdas',
  LibraryDetail = '/apps/[userName]/[appSlug]/library/[libraryId]',
  LibraryList = '/apps/[userName]/[appSlug]/library',
  Page404 = '/apps/[userName]/[appSlug]/pages/[pageSlug]/404',
  Page500 = '/apps/[userName]/[appSlug]/pages/[pageSlug]/500',
  Resources = '/resources',
  Components = '/components',
  Type = '/types',
  PageBuilder = '/apps/[userName]/[appSlug]/pages/[pageSlug]/builder',
  ComponentBuilder = '/apps/[userName]/[appSlug]/components/[componentSlug]/builder',
  PageDetail = '/apps/[userName]/[appSlug]/pages/[pageSlug]',
  PropsInterface = '/apps/[userName]/[appSlug]/props',
  Storybook = '/storybook',
  Prop = '/library/[libraryId]/props',
  Tag = '/tags',
  PageList = '/apps/[userName]/[appSlug]/pages',
}
