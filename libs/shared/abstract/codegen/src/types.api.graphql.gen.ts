export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export enum ActionKind {
  /** Action responsible for fetching data from a resource */
  ApiAction = 'ApiAction',
  /** Action with custom code */
  CodeAction = 'CodeAction',
}

/** Allows picking a action from the list of actions */
export type ActionType = IBaseType & {
  __typename?: 'ActionType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<ActionTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/** Allows picking a action from the list of actions */
export type ActionTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a action from the list of actions */
export type ActionTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a action from the list of actions */
export type ActionTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type ActionTypeAggregateSelection = {
  __typename?: 'ActionTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ActionTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type ActionTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type ActionTypeConnectOrCreateWhere = {
  node: ActionTypeUniqueWhere
}

export type ActionTypeConnectWhere = {
  node: ActionTypeWhere
}

export type ActionTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type ActionTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type ActionTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type ActionTypeEdge = {
  __typename?: 'ActionTypeEdge'
  cursor: Scalars['String']['output']
  node: ActionType
}

export type ActionTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type ActionTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ActionTypeSort objects to sort ActionTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActionTypeSort>>
}

export type ActionTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<ActionTypeOwnerAggregateInput>>
  NOT?: InputMaybe<ActionTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<ActionTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ActionTypeOwnerNodeAggregationWhereInput>
}

export type ActionTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActionTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<ActionTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ActionTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ActionTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort ActionTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActionTypeSort object. */
export type ActionTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ActionTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type ActionTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type ActionTypeUserOwnerAggregationSelection = {
  __typename?: 'ActionTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ActionTypeUserOwnerNodeAggregateSelection>
}

export type ActionTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'ActionTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type ActionTypeWhere = {
  AND?: InputMaybe<Array<ActionTypeWhere>>
  NOT?: InputMaybe<ActionTypeWhere>
  OR?: InputMaybe<Array<ActionTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ActionTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type ActionTypesConnection = {
  __typename?: 'ActionTypesConnection'
  edges: Array<ActionTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AnyAction = ApiAction | CodeAction

export type AnyActionWhere = {
  ApiAction?: InputMaybe<ApiActionWhere>
  CodeAction?: InputMaybe<CodeActionWhere>
}

export type AnyType =
  | ActionType
  | AppType
  | ArrayType
  | CodeMirrorType
  | ElementType
  | EnumType
  | InterfaceType
  | LambdaType
  | PageType
  | PrimitiveType
  | ReactNodeType
  | RenderPropType
  | UnionType

export type AnyTypeWhere = {
  ActionType?: InputMaybe<ActionTypeWhere>
  AppType?: InputMaybe<AppTypeWhere>
  ArrayType?: InputMaybe<ArrayTypeWhere>
  CodeMirrorType?: InputMaybe<CodeMirrorTypeWhere>
  ElementType?: InputMaybe<ElementTypeWhere>
  EnumType?: InputMaybe<EnumTypeWhere>
  InterfaceType?: InputMaybe<InterfaceTypeWhere>
  LambdaType?: InputMaybe<LambdaTypeWhere>
  PageType?: InputMaybe<PageTypeWhere>
  PrimitiveType?: InputMaybe<PrimitiveTypeWhere>
  ReactNodeType?: InputMaybe<ReactNodeTypeWhere>
  RenderPropType?: InputMaybe<RenderPropTypeWhere>
  UnionType?: InputMaybe<UnionTypeWhere>
}

export type ApiAction = BaseAction & {
  __typename?: 'ApiAction'
  config: Prop
  configAggregate?: Maybe<ApiActionPropConfigAggregationSelection>
  configConnection: ApiActionConfigConnection
  element?: Maybe<Element>
  elementAggregate?: Maybe<ApiActionElementElementAggregationSelection>
  elementConnection: BaseActionElementConnection
  errorAction?: Maybe<AnyAction>
  errorActionConnection: ApiActionErrorActionConnection
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  /** Resource to fetch data from */
  resource: Resource
  resourceAggregate?: Maybe<ApiActionResourceResourceAggregationSelection>
  resourceConnection: ApiActionResourceConnection
  store: Store
  storeAggregate?: Maybe<ApiActionStoreStoreAggregationSelection>
  storeConnection: BaseActionStoreConnection
  /** Response handlers */
  successAction?: Maybe<AnyAction>
  successActionConnection: ApiActionSuccessActionConnection
  type: ActionKind
}

export type ApiActionConfigArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PropOptions>
  where?: InputMaybe<PropWhere>
}

export type ApiActionConfigAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PropWhere>
}

export type ApiActionConfigConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ApiActionConfigConnectionSort>>
  where?: InputMaybe<ApiActionConfigConnectionWhere>
}

export type ApiActionElementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ApiActionElementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ApiActionElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<BaseActionElementConnectionSort>>
  where?: InputMaybe<BaseActionElementConnectionWhere>
}

export type ApiActionErrorActionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<QueryOptions>
  where?: InputMaybe<AnyActionWhere>
}

export type ApiActionErrorActionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ApiActionErrorActionConnectionWhere>
}

export type ApiActionResourceArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ResourceOptions>
  where?: InputMaybe<ResourceWhere>
}

export type ApiActionResourceAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ResourceWhere>
}

export type ApiActionResourceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ApiActionResourceConnectionSort>>
  where?: InputMaybe<ApiActionResourceConnectionWhere>
}

export type ApiActionStoreArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<StoreOptions>
  where?: InputMaybe<StoreWhere>
}

export type ApiActionStoreAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<StoreWhere>
}

export type ApiActionStoreConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<BaseActionStoreConnectionSort>>
  where?: InputMaybe<BaseActionStoreConnectionWhere>
}

export type ApiActionSuccessActionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<QueryOptions>
  where?: InputMaybe<AnyActionWhere>
}

export type ApiActionSuccessActionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ApiActionSuccessActionConnectionWhere>
}

export type ApiActionAggregateSelection = {
  __typename?: 'ApiActionAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ApiActionConfigAggregateInput = {
  AND?: InputMaybe<Array<ApiActionConfigAggregateInput>>
  NOT?: InputMaybe<ApiActionConfigAggregateInput>
  OR?: InputMaybe<Array<ApiActionConfigAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ApiActionConfigNodeAggregationWhereInput>
}

export type ApiActionConfigConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PropConnectWhere>
}

export type ApiActionConfigConnectOrCreateFieldInput = {
  onCreate: ApiActionConfigConnectOrCreateFieldInputOnCreate
  where: PropConnectOrCreateWhere
}

export type ApiActionConfigConnectOrCreateFieldInputOnCreate = {
  node: PropOnCreateInput
}

export type ApiActionConfigConnection = {
  __typename?: 'ApiActionConfigConnection'
  edges: Array<ApiActionConfigRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ApiActionConfigConnectionSort = {
  node?: InputMaybe<PropSort>
}

export type ApiActionConfigConnectionWhere = {
  AND?: InputMaybe<Array<ApiActionConfigConnectionWhere>>
  NOT?: InputMaybe<ApiActionConfigConnectionWhere>
  OR?: InputMaybe<Array<ApiActionConfigConnectionWhere>>
  node?: InputMaybe<PropWhere>
}

export type ApiActionConfigCreateFieldInput = {
  node: PropCreateInput
}

export type ApiActionConfigDeleteFieldInput = {
  where?: InputMaybe<ApiActionConfigConnectionWhere>
}

export type ApiActionConfigDisconnectFieldInput = {
  where?: InputMaybe<ApiActionConfigConnectionWhere>
}

export type ApiActionConfigFieldInput = {
  connect?: InputMaybe<ApiActionConfigConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionConfigConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionConfigCreateFieldInput>
}

export type ApiActionConfigNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ApiActionConfigNodeAggregationWhereInput>>
  NOT?: InputMaybe<ApiActionConfigNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ApiActionConfigNodeAggregationWhereInput>>
  data_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  data_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ApiActionConfigRelationship = {
  __typename?: 'ApiActionConfigRelationship'
  cursor: Scalars['String']['output']
  node: Prop
}

export type ApiActionConfigUpdateConnectionInput = {
  node?: InputMaybe<PropUpdateInput>
}

export type ApiActionConfigUpdateFieldInput = {
  connect?: InputMaybe<ApiActionConfigConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionConfigConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionConfigCreateFieldInput>
  delete?: InputMaybe<ApiActionConfigDeleteFieldInput>
  disconnect?: InputMaybe<ApiActionConfigDisconnectFieldInput>
  update?: InputMaybe<ApiActionConfigUpdateConnectionInput>
  where?: InputMaybe<ApiActionConfigConnectionWhere>
}

export type ApiActionConnectInput = {
  config?: InputMaybe<ApiActionConfigConnectFieldInput>
  element?: InputMaybe<BaseActionElementConnectFieldInput>
  errorAction?: InputMaybe<ApiActionErrorActionConnectInput>
  resource?: InputMaybe<ApiActionResourceConnectFieldInput>
  store?: InputMaybe<BaseActionStoreConnectFieldInput>
  successAction?: InputMaybe<ApiActionSuccessActionConnectInput>
}

export type ApiActionConnectOrCreateInput = {
  config?: InputMaybe<ApiActionConfigConnectOrCreateFieldInput>
  element?: InputMaybe<BaseActionElementConnectOrCreateFieldInput>
  errorAction?: InputMaybe<ApiActionErrorActionConnectOrCreateInput>
  resource?: InputMaybe<ApiActionResourceConnectOrCreateFieldInput>
  store?: InputMaybe<BaseActionStoreConnectOrCreateFieldInput>
  successAction?: InputMaybe<ApiActionSuccessActionConnectOrCreateInput>
}

export type ApiActionConnectOrCreateWhere = {
  node: ApiActionUniqueWhere
}

export type ApiActionConnectWhere = {
  node: ApiActionWhere
}

export type ApiActionCreateInput = {
  config?: InputMaybe<ApiActionConfigFieldInput>
  element?: InputMaybe<BaseActionElementFieldInput>
  errorAction?: InputMaybe<ApiActionErrorActionCreateInput>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  resource?: InputMaybe<ApiActionResourceFieldInput>
  store?: InputMaybe<BaseActionStoreFieldInput>
  successAction?: InputMaybe<ApiActionSuccessActionCreateInput>
  type?: ActionKind
}

export type ApiActionDeleteInput = {
  config?: InputMaybe<ApiActionConfigDeleteFieldInput>
  element?: InputMaybe<BaseActionElementDeleteFieldInput>
  errorAction?: InputMaybe<ApiActionErrorActionDeleteInput>
  resource?: InputMaybe<ApiActionResourceDeleteFieldInput>
  store?: InputMaybe<BaseActionStoreDeleteFieldInput>
  successAction?: InputMaybe<ApiActionSuccessActionDeleteInput>
}

export type ApiActionDisconnectInput = {
  config?: InputMaybe<ApiActionConfigDisconnectFieldInput>
  element?: InputMaybe<BaseActionElementDisconnectFieldInput>
  errorAction?: InputMaybe<ApiActionErrorActionDisconnectInput>
  resource?: InputMaybe<ApiActionResourceDisconnectFieldInput>
  store?: InputMaybe<BaseActionStoreDisconnectFieldInput>
  successAction?: InputMaybe<ApiActionSuccessActionDisconnectInput>
}

export type ApiActionEdge = {
  __typename?: 'ApiActionEdge'
  cursor: Scalars['String']['output']
  node: ApiAction
}

export type ApiActionElementAggregateInput = {
  AND?: InputMaybe<Array<ApiActionElementAggregateInput>>
  NOT?: InputMaybe<ApiActionElementAggregateInput>
  OR?: InputMaybe<Array<ApiActionElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ApiActionElementNodeAggregationWhereInput>
}

export type ApiActionElementElementAggregationSelection = {
  __typename?: 'ApiActionElementElementAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ApiActionElementElementNodeAggregateSelection>
}

export type ApiActionElementElementNodeAggregateSelection = {
  __typename?: 'ApiActionElementElementNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ApiActionElementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ApiActionElementNodeAggregationWhereInput>>
  NOT?: InputMaybe<ApiActionElementNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ApiActionElementNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ApiActionErrorActionApiActionConnectFieldInput = {
  connect?: InputMaybe<ApiActionConnectInput>
  where?: InputMaybe<ApiActionConnectWhere>
}

export type ApiActionErrorActionApiActionConnectOrCreateFieldInput = {
  onCreate: ApiActionErrorActionApiActionConnectOrCreateFieldInputOnCreate
  where: ApiActionConnectOrCreateWhere
}

export type ApiActionErrorActionApiActionConnectOrCreateFieldInputOnCreate = {
  node: ApiActionOnCreateInput
}

export type ApiActionErrorActionApiActionConnectionWhere = {
  AND?: InputMaybe<Array<ApiActionErrorActionApiActionConnectionWhere>>
  NOT?: InputMaybe<ApiActionErrorActionApiActionConnectionWhere>
  OR?: InputMaybe<Array<ApiActionErrorActionApiActionConnectionWhere>>
  node?: InputMaybe<ApiActionWhere>
}

export type ApiActionErrorActionApiActionCreateFieldInput = {
  node: ApiActionCreateInput
}

export type ApiActionErrorActionApiActionDeleteFieldInput = {
  delete?: InputMaybe<ApiActionDeleteInput>
  where?: InputMaybe<ApiActionErrorActionApiActionConnectionWhere>
}

export type ApiActionErrorActionApiActionDisconnectFieldInput = {
  disconnect?: InputMaybe<ApiActionDisconnectInput>
  where?: InputMaybe<ApiActionErrorActionApiActionConnectionWhere>
}

export type ApiActionErrorActionApiActionFieldInput = {
  connect?: InputMaybe<ApiActionErrorActionApiActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionErrorActionApiActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionErrorActionApiActionCreateFieldInput>
}

export type ApiActionErrorActionApiActionUpdateConnectionInput = {
  node?: InputMaybe<ApiActionUpdateInput>
}

export type ApiActionErrorActionApiActionUpdateFieldInput = {
  connect?: InputMaybe<ApiActionErrorActionApiActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionErrorActionApiActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionErrorActionApiActionCreateFieldInput>
  delete?: InputMaybe<ApiActionErrorActionApiActionDeleteFieldInput>
  disconnect?: InputMaybe<ApiActionErrorActionApiActionDisconnectFieldInput>
  update?: InputMaybe<ApiActionErrorActionApiActionUpdateConnectionInput>
  where?: InputMaybe<ApiActionErrorActionApiActionConnectionWhere>
}

export type ApiActionErrorActionCodeActionConnectFieldInput = {
  connect?: InputMaybe<CodeActionConnectInput>
  where?: InputMaybe<CodeActionConnectWhere>
}

export type ApiActionErrorActionCodeActionConnectOrCreateFieldInput = {
  onCreate: ApiActionErrorActionCodeActionConnectOrCreateFieldInputOnCreate
  where: CodeActionConnectOrCreateWhere
}

export type ApiActionErrorActionCodeActionConnectOrCreateFieldInputOnCreate = {
  node: CodeActionOnCreateInput
}

export type ApiActionErrorActionCodeActionConnectionWhere = {
  AND?: InputMaybe<Array<ApiActionErrorActionCodeActionConnectionWhere>>
  NOT?: InputMaybe<ApiActionErrorActionCodeActionConnectionWhere>
  OR?: InputMaybe<Array<ApiActionErrorActionCodeActionConnectionWhere>>
  node?: InputMaybe<CodeActionWhere>
}

export type ApiActionErrorActionCodeActionCreateFieldInput = {
  node: CodeActionCreateInput
}

export type ApiActionErrorActionCodeActionDeleteFieldInput = {
  delete?: InputMaybe<CodeActionDeleteInput>
  where?: InputMaybe<ApiActionErrorActionCodeActionConnectionWhere>
}

export type ApiActionErrorActionCodeActionDisconnectFieldInput = {
  disconnect?: InputMaybe<CodeActionDisconnectInput>
  where?: InputMaybe<ApiActionErrorActionCodeActionConnectionWhere>
}

export type ApiActionErrorActionCodeActionFieldInput = {
  connect?: InputMaybe<ApiActionErrorActionCodeActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionErrorActionCodeActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionErrorActionCodeActionCreateFieldInput>
}

export type ApiActionErrorActionCodeActionUpdateConnectionInput = {
  node?: InputMaybe<CodeActionUpdateInput>
}

export type ApiActionErrorActionCodeActionUpdateFieldInput = {
  connect?: InputMaybe<ApiActionErrorActionCodeActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionErrorActionCodeActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionErrorActionCodeActionCreateFieldInput>
  delete?: InputMaybe<ApiActionErrorActionCodeActionDeleteFieldInput>
  disconnect?: InputMaybe<ApiActionErrorActionCodeActionDisconnectFieldInput>
  update?: InputMaybe<ApiActionErrorActionCodeActionUpdateConnectionInput>
  where?: InputMaybe<ApiActionErrorActionCodeActionConnectionWhere>
}

export type ApiActionErrorActionConnectInput = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionConnectFieldInput>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionConnectFieldInput>
}

export type ApiActionErrorActionConnectOrCreateInput = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionConnectOrCreateFieldInput>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionConnectOrCreateFieldInput>
}

export type ApiActionErrorActionConnection = {
  __typename?: 'ApiActionErrorActionConnection'
  edges: Array<ApiActionErrorActionRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ApiActionErrorActionConnectionWhere = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionConnectionWhere>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionConnectionWhere>
}

export type ApiActionErrorActionCreateFieldInput = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionCreateFieldInput>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionCreateFieldInput>
}

export type ApiActionErrorActionCreateInput = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionFieldInput>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionFieldInput>
}

export type ApiActionErrorActionDeleteInput = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionDeleteFieldInput>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionDeleteFieldInput>
}

export type ApiActionErrorActionDisconnectInput = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionDisconnectFieldInput>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionDisconnectFieldInput>
}

export type ApiActionErrorActionRelationship = {
  __typename?: 'ApiActionErrorActionRelationship'
  cursor: Scalars['String']['output']
  node: AnyAction
}

export type ApiActionErrorActionUpdateInput = {
  ApiAction?: InputMaybe<ApiActionErrorActionApiActionUpdateFieldInput>
  CodeAction?: InputMaybe<ApiActionErrorActionCodeActionUpdateFieldInput>
}

export type ApiActionOnCreateInput = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  type?: ActionKind
}

export type ApiActionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ApiActionSort objects to sort ApiActions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ApiActionSort>>
}

export type ApiActionPropConfigAggregationSelection = {
  __typename?: 'ApiActionPropConfigAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ApiActionPropConfigNodeAggregateSelection>
}

export type ApiActionPropConfigNodeAggregateSelection = {
  __typename?: 'ApiActionPropConfigNodeAggregateSelection'
  data: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type ApiActionRelationInput = {
  config?: InputMaybe<ApiActionConfigCreateFieldInput>
  element?: InputMaybe<BaseActionElementCreateFieldInput>
  errorAction?: InputMaybe<ApiActionErrorActionCreateFieldInput>
  resource?: InputMaybe<ApiActionResourceCreateFieldInput>
  store?: InputMaybe<BaseActionStoreCreateFieldInput>
  successAction?: InputMaybe<ApiActionSuccessActionCreateFieldInput>
}

export type ApiActionResourceAggregateInput = {
  AND?: InputMaybe<Array<ApiActionResourceAggregateInput>>
  NOT?: InputMaybe<ApiActionResourceAggregateInput>
  OR?: InputMaybe<Array<ApiActionResourceAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ApiActionResourceNodeAggregationWhereInput>
}

export type ApiActionResourceConnectFieldInput = {
  connect?: InputMaybe<ResourceConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ResourceConnectWhere>
}

export type ApiActionResourceConnectOrCreateFieldInput = {
  onCreate: ApiActionResourceConnectOrCreateFieldInputOnCreate
  where: ResourceConnectOrCreateWhere
}

export type ApiActionResourceConnectOrCreateFieldInputOnCreate = {
  node: ResourceOnCreateInput
}

export type ApiActionResourceConnection = {
  __typename?: 'ApiActionResourceConnection'
  edges: Array<ApiActionResourceRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ApiActionResourceConnectionSort = {
  node?: InputMaybe<ResourceSort>
}

export type ApiActionResourceConnectionWhere = {
  AND?: InputMaybe<Array<ApiActionResourceConnectionWhere>>
  NOT?: InputMaybe<ApiActionResourceConnectionWhere>
  OR?: InputMaybe<Array<ApiActionResourceConnectionWhere>>
  node?: InputMaybe<ResourceWhere>
}

export type ApiActionResourceCreateFieldInput = {
  node: ResourceCreateInput
}

export type ApiActionResourceDeleteFieldInput = {
  delete?: InputMaybe<ResourceDeleteInput>
  where?: InputMaybe<ApiActionResourceConnectionWhere>
}

export type ApiActionResourceDisconnectFieldInput = {
  disconnect?: InputMaybe<ResourceDisconnectInput>
  where?: InputMaybe<ApiActionResourceConnectionWhere>
}

export type ApiActionResourceFieldInput = {
  connect?: InputMaybe<ApiActionResourceConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionResourceConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionResourceCreateFieldInput>
}

export type ApiActionResourceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ApiActionResourceNodeAggregationWhereInput>>
  NOT?: InputMaybe<ApiActionResourceNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ApiActionResourceNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ApiActionResourceRelationship = {
  __typename?: 'ApiActionResourceRelationship'
  cursor: Scalars['String']['output']
  node: Resource
}

export type ApiActionResourceResourceAggregationSelection = {
  __typename?: 'ApiActionResourceResourceAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ApiActionResourceResourceNodeAggregateSelection>
}

export type ApiActionResourceResourceNodeAggregateSelection = {
  __typename?: 'ApiActionResourceResourceNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ApiActionResourceUpdateConnectionInput = {
  node?: InputMaybe<ResourceUpdateInput>
}

export type ApiActionResourceUpdateFieldInput = {
  connect?: InputMaybe<ApiActionResourceConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionResourceConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionResourceCreateFieldInput>
  delete?: InputMaybe<ApiActionResourceDeleteFieldInput>
  disconnect?: InputMaybe<ApiActionResourceDisconnectFieldInput>
  update?: InputMaybe<ApiActionResourceUpdateConnectionInput>
  where?: InputMaybe<ApiActionResourceConnectionWhere>
}

/** Fields to sort ApiActions by. The order in which sorts are applied is not guaranteed when specifying many fields in one ApiActionSort object. */
export type ApiActionSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  type?: InputMaybe<SortDirection>
}

export type ApiActionStoreAggregateInput = {
  AND?: InputMaybe<Array<ApiActionStoreAggregateInput>>
  NOT?: InputMaybe<ApiActionStoreAggregateInput>
  OR?: InputMaybe<Array<ApiActionStoreAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ApiActionStoreNodeAggregationWhereInput>
}

export type ApiActionStoreNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ApiActionStoreNodeAggregationWhereInput>>
  NOT?: InputMaybe<ApiActionStoreNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ApiActionStoreNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ApiActionStoreStoreAggregationSelection = {
  __typename?: 'ApiActionStoreStoreAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ApiActionStoreStoreNodeAggregateSelection>
}

export type ApiActionStoreStoreNodeAggregateSelection = {
  __typename?: 'ApiActionStoreStoreNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ApiActionSuccessActionApiActionConnectFieldInput = {
  connect?: InputMaybe<ApiActionConnectInput>
  where?: InputMaybe<ApiActionConnectWhere>
}

export type ApiActionSuccessActionApiActionConnectOrCreateFieldInput = {
  onCreate: ApiActionSuccessActionApiActionConnectOrCreateFieldInputOnCreate
  where: ApiActionConnectOrCreateWhere
}

export type ApiActionSuccessActionApiActionConnectOrCreateFieldInputOnCreate = {
  node: ApiActionOnCreateInput
}

export type ApiActionSuccessActionApiActionConnectionWhere = {
  AND?: InputMaybe<Array<ApiActionSuccessActionApiActionConnectionWhere>>
  NOT?: InputMaybe<ApiActionSuccessActionApiActionConnectionWhere>
  OR?: InputMaybe<Array<ApiActionSuccessActionApiActionConnectionWhere>>
  node?: InputMaybe<ApiActionWhere>
}

export type ApiActionSuccessActionApiActionCreateFieldInput = {
  node: ApiActionCreateInput
}

export type ApiActionSuccessActionApiActionDeleteFieldInput = {
  delete?: InputMaybe<ApiActionDeleteInput>
  where?: InputMaybe<ApiActionSuccessActionApiActionConnectionWhere>
}

export type ApiActionSuccessActionApiActionDisconnectFieldInput = {
  disconnect?: InputMaybe<ApiActionDisconnectInput>
  where?: InputMaybe<ApiActionSuccessActionApiActionConnectionWhere>
}

export type ApiActionSuccessActionApiActionFieldInput = {
  connect?: InputMaybe<ApiActionSuccessActionApiActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionSuccessActionApiActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionSuccessActionApiActionCreateFieldInput>
}

export type ApiActionSuccessActionApiActionUpdateConnectionInput = {
  node?: InputMaybe<ApiActionUpdateInput>
}

export type ApiActionSuccessActionApiActionUpdateFieldInput = {
  connect?: InputMaybe<ApiActionSuccessActionApiActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionSuccessActionApiActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionSuccessActionApiActionCreateFieldInput>
  delete?: InputMaybe<ApiActionSuccessActionApiActionDeleteFieldInput>
  disconnect?: InputMaybe<ApiActionSuccessActionApiActionDisconnectFieldInput>
  update?: InputMaybe<ApiActionSuccessActionApiActionUpdateConnectionInput>
  where?: InputMaybe<ApiActionSuccessActionApiActionConnectionWhere>
}

export type ApiActionSuccessActionCodeActionConnectFieldInput = {
  connect?: InputMaybe<CodeActionConnectInput>
  where?: InputMaybe<CodeActionConnectWhere>
}

export type ApiActionSuccessActionCodeActionConnectOrCreateFieldInput = {
  onCreate: ApiActionSuccessActionCodeActionConnectOrCreateFieldInputOnCreate
  where: CodeActionConnectOrCreateWhere
}

export type ApiActionSuccessActionCodeActionConnectOrCreateFieldInputOnCreate =
  {
    node: CodeActionOnCreateInput
  }

export type ApiActionSuccessActionCodeActionConnectionWhere = {
  AND?: InputMaybe<Array<ApiActionSuccessActionCodeActionConnectionWhere>>
  NOT?: InputMaybe<ApiActionSuccessActionCodeActionConnectionWhere>
  OR?: InputMaybe<Array<ApiActionSuccessActionCodeActionConnectionWhere>>
  node?: InputMaybe<CodeActionWhere>
}

export type ApiActionSuccessActionCodeActionCreateFieldInput = {
  node: CodeActionCreateInput
}

export type ApiActionSuccessActionCodeActionDeleteFieldInput = {
  delete?: InputMaybe<CodeActionDeleteInput>
  where?: InputMaybe<ApiActionSuccessActionCodeActionConnectionWhere>
}

export type ApiActionSuccessActionCodeActionDisconnectFieldInput = {
  disconnect?: InputMaybe<CodeActionDisconnectInput>
  where?: InputMaybe<ApiActionSuccessActionCodeActionConnectionWhere>
}

export type ApiActionSuccessActionCodeActionFieldInput = {
  connect?: InputMaybe<ApiActionSuccessActionCodeActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionSuccessActionCodeActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionSuccessActionCodeActionCreateFieldInput>
}

export type ApiActionSuccessActionCodeActionUpdateConnectionInput = {
  node?: InputMaybe<CodeActionUpdateInput>
}

export type ApiActionSuccessActionCodeActionUpdateFieldInput = {
  connect?: InputMaybe<ApiActionSuccessActionCodeActionConnectFieldInput>
  connectOrCreate?: InputMaybe<ApiActionSuccessActionCodeActionConnectOrCreateFieldInput>
  create?: InputMaybe<ApiActionSuccessActionCodeActionCreateFieldInput>
  delete?: InputMaybe<ApiActionSuccessActionCodeActionDeleteFieldInput>
  disconnect?: InputMaybe<ApiActionSuccessActionCodeActionDisconnectFieldInput>
  update?: InputMaybe<ApiActionSuccessActionCodeActionUpdateConnectionInput>
  where?: InputMaybe<ApiActionSuccessActionCodeActionConnectionWhere>
}

export type ApiActionSuccessActionConnectInput = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionConnectFieldInput>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionConnectFieldInput>
}

export type ApiActionSuccessActionConnectOrCreateInput = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionConnectOrCreateFieldInput>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionConnectOrCreateFieldInput>
}

export type ApiActionSuccessActionConnection = {
  __typename?: 'ApiActionSuccessActionConnection'
  edges: Array<ApiActionSuccessActionRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ApiActionSuccessActionConnectionWhere = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionConnectionWhere>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionConnectionWhere>
}

export type ApiActionSuccessActionCreateFieldInput = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionCreateFieldInput>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionCreateFieldInput>
}

export type ApiActionSuccessActionCreateInput = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionFieldInput>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionFieldInput>
}

export type ApiActionSuccessActionDeleteInput = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionDeleteFieldInput>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionDeleteFieldInput>
}

export type ApiActionSuccessActionDisconnectInput = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionDisconnectFieldInput>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionDisconnectFieldInput>
}

export type ApiActionSuccessActionRelationship = {
  __typename?: 'ApiActionSuccessActionRelationship'
  cursor: Scalars['String']['output']
  node: AnyAction
}

export type ApiActionSuccessActionUpdateInput = {
  ApiAction?: InputMaybe<ApiActionSuccessActionApiActionUpdateFieldInput>
  CodeAction?: InputMaybe<ApiActionSuccessActionCodeActionUpdateFieldInput>
}

export type ApiActionUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ApiActionUpdateInput = {
  config?: InputMaybe<ApiActionConfigUpdateFieldInput>
  element?: InputMaybe<BaseActionElementUpdateFieldInput>
  errorAction?: InputMaybe<ApiActionErrorActionUpdateInput>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  resource?: InputMaybe<ApiActionResourceUpdateFieldInput>
  store?: InputMaybe<BaseActionStoreUpdateFieldInput>
  successAction?: InputMaybe<ApiActionSuccessActionUpdateInput>
}

export type ApiActionWhere = {
  AND?: InputMaybe<Array<ApiActionWhere>>
  NOT?: InputMaybe<ApiActionWhere>
  OR?: InputMaybe<Array<ApiActionWhere>>
  config?: InputMaybe<PropWhere>
  configAggregate?: InputMaybe<ApiActionConfigAggregateInput>
  configConnection?: InputMaybe<ApiActionConfigConnectionWhere>
  configConnection_NOT?: InputMaybe<ApiActionConfigConnectionWhere>
  config_NOT?: InputMaybe<PropWhere>
  element?: InputMaybe<ElementWhere>
  elementAggregate?: InputMaybe<ApiActionElementAggregateInput>
  elementConnection?: InputMaybe<BaseActionElementConnectionWhere>
  elementConnection_NOT?: InputMaybe<BaseActionElementConnectionWhere>
  element_NOT?: InputMaybe<ElementWhere>
  errorActionConnection?: InputMaybe<ApiActionErrorActionConnectionWhere>
  errorActionConnection_NOT?: InputMaybe<ApiActionErrorActionConnectionWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  resource?: InputMaybe<ResourceWhere>
  resourceAggregate?: InputMaybe<ApiActionResourceAggregateInput>
  resourceConnection?: InputMaybe<ApiActionResourceConnectionWhere>
  resourceConnection_NOT?: InputMaybe<ApiActionResourceConnectionWhere>
  resource_NOT?: InputMaybe<ResourceWhere>
  store?: InputMaybe<StoreWhere>
  storeAggregate?: InputMaybe<ApiActionStoreAggregateInput>
  storeConnection?: InputMaybe<BaseActionStoreConnectionWhere>
  storeConnection_NOT?: InputMaybe<BaseActionStoreConnectionWhere>
  store_NOT?: InputMaybe<StoreWhere>
  successActionConnection?: InputMaybe<ApiActionSuccessActionConnectionWhere>
  successActionConnection_NOT?: InputMaybe<ApiActionSuccessActionConnectionWhere>
  type?: InputMaybe<ActionKind>
  type_IN?: InputMaybe<Array<ActionKind>>
}

export type ApiActionsConnection = {
  __typename?: 'ApiActionsConnection'
  edges: Array<ApiActionEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type App = WithOwner & {
  __typename?: 'App'
  _compoundName: Scalars['String']['output']
  domains: Array<Domain>
  domainsAggregate?: Maybe<AppDomainDomainsAggregationSelection>
  domainsConnection: AppDomainsConnection
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<AppUserOwnerAggregationSelection>
  ownerConnection: WithOwnerOwnerConnection
  pages: Array<Page>
  pagesAggregate?: Maybe<AppPagePagesAggregationSelection>
  pagesConnection: AppPagesConnection
  slug: Scalars['String']['output']
}

export type AppDomainsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<DomainOptions>
  where?: InputMaybe<DomainWhere>
}

export type AppDomainsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<DomainWhere>
}

export type AppDomainsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<AppDomainsConnectionSort>>
  where?: InputMaybe<AppDomainsConnectionWhere>
}

export type AppOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type AppOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

export type AppOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<WithOwnerOwnerConnectionSort>>
  where?: InputMaybe<WithOwnerOwnerConnectionWhere>
}

export type AppPagesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}

export type AppPagesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PageWhere>
}

export type AppPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<AppPagesConnectionSort>>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppAggregateSelection = {
  __typename?: 'AppAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
}

export type AppConnectInput = {
  domains?: InputMaybe<Array<AppDomainsConnectFieldInput>>
  owner?: InputMaybe<WithOwnerOwnerConnectFieldInput>
  pages?: InputMaybe<Array<AppPagesConnectFieldInput>>
}

export type AppConnectOrCreateInput = {
  domains?: InputMaybe<Array<AppDomainsConnectOrCreateFieldInput>>
  owner?: InputMaybe<WithOwnerOwnerConnectOrCreateFieldInput>
  pages?: InputMaybe<Array<AppPagesConnectOrCreateFieldInput>>
}

export type AppConnectOrCreateWhere = {
  node: AppUniqueWhere
}

export type AppConnectWhere = {
  node: AppWhere
}

export type AppCreateInput = {
  _compoundName: Scalars['String']['input']
  domains?: InputMaybe<AppDomainsFieldInput>
  id: Scalars['ID']['input']
  owner?: InputMaybe<WithOwnerOwnerFieldInput>
  pages?: InputMaybe<AppPagesFieldInput>
}

export type AppDeleteInput = {
  domains?: InputMaybe<Array<AppDomainsDeleteFieldInput>>
  owner?: InputMaybe<WithOwnerOwnerDeleteFieldInput>
  pages?: InputMaybe<Array<AppPagesDeleteFieldInput>>
}

export type AppDisconnectInput = {
  domains?: InputMaybe<Array<AppDomainsDisconnectFieldInput>>
  owner?: InputMaybe<WithOwnerOwnerDisconnectFieldInput>
  pages?: InputMaybe<Array<AppPagesDisconnectFieldInput>>
}

export type AppDomainDomainsAggregationSelection = {
  __typename?: 'AppDomainDomainsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AppDomainDomainsNodeAggregateSelection>
}

export type AppDomainDomainsNodeAggregateSelection = {
  __typename?: 'AppDomainDomainsNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type AppDomainsAggregateInput = {
  AND?: InputMaybe<Array<AppDomainsAggregateInput>>
  NOT?: InputMaybe<AppDomainsAggregateInput>
  OR?: InputMaybe<Array<AppDomainsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AppDomainsNodeAggregationWhereInput>
}

export type AppDomainsConnectFieldInput = {
  connect?: InputMaybe<Array<DomainConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<DomainConnectWhere>
}

export type AppDomainsConnectOrCreateFieldInput = {
  onCreate: AppDomainsConnectOrCreateFieldInputOnCreate
  where: DomainConnectOrCreateWhere
}

export type AppDomainsConnectOrCreateFieldInputOnCreate = {
  node: DomainOnCreateInput
}

export type AppDomainsConnection = {
  __typename?: 'AppDomainsConnection'
  edges: Array<AppDomainsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AppDomainsConnectionSort = {
  node?: InputMaybe<DomainSort>
}

export type AppDomainsConnectionWhere = {
  AND?: InputMaybe<Array<AppDomainsConnectionWhere>>
  NOT?: InputMaybe<AppDomainsConnectionWhere>
  OR?: InputMaybe<Array<AppDomainsConnectionWhere>>
  node?: InputMaybe<DomainWhere>
}

export type AppDomainsCreateFieldInput = {
  node: DomainCreateInput
}

export type AppDomainsDeleteFieldInput = {
  delete?: InputMaybe<DomainDeleteInput>
  where?: InputMaybe<AppDomainsConnectionWhere>
}

export type AppDomainsDisconnectFieldInput = {
  disconnect?: InputMaybe<DomainDisconnectInput>
  where?: InputMaybe<AppDomainsConnectionWhere>
}

export type AppDomainsFieldInput = {
  connect?: InputMaybe<Array<AppDomainsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppDomainsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppDomainsCreateFieldInput>>
}

export type AppDomainsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AppDomainsNodeAggregationWhereInput>>
  NOT?: InputMaybe<AppDomainsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AppDomainsNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AppDomainsRelationship = {
  __typename?: 'AppDomainsRelationship'
  cursor: Scalars['String']['output']
  node: Domain
}

export type AppDomainsUpdateConnectionInput = {
  node?: InputMaybe<DomainUpdateInput>
}

export type AppDomainsUpdateFieldInput = {
  connect?: InputMaybe<Array<AppDomainsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppDomainsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppDomainsCreateFieldInput>>
  delete?: InputMaybe<Array<AppDomainsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<AppDomainsDisconnectFieldInput>>
  update?: InputMaybe<AppDomainsUpdateConnectionInput>
  where?: InputMaybe<AppDomainsConnectionWhere>
}

export type AppEdge = {
  __typename?: 'AppEdge'
  cursor: Scalars['String']['output']
  node: App
}

export type AppOnCreateInput = {
  _compoundName: Scalars['String']['input']
  id: Scalars['ID']['input']
}

export type AppOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more AppSort objects to sort Apps by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AppSort>>
}

export type AppOwnerAggregateInput = {
  AND?: InputMaybe<Array<AppOwnerAggregateInput>>
  NOT?: InputMaybe<AppOwnerAggregateInput>
  OR?: InputMaybe<Array<AppOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AppOwnerNodeAggregationWhereInput>
}

export type AppOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AppOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<AppOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AppOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AppPagePagesAggregationSelection = {
  __typename?: 'AppPagePagesAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AppPagePagesNodeAggregateSelection>
}

export type AppPagePagesNodeAggregateSelection = {
  __typename?: 'AppPagePagesNodeAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  url: StringAggregateSelectionNonNullable
}

export type AppPagesAggregateInput = {
  AND?: InputMaybe<Array<AppPagesAggregateInput>>
  NOT?: InputMaybe<AppPagesAggregateInput>
  OR?: InputMaybe<Array<AppPagesAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AppPagesNodeAggregationWhereInput>
}

export type AppPagesConnectFieldInput = {
  connect?: InputMaybe<Array<PageConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PageConnectWhere>
}

export type AppPagesConnectOrCreateFieldInput = {
  onCreate: AppPagesConnectOrCreateFieldInputOnCreate
  where: PageConnectOrCreateWhere
}

export type AppPagesConnectOrCreateFieldInputOnCreate = {
  node: PageOnCreateInput
}

export type AppPagesConnection = {
  __typename?: 'AppPagesConnection'
  edges: Array<AppPagesRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AppPagesConnectionSort = {
  node?: InputMaybe<PageSort>
}

export type AppPagesConnectionWhere = {
  AND?: InputMaybe<Array<AppPagesConnectionWhere>>
  NOT?: InputMaybe<AppPagesConnectionWhere>
  OR?: InputMaybe<Array<AppPagesConnectionWhere>>
  node?: InputMaybe<PageWhere>
}

export type AppPagesCreateFieldInput = {
  node: PageCreateInput
}

export type AppPagesDeleteFieldInput = {
  delete?: InputMaybe<PageDeleteInput>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppPagesDisconnectFieldInput = {
  disconnect?: InputMaybe<PageDisconnectInput>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppPagesFieldInput = {
  connect?: InputMaybe<Array<AppPagesConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppPagesConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppPagesCreateFieldInput>>
}

export type AppPagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AppPagesNodeAggregationWhereInput>>
  NOT?: InputMaybe<AppPagesNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AppPagesNodeAggregationWhereInput>>
  _compoundName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AppPagesRelationship = {
  __typename?: 'AppPagesRelationship'
  cursor: Scalars['String']['output']
  node: Page
}

export type AppPagesUpdateConnectionInput = {
  node?: InputMaybe<PageUpdateInput>
}

export type AppPagesUpdateFieldInput = {
  connect?: InputMaybe<Array<AppPagesConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AppPagesConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AppPagesCreateFieldInput>>
  delete?: InputMaybe<Array<AppPagesDeleteFieldInput>>
  disconnect?: InputMaybe<Array<AppPagesDisconnectFieldInput>>
  update?: InputMaybe<AppPagesUpdateConnectionInput>
  where?: InputMaybe<AppPagesConnectionWhere>
}

export type AppRelationInput = {
  domains?: InputMaybe<Array<AppDomainsCreateFieldInput>>
  owner?: InputMaybe<WithOwnerOwnerCreateFieldInput>
  pages?: InputMaybe<Array<AppPagesCreateFieldInput>>
}

/** Fields to sort Apps by. The order in which sorts are applied is not guaranteed when specifying many fields in one AppSort object. */
export type AppSort = {
  _compoundName?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
}

/** Allows picking a app from the list of apps */
export type AppType = IBaseType & {
  __typename?: 'AppType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<AppTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/** Allows picking a app from the list of apps */
export type AppTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a app from the list of apps */
export type AppTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a app from the list of apps */
export type AppTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type AppTypeAggregateSelection = {
  __typename?: 'AppTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type AppTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type AppTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type AppTypeConnectOrCreateWhere = {
  node: AppTypeUniqueWhere
}

export type AppTypeConnectWhere = {
  node: AppTypeWhere
}

export type AppTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type AppTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type AppTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type AppTypeEdge = {
  __typename?: 'AppTypeEdge'
  cursor: Scalars['String']['output']
  node: AppType
}

export type AppTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type AppTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more AppTypeSort objects to sort AppTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AppTypeSort>>
}

export type AppTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<AppTypeOwnerAggregateInput>>
  NOT?: InputMaybe<AppTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<AppTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AppTypeOwnerNodeAggregationWhereInput>
}

export type AppTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AppTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<AppTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AppTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AppTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort AppTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one AppTypeSort object. */
export type AppTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type AppTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type AppTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type AppTypeUserOwnerAggregationSelection = {
  __typename?: 'AppTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AppTypeUserOwnerNodeAggregateSelection>
}

export type AppTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'AppTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type AppTypeWhere = {
  AND?: InputMaybe<Array<AppTypeWhere>>
  NOT?: InputMaybe<AppTypeWhere>
  OR?: InputMaybe<Array<AppTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<AppTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type AppTypesConnection = {
  __typename?: 'AppTypesConnection'
  edges: Array<AppTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AppUniqueWhere = {
  _compoundName?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type AppUpdateInput = {
  _compoundName?: InputMaybe<Scalars['String']['input']>
  domains?: InputMaybe<Array<AppDomainsUpdateFieldInput>>
  id?: InputMaybe<Scalars['ID']['input']>
  owner?: InputMaybe<WithOwnerOwnerUpdateFieldInput>
  pages?: InputMaybe<Array<AppPagesUpdateFieldInput>>
}

export type AppUserOwnerAggregationSelection = {
  __typename?: 'AppUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AppUserOwnerNodeAggregateSelection>
}

export type AppUserOwnerNodeAggregateSelection = {
  __typename?: 'AppUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type AppWhere = {
  AND?: InputMaybe<Array<AppWhere>>
  NOT?: InputMaybe<AppWhere>
  OR?: InputMaybe<Array<AppWhere>>
  _compoundName?: InputMaybe<Scalars['String']['input']>
  _compoundName_CONTAINS?: InputMaybe<Scalars['String']['input']>
  _compoundName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  _compoundName_IN?: InputMaybe<Array<Scalars['String']['input']>>
  _compoundName_MATCHES?: InputMaybe<Scalars['String']['input']>
  _compoundName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  domainsAggregate?: InputMaybe<AppDomainsAggregateInput>
  /** Return Apps where all of the related AppDomainsConnections match this filter */
  domainsConnection_ALL?: InputMaybe<AppDomainsConnectionWhere>
  /** Return Apps where none of the related AppDomainsConnections match this filter */
  domainsConnection_NONE?: InputMaybe<AppDomainsConnectionWhere>
  /** Return Apps where one of the related AppDomainsConnections match this filter */
  domainsConnection_SINGLE?: InputMaybe<AppDomainsConnectionWhere>
  /** Return Apps where some of the related AppDomainsConnections match this filter */
  domainsConnection_SOME?: InputMaybe<AppDomainsConnectionWhere>
  /** Return Apps where all of the related Domains match this filter */
  domains_ALL?: InputMaybe<DomainWhere>
  /** Return Apps where none of the related Domains match this filter */
  domains_NONE?: InputMaybe<DomainWhere>
  /** Return Apps where one of the related Domains match this filter */
  domains_SINGLE?: InputMaybe<DomainWhere>
  /** Return Apps where some of the related Domains match this filter */
  domains_SOME?: InputMaybe<DomainWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<AppOwnerAggregateInput>
  ownerConnection?: InputMaybe<WithOwnerOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<WithOwnerOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  pagesAggregate?: InputMaybe<AppPagesAggregateInput>
  /** Return Apps where all of the related AppPagesConnections match this filter */
  pagesConnection_ALL?: InputMaybe<AppPagesConnectionWhere>
  /** Return Apps where none of the related AppPagesConnections match this filter */
  pagesConnection_NONE?: InputMaybe<AppPagesConnectionWhere>
  /** Return Apps where one of the related AppPagesConnections match this filter */
  pagesConnection_SINGLE?: InputMaybe<AppPagesConnectionWhere>
  /** Return Apps where some of the related AppPagesConnections match this filter */
  pagesConnection_SOME?: InputMaybe<AppPagesConnectionWhere>
  /** Return Apps where all of the related Pages match this filter */
  pages_ALL?: InputMaybe<PageWhere>
  /** Return Apps where none of the related Pages match this filter */
  pages_NONE?: InputMaybe<PageWhere>
  /** Return Apps where one of the related Pages match this filter */
  pages_SINGLE?: InputMaybe<PageWhere>
  /** Return Apps where some of the related Pages match this filter */
  pages_SOME?: InputMaybe<PageWhere>
}

export type AppsConnection = {
  __typename?: 'AppsConnection'
  edges: Array<AppEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayType = IBaseType &
  WithDescendants & {
    __typename?: 'ArrayType'
    descendantTypesIds: Array<Scalars['ID']['output']>
    fieldRefs: Array<Field>
    fieldRefsAggregate?: Maybe<ArrayTypeFieldFieldRefsAggregationSelection>
    fieldRefsConnection: ArrayTypeFieldRefsConnection
    id: Scalars['ID']['output']
    itemType: IBaseType
    itemTypeConnection: ArrayTypeItemTypeConnection
    kind: TypeKind
    name: Scalars['String']['output']
    owner: User
    ownerAggregate?: Maybe<ArrayTypeUserOwnerAggregationSelection>
    ownerConnection: IBaseTypeOwnerConnection
  }

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeFieldRefsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<FieldOptions>
  where?: InputMaybe<FieldWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeFieldRefsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FieldWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeFieldRefsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ArrayTypeFieldRefsConnectionSort>>
  where?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeItemTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<IBaseTypeOptions>
  where?: InputMaybe<IBaseTypeWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeItemTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ArrayTypeItemTypeConnectionSort>>
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/**
 * ArrayType Allows defining a variable number of items of a given type.
 * Contains a reference to another type which is the array item type.
 */
export type ArrayTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type ArrayTypeAggregateSelection = {
  __typename?: 'ArrayTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ArrayTypeConnectInput = {
  fieldRefs?: InputMaybe<Array<ArrayTypeFieldRefsConnectFieldInput>>
  itemType?: InputMaybe<ArrayTypeItemTypeConnectFieldInput>
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type ArrayTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type ArrayTypeConnectOrCreateWhere = {
  node: ArrayTypeUniqueWhere
}

export type ArrayTypeConnectWhere = {
  node: ArrayTypeWhere
}

export type ArrayTypeCreateInput = {
  fieldRefs?: InputMaybe<ArrayTypeFieldRefsFieldInput>
  id: Scalars['ID']['input']
  itemType?: InputMaybe<ArrayTypeItemTypeFieldInput>
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type ArrayTypeDeleteInput = {
  fieldRefs?: InputMaybe<Array<ArrayTypeFieldRefsDeleteFieldInput>>
  itemType?: InputMaybe<ArrayTypeItemTypeDeleteFieldInput>
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type ArrayTypeDisconnectInput = {
  fieldRefs?: InputMaybe<Array<ArrayTypeFieldRefsDisconnectFieldInput>>
  itemType?: InputMaybe<ArrayTypeItemTypeDisconnectFieldInput>
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type ArrayTypeEdge = {
  __typename?: 'ArrayTypeEdge'
  cursor: Scalars['String']['output']
  node: ArrayType
}

export type ArrayTypeFieldFieldRefsAggregationSelection = {
  __typename?: 'ArrayTypeFieldFieldRefsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ArrayTypeFieldFieldRefsNodeAggregateSelection>
}

export type ArrayTypeFieldFieldRefsNodeAggregateSelection = {
  __typename?: 'ArrayTypeFieldFieldRefsNodeAggregateSelection'
  defaultValues: StringAggregateSelectionNullable
  description: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNullable
  validationRules: StringAggregateSelectionNullable
}

export type ArrayTypeFieldRefsAggregateInput = {
  AND?: InputMaybe<Array<ArrayTypeFieldRefsAggregateInput>>
  NOT?: InputMaybe<ArrayTypeFieldRefsAggregateInput>
  OR?: InputMaybe<Array<ArrayTypeFieldRefsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ArrayTypeFieldRefsNodeAggregationWhereInput>
}

export type ArrayTypeFieldRefsConnectFieldInput = {
  connect?: InputMaybe<Array<FieldConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<FieldConnectWhere>
}

export type ArrayTypeFieldRefsConnection = {
  __typename?: 'ArrayTypeFieldRefsConnection'
  edges: Array<ArrayTypeFieldRefsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ArrayTypeFieldRefsConnectionSort = {
  node?: InputMaybe<FieldSort>
}

export type ArrayTypeFieldRefsConnectionWhere = {
  AND?: InputMaybe<Array<ArrayTypeFieldRefsConnectionWhere>>
  NOT?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
  OR?: InputMaybe<Array<ArrayTypeFieldRefsConnectionWhere>>
  node?: InputMaybe<FieldWhere>
}

export type ArrayTypeFieldRefsCreateFieldInput = {
  node: FieldCreateInput
}

export type ArrayTypeFieldRefsDeleteFieldInput = {
  delete?: InputMaybe<FieldDeleteInput>
  where?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
}

export type ArrayTypeFieldRefsDisconnectFieldInput = {
  disconnect?: InputMaybe<FieldDisconnectInput>
  where?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
}

export type ArrayTypeFieldRefsFieldInput = {
  connect?: InputMaybe<Array<ArrayTypeFieldRefsConnectFieldInput>>
  create?: InputMaybe<Array<ArrayTypeFieldRefsCreateFieldInput>>
}

export type ArrayTypeFieldRefsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrayTypeFieldRefsNodeAggregationWhereInput>>
  NOT?: InputMaybe<ArrayTypeFieldRefsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ArrayTypeFieldRefsNodeAggregationWhereInput>>
  defaultValues_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  key_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ArrayTypeFieldRefsRelationship = {
  __typename?: 'ArrayTypeFieldRefsRelationship'
  cursor: Scalars['String']['output']
  node: Field
}

export type ArrayTypeFieldRefsUpdateConnectionInput = {
  node?: InputMaybe<FieldUpdateInput>
}

export type ArrayTypeFieldRefsUpdateFieldInput = {
  connect?: InputMaybe<Array<ArrayTypeFieldRefsConnectFieldInput>>
  create?: InputMaybe<Array<ArrayTypeFieldRefsCreateFieldInput>>
  delete?: InputMaybe<Array<ArrayTypeFieldRefsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<ArrayTypeFieldRefsDisconnectFieldInput>>
  update?: InputMaybe<ArrayTypeFieldRefsUpdateConnectionInput>
  where?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
}

export type ArrayTypeItemTypeConnectFieldInput = {
  connect?: InputMaybe<IBaseTypeConnectInput>
  where?: InputMaybe<IBaseTypeConnectWhere>
}

export type ArrayTypeItemTypeConnection = {
  __typename?: 'ArrayTypeItemTypeConnection'
  edges: Array<ArrayTypeItemTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ArrayTypeItemTypeConnectionSort = {
  node?: InputMaybe<IBaseTypeSort>
}

export type ArrayTypeItemTypeConnectionWhere = {
  AND?: InputMaybe<Array<ArrayTypeItemTypeConnectionWhere>>
  NOT?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
  OR?: InputMaybe<Array<ArrayTypeItemTypeConnectionWhere>>
  node?: InputMaybe<IBaseTypeWhere>
}

export type ArrayTypeItemTypeCreateFieldInput = {
  node: IBaseTypeCreateInput
}

export type ArrayTypeItemTypeDeleteFieldInput = {
  delete?: InputMaybe<IBaseTypeDeleteInput>
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

export type ArrayTypeItemTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<IBaseTypeDisconnectInput>
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

export type ArrayTypeItemTypeFieldInput = {
  connect?: InputMaybe<ArrayTypeItemTypeConnectFieldInput>
  create?: InputMaybe<ArrayTypeItemTypeCreateFieldInput>
}

export type ArrayTypeItemTypeRelationship = {
  __typename?: 'ArrayTypeItemTypeRelationship'
  cursor: Scalars['String']['output']
  node: IBaseType
}

export type ArrayTypeItemTypeUpdateConnectionInput = {
  node?: InputMaybe<IBaseTypeUpdateInput>
}

export type ArrayTypeItemTypeUpdateFieldInput = {
  connect?: InputMaybe<ArrayTypeItemTypeConnectFieldInput>
  create?: InputMaybe<ArrayTypeItemTypeCreateFieldInput>
  delete?: InputMaybe<ArrayTypeItemTypeDeleteFieldInput>
  disconnect?: InputMaybe<ArrayTypeItemTypeDisconnectFieldInput>
  update?: InputMaybe<ArrayTypeItemTypeUpdateConnectionInput>
  where?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
}

export type ArrayTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type ArrayTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ArrayTypeSort objects to sort ArrayTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ArrayTypeSort>>
}

export type ArrayTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<ArrayTypeOwnerAggregateInput>>
  NOT?: InputMaybe<ArrayTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<ArrayTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ArrayTypeOwnerNodeAggregationWhereInput>
}

export type ArrayTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrayTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<ArrayTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ArrayTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ArrayTypeRelationInput = {
  fieldRefs?: InputMaybe<Array<ArrayTypeFieldRefsCreateFieldInput>>
  itemType?: InputMaybe<ArrayTypeItemTypeCreateFieldInput>
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort ArrayTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArrayTypeSort object. */
export type ArrayTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ArrayTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ArrayTypeUpdateInput = {
  fieldRefs?: InputMaybe<Array<ArrayTypeFieldRefsUpdateFieldInput>>
  id?: InputMaybe<Scalars['ID']['input']>
  itemType?: InputMaybe<ArrayTypeItemTypeUpdateFieldInput>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type ArrayTypeUserOwnerAggregationSelection = {
  __typename?: 'ArrayTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ArrayTypeUserOwnerNodeAggregateSelection>
}

export type ArrayTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'ArrayTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type ArrayTypeWhere = {
  AND?: InputMaybe<Array<ArrayTypeWhere>>
  NOT?: InputMaybe<ArrayTypeWhere>
  OR?: InputMaybe<Array<ArrayTypeWhere>>
  fieldRefsAggregate?: InputMaybe<ArrayTypeFieldRefsAggregateInput>
  /** Return ArrayTypes where all of the related ArrayTypeFieldRefsConnections match this filter */
  fieldRefsConnection_ALL?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
  /** Return ArrayTypes where none of the related ArrayTypeFieldRefsConnections match this filter */
  fieldRefsConnection_NONE?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
  /** Return ArrayTypes where one of the related ArrayTypeFieldRefsConnections match this filter */
  fieldRefsConnection_SINGLE?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
  /** Return ArrayTypes where some of the related ArrayTypeFieldRefsConnections match this filter */
  fieldRefsConnection_SOME?: InputMaybe<ArrayTypeFieldRefsConnectionWhere>
  /** Return ArrayTypes where all of the related Fields match this filter */
  fieldRefs_ALL?: InputMaybe<FieldWhere>
  /** Return ArrayTypes where none of the related Fields match this filter */
  fieldRefs_NONE?: InputMaybe<FieldWhere>
  /** Return ArrayTypes where one of the related Fields match this filter */
  fieldRefs_SINGLE?: InputMaybe<FieldWhere>
  /** Return ArrayTypes where some of the related Fields match this filter */
  fieldRefs_SOME?: InputMaybe<FieldWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  itemTypeConnection?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
  itemTypeConnection_NOT?: InputMaybe<ArrayTypeItemTypeConnectionWhere>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ArrayTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type ArrayTypesConnection = {
  __typename?: 'ArrayTypesConnection'
  edges: Array<ArrayTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Atom = WithOwner & {
  __typename?: 'Atom'
  api: InterfaceType
  apiAggregate?: Maybe<AtomInterfaceTypeApiAggregationSelection>
  apiConnection: AtomApiConnection
  externalCssSource?: Maybe<Scalars['String']['output']>
  externalJsSource?: Maybe<Scalars['String']['output']>
  externalSourceType?: Maybe<Scalars['String']['output']>
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<AtomUserOwnerAggregationSelection>
  ownerConnection: WithOwnerOwnerConnection
  requiredParents: Array<Atom>
  requiredParentsAggregate?: Maybe<AtomAtomRequiredParentsAggregationSelection>
  requiredParentsConnection: AtomRequiredParentsConnection
  suggestedChildren: Array<Atom>
  suggestedChildrenAggregate?: Maybe<AtomAtomSuggestedChildrenAggregationSelection>
  suggestedChildrenConnection: AtomSuggestedChildrenConnection
  tags: Array<Tag>
  tagsAggregate?: Maybe<AtomTagTagsAggregationSelection>
  tagsConnection: AtomTagsConnection
  type: AtomType
}

export type AtomApiArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type AtomApiAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type AtomApiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<AtomApiConnectionSort>>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type AtomOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

export type AtomOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<WithOwnerOwnerConnectionSort>>
  where?: InputMaybe<WithOwnerOwnerConnectionWhere>
}

export type AtomRequiredParentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

export type AtomRequiredParentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AtomWhere>
}

export type AtomRequiredParentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<AtomRequiredParentsConnectionSort>>
  where?: InputMaybe<AtomRequiredParentsConnectionWhere>
}

export type AtomSuggestedChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

export type AtomSuggestedChildrenAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AtomWhere>
}

export type AtomSuggestedChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<AtomSuggestedChildrenConnectionSort>>
  where?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
}

export type AtomTagsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type AtomTagsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<TagWhere>
}

export type AtomTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<AtomTagsConnectionSort>>
  where?: InputMaybe<AtomTagsConnectionWhere>
}

export type AtomAggregateSelection = {
  __typename?: 'AtomAggregateSelection'
  count: Scalars['Int']['output']
  externalCssSource: StringAggregateSelectionNullable
  externalJsSource: StringAggregateSelectionNullable
  externalSourceType: StringAggregateSelectionNullable
  icon: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type AtomApiAggregateInput = {
  AND?: InputMaybe<Array<AtomApiAggregateInput>>
  NOT?: InputMaybe<AtomApiAggregateInput>
  OR?: InputMaybe<Array<AtomApiAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AtomApiNodeAggregationWhereInput>
}

export type AtomApiConnectFieldInput = {
  connect?: InputMaybe<InterfaceTypeConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<InterfaceTypeConnectWhere>
}

export type AtomApiConnectOrCreateFieldInput = {
  onCreate: AtomApiConnectOrCreateFieldInputOnCreate
  where: InterfaceTypeConnectOrCreateWhere
}

export type AtomApiConnectOrCreateFieldInputOnCreate = {
  node: InterfaceTypeOnCreateInput
}

export type AtomApiConnection = {
  __typename?: 'AtomApiConnection'
  edges: Array<AtomApiRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AtomApiConnectionSort = {
  node?: InputMaybe<InterfaceTypeSort>
}

export type AtomApiConnectionWhere = {
  AND?: InputMaybe<Array<AtomApiConnectionWhere>>
  NOT?: InputMaybe<AtomApiConnectionWhere>
  OR?: InputMaybe<Array<AtomApiConnectionWhere>>
  node?: InputMaybe<InterfaceTypeWhere>
}

export type AtomApiCreateFieldInput = {
  node: InterfaceTypeCreateInput
}

export type AtomApiDeleteFieldInput = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomApiDisconnectFieldInput = {
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomApiFieldInput = {
  connect?: InputMaybe<AtomApiConnectFieldInput>
  connectOrCreate?: InputMaybe<AtomApiConnectOrCreateFieldInput>
  create?: InputMaybe<AtomApiCreateFieldInput>
}

export type AtomApiNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AtomApiNodeAggregationWhereInput>>
  NOT?: InputMaybe<AtomApiNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AtomApiNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AtomApiRelationship = {
  __typename?: 'AtomApiRelationship'
  cursor: Scalars['String']['output']
  node: InterfaceType
}

export type AtomApiUpdateConnectionInput = {
  node?: InputMaybe<InterfaceTypeUpdateInput>
}

export type AtomApiUpdateFieldInput = {
  connect?: InputMaybe<AtomApiConnectFieldInput>
  connectOrCreate?: InputMaybe<AtomApiConnectOrCreateFieldInput>
  create?: InputMaybe<AtomApiCreateFieldInput>
  delete?: InputMaybe<AtomApiDeleteFieldInput>
  disconnect?: InputMaybe<AtomApiDisconnectFieldInput>
  update?: InputMaybe<AtomApiUpdateConnectionInput>
  where?: InputMaybe<AtomApiConnectionWhere>
}

export type AtomAtomRequiredParentsAggregationSelection = {
  __typename?: 'AtomAtomRequiredParentsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AtomAtomRequiredParentsNodeAggregateSelection>
}

export type AtomAtomRequiredParentsNodeAggregateSelection = {
  __typename?: 'AtomAtomRequiredParentsNodeAggregateSelection'
  externalCssSource: StringAggregateSelectionNullable
  externalJsSource: StringAggregateSelectionNullable
  externalSourceType: StringAggregateSelectionNullable
  icon: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type AtomAtomSuggestedChildrenAggregationSelection = {
  __typename?: 'AtomAtomSuggestedChildrenAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AtomAtomSuggestedChildrenNodeAggregateSelection>
}

export type AtomAtomSuggestedChildrenNodeAggregateSelection = {
  __typename?: 'AtomAtomSuggestedChildrenNodeAggregateSelection'
  externalCssSource: StringAggregateSelectionNullable
  externalJsSource: StringAggregateSelectionNullable
  externalSourceType: StringAggregateSelectionNullable
  icon: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type AtomConnectInput = {
  api?: InputMaybe<AtomApiConnectFieldInput>
  owner?: InputMaybe<WithOwnerOwnerConnectFieldInput>
  requiredParents?: InputMaybe<Array<AtomRequiredParentsConnectFieldInput>>
  suggestedChildren?: InputMaybe<Array<AtomSuggestedChildrenConnectFieldInput>>
  tags?: InputMaybe<Array<AtomTagsConnectFieldInput>>
}

export type AtomConnectOrCreateInput = {
  api?: InputMaybe<AtomApiConnectOrCreateFieldInput>
  owner?: InputMaybe<WithOwnerOwnerConnectOrCreateFieldInput>
  requiredParents?: InputMaybe<
    Array<AtomRequiredParentsConnectOrCreateFieldInput>
  >
  suggestedChildren?: InputMaybe<
    Array<AtomSuggestedChildrenConnectOrCreateFieldInput>
  >
  tags?: InputMaybe<Array<AtomTagsConnectOrCreateFieldInput>>
}

export type AtomConnectOrCreateWhere = {
  node: AtomUniqueWhere
}

export type AtomConnectWhere = {
  node: AtomWhere
}

export type AtomCreateInput = {
  api?: InputMaybe<AtomApiFieldInput>
  externalCssSource?: InputMaybe<Scalars['String']['input']>
  externalJsSource?: InputMaybe<Scalars['String']['input']>
  externalSourceType?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  owner?: InputMaybe<WithOwnerOwnerFieldInput>
  requiredParents?: InputMaybe<AtomRequiredParentsFieldInput>
  suggestedChildren?: InputMaybe<AtomSuggestedChildrenFieldInput>
  tags?: InputMaybe<AtomTagsFieldInput>
  type: AtomType
}

export type AtomDeleteInput = {
  api?: InputMaybe<AtomApiDeleteFieldInput>
  owner?: InputMaybe<WithOwnerOwnerDeleteFieldInput>
  requiredParents?: InputMaybe<Array<AtomRequiredParentsDeleteFieldInput>>
  suggestedChildren?: InputMaybe<Array<AtomSuggestedChildrenDeleteFieldInput>>
  tags?: InputMaybe<Array<AtomTagsDeleteFieldInput>>
}

export type AtomDisconnectInput = {
  api?: InputMaybe<AtomApiDisconnectFieldInput>
  owner?: InputMaybe<WithOwnerOwnerDisconnectFieldInput>
  requiredParents?: InputMaybe<Array<AtomRequiredParentsDisconnectFieldInput>>
  suggestedChildren?: InputMaybe<
    Array<AtomSuggestedChildrenDisconnectFieldInput>
  >
  tags?: InputMaybe<Array<AtomTagsDisconnectFieldInput>>
}

export type AtomEdge = {
  __typename?: 'AtomEdge'
  cursor: Scalars['String']['output']
  node: Atom
}

export type AtomInterfaceTypeApiAggregationSelection = {
  __typename?: 'AtomInterfaceTypeApiAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AtomInterfaceTypeApiNodeAggregateSelection>
}

export type AtomInterfaceTypeApiNodeAggregateSelection = {
  __typename?: 'AtomInterfaceTypeApiNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type AtomOnCreateInput = {
  externalCssSource?: InputMaybe<Scalars['String']['input']>
  externalJsSource?: InputMaybe<Scalars['String']['input']>
  externalSourceType?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  type: AtomType
}

export type AtomOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more AtomSort objects to sort Atoms by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AtomSort>>
}

export type AtomOwnerAggregateInput = {
  AND?: InputMaybe<Array<AtomOwnerAggregateInput>>
  NOT?: InputMaybe<AtomOwnerAggregateInput>
  OR?: InputMaybe<Array<AtomOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AtomOwnerNodeAggregationWhereInput>
}

export type AtomOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AtomOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<AtomOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AtomOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AtomRelationInput = {
  api?: InputMaybe<AtomApiCreateFieldInput>
  owner?: InputMaybe<WithOwnerOwnerCreateFieldInput>
  requiredParents?: InputMaybe<Array<AtomRequiredParentsCreateFieldInput>>
  suggestedChildren?: InputMaybe<Array<AtomSuggestedChildrenCreateFieldInput>>
  tags?: InputMaybe<Array<AtomTagsCreateFieldInput>>
}

export type AtomRequiredParentsAggregateInput = {
  AND?: InputMaybe<Array<AtomRequiredParentsAggregateInput>>
  NOT?: InputMaybe<AtomRequiredParentsAggregateInput>
  OR?: InputMaybe<Array<AtomRequiredParentsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AtomRequiredParentsNodeAggregationWhereInput>
}

export type AtomRequiredParentsConnectFieldInput = {
  connect?: InputMaybe<Array<AtomConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AtomConnectWhere>
}

export type AtomRequiredParentsConnectOrCreateFieldInput = {
  onCreate: AtomRequiredParentsConnectOrCreateFieldInputOnCreate
  where: AtomConnectOrCreateWhere
}

export type AtomRequiredParentsConnectOrCreateFieldInputOnCreate = {
  node: AtomOnCreateInput
}

export type AtomRequiredParentsConnection = {
  __typename?: 'AtomRequiredParentsConnection'
  edges: Array<AtomRequiredParentsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AtomRequiredParentsConnectionSort = {
  node?: InputMaybe<AtomSort>
}

export type AtomRequiredParentsConnectionWhere = {
  AND?: InputMaybe<Array<AtomRequiredParentsConnectionWhere>>
  NOT?: InputMaybe<AtomRequiredParentsConnectionWhere>
  OR?: InputMaybe<Array<AtomRequiredParentsConnectionWhere>>
  node?: InputMaybe<AtomWhere>
}

export type AtomRequiredParentsCreateFieldInput = {
  node: AtomCreateInput
}

export type AtomRequiredParentsDeleteFieldInput = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<AtomRequiredParentsConnectionWhere>
}

export type AtomRequiredParentsDisconnectFieldInput = {
  disconnect?: InputMaybe<AtomDisconnectInput>
  where?: InputMaybe<AtomRequiredParentsConnectionWhere>
}

export type AtomRequiredParentsFieldInput = {
  connect?: InputMaybe<Array<AtomRequiredParentsConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<AtomRequiredParentsConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<AtomRequiredParentsCreateFieldInput>>
}

export type AtomRequiredParentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AtomRequiredParentsNodeAggregationWhereInput>>
  NOT?: InputMaybe<AtomRequiredParentsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AtomRequiredParentsNodeAggregationWhereInput>>
  externalCssSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  externalSourceType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AtomRequiredParentsRelationship = {
  __typename?: 'AtomRequiredParentsRelationship'
  cursor: Scalars['String']['output']
  node: Atom
}

export type AtomRequiredParentsUpdateConnectionInput = {
  node?: InputMaybe<AtomUpdateInput>
}

export type AtomRequiredParentsUpdateFieldInput = {
  connect?: InputMaybe<Array<AtomRequiredParentsConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<AtomRequiredParentsConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<AtomRequiredParentsCreateFieldInput>>
  delete?: InputMaybe<Array<AtomRequiredParentsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<AtomRequiredParentsDisconnectFieldInput>>
  update?: InputMaybe<AtomRequiredParentsUpdateConnectionInput>
  where?: InputMaybe<AtomRequiredParentsConnectionWhere>
}

/** Fields to sort Atoms by. The order in which sorts are applied is not guaranteed when specifying many fields in one AtomSort object. */
export type AtomSort = {
  externalCssSource?: InputMaybe<SortDirection>
  externalJsSource?: InputMaybe<SortDirection>
  externalSourceType?: InputMaybe<SortDirection>
  icon?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  type?: InputMaybe<SortDirection>
}

export type AtomSuggestedChildrenAggregateInput = {
  AND?: InputMaybe<Array<AtomSuggestedChildrenAggregateInput>>
  NOT?: InputMaybe<AtomSuggestedChildrenAggregateInput>
  OR?: InputMaybe<Array<AtomSuggestedChildrenAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AtomSuggestedChildrenNodeAggregationWhereInput>
}

export type AtomSuggestedChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<AtomConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AtomConnectWhere>
}

export type AtomSuggestedChildrenConnectOrCreateFieldInput = {
  onCreate: AtomSuggestedChildrenConnectOrCreateFieldInputOnCreate
  where: AtomConnectOrCreateWhere
}

export type AtomSuggestedChildrenConnectOrCreateFieldInputOnCreate = {
  node: AtomOnCreateInput
}

export type AtomSuggestedChildrenConnection = {
  __typename?: 'AtomSuggestedChildrenConnection'
  edges: Array<AtomSuggestedChildrenRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AtomSuggestedChildrenConnectionSort = {
  node?: InputMaybe<AtomSort>
}

export type AtomSuggestedChildrenConnectionWhere = {
  AND?: InputMaybe<Array<AtomSuggestedChildrenConnectionWhere>>
  NOT?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
  OR?: InputMaybe<Array<AtomSuggestedChildrenConnectionWhere>>
  node?: InputMaybe<AtomWhere>
}

export type AtomSuggestedChildrenCreateFieldInput = {
  node: AtomCreateInput
}

export type AtomSuggestedChildrenDeleteFieldInput = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
}

export type AtomSuggestedChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<AtomDisconnectInput>
  where?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
}

export type AtomSuggestedChildrenFieldInput = {
  connect?: InputMaybe<Array<AtomSuggestedChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<AtomSuggestedChildrenConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<AtomSuggestedChildrenCreateFieldInput>>
}

export type AtomSuggestedChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AtomSuggestedChildrenNodeAggregationWhereInput>>
  NOT?: InputMaybe<AtomSuggestedChildrenNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AtomSuggestedChildrenNodeAggregationWhereInput>>
  externalCssSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  externalSourceType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AtomSuggestedChildrenRelationship = {
  __typename?: 'AtomSuggestedChildrenRelationship'
  cursor: Scalars['String']['output']
  node: Atom
}

export type AtomSuggestedChildrenUpdateConnectionInput = {
  node?: InputMaybe<AtomUpdateInput>
}

export type AtomSuggestedChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<AtomSuggestedChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<AtomSuggestedChildrenConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<AtomSuggestedChildrenCreateFieldInput>>
  delete?: InputMaybe<Array<AtomSuggestedChildrenDeleteFieldInput>>
  disconnect?: InputMaybe<Array<AtomSuggestedChildrenDisconnectFieldInput>>
  update?: InputMaybe<AtomSuggestedChildrenUpdateConnectionInput>
  where?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
}

export type AtomTagTagsAggregationSelection = {
  __typename?: 'AtomTagTagsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AtomTagTagsNodeAggregateSelection>
}

export type AtomTagTagsNodeAggregateSelection = {
  __typename?: 'AtomTagTagsNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type AtomTagsAggregateInput = {
  AND?: InputMaybe<Array<AtomTagsAggregateInput>>
  NOT?: InputMaybe<AtomTagsAggregateInput>
  OR?: InputMaybe<Array<AtomTagsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<AtomTagsNodeAggregationWhereInput>
}

export type AtomTagsConnectFieldInput = {
  connect?: InputMaybe<Array<TagConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<TagConnectWhere>
}

export type AtomTagsConnectOrCreateFieldInput = {
  onCreate: AtomTagsConnectOrCreateFieldInputOnCreate
  where: TagConnectOrCreateWhere
}

export type AtomTagsConnectOrCreateFieldInputOnCreate = {
  node: TagOnCreateInput
}

export type AtomTagsConnection = {
  __typename?: 'AtomTagsConnection'
  edges: Array<AtomTagsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type AtomTagsConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type AtomTagsConnectionWhere = {
  AND?: InputMaybe<Array<AtomTagsConnectionWhere>>
  NOT?: InputMaybe<AtomTagsConnectionWhere>
  OR?: InputMaybe<Array<AtomTagsConnectionWhere>>
  node?: InputMaybe<TagWhere>
}

export type AtomTagsCreateFieldInput = {
  node: TagCreateInput
}

export type AtomTagsDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<AtomTagsConnectionWhere>
}

export type AtomTagsDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>
  where?: InputMaybe<AtomTagsConnectionWhere>
}

export type AtomTagsFieldInput = {
  connect?: InputMaybe<Array<AtomTagsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AtomTagsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AtomTagsCreateFieldInput>>
}

export type AtomTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AtomTagsNodeAggregationWhereInput>>
  NOT?: InputMaybe<AtomTagsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<AtomTagsNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type AtomTagsRelationship = {
  __typename?: 'AtomTagsRelationship'
  cursor: Scalars['String']['output']
  node: Tag
}

export type AtomTagsUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type AtomTagsUpdateFieldInput = {
  connect?: InputMaybe<Array<AtomTagsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<AtomTagsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<AtomTagsCreateFieldInput>>
  delete?: InputMaybe<Array<AtomTagsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<AtomTagsDisconnectFieldInput>>
  update?: InputMaybe<AtomTagsUpdateConnectionInput>
  where?: InputMaybe<AtomTagsConnectionWhere>
}

export enum AtomType {
  AntDesignAffix = 'AntDesignAffix',
  AntDesignAlert = 'AntDesignAlert',
  AntDesignAnchor = 'AntDesignAnchor',
  AntDesignAnchorLink = 'AntDesignAnchorLink',
  AntDesignAutoComplete = 'AntDesignAutoComplete',
  AntDesignAvatar = 'AntDesignAvatar',
  AntDesignBackTop = 'AntDesignBackTop',
  AntDesignBadge = 'AntDesignBadge',
  AntDesignBreadcrumb = 'AntDesignBreadcrumb',
  AntDesignBreadcrumbItem = 'AntDesignBreadcrumbItem',
  AntDesignBreadcrumbSeparator = 'AntDesignBreadcrumbSeparator',
  AntDesignButton = 'AntDesignButton',
  AntDesignCalendar = 'AntDesignCalendar',
  AntDesignCard = 'AntDesignCard',
  AntDesignCardGrid = 'AntDesignCardGrid',
  AntDesignCardMeta = 'AntDesignCardMeta',
  AntDesignCarousel = 'AntDesignCarousel',
  AntDesignCascader = 'AntDesignCascader',
  AntDesignCheckbox = 'AntDesignCheckbox',
  AntDesignCheckboxGroup = 'AntDesignCheckboxGroup',
  AntDesignCollapse = 'AntDesignCollapse',
  AntDesignCollapsePanel = 'AntDesignCollapsePanel',
  AntDesignComment = 'AntDesignComment',
  AntDesignConfigProvider = 'AntDesignConfigProvider',
  AntDesignDatePicker = 'AntDesignDatePicker',
  AntDesignDescriptions = 'AntDesignDescriptions',
  AntDesignDescriptionsItem = 'AntDesignDescriptionsItem',
  AntDesignDivider = 'AntDesignDivider',
  AntDesignDrawer = 'AntDesignDrawer',
  AntDesignDropdown = 'AntDesignDropdown',
  AntDesignDropdownButton = 'AntDesignDropdownButton',
  AntDesignEmpty = 'AntDesignEmpty',
  AntDesignForm = 'AntDesignForm',
  AntDesignFormErrorList = 'AntDesignFormErrorList',
  AntDesignFormItem = 'AntDesignFormItem',
  AntDesignFormList = 'AntDesignFormList',
  AntDesignFormProvider = 'AntDesignFormProvider',
  AntDesignGridCol = 'AntDesignGridCol',
  AntDesignGridRow = 'AntDesignGridRow',
  AntDesignIcon = 'AntDesignIcon',
  AntDesignImage = 'AntDesignImage',
  AntDesignInput = 'AntDesignInput',
  AntDesignInputNumber = 'AntDesignInputNumber',
  AntDesignLayout = 'AntDesignLayout',
  AntDesignLayoutContent = 'AntDesignLayoutContent',
  AntDesignLayoutFooter = 'AntDesignLayoutFooter',
  AntDesignLayoutHeader = 'AntDesignLayoutHeader',
  AntDesignLayoutSider = 'AntDesignLayoutSider',
  AntDesignList = 'AntDesignList',
  AntDesignListItem = 'AntDesignListItem',
  AntDesignListItemMeta = 'AntDesignListItemMeta',
  AntDesignMentions = 'AntDesignMentions',
  AntDesignMentionsOption = 'AntDesignMentionsOption',
  AntDesignMenu = 'AntDesignMenu',
  AntDesignMessage = 'AntDesignMessage',
  AntDesignModal = 'AntDesignModal',
  AntDesignNotification = 'AntDesignNotification',
  AntDesignPagination = 'AntDesignPagination',
  AntDesignPopconfirm = 'AntDesignPopconfirm',
  AntDesignPopover = 'AntDesignPopover',
  AntDesignProgress = 'AntDesignProgress',
  AntDesignRadio = 'AntDesignRadio',
  AntDesignRadioGroup = 'AntDesignRadioGroup',
  AntDesignRate = 'AntDesignRate',
  AntDesignResult = 'AntDesignResult',
  AntDesignSegmented = 'AntDesignSegmented',
  AntDesignSelect = 'AntDesignSelect',
  AntDesignSelectOption = 'AntDesignSelectOption',
  AntDesignSkeleton = 'AntDesignSkeleton',
  AntDesignSlider = 'AntDesignSlider',
  AntDesignSpace = 'AntDesignSpace',
  AntDesignSpin = 'AntDesignSpin',
  AntDesignStatistic = 'AntDesignStatistic',
  AntDesignSteps = 'AntDesignSteps',
  AntDesignStepsStep = 'AntDesignStepsStep',
  AntDesignSwitch = 'AntDesignSwitch',
  AntDesignTable = 'AntDesignTable',
  AntDesignTabs = 'AntDesignTabs',
  AntDesignTabsTabPane = 'AntDesignTabsTabPane',
  AntDesignTag = 'AntDesignTag',
  AntDesignTimePicker = 'AntDesignTimePicker',
  AntDesignTimeline = 'AntDesignTimeline',
  AntDesignTimelineItem = 'AntDesignTimelineItem',
  AntDesignTooltip = 'AntDesignTooltip',
  AntDesignTransfer = 'AntDesignTransfer',
  AntDesignTree = 'AntDesignTree',
  AntDesignTreeSelect = 'AntDesignTreeSelect',
  AntDesignTypographyParagraph = 'AntDesignTypographyParagraph',
  AntDesignTypographyText = 'AntDesignTypographyText',
  AntDesignTypographyTitle = 'AntDesignTypographyTitle',
  AntDesignUpload = 'AntDesignUpload',
  ExternalComponent = 'ExternalComponent',
  GridLayout = 'GridLayout',
  HookGraphqlMutation = 'HookGraphqlMutation',
  HookGraphqlQuery = 'HookGraphqlQuery',
  HookQueryConfig = 'HookQueryConfig',
  HookQueryLambda = 'HookQueryLambda',
  HookQueryPage = 'HookQueryPage',
  HookQueryPages = 'HookQueryPages',
  HookRecoilState = 'HookRecoilState',
  HookRouter = 'HookRouter',
  HtmlA = 'HtmlA',
  HtmlAbbr = 'HtmlAbbr',
  HtmlArea = 'HtmlArea',
  HtmlArticle = 'HtmlArticle',
  HtmlAside = 'HtmlAside',
  HtmlAudio = 'HtmlAudio',
  HtmlB = 'HtmlB',
  HtmlBase = 'HtmlBase',
  HtmlBdo = 'HtmlBdo',
  HtmlBlockquote = 'HtmlBlockquote',
  HtmlBr = 'HtmlBr',
  HtmlButton = 'HtmlButton',
  HtmlCanvas = 'HtmlCanvas',
  HtmlCaption = 'HtmlCaption',
  HtmlCite = 'HtmlCite',
  HtmlCode = 'HtmlCode',
  HtmlCol = 'HtmlCol',
  HtmlData = 'HtmlData',
  HtmlDatalist = 'HtmlDatalist',
  HtmlDetails = 'HtmlDetails',
  HtmlDfn = 'HtmlDfn',
  HtmlDialog = 'HtmlDialog',
  HtmlDiv = 'HtmlDiv',
  HtmlDl = 'HtmlDl',
  HtmlEm = 'HtmlEm',
  HtmlEmbed = 'HtmlEmbed',
  HtmlFieldset = 'HtmlFieldset',
  HtmlFooter = 'HtmlFooter',
  HtmlForm = 'HtmlForm',
  HtmlH1 = 'HtmlH1',
  HtmlH2 = 'HtmlH2',
  HtmlH3 = 'HtmlH3',
  HtmlH4 = 'HtmlH4',
  HtmlH5 = 'HtmlH5',
  HtmlH6 = 'HtmlH6',
  HtmlHead = 'HtmlHead',
  HtmlHeader = 'HtmlHeader',
  HtmlHr = 'HtmlHr',
  HtmlI = 'HtmlI',
  HtmlIframe = 'HtmlIframe',
  HtmlImg = 'HtmlImg',
  HtmlInput = 'HtmlInput',
  HtmlKbd = 'HtmlKbd',
  HtmlLabel = 'HtmlLabel',
  HtmlLegend = 'HtmlLegend',
  HtmlLi = 'HtmlLi',
  HtmlLink = 'HtmlLink',
  HtmlMain = 'HtmlMain',
  HtmlMap = 'HtmlMap',
  HtmlMark = 'HtmlMark',
  HtmlMath = 'HtmlMath',
  HtmlMeta = 'HtmlMeta',
  HtmlMeter = 'HtmlMeter',
  HtmlNav = 'HtmlNav',
  HtmlNoscript = 'HtmlNoscript',
  HtmlObject = 'HtmlObject',
  HtmlOl = 'HtmlOl',
  HtmlOptgroup = 'HtmlOptgroup',
  HtmlOption = 'HtmlOption',
  HtmlOutput = 'HtmlOutput',
  HtmlP = 'HtmlP',
  HtmlParam = 'HtmlParam',
  HtmlPicture = 'HtmlPicture',
  HtmlPre = 'HtmlPre',
  HtmlProgress = 'HtmlProgress',
  HtmlQ = 'HtmlQ',
  HtmlRuby = 'HtmlRuby',
  HtmlS = 'HtmlS',
  HtmlSamp = 'HtmlSamp',
  HtmlScript = 'HtmlScript',
  HtmlSection = 'HtmlSection',
  HtmlSelect = 'HtmlSelect',
  HtmlSmall = 'HtmlSmall',
  HtmlSource = 'HtmlSource',
  HtmlSpan = 'HtmlSpan',
  HtmlStrong = 'HtmlStrong',
  HtmlStyle = 'HtmlStyle',
  HtmlSub = 'HtmlSub',
  HtmlSup = 'HtmlSup',
  HtmlSvg = 'HtmlSvg',
  HtmlTable = 'HtmlTable',
  HtmlTd = 'HtmlTd',
  HtmlTemplate = 'HtmlTemplate',
  HtmlTextarea = 'HtmlTextarea',
  HtmlTh = 'HtmlTh',
  HtmlTime = 'HtmlTime',
  HtmlTitle = 'HtmlTitle',
  HtmlTr = 'HtmlTr',
  HtmlTrack = 'HtmlTrack',
  HtmlU = 'HtmlU',
  HtmlUl = 'HtmlUl',
  HtmlVar = 'HtmlVar',
  HtmlVideo = 'HtmlVideo',
  HtmlWbr = 'HtmlWbr',
  MuiAccordion = 'MuiAccordion',
  MuiAccordionActions = 'MuiAccordionActions',
  MuiAccordionDetails = 'MuiAccordionDetails',
  MuiAccordionSummary = 'MuiAccordionSummary',
  MuiAlert = 'MuiAlert',
  MuiAlertTitle = 'MuiAlertTitle',
  MuiAppBar = 'MuiAppBar',
  MuiAutocomplete = 'MuiAutocomplete',
  MuiAvatar = 'MuiAvatar',
  MuiAvatarGroup = 'MuiAvatarGroup',
  MuiBackdrop = 'MuiBackdrop',
  MuiBadge = 'MuiBadge',
  MuiBadgeUnstyled = 'MuiBadgeUnstyled',
  MuiBottomNavigation = 'MuiBottomNavigation',
  MuiBottomNavigationAction = 'MuiBottomNavigationAction',
  MuiBox = 'MuiBox',
  MuiBreadcrumbs = 'MuiBreadcrumbs',
  MuiButton = 'MuiButton',
  MuiButtonBase = 'MuiButtonBase',
  MuiButtonGroup = 'MuiButtonGroup',
  MuiButtonUnstyled = 'MuiButtonUnstyled',
  MuiCalendarPicker = 'MuiCalendarPicker',
  MuiCalendarPickerSkeleton = 'MuiCalendarPickerSkeleton',
  MuiCard = 'MuiCard',
  MuiCardActionArea = 'MuiCardActionArea',
  MuiCardActions = 'MuiCardActions',
  MuiCardContent = 'MuiCardContent',
  MuiCardHeader = 'MuiCardHeader',
  MuiCardMedia = 'MuiCardMedia',
  MuiCheckbox = 'MuiCheckbox',
  MuiChip = 'MuiChip',
  MuiCircularProgress = 'MuiCircularProgress',
  MuiClickAwayListener = 'MuiClickAwayListener',
  MuiClockPicker = 'MuiClockPicker',
  MuiCollapse = 'MuiCollapse',
  MuiContainer = 'MuiContainer',
  MuiCssBaseline = 'MuiCssBaseline',
  MuiDataGrid = 'MuiDataGrid',
  MuiDatePicker = 'MuiDatePicker',
  MuiDateRangePicker = 'MuiDateRangePicker',
  MuiDateRangePickerDay = 'MuiDateRangePickerDay',
  MuiDateTimePicker = 'MuiDateTimePicker',
  MuiDesktopDatePicker = 'MuiDesktopDatePicker',
  MuiDesktopDateRangePicker = 'MuiDesktopDateRangePicker',
  MuiDesktopDateTimePicker = 'MuiDesktopDateTimePicker',
  MuiDesktopTimePicker = 'MuiDesktopTimePicker',
  MuiDialog = 'MuiDialog',
  MuiDialogActions = 'MuiDialogActions',
  MuiDialogContent = 'MuiDialogContent',
  MuiDialogContentText = 'MuiDialogContentText',
  MuiDialogTitle = 'MuiDialogTitle',
  MuiDivider = 'MuiDivider',
  MuiDrawer = 'MuiDrawer',
  MuiFab = 'MuiFab',
  MuiFade = 'MuiFade',
  MuiFilledInput = 'MuiFilledInput',
  MuiFormControl = 'MuiFormControl',
  MuiFormControlLabel = 'MuiFormControlLabel',
  MuiFormControlUnstyled = 'MuiFormControlUnstyled',
  MuiFormGroup = 'MuiFormGroup',
  MuiFormHelperText = 'MuiFormHelperText',
  MuiFormLabel = 'MuiFormLabel',
  MuiGlobalStyles = 'MuiGlobalStyles',
  MuiGrid = 'MuiGrid',
  MuiGridColDef = 'MuiGridColDef',
  MuiGrow = 'MuiGrow',
  MuiHidden = 'MuiHidden',
  MuiIcon = 'MuiIcon',
  MuiIconButton = 'MuiIconButton',
  MuiImageList = 'MuiImageList',
  MuiImageListItem = 'MuiImageListItem',
  MuiImageListItemBar = 'MuiImageListItemBar',
  MuiInput = 'MuiInput',
  MuiInputAdornment = 'MuiInputAdornment',
  MuiInputBase = 'MuiInputBase',
  MuiInputLabel = 'MuiInputLabel',
  MuiLinearProgress = 'MuiLinearProgress',
  MuiLink = 'MuiLink',
  MuiList = 'MuiList',
  MuiListItem = 'MuiListItem',
  MuiListItemAvatar = 'MuiListItemAvatar',
  MuiListItemButton = 'MuiListItemButton',
  MuiListItemIcon = 'MuiListItemIcon',
  MuiListItemSecondaryAction = 'MuiListItemSecondaryAction',
  MuiListItemText = 'MuiListItemText',
  MuiListSubheader = 'MuiListSubheader',
  MuiLoadingButton = 'MuiLoadingButton',
  MuiMasonry = 'MuiMasonry',
  MuiMasonryItem = 'MuiMasonryItem',
  MuiMenu = 'MuiMenu',
  MuiMenuItem = 'MuiMenuItem',
  MuiMenuList = 'MuiMenuList',
  MuiMobileDatePicker = 'MuiMobileDatePicker',
  MuiMobileDateRangePicker = 'MuiMobileDateRangePicker',
  MuiMobileDateTimePicker = 'MuiMobileDateTimePicker',
  MuiMobileStepper = 'MuiMobileStepper',
  MuiMobileTimePicker = 'MuiMobileTimePicker',
  MuiModal = 'MuiModal',
  MuiModalUnstyled = 'MuiModalUnstyled',
  MuiMonthPicker = 'MuiMonthPicker',
  MuiNativeSelect = 'MuiNativeSelect',
  MuiNoSsr = 'MuiNoSsr',
  MuiOutlinedInput = 'MuiOutlinedInput',
  MuiPagination = 'MuiPagination',
  MuiPaginationItem = 'MuiPaginationItem',
  MuiPaper = 'MuiPaper',
  MuiPickersDay = 'MuiPickersDay',
  MuiPopover = 'MuiPopover',
  MuiPopper = 'MuiPopper',
  MuiPortal = 'MuiPortal',
  MuiRadio = 'MuiRadio',
  MuiRadioGroup = 'MuiRadioGroup',
  MuiRating = 'MuiRating',
  MuiScopedCssBaseline = 'MuiScopedCssBaseline',
  MuiSelect = 'MuiSelect',
  MuiSkeleton = 'MuiSkeleton',
  MuiSlide = 'MuiSlide',
  MuiSlider = 'MuiSlider',
  MuiSliderUnstyled = 'MuiSliderUnstyled',
  MuiSnackbar = 'MuiSnackbar',
  MuiSnackbarContent = 'MuiSnackbarContent',
  MuiSpeedDial = 'MuiSpeedDial',
  MuiSpeedDialAction = 'MuiSpeedDialAction',
  MuiSpeedDialIcon = 'MuiSpeedDialIcon',
  MuiStack = 'MuiStack',
  MuiStaticDatePicker = 'MuiStaticDatePicker',
  MuiStaticDateRangePicker = 'MuiStaticDateRangePicker',
  MuiStaticDateTimePicker = 'MuiStaticDateTimePicker',
  MuiStaticTimePicker = 'MuiStaticTimePicker',
  MuiStep = 'MuiStep',
  MuiStepButton = 'MuiStepButton',
  MuiStepConnector = 'MuiStepConnector',
  MuiStepContent = 'MuiStepContent',
  MuiStepIcon = 'MuiStepIcon',
  MuiStepLabel = 'MuiStepLabel',
  MuiStepper = 'MuiStepper',
  MuiSvgIcon = 'MuiSvgIcon',
  MuiSwipeableDrawer = 'MuiSwipeableDrawer',
  MuiSwitch = 'MuiSwitch',
  MuiSwitchUnstyled = 'MuiSwitchUnstyled',
  MuiTab = 'MuiTab',
  MuiTabContext = 'MuiTabContext',
  MuiTabList = 'MuiTabList',
  MuiTabPanel = 'MuiTabPanel',
  MuiTabScrollButton = 'MuiTabScrollButton',
  MuiTable = 'MuiTable',
  MuiTableBody = 'MuiTableBody',
  MuiTableCell = 'MuiTableCell',
  MuiTableContainer = 'MuiTableContainer',
  MuiTableFooter = 'MuiTableFooter',
  MuiTableHead = 'MuiTableHead',
  MuiTablePagination = 'MuiTablePagination',
  MuiTableRow = 'MuiTableRow',
  MuiTableSortLabel = 'MuiTableSortLabel',
  MuiTabs = 'MuiTabs',
  MuiTextField = 'MuiTextField',
  MuiTextareaAutosize = 'MuiTextareaAutosize',
  MuiTimePicker = 'MuiTimePicker',
  MuiTimeline = 'MuiTimeline',
  MuiTimelineConnector = 'MuiTimelineConnector',
  MuiTimelineContent = 'MuiTimelineContent',
  MuiTimelineDot = 'MuiTimelineDot',
  MuiTimelineItem = 'MuiTimelineItem',
  MuiTimelineOppositeContent = 'MuiTimelineOppositeContent',
  MuiTimelineSeparator = 'MuiTimelineSeparator',
  MuiToggleButton = 'MuiToggleButton',
  MuiToggleButtonGroup = 'MuiToggleButtonGroup',
  MuiToolbar = 'MuiToolbar',
  MuiTooltip = 'MuiTooltip',
  MuiTreeItem = 'MuiTreeItem',
  MuiTreeView = 'MuiTreeView',
  MuiTypography = 'MuiTypography',
  MuiUnstableTrapFocus = 'MuiUnstableTrapFocus',
  MuiYearPicker = 'MuiYearPicker',
  MuiZoom = 'MuiZoom',
  Query = 'Query',
  ReactFragment = 'ReactFragment',
  Script = 'Script',
  State = 'State',
  Text = 'Text',
  TextList = 'TextList',
}

export type AtomUniqueWhere = {
  externalSourceType?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type AtomUpdateInput = {
  api?: InputMaybe<AtomApiUpdateFieldInput>
  externalCssSource?: InputMaybe<Scalars['String']['input']>
  externalJsSource?: InputMaybe<Scalars['String']['input']>
  externalSourceType?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<WithOwnerOwnerUpdateFieldInput>
  requiredParents?: InputMaybe<Array<AtomRequiredParentsUpdateFieldInput>>
  suggestedChildren?: InputMaybe<Array<AtomSuggestedChildrenUpdateFieldInput>>
  tags?: InputMaybe<Array<AtomTagsUpdateFieldInput>>
  type?: InputMaybe<AtomType>
}

export type AtomUserOwnerAggregationSelection = {
  __typename?: 'AtomUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<AtomUserOwnerNodeAggregateSelection>
}

export type AtomUserOwnerNodeAggregateSelection = {
  __typename?: 'AtomUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type AtomWhere = {
  AND?: InputMaybe<Array<AtomWhere>>
  NOT?: InputMaybe<AtomWhere>
  OR?: InputMaybe<Array<AtomWhere>>
  api?: InputMaybe<InterfaceTypeWhere>
  apiAggregate?: InputMaybe<AtomApiAggregateInput>
  apiConnection?: InputMaybe<AtomApiConnectionWhere>
  apiConnection_NOT?: InputMaybe<AtomApiConnectionWhere>
  api_NOT?: InputMaybe<InterfaceTypeWhere>
  externalCssSource?: InputMaybe<Scalars['String']['input']>
  externalCssSource_CONTAINS?: InputMaybe<Scalars['String']['input']>
  externalCssSource_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  externalCssSource_IN?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  externalCssSource_MATCHES?: InputMaybe<Scalars['String']['input']>
  externalCssSource_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  externalJsSource?: InputMaybe<Scalars['String']['input']>
  externalJsSource_CONTAINS?: InputMaybe<Scalars['String']['input']>
  externalJsSource_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  externalJsSource_IN?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  externalJsSource_MATCHES?: InputMaybe<Scalars['String']['input']>
  externalJsSource_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  externalSourceType?: InputMaybe<Scalars['String']['input']>
  externalSourceType_CONTAINS?: InputMaybe<Scalars['String']['input']>
  externalSourceType_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  externalSourceType_IN?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  externalSourceType_MATCHES?: InputMaybe<Scalars['String']['input']>
  externalSourceType_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  icon_CONTAINS?: InputMaybe<Scalars['String']['input']>
  icon_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  icon_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  icon_MATCHES?: InputMaybe<Scalars['String']['input']>
  icon_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<AtomOwnerAggregateInput>
  ownerConnection?: InputMaybe<WithOwnerOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<WithOwnerOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  requiredParentsAggregate?: InputMaybe<AtomRequiredParentsAggregateInput>
  /** Return Atoms where all of the related AtomRequiredParentsConnections match this filter */
  requiredParentsConnection_ALL?: InputMaybe<AtomRequiredParentsConnectionWhere>
  /** Return Atoms where none of the related AtomRequiredParentsConnections match this filter */
  requiredParentsConnection_NONE?: InputMaybe<AtomRequiredParentsConnectionWhere>
  /** Return Atoms where one of the related AtomRequiredParentsConnections match this filter */
  requiredParentsConnection_SINGLE?: InputMaybe<AtomRequiredParentsConnectionWhere>
  /** Return Atoms where some of the related AtomRequiredParentsConnections match this filter */
  requiredParentsConnection_SOME?: InputMaybe<AtomRequiredParentsConnectionWhere>
  /** Return Atoms where all of the related Atoms match this filter */
  requiredParents_ALL?: InputMaybe<AtomWhere>
  /** Return Atoms where none of the related Atoms match this filter */
  requiredParents_NONE?: InputMaybe<AtomWhere>
  /** Return Atoms where one of the related Atoms match this filter */
  requiredParents_SINGLE?: InputMaybe<AtomWhere>
  /** Return Atoms where some of the related Atoms match this filter */
  requiredParents_SOME?: InputMaybe<AtomWhere>
  suggestedChildrenAggregate?: InputMaybe<AtomSuggestedChildrenAggregateInput>
  /** Return Atoms where all of the related AtomSuggestedChildrenConnections match this filter */
  suggestedChildrenConnection_ALL?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
  /** Return Atoms where none of the related AtomSuggestedChildrenConnections match this filter */
  suggestedChildrenConnection_NONE?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
  /** Return Atoms where one of the related AtomSuggestedChildrenConnections match this filter */
  suggestedChildrenConnection_SINGLE?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
  /** Return Atoms where some of the related AtomSuggestedChildrenConnections match this filter */
  suggestedChildrenConnection_SOME?: InputMaybe<AtomSuggestedChildrenConnectionWhere>
  /** Return Atoms where all of the related Atoms match this filter */
  suggestedChildren_ALL?: InputMaybe<AtomWhere>
  /** Return Atoms where none of the related Atoms match this filter */
  suggestedChildren_NONE?: InputMaybe<AtomWhere>
  /** Return Atoms where one of the related Atoms match this filter */
  suggestedChildren_SINGLE?: InputMaybe<AtomWhere>
  /** Return Atoms where some of the related Atoms match this filter */
  suggestedChildren_SOME?: InputMaybe<AtomWhere>
  tagsAggregate?: InputMaybe<AtomTagsAggregateInput>
  /** Return Atoms where all of the related AtomTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<AtomTagsConnectionWhere>
  /** Return Atoms where none of the related AtomTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<AtomTagsConnectionWhere>
  /** Return Atoms where one of the related AtomTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<AtomTagsConnectionWhere>
  /** Return Atoms where some of the related AtomTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<AtomTagsConnectionWhere>
  /** Return Atoms where all of the related Tags match this filter */
  tags_ALL?: InputMaybe<TagWhere>
  /** Return Atoms where none of the related Tags match this filter */
  tags_NONE?: InputMaybe<TagWhere>
  /** Return Atoms where one of the related Tags match this filter */
  tags_SINGLE?: InputMaybe<TagWhere>
  /** Return Atoms where some of the related Tags match this filter */
  tags_SOME?: InputMaybe<TagWhere>
  type?: InputMaybe<AtomType>
  type_IN?: InputMaybe<Array<AtomType>>
}

export type AtomsConnection = {
  __typename?: 'AtomsConnection'
  edges: Array<AtomEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type BaseAction = {
  element?: Maybe<Element>
  elementConnection: BaseActionElementConnection
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  store: Store
  storeConnection: BaseActionStoreConnection
  type: ActionKind
}

export type BaseActionElementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type BaseActionElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<BaseActionElementConnectionSort>>
  where?: InputMaybe<BaseActionElementConnectionWhere>
}

export type BaseActionStoreArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<StoreOptions>
  where?: InputMaybe<StoreWhere>
}

export type BaseActionStoreConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<BaseActionStoreConnectionSort>>
  where?: InputMaybe<BaseActionStoreConnectionWhere>
}

export type BaseActionConnectInput = {
  _on?: InputMaybe<BaseActionImplementationsConnectInput>
  element?: InputMaybe<BaseActionElementConnectFieldInput>
  store?: InputMaybe<BaseActionStoreConnectFieldInput>
}

export type BaseActionConnectWhere = {
  node: BaseActionWhere
}

export type BaseActionCreateInput = {
  ApiAction?: InputMaybe<ApiActionCreateInput>
  CodeAction?: InputMaybe<CodeActionCreateInput>
}

export type BaseActionDeleteInput = {
  _on?: InputMaybe<BaseActionImplementationsDeleteInput>
  element?: InputMaybe<BaseActionElementDeleteFieldInput>
  store?: InputMaybe<BaseActionStoreDeleteFieldInput>
}

export type BaseActionDisconnectInput = {
  _on?: InputMaybe<BaseActionImplementationsDisconnectInput>
  element?: InputMaybe<BaseActionElementDisconnectFieldInput>
  store?: InputMaybe<BaseActionStoreDisconnectFieldInput>
}

export type BaseActionElementAggregateInput = {
  AND?: InputMaybe<Array<BaseActionElementAggregateInput>>
  NOT?: InputMaybe<BaseActionElementAggregateInput>
  OR?: InputMaybe<Array<BaseActionElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<BaseActionElementNodeAggregationWhereInput>
}

export type BaseActionElementConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type BaseActionElementConnectOrCreateFieldInput = {
  onCreate: BaseActionElementConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type BaseActionElementConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type BaseActionElementConnection = {
  __typename?: 'BaseActionElementConnection'
  edges: Array<BaseActionElementRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type BaseActionElementConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type BaseActionElementConnectionWhere = {
  AND?: InputMaybe<Array<BaseActionElementConnectionWhere>>
  NOT?: InputMaybe<BaseActionElementConnectionWhere>
  OR?: InputMaybe<Array<BaseActionElementConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type BaseActionElementCreateFieldInput = {
  node: ElementCreateInput
}

export type BaseActionElementDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<BaseActionElementConnectionWhere>
}

export type BaseActionElementDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<BaseActionElementConnectionWhere>
}

export type BaseActionElementFieldInput = {
  connect?: InputMaybe<BaseActionElementConnectFieldInput>
  connectOrCreate?: InputMaybe<BaseActionElementConnectOrCreateFieldInput>
  create?: InputMaybe<BaseActionElementCreateFieldInput>
}

export type BaseActionElementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BaseActionElementNodeAggregationWhereInput>>
  NOT?: InputMaybe<BaseActionElementNodeAggregationWhereInput>
  OR?: InputMaybe<Array<BaseActionElementNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type BaseActionElementRelationship = {
  __typename?: 'BaseActionElementRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type BaseActionElementUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type BaseActionElementUpdateFieldInput = {
  connect?: InputMaybe<BaseActionElementConnectFieldInput>
  connectOrCreate?: InputMaybe<BaseActionElementConnectOrCreateFieldInput>
  create?: InputMaybe<BaseActionElementCreateFieldInput>
  delete?: InputMaybe<BaseActionElementDeleteFieldInput>
  disconnect?: InputMaybe<BaseActionElementDisconnectFieldInput>
  update?: InputMaybe<BaseActionElementUpdateConnectionInput>
  where?: InputMaybe<BaseActionElementConnectionWhere>
}

export type BaseActionImplementationsConnectInput = {
  ApiAction?: InputMaybe<Array<ApiActionConnectInput>>
  CodeAction?: InputMaybe<Array<CodeActionConnectInput>>
}

export type BaseActionImplementationsDeleteInput = {
  ApiAction?: InputMaybe<Array<ApiActionDeleteInput>>
  CodeAction?: InputMaybe<Array<CodeActionDeleteInput>>
}

export type BaseActionImplementationsDisconnectInput = {
  ApiAction?: InputMaybe<Array<ApiActionDisconnectInput>>
  CodeAction?: InputMaybe<Array<CodeActionDisconnectInput>>
}

export type BaseActionImplementationsUpdateInput = {
  ApiAction?: InputMaybe<ApiActionUpdateInput>
  CodeAction?: InputMaybe<CodeActionUpdateInput>
}

export type BaseActionImplementationsWhere = {
  ApiAction?: InputMaybe<ApiActionWhere>
  CodeAction?: InputMaybe<CodeActionWhere>
}

export type BaseActionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more BaseActionSort objects to sort BaseActions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<BaseActionSort>>>
}

/** Fields to sort BaseActions by. The order in which sorts are applied is not guaranteed when specifying many fields in one BaseActionSort object. */
export type BaseActionSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  type?: InputMaybe<SortDirection>
}

export type BaseActionStoreAggregateInput = {
  AND?: InputMaybe<Array<BaseActionStoreAggregateInput>>
  NOT?: InputMaybe<BaseActionStoreAggregateInput>
  OR?: InputMaybe<Array<BaseActionStoreAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<BaseActionStoreNodeAggregationWhereInput>
}

export type BaseActionStoreConnectFieldInput = {
  connect?: InputMaybe<StoreConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<StoreConnectWhere>
}

export type BaseActionStoreConnectOrCreateFieldInput = {
  onCreate: BaseActionStoreConnectOrCreateFieldInputOnCreate
  where: StoreConnectOrCreateWhere
}

export type BaseActionStoreConnectOrCreateFieldInputOnCreate = {
  node: StoreOnCreateInput
}

export type BaseActionStoreConnection = {
  __typename?: 'BaseActionStoreConnection'
  edges: Array<BaseActionStoreRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type BaseActionStoreConnectionSort = {
  node?: InputMaybe<StoreSort>
}

export type BaseActionStoreConnectionWhere = {
  AND?: InputMaybe<Array<BaseActionStoreConnectionWhere>>
  NOT?: InputMaybe<BaseActionStoreConnectionWhere>
  OR?: InputMaybe<Array<BaseActionStoreConnectionWhere>>
  node?: InputMaybe<StoreWhere>
}

export type BaseActionStoreCreateFieldInput = {
  node: StoreCreateInput
}

export type BaseActionStoreDeleteFieldInput = {
  delete?: InputMaybe<StoreDeleteInput>
  where?: InputMaybe<BaseActionStoreConnectionWhere>
}

export type BaseActionStoreDisconnectFieldInput = {
  disconnect?: InputMaybe<StoreDisconnectInput>
  where?: InputMaybe<BaseActionStoreConnectionWhere>
}

export type BaseActionStoreFieldInput = {
  connect?: InputMaybe<BaseActionStoreConnectFieldInput>
  connectOrCreate?: InputMaybe<BaseActionStoreConnectOrCreateFieldInput>
  create?: InputMaybe<BaseActionStoreCreateFieldInput>
}

export type BaseActionStoreNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BaseActionStoreNodeAggregationWhereInput>>
  NOT?: InputMaybe<BaseActionStoreNodeAggregationWhereInput>
  OR?: InputMaybe<Array<BaseActionStoreNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type BaseActionStoreRelationship = {
  __typename?: 'BaseActionStoreRelationship'
  cursor: Scalars['String']['output']
  node: Store
}

export type BaseActionStoreUpdateConnectionInput = {
  node?: InputMaybe<StoreUpdateInput>
}

export type BaseActionStoreUpdateFieldInput = {
  connect?: InputMaybe<BaseActionStoreConnectFieldInput>
  connectOrCreate?: InputMaybe<BaseActionStoreConnectOrCreateFieldInput>
  create?: InputMaybe<BaseActionStoreCreateFieldInput>
  delete?: InputMaybe<BaseActionStoreDeleteFieldInput>
  disconnect?: InputMaybe<BaseActionStoreDisconnectFieldInput>
  update?: InputMaybe<BaseActionStoreUpdateConnectionInput>
  where?: InputMaybe<BaseActionStoreConnectionWhere>
}

export type BaseActionUpdateInput = {
  _on?: InputMaybe<BaseActionImplementationsUpdateInput>
  element?: InputMaybe<BaseActionElementUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  store?: InputMaybe<BaseActionStoreUpdateFieldInput>
}

export type BaseActionWhere = {
  _on?: InputMaybe<BaseActionImplementationsWhere>
  element?: InputMaybe<ElementWhere>
  elementAggregate?: InputMaybe<BaseActionElementAggregateInput>
  elementConnection?: InputMaybe<BaseActionElementConnectionWhere>
  elementConnection_NOT?: InputMaybe<BaseActionElementConnectionWhere>
  element_NOT?: InputMaybe<ElementWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  store?: InputMaybe<StoreWhere>
  storeAggregate?: InputMaybe<BaseActionStoreAggregateInput>
  storeConnection?: InputMaybe<BaseActionStoreConnectionWhere>
  storeConnection_NOT?: InputMaybe<BaseActionStoreConnectionWhere>
  store_NOT?: InputMaybe<StoreWhere>
  type?: InputMaybe<ActionKind>
  type_IN?: InputMaybe<Array<ActionKind>>
}

export type BaseType = IBaseType & {
  __typename?: 'BaseType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<BaseTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

export type BaseTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type BaseTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

export type BaseTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type BaseTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type BaseTypeConnectOrCreateWhere = {
  node: BaseTypeUniqueWhere
}

export type BaseTypeConnectWhere = {
  node: BaseTypeWhere
}

export type BaseTypeCreateInput = {
  id: Scalars['ID']['input']
  kind: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type BaseTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type BaseTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type BaseTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind: TypeKind
  name: Scalars['String']['input']
}

export type BaseTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more BaseTypeSort objects to sort BaseTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BaseTypeSort>>
}

export type BaseTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<BaseTypeOwnerAggregateInput>>
  NOT?: InputMaybe<BaseTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<BaseTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<BaseTypeOwnerNodeAggregationWhereInput>
}

export type BaseTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BaseTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<BaseTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<BaseTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

/** Fields to sort BaseTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one BaseTypeSort object. */
export type BaseTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type BaseTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type BaseTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type BaseTypeUserOwnerAggregationSelection = {
  __typename?: 'BaseTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<BaseTypeUserOwnerNodeAggregateSelection>
}

export type BaseTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'BaseTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type BaseTypeWhere = {
  AND?: InputMaybe<Array<BaseTypeWhere>>
  NOT?: InputMaybe<BaseTypeWhere>
  OR?: InputMaybe<Array<BaseTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<BaseTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type BaseTypesWhere = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type CodeAction = BaseAction & {
  __typename?: 'CodeAction'
  /** Code to run when action is triggered */
  code: Scalars['String']['output']
  element?: Maybe<Element>
  elementAggregate?: Maybe<CodeActionElementElementAggregationSelection>
  elementConnection: BaseActionElementConnection
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  store: Store
  storeAggregate?: Maybe<CodeActionStoreStoreAggregationSelection>
  storeConnection: BaseActionStoreConnection
  type: ActionKind
}

export type CodeActionElementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type CodeActionElementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type CodeActionElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<BaseActionElementConnectionSort>>
  where?: InputMaybe<BaseActionElementConnectionWhere>
}

export type CodeActionStoreArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<StoreOptions>
  where?: InputMaybe<StoreWhere>
}

export type CodeActionStoreAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<StoreWhere>
}

export type CodeActionStoreConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<BaseActionStoreConnectionSort>>
  where?: InputMaybe<BaseActionStoreConnectionWhere>
}

export type CodeActionAggregateSelection = {
  __typename?: 'CodeActionAggregateSelection'
  code: StringAggregateSelectionNonNullable
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type CodeActionConnectInput = {
  element?: InputMaybe<BaseActionElementConnectFieldInput>
  store?: InputMaybe<BaseActionStoreConnectFieldInput>
}

export type CodeActionConnectOrCreateInput = {
  element?: InputMaybe<BaseActionElementConnectOrCreateFieldInput>
  store?: InputMaybe<BaseActionStoreConnectOrCreateFieldInput>
}

export type CodeActionConnectOrCreateWhere = {
  node: CodeActionUniqueWhere
}

export type CodeActionConnectWhere = {
  node: CodeActionWhere
}

export type CodeActionCreateInput = {
  code: Scalars['String']['input']
  element?: InputMaybe<BaseActionElementFieldInput>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  store?: InputMaybe<BaseActionStoreFieldInput>
  type?: ActionKind
}

export type CodeActionDeleteInput = {
  element?: InputMaybe<BaseActionElementDeleteFieldInput>
  store?: InputMaybe<BaseActionStoreDeleteFieldInput>
}

export type CodeActionDisconnectInput = {
  element?: InputMaybe<BaseActionElementDisconnectFieldInput>
  store?: InputMaybe<BaseActionStoreDisconnectFieldInput>
}

export type CodeActionEdge = {
  __typename?: 'CodeActionEdge'
  cursor: Scalars['String']['output']
  node: CodeAction
}

export type CodeActionElementAggregateInput = {
  AND?: InputMaybe<Array<CodeActionElementAggregateInput>>
  NOT?: InputMaybe<CodeActionElementAggregateInput>
  OR?: InputMaybe<Array<CodeActionElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<CodeActionElementNodeAggregationWhereInput>
}

export type CodeActionElementElementAggregationSelection = {
  __typename?: 'CodeActionElementElementAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<CodeActionElementElementNodeAggregateSelection>
}

export type CodeActionElementElementNodeAggregateSelection = {
  __typename?: 'CodeActionElementElementNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type CodeActionElementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CodeActionElementNodeAggregationWhereInput>>
  NOT?: InputMaybe<CodeActionElementNodeAggregationWhereInput>
  OR?: InputMaybe<Array<CodeActionElementNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type CodeActionOnCreateInput = {
  code: Scalars['String']['input']
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  type?: ActionKind
}

export type CodeActionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more CodeActionSort objects to sort CodeActions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CodeActionSort>>
}

export type CodeActionRelationInput = {
  element?: InputMaybe<BaseActionElementCreateFieldInput>
  store?: InputMaybe<BaseActionStoreCreateFieldInput>
}

/** Fields to sort CodeActions by. The order in which sorts are applied is not guaranteed when specifying many fields in one CodeActionSort object. */
export type CodeActionSort = {
  code?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  type?: InputMaybe<SortDirection>
}

export type CodeActionStoreAggregateInput = {
  AND?: InputMaybe<Array<CodeActionStoreAggregateInput>>
  NOT?: InputMaybe<CodeActionStoreAggregateInput>
  OR?: InputMaybe<Array<CodeActionStoreAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<CodeActionStoreNodeAggregationWhereInput>
}

export type CodeActionStoreNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CodeActionStoreNodeAggregationWhereInput>>
  NOT?: InputMaybe<CodeActionStoreNodeAggregationWhereInput>
  OR?: InputMaybe<Array<CodeActionStoreNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type CodeActionStoreStoreAggregationSelection = {
  __typename?: 'CodeActionStoreStoreAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<CodeActionStoreStoreNodeAggregateSelection>
}

export type CodeActionStoreStoreNodeAggregateSelection = {
  __typename?: 'CodeActionStoreStoreNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type CodeActionUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type CodeActionUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>
  element?: InputMaybe<BaseActionElementUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  store?: InputMaybe<BaseActionStoreUpdateFieldInput>
}

export type CodeActionWhere = {
  AND?: InputMaybe<Array<CodeActionWhere>>
  NOT?: InputMaybe<CodeActionWhere>
  OR?: InputMaybe<Array<CodeActionWhere>>
  code?: InputMaybe<Scalars['String']['input']>
  code_CONTAINS?: InputMaybe<Scalars['String']['input']>
  code_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  code_IN?: InputMaybe<Array<Scalars['String']['input']>>
  code_MATCHES?: InputMaybe<Scalars['String']['input']>
  code_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  element?: InputMaybe<ElementWhere>
  elementAggregate?: InputMaybe<CodeActionElementAggregateInput>
  elementConnection?: InputMaybe<BaseActionElementConnectionWhere>
  elementConnection_NOT?: InputMaybe<BaseActionElementConnectionWhere>
  element_NOT?: InputMaybe<ElementWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  store?: InputMaybe<StoreWhere>
  storeAggregate?: InputMaybe<CodeActionStoreAggregateInput>
  storeConnection?: InputMaybe<BaseActionStoreConnectionWhere>
  storeConnection_NOT?: InputMaybe<BaseActionStoreConnectionWhere>
  store_NOT?: InputMaybe<StoreWhere>
  type?: InputMaybe<ActionKind>
  type_IN?: InputMaybe<Array<ActionKind>>
}

export type CodeActionsConnection = {
  __typename?: 'CodeActionsConnection'
  edges: Array<CodeActionEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export enum CodeMirrorLanguage {
  Css = 'Css',
  CssInJs = 'CssInJs',
  Graphql = 'Graphql',
  Javascript = 'Javascript',
  Json = 'Json',
  Typescript = 'Typescript',
}

/** Allows editing the value using a code mirror editor */
export type CodeMirrorType = IBaseType & {
  __typename?: 'CodeMirrorType'
  id: Scalars['ID']['output']
  kind: TypeKind
  language: CodeMirrorLanguage
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<CodeMirrorTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/** Allows editing the value using a code mirror editor */
export type CodeMirrorTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows editing the value using a code mirror editor */
export type CodeMirrorTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Allows editing the value using a code mirror editor */
export type CodeMirrorTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type CodeMirrorTypeAggregateSelection = {
  __typename?: 'CodeMirrorTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type CodeMirrorTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type CodeMirrorTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type CodeMirrorTypeConnectOrCreateWhere = {
  node: CodeMirrorTypeUniqueWhere
}

export type CodeMirrorTypeConnectWhere = {
  node: CodeMirrorTypeWhere
}

export type CodeMirrorTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  language: CodeMirrorLanguage
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type CodeMirrorTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type CodeMirrorTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type CodeMirrorTypeEdge = {
  __typename?: 'CodeMirrorTypeEdge'
  cursor: Scalars['String']['output']
  node: CodeMirrorType
}

export type CodeMirrorTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  language: CodeMirrorLanguage
  name: Scalars['String']['input']
}

export type CodeMirrorTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more CodeMirrorTypeSort objects to sort CodeMirrorTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CodeMirrorTypeSort>>
}

export type CodeMirrorTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<CodeMirrorTypeOwnerAggregateInput>>
  NOT?: InputMaybe<CodeMirrorTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<CodeMirrorTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<CodeMirrorTypeOwnerNodeAggregationWhereInput>
}

export type CodeMirrorTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CodeMirrorTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<CodeMirrorTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<CodeMirrorTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type CodeMirrorTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort CodeMirrorTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one CodeMirrorTypeSort object. */
export type CodeMirrorTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  language?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type CodeMirrorTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type CodeMirrorTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<CodeMirrorLanguage>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type CodeMirrorTypeUserOwnerAggregationSelection = {
  __typename?: 'CodeMirrorTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<CodeMirrorTypeUserOwnerNodeAggregateSelection>
}

export type CodeMirrorTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'CodeMirrorTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type CodeMirrorTypeWhere = {
  AND?: InputMaybe<Array<CodeMirrorTypeWhere>>
  NOT?: InputMaybe<CodeMirrorTypeWhere>
  OR?: InputMaybe<Array<CodeMirrorTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  language?: InputMaybe<CodeMirrorLanguage>
  language_IN?: InputMaybe<Array<CodeMirrorLanguage>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<CodeMirrorTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type CodeMirrorTypesConnection = {
  __typename?: 'CodeMirrorTypesConnection'
  edges: Array<CodeMirrorTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Component = WithOwner & {
  __typename?: 'Component'
  api: InterfaceType
  apiAggregate?: Maybe<ComponentInterfaceTypeApiAggregationSelection>
  apiConnection: ComponentApiConnection
  childrenContainerElement: Element
  childrenContainerElementAggregate?: Maybe<ComponentElementChildrenContainerElementAggregationSelection>
  childrenContainerElementConnection: ComponentChildrenContainerElementConnection
  id: Scalars['ID']['output']
  keyGenerator?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<ComponentUserOwnerAggregationSelection>
  ownerConnection: WithOwnerOwnerConnection
  props: Prop
  propsAggregate?: Maybe<ComponentPropPropsAggregationSelection>
  propsConnection: ComponentPropsConnection
  rootElement: Element
  rootElementAggregate?: Maybe<ComponentElementRootElementAggregationSelection>
  rootElementConnection: ComponentRootElementConnection
  store: Store
  storeAggregate?: Maybe<ComponentStoreStoreAggregationSelection>
  storeConnection: ComponentStoreConnection
}

export type ComponentApiArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type ComponentApiAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type ComponentApiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ComponentApiConnectionSort>>
  where?: InputMaybe<ComponentApiConnectionWhere>
}

export type ComponentChildrenContainerElementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ComponentChildrenContainerElementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ComponentChildrenContainerElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ComponentChildrenContainerElementConnectionSort>>
  where?: InputMaybe<ComponentChildrenContainerElementConnectionWhere>
}

export type ComponentOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type ComponentOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

export type ComponentOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<WithOwnerOwnerConnectionSort>>
  where?: InputMaybe<WithOwnerOwnerConnectionWhere>
}

export type ComponentPropsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PropOptions>
  where?: InputMaybe<PropWhere>
}

export type ComponentPropsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PropWhere>
}

export type ComponentPropsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ComponentPropsConnectionSort>>
  where?: InputMaybe<ComponentPropsConnectionWhere>
}

export type ComponentRootElementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ComponentRootElementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ComponentRootElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ComponentRootElementConnectionSort>>
  where?: InputMaybe<ComponentRootElementConnectionWhere>
}

export type ComponentStoreArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<StoreOptions>
  where?: InputMaybe<StoreWhere>
}

export type ComponentStoreAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<StoreWhere>
}

export type ComponentStoreConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ComponentStoreConnectionSort>>
  where?: InputMaybe<ComponentStoreConnectionWhere>
}

export type ComponentAggregateSelection = {
  __typename?: 'ComponentAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  keyGenerator: StringAggregateSelectionNullable
  name: StringAggregateSelectionNonNullable
}

export type ComponentApiAggregateInput = {
  AND?: InputMaybe<Array<ComponentApiAggregateInput>>
  NOT?: InputMaybe<ComponentApiAggregateInput>
  OR?: InputMaybe<Array<ComponentApiAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ComponentApiNodeAggregationWhereInput>
}

export type ComponentApiConnectFieldInput = {
  connect?: InputMaybe<InterfaceTypeConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<InterfaceTypeConnectWhere>
}

export type ComponentApiConnectOrCreateFieldInput = {
  onCreate: ComponentApiConnectOrCreateFieldInputOnCreate
  where: InterfaceTypeConnectOrCreateWhere
}

export type ComponentApiConnectOrCreateFieldInputOnCreate = {
  node: InterfaceTypeOnCreateInput
}

export type ComponentApiConnection = {
  __typename?: 'ComponentApiConnection'
  edges: Array<ComponentApiRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ComponentApiConnectionSort = {
  node?: InputMaybe<InterfaceTypeSort>
}

export type ComponentApiConnectionWhere = {
  AND?: InputMaybe<Array<ComponentApiConnectionWhere>>
  NOT?: InputMaybe<ComponentApiConnectionWhere>
  OR?: InputMaybe<Array<ComponentApiConnectionWhere>>
  node?: InputMaybe<InterfaceTypeWhere>
}

export type ComponentApiCreateFieldInput = {
  node: InterfaceTypeCreateInput
}

export type ComponentApiDeleteFieldInput = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<ComponentApiConnectionWhere>
}

export type ComponentApiDisconnectFieldInput = {
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  where?: InputMaybe<ComponentApiConnectionWhere>
}

export type ComponentApiFieldInput = {
  connect?: InputMaybe<ComponentApiConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentApiConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentApiCreateFieldInput>
}

export type ComponentApiNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComponentApiNodeAggregationWhereInput>>
  NOT?: InputMaybe<ComponentApiNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ComponentApiNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ComponentApiRelationship = {
  __typename?: 'ComponentApiRelationship'
  cursor: Scalars['String']['output']
  node: InterfaceType
}

export type ComponentApiUpdateConnectionInput = {
  node?: InputMaybe<InterfaceTypeUpdateInput>
}

export type ComponentApiUpdateFieldInput = {
  connect?: InputMaybe<ComponentApiConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentApiConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentApiCreateFieldInput>
  delete?: InputMaybe<ComponentApiDeleteFieldInput>
  disconnect?: InputMaybe<ComponentApiDisconnectFieldInput>
  update?: InputMaybe<ComponentApiUpdateConnectionInput>
  where?: InputMaybe<ComponentApiConnectionWhere>
}

export type ComponentChildrenContainerElementAggregateInput = {
  AND?: InputMaybe<Array<ComponentChildrenContainerElementAggregateInput>>
  NOT?: InputMaybe<ComponentChildrenContainerElementAggregateInput>
  OR?: InputMaybe<Array<ComponentChildrenContainerElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ComponentChildrenContainerElementNodeAggregationWhereInput>
}

export type ComponentChildrenContainerElementConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type ComponentChildrenContainerElementConnectOrCreateFieldInput = {
  onCreate: ComponentChildrenContainerElementConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ComponentChildrenContainerElementConnectOrCreateFieldInputOnCreate =
  {
    node: ElementOnCreateInput
  }

export type ComponentChildrenContainerElementConnection = {
  __typename?: 'ComponentChildrenContainerElementConnection'
  edges: Array<ComponentChildrenContainerElementRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ComponentChildrenContainerElementConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ComponentChildrenContainerElementConnectionWhere = {
  AND?: InputMaybe<Array<ComponentChildrenContainerElementConnectionWhere>>
  NOT?: InputMaybe<ComponentChildrenContainerElementConnectionWhere>
  OR?: InputMaybe<Array<ComponentChildrenContainerElementConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type ComponentChildrenContainerElementCreateFieldInput = {
  node: ElementCreateInput
}

export type ComponentChildrenContainerElementDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ComponentChildrenContainerElementConnectionWhere>
}

export type ComponentChildrenContainerElementDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ComponentChildrenContainerElementConnectionWhere>
}

export type ComponentChildrenContainerElementFieldInput = {
  connect?: InputMaybe<ComponentChildrenContainerElementConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentChildrenContainerElementConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentChildrenContainerElementCreateFieldInput>
}

export type ComponentChildrenContainerElementNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<ComponentChildrenContainerElementNodeAggregationWhereInput>
  >
  NOT?: InputMaybe<ComponentChildrenContainerElementNodeAggregationWhereInput>
  OR?: InputMaybe<
    Array<ComponentChildrenContainerElementNodeAggregationWhereInput>
  >
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ComponentChildrenContainerElementRelationship = {
  __typename?: 'ComponentChildrenContainerElementRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type ComponentChildrenContainerElementUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ComponentChildrenContainerElementUpdateFieldInput = {
  connect?: InputMaybe<ComponentChildrenContainerElementConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentChildrenContainerElementConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentChildrenContainerElementCreateFieldInput>
  delete?: InputMaybe<ComponentChildrenContainerElementDeleteFieldInput>
  disconnect?: InputMaybe<ComponentChildrenContainerElementDisconnectFieldInput>
  update?: InputMaybe<ComponentChildrenContainerElementUpdateConnectionInput>
  where?: InputMaybe<ComponentChildrenContainerElementConnectionWhere>
}

export type ComponentConnectInput = {
  api?: InputMaybe<ComponentApiConnectFieldInput>
  childrenContainerElement?: InputMaybe<ComponentChildrenContainerElementConnectFieldInput>
  owner?: InputMaybe<WithOwnerOwnerConnectFieldInput>
  props?: InputMaybe<ComponentPropsConnectFieldInput>
  rootElement?: InputMaybe<ComponentRootElementConnectFieldInput>
  store?: InputMaybe<ComponentStoreConnectFieldInput>
}

export type ComponentConnectOrCreateInput = {
  api?: InputMaybe<ComponentApiConnectOrCreateFieldInput>
  childrenContainerElement?: InputMaybe<ComponentChildrenContainerElementConnectOrCreateFieldInput>
  owner?: InputMaybe<WithOwnerOwnerConnectOrCreateFieldInput>
  props?: InputMaybe<ComponentPropsConnectOrCreateFieldInput>
  rootElement?: InputMaybe<ComponentRootElementConnectOrCreateFieldInput>
  store?: InputMaybe<ComponentStoreConnectOrCreateFieldInput>
}

export type ComponentConnectOrCreateWhere = {
  node: ComponentUniqueWhere
}

export type ComponentConnectWhere = {
  node: ComponentWhere
}

export type ComponentCreateInput = {
  api?: InputMaybe<ComponentApiFieldInput>
  childrenContainerElement?: InputMaybe<ComponentChildrenContainerElementFieldInput>
  id: Scalars['ID']['input']
  keyGenerator?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  owner?: InputMaybe<WithOwnerOwnerFieldInput>
  props?: InputMaybe<ComponentPropsFieldInput>
  rootElement?: InputMaybe<ComponentRootElementFieldInput>
  store?: InputMaybe<ComponentStoreFieldInput>
}

export type ComponentDeleteInput = {
  api?: InputMaybe<ComponentApiDeleteFieldInput>
  childrenContainerElement?: InputMaybe<ComponentChildrenContainerElementDeleteFieldInput>
  owner?: InputMaybe<WithOwnerOwnerDeleteFieldInput>
  props?: InputMaybe<ComponentPropsDeleteFieldInput>
  rootElement?: InputMaybe<ComponentRootElementDeleteFieldInput>
  store?: InputMaybe<ComponentStoreDeleteFieldInput>
}

export type ComponentDisconnectInput = {
  api?: InputMaybe<ComponentApiDisconnectFieldInput>
  childrenContainerElement?: InputMaybe<ComponentChildrenContainerElementDisconnectFieldInput>
  owner?: InputMaybe<WithOwnerOwnerDisconnectFieldInput>
  props?: InputMaybe<ComponentPropsDisconnectFieldInput>
  rootElement?: InputMaybe<ComponentRootElementDisconnectFieldInput>
  store?: InputMaybe<ComponentStoreDisconnectFieldInput>
}

export type ComponentEdge = {
  __typename?: 'ComponentEdge'
  cursor: Scalars['String']['output']
  node: Component
}

export type ComponentElementChildrenContainerElementAggregationSelection = {
  __typename?: 'ComponentElementChildrenContainerElementAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ComponentElementChildrenContainerElementNodeAggregateSelection>
}

export type ComponentElementChildrenContainerElementNodeAggregateSelection = {
  __typename?: 'ComponentElementChildrenContainerElementNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ComponentElementRootElementAggregationSelection = {
  __typename?: 'ComponentElementRootElementAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ComponentElementRootElementNodeAggregateSelection>
}

export type ComponentElementRootElementNodeAggregateSelection = {
  __typename?: 'ComponentElementRootElementNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ComponentInterfaceTypeApiAggregationSelection = {
  __typename?: 'ComponentInterfaceTypeApiAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ComponentInterfaceTypeApiNodeAggregateSelection>
}

export type ComponentInterfaceTypeApiNodeAggregateSelection = {
  __typename?: 'ComponentInterfaceTypeApiNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ComponentOnCreateInput = {
  id: Scalars['ID']['input']
  keyGenerator?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
}

export type ComponentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ComponentSort objects to sort Components by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ComponentSort>>
}

export type ComponentOwnerAggregateInput = {
  AND?: InputMaybe<Array<ComponentOwnerAggregateInput>>
  NOT?: InputMaybe<ComponentOwnerAggregateInput>
  OR?: InputMaybe<Array<ComponentOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ComponentOwnerNodeAggregationWhereInput>
}

export type ComponentOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComponentOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<ComponentOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ComponentOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ComponentPropPropsAggregationSelection = {
  __typename?: 'ComponentPropPropsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ComponentPropPropsNodeAggregateSelection>
}

export type ComponentPropPropsNodeAggregateSelection = {
  __typename?: 'ComponentPropPropsNodeAggregateSelection'
  data: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type ComponentPropsAggregateInput = {
  AND?: InputMaybe<Array<ComponentPropsAggregateInput>>
  NOT?: InputMaybe<ComponentPropsAggregateInput>
  OR?: InputMaybe<Array<ComponentPropsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ComponentPropsNodeAggregationWhereInput>
}

export type ComponentPropsConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PropConnectWhere>
}

export type ComponentPropsConnectOrCreateFieldInput = {
  onCreate: ComponentPropsConnectOrCreateFieldInputOnCreate
  where: PropConnectOrCreateWhere
}

export type ComponentPropsConnectOrCreateFieldInputOnCreate = {
  node: PropOnCreateInput
}

export type ComponentPropsConnection = {
  __typename?: 'ComponentPropsConnection'
  edges: Array<ComponentPropsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ComponentPropsConnectionSort = {
  node?: InputMaybe<PropSort>
}

export type ComponentPropsConnectionWhere = {
  AND?: InputMaybe<Array<ComponentPropsConnectionWhere>>
  NOT?: InputMaybe<ComponentPropsConnectionWhere>
  OR?: InputMaybe<Array<ComponentPropsConnectionWhere>>
  node?: InputMaybe<PropWhere>
}

export type ComponentPropsCreateFieldInput = {
  node: PropCreateInput
}

export type ComponentPropsDeleteFieldInput = {
  where?: InputMaybe<ComponentPropsConnectionWhere>
}

export type ComponentPropsDisconnectFieldInput = {
  where?: InputMaybe<ComponentPropsConnectionWhere>
}

export type ComponentPropsFieldInput = {
  connect?: InputMaybe<ComponentPropsConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentPropsConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentPropsCreateFieldInput>
}

export type ComponentPropsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComponentPropsNodeAggregationWhereInput>>
  NOT?: InputMaybe<ComponentPropsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ComponentPropsNodeAggregationWhereInput>>
  data_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  data_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ComponentPropsRelationship = {
  __typename?: 'ComponentPropsRelationship'
  cursor: Scalars['String']['output']
  node: Prop
}

export type ComponentPropsUpdateConnectionInput = {
  node?: InputMaybe<PropUpdateInput>
}

export type ComponentPropsUpdateFieldInput = {
  connect?: InputMaybe<ComponentPropsConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentPropsConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentPropsCreateFieldInput>
  delete?: InputMaybe<ComponentPropsDeleteFieldInput>
  disconnect?: InputMaybe<ComponentPropsDisconnectFieldInput>
  update?: InputMaybe<ComponentPropsUpdateConnectionInput>
  where?: InputMaybe<ComponentPropsConnectionWhere>
}

export type ComponentRelationInput = {
  api?: InputMaybe<ComponentApiCreateFieldInput>
  childrenContainerElement?: InputMaybe<ComponentChildrenContainerElementCreateFieldInput>
  owner?: InputMaybe<WithOwnerOwnerCreateFieldInput>
  props?: InputMaybe<ComponentPropsCreateFieldInput>
  rootElement?: InputMaybe<ComponentRootElementCreateFieldInput>
  store?: InputMaybe<ComponentStoreCreateFieldInput>
}

export type ComponentRootElementAggregateInput = {
  AND?: InputMaybe<Array<ComponentRootElementAggregateInput>>
  NOT?: InputMaybe<ComponentRootElementAggregateInput>
  OR?: InputMaybe<Array<ComponentRootElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ComponentRootElementNodeAggregationWhereInput>
}

export type ComponentRootElementConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type ComponentRootElementConnectOrCreateFieldInput = {
  onCreate: ComponentRootElementConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ComponentRootElementConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type ComponentRootElementConnection = {
  __typename?: 'ComponentRootElementConnection'
  edges: Array<ComponentRootElementRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ComponentRootElementConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ComponentRootElementConnectionWhere = {
  AND?: InputMaybe<Array<ComponentRootElementConnectionWhere>>
  NOT?: InputMaybe<ComponentRootElementConnectionWhere>
  OR?: InputMaybe<Array<ComponentRootElementConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type ComponentRootElementCreateFieldInput = {
  node: ElementCreateInput
}

export type ComponentRootElementDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ComponentRootElementConnectionWhere>
}

export type ComponentRootElementDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ComponentRootElementConnectionWhere>
}

export type ComponentRootElementFieldInput = {
  connect?: InputMaybe<ComponentRootElementConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentRootElementConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentRootElementCreateFieldInput>
}

export type ComponentRootElementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComponentRootElementNodeAggregationWhereInput>>
  NOT?: InputMaybe<ComponentRootElementNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ComponentRootElementNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ComponentRootElementRelationship = {
  __typename?: 'ComponentRootElementRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type ComponentRootElementUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ComponentRootElementUpdateFieldInput = {
  connect?: InputMaybe<ComponentRootElementConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentRootElementConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentRootElementCreateFieldInput>
  delete?: InputMaybe<ComponentRootElementDeleteFieldInput>
  disconnect?: InputMaybe<ComponentRootElementDisconnectFieldInput>
  update?: InputMaybe<ComponentRootElementUpdateConnectionInput>
  where?: InputMaybe<ComponentRootElementConnectionWhere>
}

/** Fields to sort Components by. The order in which sorts are applied is not guaranteed when specifying many fields in one ComponentSort object. */
export type ComponentSort = {
  id?: InputMaybe<SortDirection>
  keyGenerator?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ComponentStoreAggregateInput = {
  AND?: InputMaybe<Array<ComponentStoreAggregateInput>>
  NOT?: InputMaybe<ComponentStoreAggregateInput>
  OR?: InputMaybe<Array<ComponentStoreAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ComponentStoreNodeAggregationWhereInput>
}

export type ComponentStoreConnectFieldInput = {
  connect?: InputMaybe<StoreConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<StoreConnectWhere>
}

export type ComponentStoreConnectOrCreateFieldInput = {
  onCreate: ComponentStoreConnectOrCreateFieldInputOnCreate
  where: StoreConnectOrCreateWhere
}

export type ComponentStoreConnectOrCreateFieldInputOnCreate = {
  node: StoreOnCreateInput
}

export type ComponentStoreConnection = {
  __typename?: 'ComponentStoreConnection'
  edges: Array<ComponentStoreRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ComponentStoreConnectionSort = {
  node?: InputMaybe<StoreSort>
}

export type ComponentStoreConnectionWhere = {
  AND?: InputMaybe<Array<ComponentStoreConnectionWhere>>
  NOT?: InputMaybe<ComponentStoreConnectionWhere>
  OR?: InputMaybe<Array<ComponentStoreConnectionWhere>>
  node?: InputMaybe<StoreWhere>
}

export type ComponentStoreCreateFieldInput = {
  node: StoreCreateInput
}

export type ComponentStoreDeleteFieldInput = {
  delete?: InputMaybe<StoreDeleteInput>
  where?: InputMaybe<ComponentStoreConnectionWhere>
}

export type ComponentStoreDisconnectFieldInput = {
  disconnect?: InputMaybe<StoreDisconnectInput>
  where?: InputMaybe<ComponentStoreConnectionWhere>
}

export type ComponentStoreFieldInput = {
  connect?: InputMaybe<ComponentStoreConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentStoreConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentStoreCreateFieldInput>
}

export type ComponentStoreNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComponentStoreNodeAggregationWhereInput>>
  NOT?: InputMaybe<ComponentStoreNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ComponentStoreNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ComponentStoreRelationship = {
  __typename?: 'ComponentStoreRelationship'
  cursor: Scalars['String']['output']
  node: Store
}

export type ComponentStoreStoreAggregationSelection = {
  __typename?: 'ComponentStoreStoreAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ComponentStoreStoreNodeAggregateSelection>
}

export type ComponentStoreStoreNodeAggregateSelection = {
  __typename?: 'ComponentStoreStoreNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ComponentStoreUpdateConnectionInput = {
  node?: InputMaybe<StoreUpdateInput>
}

export type ComponentStoreUpdateFieldInput = {
  connect?: InputMaybe<ComponentStoreConnectFieldInput>
  connectOrCreate?: InputMaybe<ComponentStoreConnectOrCreateFieldInput>
  create?: InputMaybe<ComponentStoreCreateFieldInput>
  delete?: InputMaybe<ComponentStoreDeleteFieldInput>
  disconnect?: InputMaybe<ComponentStoreDisconnectFieldInput>
  update?: InputMaybe<ComponentStoreUpdateConnectionInput>
  where?: InputMaybe<ComponentStoreConnectionWhere>
}

export type ComponentUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ComponentUpdateInput = {
  api?: InputMaybe<ComponentApiUpdateFieldInput>
  childrenContainerElement?: InputMaybe<ComponentChildrenContainerElementUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  keyGenerator?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<WithOwnerOwnerUpdateFieldInput>
  props?: InputMaybe<ComponentPropsUpdateFieldInput>
  rootElement?: InputMaybe<ComponentRootElementUpdateFieldInput>
  store?: InputMaybe<ComponentStoreUpdateFieldInput>
}

export type ComponentUserOwnerAggregationSelection = {
  __typename?: 'ComponentUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ComponentUserOwnerNodeAggregateSelection>
}

export type ComponentUserOwnerNodeAggregateSelection = {
  __typename?: 'ComponentUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type ComponentWhere = {
  AND?: InputMaybe<Array<ComponentWhere>>
  NOT?: InputMaybe<ComponentWhere>
  OR?: InputMaybe<Array<ComponentWhere>>
  api?: InputMaybe<InterfaceTypeWhere>
  apiAggregate?: InputMaybe<ComponentApiAggregateInput>
  apiConnection?: InputMaybe<ComponentApiConnectionWhere>
  apiConnection_NOT?: InputMaybe<ComponentApiConnectionWhere>
  api_NOT?: InputMaybe<InterfaceTypeWhere>
  childrenContainerElement?: InputMaybe<ElementWhere>
  childrenContainerElementAggregate?: InputMaybe<ComponentChildrenContainerElementAggregateInput>
  childrenContainerElementConnection?: InputMaybe<ComponentChildrenContainerElementConnectionWhere>
  childrenContainerElementConnection_NOT?: InputMaybe<ComponentChildrenContainerElementConnectionWhere>
  childrenContainerElement_NOT?: InputMaybe<ElementWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  keyGenerator?: InputMaybe<Scalars['String']['input']>
  keyGenerator_CONTAINS?: InputMaybe<Scalars['String']['input']>
  keyGenerator_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  keyGenerator_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  keyGenerator_MATCHES?: InputMaybe<Scalars['String']['input']>
  keyGenerator_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ComponentOwnerAggregateInput>
  ownerConnection?: InputMaybe<WithOwnerOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<WithOwnerOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  props?: InputMaybe<PropWhere>
  propsAggregate?: InputMaybe<ComponentPropsAggregateInput>
  propsConnection?: InputMaybe<ComponentPropsConnectionWhere>
  propsConnection_NOT?: InputMaybe<ComponentPropsConnectionWhere>
  props_NOT?: InputMaybe<PropWhere>
  rootElement?: InputMaybe<ElementWhere>
  rootElementAggregate?: InputMaybe<ComponentRootElementAggregateInput>
  rootElementConnection?: InputMaybe<ComponentRootElementConnectionWhere>
  rootElementConnection_NOT?: InputMaybe<ComponentRootElementConnectionWhere>
  rootElement_NOT?: InputMaybe<ElementWhere>
  store?: InputMaybe<StoreWhere>
  storeAggregate?: InputMaybe<ComponentStoreAggregateInput>
  storeConnection?: InputMaybe<ComponentStoreConnectionWhere>
  storeConnection_NOT?: InputMaybe<ComponentStoreConnectionWhere>
  store_NOT?: InputMaybe<StoreWhere>
}

export type ComponentsConnection = {
  __typename?: 'ComponentsConnection'
  edges: Array<ComponentEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type CreateActionTypesMutationResponse = {
  __typename?: 'CreateActionTypesMutationResponse'
  actionTypes: Array<ActionType>
  info: CreateInfo
}

export type CreateApiActionsMutationResponse = {
  __typename?: 'CreateApiActionsMutationResponse'
  apiActions: Array<ApiAction>
  info: CreateInfo
}

export type CreateAppTypesMutationResponse = {
  __typename?: 'CreateAppTypesMutationResponse'
  appTypes: Array<AppType>
  info: CreateInfo
}

export type CreateAppsMutationResponse = {
  __typename?: 'CreateAppsMutationResponse'
  apps: Array<App>
  info: CreateInfo
}

export type CreateArrayTypesMutationResponse = {
  __typename?: 'CreateArrayTypesMutationResponse'
  arrayTypes: Array<ArrayType>
  info: CreateInfo
}

export type CreateAtomsMutationResponse = {
  __typename?: 'CreateAtomsMutationResponse'
  atoms: Array<Atom>
  info: CreateInfo
}

export type CreateCodeActionsMutationResponse = {
  __typename?: 'CreateCodeActionsMutationResponse'
  codeActions: Array<CodeAction>
  info: CreateInfo
}

export type CreateCodeMirrorTypesMutationResponse = {
  __typename?: 'CreateCodeMirrorTypesMutationResponse'
  codeMirrorTypes: Array<CodeMirrorType>
  info: CreateInfo
}

export type CreateComponentsMutationResponse = {
  __typename?: 'CreateComponentsMutationResponse'
  components: Array<Component>
  info: CreateInfo
}

export type CreateDomainsMutationResponse = {
  __typename?: 'CreateDomainsMutationResponse'
  domains: Array<Domain>
  info: CreateInfo
}

export type CreateElementTypesMutationResponse = {
  __typename?: 'CreateElementTypesMutationResponse'
  elementTypes: Array<ElementType>
  info: CreateInfo
}

export type CreateElementsMutationResponse = {
  __typename?: 'CreateElementsMutationResponse'
  elements: Array<Element>
  info: CreateInfo
}

export type CreateEnumTypeValuesMutationResponse = {
  __typename?: 'CreateEnumTypeValuesMutationResponse'
  enumTypeValues: Array<EnumTypeValue>
  info: CreateInfo
}

export type CreateEnumTypesMutationResponse = {
  __typename?: 'CreateEnumTypesMutationResponse'
  enumTypes: Array<EnumType>
  info: CreateInfo
}

export type CreateFieldsMutationResponse = {
  __typename?: 'CreateFieldsMutationResponse'
  fields: Array<Field>
  info: CreateInfo
}

export type CreateGetBaseTypesReturnsMutationResponse = {
  __typename?: 'CreateGetBaseTypesReturnsMutationResponse'
  getBaseTypesReturns: Array<GetBaseTypesReturn>
  info: CreateInfo
}

export type CreateHooksMutationResponse = {
  __typename?: 'CreateHooksMutationResponse'
  hooks: Array<Hook>
  info: CreateInfo
}

export type CreateInfo = {
  __typename?: 'CreateInfo'
  bookmark?: Maybe<Scalars['String']['output']>
  nodesCreated: Scalars['Int']['output']
  relationshipsCreated: Scalars['Int']['output']
}

export type CreateInterfaceTypesMutationResponse = {
  __typename?: 'CreateInterfaceTypesMutationResponse'
  info: CreateInfo
  interfaceTypes: Array<InterfaceType>
}

export type CreateLambdaTypesMutationResponse = {
  __typename?: 'CreateLambdaTypesMutationResponse'
  info: CreateInfo
  lambdaTypes: Array<LambdaType>
}

export type CreatePageTypesMutationResponse = {
  __typename?: 'CreatePageTypesMutationResponse'
  info: CreateInfo
  pageTypes: Array<PageType>
}

export type CreatePagesMutationResponse = {
  __typename?: 'CreatePagesMutationResponse'
  info: CreateInfo
  pages: Array<Page>
}

export type CreatePrimitiveTypesMutationResponse = {
  __typename?: 'CreatePrimitiveTypesMutationResponse'
  info: CreateInfo
  primitiveTypes: Array<PrimitiveType>
}

export type CreatePropsMutationResponse = {
  __typename?: 'CreatePropsMutationResponse'
  info: CreateInfo
  props: Array<Prop>
}

export type CreateReactNodeTypesMutationResponse = {
  __typename?: 'CreateReactNodeTypesMutationResponse'
  info: CreateInfo
  reactNodeTypes: Array<ReactNodeType>
}

export type CreateRenderPropTypesMutationResponse = {
  __typename?: 'CreateRenderPropTypesMutationResponse'
  info: CreateInfo
  renderPropTypes: Array<RenderPropType>
}

export type CreateResourcesMutationResponse = {
  __typename?: 'CreateResourcesMutationResponse'
  info: CreateInfo
  resources: Array<Resource>
}

export type CreateStoresMutationResponse = {
  __typename?: 'CreateStoresMutationResponse'
  info: CreateInfo
  stores: Array<Store>
}

export type CreateTagsMutationResponse = {
  __typename?: 'CreateTagsMutationResponse'
  info: CreateInfo
  tags: Array<Tag>
}

export type CreateTypeReferencesMutationResponse = {
  __typename?: 'CreateTypeReferencesMutationResponse'
  info: CreateInfo
  typeReferences: Array<TypeReference>
}

export type CreateUnionTypesMutationResponse = {
  __typename?: 'CreateUnionTypesMutationResponse'
  info: CreateInfo
  unionTypes: Array<UnionType>
}

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse'
  info: CreateInfo
  users: Array<User>
}

export type DeleteInfo = {
  __typename?: 'DeleteInfo'
  bookmark?: Maybe<Scalars['String']['output']>
  nodesDeleted: Scalars['Int']['output']
  relationshipsDeleted: Scalars['Int']['output']
}

export type Domain = {
  __typename?: 'Domain'
  app: App
  appAggregate?: Maybe<DomainAppAppAggregationSelection>
  appConnection: DomainAppConnection
  domainConfig: VercelDomainConfig
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  projectDomain: VercelProjectDomain
}

export type DomainAppArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}

export type DomainAppAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AppWhere>
}

export type DomainAppConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<DomainAppConnectionSort>>
  where?: InputMaybe<DomainAppConnectionWhere>
}

export type DomainAggregateSelection = {
  __typename?: 'DomainAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type DomainAppAggregateInput = {
  AND?: InputMaybe<Array<DomainAppAggregateInput>>
  NOT?: InputMaybe<DomainAppAggregateInput>
  OR?: InputMaybe<Array<DomainAppAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<DomainAppNodeAggregationWhereInput>
}

export type DomainAppAppAggregationSelection = {
  __typename?: 'DomainAppAppAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<DomainAppAppNodeAggregateSelection>
}

export type DomainAppAppNodeAggregateSelection = {
  __typename?: 'DomainAppAppNodeAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type DomainAppConnectFieldInput = {
  connect?: InputMaybe<AppConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AppConnectWhere>
}

export type DomainAppConnectOrCreateFieldInput = {
  onCreate: DomainAppConnectOrCreateFieldInputOnCreate
  where: AppConnectOrCreateWhere
}

export type DomainAppConnectOrCreateFieldInputOnCreate = {
  node: AppOnCreateInput
}

export type DomainAppConnection = {
  __typename?: 'DomainAppConnection'
  edges: Array<DomainAppRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type DomainAppConnectionSort = {
  node?: InputMaybe<AppSort>
}

export type DomainAppConnectionWhere = {
  AND?: InputMaybe<Array<DomainAppConnectionWhere>>
  NOT?: InputMaybe<DomainAppConnectionWhere>
  OR?: InputMaybe<Array<DomainAppConnectionWhere>>
  node?: InputMaybe<AppWhere>
}

export type DomainAppCreateFieldInput = {
  node: AppCreateInput
}

export type DomainAppDeleteFieldInput = {
  delete?: InputMaybe<AppDeleteInput>
  where?: InputMaybe<DomainAppConnectionWhere>
}

export type DomainAppDisconnectFieldInput = {
  disconnect?: InputMaybe<AppDisconnectInput>
  where?: InputMaybe<DomainAppConnectionWhere>
}

export type DomainAppFieldInput = {
  connect?: InputMaybe<DomainAppConnectFieldInput>
  connectOrCreate?: InputMaybe<DomainAppConnectOrCreateFieldInput>
  create?: InputMaybe<DomainAppCreateFieldInput>
}

export type DomainAppNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DomainAppNodeAggregationWhereInput>>
  NOT?: InputMaybe<DomainAppNodeAggregationWhereInput>
  OR?: InputMaybe<Array<DomainAppNodeAggregationWhereInput>>
  _compoundName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type DomainAppRelationship = {
  __typename?: 'DomainAppRelationship'
  cursor: Scalars['String']['output']
  node: App
}

export type DomainAppUpdateConnectionInput = {
  node?: InputMaybe<AppUpdateInput>
}

export type DomainAppUpdateFieldInput = {
  connect?: InputMaybe<DomainAppConnectFieldInput>
  connectOrCreate?: InputMaybe<DomainAppConnectOrCreateFieldInput>
  create?: InputMaybe<DomainAppCreateFieldInput>
  delete?: InputMaybe<DomainAppDeleteFieldInput>
  disconnect?: InputMaybe<DomainAppDisconnectFieldInput>
  update?: InputMaybe<DomainAppUpdateConnectionInput>
  where?: InputMaybe<DomainAppConnectionWhere>
}

export type DomainConnectInput = {
  app?: InputMaybe<DomainAppConnectFieldInput>
}

export type DomainConnectOrCreateInput = {
  app?: InputMaybe<DomainAppConnectOrCreateFieldInput>
}

export type DomainConnectOrCreateWhere = {
  node: DomainUniqueWhere
}

export type DomainConnectWhere = {
  node: DomainWhere
}

export type DomainCreateInput = {
  app?: InputMaybe<DomainAppFieldInput>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
}

export type DomainDeleteInput = {
  app?: InputMaybe<DomainAppDeleteFieldInput>
}

export type DomainDisconnectInput = {
  app?: InputMaybe<DomainAppDisconnectFieldInput>
}

export type DomainEdge = {
  __typename?: 'DomainEdge'
  cursor: Scalars['String']['output']
  node: Domain
}

export type DomainOnCreateInput = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
}

export type DomainOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more DomainSort objects to sort Domains by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DomainSort>>
}

export type DomainRelationInput = {
  app?: InputMaybe<DomainAppCreateFieldInput>
}

/** Fields to sort Domains by. The order in which sorts are applied is not guaranteed when specifying many fields in one DomainSort object. */
export type DomainSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type DomainUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type DomainUpdateInput = {
  app?: InputMaybe<DomainAppUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type DomainWhere = {
  AND?: InputMaybe<Array<DomainWhere>>
  NOT?: InputMaybe<DomainWhere>
  OR?: InputMaybe<Array<DomainWhere>>
  app?: InputMaybe<AppWhere>
  appAggregate?: InputMaybe<DomainAppAggregateInput>
  appConnection?: InputMaybe<DomainAppConnectionWhere>
  appConnection_NOT?: InputMaybe<DomainAppConnectionWhere>
  app_NOT?: InputMaybe<AppWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
}

export type DomainsConnection = {
  __typename?: 'DomainsConnection'
  edges: Array<DomainEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Element = {
  __typename?: 'Element'
  childMapperComponent?: Maybe<Component>
  childMapperComponentAggregate?: Maybe<ElementComponentChildMapperComponentAggregationSelection>
  childMapperComponentConnection: ElementChildMapperComponentConnection
  childMapperPreviousSibling?: Maybe<Element>
  childMapperPreviousSiblingAggregate?: Maybe<ElementElementChildMapperPreviousSiblingAggregationSelection>
  childMapperPreviousSiblingConnection: ElementChildMapperPreviousSiblingConnection
  childMapperPropKey?: Maybe<Scalars['String']['output']>
  customCss?: Maybe<Scalars['String']['output']>
  descendantElements: Array<Element>
  firstChild?: Maybe<Element>
  firstChildAggregate?: Maybe<ElementElementFirstChildAggregationSelection>
  firstChildConnection: ElementFirstChildConnection
  guiCss?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  nextSibling?: Maybe<Element>
  nextSiblingAggregate?: Maybe<ElementElementNextSiblingAggregationSelection>
  nextSiblingConnection: ElementNextSiblingConnection
  page?: Maybe<Page>
  pageAggregate?: Maybe<ElementPagePageAggregationSelection>
  pageConnection: ElementPageConnection
  parent?: Maybe<Element>
  parentAggregate?: Maybe<ElementElementParentAggregationSelection>
  parentComponent?: Maybe<Component>
  parentComponentAggregate?: Maybe<ElementComponentParentComponentAggregationSelection>
  parentComponentConnection: ElementParentComponentConnection
  parentConnection: ElementParentConnection
  postRenderAction?: Maybe<BaseAction>
  postRenderActionConnection: ElementPostRenderActionConnection
  preRenderAction?: Maybe<BaseAction>
  preRenderActionConnection: ElementPreRenderActionConnection
  prevSibling?: Maybe<Element>
  prevSiblingAggregate?: Maybe<ElementElementPrevSiblingAggregationSelection>
  prevSiblingConnection: ElementPrevSiblingConnection
  propTransformationJs?: Maybe<Scalars['String']['output']>
  props: Prop
  propsAggregate?: Maybe<ElementPropPropsAggregationSelection>
  propsConnection: ElementPropsConnection
  renderAtomType?: Maybe<Atom>
  renderAtomTypeAggregate?: Maybe<ElementAtomRenderAtomTypeAggregationSelection>
  renderAtomTypeConnection: ElementRenderAtomTypeConnection
  renderComponentType?: Maybe<Component>
  renderComponentTypeAggregate?: Maybe<ElementComponentRenderComponentTypeAggregationSelection>
  renderComponentTypeConnection: ElementRenderComponentTypeConnection
  renderForEachPropKey?: Maybe<Scalars['String']['output']>
  renderIfExpression?: Maybe<Scalars['String']['output']>
  renderType?: Maybe<RenderType>
}

export type ElementChildMapperComponentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ComponentOptions>
  where?: InputMaybe<ComponentWhere>
}

export type ElementChildMapperComponentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ComponentWhere>
}

export type ElementChildMapperComponentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementChildMapperComponentConnectionSort>>
  where?: InputMaybe<ElementChildMapperComponentConnectionWhere>
}

export type ElementChildMapperPreviousSiblingArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ElementChildMapperPreviousSiblingAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ElementChildMapperPreviousSiblingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementChildMapperPreviousSiblingConnectionSort>>
  where?: InputMaybe<ElementChildMapperPreviousSiblingConnectionWhere>
}

export type ElementFirstChildArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ElementFirstChildAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ElementFirstChildConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementFirstChildConnectionSort>>
  where?: InputMaybe<ElementFirstChildConnectionWhere>
}

export type ElementNextSiblingArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ElementNextSiblingAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ElementNextSiblingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementNextSiblingConnectionSort>>
  where?: InputMaybe<ElementNextSiblingConnectionWhere>
}

export type ElementPageArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}

export type ElementPageAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PageWhere>
}

export type ElementPageConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementPageConnectionSort>>
  where?: InputMaybe<ElementPageConnectionWhere>
}

export type ElementParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ElementParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ElementParentComponentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ComponentOptions>
  where?: InputMaybe<ComponentWhere>
}

export type ElementParentComponentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ComponentWhere>
}

export type ElementParentComponentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementParentComponentConnectionSort>>
  where?: InputMaybe<ElementParentComponentConnectionWhere>
}

export type ElementParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementParentConnectionSort>>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementPostRenderActionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<BaseActionOptions>
  where?: InputMaybe<BaseActionWhere>
}

export type ElementPostRenderActionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementPostRenderActionConnectionSort>>
  where?: InputMaybe<ElementPostRenderActionConnectionWhere>
}

export type ElementPreRenderActionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<BaseActionOptions>
  where?: InputMaybe<BaseActionWhere>
}

export type ElementPreRenderActionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementPreRenderActionConnectionSort>>
  where?: InputMaybe<ElementPreRenderActionConnectionWhere>
}

export type ElementPrevSiblingArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type ElementPrevSiblingAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type ElementPrevSiblingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementPrevSiblingConnectionSort>>
  where?: InputMaybe<ElementPrevSiblingConnectionWhere>
}

export type ElementPropsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PropOptions>
  where?: InputMaybe<PropWhere>
}

export type ElementPropsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PropWhere>
}

export type ElementPropsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementPropsConnectionSort>>
  where?: InputMaybe<ElementPropsConnectionWhere>
}

export type ElementRenderAtomTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

export type ElementRenderAtomTypeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AtomWhere>
}

export type ElementRenderAtomTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementRenderAtomTypeConnectionSort>>
  where?: InputMaybe<ElementRenderAtomTypeConnectionWhere>
}

export type ElementRenderComponentTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ComponentOptions>
  where?: InputMaybe<ComponentWhere>
}

export type ElementRenderComponentTypeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ComponentWhere>
}

export type ElementRenderComponentTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ElementRenderComponentTypeConnectionSort>>
  where?: InputMaybe<ElementRenderComponentTypeConnectionWhere>
}

export type ElementAggregateSelection = {
  __typename?: 'ElementAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  count: Scalars['Int']['output']
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ElementAtomRenderAtomTypeAggregationSelection = {
  __typename?: 'ElementAtomRenderAtomTypeAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementAtomRenderAtomTypeNodeAggregateSelection>
}

export type ElementAtomRenderAtomTypeNodeAggregateSelection = {
  __typename?: 'ElementAtomRenderAtomTypeNodeAggregateSelection'
  externalCssSource: StringAggregateSelectionNullable
  externalJsSource: StringAggregateSelectionNullable
  externalSourceType: StringAggregateSelectionNullable
  icon: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ElementChildMapperComponentAggregateInput = {
  AND?: InputMaybe<Array<ElementChildMapperComponentAggregateInput>>
  NOT?: InputMaybe<ElementChildMapperComponentAggregateInput>
  OR?: InputMaybe<Array<ElementChildMapperComponentAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementChildMapperComponentNodeAggregationWhereInput>
}

export type ElementChildMapperComponentConnectFieldInput = {
  connect?: InputMaybe<ComponentConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ComponentConnectWhere>
}

export type ElementChildMapperComponentConnectOrCreateFieldInput = {
  onCreate: ElementChildMapperComponentConnectOrCreateFieldInputOnCreate
  where: ComponentConnectOrCreateWhere
}

export type ElementChildMapperComponentConnectOrCreateFieldInputOnCreate = {
  node: ComponentOnCreateInput
}

export type ElementChildMapperComponentConnection = {
  __typename?: 'ElementChildMapperComponentConnection'
  edges: Array<ElementChildMapperComponentRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementChildMapperComponentConnectionSort = {
  node?: InputMaybe<ComponentSort>
}

export type ElementChildMapperComponentConnectionWhere = {
  AND?: InputMaybe<Array<ElementChildMapperComponentConnectionWhere>>
  NOT?: InputMaybe<ElementChildMapperComponentConnectionWhere>
  OR?: InputMaybe<Array<ElementChildMapperComponentConnectionWhere>>
  node?: InputMaybe<ComponentWhere>
}

export type ElementChildMapperComponentCreateFieldInput = {
  node: ComponentCreateInput
}

export type ElementChildMapperComponentDeleteFieldInput = {
  delete?: InputMaybe<ComponentDeleteInput>
  where?: InputMaybe<ElementChildMapperComponentConnectionWhere>
}

export type ElementChildMapperComponentDisconnectFieldInput = {
  disconnect?: InputMaybe<ComponentDisconnectInput>
  where?: InputMaybe<ElementChildMapperComponentConnectionWhere>
}

export type ElementChildMapperComponentFieldInput = {
  connect?: InputMaybe<ElementChildMapperComponentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementChildMapperComponentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementChildMapperComponentCreateFieldInput>
}

export type ElementChildMapperComponentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementChildMapperComponentNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementChildMapperComponentNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementChildMapperComponentNodeAggregationWhereInput>>
  keyGenerator_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementChildMapperComponentRelationship = {
  __typename?: 'ElementChildMapperComponentRelationship'
  cursor: Scalars['String']['output']
  node: Component
}

export type ElementChildMapperComponentUpdateConnectionInput = {
  node?: InputMaybe<ComponentUpdateInput>
}

export type ElementChildMapperComponentUpdateFieldInput = {
  connect?: InputMaybe<ElementChildMapperComponentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementChildMapperComponentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementChildMapperComponentCreateFieldInput>
  delete?: InputMaybe<ElementChildMapperComponentDeleteFieldInput>
  disconnect?: InputMaybe<ElementChildMapperComponentDisconnectFieldInput>
  update?: InputMaybe<ElementChildMapperComponentUpdateConnectionInput>
  where?: InputMaybe<ElementChildMapperComponentConnectionWhere>
}

export type ElementChildMapperPreviousSiblingAggregateInput = {
  AND?: InputMaybe<Array<ElementChildMapperPreviousSiblingAggregateInput>>
  NOT?: InputMaybe<ElementChildMapperPreviousSiblingAggregateInput>
  OR?: InputMaybe<Array<ElementChildMapperPreviousSiblingAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementChildMapperPreviousSiblingNodeAggregationWhereInput>
}

export type ElementChildMapperPreviousSiblingConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type ElementChildMapperPreviousSiblingConnectOrCreateFieldInput = {
  onCreate: ElementChildMapperPreviousSiblingConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ElementChildMapperPreviousSiblingConnectOrCreateFieldInputOnCreate =
  {
    node: ElementOnCreateInput
  }

export type ElementChildMapperPreviousSiblingConnection = {
  __typename?: 'ElementChildMapperPreviousSiblingConnection'
  edges: Array<ElementChildMapperPreviousSiblingRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementChildMapperPreviousSiblingConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ElementChildMapperPreviousSiblingConnectionWhere = {
  AND?: InputMaybe<Array<ElementChildMapperPreviousSiblingConnectionWhere>>
  NOT?: InputMaybe<ElementChildMapperPreviousSiblingConnectionWhere>
  OR?: InputMaybe<Array<ElementChildMapperPreviousSiblingConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type ElementChildMapperPreviousSiblingCreateFieldInput = {
  node: ElementCreateInput
}

export type ElementChildMapperPreviousSiblingDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementChildMapperPreviousSiblingConnectionWhere>
}

export type ElementChildMapperPreviousSiblingDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ElementChildMapperPreviousSiblingConnectionWhere>
}

export type ElementChildMapperPreviousSiblingFieldInput = {
  connect?: InputMaybe<ElementChildMapperPreviousSiblingConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementChildMapperPreviousSiblingConnectOrCreateFieldInput>
  create?: InputMaybe<ElementChildMapperPreviousSiblingCreateFieldInput>
}

export type ElementChildMapperPreviousSiblingNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<ElementChildMapperPreviousSiblingNodeAggregationWhereInput>
  >
  NOT?: InputMaybe<ElementChildMapperPreviousSiblingNodeAggregationWhereInput>
  OR?: InputMaybe<
    Array<ElementChildMapperPreviousSiblingNodeAggregationWhereInput>
  >
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementChildMapperPreviousSiblingRelationship = {
  __typename?: 'ElementChildMapperPreviousSiblingRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type ElementChildMapperPreviousSiblingUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ElementChildMapperPreviousSiblingUpdateFieldInput = {
  connect?: InputMaybe<ElementChildMapperPreviousSiblingConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementChildMapperPreviousSiblingConnectOrCreateFieldInput>
  create?: InputMaybe<ElementChildMapperPreviousSiblingCreateFieldInput>
  delete?: InputMaybe<ElementChildMapperPreviousSiblingDeleteFieldInput>
  disconnect?: InputMaybe<ElementChildMapperPreviousSiblingDisconnectFieldInput>
  update?: InputMaybe<ElementChildMapperPreviousSiblingUpdateConnectionInput>
  where?: InputMaybe<ElementChildMapperPreviousSiblingConnectionWhere>
}

export type ElementComponentChildMapperComponentAggregationSelection = {
  __typename?: 'ElementComponentChildMapperComponentAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementComponentChildMapperComponentNodeAggregateSelection>
}

export type ElementComponentChildMapperComponentNodeAggregateSelection = {
  __typename?: 'ElementComponentChildMapperComponentNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  keyGenerator: StringAggregateSelectionNullable
  name: StringAggregateSelectionNonNullable
}

export type ElementComponentParentComponentAggregationSelection = {
  __typename?: 'ElementComponentParentComponentAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementComponentParentComponentNodeAggregateSelection>
}

export type ElementComponentParentComponentNodeAggregateSelection = {
  __typename?: 'ElementComponentParentComponentNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  keyGenerator: StringAggregateSelectionNullable
  name: StringAggregateSelectionNonNullable
}

export type ElementComponentRenderComponentTypeAggregationSelection = {
  __typename?: 'ElementComponentRenderComponentTypeAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementComponentRenderComponentTypeNodeAggregateSelection>
}

export type ElementComponentRenderComponentTypeNodeAggregateSelection = {
  __typename?: 'ElementComponentRenderComponentTypeNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  keyGenerator: StringAggregateSelectionNullable
  name: StringAggregateSelectionNonNullable
}

export type ElementConnectInput = {
  childMapperComponent?: InputMaybe<ElementChildMapperComponentConnectFieldInput>
  childMapperPreviousSibling?: InputMaybe<ElementChildMapperPreviousSiblingConnectFieldInput>
  firstChild?: InputMaybe<ElementFirstChildConnectFieldInput>
  nextSibling?: InputMaybe<ElementNextSiblingConnectFieldInput>
  page?: InputMaybe<ElementPageConnectFieldInput>
  parent?: InputMaybe<ElementParentConnectFieldInput>
  parentComponent?: InputMaybe<ElementParentComponentConnectFieldInput>
  postRenderAction?: InputMaybe<ElementPostRenderActionConnectFieldInput>
  preRenderAction?: InputMaybe<ElementPreRenderActionConnectFieldInput>
  prevSibling?: InputMaybe<ElementPrevSiblingConnectFieldInput>
  props?: InputMaybe<ElementPropsConnectFieldInput>
  renderAtomType?: InputMaybe<ElementRenderAtomTypeConnectFieldInput>
  renderComponentType?: InputMaybe<ElementRenderComponentTypeConnectFieldInput>
}

export type ElementConnectOrCreateInput = {
  childMapperComponent?: InputMaybe<ElementChildMapperComponentConnectOrCreateFieldInput>
  childMapperPreviousSibling?: InputMaybe<ElementChildMapperPreviousSiblingConnectOrCreateFieldInput>
  firstChild?: InputMaybe<ElementFirstChildConnectOrCreateFieldInput>
  nextSibling?: InputMaybe<ElementNextSiblingConnectOrCreateFieldInput>
  page?: InputMaybe<ElementPageConnectOrCreateFieldInput>
  parent?: InputMaybe<ElementParentConnectOrCreateFieldInput>
  parentComponent?: InputMaybe<ElementParentComponentConnectOrCreateFieldInput>
  prevSibling?: InputMaybe<ElementPrevSiblingConnectOrCreateFieldInput>
  props?: InputMaybe<ElementPropsConnectOrCreateFieldInput>
  renderAtomType?: InputMaybe<ElementRenderAtomTypeConnectOrCreateFieldInput>
  renderComponentType?: InputMaybe<ElementRenderComponentTypeConnectOrCreateFieldInput>
}

export type ElementConnectOrCreateWhere = {
  node: ElementUniqueWhere
}

export type ElementConnectWhere = {
  node: ElementWhere
}

export type ElementCreateInput = {
  childMapperComponent?: InputMaybe<ElementChildMapperComponentFieldInput>
  childMapperPreviousSibling?: InputMaybe<ElementChildMapperPreviousSiblingFieldInput>
  childMapperPropKey?: InputMaybe<Scalars['String']['input']>
  customCss?: InputMaybe<Scalars['String']['input']>
  firstChild?: InputMaybe<ElementFirstChildFieldInput>
  guiCss?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  nextSibling?: InputMaybe<ElementNextSiblingFieldInput>
  page?: InputMaybe<ElementPageFieldInput>
  parent?: InputMaybe<ElementParentFieldInput>
  parentComponent?: InputMaybe<ElementParentComponentFieldInput>
  postRenderAction?: InputMaybe<ElementPostRenderActionFieldInput>
  preRenderAction?: InputMaybe<ElementPreRenderActionFieldInput>
  prevSibling?: InputMaybe<ElementPrevSiblingFieldInput>
  propTransformationJs?: InputMaybe<Scalars['String']['input']>
  props?: InputMaybe<ElementPropsFieldInput>
  renderAtomType?: InputMaybe<ElementRenderAtomTypeFieldInput>
  renderComponentType?: InputMaybe<ElementRenderComponentTypeFieldInput>
  renderForEachPropKey?: InputMaybe<Scalars['String']['input']>
  renderIfExpression?: InputMaybe<Scalars['String']['input']>
}

export type ElementDeleteInput = {
  childMapperComponent?: InputMaybe<ElementChildMapperComponentDeleteFieldInput>
  childMapperPreviousSibling?: InputMaybe<ElementChildMapperPreviousSiblingDeleteFieldInput>
  firstChild?: InputMaybe<ElementFirstChildDeleteFieldInput>
  nextSibling?: InputMaybe<ElementNextSiblingDeleteFieldInput>
  page?: InputMaybe<ElementPageDeleteFieldInput>
  parent?: InputMaybe<ElementParentDeleteFieldInput>
  parentComponent?: InputMaybe<ElementParentComponentDeleteFieldInput>
  postRenderAction?: InputMaybe<ElementPostRenderActionDeleteFieldInput>
  preRenderAction?: InputMaybe<ElementPreRenderActionDeleteFieldInput>
  prevSibling?: InputMaybe<ElementPrevSiblingDeleteFieldInput>
  props?: InputMaybe<ElementPropsDeleteFieldInput>
  renderAtomType?: InputMaybe<ElementRenderAtomTypeDeleteFieldInput>
  renderComponentType?: InputMaybe<ElementRenderComponentTypeDeleteFieldInput>
}

export type ElementDisconnectInput = {
  childMapperComponent?: InputMaybe<ElementChildMapperComponentDisconnectFieldInput>
  childMapperPreviousSibling?: InputMaybe<ElementChildMapperPreviousSiblingDisconnectFieldInput>
  firstChild?: InputMaybe<ElementFirstChildDisconnectFieldInput>
  nextSibling?: InputMaybe<ElementNextSiblingDisconnectFieldInput>
  page?: InputMaybe<ElementPageDisconnectFieldInput>
  parent?: InputMaybe<ElementParentDisconnectFieldInput>
  parentComponent?: InputMaybe<ElementParentComponentDisconnectFieldInput>
  postRenderAction?: InputMaybe<ElementPostRenderActionDisconnectFieldInput>
  preRenderAction?: InputMaybe<ElementPreRenderActionDisconnectFieldInput>
  prevSibling?: InputMaybe<ElementPrevSiblingDisconnectFieldInput>
  props?: InputMaybe<ElementPropsDisconnectFieldInput>
  renderAtomType?: InputMaybe<ElementRenderAtomTypeDisconnectFieldInput>
  renderComponentType?: InputMaybe<ElementRenderComponentTypeDisconnectFieldInput>
}

export type ElementEdge = {
  __typename?: 'ElementEdge'
  cursor: Scalars['String']['output']
  node: Element
}

export type ElementElementChildMapperPreviousSiblingAggregationSelection = {
  __typename?: 'ElementElementChildMapperPreviousSiblingAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementElementChildMapperPreviousSiblingNodeAggregateSelection>
}

export type ElementElementChildMapperPreviousSiblingNodeAggregateSelection = {
  __typename?: 'ElementElementChildMapperPreviousSiblingNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ElementElementFirstChildAggregationSelection = {
  __typename?: 'ElementElementFirstChildAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementElementFirstChildNodeAggregateSelection>
}

export type ElementElementFirstChildNodeAggregateSelection = {
  __typename?: 'ElementElementFirstChildNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ElementElementNextSiblingAggregationSelection = {
  __typename?: 'ElementElementNextSiblingAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementElementNextSiblingNodeAggregateSelection>
}

export type ElementElementNextSiblingNodeAggregateSelection = {
  __typename?: 'ElementElementNextSiblingNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ElementElementParentAggregationSelection = {
  __typename?: 'ElementElementParentAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementElementParentNodeAggregateSelection>
}

export type ElementElementParentNodeAggregateSelection = {
  __typename?: 'ElementElementParentNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ElementElementPrevSiblingAggregationSelection = {
  __typename?: 'ElementElementPrevSiblingAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementElementPrevSiblingNodeAggregateSelection>
}

export type ElementElementPrevSiblingNodeAggregateSelection = {
  __typename?: 'ElementElementPrevSiblingNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type ElementFirstChildAggregateInput = {
  AND?: InputMaybe<Array<ElementFirstChildAggregateInput>>
  NOT?: InputMaybe<ElementFirstChildAggregateInput>
  OR?: InputMaybe<Array<ElementFirstChildAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementFirstChildNodeAggregationWhereInput>
}

export type ElementFirstChildConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type ElementFirstChildConnectOrCreateFieldInput = {
  onCreate: ElementFirstChildConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ElementFirstChildConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type ElementFirstChildConnection = {
  __typename?: 'ElementFirstChildConnection'
  edges: Array<ElementFirstChildRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementFirstChildConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ElementFirstChildConnectionWhere = {
  AND?: InputMaybe<Array<ElementFirstChildConnectionWhere>>
  NOT?: InputMaybe<ElementFirstChildConnectionWhere>
  OR?: InputMaybe<Array<ElementFirstChildConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type ElementFirstChildCreateFieldInput = {
  node: ElementCreateInput
}

export type ElementFirstChildDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementFirstChildConnectionWhere>
}

export type ElementFirstChildDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ElementFirstChildConnectionWhere>
}

export type ElementFirstChildFieldInput = {
  connect?: InputMaybe<ElementFirstChildConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementFirstChildConnectOrCreateFieldInput>
  create?: InputMaybe<ElementFirstChildCreateFieldInput>
}

export type ElementFirstChildNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementFirstChildNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementFirstChildNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementFirstChildNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementFirstChildRelationship = {
  __typename?: 'ElementFirstChildRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type ElementFirstChildUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ElementFirstChildUpdateFieldInput = {
  connect?: InputMaybe<ElementFirstChildConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementFirstChildConnectOrCreateFieldInput>
  create?: InputMaybe<ElementFirstChildCreateFieldInput>
  delete?: InputMaybe<ElementFirstChildDeleteFieldInput>
  disconnect?: InputMaybe<ElementFirstChildDisconnectFieldInput>
  update?: InputMaybe<ElementFirstChildUpdateConnectionInput>
  where?: InputMaybe<ElementFirstChildConnectionWhere>
}

export type ElementNextSiblingAggregateInput = {
  AND?: InputMaybe<Array<ElementNextSiblingAggregateInput>>
  NOT?: InputMaybe<ElementNextSiblingAggregateInput>
  OR?: InputMaybe<Array<ElementNextSiblingAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementNextSiblingNodeAggregationWhereInput>
}

export type ElementNextSiblingConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type ElementNextSiblingConnectOrCreateFieldInput = {
  onCreate: ElementNextSiblingConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ElementNextSiblingConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type ElementNextSiblingConnection = {
  __typename?: 'ElementNextSiblingConnection'
  edges: Array<ElementNextSiblingRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementNextSiblingConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ElementNextSiblingConnectionWhere = {
  AND?: InputMaybe<Array<ElementNextSiblingConnectionWhere>>
  NOT?: InputMaybe<ElementNextSiblingConnectionWhere>
  OR?: InputMaybe<Array<ElementNextSiblingConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type ElementNextSiblingCreateFieldInput = {
  node: ElementCreateInput
}

export type ElementNextSiblingDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementNextSiblingConnectionWhere>
}

export type ElementNextSiblingDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ElementNextSiblingConnectionWhere>
}

export type ElementNextSiblingFieldInput = {
  connect?: InputMaybe<ElementNextSiblingConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementNextSiblingConnectOrCreateFieldInput>
  create?: InputMaybe<ElementNextSiblingCreateFieldInput>
}

export type ElementNextSiblingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementNextSiblingNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementNextSiblingNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementNextSiblingNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementNextSiblingRelationship = {
  __typename?: 'ElementNextSiblingRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type ElementNextSiblingUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ElementNextSiblingUpdateFieldInput = {
  connect?: InputMaybe<ElementNextSiblingConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementNextSiblingConnectOrCreateFieldInput>
  create?: InputMaybe<ElementNextSiblingCreateFieldInput>
  delete?: InputMaybe<ElementNextSiblingDeleteFieldInput>
  disconnect?: InputMaybe<ElementNextSiblingDisconnectFieldInput>
  update?: InputMaybe<ElementNextSiblingUpdateConnectionInput>
  where?: InputMaybe<ElementNextSiblingConnectionWhere>
}

export type ElementOnCreateInput = {
  childMapperPropKey?: InputMaybe<Scalars['String']['input']>
  customCss?: InputMaybe<Scalars['String']['input']>
  guiCss?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  propTransformationJs?: InputMaybe<Scalars['String']['input']>
  renderForEachPropKey?: InputMaybe<Scalars['String']['input']>
  renderIfExpression?: InputMaybe<Scalars['String']['input']>
}

export type ElementOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ElementSort objects to sort Elements by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ElementSort>>
}

export type ElementPageAggregateInput = {
  AND?: InputMaybe<Array<ElementPageAggregateInput>>
  NOT?: InputMaybe<ElementPageAggregateInput>
  OR?: InputMaybe<Array<ElementPageAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementPageNodeAggregationWhereInput>
}

export type ElementPageConnectFieldInput = {
  connect?: InputMaybe<PageConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PageConnectWhere>
}

export type ElementPageConnectOrCreateFieldInput = {
  onCreate: ElementPageConnectOrCreateFieldInputOnCreate
  where: PageConnectOrCreateWhere
}

export type ElementPageConnectOrCreateFieldInputOnCreate = {
  node: PageOnCreateInput
}

export type ElementPageConnection = {
  __typename?: 'ElementPageConnection'
  edges: Array<ElementPageRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementPageConnectionSort = {
  node?: InputMaybe<PageSort>
}

export type ElementPageConnectionWhere = {
  AND?: InputMaybe<Array<ElementPageConnectionWhere>>
  NOT?: InputMaybe<ElementPageConnectionWhere>
  OR?: InputMaybe<Array<ElementPageConnectionWhere>>
  node?: InputMaybe<PageWhere>
}

export type ElementPageCreateFieldInput = {
  node: PageCreateInput
}

export type ElementPageDeleteFieldInput = {
  delete?: InputMaybe<PageDeleteInput>
  where?: InputMaybe<ElementPageConnectionWhere>
}

export type ElementPageDisconnectFieldInput = {
  disconnect?: InputMaybe<PageDisconnectInput>
  where?: InputMaybe<ElementPageConnectionWhere>
}

export type ElementPageFieldInput = {
  connect?: InputMaybe<ElementPageConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementPageConnectOrCreateFieldInput>
  create?: InputMaybe<ElementPageCreateFieldInput>
}

export type ElementPageNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementPageNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementPageNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementPageNodeAggregationWhereInput>>
  _compoundName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementPagePageAggregationSelection = {
  __typename?: 'ElementPagePageAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementPagePageNodeAggregateSelection>
}

export type ElementPagePageNodeAggregateSelection = {
  __typename?: 'ElementPagePageNodeAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  url: StringAggregateSelectionNonNullable
}

export type ElementPageRelationship = {
  __typename?: 'ElementPageRelationship'
  cursor: Scalars['String']['output']
  node: Page
}

export type ElementPageUpdateConnectionInput = {
  node?: InputMaybe<PageUpdateInput>
}

export type ElementPageUpdateFieldInput = {
  connect?: InputMaybe<ElementPageConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementPageConnectOrCreateFieldInput>
  create?: InputMaybe<ElementPageCreateFieldInput>
  delete?: InputMaybe<ElementPageDeleteFieldInput>
  disconnect?: InputMaybe<ElementPageDisconnectFieldInput>
  update?: InputMaybe<ElementPageUpdateConnectionInput>
  where?: InputMaybe<ElementPageConnectionWhere>
}

export type ElementParentAggregateInput = {
  AND?: InputMaybe<Array<ElementParentAggregateInput>>
  NOT?: InputMaybe<ElementParentAggregateInput>
  OR?: InputMaybe<Array<ElementParentAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementParentNodeAggregationWhereInput>
}

export type ElementParentComponentAggregateInput = {
  AND?: InputMaybe<Array<ElementParentComponentAggregateInput>>
  NOT?: InputMaybe<ElementParentComponentAggregateInput>
  OR?: InputMaybe<Array<ElementParentComponentAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementParentComponentNodeAggregationWhereInput>
}

export type ElementParentComponentConnectFieldInput = {
  connect?: InputMaybe<ComponentConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ComponentConnectWhere>
}

export type ElementParentComponentConnectOrCreateFieldInput = {
  onCreate: ElementParentComponentConnectOrCreateFieldInputOnCreate
  where: ComponentConnectOrCreateWhere
}

export type ElementParentComponentConnectOrCreateFieldInputOnCreate = {
  node: ComponentOnCreateInput
}

export type ElementParentComponentConnection = {
  __typename?: 'ElementParentComponentConnection'
  edges: Array<ElementParentComponentRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementParentComponentConnectionSort = {
  node?: InputMaybe<ComponentSort>
}

export type ElementParentComponentConnectionWhere = {
  AND?: InputMaybe<Array<ElementParentComponentConnectionWhere>>
  NOT?: InputMaybe<ElementParentComponentConnectionWhere>
  OR?: InputMaybe<Array<ElementParentComponentConnectionWhere>>
  node?: InputMaybe<ComponentWhere>
}

export type ElementParentComponentCreateFieldInput = {
  node: ComponentCreateInput
}

export type ElementParentComponentDeleteFieldInput = {
  delete?: InputMaybe<ComponentDeleteInput>
  where?: InputMaybe<ElementParentComponentConnectionWhere>
}

export type ElementParentComponentDisconnectFieldInput = {
  disconnect?: InputMaybe<ComponentDisconnectInput>
  where?: InputMaybe<ElementParentComponentConnectionWhere>
}

export type ElementParentComponentFieldInput = {
  connect?: InputMaybe<ElementParentComponentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementParentComponentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementParentComponentCreateFieldInput>
}

export type ElementParentComponentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementParentComponentNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementParentComponentNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementParentComponentNodeAggregationWhereInput>>
  keyGenerator_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementParentComponentRelationship = {
  __typename?: 'ElementParentComponentRelationship'
  cursor: Scalars['String']['output']
  node: Component
}

export type ElementParentComponentUpdateConnectionInput = {
  node?: InputMaybe<ComponentUpdateInput>
}

export type ElementParentComponentUpdateFieldInput = {
  connect?: InputMaybe<ElementParentComponentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementParentComponentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementParentComponentCreateFieldInput>
  delete?: InputMaybe<ElementParentComponentDeleteFieldInput>
  disconnect?: InputMaybe<ElementParentComponentDisconnectFieldInput>
  update?: InputMaybe<ElementParentComponentUpdateConnectionInput>
  where?: InputMaybe<ElementParentComponentConnectionWhere>
}

export type ElementParentConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type ElementParentConnectOrCreateFieldInput = {
  onCreate: ElementParentConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ElementParentConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type ElementParentConnection = {
  __typename?: 'ElementParentConnection'
  edges: Array<ElementParentRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementParentConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ElementParentConnectionWhere = {
  AND?: InputMaybe<Array<ElementParentConnectionWhere>>
  NOT?: InputMaybe<ElementParentConnectionWhere>
  OR?: InputMaybe<Array<ElementParentConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type ElementParentCreateFieldInput = {
  node: ElementCreateInput
}

export type ElementParentDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementParentDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementParentFieldInput = {
  connect?: InputMaybe<ElementParentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementParentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementParentCreateFieldInput>
}

export type ElementParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementParentNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementParentNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementParentNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementParentRelationship = {
  __typename?: 'ElementParentRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type ElementParentUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ElementParentUpdateFieldInput = {
  connect?: InputMaybe<ElementParentConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementParentConnectOrCreateFieldInput>
  create?: InputMaybe<ElementParentCreateFieldInput>
  delete?: InputMaybe<ElementParentDeleteFieldInput>
  disconnect?: InputMaybe<ElementParentDisconnectFieldInput>
  update?: InputMaybe<ElementParentUpdateConnectionInput>
  where?: InputMaybe<ElementParentConnectionWhere>
}

export type ElementPostRenderActionConnectFieldInput = {
  connect?: InputMaybe<BaseActionConnectInput>
  where?: InputMaybe<BaseActionConnectWhere>
}

export type ElementPostRenderActionConnection = {
  __typename?: 'ElementPostRenderActionConnection'
  edges: Array<ElementPostRenderActionRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementPostRenderActionConnectionSort = {
  node?: InputMaybe<BaseActionSort>
}

export type ElementPostRenderActionConnectionWhere = {
  AND?: InputMaybe<Array<ElementPostRenderActionConnectionWhere>>
  NOT?: InputMaybe<ElementPostRenderActionConnectionWhere>
  OR?: InputMaybe<Array<ElementPostRenderActionConnectionWhere>>
  node?: InputMaybe<BaseActionWhere>
}

export type ElementPostRenderActionCreateFieldInput = {
  node: BaseActionCreateInput
}

export type ElementPostRenderActionDeleteFieldInput = {
  delete?: InputMaybe<BaseActionDeleteInput>
  where?: InputMaybe<ElementPostRenderActionConnectionWhere>
}

export type ElementPostRenderActionDisconnectFieldInput = {
  disconnect?: InputMaybe<BaseActionDisconnectInput>
  where?: InputMaybe<ElementPostRenderActionConnectionWhere>
}

export type ElementPostRenderActionFieldInput = {
  connect?: InputMaybe<ElementPostRenderActionConnectFieldInput>
  create?: InputMaybe<ElementPostRenderActionCreateFieldInput>
}

export type ElementPostRenderActionRelationship = {
  __typename?: 'ElementPostRenderActionRelationship'
  cursor: Scalars['String']['output']
  node: BaseAction
}

export type ElementPostRenderActionUpdateConnectionInput = {
  node?: InputMaybe<BaseActionUpdateInput>
}

export type ElementPostRenderActionUpdateFieldInput = {
  connect?: InputMaybe<ElementPostRenderActionConnectFieldInput>
  create?: InputMaybe<ElementPostRenderActionCreateFieldInput>
  delete?: InputMaybe<ElementPostRenderActionDeleteFieldInput>
  disconnect?: InputMaybe<ElementPostRenderActionDisconnectFieldInput>
  update?: InputMaybe<ElementPostRenderActionUpdateConnectionInput>
  where?: InputMaybe<ElementPostRenderActionConnectionWhere>
}

export type ElementPreRenderActionConnectFieldInput = {
  connect?: InputMaybe<BaseActionConnectInput>
  where?: InputMaybe<BaseActionConnectWhere>
}

export type ElementPreRenderActionConnection = {
  __typename?: 'ElementPreRenderActionConnection'
  edges: Array<ElementPreRenderActionRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementPreRenderActionConnectionSort = {
  node?: InputMaybe<BaseActionSort>
}

export type ElementPreRenderActionConnectionWhere = {
  AND?: InputMaybe<Array<ElementPreRenderActionConnectionWhere>>
  NOT?: InputMaybe<ElementPreRenderActionConnectionWhere>
  OR?: InputMaybe<Array<ElementPreRenderActionConnectionWhere>>
  node?: InputMaybe<BaseActionWhere>
}

export type ElementPreRenderActionCreateFieldInput = {
  node: BaseActionCreateInput
}

export type ElementPreRenderActionDeleteFieldInput = {
  delete?: InputMaybe<BaseActionDeleteInput>
  where?: InputMaybe<ElementPreRenderActionConnectionWhere>
}

export type ElementPreRenderActionDisconnectFieldInput = {
  disconnect?: InputMaybe<BaseActionDisconnectInput>
  where?: InputMaybe<ElementPreRenderActionConnectionWhere>
}

export type ElementPreRenderActionFieldInput = {
  connect?: InputMaybe<ElementPreRenderActionConnectFieldInput>
  create?: InputMaybe<ElementPreRenderActionCreateFieldInput>
}

export type ElementPreRenderActionRelationship = {
  __typename?: 'ElementPreRenderActionRelationship'
  cursor: Scalars['String']['output']
  node: BaseAction
}

export type ElementPreRenderActionUpdateConnectionInput = {
  node?: InputMaybe<BaseActionUpdateInput>
}

export type ElementPreRenderActionUpdateFieldInput = {
  connect?: InputMaybe<ElementPreRenderActionConnectFieldInput>
  create?: InputMaybe<ElementPreRenderActionCreateFieldInput>
  delete?: InputMaybe<ElementPreRenderActionDeleteFieldInput>
  disconnect?: InputMaybe<ElementPreRenderActionDisconnectFieldInput>
  update?: InputMaybe<ElementPreRenderActionUpdateConnectionInput>
  where?: InputMaybe<ElementPreRenderActionConnectionWhere>
}

export type ElementPrevSiblingAggregateInput = {
  AND?: InputMaybe<Array<ElementPrevSiblingAggregateInput>>
  NOT?: InputMaybe<ElementPrevSiblingAggregateInput>
  OR?: InputMaybe<Array<ElementPrevSiblingAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementPrevSiblingNodeAggregationWhereInput>
}

export type ElementPrevSiblingConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type ElementPrevSiblingConnectOrCreateFieldInput = {
  onCreate: ElementPrevSiblingConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type ElementPrevSiblingConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type ElementPrevSiblingConnection = {
  __typename?: 'ElementPrevSiblingConnection'
  edges: Array<ElementPrevSiblingRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementPrevSiblingConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type ElementPrevSiblingConnectionWhere = {
  AND?: InputMaybe<Array<ElementPrevSiblingConnectionWhere>>
  NOT?: InputMaybe<ElementPrevSiblingConnectionWhere>
  OR?: InputMaybe<Array<ElementPrevSiblingConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type ElementPrevSiblingCreateFieldInput = {
  node: ElementCreateInput
}

export type ElementPrevSiblingDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementPrevSiblingConnectionWhere>
}

export type ElementPrevSiblingDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<ElementPrevSiblingConnectionWhere>
}

export type ElementPrevSiblingFieldInput = {
  connect?: InputMaybe<ElementPrevSiblingConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementPrevSiblingConnectOrCreateFieldInput>
  create?: InputMaybe<ElementPrevSiblingCreateFieldInput>
}

export type ElementPrevSiblingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementPrevSiblingNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementPrevSiblingNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementPrevSiblingNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementPrevSiblingRelationship = {
  __typename?: 'ElementPrevSiblingRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type ElementPrevSiblingUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type ElementPrevSiblingUpdateFieldInput = {
  connect?: InputMaybe<ElementPrevSiblingConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementPrevSiblingConnectOrCreateFieldInput>
  create?: InputMaybe<ElementPrevSiblingCreateFieldInput>
  delete?: InputMaybe<ElementPrevSiblingDeleteFieldInput>
  disconnect?: InputMaybe<ElementPrevSiblingDisconnectFieldInput>
  update?: InputMaybe<ElementPrevSiblingUpdateConnectionInput>
  where?: InputMaybe<ElementPrevSiblingConnectionWhere>
}

export type ElementPropPropsAggregationSelection = {
  __typename?: 'ElementPropPropsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementPropPropsNodeAggregateSelection>
}

export type ElementPropPropsNodeAggregateSelection = {
  __typename?: 'ElementPropPropsNodeAggregateSelection'
  data: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type ElementPropsAggregateInput = {
  AND?: InputMaybe<Array<ElementPropsAggregateInput>>
  NOT?: InputMaybe<ElementPropsAggregateInput>
  OR?: InputMaybe<Array<ElementPropsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementPropsNodeAggregationWhereInput>
}

export type ElementPropsConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PropConnectWhere>
}

export type ElementPropsConnectOrCreateFieldInput = {
  onCreate: ElementPropsConnectOrCreateFieldInputOnCreate
  where: PropConnectOrCreateWhere
}

export type ElementPropsConnectOrCreateFieldInputOnCreate = {
  node: PropOnCreateInput
}

export type ElementPropsConnection = {
  __typename?: 'ElementPropsConnection'
  edges: Array<ElementPropsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementPropsConnectionSort = {
  node?: InputMaybe<PropSort>
}

export type ElementPropsConnectionWhere = {
  AND?: InputMaybe<Array<ElementPropsConnectionWhere>>
  NOT?: InputMaybe<ElementPropsConnectionWhere>
  OR?: InputMaybe<Array<ElementPropsConnectionWhere>>
  node?: InputMaybe<PropWhere>
}

export type ElementPropsCreateFieldInput = {
  node: PropCreateInput
}

export type ElementPropsDeleteFieldInput = {
  where?: InputMaybe<ElementPropsConnectionWhere>
}

export type ElementPropsDisconnectFieldInput = {
  where?: InputMaybe<ElementPropsConnectionWhere>
}

export type ElementPropsFieldInput = {
  connect?: InputMaybe<ElementPropsConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementPropsConnectOrCreateFieldInput>
  create?: InputMaybe<ElementPropsCreateFieldInput>
}

export type ElementPropsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementPropsNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementPropsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementPropsNodeAggregationWhereInput>>
  data_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  data_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementPropsRelationship = {
  __typename?: 'ElementPropsRelationship'
  cursor: Scalars['String']['output']
  node: Prop
}

export type ElementPropsUpdateConnectionInput = {
  node?: InputMaybe<PropUpdateInput>
}

export type ElementPropsUpdateFieldInput = {
  connect?: InputMaybe<ElementPropsConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementPropsConnectOrCreateFieldInput>
  create?: InputMaybe<ElementPropsCreateFieldInput>
  delete?: InputMaybe<ElementPropsDeleteFieldInput>
  disconnect?: InputMaybe<ElementPropsDisconnectFieldInput>
  update?: InputMaybe<ElementPropsUpdateConnectionInput>
  where?: InputMaybe<ElementPropsConnectionWhere>
}

export type ElementRelationInput = {
  childMapperComponent?: InputMaybe<ElementChildMapperComponentCreateFieldInput>
  childMapperPreviousSibling?: InputMaybe<ElementChildMapperPreviousSiblingCreateFieldInput>
  firstChild?: InputMaybe<ElementFirstChildCreateFieldInput>
  nextSibling?: InputMaybe<ElementNextSiblingCreateFieldInput>
  page?: InputMaybe<ElementPageCreateFieldInput>
  parent?: InputMaybe<ElementParentCreateFieldInput>
  parentComponent?: InputMaybe<ElementParentComponentCreateFieldInput>
  postRenderAction?: InputMaybe<ElementPostRenderActionCreateFieldInput>
  preRenderAction?: InputMaybe<ElementPreRenderActionCreateFieldInput>
  prevSibling?: InputMaybe<ElementPrevSiblingCreateFieldInput>
  props?: InputMaybe<ElementPropsCreateFieldInput>
  renderAtomType?: InputMaybe<ElementRenderAtomTypeCreateFieldInput>
  renderComponentType?: InputMaybe<ElementRenderComponentTypeCreateFieldInput>
}

export type ElementRenderAtomTypeAggregateInput = {
  AND?: InputMaybe<Array<ElementRenderAtomTypeAggregateInput>>
  NOT?: InputMaybe<ElementRenderAtomTypeAggregateInput>
  OR?: InputMaybe<Array<ElementRenderAtomTypeAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementRenderAtomTypeNodeAggregationWhereInput>
}

export type ElementRenderAtomTypeConnectFieldInput = {
  connect?: InputMaybe<AtomConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AtomConnectWhere>
}

export type ElementRenderAtomTypeConnectOrCreateFieldInput = {
  onCreate: ElementRenderAtomTypeConnectOrCreateFieldInputOnCreate
  where: AtomConnectOrCreateWhere
}

export type ElementRenderAtomTypeConnectOrCreateFieldInputOnCreate = {
  node: AtomOnCreateInput
}

export type ElementRenderAtomTypeConnection = {
  __typename?: 'ElementRenderAtomTypeConnection'
  edges: Array<ElementRenderAtomTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementRenderAtomTypeConnectionSort = {
  node?: InputMaybe<AtomSort>
}

export type ElementRenderAtomTypeConnectionWhere = {
  AND?: InputMaybe<Array<ElementRenderAtomTypeConnectionWhere>>
  NOT?: InputMaybe<ElementRenderAtomTypeConnectionWhere>
  OR?: InputMaybe<Array<ElementRenderAtomTypeConnectionWhere>>
  node?: InputMaybe<AtomWhere>
}

export type ElementRenderAtomTypeCreateFieldInput = {
  node: AtomCreateInput
}

export type ElementRenderAtomTypeDeleteFieldInput = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<ElementRenderAtomTypeConnectionWhere>
}

export type ElementRenderAtomTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<AtomDisconnectInput>
  where?: InputMaybe<ElementRenderAtomTypeConnectionWhere>
}

export type ElementRenderAtomTypeFieldInput = {
  connect?: InputMaybe<ElementRenderAtomTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementRenderAtomTypeConnectOrCreateFieldInput>
  create?: InputMaybe<ElementRenderAtomTypeCreateFieldInput>
}

export type ElementRenderAtomTypeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementRenderAtomTypeNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementRenderAtomTypeNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementRenderAtomTypeNodeAggregationWhereInput>>
  externalCssSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  externalSourceType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementRenderAtomTypeRelationship = {
  __typename?: 'ElementRenderAtomTypeRelationship'
  cursor: Scalars['String']['output']
  node: Atom
}

export type ElementRenderAtomTypeUpdateConnectionInput = {
  node?: InputMaybe<AtomUpdateInput>
}

export type ElementRenderAtomTypeUpdateFieldInput = {
  connect?: InputMaybe<ElementRenderAtomTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementRenderAtomTypeConnectOrCreateFieldInput>
  create?: InputMaybe<ElementRenderAtomTypeCreateFieldInput>
  delete?: InputMaybe<ElementRenderAtomTypeDeleteFieldInput>
  disconnect?: InputMaybe<ElementRenderAtomTypeDisconnectFieldInput>
  update?: InputMaybe<ElementRenderAtomTypeUpdateConnectionInput>
  where?: InputMaybe<ElementRenderAtomTypeConnectionWhere>
}

export type ElementRenderComponentTypeAggregateInput = {
  AND?: InputMaybe<Array<ElementRenderComponentTypeAggregateInput>>
  NOT?: InputMaybe<ElementRenderComponentTypeAggregateInput>
  OR?: InputMaybe<Array<ElementRenderComponentTypeAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementRenderComponentTypeNodeAggregationWhereInput>
}

export type ElementRenderComponentTypeConnectFieldInput = {
  connect?: InputMaybe<ComponentConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ComponentConnectWhere>
}

export type ElementRenderComponentTypeConnectOrCreateFieldInput = {
  onCreate: ElementRenderComponentTypeConnectOrCreateFieldInputOnCreate
  where: ComponentConnectOrCreateWhere
}

export type ElementRenderComponentTypeConnectOrCreateFieldInputOnCreate = {
  node: ComponentOnCreateInput
}

export type ElementRenderComponentTypeConnection = {
  __typename?: 'ElementRenderComponentTypeConnection'
  edges: Array<ElementRenderComponentTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementRenderComponentTypeConnectionSort = {
  node?: InputMaybe<ComponentSort>
}

export type ElementRenderComponentTypeConnectionWhere = {
  AND?: InputMaybe<Array<ElementRenderComponentTypeConnectionWhere>>
  NOT?: InputMaybe<ElementRenderComponentTypeConnectionWhere>
  OR?: InputMaybe<Array<ElementRenderComponentTypeConnectionWhere>>
  node?: InputMaybe<ComponentWhere>
}

export type ElementRenderComponentTypeCreateFieldInput = {
  node: ComponentCreateInput
}

export type ElementRenderComponentTypeDeleteFieldInput = {
  delete?: InputMaybe<ComponentDeleteInput>
  where?: InputMaybe<ElementRenderComponentTypeConnectionWhere>
}

export type ElementRenderComponentTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<ComponentDisconnectInput>
  where?: InputMaybe<ElementRenderComponentTypeConnectionWhere>
}

export type ElementRenderComponentTypeFieldInput = {
  connect?: InputMaybe<ElementRenderComponentTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementRenderComponentTypeConnectOrCreateFieldInput>
  create?: InputMaybe<ElementRenderComponentTypeCreateFieldInput>
}

export type ElementRenderComponentTypeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementRenderComponentTypeNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementRenderComponentTypeNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementRenderComponentTypeNodeAggregationWhereInput>>
  keyGenerator_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementRenderComponentTypeRelationship = {
  __typename?: 'ElementRenderComponentTypeRelationship'
  cursor: Scalars['String']['output']
  node: Component
}

export type ElementRenderComponentTypeUpdateConnectionInput = {
  node?: InputMaybe<ComponentUpdateInput>
}

export type ElementRenderComponentTypeUpdateFieldInput = {
  connect?: InputMaybe<ElementRenderComponentTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<ElementRenderComponentTypeConnectOrCreateFieldInput>
  create?: InputMaybe<ElementRenderComponentTypeCreateFieldInput>
  delete?: InputMaybe<ElementRenderComponentTypeDeleteFieldInput>
  disconnect?: InputMaybe<ElementRenderComponentTypeDisconnectFieldInput>
  update?: InputMaybe<ElementRenderComponentTypeUpdateConnectionInput>
  where?: InputMaybe<ElementRenderComponentTypeConnectionWhere>
}

/** Fields to sort Elements by. The order in which sorts are applied is not guaranteed when specifying many fields in one ElementSort object. */
export type ElementSort = {
  childMapperPropKey?: InputMaybe<SortDirection>
  customCss?: InputMaybe<SortDirection>
  guiCss?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  propTransformationJs?: InputMaybe<SortDirection>
  renderForEachPropKey?: InputMaybe<SortDirection>
  renderIfExpression?: InputMaybe<SortDirection>
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ElementType = IBaseType & {
  __typename?: 'ElementType'
  /** Allows scoping the type of element to only descendants, children or all elements */
  elementKind: ElementTypeKind
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<ElementTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ElementTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ElementTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking an element from the current tree
 * Is passed to the rendered element as a React node
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ElementTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type ElementTypeAggregateSelection = {
  __typename?: 'ElementTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ElementTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type ElementTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type ElementTypeConnectOrCreateWhere = {
  node: ElementTypeUniqueWhere
}

export type ElementTypeConnectWhere = {
  node: ElementTypeWhere
}

export type ElementTypeCreateInput = {
  elementKind: ElementTypeKind
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type ElementTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type ElementTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type ElementTypeEdge = {
  __typename?: 'ElementTypeEdge'
  cursor: Scalars['String']['output']
  node: ElementType
}

export enum ElementTypeKind {
  AllElements = 'AllElements',
  ChildrenOnly = 'ChildrenOnly',
  DescendantsOnly = 'DescendantsOnly',
  ExcludeDescendantsElements = 'ExcludeDescendantsElements',
}

export type ElementTypeOnCreateInput = {
  elementKind: ElementTypeKind
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type ElementTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ElementTypeSort objects to sort ElementTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ElementTypeSort>>
}

export type ElementTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<ElementTypeOwnerAggregateInput>>
  NOT?: InputMaybe<ElementTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<ElementTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ElementTypeOwnerNodeAggregationWhereInput>
}

export type ElementTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ElementTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<ElementTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ElementTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ElementTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort ElementTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ElementTypeSort object. */
export type ElementTypeSort = {
  elementKind?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ElementTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ElementTypeUpdateInput = {
  elementKind?: InputMaybe<ElementTypeKind>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type ElementTypeUserOwnerAggregationSelection = {
  __typename?: 'ElementTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ElementTypeUserOwnerNodeAggregateSelection>
}

export type ElementTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'ElementTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type ElementTypeWhere = {
  AND?: InputMaybe<Array<ElementTypeWhere>>
  NOT?: InputMaybe<ElementTypeWhere>
  OR?: InputMaybe<Array<ElementTypeWhere>>
  elementKind?: InputMaybe<ElementTypeKind>
  elementKind_IN?: InputMaybe<Array<ElementTypeKind>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ElementTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type ElementTypesConnection = {
  __typename?: 'ElementTypesConnection'
  edges: Array<ElementTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ElementUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ElementUpdateInput = {
  childMapperComponent?: InputMaybe<ElementChildMapperComponentUpdateFieldInput>
  childMapperPreviousSibling?: InputMaybe<ElementChildMapperPreviousSiblingUpdateFieldInput>
  childMapperPropKey?: InputMaybe<Scalars['String']['input']>
  customCss?: InputMaybe<Scalars['String']['input']>
  firstChild?: InputMaybe<ElementFirstChildUpdateFieldInput>
  guiCss?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  nextSibling?: InputMaybe<ElementNextSiblingUpdateFieldInput>
  page?: InputMaybe<ElementPageUpdateFieldInput>
  parent?: InputMaybe<ElementParentUpdateFieldInput>
  parentComponent?: InputMaybe<ElementParentComponentUpdateFieldInput>
  postRenderAction?: InputMaybe<ElementPostRenderActionUpdateFieldInput>
  preRenderAction?: InputMaybe<ElementPreRenderActionUpdateFieldInput>
  prevSibling?: InputMaybe<ElementPrevSiblingUpdateFieldInput>
  propTransformationJs?: InputMaybe<Scalars['String']['input']>
  props?: InputMaybe<ElementPropsUpdateFieldInput>
  renderAtomType?: InputMaybe<ElementRenderAtomTypeUpdateFieldInput>
  renderComponentType?: InputMaybe<ElementRenderComponentTypeUpdateFieldInput>
  renderForEachPropKey?: InputMaybe<Scalars['String']['input']>
  renderIfExpression?: InputMaybe<Scalars['String']['input']>
}

export type ElementWhere = {
  AND?: InputMaybe<Array<ElementWhere>>
  NOT?: InputMaybe<ElementWhere>
  OR?: InputMaybe<Array<ElementWhere>>
  childMapperComponent?: InputMaybe<ComponentWhere>
  childMapperComponentAggregate?: InputMaybe<ElementChildMapperComponentAggregateInput>
  childMapperComponentConnection?: InputMaybe<ElementChildMapperComponentConnectionWhere>
  childMapperComponentConnection_NOT?: InputMaybe<ElementChildMapperComponentConnectionWhere>
  childMapperComponent_NOT?: InputMaybe<ComponentWhere>
  childMapperPreviousSibling?: InputMaybe<ElementWhere>
  childMapperPreviousSiblingAggregate?: InputMaybe<ElementChildMapperPreviousSiblingAggregateInput>
  childMapperPreviousSiblingConnection?: InputMaybe<ElementChildMapperPreviousSiblingConnectionWhere>
  childMapperPreviousSiblingConnection_NOT?: InputMaybe<ElementChildMapperPreviousSiblingConnectionWhere>
  childMapperPreviousSibling_NOT?: InputMaybe<ElementWhere>
  childMapperPropKey?: InputMaybe<Scalars['String']['input']>
  childMapperPropKey_CONTAINS?: InputMaybe<Scalars['String']['input']>
  childMapperPropKey_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  childMapperPropKey_IN?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  childMapperPropKey_MATCHES?: InputMaybe<Scalars['String']['input']>
  childMapperPropKey_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  customCss?: InputMaybe<Scalars['String']['input']>
  customCss_CONTAINS?: InputMaybe<Scalars['String']['input']>
  customCss_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  customCss_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  customCss_MATCHES?: InputMaybe<Scalars['String']['input']>
  customCss_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  firstChild?: InputMaybe<ElementWhere>
  firstChildAggregate?: InputMaybe<ElementFirstChildAggregateInput>
  firstChildConnection?: InputMaybe<ElementFirstChildConnectionWhere>
  firstChildConnection_NOT?: InputMaybe<ElementFirstChildConnectionWhere>
  firstChild_NOT?: InputMaybe<ElementWhere>
  guiCss?: InputMaybe<Scalars['String']['input']>
  guiCss_CONTAINS?: InputMaybe<Scalars['String']['input']>
  guiCss_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  guiCss_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  guiCss_MATCHES?: InputMaybe<Scalars['String']['input']>
  guiCss_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  nextSibling?: InputMaybe<ElementWhere>
  nextSiblingAggregate?: InputMaybe<ElementNextSiblingAggregateInput>
  nextSiblingConnection?: InputMaybe<ElementNextSiblingConnectionWhere>
  nextSiblingConnection_NOT?: InputMaybe<ElementNextSiblingConnectionWhere>
  nextSibling_NOT?: InputMaybe<ElementWhere>
  page?: InputMaybe<PageWhere>
  pageAggregate?: InputMaybe<ElementPageAggregateInput>
  pageConnection?: InputMaybe<ElementPageConnectionWhere>
  pageConnection_NOT?: InputMaybe<ElementPageConnectionWhere>
  page_NOT?: InputMaybe<PageWhere>
  parent?: InputMaybe<ElementWhere>
  parentAggregate?: InputMaybe<ElementParentAggregateInput>
  parentComponent?: InputMaybe<ComponentWhere>
  parentComponentAggregate?: InputMaybe<ElementParentComponentAggregateInput>
  parentComponentConnection?: InputMaybe<ElementParentComponentConnectionWhere>
  parentComponentConnection_NOT?: InputMaybe<ElementParentComponentConnectionWhere>
  parentComponent_NOT?: InputMaybe<ComponentWhere>
  parentConnection?: InputMaybe<ElementParentConnectionWhere>
  parentConnection_NOT?: InputMaybe<ElementParentConnectionWhere>
  parent_NOT?: InputMaybe<ElementWhere>
  postRenderActionConnection?: InputMaybe<ElementPostRenderActionConnectionWhere>
  postRenderActionConnection_NOT?: InputMaybe<ElementPostRenderActionConnectionWhere>
  preRenderActionConnection?: InputMaybe<ElementPreRenderActionConnectionWhere>
  preRenderActionConnection_NOT?: InputMaybe<ElementPreRenderActionConnectionWhere>
  prevSibling?: InputMaybe<ElementWhere>
  prevSiblingAggregate?: InputMaybe<ElementPrevSiblingAggregateInput>
  prevSiblingConnection?: InputMaybe<ElementPrevSiblingConnectionWhere>
  prevSiblingConnection_NOT?: InputMaybe<ElementPrevSiblingConnectionWhere>
  prevSibling_NOT?: InputMaybe<ElementWhere>
  propTransformationJs?: InputMaybe<Scalars['String']['input']>
  propTransformationJs_CONTAINS?: InputMaybe<Scalars['String']['input']>
  propTransformationJs_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  propTransformationJs_IN?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  propTransformationJs_MATCHES?: InputMaybe<Scalars['String']['input']>
  propTransformationJs_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  props?: InputMaybe<PropWhere>
  propsAggregate?: InputMaybe<ElementPropsAggregateInput>
  propsConnection?: InputMaybe<ElementPropsConnectionWhere>
  propsConnection_NOT?: InputMaybe<ElementPropsConnectionWhere>
  props_NOT?: InputMaybe<PropWhere>
  renderAtomType?: InputMaybe<AtomWhere>
  renderAtomTypeAggregate?: InputMaybe<ElementRenderAtomTypeAggregateInput>
  renderAtomTypeConnection?: InputMaybe<ElementRenderAtomTypeConnectionWhere>
  renderAtomTypeConnection_NOT?: InputMaybe<ElementRenderAtomTypeConnectionWhere>
  renderAtomType_NOT?: InputMaybe<AtomWhere>
  renderComponentType?: InputMaybe<ComponentWhere>
  renderComponentTypeAggregate?: InputMaybe<ElementRenderComponentTypeAggregateInput>
  renderComponentTypeConnection?: InputMaybe<ElementRenderComponentTypeConnectionWhere>
  renderComponentTypeConnection_NOT?: InputMaybe<ElementRenderComponentTypeConnectionWhere>
  renderComponentType_NOT?: InputMaybe<ComponentWhere>
  renderForEachPropKey?: InputMaybe<Scalars['String']['input']>
  renderForEachPropKey_CONTAINS?: InputMaybe<Scalars['String']['input']>
  renderForEachPropKey_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  renderForEachPropKey_IN?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  renderForEachPropKey_MATCHES?: InputMaybe<Scalars['String']['input']>
  renderForEachPropKey_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  renderIfExpression?: InputMaybe<Scalars['String']['input']>
  renderIfExpression_CONTAINS?: InputMaybe<Scalars['String']['input']>
  renderIfExpression_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  renderIfExpression_IN?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  renderIfExpression_MATCHES?: InputMaybe<Scalars['String']['input']>
  renderIfExpression_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
}

export type ElementsConnection = {
  __typename?: 'ElementsConnection'
  edges: Array<ElementEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumType = IBaseType & {
  __typename?: 'EnumType'
  allowedValues: Array<EnumTypeValue>
  allowedValuesAggregate?: Maybe<EnumTypeEnumTypeValueAllowedValuesAggregationSelection>
  allowedValuesConnection: EnumTypeAllowedValuesConnection
  fieldRefs: Array<Field>
  fieldRefsAggregate?: Maybe<EnumTypeFieldFieldRefsAggregationSelection>
  fieldRefsConnection: EnumTypeFieldRefsConnection
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<EnumTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeAllowedValuesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<EnumTypeValueOptions>
  where?: InputMaybe<EnumTypeValueWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeAllowedValuesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<EnumTypeValueWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeAllowedValuesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<EnumTypeAllowedValuesConnectionSort>>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeFieldRefsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<FieldOptions>
  where?: InputMaybe<FieldWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeFieldRefsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FieldWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeFieldRefsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<EnumTypeFieldRefsConnectionSort>>
  where?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows choosing one of a set of allowed values.
 * The value gets passed to the render pipe as a Enum Type Value id.
 * The actual value must be de-referenced by the id.
 */
export type EnumTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type EnumTypeAggregateSelection = {
  __typename?: 'EnumTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type EnumTypeAllowedValuesAggregateInput = {
  AND?: InputMaybe<Array<EnumTypeAllowedValuesAggregateInput>>
  NOT?: InputMaybe<EnumTypeAllowedValuesAggregateInput>
  OR?: InputMaybe<Array<EnumTypeAllowedValuesAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<EnumTypeAllowedValuesNodeAggregationWhereInput>
}

export type EnumTypeAllowedValuesConnectFieldInput = {
  connect?: InputMaybe<Array<EnumTypeValueConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<EnumTypeValueConnectWhere>
}

export type EnumTypeAllowedValuesConnection = {
  __typename?: 'EnumTypeAllowedValuesConnection'
  edges: Array<EnumTypeAllowedValuesRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type EnumTypeAllowedValuesConnectionSort = {
  node?: InputMaybe<EnumTypeValueSort>
}

export type EnumTypeAllowedValuesConnectionWhere = {
  AND?: InputMaybe<Array<EnumTypeAllowedValuesConnectionWhere>>
  NOT?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
  OR?: InputMaybe<Array<EnumTypeAllowedValuesConnectionWhere>>
  node?: InputMaybe<EnumTypeValueWhere>
}

export type EnumTypeAllowedValuesCreateFieldInput = {
  node: EnumTypeValueCreateInput
}

export type EnumTypeAllowedValuesDeleteFieldInput = {
  delete?: InputMaybe<EnumTypeValueDeleteInput>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

export type EnumTypeAllowedValuesDisconnectFieldInput = {
  disconnect?: InputMaybe<EnumTypeValueDisconnectInput>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

export type EnumTypeAllowedValuesFieldInput = {
  connect?: InputMaybe<Array<EnumTypeAllowedValuesConnectFieldInput>>
  create?: InputMaybe<Array<EnumTypeAllowedValuesCreateFieldInput>>
}

export type EnumTypeAllowedValuesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnumTypeAllowedValuesNodeAggregationWhereInput>>
  NOT?: InputMaybe<EnumTypeAllowedValuesNodeAggregationWhereInput>
  OR?: InputMaybe<Array<EnumTypeAllowedValuesNodeAggregationWhereInput>>
  key_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  key_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  value_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  value_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  value_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  value_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  value_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  value_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  value_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  value_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  value_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  value_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  value_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  value_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  value_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  value_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  value_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type EnumTypeAllowedValuesRelationship = {
  __typename?: 'EnumTypeAllowedValuesRelationship'
  cursor: Scalars['String']['output']
  node: EnumTypeValue
}

export type EnumTypeAllowedValuesUpdateConnectionInput = {
  node?: InputMaybe<EnumTypeValueUpdateInput>
}

export type EnumTypeAllowedValuesUpdateFieldInput = {
  connect?: InputMaybe<Array<EnumTypeAllowedValuesConnectFieldInput>>
  create?: InputMaybe<Array<EnumTypeAllowedValuesCreateFieldInput>>
  delete?: InputMaybe<Array<EnumTypeAllowedValuesDeleteFieldInput>>
  disconnect?: InputMaybe<Array<EnumTypeAllowedValuesDisconnectFieldInput>>
  update?: InputMaybe<EnumTypeAllowedValuesUpdateConnectionInput>
  where?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
}

export type EnumTypeConnectInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesConnectFieldInput>>
  fieldRefs?: InputMaybe<Array<EnumTypeFieldRefsConnectFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type EnumTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type EnumTypeConnectOrCreateWhere = {
  node: EnumTypeUniqueWhere
}

export type EnumTypeConnectWhere = {
  node: EnumTypeWhere
}

export type EnumTypeCreateInput = {
  allowedValues?: InputMaybe<EnumTypeAllowedValuesFieldInput>
  fieldRefs?: InputMaybe<EnumTypeFieldRefsFieldInput>
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type EnumTypeDeleteInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesDeleteFieldInput>>
  fieldRefs?: InputMaybe<Array<EnumTypeFieldRefsDeleteFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type EnumTypeDisconnectInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesDisconnectFieldInput>>
  fieldRefs?: InputMaybe<Array<EnumTypeFieldRefsDisconnectFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type EnumTypeEdge = {
  __typename?: 'EnumTypeEdge'
  cursor: Scalars['String']['output']
  node: EnumType
}

export type EnumTypeEnumTypeValueAllowedValuesAggregationSelection = {
  __typename?: 'EnumTypeEnumTypeValueAllowedValuesAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<EnumTypeEnumTypeValueAllowedValuesNodeAggregateSelection>
}

export type EnumTypeEnumTypeValueAllowedValuesNodeAggregateSelection = {
  __typename?: 'EnumTypeEnumTypeValueAllowedValuesNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  value: StringAggregateSelectionNonNullable
}

export type EnumTypeFieldFieldRefsAggregationSelection = {
  __typename?: 'EnumTypeFieldFieldRefsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<EnumTypeFieldFieldRefsNodeAggregateSelection>
}

export type EnumTypeFieldFieldRefsNodeAggregateSelection = {
  __typename?: 'EnumTypeFieldFieldRefsNodeAggregateSelection'
  defaultValues: StringAggregateSelectionNullable
  description: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNullable
  validationRules: StringAggregateSelectionNullable
}

export type EnumTypeFieldRefsAggregateInput = {
  AND?: InputMaybe<Array<EnumTypeFieldRefsAggregateInput>>
  NOT?: InputMaybe<EnumTypeFieldRefsAggregateInput>
  OR?: InputMaybe<Array<EnumTypeFieldRefsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<EnumTypeFieldRefsNodeAggregationWhereInput>
}

export type EnumTypeFieldRefsConnectFieldInput = {
  connect?: InputMaybe<Array<FieldConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<FieldConnectWhere>
}

export type EnumTypeFieldRefsConnection = {
  __typename?: 'EnumTypeFieldRefsConnection'
  edges: Array<EnumTypeFieldRefsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type EnumTypeFieldRefsConnectionSort = {
  node?: InputMaybe<FieldSort>
}

export type EnumTypeFieldRefsConnectionWhere = {
  AND?: InputMaybe<Array<EnumTypeFieldRefsConnectionWhere>>
  NOT?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
  OR?: InputMaybe<Array<EnumTypeFieldRefsConnectionWhere>>
  node?: InputMaybe<FieldWhere>
}

export type EnumTypeFieldRefsCreateFieldInput = {
  node: FieldCreateInput
}

export type EnumTypeFieldRefsDeleteFieldInput = {
  delete?: InputMaybe<FieldDeleteInput>
  where?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
}

export type EnumTypeFieldRefsDisconnectFieldInput = {
  disconnect?: InputMaybe<FieldDisconnectInput>
  where?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
}

export type EnumTypeFieldRefsFieldInput = {
  connect?: InputMaybe<Array<EnumTypeFieldRefsConnectFieldInput>>
  create?: InputMaybe<Array<EnumTypeFieldRefsCreateFieldInput>>
}

export type EnumTypeFieldRefsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnumTypeFieldRefsNodeAggregationWhereInput>>
  NOT?: InputMaybe<EnumTypeFieldRefsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<EnumTypeFieldRefsNodeAggregationWhereInput>>
  defaultValues_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  key_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type EnumTypeFieldRefsRelationship = {
  __typename?: 'EnumTypeFieldRefsRelationship'
  cursor: Scalars['String']['output']
  node: Field
}

export type EnumTypeFieldRefsUpdateConnectionInput = {
  node?: InputMaybe<FieldUpdateInput>
}

export type EnumTypeFieldRefsUpdateFieldInput = {
  connect?: InputMaybe<Array<EnumTypeFieldRefsConnectFieldInput>>
  create?: InputMaybe<Array<EnumTypeFieldRefsCreateFieldInput>>
  delete?: InputMaybe<Array<EnumTypeFieldRefsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<EnumTypeFieldRefsDisconnectFieldInput>>
  update?: InputMaybe<EnumTypeFieldRefsUpdateConnectionInput>
  where?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
}

export type EnumTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type EnumTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more EnumTypeSort objects to sort EnumTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EnumTypeSort>>
}

export type EnumTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<EnumTypeOwnerAggregateInput>>
  NOT?: InputMaybe<EnumTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<EnumTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<EnumTypeOwnerNodeAggregationWhereInput>
}

export type EnumTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnumTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<EnumTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<EnumTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type EnumTypeRelationInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesCreateFieldInput>>
  fieldRefs?: InputMaybe<Array<EnumTypeFieldRefsCreateFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort EnumTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one EnumTypeSort object. */
export type EnumTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type EnumTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type EnumTypeUpdateInput = {
  allowedValues?: InputMaybe<Array<EnumTypeAllowedValuesUpdateFieldInput>>
  fieldRefs?: InputMaybe<Array<EnumTypeFieldRefsUpdateFieldInput>>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type EnumTypeUserOwnerAggregationSelection = {
  __typename?: 'EnumTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<EnumTypeUserOwnerNodeAggregateSelection>
}

export type EnumTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'EnumTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type EnumTypeValue = {
  __typename?: 'EnumTypeValue'
  enumType?: Maybe<EnumType>
  enumTypeAggregate?: Maybe<EnumTypeValueEnumTypeEnumTypeAggregationSelection>
  enumTypeConnection: EnumTypeValueEnumTypeConnection
  id: Scalars['ID']['output']
  key: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type EnumTypeValueEnumTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<EnumTypeOptions>
  where?: InputMaybe<EnumTypeWhere>
}

export type EnumTypeValueEnumTypeAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<EnumTypeWhere>
}

export type EnumTypeValueEnumTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<EnumTypeValueEnumTypeConnectionSort>>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueAggregateSelection = {
  __typename?: 'EnumTypeValueAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  value: StringAggregateSelectionNonNullable
}

export type EnumTypeValueConnectInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeConnectFieldInput>
}

export type EnumTypeValueConnectOrCreateInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeConnectOrCreateFieldInput>
}

export type EnumTypeValueConnectWhere = {
  node: EnumTypeValueWhere
}

export type EnumTypeValueCreateInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeFieldInput>
  id: Scalars['ID']['input']
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type EnumTypeValueDeleteInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeDeleteFieldInput>
}

export type EnumTypeValueDisconnectInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeDisconnectFieldInput>
}

export type EnumTypeValueEdge = {
  __typename?: 'EnumTypeValueEdge'
  cursor: Scalars['String']['output']
  node: EnumTypeValue
}

export type EnumTypeValueEnumTypeAggregateInput = {
  AND?: InputMaybe<Array<EnumTypeValueEnumTypeAggregateInput>>
  NOT?: InputMaybe<EnumTypeValueEnumTypeAggregateInput>
  OR?: InputMaybe<Array<EnumTypeValueEnumTypeAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<EnumTypeValueEnumTypeNodeAggregationWhereInput>
}

export type EnumTypeValueEnumTypeConnectFieldInput = {
  connect?: InputMaybe<EnumTypeConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<EnumTypeConnectWhere>
}

export type EnumTypeValueEnumTypeConnectOrCreateFieldInput = {
  onCreate: EnumTypeValueEnumTypeConnectOrCreateFieldInputOnCreate
  where: EnumTypeConnectOrCreateWhere
}

export type EnumTypeValueEnumTypeConnectOrCreateFieldInputOnCreate = {
  node: EnumTypeOnCreateInput
}

export type EnumTypeValueEnumTypeConnection = {
  __typename?: 'EnumTypeValueEnumTypeConnection'
  edges: Array<EnumTypeValueEnumTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type EnumTypeValueEnumTypeConnectionSort = {
  node?: InputMaybe<EnumTypeSort>
}

export type EnumTypeValueEnumTypeConnectionWhere = {
  AND?: InputMaybe<Array<EnumTypeValueEnumTypeConnectionWhere>>
  NOT?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
  OR?: InputMaybe<Array<EnumTypeValueEnumTypeConnectionWhere>>
  node?: InputMaybe<EnumTypeWhere>
}

export type EnumTypeValueEnumTypeCreateFieldInput = {
  node: EnumTypeCreateInput
}

export type EnumTypeValueEnumTypeDeleteFieldInput = {
  delete?: InputMaybe<EnumTypeDeleteInput>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueEnumTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<EnumTypeDisconnectInput>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueEnumTypeEnumTypeAggregationSelection = {
  __typename?: 'EnumTypeValueEnumTypeEnumTypeAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<EnumTypeValueEnumTypeEnumTypeNodeAggregateSelection>
}

export type EnumTypeValueEnumTypeEnumTypeNodeAggregateSelection = {
  __typename?: 'EnumTypeValueEnumTypeEnumTypeNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type EnumTypeValueEnumTypeFieldInput = {
  connect?: InputMaybe<EnumTypeValueEnumTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<EnumTypeValueEnumTypeConnectOrCreateFieldInput>
  create?: InputMaybe<EnumTypeValueEnumTypeCreateFieldInput>
}

export type EnumTypeValueEnumTypeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnumTypeValueEnumTypeNodeAggregationWhereInput>>
  NOT?: InputMaybe<EnumTypeValueEnumTypeNodeAggregationWhereInput>
  OR?: InputMaybe<Array<EnumTypeValueEnumTypeNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type EnumTypeValueEnumTypeRelationship = {
  __typename?: 'EnumTypeValueEnumTypeRelationship'
  cursor: Scalars['String']['output']
  node: EnumType
}

export type EnumTypeValueEnumTypeUpdateConnectionInput = {
  node?: InputMaybe<EnumTypeUpdateInput>
}

export type EnumTypeValueEnumTypeUpdateFieldInput = {
  connect?: InputMaybe<EnumTypeValueEnumTypeConnectFieldInput>
  connectOrCreate?: InputMaybe<EnumTypeValueEnumTypeConnectOrCreateFieldInput>
  create?: InputMaybe<EnumTypeValueEnumTypeCreateFieldInput>
  delete?: InputMaybe<EnumTypeValueEnumTypeDeleteFieldInput>
  disconnect?: InputMaybe<EnumTypeValueEnumTypeDisconnectFieldInput>
  update?: InputMaybe<EnumTypeValueEnumTypeUpdateConnectionInput>
  where?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
}

export type EnumTypeValueOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more EnumTypeValueSort objects to sort EnumTypeValues by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EnumTypeValueSort>>
}

export type EnumTypeValueRelationInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeCreateFieldInput>
}

/** Fields to sort EnumTypeValues by. The order in which sorts are applied is not guaranteed when specifying many fields in one EnumTypeValueSort object. */
export type EnumTypeValueSort = {
  id?: InputMaybe<SortDirection>
  key?: InputMaybe<SortDirection>
  value?: InputMaybe<SortDirection>
}

export type EnumTypeValueUpdateInput = {
  enumType?: InputMaybe<EnumTypeValueEnumTypeUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['String']['input']>
}

export type EnumTypeValueWhere = {
  AND?: InputMaybe<Array<EnumTypeValueWhere>>
  NOT?: InputMaybe<EnumTypeValueWhere>
  OR?: InputMaybe<Array<EnumTypeValueWhere>>
  enumType?: InputMaybe<EnumTypeWhere>
  enumTypeAggregate?: InputMaybe<EnumTypeValueEnumTypeAggregateInput>
  enumTypeConnection?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
  enumTypeConnection_NOT?: InputMaybe<EnumTypeValueEnumTypeConnectionWhere>
  enumType_NOT?: InputMaybe<EnumTypeWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  key_CONTAINS?: InputMaybe<Scalars['String']['input']>
  key_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  key_IN?: InputMaybe<Array<Scalars['String']['input']>>
  key_MATCHES?: InputMaybe<Scalars['String']['input']>
  key_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['String']['input']>
  value_CONTAINS?: InputMaybe<Scalars['String']['input']>
  value_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  value_IN?: InputMaybe<Array<Scalars['String']['input']>>
  value_MATCHES?: InputMaybe<Scalars['String']['input']>
  value_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
}

export type EnumTypeValuesConnection = {
  __typename?: 'EnumTypeValuesConnection'
  edges: Array<EnumTypeValueEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type EnumTypeWhere = {
  AND?: InputMaybe<Array<EnumTypeWhere>>
  NOT?: InputMaybe<EnumTypeWhere>
  OR?: InputMaybe<Array<EnumTypeWhere>>
  allowedValuesAggregate?: InputMaybe<EnumTypeAllowedValuesAggregateInput>
  /** Return EnumTypes where all of the related EnumTypeAllowedValuesConnections match this filter */
  allowedValuesConnection_ALL?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
  /** Return EnumTypes where none of the related EnumTypeAllowedValuesConnections match this filter */
  allowedValuesConnection_NONE?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
  /** Return EnumTypes where one of the related EnumTypeAllowedValuesConnections match this filter */
  allowedValuesConnection_SINGLE?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
  /** Return EnumTypes where some of the related EnumTypeAllowedValuesConnections match this filter */
  allowedValuesConnection_SOME?: InputMaybe<EnumTypeAllowedValuesConnectionWhere>
  /** Return EnumTypes where all of the related EnumTypeValues match this filter */
  allowedValues_ALL?: InputMaybe<EnumTypeValueWhere>
  /** Return EnumTypes where none of the related EnumTypeValues match this filter */
  allowedValues_NONE?: InputMaybe<EnumTypeValueWhere>
  /** Return EnumTypes where one of the related EnumTypeValues match this filter */
  allowedValues_SINGLE?: InputMaybe<EnumTypeValueWhere>
  /** Return EnumTypes where some of the related EnumTypeValues match this filter */
  allowedValues_SOME?: InputMaybe<EnumTypeValueWhere>
  fieldRefsAggregate?: InputMaybe<EnumTypeFieldRefsAggregateInput>
  /** Return EnumTypes where all of the related EnumTypeFieldRefsConnections match this filter */
  fieldRefsConnection_ALL?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
  /** Return EnumTypes where none of the related EnumTypeFieldRefsConnections match this filter */
  fieldRefsConnection_NONE?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
  /** Return EnumTypes where one of the related EnumTypeFieldRefsConnections match this filter */
  fieldRefsConnection_SINGLE?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
  /** Return EnumTypes where some of the related EnumTypeFieldRefsConnections match this filter */
  fieldRefsConnection_SOME?: InputMaybe<EnumTypeFieldRefsConnectionWhere>
  /** Return EnumTypes where all of the related Fields match this filter */
  fieldRefs_ALL?: InputMaybe<FieldWhere>
  /** Return EnumTypes where none of the related Fields match this filter */
  fieldRefs_NONE?: InputMaybe<FieldWhere>
  /** Return EnumTypes where one of the related Fields match this filter */
  fieldRefs_SINGLE?: InputMaybe<FieldWhere>
  /** Return EnumTypes where some of the related Fields match this filter */
  fieldRefs_SOME?: InputMaybe<FieldWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<EnumTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type EnumTypesConnection = {
  __typename?: 'EnumTypesConnection'
  edges: Array<EnumTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Field = {
  __typename?: 'Field'
  api: InterfaceType
  apiAggregate?: Maybe<FieldInterfaceTypeApiAggregationSelection>
  apiConnection: FieldApiConnection
  defaultValues?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  fieldType: IBaseType
  fieldTypeConnection: FieldFieldTypeConnection
  id: Scalars['ID']['output']
  key: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  nextSibling?: Maybe<Field>
  nextSiblingAggregate?: Maybe<FieldFieldNextSiblingAggregationSelection>
  nextSiblingConnection: FieldNextSiblingConnection
  prevSibling?: Maybe<Field>
  prevSiblingAggregate?: Maybe<FieldFieldPrevSiblingAggregationSelection>
  prevSiblingConnection: FieldPrevSiblingConnection
  validationRules?: Maybe<Scalars['String']['output']>
}

export type FieldApiArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type FieldApiAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type FieldApiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<FieldApiConnectionSort>>
  where?: InputMaybe<FieldApiConnectionWhere>
}

export type FieldFieldTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<IBaseTypeOptions>
  where?: InputMaybe<IBaseTypeWhere>
}

export type FieldFieldTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<FieldFieldTypeConnectionSort>>
  where?: InputMaybe<FieldFieldTypeConnectionWhere>
}

export type FieldNextSiblingArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<FieldOptions>
  where?: InputMaybe<FieldWhere>
}

export type FieldNextSiblingAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FieldWhere>
}

export type FieldNextSiblingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<FieldNextSiblingConnectionSort>>
  where?: InputMaybe<FieldNextSiblingConnectionWhere>
}

export type FieldPrevSiblingArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<FieldOptions>
  where?: InputMaybe<FieldWhere>
}

export type FieldPrevSiblingAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FieldWhere>
}

export type FieldPrevSiblingConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<FieldPrevSiblingConnectionSort>>
  where?: InputMaybe<FieldPrevSiblingConnectionWhere>
}

export type FieldAggregateSelection = {
  __typename?: 'FieldAggregateSelection'
  count: Scalars['Int']['output']
  defaultValues: StringAggregateSelectionNullable
  description: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNullable
  validationRules: StringAggregateSelectionNullable
}

export type FieldApiAggregateInput = {
  AND?: InputMaybe<Array<FieldApiAggregateInput>>
  NOT?: InputMaybe<FieldApiAggregateInput>
  OR?: InputMaybe<Array<FieldApiAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<FieldApiNodeAggregationWhereInput>
}

export type FieldApiConnectFieldInput = {
  connect?: InputMaybe<InterfaceTypeConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<InterfaceTypeConnectWhere>
}

export type FieldApiConnectOrCreateFieldInput = {
  onCreate: FieldApiConnectOrCreateFieldInputOnCreate
  where: InterfaceTypeConnectOrCreateWhere
}

export type FieldApiConnectOrCreateFieldInputOnCreate = {
  node: InterfaceTypeOnCreateInput
}

export type FieldApiConnection = {
  __typename?: 'FieldApiConnection'
  edges: Array<FieldApiRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type FieldApiConnectionSort = {
  node?: InputMaybe<InterfaceTypeSort>
}

export type FieldApiConnectionWhere = {
  AND?: InputMaybe<Array<FieldApiConnectionWhere>>
  NOT?: InputMaybe<FieldApiConnectionWhere>
  OR?: InputMaybe<Array<FieldApiConnectionWhere>>
  node?: InputMaybe<InterfaceTypeWhere>
}

export type FieldApiCreateFieldInput = {
  node: InterfaceTypeCreateInput
}

export type FieldApiDeleteFieldInput = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<FieldApiConnectionWhere>
}

export type FieldApiDisconnectFieldInput = {
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  where?: InputMaybe<FieldApiConnectionWhere>
}

export type FieldApiFieldInput = {
  connect?: InputMaybe<FieldApiConnectFieldInput>
  connectOrCreate?: InputMaybe<FieldApiConnectOrCreateFieldInput>
  create?: InputMaybe<FieldApiCreateFieldInput>
}

export type FieldApiNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FieldApiNodeAggregationWhereInput>>
  NOT?: InputMaybe<FieldApiNodeAggregationWhereInput>
  OR?: InputMaybe<Array<FieldApiNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type FieldApiRelationship = {
  __typename?: 'FieldApiRelationship'
  cursor: Scalars['String']['output']
  node: InterfaceType
}

export type FieldApiUpdateConnectionInput = {
  node?: InputMaybe<InterfaceTypeUpdateInput>
}

export type FieldApiUpdateFieldInput = {
  connect?: InputMaybe<FieldApiConnectFieldInput>
  connectOrCreate?: InputMaybe<FieldApiConnectOrCreateFieldInput>
  create?: InputMaybe<FieldApiCreateFieldInput>
  delete?: InputMaybe<FieldApiDeleteFieldInput>
  disconnect?: InputMaybe<FieldApiDisconnectFieldInput>
  update?: InputMaybe<FieldApiUpdateConnectionInput>
  where?: InputMaybe<FieldApiConnectionWhere>
}

export type FieldConnectInput = {
  api?: InputMaybe<FieldApiConnectFieldInput>
  fieldType?: InputMaybe<FieldFieldTypeConnectFieldInput>
  nextSibling?: InputMaybe<FieldNextSiblingConnectFieldInput>
  prevSibling?: InputMaybe<FieldPrevSiblingConnectFieldInput>
}

export type FieldConnectOrCreateInput = {
  api?: InputMaybe<FieldApiConnectOrCreateFieldInput>
}

export type FieldConnectWhere = {
  node: FieldWhere
}

export type FieldCreateInput = {
  api?: InputMaybe<FieldApiFieldInput>
  defaultValues?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  fieldType?: InputMaybe<FieldFieldTypeFieldInput>
  id: Scalars['ID']['input']
  key: Scalars['String']['input']
  name?: InputMaybe<Scalars['String']['input']>
  nextSibling?: InputMaybe<FieldNextSiblingFieldInput>
  prevSibling?: InputMaybe<FieldPrevSiblingFieldInput>
  validationRules?: InputMaybe<Scalars['String']['input']>
}

export type FieldDeleteInput = {
  api?: InputMaybe<FieldApiDeleteFieldInput>
  fieldType?: InputMaybe<FieldFieldTypeDeleteFieldInput>
  nextSibling?: InputMaybe<FieldNextSiblingDeleteFieldInput>
  prevSibling?: InputMaybe<FieldPrevSiblingDeleteFieldInput>
}

export type FieldDisconnectInput = {
  api?: InputMaybe<FieldApiDisconnectFieldInput>
  fieldType?: InputMaybe<FieldFieldTypeDisconnectFieldInput>
  nextSibling?: InputMaybe<FieldNextSiblingDisconnectFieldInput>
  prevSibling?: InputMaybe<FieldPrevSiblingDisconnectFieldInput>
}

export type FieldEdge = {
  __typename?: 'FieldEdge'
  cursor: Scalars['String']['output']
  node: Field
}

export type FieldFieldNextSiblingAggregationSelection = {
  __typename?: 'FieldFieldNextSiblingAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<FieldFieldNextSiblingNodeAggregateSelection>
}

export type FieldFieldNextSiblingNodeAggregateSelection = {
  __typename?: 'FieldFieldNextSiblingNodeAggregateSelection'
  defaultValues: StringAggregateSelectionNullable
  description: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNullable
  validationRules: StringAggregateSelectionNullable
}

export type FieldFieldPrevSiblingAggregationSelection = {
  __typename?: 'FieldFieldPrevSiblingAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<FieldFieldPrevSiblingNodeAggregateSelection>
}

export type FieldFieldPrevSiblingNodeAggregateSelection = {
  __typename?: 'FieldFieldPrevSiblingNodeAggregateSelection'
  defaultValues: StringAggregateSelectionNullable
  description: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNullable
  validationRules: StringAggregateSelectionNullable
}

export type FieldFieldTypeConnectFieldInput = {
  connect?: InputMaybe<IBaseTypeConnectInput>
  where?: InputMaybe<IBaseTypeConnectWhere>
}

export type FieldFieldTypeConnection = {
  __typename?: 'FieldFieldTypeConnection'
  edges: Array<FieldFieldTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type FieldFieldTypeConnectionSort = {
  node?: InputMaybe<IBaseTypeSort>
}

export type FieldFieldTypeConnectionWhere = {
  AND?: InputMaybe<Array<FieldFieldTypeConnectionWhere>>
  NOT?: InputMaybe<FieldFieldTypeConnectionWhere>
  OR?: InputMaybe<Array<FieldFieldTypeConnectionWhere>>
  node?: InputMaybe<IBaseTypeWhere>
}

export type FieldFieldTypeCreateFieldInput = {
  node: IBaseTypeCreateInput
}

export type FieldFieldTypeDeleteFieldInput = {
  delete?: InputMaybe<IBaseTypeDeleteInput>
  where?: InputMaybe<FieldFieldTypeConnectionWhere>
}

export type FieldFieldTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<IBaseTypeDisconnectInput>
  where?: InputMaybe<FieldFieldTypeConnectionWhere>
}

export type FieldFieldTypeFieldInput = {
  connect?: InputMaybe<FieldFieldTypeConnectFieldInput>
  create?: InputMaybe<FieldFieldTypeCreateFieldInput>
}

export type FieldFieldTypeRelationship = {
  __typename?: 'FieldFieldTypeRelationship'
  cursor: Scalars['String']['output']
  node: IBaseType
}

export type FieldFieldTypeUpdateConnectionInput = {
  node?: InputMaybe<IBaseTypeUpdateInput>
}

export type FieldFieldTypeUpdateFieldInput = {
  connect?: InputMaybe<FieldFieldTypeConnectFieldInput>
  create?: InputMaybe<FieldFieldTypeCreateFieldInput>
  delete?: InputMaybe<FieldFieldTypeDeleteFieldInput>
  disconnect?: InputMaybe<FieldFieldTypeDisconnectFieldInput>
  update?: InputMaybe<FieldFieldTypeUpdateConnectionInput>
  where?: InputMaybe<FieldFieldTypeConnectionWhere>
}

export type FieldInterfaceTypeApiAggregationSelection = {
  __typename?: 'FieldInterfaceTypeApiAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<FieldInterfaceTypeApiNodeAggregateSelection>
}

export type FieldInterfaceTypeApiNodeAggregateSelection = {
  __typename?: 'FieldInterfaceTypeApiNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type FieldNextSiblingAggregateInput = {
  AND?: InputMaybe<Array<FieldNextSiblingAggregateInput>>
  NOT?: InputMaybe<FieldNextSiblingAggregateInput>
  OR?: InputMaybe<Array<FieldNextSiblingAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<FieldNextSiblingNodeAggregationWhereInput>
}

export type FieldNextSiblingConnectFieldInput = {
  connect?: InputMaybe<FieldConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<FieldConnectWhere>
}

export type FieldNextSiblingConnection = {
  __typename?: 'FieldNextSiblingConnection'
  edges: Array<FieldNextSiblingRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type FieldNextSiblingConnectionSort = {
  node?: InputMaybe<FieldSort>
}

export type FieldNextSiblingConnectionWhere = {
  AND?: InputMaybe<Array<FieldNextSiblingConnectionWhere>>
  NOT?: InputMaybe<FieldNextSiblingConnectionWhere>
  OR?: InputMaybe<Array<FieldNextSiblingConnectionWhere>>
  node?: InputMaybe<FieldWhere>
}

export type FieldNextSiblingCreateFieldInput = {
  node: FieldCreateInput
}

export type FieldNextSiblingDeleteFieldInput = {
  delete?: InputMaybe<FieldDeleteInput>
  where?: InputMaybe<FieldNextSiblingConnectionWhere>
}

export type FieldNextSiblingDisconnectFieldInput = {
  disconnect?: InputMaybe<FieldDisconnectInput>
  where?: InputMaybe<FieldNextSiblingConnectionWhere>
}

export type FieldNextSiblingFieldInput = {
  connect?: InputMaybe<FieldNextSiblingConnectFieldInput>
  create?: InputMaybe<FieldNextSiblingCreateFieldInput>
}

export type FieldNextSiblingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FieldNextSiblingNodeAggregationWhereInput>>
  NOT?: InputMaybe<FieldNextSiblingNodeAggregationWhereInput>
  OR?: InputMaybe<Array<FieldNextSiblingNodeAggregationWhereInput>>
  defaultValues_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  key_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type FieldNextSiblingRelationship = {
  __typename?: 'FieldNextSiblingRelationship'
  cursor: Scalars['String']['output']
  node: Field
}

export type FieldNextSiblingUpdateConnectionInput = {
  node?: InputMaybe<FieldUpdateInput>
}

export type FieldNextSiblingUpdateFieldInput = {
  connect?: InputMaybe<FieldNextSiblingConnectFieldInput>
  create?: InputMaybe<FieldNextSiblingCreateFieldInput>
  delete?: InputMaybe<FieldNextSiblingDeleteFieldInput>
  disconnect?: InputMaybe<FieldNextSiblingDisconnectFieldInput>
  update?: InputMaybe<FieldNextSiblingUpdateConnectionInput>
  where?: InputMaybe<FieldNextSiblingConnectionWhere>
}

export type FieldOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more FieldSort objects to sort Fields by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FieldSort>>
}

export type FieldPrevSiblingAggregateInput = {
  AND?: InputMaybe<Array<FieldPrevSiblingAggregateInput>>
  NOT?: InputMaybe<FieldPrevSiblingAggregateInput>
  OR?: InputMaybe<Array<FieldPrevSiblingAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<FieldPrevSiblingNodeAggregationWhereInput>
}

export type FieldPrevSiblingConnectFieldInput = {
  connect?: InputMaybe<FieldConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<FieldConnectWhere>
}

export type FieldPrevSiblingConnection = {
  __typename?: 'FieldPrevSiblingConnection'
  edges: Array<FieldPrevSiblingRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type FieldPrevSiblingConnectionSort = {
  node?: InputMaybe<FieldSort>
}

export type FieldPrevSiblingConnectionWhere = {
  AND?: InputMaybe<Array<FieldPrevSiblingConnectionWhere>>
  NOT?: InputMaybe<FieldPrevSiblingConnectionWhere>
  OR?: InputMaybe<Array<FieldPrevSiblingConnectionWhere>>
  node?: InputMaybe<FieldWhere>
}

export type FieldPrevSiblingCreateFieldInput = {
  node: FieldCreateInput
}

export type FieldPrevSiblingDeleteFieldInput = {
  delete?: InputMaybe<FieldDeleteInput>
  where?: InputMaybe<FieldPrevSiblingConnectionWhere>
}

export type FieldPrevSiblingDisconnectFieldInput = {
  disconnect?: InputMaybe<FieldDisconnectInput>
  where?: InputMaybe<FieldPrevSiblingConnectionWhere>
}

export type FieldPrevSiblingFieldInput = {
  connect?: InputMaybe<FieldPrevSiblingConnectFieldInput>
  create?: InputMaybe<FieldPrevSiblingCreateFieldInput>
}

export type FieldPrevSiblingNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FieldPrevSiblingNodeAggregationWhereInput>>
  NOT?: InputMaybe<FieldPrevSiblingNodeAggregationWhereInput>
  OR?: InputMaybe<Array<FieldPrevSiblingNodeAggregationWhereInput>>
  defaultValues_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  key_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type FieldPrevSiblingRelationship = {
  __typename?: 'FieldPrevSiblingRelationship'
  cursor: Scalars['String']['output']
  node: Field
}

export type FieldPrevSiblingUpdateConnectionInput = {
  node?: InputMaybe<FieldUpdateInput>
}

export type FieldPrevSiblingUpdateFieldInput = {
  connect?: InputMaybe<FieldPrevSiblingConnectFieldInput>
  create?: InputMaybe<FieldPrevSiblingCreateFieldInput>
  delete?: InputMaybe<FieldPrevSiblingDeleteFieldInput>
  disconnect?: InputMaybe<FieldPrevSiblingDisconnectFieldInput>
  update?: InputMaybe<FieldPrevSiblingUpdateConnectionInput>
  where?: InputMaybe<FieldPrevSiblingConnectionWhere>
}

export type FieldRelationInput = {
  api?: InputMaybe<FieldApiCreateFieldInput>
  fieldType?: InputMaybe<FieldFieldTypeCreateFieldInput>
  nextSibling?: InputMaybe<FieldNextSiblingCreateFieldInput>
  prevSibling?: InputMaybe<FieldPrevSiblingCreateFieldInput>
}

/** Fields to sort Fields by. The order in which sorts are applied is not guaranteed when specifying many fields in one FieldSort object. */
export type FieldSort = {
  defaultValues?: InputMaybe<SortDirection>
  description?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  key?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  validationRules?: InputMaybe<SortDirection>
}

export type FieldUpdateInput = {
  api?: InputMaybe<FieldApiUpdateFieldInput>
  defaultValues?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  fieldType?: InputMaybe<FieldFieldTypeUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  nextSibling?: InputMaybe<FieldNextSiblingUpdateFieldInput>
  prevSibling?: InputMaybe<FieldPrevSiblingUpdateFieldInput>
  validationRules?: InputMaybe<Scalars['String']['input']>
}

export type FieldWhere = {
  AND?: InputMaybe<Array<FieldWhere>>
  NOT?: InputMaybe<FieldWhere>
  OR?: InputMaybe<Array<FieldWhere>>
  api?: InputMaybe<InterfaceTypeWhere>
  apiAggregate?: InputMaybe<FieldApiAggregateInput>
  apiConnection?: InputMaybe<FieldApiConnectionWhere>
  apiConnection_NOT?: InputMaybe<FieldApiConnectionWhere>
  api_NOT?: InputMaybe<InterfaceTypeWhere>
  defaultValues?: InputMaybe<Scalars['String']['input']>
  defaultValues_CONTAINS?: InputMaybe<Scalars['String']['input']>
  defaultValues_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  defaultValues_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  defaultValues_MATCHES?: InputMaybe<Scalars['String']['input']>
  defaultValues_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_MATCHES?: InputMaybe<Scalars['String']['input']>
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  fieldTypeConnection?: InputMaybe<FieldFieldTypeConnectionWhere>
  fieldTypeConnection_NOT?: InputMaybe<FieldFieldTypeConnectionWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  key_CONTAINS?: InputMaybe<Scalars['String']['input']>
  key_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  key_IN?: InputMaybe<Array<Scalars['String']['input']>>
  key_MATCHES?: InputMaybe<Scalars['String']['input']>
  key_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  nextSibling?: InputMaybe<FieldWhere>
  nextSiblingAggregate?: InputMaybe<FieldNextSiblingAggregateInput>
  nextSiblingConnection?: InputMaybe<FieldNextSiblingConnectionWhere>
  nextSiblingConnection_NOT?: InputMaybe<FieldNextSiblingConnectionWhere>
  nextSibling_NOT?: InputMaybe<FieldWhere>
  prevSibling?: InputMaybe<FieldWhere>
  prevSiblingAggregate?: InputMaybe<FieldPrevSiblingAggregateInput>
  prevSiblingConnection?: InputMaybe<FieldPrevSiblingConnectionWhere>
  prevSiblingConnection_NOT?: InputMaybe<FieldPrevSiblingConnectionWhere>
  prevSibling_NOT?: InputMaybe<FieldWhere>
  validationRules?: InputMaybe<Scalars['String']['input']>
  validationRules_CONTAINS?: InputMaybe<Scalars['String']['input']>
  validationRules_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  validationRules_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  validationRules_MATCHES?: InputMaybe<Scalars['String']['input']>
  validationRules_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
}

export type FieldsConnection = {
  __typename?: 'FieldsConnection'
  edges: Array<FieldEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type GetBaseTypesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BaseTypesWhere>
}

export type GetBaseTypesReturn = {
  __typename?: 'GetBaseTypesReturn'
  items: Array<BaseType>
  totalCount: Scalars['Int']['output']
}

export type GetBaseTypesReturnAggregateSelection = {
  __typename?: 'GetBaseTypesReturnAggregateSelection'
  count: Scalars['Int']['output']
  totalCount: IntAggregateSelectionNonNullable
}

export type GetBaseTypesReturnCreateInput = {
  totalCount: Scalars['Int']['input']
}

export type GetBaseTypesReturnEdge = {
  __typename?: 'GetBaseTypesReturnEdge'
  cursor: Scalars['String']['output']
  node: GetBaseTypesReturn
}

export type GetBaseTypesReturnOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more GetBaseTypesReturnSort objects to sort GetBaseTypesReturns by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GetBaseTypesReturnSort>>
}

/** Fields to sort GetBaseTypesReturns by. The order in which sorts are applied is not guaranteed when specifying many fields in one GetBaseTypesReturnSort object. */
export type GetBaseTypesReturnSort = {
  totalCount?: InputMaybe<SortDirection>
}

export type GetBaseTypesReturnUpdateInput = {
  totalCount?: InputMaybe<Scalars['Int']['input']>
  totalCount_DECREMENT?: InputMaybe<Scalars['Int']['input']>
  totalCount_INCREMENT?: InputMaybe<Scalars['Int']['input']>
}

export type GetBaseTypesReturnWhere = {
  AND?: InputMaybe<Array<GetBaseTypesReturnWhere>>
  NOT?: InputMaybe<GetBaseTypesReturnWhere>
  OR?: InputMaybe<Array<GetBaseTypesReturnWhere>>
  totalCount?: InputMaybe<Scalars['Int']['input']>
  totalCount_GT?: InputMaybe<Scalars['Int']['input']>
  totalCount_GTE?: InputMaybe<Scalars['Int']['input']>
  totalCount_IN?: InputMaybe<Array<Scalars['Int']['input']>>
  totalCount_LT?: InputMaybe<Scalars['Int']['input']>
  totalCount_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type GetBaseTypesReturnsConnection = {
  __typename?: 'GetBaseTypesReturnsConnection'
  edges: Array<GetBaseTypesReturnEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Hook = {
  __typename?: 'Hook'
  config: Prop
  configAggregate?: Maybe<HookPropConfigAggregationSelection>
  configConnection: HookConfigConnection
  element: Element
  elementAggregate?: Maybe<HookElementElementAggregationSelection>
  elementConnection: HookElementConnection
  id: Scalars['ID']['output']
  type: AtomType
}

export type HookConfigArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PropOptions>
  where?: InputMaybe<PropWhere>
}

export type HookConfigAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PropWhere>
}

export type HookConfigConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<HookConfigConnectionSort>>
  where?: InputMaybe<HookConfigConnectionWhere>
}

export type HookElementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type HookElementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type HookElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<HookElementConnectionSort>>
  where?: InputMaybe<HookElementConnectionWhere>
}

export type HookAggregateSelection = {
  __typename?: 'HookAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
}

export type HookConfigAggregateInput = {
  AND?: InputMaybe<Array<HookConfigAggregateInput>>
  NOT?: InputMaybe<HookConfigAggregateInput>
  OR?: InputMaybe<Array<HookConfigAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<HookConfigNodeAggregationWhereInput>
}

export type HookConfigConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PropConnectWhere>
}

export type HookConfigConnectOrCreateFieldInput = {
  onCreate: HookConfigConnectOrCreateFieldInputOnCreate
  where: PropConnectOrCreateWhere
}

export type HookConfigConnectOrCreateFieldInputOnCreate = {
  node: PropOnCreateInput
}

export type HookConfigConnection = {
  __typename?: 'HookConfigConnection'
  edges: Array<HookConfigRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type HookConfigConnectionSort = {
  node?: InputMaybe<PropSort>
}

export type HookConfigConnectionWhere = {
  AND?: InputMaybe<Array<HookConfigConnectionWhere>>
  NOT?: InputMaybe<HookConfigConnectionWhere>
  OR?: InputMaybe<Array<HookConfigConnectionWhere>>
  node?: InputMaybe<PropWhere>
}

export type HookConfigCreateFieldInput = {
  node: PropCreateInput
}

export type HookConfigDeleteFieldInput = {
  where?: InputMaybe<HookConfigConnectionWhere>
}

export type HookConfigDisconnectFieldInput = {
  where?: InputMaybe<HookConfigConnectionWhere>
}

export type HookConfigFieldInput = {
  connect?: InputMaybe<HookConfigConnectFieldInput>
  connectOrCreate?: InputMaybe<HookConfigConnectOrCreateFieldInput>
  create?: InputMaybe<HookConfigCreateFieldInput>
}

export type HookConfigNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HookConfigNodeAggregationWhereInput>>
  NOT?: InputMaybe<HookConfigNodeAggregationWhereInput>
  OR?: InputMaybe<Array<HookConfigNodeAggregationWhereInput>>
  data_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  data_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type HookConfigRelationship = {
  __typename?: 'HookConfigRelationship'
  cursor: Scalars['String']['output']
  node: Prop
}

export type HookConfigUpdateConnectionInput = {
  node?: InputMaybe<PropUpdateInput>
}

export type HookConfigUpdateFieldInput = {
  connect?: InputMaybe<HookConfigConnectFieldInput>
  connectOrCreate?: InputMaybe<HookConfigConnectOrCreateFieldInput>
  create?: InputMaybe<HookConfigCreateFieldInput>
  delete?: InputMaybe<HookConfigDeleteFieldInput>
  disconnect?: InputMaybe<HookConfigDisconnectFieldInput>
  update?: InputMaybe<HookConfigUpdateConnectionInput>
  where?: InputMaybe<HookConfigConnectionWhere>
}

export type HookConnectInput = {
  config?: InputMaybe<HookConfigConnectFieldInput>
  element?: InputMaybe<HookElementConnectFieldInput>
}

export type HookConnectOrCreateInput = {
  config?: InputMaybe<HookConfigConnectOrCreateFieldInput>
  element?: InputMaybe<HookElementConnectOrCreateFieldInput>
}

export type HookCreateInput = {
  config?: InputMaybe<HookConfigFieldInput>
  element?: InputMaybe<HookElementFieldInput>
  type: AtomType
}

export type HookDeleteInput = {
  config?: InputMaybe<HookConfigDeleteFieldInput>
  element?: InputMaybe<HookElementDeleteFieldInput>
}

export type HookDisconnectInput = {
  config?: InputMaybe<HookConfigDisconnectFieldInput>
  element?: InputMaybe<HookElementDisconnectFieldInput>
}

export type HookEdge = {
  __typename?: 'HookEdge'
  cursor: Scalars['String']['output']
  node: Hook
}

export type HookElementAggregateInput = {
  AND?: InputMaybe<Array<HookElementAggregateInput>>
  NOT?: InputMaybe<HookElementAggregateInput>
  OR?: InputMaybe<Array<HookElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<HookElementNodeAggregationWhereInput>
}

export type HookElementConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type HookElementConnectOrCreateFieldInput = {
  onCreate: HookElementConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type HookElementConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type HookElementConnection = {
  __typename?: 'HookElementConnection'
  edges: Array<HookElementRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type HookElementConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type HookElementConnectionWhere = {
  AND?: InputMaybe<Array<HookElementConnectionWhere>>
  NOT?: InputMaybe<HookElementConnectionWhere>
  OR?: InputMaybe<Array<HookElementConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type HookElementCreateFieldInput = {
  node: ElementCreateInput
}

export type HookElementDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<HookElementConnectionWhere>
}

export type HookElementDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<HookElementConnectionWhere>
}

export type HookElementElementAggregationSelection = {
  __typename?: 'HookElementElementAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<HookElementElementNodeAggregateSelection>
}

export type HookElementElementNodeAggregateSelection = {
  __typename?: 'HookElementElementNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type HookElementFieldInput = {
  connect?: InputMaybe<HookElementConnectFieldInput>
  connectOrCreate?: InputMaybe<HookElementConnectOrCreateFieldInput>
  create?: InputMaybe<HookElementCreateFieldInput>
}

export type HookElementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HookElementNodeAggregationWhereInput>>
  NOT?: InputMaybe<HookElementNodeAggregationWhereInput>
  OR?: InputMaybe<Array<HookElementNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type HookElementRelationship = {
  __typename?: 'HookElementRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type HookElementUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type HookElementUpdateFieldInput = {
  connect?: InputMaybe<HookElementConnectFieldInput>
  connectOrCreate?: InputMaybe<HookElementConnectOrCreateFieldInput>
  create?: InputMaybe<HookElementCreateFieldInput>
  delete?: InputMaybe<HookElementDeleteFieldInput>
  disconnect?: InputMaybe<HookElementDisconnectFieldInput>
  update?: InputMaybe<HookElementUpdateConnectionInput>
  where?: InputMaybe<HookElementConnectionWhere>
}

export type HookOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more HookSort objects to sort Hooks by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HookSort>>
}

export type HookPropConfigAggregationSelection = {
  __typename?: 'HookPropConfigAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<HookPropConfigNodeAggregateSelection>
}

export type HookPropConfigNodeAggregateSelection = {
  __typename?: 'HookPropConfigNodeAggregateSelection'
  data: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type HookRelationInput = {
  config?: InputMaybe<HookConfigCreateFieldInput>
  element?: InputMaybe<HookElementCreateFieldInput>
}

/** Fields to sort Hooks by. The order in which sorts are applied is not guaranteed when specifying many fields in one HookSort object. */
export type HookSort = {
  id?: InputMaybe<SortDirection>
  type?: InputMaybe<SortDirection>
}

export type HookUpdateInput = {
  config?: InputMaybe<HookConfigUpdateFieldInput>
  element?: InputMaybe<HookElementUpdateFieldInput>
  type?: InputMaybe<AtomType>
}

export type HookWhere = {
  AND?: InputMaybe<Array<HookWhere>>
  NOT?: InputMaybe<HookWhere>
  OR?: InputMaybe<Array<HookWhere>>
  config?: InputMaybe<PropWhere>
  configAggregate?: InputMaybe<HookConfigAggregateInput>
  configConnection?: InputMaybe<HookConfigConnectionWhere>
  configConnection_NOT?: InputMaybe<HookConfigConnectionWhere>
  config_NOT?: InputMaybe<PropWhere>
  element?: InputMaybe<ElementWhere>
  elementAggregate?: InputMaybe<HookElementAggregateInput>
  elementConnection?: InputMaybe<HookElementConnectionWhere>
  elementConnection_NOT?: InputMaybe<HookElementConnectionWhere>
  element_NOT?: InputMaybe<ElementWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  type?: InputMaybe<AtomType>
  type_IN?: InputMaybe<Array<AtomType>>
}

export type HooksConnection = {
  __typename?: 'HooksConnection'
  edges: Array<HookEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type IBaseType = {
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerConnection: IBaseTypeOwnerConnection
}

export type IBaseTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type IBaseTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type IBaseTypeConnectInput = {
  _on?: InputMaybe<IBaseTypeImplementationsConnectInput>
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type IBaseTypeConnectWhere = {
  node: IBaseTypeWhere
}

export type IBaseTypeCreateInput = {
  ActionType?: InputMaybe<ActionTypeCreateInput>
  AppType?: InputMaybe<AppTypeCreateInput>
  ArrayType?: InputMaybe<ArrayTypeCreateInput>
  BaseType?: InputMaybe<BaseTypeCreateInput>
  CodeMirrorType?: InputMaybe<CodeMirrorTypeCreateInput>
  ElementType?: InputMaybe<ElementTypeCreateInput>
  EnumType?: InputMaybe<EnumTypeCreateInput>
  InterfaceType?: InputMaybe<InterfaceTypeCreateInput>
  LambdaType?: InputMaybe<LambdaTypeCreateInput>
  PageType?: InputMaybe<PageTypeCreateInput>
  PrimitiveType?: InputMaybe<PrimitiveTypeCreateInput>
  ReactNodeType?: InputMaybe<ReactNodeTypeCreateInput>
  RenderPropType?: InputMaybe<RenderPropTypeCreateInput>
  UnionType?: InputMaybe<UnionTypeCreateInput>
}

export type IBaseTypeDeleteInput = {
  _on?: InputMaybe<IBaseTypeImplementationsDeleteInput>
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type IBaseTypeDisconnectInput = {
  _on?: InputMaybe<IBaseTypeImplementationsDisconnectInput>
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type IBaseTypeImplementationsConnectInput = {
  ActionType?: InputMaybe<Array<ActionTypeConnectInput>>
  AppType?: InputMaybe<Array<AppTypeConnectInput>>
  ArrayType?: InputMaybe<Array<ArrayTypeConnectInput>>
  BaseType?: InputMaybe<Array<BaseTypeConnectInput>>
  CodeMirrorType?: InputMaybe<Array<CodeMirrorTypeConnectInput>>
  ElementType?: InputMaybe<Array<ElementTypeConnectInput>>
  EnumType?: InputMaybe<Array<EnumTypeConnectInput>>
  InterfaceType?: InputMaybe<Array<InterfaceTypeConnectInput>>
  LambdaType?: InputMaybe<Array<LambdaTypeConnectInput>>
  PageType?: InputMaybe<Array<PageTypeConnectInput>>
  PrimitiveType?: InputMaybe<Array<PrimitiveTypeConnectInput>>
  ReactNodeType?: InputMaybe<Array<ReactNodeTypeConnectInput>>
  RenderPropType?: InputMaybe<Array<RenderPropTypeConnectInput>>
  UnionType?: InputMaybe<Array<UnionTypeConnectInput>>
}

export type IBaseTypeImplementationsDeleteInput = {
  ActionType?: InputMaybe<Array<ActionTypeDeleteInput>>
  AppType?: InputMaybe<Array<AppTypeDeleteInput>>
  ArrayType?: InputMaybe<Array<ArrayTypeDeleteInput>>
  BaseType?: InputMaybe<Array<BaseTypeDeleteInput>>
  CodeMirrorType?: InputMaybe<Array<CodeMirrorTypeDeleteInput>>
  ElementType?: InputMaybe<Array<ElementTypeDeleteInput>>
  EnumType?: InputMaybe<Array<EnumTypeDeleteInput>>
  InterfaceType?: InputMaybe<Array<InterfaceTypeDeleteInput>>
  LambdaType?: InputMaybe<Array<LambdaTypeDeleteInput>>
  PageType?: InputMaybe<Array<PageTypeDeleteInput>>
  PrimitiveType?: InputMaybe<Array<PrimitiveTypeDeleteInput>>
  ReactNodeType?: InputMaybe<Array<ReactNodeTypeDeleteInput>>
  RenderPropType?: InputMaybe<Array<RenderPropTypeDeleteInput>>
  UnionType?: InputMaybe<Array<UnionTypeDeleteInput>>
}

export type IBaseTypeImplementationsDisconnectInput = {
  ActionType?: InputMaybe<Array<ActionTypeDisconnectInput>>
  AppType?: InputMaybe<Array<AppTypeDisconnectInput>>
  ArrayType?: InputMaybe<Array<ArrayTypeDisconnectInput>>
  BaseType?: InputMaybe<Array<BaseTypeDisconnectInput>>
  CodeMirrorType?: InputMaybe<Array<CodeMirrorTypeDisconnectInput>>
  ElementType?: InputMaybe<Array<ElementTypeDisconnectInput>>
  EnumType?: InputMaybe<Array<EnumTypeDisconnectInput>>
  InterfaceType?: InputMaybe<Array<InterfaceTypeDisconnectInput>>
  LambdaType?: InputMaybe<Array<LambdaTypeDisconnectInput>>
  PageType?: InputMaybe<Array<PageTypeDisconnectInput>>
  PrimitiveType?: InputMaybe<Array<PrimitiveTypeDisconnectInput>>
  ReactNodeType?: InputMaybe<Array<ReactNodeTypeDisconnectInput>>
  RenderPropType?: InputMaybe<Array<RenderPropTypeDisconnectInput>>
  UnionType?: InputMaybe<Array<UnionTypeDisconnectInput>>
}

export type IBaseTypeImplementationsUpdateInput = {
  ActionType?: InputMaybe<ActionTypeUpdateInput>
  AppType?: InputMaybe<AppTypeUpdateInput>
  ArrayType?: InputMaybe<ArrayTypeUpdateInput>
  BaseType?: InputMaybe<BaseTypeUpdateInput>
  CodeMirrorType?: InputMaybe<CodeMirrorTypeUpdateInput>
  ElementType?: InputMaybe<ElementTypeUpdateInput>
  EnumType?: InputMaybe<EnumTypeUpdateInput>
  InterfaceType?: InputMaybe<InterfaceTypeUpdateInput>
  LambdaType?: InputMaybe<LambdaTypeUpdateInput>
  PageType?: InputMaybe<PageTypeUpdateInput>
  PrimitiveType?: InputMaybe<PrimitiveTypeUpdateInput>
  ReactNodeType?: InputMaybe<ReactNodeTypeUpdateInput>
  RenderPropType?: InputMaybe<RenderPropTypeUpdateInput>
  UnionType?: InputMaybe<UnionTypeUpdateInput>
}

export type IBaseTypeImplementationsWhere = {
  ActionType?: InputMaybe<ActionTypeWhere>
  AppType?: InputMaybe<AppTypeWhere>
  ArrayType?: InputMaybe<ArrayTypeWhere>
  BaseType?: InputMaybe<BaseTypeWhere>
  CodeMirrorType?: InputMaybe<CodeMirrorTypeWhere>
  ElementType?: InputMaybe<ElementTypeWhere>
  EnumType?: InputMaybe<EnumTypeWhere>
  InterfaceType?: InputMaybe<InterfaceTypeWhere>
  LambdaType?: InputMaybe<LambdaTypeWhere>
  PageType?: InputMaybe<PageTypeWhere>
  PrimitiveType?: InputMaybe<PrimitiveTypeWhere>
  ReactNodeType?: InputMaybe<ReactNodeTypeWhere>
  RenderPropType?: InputMaybe<RenderPropTypeWhere>
  UnionType?: InputMaybe<UnionTypeWhere>
}

export type IBaseTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more IBaseTypeSort objects to sort IBaseTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<IBaseTypeSort>>>
}

export type IBaseTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<IBaseTypeOwnerAggregateInput>>
  NOT?: InputMaybe<IBaseTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<IBaseTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<IBaseTypeOwnerNodeAggregationWhereInput>
}

export type IBaseTypeOwnerConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<UserConnectWhere>
}

export type IBaseTypeOwnerConnectOrCreateFieldInput = {
  onCreate: IBaseTypeOwnerConnectOrCreateFieldInputOnCreate
  where: UserConnectOrCreateWhere
}

export type IBaseTypeOwnerConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput
}

export type IBaseTypeOwnerConnection = {
  __typename?: 'IBaseTypeOwnerConnection'
  edges: Array<IBaseTypeOwnerRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type IBaseTypeOwnerConnectionSort = {
  node?: InputMaybe<UserSort>
}

export type IBaseTypeOwnerConnectionWhere = {
  AND?: InputMaybe<Array<IBaseTypeOwnerConnectionWhere>>
  NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  OR?: InputMaybe<Array<IBaseTypeOwnerConnectionWhere>>
  node?: InputMaybe<UserWhere>
}

export type IBaseTypeOwnerCreateFieldInput = {
  node: UserCreateInput
}

export type IBaseTypeOwnerDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type IBaseTypeOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type IBaseTypeOwnerFieldInput = {
  connect?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

export type IBaseTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IBaseTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<IBaseTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<IBaseTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type IBaseTypeOwnerRelationship = {
  __typename?: 'IBaseTypeOwnerRelationship'
  cursor: Scalars['String']['output']
  node: User
}

export type IBaseTypeOwnerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>
}

export type IBaseTypeOwnerUpdateFieldInput = {
  connect?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
  delete?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
  disconnect?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
  update?: InputMaybe<IBaseTypeOwnerUpdateConnectionInput>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

/** Fields to sort IBaseTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one IBaseTypeSort object. */
export type IBaseTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type IBaseTypeUpdateInput = {
  _on?: InputMaybe<IBaseTypeImplementationsUpdateInput>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type IBaseTypeWhere = {
  _on?: InputMaybe<IBaseTypeImplementationsWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<IBaseTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable'
  longest: Scalars['ID']['output']
  shortest: Scalars['ID']['output']
}

export type IntAggregateSelectionNonNullable = {
  __typename?: 'IntAggregateSelectionNonNullable'
  average: Scalars['Float']['output']
  max: Scalars['Int']['output']
  min: Scalars['Int']['output']
  sum: Scalars['Int']['output']
}

/** Represents an object type with multiple fields */
export type InterfaceType = IBaseType &
  WithDescendants & {
    __typename?: 'InterfaceType'
    apiOfAtoms: Array<Atom>
    apiOfAtomsAggregate?: Maybe<InterfaceTypeAtomApiOfAtomsAggregationSelection>
    apiOfAtomsConnection: InterfaceTypeApiOfAtomsConnection
    descendantTypesIds: Array<Scalars['ID']['output']>
    fieldRefs: Array<Field>
    fieldRefsAggregate?: Maybe<InterfaceTypeFieldFieldRefsAggregationSelection>
    fieldRefsConnection: InterfaceTypeFieldRefsConnection
    fields: Array<Field>
    fieldsAggregate?: Maybe<InterfaceTypeFieldFieldsAggregationSelection>
    fieldsConnection: InterfaceTypeFieldsConnection
    id: Scalars['ID']['output']
    kind: TypeKind
    name: Scalars['String']['output']
    owner: User
    ownerAggregate?: Maybe<InterfaceTypeUserOwnerAggregationSelection>
    ownerConnection: IBaseTypeOwnerConnection
  }

/** Represents an object type with multiple fields */
export type InterfaceTypeApiOfAtomsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeApiOfAtomsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AtomWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeApiOfAtomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectionSort>>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldRefsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<FieldOptions>
  where?: InputMaybe<FieldWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldRefsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FieldWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldRefsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InterfaceTypeFieldRefsConnectionSort>>
  where?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<FieldOptions>
  where?: InputMaybe<FieldWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FieldWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeFieldsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InterfaceTypeFieldsConnectionSort>>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Represents an object type with multiple fields */
export type InterfaceTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type InterfaceTypeAggregateSelection = {
  __typename?: 'InterfaceTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type InterfaceTypeApiOfAtomsAggregateInput = {
  AND?: InputMaybe<Array<InterfaceTypeApiOfAtomsAggregateInput>>
  NOT?: InputMaybe<InterfaceTypeApiOfAtomsAggregateInput>
  OR?: InputMaybe<Array<InterfaceTypeApiOfAtomsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<InterfaceTypeApiOfAtomsNodeAggregationWhereInput>
}

export type InterfaceTypeApiOfAtomsConnectFieldInput = {
  connect?: InputMaybe<Array<AtomConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AtomConnectWhere>
}

export type InterfaceTypeApiOfAtomsConnectOrCreateFieldInput = {
  onCreate: InterfaceTypeApiOfAtomsConnectOrCreateFieldInputOnCreate
  where: AtomConnectOrCreateWhere
}

export type InterfaceTypeApiOfAtomsConnectOrCreateFieldInputOnCreate = {
  node: AtomOnCreateInput
}

export type InterfaceTypeApiOfAtomsConnection = {
  __typename?: 'InterfaceTypeApiOfAtomsConnection'
  edges: Array<InterfaceTypeApiOfAtomsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type InterfaceTypeApiOfAtomsConnectionSort = {
  node?: InputMaybe<AtomSort>
}

export type InterfaceTypeApiOfAtomsConnectionWhere = {
  AND?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectionWhere>>
  NOT?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
  OR?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectionWhere>>
  node?: InputMaybe<AtomWhere>
}

export type InterfaceTypeApiOfAtomsCreateFieldInput = {
  node: AtomCreateInput
}

export type InterfaceTypeApiOfAtomsDeleteFieldInput = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

export type InterfaceTypeApiOfAtomsDisconnectFieldInput = {
  disconnect?: InputMaybe<AtomDisconnectInput>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

export type InterfaceTypeApiOfAtomsFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<InterfaceTypeApiOfAtomsConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<InterfaceTypeApiOfAtomsCreateFieldInput>>
}

export type InterfaceTypeApiOfAtomsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InterfaceTypeApiOfAtomsNodeAggregationWhereInput>>
  NOT?: InputMaybe<InterfaceTypeApiOfAtomsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<InterfaceTypeApiOfAtomsNodeAggregationWhereInput>>
  externalCssSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  externalSourceType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type InterfaceTypeApiOfAtomsRelationship = {
  __typename?: 'InterfaceTypeApiOfAtomsRelationship'
  cursor: Scalars['String']['output']
  node: Atom
}

export type InterfaceTypeApiOfAtomsUpdateConnectionInput = {
  node?: InputMaybe<AtomUpdateInput>
}

export type InterfaceTypeApiOfAtomsUpdateFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<InterfaceTypeApiOfAtomsConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<InterfaceTypeApiOfAtomsCreateFieldInput>>
  delete?: InputMaybe<Array<InterfaceTypeApiOfAtomsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<InterfaceTypeApiOfAtomsDisconnectFieldInput>>
  update?: InputMaybe<InterfaceTypeApiOfAtomsUpdateConnectionInput>
  where?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
}

export type InterfaceTypeAtomApiOfAtomsAggregationSelection = {
  __typename?: 'InterfaceTypeAtomApiOfAtomsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<InterfaceTypeAtomApiOfAtomsNodeAggregateSelection>
}

export type InterfaceTypeAtomApiOfAtomsNodeAggregateSelection = {
  __typename?: 'InterfaceTypeAtomApiOfAtomsNodeAggregateSelection'
  externalCssSource: StringAggregateSelectionNullable
  externalJsSource: StringAggregateSelectionNullable
  externalSourceType: StringAggregateSelectionNullable
  icon: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type InterfaceTypeConnectInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsConnectFieldInput>>
  fieldRefs?: InputMaybe<Array<InterfaceTypeFieldRefsConnectFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsConnectFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type InterfaceTypeConnectOrCreateInput = {
  apiOfAtoms?: InputMaybe<
    Array<InterfaceTypeApiOfAtomsConnectOrCreateFieldInput>
  >
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type InterfaceTypeConnectOrCreateWhere = {
  node: InterfaceTypeUniqueWhere
}

export type InterfaceTypeConnectWhere = {
  node: InterfaceTypeWhere
}

export type InterfaceTypeCreateInput = {
  apiOfAtoms?: InputMaybe<InterfaceTypeApiOfAtomsFieldInput>
  fieldRefs?: InputMaybe<InterfaceTypeFieldRefsFieldInput>
  fields?: InputMaybe<InterfaceTypeFieldsFieldInput>
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type InterfaceTypeDeleteInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsDeleteFieldInput>>
  fieldRefs?: InputMaybe<Array<InterfaceTypeFieldRefsDeleteFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsDeleteFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type InterfaceTypeDisconnectInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsDisconnectFieldInput>>
  fieldRefs?: InputMaybe<Array<InterfaceTypeFieldRefsDisconnectFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsDisconnectFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type InterfaceTypeEdge = {
  __typename?: 'InterfaceTypeEdge'
  cursor: Scalars['String']['output']
  node: InterfaceType
}

export type InterfaceTypeFieldFieldRefsAggregationSelection = {
  __typename?: 'InterfaceTypeFieldFieldRefsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<InterfaceTypeFieldFieldRefsNodeAggregateSelection>
}

export type InterfaceTypeFieldFieldRefsNodeAggregateSelection = {
  __typename?: 'InterfaceTypeFieldFieldRefsNodeAggregateSelection'
  defaultValues: StringAggregateSelectionNullable
  description: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNullable
  validationRules: StringAggregateSelectionNullable
}

export type InterfaceTypeFieldFieldsAggregationSelection = {
  __typename?: 'InterfaceTypeFieldFieldsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<InterfaceTypeFieldFieldsNodeAggregateSelection>
}

export type InterfaceTypeFieldFieldsNodeAggregateSelection = {
  __typename?: 'InterfaceTypeFieldFieldsNodeAggregateSelection'
  defaultValues: StringAggregateSelectionNullable
  description: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  key: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNullable
  validationRules: StringAggregateSelectionNullable
}

export type InterfaceTypeFieldRefsAggregateInput = {
  AND?: InputMaybe<Array<InterfaceTypeFieldRefsAggregateInput>>
  NOT?: InputMaybe<InterfaceTypeFieldRefsAggregateInput>
  OR?: InputMaybe<Array<InterfaceTypeFieldRefsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<InterfaceTypeFieldRefsNodeAggregationWhereInput>
}

export type InterfaceTypeFieldRefsConnectFieldInput = {
  connect?: InputMaybe<Array<FieldConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<FieldConnectWhere>
}

export type InterfaceTypeFieldRefsConnection = {
  __typename?: 'InterfaceTypeFieldRefsConnection'
  edges: Array<InterfaceTypeFieldRefsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type InterfaceTypeFieldRefsConnectionSort = {
  node?: InputMaybe<FieldSort>
}

export type InterfaceTypeFieldRefsConnectionWhere = {
  AND?: InputMaybe<Array<InterfaceTypeFieldRefsConnectionWhere>>
  NOT?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
  OR?: InputMaybe<Array<InterfaceTypeFieldRefsConnectionWhere>>
  node?: InputMaybe<FieldWhere>
}

export type InterfaceTypeFieldRefsCreateFieldInput = {
  node: FieldCreateInput
}

export type InterfaceTypeFieldRefsDeleteFieldInput = {
  delete?: InputMaybe<FieldDeleteInput>
  where?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
}

export type InterfaceTypeFieldRefsDisconnectFieldInput = {
  disconnect?: InputMaybe<FieldDisconnectInput>
  where?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
}

export type InterfaceTypeFieldRefsFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeFieldRefsConnectFieldInput>>
  create?: InputMaybe<Array<InterfaceTypeFieldRefsCreateFieldInput>>
}

export type InterfaceTypeFieldRefsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InterfaceTypeFieldRefsNodeAggregationWhereInput>>
  NOT?: InputMaybe<InterfaceTypeFieldRefsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<InterfaceTypeFieldRefsNodeAggregationWhereInput>>
  defaultValues_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  key_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type InterfaceTypeFieldRefsRelationship = {
  __typename?: 'InterfaceTypeFieldRefsRelationship'
  cursor: Scalars['String']['output']
  node: Field
}

export type InterfaceTypeFieldRefsUpdateConnectionInput = {
  node?: InputMaybe<FieldUpdateInput>
}

export type InterfaceTypeFieldRefsUpdateFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeFieldRefsConnectFieldInput>>
  create?: InputMaybe<Array<InterfaceTypeFieldRefsCreateFieldInput>>
  delete?: InputMaybe<Array<InterfaceTypeFieldRefsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<InterfaceTypeFieldRefsDisconnectFieldInput>>
  update?: InputMaybe<InterfaceTypeFieldRefsUpdateConnectionInput>
  where?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
}

export type InterfaceTypeFieldsAggregateInput = {
  AND?: InputMaybe<Array<InterfaceTypeFieldsAggregateInput>>
  NOT?: InputMaybe<InterfaceTypeFieldsAggregateInput>
  OR?: InputMaybe<Array<InterfaceTypeFieldsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<InterfaceTypeFieldsNodeAggregationWhereInput>
}

export type InterfaceTypeFieldsConnectFieldInput = {
  connect?: InputMaybe<Array<FieldConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<FieldConnectWhere>
}

export type InterfaceTypeFieldsConnection = {
  __typename?: 'InterfaceTypeFieldsConnection'
  edges: Array<InterfaceTypeFieldsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type InterfaceTypeFieldsConnectionSort = {
  node?: InputMaybe<FieldSort>
}

export type InterfaceTypeFieldsConnectionWhere = {
  AND?: InputMaybe<Array<InterfaceTypeFieldsConnectionWhere>>
  NOT?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
  OR?: InputMaybe<Array<InterfaceTypeFieldsConnectionWhere>>
  node?: InputMaybe<FieldWhere>
}

export type InterfaceTypeFieldsCreateFieldInput = {
  node: FieldCreateInput
}

export type InterfaceTypeFieldsDeleteFieldInput = {
  delete?: InputMaybe<FieldDeleteInput>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

export type InterfaceTypeFieldsDisconnectFieldInput = {
  disconnect?: InputMaybe<FieldDisconnectInput>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

export type InterfaceTypeFieldsFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeFieldsConnectFieldInput>>
  create?: InputMaybe<Array<InterfaceTypeFieldsCreateFieldInput>>
}

export type InterfaceTypeFieldsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InterfaceTypeFieldsNodeAggregationWhereInput>>
  NOT?: InputMaybe<InterfaceTypeFieldsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<InterfaceTypeFieldsNodeAggregationWhereInput>>
  defaultValues_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  defaultValues_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  defaultValues_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  defaultValues_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  key_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  key_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  key_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  validationRules_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  validationRules_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  validationRules_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type InterfaceTypeFieldsRelationship = {
  __typename?: 'InterfaceTypeFieldsRelationship'
  cursor: Scalars['String']['output']
  node: Field
}

export type InterfaceTypeFieldsUpdateConnectionInput = {
  node?: InputMaybe<FieldUpdateInput>
}

export type InterfaceTypeFieldsUpdateFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeFieldsConnectFieldInput>>
  create?: InputMaybe<Array<InterfaceTypeFieldsCreateFieldInput>>
  delete?: InputMaybe<Array<InterfaceTypeFieldsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<InterfaceTypeFieldsDisconnectFieldInput>>
  update?: InputMaybe<InterfaceTypeFieldsUpdateConnectionInput>
  where?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
}

export type InterfaceTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type InterfaceTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more InterfaceTypeSort objects to sort InterfaceTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InterfaceTypeSort>>
}

export type InterfaceTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<InterfaceTypeOwnerAggregateInput>>
  NOT?: InputMaybe<InterfaceTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<InterfaceTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<InterfaceTypeOwnerNodeAggregationWhereInput>
}

export type InterfaceTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<InterfaceTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<InterfaceTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<InterfaceTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type InterfaceTypeRelationInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsCreateFieldInput>>
  fieldRefs?: InputMaybe<Array<InterfaceTypeFieldRefsCreateFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsCreateFieldInput>>
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort InterfaceTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one InterfaceTypeSort object. */
export type InterfaceTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type InterfaceTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type InterfaceTypeUpdateInput = {
  apiOfAtoms?: InputMaybe<Array<InterfaceTypeApiOfAtomsUpdateFieldInput>>
  fieldRefs?: InputMaybe<Array<InterfaceTypeFieldRefsUpdateFieldInput>>
  fields?: InputMaybe<Array<InterfaceTypeFieldsUpdateFieldInput>>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type InterfaceTypeUserOwnerAggregationSelection = {
  __typename?: 'InterfaceTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<InterfaceTypeUserOwnerNodeAggregateSelection>
}

export type InterfaceTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'InterfaceTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type InterfaceTypeWhere = {
  AND?: InputMaybe<Array<InterfaceTypeWhere>>
  NOT?: InputMaybe<InterfaceTypeWhere>
  OR?: InputMaybe<Array<InterfaceTypeWhere>>
  apiOfAtomsAggregate?: InputMaybe<InterfaceTypeApiOfAtomsAggregateInput>
  /** Return InterfaceTypes where all of the related InterfaceTypeApiOfAtomsConnections match this filter */
  apiOfAtomsConnection_ALL?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
  /** Return InterfaceTypes where none of the related InterfaceTypeApiOfAtomsConnections match this filter */
  apiOfAtomsConnection_NONE?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
  /** Return InterfaceTypes where one of the related InterfaceTypeApiOfAtomsConnections match this filter */
  apiOfAtomsConnection_SINGLE?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
  /** Return InterfaceTypes where some of the related InterfaceTypeApiOfAtomsConnections match this filter */
  apiOfAtomsConnection_SOME?: InputMaybe<InterfaceTypeApiOfAtomsConnectionWhere>
  /** Return InterfaceTypes where all of the related Atoms match this filter */
  apiOfAtoms_ALL?: InputMaybe<AtomWhere>
  /** Return InterfaceTypes where none of the related Atoms match this filter */
  apiOfAtoms_NONE?: InputMaybe<AtomWhere>
  /** Return InterfaceTypes where one of the related Atoms match this filter */
  apiOfAtoms_SINGLE?: InputMaybe<AtomWhere>
  /** Return InterfaceTypes where some of the related Atoms match this filter */
  apiOfAtoms_SOME?: InputMaybe<AtomWhere>
  fieldRefsAggregate?: InputMaybe<InterfaceTypeFieldRefsAggregateInput>
  /** Return InterfaceTypes where all of the related InterfaceTypeFieldRefsConnections match this filter */
  fieldRefsConnection_ALL?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
  /** Return InterfaceTypes where none of the related InterfaceTypeFieldRefsConnections match this filter */
  fieldRefsConnection_NONE?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
  /** Return InterfaceTypes where one of the related InterfaceTypeFieldRefsConnections match this filter */
  fieldRefsConnection_SINGLE?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
  /** Return InterfaceTypes where some of the related InterfaceTypeFieldRefsConnections match this filter */
  fieldRefsConnection_SOME?: InputMaybe<InterfaceTypeFieldRefsConnectionWhere>
  /** Return InterfaceTypes where all of the related Fields match this filter */
  fieldRefs_ALL?: InputMaybe<FieldWhere>
  /** Return InterfaceTypes where none of the related Fields match this filter */
  fieldRefs_NONE?: InputMaybe<FieldWhere>
  /** Return InterfaceTypes where one of the related Fields match this filter */
  fieldRefs_SINGLE?: InputMaybe<FieldWhere>
  /** Return InterfaceTypes where some of the related Fields match this filter */
  fieldRefs_SOME?: InputMaybe<FieldWhere>
  fieldsAggregate?: InputMaybe<InterfaceTypeFieldsAggregateInput>
  /** Return InterfaceTypes where all of the related InterfaceTypeFieldsConnections match this filter */
  fieldsConnection_ALL?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
  /** Return InterfaceTypes where none of the related InterfaceTypeFieldsConnections match this filter */
  fieldsConnection_NONE?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
  /** Return InterfaceTypes where one of the related InterfaceTypeFieldsConnections match this filter */
  fieldsConnection_SINGLE?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
  /** Return InterfaceTypes where some of the related InterfaceTypeFieldsConnections match this filter */
  fieldsConnection_SOME?: InputMaybe<InterfaceTypeFieldsConnectionWhere>
  /** Return InterfaceTypes where all of the related Fields match this filter */
  fields_ALL?: InputMaybe<FieldWhere>
  /** Return InterfaceTypes where none of the related Fields match this filter */
  fields_NONE?: InputMaybe<FieldWhere>
  /** Return InterfaceTypes where one of the related Fields match this filter */
  fields_SINGLE?: InputMaybe<FieldWhere>
  /** Return InterfaceTypes where some of the related Fields match this filter */
  fields_SOME?: InputMaybe<FieldWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<InterfaceTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type InterfaceTypesConnection = {
  __typename?: 'InterfaceTypesConnection'
  edges: Array<InterfaceTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

/** Allows picking a lambda */
export type LambdaType = IBaseType & {
  __typename?: 'LambdaType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<LambdaTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/** Allows picking a lambda */
export type LambdaTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a lambda */
export type LambdaTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a lambda */
export type LambdaTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type LambdaTypeAggregateSelection = {
  __typename?: 'LambdaTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type LambdaTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type LambdaTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type LambdaTypeConnectOrCreateWhere = {
  node: LambdaTypeUniqueWhere
}

export type LambdaTypeConnectWhere = {
  node: LambdaTypeWhere
}

export type LambdaTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type LambdaTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type LambdaTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type LambdaTypeEdge = {
  __typename?: 'LambdaTypeEdge'
  cursor: Scalars['String']['output']
  node: LambdaType
}

export type LambdaTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type LambdaTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more LambdaTypeSort objects to sort LambdaTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LambdaTypeSort>>
}

export type LambdaTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<LambdaTypeOwnerAggregateInput>>
  NOT?: InputMaybe<LambdaTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<LambdaTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<LambdaTypeOwnerNodeAggregationWhereInput>
}

export type LambdaTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LambdaTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<LambdaTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<LambdaTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type LambdaTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort LambdaTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one LambdaTypeSort object. */
export type LambdaTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type LambdaTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type LambdaTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type LambdaTypeUserOwnerAggregationSelection = {
  __typename?: 'LambdaTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<LambdaTypeUserOwnerNodeAggregateSelection>
}

export type LambdaTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'LambdaTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type LambdaTypeWhere = {
  AND?: InputMaybe<Array<LambdaTypeWhere>>
  NOT?: InputMaybe<LambdaTypeWhere>
  OR?: InputMaybe<Array<LambdaTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<LambdaTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type LambdaTypesConnection = {
  __typename?: 'LambdaTypesConnection'
  edges: Array<LambdaTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createActionTypes: CreateActionTypesMutationResponse
  createApiActions: CreateApiActionsMutationResponse
  createAppTypes: CreateAppTypesMutationResponse
  createApps: CreateAppsMutationResponse
  createArrayTypes: CreateArrayTypesMutationResponse
  createAtoms: CreateAtomsMutationResponse
  createCodeActions: CreateCodeActionsMutationResponse
  createCodeMirrorTypes: CreateCodeMirrorTypesMutationResponse
  createComponents: CreateComponentsMutationResponse
  createDomains: CreateDomainsMutationResponse
  createElementTypes: CreateElementTypesMutationResponse
  createElements: CreateElementsMutationResponse
  createEnumTypeValues: CreateEnumTypeValuesMutationResponse
  createEnumTypes: CreateEnumTypesMutationResponse
  createFields: CreateFieldsMutationResponse
  createGetBaseTypesReturns: CreateGetBaseTypesReturnsMutationResponse
  createHooks: CreateHooksMutationResponse
  createInterfaceTypes: CreateInterfaceTypesMutationResponse
  createLambdaTypes: CreateLambdaTypesMutationResponse
  createPageTypes: CreatePageTypesMutationResponse
  createPages: CreatePagesMutationResponse
  createPrimitiveTypes: CreatePrimitiveTypesMutationResponse
  createProps: CreatePropsMutationResponse
  createReactNodeTypes: CreateReactNodeTypesMutationResponse
  createRenderPropTypes: CreateRenderPropTypesMutationResponse
  createResources: CreateResourcesMutationResponse
  createStores: CreateStoresMutationResponse
  createTags: CreateTagsMutationResponse
  createTypeReferences: CreateTypeReferencesMutationResponse
  createUnionTypes: CreateUnionTypesMutationResponse
  createUsers: CreateUsersMutationResponse
  deleteActionTypes: DeleteInfo
  deleteApiActions: DeleteInfo
  deleteAppTypes: DeleteInfo
  deleteApps: DeleteInfo
  deleteArrayTypes: DeleteInfo
  deleteAtoms: DeleteInfo
  deleteCodeActions: DeleteInfo
  deleteCodeMirrorTypes: DeleteInfo
  deleteComponents: DeleteInfo
  deleteDomains: DeleteInfo
  deleteElementTypes: DeleteInfo
  deleteElements: DeleteInfo
  deleteEnumTypeValues: DeleteInfo
  deleteEnumTypes: DeleteInfo
  deleteFields: DeleteInfo
  deleteGetBaseTypesReturns: DeleteInfo
  deleteHooks: DeleteInfo
  deleteInterfaceTypes: DeleteInfo
  deleteLambdaTypes: DeleteInfo
  deletePageTypes: DeleteInfo
  deletePages: DeleteInfo
  deletePrimitiveTypes: DeleteInfo
  deleteProps: DeleteInfo
  deleteReactNodeTypes: DeleteInfo
  deleteRenderPropTypes: DeleteInfo
  deleteResources: DeleteInfo
  deleteStores: DeleteInfo
  deleteTags: DeleteInfo
  deleteTypeReferences: DeleteInfo
  deleteUnionTypes: DeleteInfo
  deleteUsers: DeleteInfo
  resetDatabase?: Maybe<ResetDatabaseMutationResponse>
  updateActionTypes: UpdateActionTypesMutationResponse
  updateApiActions: UpdateApiActionsMutationResponse
  updateAppTypes: UpdateAppTypesMutationResponse
  updateApps: UpdateAppsMutationResponse
  updateArrayTypes: UpdateArrayTypesMutationResponse
  updateAtoms: UpdateAtomsMutationResponse
  updateCodeActions: UpdateCodeActionsMutationResponse
  updateCodeMirrorTypes: UpdateCodeMirrorTypesMutationResponse
  updateComponents: UpdateComponentsMutationResponse
  updateDomains: UpdateDomainsMutationResponse
  updateElementTypes: UpdateElementTypesMutationResponse
  updateElements: UpdateElementsMutationResponse
  updateEnumTypeValues: UpdateEnumTypeValuesMutationResponse
  updateEnumTypes: UpdateEnumTypesMutationResponse
  updateFields: UpdateFieldsMutationResponse
  updateGetBaseTypesReturns: UpdateGetBaseTypesReturnsMutationResponse
  updateHooks: UpdateHooksMutationResponse
  updateInterfaceTypes: UpdateInterfaceTypesMutationResponse
  updateLambdaTypes: UpdateLambdaTypesMutationResponse
  updatePageTypes: UpdatePageTypesMutationResponse
  updatePages: UpdatePagesMutationResponse
  updatePrimitiveTypes: UpdatePrimitiveTypesMutationResponse
  updateProps: UpdatePropsMutationResponse
  updateReactNodeTypes: UpdateReactNodeTypesMutationResponse
  updateRenderPropTypes: UpdateRenderPropTypesMutationResponse
  updateResources: UpdateResourcesMutationResponse
  updateStores: UpdateStoresMutationResponse
  updateTags: UpdateTagsMutationResponse
  updateTypeReferences: UpdateTypeReferencesMutationResponse
  updateUnionTypes: UpdateUnionTypesMutationResponse
}

export type MutationCreateActionTypesArgs = {
  input: Array<ActionTypeCreateInput>
}

export type MutationCreateApiActionsArgs = {
  input: Array<ApiActionCreateInput>
}

export type MutationCreateAppTypesArgs = {
  input: Array<AppTypeCreateInput>
}

export type MutationCreateAppsArgs = {
  input: Array<AppCreateInput>
}

export type MutationCreateArrayTypesArgs = {
  input: Array<ArrayTypeCreateInput>
}

export type MutationCreateAtomsArgs = {
  input: Array<AtomCreateInput>
}

export type MutationCreateCodeActionsArgs = {
  input: Array<CodeActionCreateInput>
}

export type MutationCreateCodeMirrorTypesArgs = {
  input: Array<CodeMirrorTypeCreateInput>
}

export type MutationCreateComponentsArgs = {
  input: Array<ComponentCreateInput>
}

export type MutationCreateDomainsArgs = {
  input: Array<DomainCreateInput>
}

export type MutationCreateElementTypesArgs = {
  input: Array<ElementTypeCreateInput>
}

export type MutationCreateElementsArgs = {
  input: Array<ElementCreateInput>
}

export type MutationCreateEnumTypeValuesArgs = {
  input: Array<EnumTypeValueCreateInput>
}

export type MutationCreateEnumTypesArgs = {
  input: Array<EnumTypeCreateInput>
}

export type MutationCreateFieldsArgs = {
  input: Array<FieldCreateInput>
}

export type MutationCreateGetBaseTypesReturnsArgs = {
  input: Array<GetBaseTypesReturnCreateInput>
}

export type MutationCreateHooksArgs = {
  input: Array<HookCreateInput>
}

export type MutationCreateInterfaceTypesArgs = {
  input: Array<InterfaceTypeCreateInput>
}

export type MutationCreateLambdaTypesArgs = {
  input: Array<LambdaTypeCreateInput>
}

export type MutationCreatePageTypesArgs = {
  input: Array<PageTypeCreateInput>
}

export type MutationCreatePagesArgs = {
  input: Array<PageCreateInput>
}

export type MutationCreatePrimitiveTypesArgs = {
  input: Array<PrimitiveTypeCreateInput>
}

export type MutationCreatePropsArgs = {
  input: Array<PropCreateInput>
}

export type MutationCreateReactNodeTypesArgs = {
  input: Array<ReactNodeTypeCreateInput>
}

export type MutationCreateRenderPropTypesArgs = {
  input: Array<RenderPropTypeCreateInput>
}

export type MutationCreateResourcesArgs = {
  input: Array<ResourceCreateInput>
}

export type MutationCreateStoresArgs = {
  input: Array<StoreCreateInput>
}

export type MutationCreateTagsArgs = {
  input: Array<TagCreateInput>
}

export type MutationCreateTypeReferencesArgs = {
  input: Array<TypeReferenceCreateInput>
}

export type MutationCreateUnionTypesArgs = {
  input: Array<UnionTypeCreateInput>
}

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>
}

export type MutationDeleteActionTypesArgs = {
  delete?: InputMaybe<ActionTypeDeleteInput>
  where?: InputMaybe<ActionTypeWhere>
}

export type MutationDeleteApiActionsArgs = {
  delete?: InputMaybe<ApiActionDeleteInput>
  where?: InputMaybe<ApiActionWhere>
}

export type MutationDeleteAppTypesArgs = {
  delete?: InputMaybe<AppTypeDeleteInput>
  where?: InputMaybe<AppTypeWhere>
}

export type MutationDeleteAppsArgs = {
  delete?: InputMaybe<AppDeleteInput>
  where?: InputMaybe<AppWhere>
}

export type MutationDeleteArrayTypesArgs = {
  delete?: InputMaybe<ArrayTypeDeleteInput>
  where?: InputMaybe<ArrayTypeWhere>
}

export type MutationDeleteAtomsArgs = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<AtomWhere>
}

export type MutationDeleteCodeActionsArgs = {
  delete?: InputMaybe<CodeActionDeleteInput>
  where?: InputMaybe<CodeActionWhere>
}

export type MutationDeleteCodeMirrorTypesArgs = {
  delete?: InputMaybe<CodeMirrorTypeDeleteInput>
  where?: InputMaybe<CodeMirrorTypeWhere>
}

export type MutationDeleteComponentsArgs = {
  delete?: InputMaybe<ComponentDeleteInput>
  where?: InputMaybe<ComponentWhere>
}

export type MutationDeleteDomainsArgs = {
  delete?: InputMaybe<DomainDeleteInput>
  where?: InputMaybe<DomainWhere>
}

export type MutationDeleteElementTypesArgs = {
  delete?: InputMaybe<ElementTypeDeleteInput>
  where?: InputMaybe<ElementTypeWhere>
}

export type MutationDeleteElementsArgs = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<ElementWhere>
}

export type MutationDeleteEnumTypeValuesArgs = {
  delete?: InputMaybe<EnumTypeValueDeleteInput>
  where?: InputMaybe<EnumTypeValueWhere>
}

export type MutationDeleteEnumTypesArgs = {
  delete?: InputMaybe<EnumTypeDeleteInput>
  where?: InputMaybe<EnumTypeWhere>
}

export type MutationDeleteFieldsArgs = {
  delete?: InputMaybe<FieldDeleteInput>
  where?: InputMaybe<FieldWhere>
}

export type MutationDeleteGetBaseTypesReturnsArgs = {
  where?: InputMaybe<GetBaseTypesReturnWhere>
}

export type MutationDeleteHooksArgs = {
  delete?: InputMaybe<HookDeleteInput>
  where?: InputMaybe<HookWhere>
}

export type MutationDeleteInterfaceTypesArgs = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type MutationDeleteLambdaTypesArgs = {
  delete?: InputMaybe<LambdaTypeDeleteInput>
  where?: InputMaybe<LambdaTypeWhere>
}

export type MutationDeletePageTypesArgs = {
  delete?: InputMaybe<PageTypeDeleteInput>
  where?: InputMaybe<PageTypeWhere>
}

export type MutationDeletePagesArgs = {
  delete?: InputMaybe<PageDeleteInput>
  where?: InputMaybe<PageWhere>
}

export type MutationDeletePrimitiveTypesArgs = {
  delete?: InputMaybe<PrimitiveTypeDeleteInput>
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type MutationDeletePropsArgs = {
  where?: InputMaybe<PropWhere>
}

export type MutationDeleteReactNodeTypesArgs = {
  delete?: InputMaybe<ReactNodeTypeDeleteInput>
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type MutationDeleteRenderPropTypesArgs = {
  delete?: InputMaybe<RenderPropTypeDeleteInput>
  where?: InputMaybe<RenderPropTypeWhere>
}

export type MutationDeleteResourcesArgs = {
  delete?: InputMaybe<ResourceDeleteInput>
  where?: InputMaybe<ResourceWhere>
}

export type MutationDeleteStoresArgs = {
  delete?: InputMaybe<StoreDeleteInput>
  where?: InputMaybe<StoreWhere>
}

export type MutationDeleteTagsArgs = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<TagWhere>
}

export type MutationDeleteTypeReferencesArgs = {
  where?: InputMaybe<TypeReferenceWhere>
}

export type MutationDeleteUnionTypesArgs = {
  delete?: InputMaybe<UnionTypeDeleteInput>
  where?: InputMaybe<UnionTypeWhere>
}

export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>
  where?: InputMaybe<UserWhere>
}

export type MutationUpdateActionTypesArgs = {
  connect?: InputMaybe<ActionTypeConnectInput>
  connectOrCreate?: InputMaybe<ActionTypeConnectOrCreateInput>
  create?: InputMaybe<ActionTypeRelationInput>
  delete?: InputMaybe<ActionTypeDeleteInput>
  disconnect?: InputMaybe<ActionTypeDisconnectInput>
  update?: InputMaybe<ActionTypeUpdateInput>
  where?: InputMaybe<ActionTypeWhere>
}

export type MutationUpdateApiActionsArgs = {
  connect?: InputMaybe<ApiActionConnectInput>
  connectOrCreate?: InputMaybe<ApiActionConnectOrCreateInput>
  create?: InputMaybe<ApiActionRelationInput>
  delete?: InputMaybe<ApiActionDeleteInput>
  disconnect?: InputMaybe<ApiActionDisconnectInput>
  update?: InputMaybe<ApiActionUpdateInput>
  where?: InputMaybe<ApiActionWhere>
}

export type MutationUpdateAppTypesArgs = {
  connect?: InputMaybe<AppTypeConnectInput>
  connectOrCreate?: InputMaybe<AppTypeConnectOrCreateInput>
  create?: InputMaybe<AppTypeRelationInput>
  delete?: InputMaybe<AppTypeDeleteInput>
  disconnect?: InputMaybe<AppTypeDisconnectInput>
  update?: InputMaybe<AppTypeUpdateInput>
  where?: InputMaybe<AppTypeWhere>
}

export type MutationUpdateAppsArgs = {
  connect?: InputMaybe<AppConnectInput>
  connectOrCreate?: InputMaybe<AppConnectOrCreateInput>
  create?: InputMaybe<AppRelationInput>
  delete?: InputMaybe<AppDeleteInput>
  disconnect?: InputMaybe<AppDisconnectInput>
  update?: InputMaybe<AppUpdateInput>
  where?: InputMaybe<AppWhere>
}

export type MutationUpdateArrayTypesArgs = {
  connect?: InputMaybe<ArrayTypeConnectInput>
  connectOrCreate?: InputMaybe<ArrayTypeConnectOrCreateInput>
  create?: InputMaybe<ArrayTypeRelationInput>
  delete?: InputMaybe<ArrayTypeDeleteInput>
  disconnect?: InputMaybe<ArrayTypeDisconnectInput>
  update?: InputMaybe<ArrayTypeUpdateInput>
  where?: InputMaybe<ArrayTypeWhere>
}

export type MutationUpdateAtomsArgs = {
  connect?: InputMaybe<AtomConnectInput>
  connectOrCreate?: InputMaybe<AtomConnectOrCreateInput>
  create?: InputMaybe<AtomRelationInput>
  delete?: InputMaybe<AtomDeleteInput>
  disconnect?: InputMaybe<AtomDisconnectInput>
  update?: InputMaybe<AtomUpdateInput>
  where?: InputMaybe<AtomWhere>
}

export type MutationUpdateCodeActionsArgs = {
  connect?: InputMaybe<CodeActionConnectInput>
  connectOrCreate?: InputMaybe<CodeActionConnectOrCreateInput>
  create?: InputMaybe<CodeActionRelationInput>
  delete?: InputMaybe<CodeActionDeleteInput>
  disconnect?: InputMaybe<CodeActionDisconnectInput>
  update?: InputMaybe<CodeActionUpdateInput>
  where?: InputMaybe<CodeActionWhere>
}

export type MutationUpdateCodeMirrorTypesArgs = {
  connect?: InputMaybe<CodeMirrorTypeConnectInput>
  connectOrCreate?: InputMaybe<CodeMirrorTypeConnectOrCreateInput>
  create?: InputMaybe<CodeMirrorTypeRelationInput>
  delete?: InputMaybe<CodeMirrorTypeDeleteInput>
  disconnect?: InputMaybe<CodeMirrorTypeDisconnectInput>
  update?: InputMaybe<CodeMirrorTypeUpdateInput>
  where?: InputMaybe<CodeMirrorTypeWhere>
}

export type MutationUpdateComponentsArgs = {
  connect?: InputMaybe<ComponentConnectInput>
  connectOrCreate?: InputMaybe<ComponentConnectOrCreateInput>
  create?: InputMaybe<ComponentRelationInput>
  delete?: InputMaybe<ComponentDeleteInput>
  disconnect?: InputMaybe<ComponentDisconnectInput>
  update?: InputMaybe<ComponentUpdateInput>
  where?: InputMaybe<ComponentWhere>
}

export type MutationUpdateDomainsArgs = {
  connect?: InputMaybe<DomainConnectInput>
  connectOrCreate?: InputMaybe<DomainConnectOrCreateInput>
  create?: InputMaybe<DomainRelationInput>
  delete?: InputMaybe<DomainDeleteInput>
  disconnect?: InputMaybe<DomainDisconnectInput>
  update?: InputMaybe<DomainUpdateInput>
  where?: InputMaybe<DomainWhere>
}

export type MutationUpdateElementTypesArgs = {
  connect?: InputMaybe<ElementTypeConnectInput>
  connectOrCreate?: InputMaybe<ElementTypeConnectOrCreateInput>
  create?: InputMaybe<ElementTypeRelationInput>
  delete?: InputMaybe<ElementTypeDeleteInput>
  disconnect?: InputMaybe<ElementTypeDisconnectInput>
  update?: InputMaybe<ElementTypeUpdateInput>
  where?: InputMaybe<ElementTypeWhere>
}

export type MutationUpdateElementsArgs = {
  connect?: InputMaybe<ElementConnectInput>
  connectOrCreate?: InputMaybe<ElementConnectOrCreateInput>
  create?: InputMaybe<ElementRelationInput>
  delete?: InputMaybe<ElementDeleteInput>
  disconnect?: InputMaybe<ElementDisconnectInput>
  update?: InputMaybe<ElementUpdateInput>
  where?: InputMaybe<ElementWhere>
}

export type MutationUpdateEnumTypeValuesArgs = {
  connect?: InputMaybe<EnumTypeValueConnectInput>
  connectOrCreate?: InputMaybe<EnumTypeValueConnectOrCreateInput>
  create?: InputMaybe<EnumTypeValueRelationInput>
  delete?: InputMaybe<EnumTypeValueDeleteInput>
  disconnect?: InputMaybe<EnumTypeValueDisconnectInput>
  update?: InputMaybe<EnumTypeValueUpdateInput>
  where?: InputMaybe<EnumTypeValueWhere>
}

export type MutationUpdateEnumTypesArgs = {
  connect?: InputMaybe<EnumTypeConnectInput>
  connectOrCreate?: InputMaybe<EnumTypeConnectOrCreateInput>
  create?: InputMaybe<EnumTypeRelationInput>
  delete?: InputMaybe<EnumTypeDeleteInput>
  disconnect?: InputMaybe<EnumTypeDisconnectInput>
  update?: InputMaybe<EnumTypeUpdateInput>
  where?: InputMaybe<EnumTypeWhere>
}

export type MutationUpdateFieldsArgs = {
  connect?: InputMaybe<FieldConnectInput>
  connectOrCreate?: InputMaybe<FieldConnectOrCreateInput>
  create?: InputMaybe<FieldRelationInput>
  delete?: InputMaybe<FieldDeleteInput>
  disconnect?: InputMaybe<FieldDisconnectInput>
  update?: InputMaybe<FieldUpdateInput>
  where?: InputMaybe<FieldWhere>
}

export type MutationUpdateGetBaseTypesReturnsArgs = {
  update?: InputMaybe<GetBaseTypesReturnUpdateInput>
  where?: InputMaybe<GetBaseTypesReturnWhere>
}

export type MutationUpdateHooksArgs = {
  connect?: InputMaybe<HookConnectInput>
  connectOrCreate?: InputMaybe<HookConnectOrCreateInput>
  create?: InputMaybe<HookRelationInput>
  delete?: InputMaybe<HookDeleteInput>
  disconnect?: InputMaybe<HookDisconnectInput>
  update?: InputMaybe<HookUpdateInput>
  where?: InputMaybe<HookWhere>
}

export type MutationUpdateInterfaceTypesArgs = {
  connect?: InputMaybe<InterfaceTypeConnectInput>
  connectOrCreate?: InputMaybe<InterfaceTypeConnectOrCreateInput>
  create?: InputMaybe<InterfaceTypeRelationInput>
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  update?: InputMaybe<InterfaceTypeUpdateInput>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type MutationUpdateLambdaTypesArgs = {
  connect?: InputMaybe<LambdaTypeConnectInput>
  connectOrCreate?: InputMaybe<LambdaTypeConnectOrCreateInput>
  create?: InputMaybe<LambdaTypeRelationInput>
  delete?: InputMaybe<LambdaTypeDeleteInput>
  disconnect?: InputMaybe<LambdaTypeDisconnectInput>
  update?: InputMaybe<LambdaTypeUpdateInput>
  where?: InputMaybe<LambdaTypeWhere>
}

export type MutationUpdatePageTypesArgs = {
  connect?: InputMaybe<PageTypeConnectInput>
  connectOrCreate?: InputMaybe<PageTypeConnectOrCreateInput>
  create?: InputMaybe<PageTypeRelationInput>
  delete?: InputMaybe<PageTypeDeleteInput>
  disconnect?: InputMaybe<PageTypeDisconnectInput>
  update?: InputMaybe<PageTypeUpdateInput>
  where?: InputMaybe<PageTypeWhere>
}

export type MutationUpdatePagesArgs = {
  connect?: InputMaybe<PageConnectInput>
  connectOrCreate?: InputMaybe<PageConnectOrCreateInput>
  create?: InputMaybe<PageRelationInput>
  delete?: InputMaybe<PageDeleteInput>
  disconnect?: InputMaybe<PageDisconnectInput>
  update?: InputMaybe<PageUpdateInput>
  where?: InputMaybe<PageWhere>
}

export type MutationUpdatePrimitiveTypesArgs = {
  connect?: InputMaybe<PrimitiveTypeConnectInput>
  connectOrCreate?: InputMaybe<PrimitiveTypeConnectOrCreateInput>
  create?: InputMaybe<PrimitiveTypeRelationInput>
  delete?: InputMaybe<PrimitiveTypeDeleteInput>
  disconnect?: InputMaybe<PrimitiveTypeDisconnectInput>
  update?: InputMaybe<PrimitiveTypeUpdateInput>
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type MutationUpdatePropsArgs = {
  update?: InputMaybe<PropUpdateInput>
  where?: InputMaybe<PropWhere>
}

export type MutationUpdateReactNodeTypesArgs = {
  connect?: InputMaybe<ReactNodeTypeConnectInput>
  connectOrCreate?: InputMaybe<ReactNodeTypeConnectOrCreateInput>
  create?: InputMaybe<ReactNodeTypeRelationInput>
  delete?: InputMaybe<ReactNodeTypeDeleteInput>
  disconnect?: InputMaybe<ReactNodeTypeDisconnectInput>
  update?: InputMaybe<ReactNodeTypeUpdateInput>
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type MutationUpdateRenderPropTypesArgs = {
  connect?: InputMaybe<RenderPropTypeConnectInput>
  connectOrCreate?: InputMaybe<RenderPropTypeConnectOrCreateInput>
  create?: InputMaybe<RenderPropTypeRelationInput>
  delete?: InputMaybe<RenderPropTypeDeleteInput>
  disconnect?: InputMaybe<RenderPropTypeDisconnectInput>
  update?: InputMaybe<RenderPropTypeUpdateInput>
  where?: InputMaybe<RenderPropTypeWhere>
}

export type MutationUpdateResourcesArgs = {
  connect?: InputMaybe<ResourceConnectInput>
  connectOrCreate?: InputMaybe<ResourceConnectOrCreateInput>
  create?: InputMaybe<ResourceRelationInput>
  delete?: InputMaybe<ResourceDeleteInput>
  disconnect?: InputMaybe<ResourceDisconnectInput>
  update?: InputMaybe<ResourceUpdateInput>
  where?: InputMaybe<ResourceWhere>
}

export type MutationUpdateStoresArgs = {
  connect?: InputMaybe<StoreConnectInput>
  connectOrCreate?: InputMaybe<StoreConnectOrCreateInput>
  create?: InputMaybe<StoreRelationInput>
  delete?: InputMaybe<StoreDeleteInput>
  disconnect?: InputMaybe<StoreDisconnectInput>
  update?: InputMaybe<StoreUpdateInput>
  where?: InputMaybe<StoreWhere>
}

export type MutationUpdateTagsArgs = {
  connect?: InputMaybe<TagConnectInput>
  connectOrCreate?: InputMaybe<TagConnectOrCreateInput>
  create?: InputMaybe<TagRelationInput>
  delete?: InputMaybe<TagDeleteInput>
  disconnect?: InputMaybe<TagDisconnectInput>
  update?: InputMaybe<TagUpdateInput>
  where?: InputMaybe<TagWhere>
}

export type MutationUpdateTypeReferencesArgs = {
  update?: InputMaybe<TypeReferenceUpdateInput>
  where?: InputMaybe<TypeReferenceWhere>
}

export type MutationUpdateUnionTypesArgs = {
  connect?: InputMaybe<UnionTypeConnectInput>
  connectOrCreate?: InputMaybe<UnionTypeConnectOrCreateInput>
  create?: InputMaybe<UnionTypeRelationInput>
  delete?: InputMaybe<UnionTypeDeleteInput>
  disconnect?: InputMaybe<UnionTypeDisconnectInput>
  update?: InputMaybe<UnionTypeUpdateInput>
  where?: InputMaybe<UnionTypeWhere>
}

export type Page = {
  __typename?: 'Page'
  _compoundName: Scalars['String']['output']
  app: App
  appAggregate?: Maybe<PageAppAppAggregationSelection>
  appConnection: PageAppConnection
  id: Scalars['ID']['output']
  kind: PageKind
  name: Scalars['String']['output']
  pageContentContainer?: Maybe<Element>
  pageContentContainerAggregate?: Maybe<PageElementPageContentContainerAggregationSelection>
  pageContentContainerConnection: PagePageContentContainerConnection
  rootElement: Element
  rootElementAggregate?: Maybe<PageElementRootElementAggregationSelection>
  rootElementConnection: PageRootElementConnection
  slug: Scalars['String']['output']
  store: Store
  storeAggregate?: Maybe<PageStoreStoreAggregationSelection>
  storeConnection: PageStoreConnection
  url: Scalars['String']['output']
}

export type PageAppArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}

export type PageAppAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AppWhere>
}

export type PageAppConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<PageAppConnectionSort>>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PagePageContentContainerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type PagePageContentContainerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type PagePageContentContainerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<PagePageContentContainerConnectionSort>>
  where?: InputMaybe<PagePageContentContainerConnectionWhere>
}

export type PageRootElementArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type PageRootElementAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type PageRootElementConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<PageRootElementConnectionSort>>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

export type PageStoreArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<StoreOptions>
  where?: InputMaybe<StoreWhere>
}

export type PageStoreAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<StoreWhere>
}

export type PageStoreConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<PageStoreConnectionSort>>
  where?: InputMaybe<PageStoreConnectionWhere>
}

export type PageAggregateSelection = {
  __typename?: 'PageAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  url: StringAggregateSelectionNonNullable
}

export type PageAppAggregateInput = {
  AND?: InputMaybe<Array<PageAppAggregateInput>>
  NOT?: InputMaybe<PageAppAggregateInput>
  OR?: InputMaybe<Array<PageAppAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<PageAppNodeAggregationWhereInput>
}

export type PageAppAppAggregationSelection = {
  __typename?: 'PageAppAppAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<PageAppAppNodeAggregateSelection>
}

export type PageAppAppNodeAggregateSelection = {
  __typename?: 'PageAppAppNodeAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type PageAppConnectFieldInput = {
  connect?: InputMaybe<AppConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AppConnectWhere>
}

export type PageAppConnectOrCreateFieldInput = {
  onCreate: PageAppConnectOrCreateFieldInputOnCreate
  where: AppConnectOrCreateWhere
}

export type PageAppConnectOrCreateFieldInputOnCreate = {
  node: AppOnCreateInput
}

export type PageAppConnection = {
  __typename?: 'PageAppConnection'
  edges: Array<PageAppRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type PageAppConnectionSort = {
  node?: InputMaybe<AppSort>
}

export type PageAppConnectionWhere = {
  AND?: InputMaybe<Array<PageAppConnectionWhere>>
  NOT?: InputMaybe<PageAppConnectionWhere>
  OR?: InputMaybe<Array<PageAppConnectionWhere>>
  node?: InputMaybe<AppWhere>
}

export type PageAppCreateFieldInput = {
  node: AppCreateInput
}

export type PageAppDeleteFieldInput = {
  delete?: InputMaybe<AppDeleteInput>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PageAppDisconnectFieldInput = {
  disconnect?: InputMaybe<AppDisconnectInput>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PageAppFieldInput = {
  connect?: InputMaybe<PageAppConnectFieldInput>
  connectOrCreate?: InputMaybe<PageAppConnectOrCreateFieldInput>
  create?: InputMaybe<PageAppCreateFieldInput>
}

export type PageAppNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageAppNodeAggregationWhereInput>>
  NOT?: InputMaybe<PageAppNodeAggregationWhereInput>
  OR?: InputMaybe<Array<PageAppNodeAggregationWhereInput>>
  _compoundName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type PageAppRelationship = {
  __typename?: 'PageAppRelationship'
  cursor: Scalars['String']['output']
  node: App
}

export type PageAppUpdateConnectionInput = {
  node?: InputMaybe<AppUpdateInput>
}

export type PageAppUpdateFieldInput = {
  connect?: InputMaybe<PageAppConnectFieldInput>
  connectOrCreate?: InputMaybe<PageAppConnectOrCreateFieldInput>
  create?: InputMaybe<PageAppCreateFieldInput>
  delete?: InputMaybe<PageAppDeleteFieldInput>
  disconnect?: InputMaybe<PageAppDisconnectFieldInput>
  update?: InputMaybe<PageAppUpdateConnectionInput>
  where?: InputMaybe<PageAppConnectionWhere>
}

export type PageConnectInput = {
  app?: InputMaybe<PageAppConnectFieldInput>
  pageContentContainer?: InputMaybe<PagePageContentContainerConnectFieldInput>
  rootElement?: InputMaybe<PageRootElementConnectFieldInput>
  store?: InputMaybe<PageStoreConnectFieldInput>
}

export type PageConnectOrCreateInput = {
  app?: InputMaybe<PageAppConnectOrCreateFieldInput>
  pageContentContainer?: InputMaybe<PagePageContentContainerConnectOrCreateFieldInput>
  rootElement?: InputMaybe<PageRootElementConnectOrCreateFieldInput>
  store?: InputMaybe<PageStoreConnectOrCreateFieldInput>
}

export type PageConnectOrCreateWhere = {
  node: PageUniqueWhere
}

export type PageConnectWhere = {
  node: PageWhere
}

export type PageCreateInput = {
  _compoundName: Scalars['String']['input']
  app?: InputMaybe<PageAppFieldInput>
  id: Scalars['ID']['input']
  kind: PageKind
  pageContentContainer?: InputMaybe<PagePageContentContainerFieldInput>
  rootElement?: InputMaybe<PageRootElementFieldInput>
  store?: InputMaybe<PageStoreFieldInput>
  url: Scalars['String']['input']
}

export type PageDeleteInput = {
  app?: InputMaybe<PageAppDeleteFieldInput>
  pageContentContainer?: InputMaybe<PagePageContentContainerDeleteFieldInput>
  rootElement?: InputMaybe<PageRootElementDeleteFieldInput>
  store?: InputMaybe<PageStoreDeleteFieldInput>
}

export type PageDisconnectInput = {
  app?: InputMaybe<PageAppDisconnectFieldInput>
  pageContentContainer?: InputMaybe<PagePageContentContainerDisconnectFieldInput>
  rootElement?: InputMaybe<PageRootElementDisconnectFieldInput>
  store?: InputMaybe<PageStoreDisconnectFieldInput>
}

export type PageEdge = {
  __typename?: 'PageEdge'
  cursor: Scalars['String']['output']
  node: Page
}

export type PageElementPageContentContainerAggregationSelection = {
  __typename?: 'PageElementPageContentContainerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<PageElementPageContentContainerNodeAggregateSelection>
}

export type PageElementPageContentContainerNodeAggregateSelection = {
  __typename?: 'PageElementPageContentContainerNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type PageElementRootElementAggregationSelection = {
  __typename?: 'PageElementRootElementAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<PageElementRootElementNodeAggregateSelection>
}

export type PageElementRootElementNodeAggregateSelection = {
  __typename?: 'PageElementRootElementNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  hasPreviousPage: Scalars['Boolean']['output']
  startCursor?: Maybe<Scalars['String']['output']>
}

export enum PageKind {
  InternalServerError = 'InternalServerError',
  NotFound = 'NotFound',
  Provider = 'Provider',
  Regular = 'Regular',
}

export type PageOnCreateInput = {
  _compoundName: Scalars['String']['input']
  id: Scalars['ID']['input']
  kind: PageKind
  url: Scalars['String']['input']
}

export type PageOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more PageSort objects to sort Pages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PageSort>>
}

export type PagePageContentContainerAggregateInput = {
  AND?: InputMaybe<Array<PagePageContentContainerAggregateInput>>
  NOT?: InputMaybe<PagePageContentContainerAggregateInput>
  OR?: InputMaybe<Array<PagePageContentContainerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<PagePageContentContainerNodeAggregationWhereInput>
}

export type PagePageContentContainerConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type PagePageContentContainerConnectOrCreateFieldInput = {
  onCreate: PagePageContentContainerConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type PagePageContentContainerConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type PagePageContentContainerConnection = {
  __typename?: 'PagePageContentContainerConnection'
  edges: Array<PagePageContentContainerRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type PagePageContentContainerConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type PagePageContentContainerConnectionWhere = {
  AND?: InputMaybe<Array<PagePageContentContainerConnectionWhere>>
  NOT?: InputMaybe<PagePageContentContainerConnectionWhere>
  OR?: InputMaybe<Array<PagePageContentContainerConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type PagePageContentContainerCreateFieldInput = {
  node: ElementCreateInput
}

export type PagePageContentContainerDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<PagePageContentContainerConnectionWhere>
}

export type PagePageContentContainerDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<PagePageContentContainerConnectionWhere>
}

export type PagePageContentContainerFieldInput = {
  connect?: InputMaybe<PagePageContentContainerConnectFieldInput>
  connectOrCreate?: InputMaybe<PagePageContentContainerConnectOrCreateFieldInput>
  create?: InputMaybe<PagePageContentContainerCreateFieldInput>
}

export type PagePageContentContainerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PagePageContentContainerNodeAggregationWhereInput>>
  NOT?: InputMaybe<PagePageContentContainerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<PagePageContentContainerNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type PagePageContentContainerRelationship = {
  __typename?: 'PagePageContentContainerRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type PagePageContentContainerUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type PagePageContentContainerUpdateFieldInput = {
  connect?: InputMaybe<PagePageContentContainerConnectFieldInput>
  connectOrCreate?: InputMaybe<PagePageContentContainerConnectOrCreateFieldInput>
  create?: InputMaybe<PagePageContentContainerCreateFieldInput>
  delete?: InputMaybe<PagePageContentContainerDeleteFieldInput>
  disconnect?: InputMaybe<PagePageContentContainerDisconnectFieldInput>
  update?: InputMaybe<PagePageContentContainerUpdateConnectionInput>
  where?: InputMaybe<PagePageContentContainerConnectionWhere>
}

export type PageRelationInput = {
  app?: InputMaybe<PageAppCreateFieldInput>
  pageContentContainer?: InputMaybe<PagePageContentContainerCreateFieldInput>
  rootElement?: InputMaybe<PageRootElementCreateFieldInput>
  store?: InputMaybe<PageStoreCreateFieldInput>
}

export type PageRootElementAggregateInput = {
  AND?: InputMaybe<Array<PageRootElementAggregateInput>>
  NOT?: InputMaybe<PageRootElementAggregateInput>
  OR?: InputMaybe<Array<PageRootElementAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<PageRootElementNodeAggregationWhereInput>
}

export type PageRootElementConnectFieldInput = {
  connect?: InputMaybe<ElementConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type PageRootElementConnectOrCreateFieldInput = {
  onCreate: PageRootElementConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type PageRootElementConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type PageRootElementConnection = {
  __typename?: 'PageRootElementConnection'
  edges: Array<PageRootElementRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type PageRootElementConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type PageRootElementConnectionWhere = {
  AND?: InputMaybe<Array<PageRootElementConnectionWhere>>
  NOT?: InputMaybe<PageRootElementConnectionWhere>
  OR?: InputMaybe<Array<PageRootElementConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type PageRootElementCreateFieldInput = {
  node: ElementCreateInput
}

export type PageRootElementDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

export type PageRootElementDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

export type PageRootElementFieldInput = {
  connect?: InputMaybe<PageRootElementConnectFieldInput>
  connectOrCreate?: InputMaybe<PageRootElementConnectOrCreateFieldInput>
  create?: InputMaybe<PageRootElementCreateFieldInput>
}

export type PageRootElementNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageRootElementNodeAggregationWhereInput>>
  NOT?: InputMaybe<PageRootElementNodeAggregationWhereInput>
  OR?: InputMaybe<Array<PageRootElementNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type PageRootElementRelationship = {
  __typename?: 'PageRootElementRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type PageRootElementUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type PageRootElementUpdateFieldInput = {
  connect?: InputMaybe<PageRootElementConnectFieldInput>
  connectOrCreate?: InputMaybe<PageRootElementConnectOrCreateFieldInput>
  create?: InputMaybe<PageRootElementCreateFieldInput>
  delete?: InputMaybe<PageRootElementDeleteFieldInput>
  disconnect?: InputMaybe<PageRootElementDisconnectFieldInput>
  update?: InputMaybe<PageRootElementUpdateConnectionInput>
  where?: InputMaybe<PageRootElementConnectionWhere>
}

/** Fields to sort Pages by. The order in which sorts are applied is not guaranteed when specifying many fields in one PageSort object. */
export type PageSort = {
  _compoundName?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  url?: InputMaybe<SortDirection>
}

export type PageStoreAggregateInput = {
  AND?: InputMaybe<Array<PageStoreAggregateInput>>
  NOT?: InputMaybe<PageStoreAggregateInput>
  OR?: InputMaybe<Array<PageStoreAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<PageStoreNodeAggregationWhereInput>
}

export type PageStoreConnectFieldInput = {
  connect?: InputMaybe<StoreConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<StoreConnectWhere>
}

export type PageStoreConnectOrCreateFieldInput = {
  onCreate: PageStoreConnectOrCreateFieldInputOnCreate
  where: StoreConnectOrCreateWhere
}

export type PageStoreConnectOrCreateFieldInputOnCreate = {
  node: StoreOnCreateInput
}

export type PageStoreConnection = {
  __typename?: 'PageStoreConnection'
  edges: Array<PageStoreRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type PageStoreConnectionSort = {
  node?: InputMaybe<StoreSort>
}

export type PageStoreConnectionWhere = {
  AND?: InputMaybe<Array<PageStoreConnectionWhere>>
  NOT?: InputMaybe<PageStoreConnectionWhere>
  OR?: InputMaybe<Array<PageStoreConnectionWhere>>
  node?: InputMaybe<StoreWhere>
}

export type PageStoreCreateFieldInput = {
  node: StoreCreateInput
}

export type PageStoreDeleteFieldInput = {
  delete?: InputMaybe<StoreDeleteInput>
  where?: InputMaybe<PageStoreConnectionWhere>
}

export type PageStoreDisconnectFieldInput = {
  disconnect?: InputMaybe<StoreDisconnectInput>
  where?: InputMaybe<PageStoreConnectionWhere>
}

export type PageStoreFieldInput = {
  connect?: InputMaybe<PageStoreConnectFieldInput>
  connectOrCreate?: InputMaybe<PageStoreConnectOrCreateFieldInput>
  create?: InputMaybe<PageStoreCreateFieldInput>
}

export type PageStoreNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageStoreNodeAggregationWhereInput>>
  NOT?: InputMaybe<PageStoreNodeAggregationWhereInput>
  OR?: InputMaybe<Array<PageStoreNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type PageStoreRelationship = {
  __typename?: 'PageStoreRelationship'
  cursor: Scalars['String']['output']
  node: Store
}

export type PageStoreStoreAggregationSelection = {
  __typename?: 'PageStoreStoreAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<PageStoreStoreNodeAggregateSelection>
}

export type PageStoreStoreNodeAggregateSelection = {
  __typename?: 'PageStoreStoreNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type PageStoreUpdateConnectionInput = {
  node?: InputMaybe<StoreUpdateInput>
}

export type PageStoreUpdateFieldInput = {
  connect?: InputMaybe<PageStoreConnectFieldInput>
  connectOrCreate?: InputMaybe<PageStoreConnectOrCreateFieldInput>
  create?: InputMaybe<PageStoreCreateFieldInput>
  delete?: InputMaybe<PageStoreDeleteFieldInput>
  disconnect?: InputMaybe<PageStoreDisconnectFieldInput>
  update?: InputMaybe<PageStoreUpdateConnectionInput>
  where?: InputMaybe<PageStoreConnectionWhere>
}

/** Allows picking a page from the list of pages */
export type PageType = IBaseType & {
  __typename?: 'PageType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<PageTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/** Allows picking a page from the list of pages */
export type PageTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a page from the list of pages */
export type PageTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Allows picking a page from the list of pages */
export type PageTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type PageTypeAggregateSelection = {
  __typename?: 'PageTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type PageTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type PageTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type PageTypeConnectOrCreateWhere = {
  node: PageTypeUniqueWhere
}

export type PageTypeConnectWhere = {
  node: PageTypeWhere
}

export type PageTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type PageTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type PageTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type PageTypeEdge = {
  __typename?: 'PageTypeEdge'
  cursor: Scalars['String']['output']
  node: PageType
}

export type PageTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type PageTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more PageTypeSort objects to sort PageTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PageTypeSort>>
}

export type PageTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<PageTypeOwnerAggregateInput>>
  NOT?: InputMaybe<PageTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<PageTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<PageTypeOwnerNodeAggregationWhereInput>
}

export type PageTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PageTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<PageTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<PageTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type PageTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort PageTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one PageTypeSort object. */
export type PageTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type PageTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PageTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type PageTypeUserOwnerAggregationSelection = {
  __typename?: 'PageTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<PageTypeUserOwnerNodeAggregateSelection>
}

export type PageTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'PageTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type PageTypeWhere = {
  AND?: InputMaybe<Array<PageTypeWhere>>
  NOT?: InputMaybe<PageTypeWhere>
  OR?: InputMaybe<Array<PageTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<PageTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type PageTypesConnection = {
  __typename?: 'PageTypesConnection'
  edges: Array<PageTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type PageUniqueWhere = {
  _compoundName?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PageUpdateInput = {
  _compoundName?: InputMaybe<Scalars['String']['input']>
  app?: InputMaybe<PageAppUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<PageKind>
  pageContentContainer?: InputMaybe<PagePageContentContainerUpdateFieldInput>
  rootElement?: InputMaybe<PageRootElementUpdateFieldInput>
  store?: InputMaybe<PageStoreUpdateFieldInput>
  url?: InputMaybe<Scalars['String']['input']>
}

export type PageWhere = {
  AND?: InputMaybe<Array<PageWhere>>
  NOT?: InputMaybe<PageWhere>
  OR?: InputMaybe<Array<PageWhere>>
  _compoundName?: InputMaybe<Scalars['String']['input']>
  _compoundName_CONTAINS?: InputMaybe<Scalars['String']['input']>
  _compoundName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  _compoundName_IN?: InputMaybe<Array<Scalars['String']['input']>>
  _compoundName_MATCHES?: InputMaybe<Scalars['String']['input']>
  _compoundName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  app?: InputMaybe<AppWhere>
  appAggregate?: InputMaybe<PageAppAggregateInput>
  appConnection?: InputMaybe<PageAppConnectionWhere>
  appConnection_NOT?: InputMaybe<PageAppConnectionWhere>
  app_NOT?: InputMaybe<AppWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<PageKind>
  kind_IN?: InputMaybe<Array<PageKind>>
  pageContentContainer?: InputMaybe<ElementWhere>
  pageContentContainerAggregate?: InputMaybe<PagePageContentContainerAggregateInput>
  pageContentContainerConnection?: InputMaybe<PagePageContentContainerConnectionWhere>
  pageContentContainerConnection_NOT?: InputMaybe<PagePageContentContainerConnectionWhere>
  pageContentContainer_NOT?: InputMaybe<ElementWhere>
  rootElement?: InputMaybe<ElementWhere>
  rootElementAggregate?: InputMaybe<PageRootElementAggregateInput>
  rootElementConnection?: InputMaybe<PageRootElementConnectionWhere>
  rootElementConnection_NOT?: InputMaybe<PageRootElementConnectionWhere>
  rootElement_NOT?: InputMaybe<ElementWhere>
  store?: InputMaybe<StoreWhere>
  storeAggregate?: InputMaybe<PageStoreAggregateInput>
  storeConnection?: InputMaybe<PageStoreConnectionWhere>
  storeConnection_NOT?: InputMaybe<PageStoreConnectionWhere>
  store_NOT?: InputMaybe<StoreWhere>
  url?: InputMaybe<Scalars['String']['input']>
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  url_IN?: InputMaybe<Array<Scalars['String']['input']>>
  url_MATCHES?: InputMaybe<Scalars['String']['input']>
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
}

export type PagesConnection = {
  __typename?: 'PagesConnection'
  edges: Array<PageEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveType = IBaseType & {
  __typename?: 'PrimitiveType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<PrimitiveTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
  primitiveKind: PrimitiveTypeKind
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Base atomic building block of the type system. Represents primitive types - String, Integer, Float, Boolean */
export type PrimitiveTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type PrimitiveTypeAggregateSelection = {
  __typename?: 'PrimitiveTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type PrimitiveTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type PrimitiveTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type PrimitiveTypeConnectOrCreateWhere = {
  node: PrimitiveTypeUniqueWhere
}

export type PrimitiveTypeConnectWhere = {
  node: PrimitiveTypeWhere
}

export type PrimitiveTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
  primitiveKind: PrimitiveTypeKind
}

export type PrimitiveTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type PrimitiveTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type PrimitiveTypeEdge = {
  __typename?: 'PrimitiveTypeEdge'
  cursor: Scalars['String']['output']
  node: PrimitiveType
}

export enum PrimitiveTypeKind {
  Boolean = 'Boolean',
  Integer = 'Integer',
  Number = 'Number',
  String = 'String',
}

export type PrimitiveTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  primitiveKind: PrimitiveTypeKind
}

export type PrimitiveTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more PrimitiveTypeSort objects to sort PrimitiveTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PrimitiveTypeSort>>
}

export type PrimitiveTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<PrimitiveTypeOwnerAggregateInput>>
  NOT?: InputMaybe<PrimitiveTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<PrimitiveTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<PrimitiveTypeOwnerNodeAggregationWhereInput>
}

export type PrimitiveTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PrimitiveTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<PrimitiveTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<PrimitiveTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type PrimitiveTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort PrimitiveTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one PrimitiveTypeSort object. */
export type PrimitiveTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  primitiveKind?: InputMaybe<SortDirection>
}

export type PrimitiveTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  primitiveKind?: InputMaybe<PrimitiveTypeKind>
}

export type PrimitiveTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
  primitiveKind?: InputMaybe<PrimitiveTypeKind>
}

export type PrimitiveTypeUserOwnerAggregationSelection = {
  __typename?: 'PrimitiveTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<PrimitiveTypeUserOwnerNodeAggregateSelection>
}

export type PrimitiveTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'PrimitiveTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type PrimitiveTypeWhere = {
  AND?: InputMaybe<Array<PrimitiveTypeWhere>>
  NOT?: InputMaybe<PrimitiveTypeWhere>
  OR?: InputMaybe<Array<PrimitiveTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<PrimitiveTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  primitiveKind?: InputMaybe<PrimitiveTypeKind>
  primitiveKind_IN?: InputMaybe<Array<PrimitiveTypeKind>>
}

export type PrimitiveTypesConnection = {
  __typename?: 'PrimitiveTypesConnection'
  edges: Array<PrimitiveTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Prop = {
  __typename?: 'Prop'
  data: Scalars['String']['output']
  id: Scalars['ID']['output']
}

export type PropAggregateSelection = {
  __typename?: 'PropAggregateSelection'
  count: Scalars['Int']['output']
  data: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type PropConnectOrCreateWhere = {
  node: PropUniqueWhere
}

export type PropConnectWhere = {
  node: PropWhere
}

export type PropCreateInput = {
  data: Scalars['String']['input']
  id: Scalars['ID']['input']
}

export type PropEdge = {
  __typename?: 'PropEdge'
  cursor: Scalars['String']['output']
  node: Prop
}

export type PropOnCreateInput = {
  data: Scalars['String']['input']
  id: Scalars['ID']['input']
}

export type PropOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more PropSort objects to sort Props by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PropSort>>
}

/** Fields to sort Props by. The order in which sorts are applied is not guaranteed when specifying many fields in one PropSort object. */
export type PropSort = {
  data?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
}

export type PropUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PropUpdateInput = {
  data?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PropWhere = {
  AND?: InputMaybe<Array<PropWhere>>
  NOT?: InputMaybe<PropWhere>
  OR?: InputMaybe<Array<PropWhere>>
  data?: InputMaybe<Scalars['String']['input']>
  data_CONTAINS?: InputMaybe<Scalars['String']['input']>
  data_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  data_IN?: InputMaybe<Array<Scalars['String']['input']>>
  data_MATCHES?: InputMaybe<Scalars['String']['input']>
  data_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
}

export type PropsConnection = {
  __typename?: 'PropsConnection'
  edges: Array<PropEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type Query = {
  __typename?: 'Query'
  actionTypes: Array<ActionType>
  actionTypesAggregate: ActionTypeAggregateSelection
  actionTypesConnection: ActionTypesConnection
  apiActions: Array<ApiAction>
  apiActionsAggregate: ApiActionAggregateSelection
  apiActionsConnection: ApiActionsConnection
  appTypes: Array<AppType>
  appTypesAggregate: AppTypeAggregateSelection
  appTypesConnection: AppTypesConnection
  apps: Array<App>
  appsAggregate: AppAggregateSelection
  appsConnection: AppsConnection
  arrayTypes: Array<ArrayType>
  arrayTypesAggregate: ArrayTypeAggregateSelection
  arrayTypesConnection: ArrayTypesConnection
  atoms: Array<Atom>
  atomsAggregate: AtomAggregateSelection
  atomsConnection: AtomsConnection
  baseTypes: GetBaseTypesReturn
  codeActions: Array<CodeAction>
  codeActionsAggregate: CodeActionAggregateSelection
  codeActionsConnection: CodeActionsConnection
  codeMirrorTypes: Array<CodeMirrorType>
  codeMirrorTypesAggregate: CodeMirrorTypeAggregateSelection
  codeMirrorTypesConnection: CodeMirrorTypesConnection
  components: Array<Component>
  componentsAggregate: ComponentAggregateSelection
  componentsConnection: ComponentsConnection
  domains: Array<Domain>
  domainsAggregate: DomainAggregateSelection
  domainsConnection: DomainsConnection
  elementTypes: Array<ElementType>
  elementTypesAggregate: ElementTypeAggregateSelection
  elementTypesConnection: ElementTypesConnection
  elements: Array<Element>
  elementsAggregate: ElementAggregateSelection
  elementsConnection: ElementsConnection
  enumTypeValues: Array<EnumTypeValue>
  enumTypeValuesAggregate: EnumTypeValueAggregateSelection
  enumTypeValuesConnection: EnumTypeValuesConnection
  enumTypes: Array<EnumType>
  enumTypesAggregate: EnumTypeAggregateSelection
  enumTypesConnection: EnumTypesConnection
  fields: Array<Field>
  fieldsAggregate: FieldAggregateSelection
  fieldsConnection: FieldsConnection
  getBaseTypesReturns: Array<GetBaseTypesReturn>
  getBaseTypesReturnsAggregate: GetBaseTypesReturnAggregateSelection
  getBaseTypesReturnsConnection: GetBaseTypesReturnsConnection
  /**
   * Returns a list of all Type and Atom entities that reference the type with the given id
   * This could be different types of relationships like Atom-Api, ArrayType-itemType, InterfaceType-field, UnionType-unionTypeChild
   */
  getTypeReferences?: Maybe<Array<TypeReference>>
  hooks: Array<Hook>
  hooksAggregate: HookAggregateSelection
  hooksConnection: HooksConnection
  interfaceTypes: Array<InterfaceType>
  interfaceTypesAggregate: InterfaceTypeAggregateSelection
  interfaceTypesConnection: InterfaceTypesConnection
  /** Does a recursive check to see if the parent type (parentTypeId) contains the descendant type (descendantTypeId) at any level of nesting. Useful for checking for recursion */
  isTypeDescendantOf?: Maybe<Scalars['Boolean']['output']>
  lambdaTypes: Array<LambdaType>
  lambdaTypesAggregate: LambdaTypeAggregateSelection
  lambdaTypesConnection: LambdaTypesConnection
  pageTypes: Array<PageType>
  pageTypesAggregate: PageTypeAggregateSelection
  pageTypesConnection: PageTypesConnection
  pages: Array<Page>
  pagesAggregate: PageAggregateSelection
  pagesConnection: PagesConnection
  primitiveTypes: Array<PrimitiveType>
  primitiveTypesAggregate: PrimitiveTypeAggregateSelection
  primitiveTypesConnection: PrimitiveTypesConnection
  props: Array<Prop>
  propsAggregate: PropAggregateSelection
  propsConnection: PropsConnection
  reactNodeTypes: Array<ReactNodeType>
  reactNodeTypesAggregate: ReactNodeTypeAggregateSelection
  reactNodeTypesConnection: ReactNodeTypesConnection
  renderPropTypes: Array<RenderPropType>
  renderPropTypesAggregate: RenderPropTypeAggregateSelection
  renderPropTypesConnection: RenderPropTypesConnection
  resources: Array<Resource>
  resourcesAggregate: ResourceAggregateSelection
  resourcesConnection: ResourcesConnection
  stores: Array<Store>
  storesAggregate: StoreAggregateSelection
  storesConnection: StoresConnection
  tags: Array<Tag>
  tagsAggregate: TagAggregateSelection
  tagsConnection: TagsConnection
  typeReferences: Array<TypeReference>
  typeReferencesAggregate: TypeReferenceAggregateSelection
  typeReferencesConnection: TypeReferencesConnection
  unionTypes: Array<UnionType>
  unionTypesAggregate: UnionTypeAggregateSelection
  unionTypesConnection: UnionTypesConnection
  users: Array<User>
  usersAggregate: UserAggregateSelection
  usersConnection: UsersConnection
}

export type QueryActionTypesArgs = {
  options?: InputMaybe<ActionTypeOptions>
  where?: InputMaybe<ActionTypeWhere>
}

export type QueryActionTypesAggregateArgs = {
  where?: InputMaybe<ActionTypeWhere>
}

export type QueryActionTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ActionTypeSort>>>
  where?: InputMaybe<ActionTypeWhere>
}

export type QueryApiActionsArgs = {
  options?: InputMaybe<ApiActionOptions>
  where?: InputMaybe<ApiActionWhere>
}

export type QueryApiActionsAggregateArgs = {
  where?: InputMaybe<ApiActionWhere>
}

export type QueryApiActionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ApiActionSort>>>
  where?: InputMaybe<ApiActionWhere>
}

export type QueryAppTypesArgs = {
  options?: InputMaybe<AppTypeOptions>
  where?: InputMaybe<AppTypeWhere>
}

export type QueryAppTypesAggregateArgs = {
  where?: InputMaybe<AppTypeWhere>
}

export type QueryAppTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<AppTypeSort>>>
  where?: InputMaybe<AppTypeWhere>
}

export type QueryAppsArgs = {
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}

export type QueryAppsAggregateArgs = {
  where?: InputMaybe<AppWhere>
}

export type QueryAppsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<AppSort>>>
  where?: InputMaybe<AppWhere>
}

export type QueryArrayTypesArgs = {
  options?: InputMaybe<ArrayTypeOptions>
  where?: InputMaybe<ArrayTypeWhere>
}

export type QueryArrayTypesAggregateArgs = {
  where?: InputMaybe<ArrayTypeWhere>
}

export type QueryArrayTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ArrayTypeSort>>>
  where?: InputMaybe<ArrayTypeWhere>
}

export type QueryAtomsArgs = {
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

export type QueryAtomsAggregateArgs = {
  where?: InputMaybe<AtomWhere>
}

export type QueryAtomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<AtomSort>>>
  where?: InputMaybe<AtomWhere>
}

export type QueryBaseTypesArgs = {
  options?: InputMaybe<GetBaseTypesOptions>
}

export type QueryCodeActionsArgs = {
  options?: InputMaybe<CodeActionOptions>
  where?: InputMaybe<CodeActionWhere>
}

export type QueryCodeActionsAggregateArgs = {
  where?: InputMaybe<CodeActionWhere>
}

export type QueryCodeActionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<CodeActionSort>>>
  where?: InputMaybe<CodeActionWhere>
}

export type QueryCodeMirrorTypesArgs = {
  options?: InputMaybe<CodeMirrorTypeOptions>
  where?: InputMaybe<CodeMirrorTypeWhere>
}

export type QueryCodeMirrorTypesAggregateArgs = {
  where?: InputMaybe<CodeMirrorTypeWhere>
}

export type QueryCodeMirrorTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<CodeMirrorTypeSort>>>
  where?: InputMaybe<CodeMirrorTypeWhere>
}

export type QueryComponentsArgs = {
  options?: InputMaybe<ComponentOptions>
  where?: InputMaybe<ComponentWhere>
}

export type QueryComponentsAggregateArgs = {
  where?: InputMaybe<ComponentWhere>
}

export type QueryComponentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ComponentSort>>>
  where?: InputMaybe<ComponentWhere>
}

export type QueryDomainsArgs = {
  options?: InputMaybe<DomainOptions>
  where?: InputMaybe<DomainWhere>
}

export type QueryDomainsAggregateArgs = {
  where?: InputMaybe<DomainWhere>
}

export type QueryDomainsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<DomainSort>>>
  where?: InputMaybe<DomainWhere>
}

export type QueryElementTypesArgs = {
  options?: InputMaybe<ElementTypeOptions>
  where?: InputMaybe<ElementTypeWhere>
}

export type QueryElementTypesAggregateArgs = {
  where?: InputMaybe<ElementTypeWhere>
}

export type QueryElementTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ElementTypeSort>>>
  where?: InputMaybe<ElementTypeWhere>
}

export type QueryElementsArgs = {
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type QueryElementsAggregateArgs = {
  where?: InputMaybe<ElementWhere>
}

export type QueryElementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ElementSort>>>
  where?: InputMaybe<ElementWhere>
}

export type QueryEnumTypeValuesArgs = {
  options?: InputMaybe<EnumTypeValueOptions>
  where?: InputMaybe<EnumTypeValueWhere>
}

export type QueryEnumTypeValuesAggregateArgs = {
  where?: InputMaybe<EnumTypeValueWhere>
}

export type QueryEnumTypeValuesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<EnumTypeValueSort>>>
  where?: InputMaybe<EnumTypeValueWhere>
}

export type QueryEnumTypesArgs = {
  options?: InputMaybe<EnumTypeOptions>
  where?: InputMaybe<EnumTypeWhere>
}

export type QueryEnumTypesAggregateArgs = {
  where?: InputMaybe<EnumTypeWhere>
}

export type QueryEnumTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<EnumTypeSort>>>
  where?: InputMaybe<EnumTypeWhere>
}

export type QueryFieldsArgs = {
  options?: InputMaybe<FieldOptions>
  where?: InputMaybe<FieldWhere>
}

export type QueryFieldsAggregateArgs = {
  where?: InputMaybe<FieldWhere>
}

export type QueryFieldsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<FieldSort>>>
  where?: InputMaybe<FieldWhere>
}

export type QueryGetBaseTypesReturnsArgs = {
  options?: InputMaybe<GetBaseTypesReturnOptions>
  where?: InputMaybe<GetBaseTypesReturnWhere>
}

export type QueryGetBaseTypesReturnsAggregateArgs = {
  where?: InputMaybe<GetBaseTypesReturnWhere>
}

export type QueryGetBaseTypesReturnsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<GetBaseTypesReturnSort>>>
  where?: InputMaybe<GetBaseTypesReturnWhere>
}

export type QueryGetTypeReferencesArgs = {
  typeId: Scalars['ID']['input']
}

export type QueryHooksArgs = {
  options?: InputMaybe<HookOptions>
  where?: InputMaybe<HookWhere>
}

export type QueryHooksAggregateArgs = {
  where?: InputMaybe<HookWhere>
}

export type QueryHooksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<HookSort>>>
  where?: InputMaybe<HookWhere>
}

export type QueryInterfaceTypesArgs = {
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type QueryInterfaceTypesAggregateArgs = {
  where?: InputMaybe<InterfaceTypeWhere>
}

export type QueryInterfaceTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<InterfaceTypeSort>>>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type QueryIsTypeDescendantOfArgs = {
  descendantTypeId: Scalars['ID']['input']
  parentTypeId: Scalars['ID']['input']
}

export type QueryLambdaTypesArgs = {
  options?: InputMaybe<LambdaTypeOptions>
  where?: InputMaybe<LambdaTypeWhere>
}

export type QueryLambdaTypesAggregateArgs = {
  where?: InputMaybe<LambdaTypeWhere>
}

export type QueryLambdaTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<LambdaTypeSort>>>
  where?: InputMaybe<LambdaTypeWhere>
}

export type QueryPageTypesArgs = {
  options?: InputMaybe<PageTypeOptions>
  where?: InputMaybe<PageTypeWhere>
}

export type QueryPageTypesAggregateArgs = {
  where?: InputMaybe<PageTypeWhere>
}

export type QueryPageTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<PageTypeSort>>>
  where?: InputMaybe<PageTypeWhere>
}

export type QueryPagesArgs = {
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}

export type QueryPagesAggregateArgs = {
  where?: InputMaybe<PageWhere>
}

export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<PageSort>>>
  where?: InputMaybe<PageWhere>
}

export type QueryPrimitiveTypesArgs = {
  options?: InputMaybe<PrimitiveTypeOptions>
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type QueryPrimitiveTypesAggregateArgs = {
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type QueryPrimitiveTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<PrimitiveTypeSort>>>
  where?: InputMaybe<PrimitiveTypeWhere>
}

export type QueryPropsArgs = {
  options?: InputMaybe<PropOptions>
  where?: InputMaybe<PropWhere>
}

export type QueryPropsAggregateArgs = {
  where?: InputMaybe<PropWhere>
}

export type QueryPropsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<PropSort>>>
  where?: InputMaybe<PropWhere>
}

export type QueryReactNodeTypesArgs = {
  options?: InputMaybe<ReactNodeTypeOptions>
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type QueryReactNodeTypesAggregateArgs = {
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type QueryReactNodeTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ReactNodeTypeSort>>>
  where?: InputMaybe<ReactNodeTypeWhere>
}

export type QueryRenderPropTypesArgs = {
  options?: InputMaybe<RenderPropTypeOptions>
  where?: InputMaybe<RenderPropTypeWhere>
}

export type QueryRenderPropTypesAggregateArgs = {
  where?: InputMaybe<RenderPropTypeWhere>
}

export type QueryRenderPropTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<RenderPropTypeSort>>>
  where?: InputMaybe<RenderPropTypeWhere>
}

export type QueryResourcesArgs = {
  options?: InputMaybe<ResourceOptions>
  where?: InputMaybe<ResourceWhere>
}

export type QueryResourcesAggregateArgs = {
  where?: InputMaybe<ResourceWhere>
}

export type QueryResourcesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<ResourceSort>>>
  where?: InputMaybe<ResourceWhere>
}

export type QueryStoresArgs = {
  options?: InputMaybe<StoreOptions>
  where?: InputMaybe<StoreWhere>
}

export type QueryStoresAggregateArgs = {
  where?: InputMaybe<StoreWhere>
}

export type QueryStoresConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<StoreSort>>>
  where?: InputMaybe<StoreWhere>
}

export type QueryTagsArgs = {
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type QueryTagsAggregateArgs = {
  where?: InputMaybe<TagWhere>
}

export type QueryTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<TagSort>>>
  where?: InputMaybe<TagWhere>
}

export type QueryTypeReferencesArgs = {
  options?: InputMaybe<TypeReferenceOptions>
  where?: InputMaybe<TypeReferenceWhere>
}

export type QueryTypeReferencesAggregateArgs = {
  where?: InputMaybe<TypeReferenceWhere>
}

export type QueryTypeReferencesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<TypeReferenceSort>>>
  where?: InputMaybe<TypeReferenceWhere>
}

export type QueryUnionTypesArgs = {
  options?: InputMaybe<UnionTypeOptions>
  where?: InputMaybe<UnionTypeWhere>
}

export type QueryUnionTypesAggregateArgs = {
  where?: InputMaybe<UnionTypeWhere>
}

export type QueryUnionTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<UnionTypeSort>>>
  where?: InputMaybe<UnionTypeWhere>
}

export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>
  where?: InputMaybe<UserWhere>
}

export type QueryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ReactNodeType = IBaseType & {
  __typename?: 'ReactNodeType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<ReactNodeTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ReactNodeTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ReactNodeTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a React node: `ReactNode`
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type ReactNodeTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type ReactNodeTypeAggregateSelection = {
  __typename?: 'ReactNodeTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ReactNodeTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type ReactNodeTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type ReactNodeTypeConnectOrCreateWhere = {
  node: ReactNodeTypeUniqueWhere
}

export type ReactNodeTypeConnectWhere = {
  node: ReactNodeTypeWhere
}

export type ReactNodeTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type ReactNodeTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type ReactNodeTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type ReactNodeTypeEdge = {
  __typename?: 'ReactNodeTypeEdge'
  cursor: Scalars['String']['output']
  node: ReactNodeType
}

export type ReactNodeTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type ReactNodeTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ReactNodeTypeSort objects to sort ReactNodeTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ReactNodeTypeSort>>
}

export type ReactNodeTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<ReactNodeTypeOwnerAggregateInput>>
  NOT?: InputMaybe<ReactNodeTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<ReactNodeTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ReactNodeTypeOwnerNodeAggregationWhereInput>
}

export type ReactNodeTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ReactNodeTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<ReactNodeTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ReactNodeTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ReactNodeTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort ReactNodeTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one ReactNodeTypeSort object. */
export type ReactNodeTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ReactNodeTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type ReactNodeTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type ReactNodeTypeUserOwnerAggregationSelection = {
  __typename?: 'ReactNodeTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ReactNodeTypeUserOwnerNodeAggregateSelection>
}

export type ReactNodeTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'ReactNodeTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type ReactNodeTypeWhere = {
  AND?: InputMaybe<Array<ReactNodeTypeWhere>>
  NOT?: InputMaybe<ReactNodeTypeWhere>
  OR?: InputMaybe<Array<ReactNodeTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ReactNodeTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type ReactNodeTypesConnection = {
  __typename?: 'ReactNodeTypesConnection'
  edges: Array<ReactNodeTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type RenderPropType = IBaseType & {
  __typename?: 'RenderPropType'
  id: Scalars['ID']['output']
  kind: TypeKind
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<RenderPropTypeUserOwnerAggregationSelection>
  ownerConnection: IBaseTypeOwnerConnection
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type RenderPropTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type RenderPropTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/**
 * Allows picking a Component from the list of components.
 * It is passed to the rendered element as a function that takes props as input
 * and returns a React element: '(props) => ReactNode'
 * Prop values for this type have the shape of TypedProp in order to
 * be distinguished from other element types.
 * Comparison between different element types:
 * - RenderPropType: Component select box, results it '(props) => ReactNode' value
 * - ReactNodeType: Component select box, results it 'ReactNode' value
 * - ElementType: Current tree element select box, results it 'ReactNode' value
 */
export type RenderPropTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

export type RenderPropTypeAggregateSelection = {
  __typename?: 'RenderPropTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type RenderPropTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
}

export type RenderPropTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
}

export type RenderPropTypeConnectOrCreateWhere = {
  node: RenderPropTypeUniqueWhere
}

export type RenderPropTypeConnectWhere = {
  node: RenderPropTypeWhere
}

export type RenderPropTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
}

export type RenderPropTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
}

export type RenderPropTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
}

export type RenderPropTypeEdge = {
  __typename?: 'RenderPropTypeEdge'
  cursor: Scalars['String']['output']
  node: RenderPropType
}

export type RenderPropTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type RenderPropTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more RenderPropTypeSort objects to sort RenderPropTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RenderPropTypeSort>>
}

export type RenderPropTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<RenderPropTypeOwnerAggregateInput>>
  NOT?: InputMaybe<RenderPropTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<RenderPropTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<RenderPropTypeOwnerNodeAggregationWhereInput>
}

export type RenderPropTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RenderPropTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<RenderPropTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<RenderPropTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type RenderPropTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
}

/** Fields to sort RenderPropTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one RenderPropTypeSort object. */
export type RenderPropTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type RenderPropTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type RenderPropTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
}

export type RenderPropTypeUserOwnerAggregationSelection = {
  __typename?: 'RenderPropTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<RenderPropTypeUserOwnerNodeAggregateSelection>
}

export type RenderPropTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'RenderPropTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type RenderPropTypeWhere = {
  AND?: InputMaybe<Array<RenderPropTypeWhere>>
  NOT?: InputMaybe<RenderPropTypeWhere>
  OR?: InputMaybe<Array<RenderPropTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<RenderPropTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
}

export type RenderPropTypesConnection = {
  __typename?: 'RenderPropTypesConnection'
  edges: Array<RenderPropTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type RenderType = {
  __typename?: 'RenderType'
  id: Scalars['ID']['output']
  kind: RenderTypeKind
}

export enum RenderTypeKind {
  Atom = 'Atom',
  Component = 'Component',
}

export type ResetDatabaseMutationResponse = {
  __typename?: 'ResetDatabaseMutationResponse'
  success?: Maybe<Scalars['Boolean']['output']>
}

export type Resource = WithOwner & {
  __typename?: 'Resource'
  config: Prop
  configAggregate?: Maybe<ResourcePropConfigAggregationSelection>
  configConnection: ResourceConfigConnection
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<ResourceUserOwnerAggregationSelection>
  ownerConnection: WithOwnerOwnerConnection
  type: ResourceType
}

export type ResourceConfigArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PropOptions>
  where?: InputMaybe<PropWhere>
}

export type ResourceConfigAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PropWhere>
}

export type ResourceConfigConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<ResourceConfigConnectionSort>>
  where?: InputMaybe<ResourceConfigConnectionWhere>
}

export type ResourceOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type ResourceOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

export type ResourceOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<WithOwnerOwnerConnectionSort>>
  where?: InputMaybe<WithOwnerOwnerConnectionWhere>
}

export type ResourceAggregateSelection = {
  __typename?: 'ResourceAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type ResourceConfigAggregateInput = {
  AND?: InputMaybe<Array<ResourceConfigAggregateInput>>
  NOT?: InputMaybe<ResourceConfigAggregateInput>
  OR?: InputMaybe<Array<ResourceConfigAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ResourceConfigNodeAggregationWhereInput>
}

export type ResourceConfigConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PropConnectWhere>
}

export type ResourceConfigConnectOrCreateFieldInput = {
  onCreate: ResourceConfigConnectOrCreateFieldInputOnCreate
  where: PropConnectOrCreateWhere
}

export type ResourceConfigConnectOrCreateFieldInputOnCreate = {
  node: PropOnCreateInput
}

export type ResourceConfigConnection = {
  __typename?: 'ResourceConfigConnection'
  edges: Array<ResourceConfigRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type ResourceConfigConnectionSort = {
  node?: InputMaybe<PropSort>
}

export type ResourceConfigConnectionWhere = {
  AND?: InputMaybe<Array<ResourceConfigConnectionWhere>>
  NOT?: InputMaybe<ResourceConfigConnectionWhere>
  OR?: InputMaybe<Array<ResourceConfigConnectionWhere>>
  node?: InputMaybe<PropWhere>
}

export type ResourceConfigCreateFieldInput = {
  node: PropCreateInput
}

export type ResourceConfigDeleteFieldInput = {
  where?: InputMaybe<ResourceConfigConnectionWhere>
}

export type ResourceConfigDisconnectFieldInput = {
  where?: InputMaybe<ResourceConfigConnectionWhere>
}

export type ResourceConfigFieldInput = {
  connect?: InputMaybe<ResourceConfigConnectFieldInput>
  connectOrCreate?: InputMaybe<ResourceConfigConnectOrCreateFieldInput>
  create?: InputMaybe<ResourceConfigCreateFieldInput>
}

export type ResourceConfigNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ResourceConfigNodeAggregationWhereInput>>
  NOT?: InputMaybe<ResourceConfigNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ResourceConfigNodeAggregationWhereInput>>
  data_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  data_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  data_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  data_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ResourceConfigRelationship = {
  __typename?: 'ResourceConfigRelationship'
  cursor: Scalars['String']['output']
  node: Prop
}

export type ResourceConfigUpdateConnectionInput = {
  node?: InputMaybe<PropUpdateInput>
}

export type ResourceConfigUpdateFieldInput = {
  connect?: InputMaybe<ResourceConfigConnectFieldInput>
  connectOrCreate?: InputMaybe<ResourceConfigConnectOrCreateFieldInput>
  create?: InputMaybe<ResourceConfigCreateFieldInput>
  delete?: InputMaybe<ResourceConfigDeleteFieldInput>
  disconnect?: InputMaybe<ResourceConfigDisconnectFieldInput>
  update?: InputMaybe<ResourceConfigUpdateConnectionInput>
  where?: InputMaybe<ResourceConfigConnectionWhere>
}

export type ResourceConnectInput = {
  config?: InputMaybe<ResourceConfigConnectFieldInput>
  owner?: InputMaybe<WithOwnerOwnerConnectFieldInput>
}

export type ResourceConnectOrCreateInput = {
  config?: InputMaybe<ResourceConfigConnectOrCreateFieldInput>
  owner?: InputMaybe<WithOwnerOwnerConnectOrCreateFieldInput>
}

export type ResourceConnectOrCreateWhere = {
  node: ResourceUniqueWhere
}

export type ResourceConnectWhere = {
  node: ResourceWhere
}

export type ResourceCreateInput = {
  config?: InputMaybe<ResourceConfigFieldInput>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  owner?: InputMaybe<WithOwnerOwnerFieldInput>
  type: ResourceType
}

export type ResourceDeleteInput = {
  config?: InputMaybe<ResourceConfigDeleteFieldInput>
  owner?: InputMaybe<WithOwnerOwnerDeleteFieldInput>
}

export type ResourceDisconnectInput = {
  config?: InputMaybe<ResourceConfigDisconnectFieldInput>
  owner?: InputMaybe<WithOwnerOwnerDisconnectFieldInput>
}

export type ResourceEdge = {
  __typename?: 'ResourceEdge'
  cursor: Scalars['String']['output']
  node: Resource
}

export type ResourceOnCreateInput = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  type: ResourceType
}

export type ResourceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more ResourceSort objects to sort Resources by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ResourceSort>>
}

export type ResourceOwnerAggregateInput = {
  AND?: InputMaybe<Array<ResourceOwnerAggregateInput>>
  NOT?: InputMaybe<ResourceOwnerAggregateInput>
  OR?: InputMaybe<Array<ResourceOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<ResourceOwnerNodeAggregationWhereInput>
}

export type ResourceOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ResourceOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<ResourceOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<ResourceOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type ResourcePropConfigAggregationSelection = {
  __typename?: 'ResourcePropConfigAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ResourcePropConfigNodeAggregateSelection>
}

export type ResourcePropConfigNodeAggregateSelection = {
  __typename?: 'ResourcePropConfigNodeAggregateSelection'
  data: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type ResourceRelationInput = {
  config?: InputMaybe<ResourceConfigCreateFieldInput>
  owner?: InputMaybe<WithOwnerOwnerCreateFieldInput>
}

/** Fields to sort Resources by. The order in which sorts are applied is not guaranteed when specifying many fields in one ResourceSort object. */
export type ResourceSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
  type?: InputMaybe<SortDirection>
}

export enum ResourceType {
  GraphQL = 'GraphQL',
  Rest = 'Rest',
}

export type ResourceUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type ResourceUpdateInput = {
  config?: InputMaybe<ResourceConfigUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<WithOwnerOwnerUpdateFieldInput>
  type?: InputMaybe<ResourceType>
}

export type ResourceUserOwnerAggregationSelection = {
  __typename?: 'ResourceUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<ResourceUserOwnerNodeAggregateSelection>
}

export type ResourceUserOwnerNodeAggregateSelection = {
  __typename?: 'ResourceUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type ResourceWhere = {
  AND?: InputMaybe<Array<ResourceWhere>>
  NOT?: InputMaybe<ResourceWhere>
  OR?: InputMaybe<Array<ResourceWhere>>
  config?: InputMaybe<PropWhere>
  configAggregate?: InputMaybe<ResourceConfigAggregateInput>
  configConnection?: InputMaybe<ResourceConfigConnectionWhere>
  configConnection_NOT?: InputMaybe<ResourceConfigConnectionWhere>
  config_NOT?: InputMaybe<PropWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<ResourceOwnerAggregateInput>
  ownerConnection?: InputMaybe<WithOwnerOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<WithOwnerOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  type?: InputMaybe<ResourceType>
  type_IN?: InputMaybe<Array<ResourceType>>
}

export type ResourcesConnection = {
  __typename?: 'ResourcesConnection'
  edges: Array<ResourceEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  ASC = 'ASC',
  /** Sort by field values in descending order. */
  DESC = 'DESC',
}

export type Store = {
  __typename?: 'Store'
  actions: Array<AnyAction>
  actionsConnection: StoreActionsConnection
  api: InterfaceType
  apiAggregate?: Maybe<StoreInterfaceTypeApiAggregationSelection>
  apiConnection: StoreApiConnection
  component?: Maybe<Component>
  componentAggregate?: Maybe<StoreComponentComponentAggregationSelection>
  componentConnection: StoreComponentConnection
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  page?: Maybe<Page>
  pageAggregate?: Maybe<StorePagePageAggregationSelection>
  pageConnection: StorePageConnection
}

export type StoreActionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<QueryOptions>
  where?: InputMaybe<AnyActionWhere>
}

export type StoreActionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<StoreActionsConnectionWhere>
}

export type StoreApiArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type StoreApiAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<InterfaceTypeWhere>
}

export type StoreApiConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<StoreApiConnectionSort>>
  where?: InputMaybe<StoreApiConnectionWhere>
}

export type StoreComponentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ComponentOptions>
  where?: InputMaybe<ComponentWhere>
}

export type StoreComponentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ComponentWhere>
}

export type StoreComponentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<StoreComponentConnectionSort>>
  where?: InputMaybe<StoreComponentConnectionWhere>
}

export type StorePageArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}

export type StorePageAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PageWhere>
}

export type StorePageConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<StorePageConnectionSort>>
  where?: InputMaybe<StorePageConnectionWhere>
}

export type StoreActionsApiActionConnectFieldInput = {
  connect?: InputMaybe<Array<ApiActionConnectInput>>
  where?: InputMaybe<ApiActionConnectWhere>
}

export type StoreActionsApiActionConnectOrCreateFieldInput = {
  onCreate: StoreActionsApiActionConnectOrCreateFieldInputOnCreate
  where: ApiActionConnectOrCreateWhere
}

export type StoreActionsApiActionConnectOrCreateFieldInputOnCreate = {
  node: ApiActionOnCreateInput
}

export type StoreActionsApiActionConnectionWhere = {
  AND?: InputMaybe<Array<StoreActionsApiActionConnectionWhere>>
  NOT?: InputMaybe<StoreActionsApiActionConnectionWhere>
  OR?: InputMaybe<Array<StoreActionsApiActionConnectionWhere>>
  node?: InputMaybe<ApiActionWhere>
}

export type StoreActionsApiActionCreateFieldInput = {
  node: ApiActionCreateInput
}

export type StoreActionsApiActionDeleteFieldInput = {
  delete?: InputMaybe<ApiActionDeleteInput>
  where?: InputMaybe<StoreActionsApiActionConnectionWhere>
}

export type StoreActionsApiActionDisconnectFieldInput = {
  disconnect?: InputMaybe<ApiActionDisconnectInput>
  where?: InputMaybe<StoreActionsApiActionConnectionWhere>
}

export type StoreActionsApiActionFieldInput = {
  connect?: InputMaybe<Array<StoreActionsApiActionConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<StoreActionsApiActionConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<StoreActionsApiActionCreateFieldInput>>
}

export type StoreActionsApiActionUpdateConnectionInput = {
  node?: InputMaybe<ApiActionUpdateInput>
}

export type StoreActionsApiActionUpdateFieldInput = {
  connect?: InputMaybe<Array<StoreActionsApiActionConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<StoreActionsApiActionConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<StoreActionsApiActionCreateFieldInput>>
  delete?: InputMaybe<Array<StoreActionsApiActionDeleteFieldInput>>
  disconnect?: InputMaybe<Array<StoreActionsApiActionDisconnectFieldInput>>
  update?: InputMaybe<StoreActionsApiActionUpdateConnectionInput>
  where?: InputMaybe<StoreActionsApiActionConnectionWhere>
}

export type StoreActionsCodeActionConnectFieldInput = {
  connect?: InputMaybe<Array<CodeActionConnectInput>>
  where?: InputMaybe<CodeActionConnectWhere>
}

export type StoreActionsCodeActionConnectOrCreateFieldInput = {
  onCreate: StoreActionsCodeActionConnectOrCreateFieldInputOnCreate
  where: CodeActionConnectOrCreateWhere
}

export type StoreActionsCodeActionConnectOrCreateFieldInputOnCreate = {
  node: CodeActionOnCreateInput
}

export type StoreActionsCodeActionConnectionWhere = {
  AND?: InputMaybe<Array<StoreActionsCodeActionConnectionWhere>>
  NOT?: InputMaybe<StoreActionsCodeActionConnectionWhere>
  OR?: InputMaybe<Array<StoreActionsCodeActionConnectionWhere>>
  node?: InputMaybe<CodeActionWhere>
}

export type StoreActionsCodeActionCreateFieldInput = {
  node: CodeActionCreateInput
}

export type StoreActionsCodeActionDeleteFieldInput = {
  delete?: InputMaybe<CodeActionDeleteInput>
  where?: InputMaybe<StoreActionsCodeActionConnectionWhere>
}

export type StoreActionsCodeActionDisconnectFieldInput = {
  disconnect?: InputMaybe<CodeActionDisconnectInput>
  where?: InputMaybe<StoreActionsCodeActionConnectionWhere>
}

export type StoreActionsCodeActionFieldInput = {
  connect?: InputMaybe<Array<StoreActionsCodeActionConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<StoreActionsCodeActionConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<StoreActionsCodeActionCreateFieldInput>>
}

export type StoreActionsCodeActionUpdateConnectionInput = {
  node?: InputMaybe<CodeActionUpdateInput>
}

export type StoreActionsCodeActionUpdateFieldInput = {
  connect?: InputMaybe<Array<StoreActionsCodeActionConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<StoreActionsCodeActionConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<StoreActionsCodeActionCreateFieldInput>>
  delete?: InputMaybe<Array<StoreActionsCodeActionDeleteFieldInput>>
  disconnect?: InputMaybe<Array<StoreActionsCodeActionDisconnectFieldInput>>
  update?: InputMaybe<StoreActionsCodeActionUpdateConnectionInput>
  where?: InputMaybe<StoreActionsCodeActionConnectionWhere>
}

export type StoreActionsConnectInput = {
  ApiAction?: InputMaybe<Array<StoreActionsApiActionConnectFieldInput>>
  CodeAction?: InputMaybe<Array<StoreActionsCodeActionConnectFieldInput>>
}

export type StoreActionsConnectOrCreateInput = {
  ApiAction?: InputMaybe<Array<StoreActionsApiActionConnectOrCreateFieldInput>>
  CodeAction?: InputMaybe<
    Array<StoreActionsCodeActionConnectOrCreateFieldInput>
  >
}

export type StoreActionsConnection = {
  __typename?: 'StoreActionsConnection'
  edges: Array<StoreActionsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type StoreActionsConnectionWhere = {
  ApiAction?: InputMaybe<StoreActionsApiActionConnectionWhere>
  CodeAction?: InputMaybe<StoreActionsCodeActionConnectionWhere>
}

export type StoreActionsCreateFieldInput = {
  ApiAction?: InputMaybe<Array<StoreActionsApiActionCreateFieldInput>>
  CodeAction?: InputMaybe<Array<StoreActionsCodeActionCreateFieldInput>>
}

export type StoreActionsCreateInput = {
  ApiAction?: InputMaybe<StoreActionsApiActionFieldInput>
  CodeAction?: InputMaybe<StoreActionsCodeActionFieldInput>
}

export type StoreActionsDeleteInput = {
  ApiAction?: InputMaybe<Array<StoreActionsApiActionDeleteFieldInput>>
  CodeAction?: InputMaybe<Array<StoreActionsCodeActionDeleteFieldInput>>
}

export type StoreActionsDisconnectInput = {
  ApiAction?: InputMaybe<Array<StoreActionsApiActionDisconnectFieldInput>>
  CodeAction?: InputMaybe<Array<StoreActionsCodeActionDisconnectFieldInput>>
}

export type StoreActionsRelationship = {
  __typename?: 'StoreActionsRelationship'
  cursor: Scalars['String']['output']
  node: AnyAction
}

export type StoreActionsUpdateInput = {
  ApiAction?: InputMaybe<Array<StoreActionsApiActionUpdateFieldInput>>
  CodeAction?: InputMaybe<Array<StoreActionsCodeActionUpdateFieldInput>>
}

export type StoreAggregateSelection = {
  __typename?: 'StoreAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type StoreApiAggregateInput = {
  AND?: InputMaybe<Array<StoreApiAggregateInput>>
  NOT?: InputMaybe<StoreApiAggregateInput>
  OR?: InputMaybe<Array<StoreApiAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<StoreApiNodeAggregationWhereInput>
}

export type StoreApiConnectFieldInput = {
  connect?: InputMaybe<InterfaceTypeConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<InterfaceTypeConnectWhere>
}

export type StoreApiConnectOrCreateFieldInput = {
  onCreate: StoreApiConnectOrCreateFieldInputOnCreate
  where: InterfaceTypeConnectOrCreateWhere
}

export type StoreApiConnectOrCreateFieldInputOnCreate = {
  node: InterfaceTypeOnCreateInput
}

export type StoreApiConnection = {
  __typename?: 'StoreApiConnection'
  edges: Array<StoreApiRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type StoreApiConnectionSort = {
  node?: InputMaybe<InterfaceTypeSort>
}

export type StoreApiConnectionWhere = {
  AND?: InputMaybe<Array<StoreApiConnectionWhere>>
  NOT?: InputMaybe<StoreApiConnectionWhere>
  OR?: InputMaybe<Array<StoreApiConnectionWhere>>
  node?: InputMaybe<InterfaceTypeWhere>
}

export type StoreApiCreateFieldInput = {
  node: InterfaceTypeCreateInput
}

export type StoreApiDeleteFieldInput = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<StoreApiConnectionWhere>
}

export type StoreApiDisconnectFieldInput = {
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  where?: InputMaybe<StoreApiConnectionWhere>
}

export type StoreApiFieldInput = {
  connect?: InputMaybe<StoreApiConnectFieldInput>
  connectOrCreate?: InputMaybe<StoreApiConnectOrCreateFieldInput>
  create?: InputMaybe<StoreApiCreateFieldInput>
}

export type StoreApiNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StoreApiNodeAggregationWhereInput>>
  NOT?: InputMaybe<StoreApiNodeAggregationWhereInput>
  OR?: InputMaybe<Array<StoreApiNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type StoreApiRelationship = {
  __typename?: 'StoreApiRelationship'
  cursor: Scalars['String']['output']
  node: InterfaceType
}

export type StoreApiUpdateConnectionInput = {
  node?: InputMaybe<InterfaceTypeUpdateInput>
}

export type StoreApiUpdateFieldInput = {
  connect?: InputMaybe<StoreApiConnectFieldInput>
  connectOrCreate?: InputMaybe<StoreApiConnectOrCreateFieldInput>
  create?: InputMaybe<StoreApiCreateFieldInput>
  delete?: InputMaybe<StoreApiDeleteFieldInput>
  disconnect?: InputMaybe<StoreApiDisconnectFieldInput>
  update?: InputMaybe<StoreApiUpdateConnectionInput>
  where?: InputMaybe<StoreApiConnectionWhere>
}

export type StoreComponentAggregateInput = {
  AND?: InputMaybe<Array<StoreComponentAggregateInput>>
  NOT?: InputMaybe<StoreComponentAggregateInput>
  OR?: InputMaybe<Array<StoreComponentAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<StoreComponentNodeAggregationWhereInput>
}

export type StoreComponentComponentAggregationSelection = {
  __typename?: 'StoreComponentComponentAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<StoreComponentComponentNodeAggregateSelection>
}

export type StoreComponentComponentNodeAggregateSelection = {
  __typename?: 'StoreComponentComponentNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  keyGenerator: StringAggregateSelectionNullable
  name: StringAggregateSelectionNonNullable
}

export type StoreComponentConnectFieldInput = {
  connect?: InputMaybe<ComponentConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ComponentConnectWhere>
}

export type StoreComponentConnectOrCreateFieldInput = {
  onCreate: StoreComponentConnectOrCreateFieldInputOnCreate
  where: ComponentConnectOrCreateWhere
}

export type StoreComponentConnectOrCreateFieldInputOnCreate = {
  node: ComponentOnCreateInput
}

export type StoreComponentConnection = {
  __typename?: 'StoreComponentConnection'
  edges: Array<StoreComponentRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type StoreComponentConnectionSort = {
  node?: InputMaybe<ComponentSort>
}

export type StoreComponentConnectionWhere = {
  AND?: InputMaybe<Array<StoreComponentConnectionWhere>>
  NOT?: InputMaybe<StoreComponentConnectionWhere>
  OR?: InputMaybe<Array<StoreComponentConnectionWhere>>
  node?: InputMaybe<ComponentWhere>
}

export type StoreComponentCreateFieldInput = {
  node: ComponentCreateInput
}

export type StoreComponentDeleteFieldInput = {
  delete?: InputMaybe<ComponentDeleteInput>
  where?: InputMaybe<StoreComponentConnectionWhere>
}

export type StoreComponentDisconnectFieldInput = {
  disconnect?: InputMaybe<ComponentDisconnectInput>
  where?: InputMaybe<StoreComponentConnectionWhere>
}

export type StoreComponentFieldInput = {
  connect?: InputMaybe<StoreComponentConnectFieldInput>
  connectOrCreate?: InputMaybe<StoreComponentConnectOrCreateFieldInput>
  create?: InputMaybe<StoreComponentCreateFieldInput>
}

export type StoreComponentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StoreComponentNodeAggregationWhereInput>>
  NOT?: InputMaybe<StoreComponentNodeAggregationWhereInput>
  OR?: InputMaybe<Array<StoreComponentNodeAggregationWhereInput>>
  keyGenerator_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type StoreComponentRelationship = {
  __typename?: 'StoreComponentRelationship'
  cursor: Scalars['String']['output']
  node: Component
}

export type StoreComponentUpdateConnectionInput = {
  node?: InputMaybe<ComponentUpdateInput>
}

export type StoreComponentUpdateFieldInput = {
  connect?: InputMaybe<StoreComponentConnectFieldInput>
  connectOrCreate?: InputMaybe<StoreComponentConnectOrCreateFieldInput>
  create?: InputMaybe<StoreComponentCreateFieldInput>
  delete?: InputMaybe<StoreComponentDeleteFieldInput>
  disconnect?: InputMaybe<StoreComponentDisconnectFieldInput>
  update?: InputMaybe<StoreComponentUpdateConnectionInput>
  where?: InputMaybe<StoreComponentConnectionWhere>
}

export type StoreConnectInput = {
  actions?: InputMaybe<StoreActionsConnectInput>
  api?: InputMaybe<StoreApiConnectFieldInput>
  component?: InputMaybe<StoreComponentConnectFieldInput>
  page?: InputMaybe<StorePageConnectFieldInput>
}

export type StoreConnectOrCreateInput = {
  actions?: InputMaybe<StoreActionsConnectOrCreateInput>
  api?: InputMaybe<StoreApiConnectOrCreateFieldInput>
  component?: InputMaybe<StoreComponentConnectOrCreateFieldInput>
  page?: InputMaybe<StorePageConnectOrCreateFieldInput>
}

export type StoreConnectOrCreateWhere = {
  node: StoreUniqueWhere
}

export type StoreConnectWhere = {
  node: StoreWhere
}

export type StoreCreateInput = {
  actions?: InputMaybe<StoreActionsCreateInput>
  api?: InputMaybe<StoreApiFieldInput>
  component?: InputMaybe<StoreComponentFieldInput>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  page?: InputMaybe<StorePageFieldInput>
}

export type StoreDeleteInput = {
  actions?: InputMaybe<StoreActionsDeleteInput>
  api?: InputMaybe<StoreApiDeleteFieldInput>
  component?: InputMaybe<StoreComponentDeleteFieldInput>
  page?: InputMaybe<StorePageDeleteFieldInput>
}

export type StoreDisconnectInput = {
  actions?: InputMaybe<StoreActionsDisconnectInput>
  api?: InputMaybe<StoreApiDisconnectFieldInput>
  component?: InputMaybe<StoreComponentDisconnectFieldInput>
  page?: InputMaybe<StorePageDisconnectFieldInput>
}

export type StoreEdge = {
  __typename?: 'StoreEdge'
  cursor: Scalars['String']['output']
  node: Store
}

export type StoreInterfaceTypeApiAggregationSelection = {
  __typename?: 'StoreInterfaceTypeApiAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<StoreInterfaceTypeApiNodeAggregateSelection>
}

export type StoreInterfaceTypeApiNodeAggregateSelection = {
  __typename?: 'StoreInterfaceTypeApiNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type StoreOnCreateInput = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
}

export type StoreOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more StoreSort objects to sort Stores by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StoreSort>>
}

export type StorePageAggregateInput = {
  AND?: InputMaybe<Array<StorePageAggregateInput>>
  NOT?: InputMaybe<StorePageAggregateInput>
  OR?: InputMaybe<Array<StorePageAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<StorePageNodeAggregationWhereInput>
}

export type StorePageConnectFieldInput = {
  connect?: InputMaybe<PageConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<PageConnectWhere>
}

export type StorePageConnectOrCreateFieldInput = {
  onCreate: StorePageConnectOrCreateFieldInputOnCreate
  where: PageConnectOrCreateWhere
}

export type StorePageConnectOrCreateFieldInputOnCreate = {
  node: PageOnCreateInput
}

export type StorePageConnection = {
  __typename?: 'StorePageConnection'
  edges: Array<StorePageRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type StorePageConnectionSort = {
  node?: InputMaybe<PageSort>
}

export type StorePageConnectionWhere = {
  AND?: InputMaybe<Array<StorePageConnectionWhere>>
  NOT?: InputMaybe<StorePageConnectionWhere>
  OR?: InputMaybe<Array<StorePageConnectionWhere>>
  node?: InputMaybe<PageWhere>
}

export type StorePageCreateFieldInput = {
  node: PageCreateInput
}

export type StorePageDeleteFieldInput = {
  delete?: InputMaybe<PageDeleteInput>
  where?: InputMaybe<StorePageConnectionWhere>
}

export type StorePageDisconnectFieldInput = {
  disconnect?: InputMaybe<PageDisconnectInput>
  where?: InputMaybe<StorePageConnectionWhere>
}

export type StorePageFieldInput = {
  connect?: InputMaybe<StorePageConnectFieldInput>
  connectOrCreate?: InputMaybe<StorePageConnectOrCreateFieldInput>
  create?: InputMaybe<StorePageCreateFieldInput>
}

export type StorePageNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StorePageNodeAggregationWhereInput>>
  NOT?: InputMaybe<StorePageNodeAggregationWhereInput>
  OR?: InputMaybe<Array<StorePageNodeAggregationWhereInput>>
  _compoundName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type StorePagePageAggregationSelection = {
  __typename?: 'StorePagePageAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<StorePagePageNodeAggregateSelection>
}

export type StorePagePageNodeAggregateSelection = {
  __typename?: 'StorePagePageNodeAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  url: StringAggregateSelectionNonNullable
}

export type StorePageRelationship = {
  __typename?: 'StorePageRelationship'
  cursor: Scalars['String']['output']
  node: Page
}

export type StorePageUpdateConnectionInput = {
  node?: InputMaybe<PageUpdateInput>
}

export type StorePageUpdateFieldInput = {
  connect?: InputMaybe<StorePageConnectFieldInput>
  connectOrCreate?: InputMaybe<StorePageConnectOrCreateFieldInput>
  create?: InputMaybe<StorePageCreateFieldInput>
  delete?: InputMaybe<StorePageDeleteFieldInput>
  disconnect?: InputMaybe<StorePageDisconnectFieldInput>
  update?: InputMaybe<StorePageUpdateConnectionInput>
  where?: InputMaybe<StorePageConnectionWhere>
}

export type StoreRelationInput = {
  actions?: InputMaybe<StoreActionsCreateFieldInput>
  api?: InputMaybe<StoreApiCreateFieldInput>
  component?: InputMaybe<StoreComponentCreateFieldInput>
  page?: InputMaybe<StorePageCreateFieldInput>
}

/** Fields to sort Stores by. The order in which sorts are applied is not guaranteed when specifying many fields in one StoreSort object. */
export type StoreSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type StoreUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type StoreUpdateInput = {
  actions?: InputMaybe<StoreActionsUpdateInput>
  api?: InputMaybe<StoreApiUpdateFieldInput>
  component?: InputMaybe<StoreComponentUpdateFieldInput>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<StorePageUpdateFieldInput>
}

export type StoreWhere = {
  AND?: InputMaybe<Array<StoreWhere>>
  NOT?: InputMaybe<StoreWhere>
  OR?: InputMaybe<Array<StoreWhere>>
  /** Return Stores where all of the related StoreActionsConnections match this filter */
  actionsConnection_ALL?: InputMaybe<StoreActionsConnectionWhere>
  /** Return Stores where none of the related StoreActionsConnections match this filter */
  actionsConnection_NONE?: InputMaybe<StoreActionsConnectionWhere>
  /** Return Stores where one of the related StoreActionsConnections match this filter */
  actionsConnection_SINGLE?: InputMaybe<StoreActionsConnectionWhere>
  /** Return Stores where some of the related StoreActionsConnections match this filter */
  actionsConnection_SOME?: InputMaybe<StoreActionsConnectionWhere>
  api?: InputMaybe<InterfaceTypeWhere>
  apiAggregate?: InputMaybe<StoreApiAggregateInput>
  apiConnection?: InputMaybe<StoreApiConnectionWhere>
  apiConnection_NOT?: InputMaybe<StoreApiConnectionWhere>
  api_NOT?: InputMaybe<InterfaceTypeWhere>
  component?: InputMaybe<ComponentWhere>
  componentAggregate?: InputMaybe<StoreComponentAggregateInput>
  componentConnection?: InputMaybe<StoreComponentConnectionWhere>
  componentConnection_NOT?: InputMaybe<StoreComponentConnectionWhere>
  component_NOT?: InputMaybe<ComponentWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<PageWhere>
  pageAggregate?: InputMaybe<StorePageAggregateInput>
  pageConnection?: InputMaybe<StorePageConnectionWhere>
  pageConnection_NOT?: InputMaybe<StorePageConnectionWhere>
  page_NOT?: InputMaybe<PageWhere>
}

export type StoresConnection = {
  __typename?: 'StoresConnection'
  edges: Array<StoreEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable'
  longest: Scalars['String']['output']
  shortest: Scalars['String']['output']
}

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable'
  longest?: Maybe<Scalars['String']['output']>
  shortest?: Maybe<Scalars['String']['output']>
}

export type Tag = {
  __typename?: 'Tag'
  atoms: Array<Atom>
  atomsAggregate?: Maybe<TagAtomAtomsAggregationSelection>
  atomsConnection: TagAtomsConnection
  children: Array<Tag>
  childrenAggregate?: Maybe<TagTagChildrenAggregationSelection>
  childrenConnection: TagChildrenConnection
  descendants: Array<Tag>
  id: Scalars['ID']['output']
  isRoot?: Maybe<Scalars['Boolean']['output']>
  name: Scalars['String']['output']
  owner: User
  ownerAggregate?: Maybe<TagUserOwnerAggregationSelection>
  ownerConnection: TagOwnerConnection
  parent?: Maybe<Tag>
  parentAggregate?: Maybe<TagTagParentAggregationSelection>
  parentConnection: TagParentConnection
}

export type TagAtomsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

export type TagAtomsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AtomWhere>
}

export type TagAtomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<TagAtomsConnectionSort>>
  where?: InputMaybe<TagAtomsConnectionWhere>
}

export type TagChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type TagChildrenAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<TagWhere>
}

export type TagChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<TagChildrenConnectionSort>>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

export type TagOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

export type TagOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<TagOwnerConnectionSort>>
  where?: InputMaybe<TagOwnerConnectionWhere>
}

export type TagParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type TagParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<TagWhere>
}

export type TagParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<TagParentConnectionSort>>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagAggregateSelection = {
  __typename?: 'TagAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type TagAtomAtomsAggregationSelection = {
  __typename?: 'TagAtomAtomsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<TagAtomAtomsNodeAggregateSelection>
}

export type TagAtomAtomsNodeAggregateSelection = {
  __typename?: 'TagAtomAtomsNodeAggregateSelection'
  externalCssSource: StringAggregateSelectionNullable
  externalJsSource: StringAggregateSelectionNullable
  externalSourceType: StringAggregateSelectionNullable
  icon: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type TagAtomsAggregateInput = {
  AND?: InputMaybe<Array<TagAtomsAggregateInput>>
  NOT?: InputMaybe<TagAtomsAggregateInput>
  OR?: InputMaybe<Array<TagAtomsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<TagAtomsNodeAggregationWhereInput>
}

export type TagAtomsConnectFieldInput = {
  connect?: InputMaybe<Array<AtomConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AtomConnectWhere>
}

export type TagAtomsConnectOrCreateFieldInput = {
  onCreate: TagAtomsConnectOrCreateFieldInputOnCreate
  where: AtomConnectOrCreateWhere
}

export type TagAtomsConnectOrCreateFieldInputOnCreate = {
  node: AtomOnCreateInput
}

export type TagAtomsConnection = {
  __typename?: 'TagAtomsConnection'
  edges: Array<TagAtomsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type TagAtomsConnectionSort = {
  node?: InputMaybe<AtomSort>
}

export type TagAtomsConnectionWhere = {
  AND?: InputMaybe<Array<TagAtomsConnectionWhere>>
  NOT?: InputMaybe<TagAtomsConnectionWhere>
  OR?: InputMaybe<Array<TagAtomsConnectionWhere>>
  node?: InputMaybe<AtomWhere>
}

export type TagAtomsCreateFieldInput = {
  node: AtomCreateInput
}

export type TagAtomsDeleteFieldInput = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<TagAtomsConnectionWhere>
}

export type TagAtomsDisconnectFieldInput = {
  disconnect?: InputMaybe<AtomDisconnectInput>
  where?: InputMaybe<TagAtomsConnectionWhere>
}

export type TagAtomsFieldInput = {
  connect?: InputMaybe<Array<TagAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<TagAtomsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<TagAtomsCreateFieldInput>>
}

export type TagAtomsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagAtomsNodeAggregationWhereInput>>
  NOT?: InputMaybe<TagAtomsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<TagAtomsNodeAggregationWhereInput>>
  externalCssSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  externalSourceType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type TagAtomsRelationship = {
  __typename?: 'TagAtomsRelationship'
  cursor: Scalars['String']['output']
  node: Atom
}

export type TagAtomsUpdateConnectionInput = {
  node?: InputMaybe<AtomUpdateInput>
}

export type TagAtomsUpdateFieldInput = {
  connect?: InputMaybe<Array<TagAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<TagAtomsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<TagAtomsCreateFieldInput>>
  delete?: InputMaybe<Array<TagAtomsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<TagAtomsDisconnectFieldInput>>
  update?: InputMaybe<TagAtomsUpdateConnectionInput>
  where?: InputMaybe<TagAtomsConnectionWhere>
}

export type TagChildrenAggregateInput = {
  AND?: InputMaybe<Array<TagChildrenAggregateInput>>
  NOT?: InputMaybe<TagChildrenAggregateInput>
  OR?: InputMaybe<Array<TagChildrenAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<TagChildrenNodeAggregationWhereInput>
}

export type TagChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<TagConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<TagConnectWhere>
}

export type TagChildrenConnectOrCreateFieldInput = {
  onCreate: TagChildrenConnectOrCreateFieldInputOnCreate
  where: TagConnectOrCreateWhere
}

export type TagChildrenConnectOrCreateFieldInputOnCreate = {
  node: TagOnCreateInput
}

export type TagChildrenConnection = {
  __typename?: 'TagChildrenConnection'
  edges: Array<TagChildrenRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type TagChildrenConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type TagChildrenConnectionWhere = {
  AND?: InputMaybe<Array<TagChildrenConnectionWhere>>
  NOT?: InputMaybe<TagChildrenConnectionWhere>
  OR?: InputMaybe<Array<TagChildrenConnectionWhere>>
  node?: InputMaybe<TagWhere>
}

export type TagChildrenCreateFieldInput = {
  node: TagCreateInput
}

export type TagChildrenDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagChildrenFieldInput = {
  connect?: InputMaybe<Array<TagChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<TagChildrenConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<TagChildrenCreateFieldInput>>
}

export type TagChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagChildrenNodeAggregationWhereInput>>
  NOT?: InputMaybe<TagChildrenNodeAggregationWhereInput>
  OR?: InputMaybe<Array<TagChildrenNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type TagChildrenRelationship = {
  __typename?: 'TagChildrenRelationship'
  cursor: Scalars['String']['output']
  node: Tag
}

export type TagChildrenUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type TagChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<TagChildrenConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<TagChildrenConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<TagChildrenCreateFieldInput>>
  delete?: InputMaybe<Array<TagChildrenDeleteFieldInput>>
  disconnect?: InputMaybe<Array<TagChildrenDisconnectFieldInput>>
  update?: InputMaybe<TagChildrenUpdateConnectionInput>
  where?: InputMaybe<TagChildrenConnectionWhere>
}

export type TagConnectInput = {
  atoms?: InputMaybe<Array<TagAtomsConnectFieldInput>>
  children?: InputMaybe<Array<TagChildrenConnectFieldInput>>
  owner?: InputMaybe<TagOwnerConnectFieldInput>
  parent?: InputMaybe<TagParentConnectFieldInput>
}

export type TagConnectOrCreateInput = {
  atoms?: InputMaybe<Array<TagAtomsConnectOrCreateFieldInput>>
  children?: InputMaybe<Array<TagChildrenConnectOrCreateFieldInput>>
  owner?: InputMaybe<TagOwnerConnectOrCreateFieldInput>
  parent?: InputMaybe<TagParentConnectOrCreateFieldInput>
}

export type TagConnectOrCreateWhere = {
  node: TagUniqueWhere
}

export type TagConnectWhere = {
  node: TagWhere
}

export type TagCreateInput = {
  atoms?: InputMaybe<TagAtomsFieldInput>
  children?: InputMaybe<TagChildrenFieldInput>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  owner?: InputMaybe<TagOwnerFieldInput>
  parent?: InputMaybe<TagParentFieldInput>
}

export type TagDeleteInput = {
  atoms?: InputMaybe<Array<TagAtomsDeleteFieldInput>>
  children?: InputMaybe<Array<TagChildrenDeleteFieldInput>>
  owner?: InputMaybe<TagOwnerDeleteFieldInput>
  parent?: InputMaybe<TagParentDeleteFieldInput>
}

export type TagDisconnectInput = {
  atoms?: InputMaybe<Array<TagAtomsDisconnectFieldInput>>
  children?: InputMaybe<Array<TagChildrenDisconnectFieldInput>>
  owner?: InputMaybe<TagOwnerDisconnectFieldInput>
  parent?: InputMaybe<TagParentDisconnectFieldInput>
}

export type TagEdge = {
  __typename?: 'TagEdge'
  cursor: Scalars['String']['output']
  node: Tag
}

export type TagOnCreateInput = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
}

export type TagOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more TagSort objects to sort Tags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TagSort>>
}

export type TagOwnerAggregateInput = {
  AND?: InputMaybe<Array<TagOwnerAggregateInput>>
  NOT?: InputMaybe<TagOwnerAggregateInput>
  OR?: InputMaybe<Array<TagOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<TagOwnerNodeAggregationWhereInput>
}

export type TagOwnerConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<UserConnectWhere>
}

export type TagOwnerConnectOrCreateFieldInput = {
  onCreate: TagOwnerConnectOrCreateFieldInputOnCreate
  where: UserConnectOrCreateWhere
}

export type TagOwnerConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput
}

export type TagOwnerConnection = {
  __typename?: 'TagOwnerConnection'
  edges: Array<TagOwnerRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type TagOwnerConnectionSort = {
  node?: InputMaybe<UserSort>
}

export type TagOwnerConnectionWhere = {
  AND?: InputMaybe<Array<TagOwnerConnectionWhere>>
  NOT?: InputMaybe<TagOwnerConnectionWhere>
  OR?: InputMaybe<Array<TagOwnerConnectionWhere>>
  node?: InputMaybe<UserWhere>
}

export type TagOwnerCreateFieldInput = {
  node: UserCreateInput
}

export type TagOwnerDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>
  where?: InputMaybe<TagOwnerConnectionWhere>
}

export type TagOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>
  where?: InputMaybe<TagOwnerConnectionWhere>
}

export type TagOwnerFieldInput = {
  connect?: InputMaybe<TagOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<TagOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<TagOwnerCreateFieldInput>
}

export type TagOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<TagOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<TagOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type TagOwnerRelationship = {
  __typename?: 'TagOwnerRelationship'
  cursor: Scalars['String']['output']
  node: User
}

export type TagOwnerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>
}

export type TagOwnerUpdateFieldInput = {
  connect?: InputMaybe<TagOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<TagOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<TagOwnerCreateFieldInput>
  delete?: InputMaybe<TagOwnerDeleteFieldInput>
  disconnect?: InputMaybe<TagOwnerDisconnectFieldInput>
  update?: InputMaybe<TagOwnerUpdateConnectionInput>
  where?: InputMaybe<TagOwnerConnectionWhere>
}

export type TagParentAggregateInput = {
  AND?: InputMaybe<Array<TagParentAggregateInput>>
  NOT?: InputMaybe<TagParentAggregateInput>
  OR?: InputMaybe<Array<TagParentAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<TagParentNodeAggregationWhereInput>
}

export type TagParentConnectFieldInput = {
  connect?: InputMaybe<TagConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<TagConnectWhere>
}

export type TagParentConnectOrCreateFieldInput = {
  onCreate: TagParentConnectOrCreateFieldInputOnCreate
  where: TagConnectOrCreateWhere
}

export type TagParentConnectOrCreateFieldInputOnCreate = {
  node: TagOnCreateInput
}

export type TagParentConnection = {
  __typename?: 'TagParentConnection'
  edges: Array<TagParentRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type TagParentConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type TagParentConnectionWhere = {
  AND?: InputMaybe<Array<TagParentConnectionWhere>>
  NOT?: InputMaybe<TagParentConnectionWhere>
  OR?: InputMaybe<Array<TagParentConnectionWhere>>
  node?: InputMaybe<TagWhere>
}

export type TagParentCreateFieldInput = {
  node: TagCreateInput
}

export type TagParentDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagParentDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagParentFieldInput = {
  connect?: InputMaybe<TagParentConnectFieldInput>
  connectOrCreate?: InputMaybe<TagParentConnectOrCreateFieldInput>
  create?: InputMaybe<TagParentCreateFieldInput>
}

export type TagParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagParentNodeAggregationWhereInput>>
  NOT?: InputMaybe<TagParentNodeAggregationWhereInput>
  OR?: InputMaybe<Array<TagParentNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type TagParentRelationship = {
  __typename?: 'TagParentRelationship'
  cursor: Scalars['String']['output']
  node: Tag
}

export type TagParentUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type TagParentUpdateFieldInput = {
  connect?: InputMaybe<TagParentConnectFieldInput>
  connectOrCreate?: InputMaybe<TagParentConnectOrCreateFieldInput>
  create?: InputMaybe<TagParentCreateFieldInput>
  delete?: InputMaybe<TagParentDeleteFieldInput>
  disconnect?: InputMaybe<TagParentDisconnectFieldInput>
  update?: InputMaybe<TagParentUpdateConnectionInput>
  where?: InputMaybe<TagParentConnectionWhere>
}

export type TagRelationInput = {
  atoms?: InputMaybe<Array<TagAtomsCreateFieldInput>>
  children?: InputMaybe<Array<TagChildrenCreateFieldInput>>
  owner?: InputMaybe<TagOwnerCreateFieldInput>
  parent?: InputMaybe<TagParentCreateFieldInput>
}

/** Fields to sort Tags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagSort object. */
export type TagSort = {
  id?: InputMaybe<SortDirection>
  isRoot?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type TagTagChildrenAggregationSelection = {
  __typename?: 'TagTagChildrenAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<TagTagChildrenNodeAggregateSelection>
}

export type TagTagChildrenNodeAggregateSelection = {
  __typename?: 'TagTagChildrenNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type TagTagParentAggregationSelection = {
  __typename?: 'TagTagParentAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<TagTagParentNodeAggregateSelection>
}

export type TagTagParentNodeAggregateSelection = {
  __typename?: 'TagTagParentNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type TagUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type TagUpdateInput = {
  atoms?: InputMaybe<Array<TagAtomsUpdateFieldInput>>
  children?: InputMaybe<Array<TagChildrenUpdateFieldInput>>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<TagOwnerUpdateFieldInput>
  parent?: InputMaybe<TagParentUpdateFieldInput>
}

export type TagUserOwnerAggregationSelection = {
  __typename?: 'TagUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<TagUserOwnerNodeAggregateSelection>
}

export type TagUserOwnerNodeAggregateSelection = {
  __typename?: 'TagUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type TagWhere = {
  AND?: InputMaybe<Array<TagWhere>>
  NOT?: InputMaybe<TagWhere>
  OR?: InputMaybe<Array<TagWhere>>
  atomsAggregate?: InputMaybe<TagAtomsAggregateInput>
  /** Return Tags where all of the related TagAtomsConnections match this filter */
  atomsConnection_ALL?: InputMaybe<TagAtomsConnectionWhere>
  /** Return Tags where none of the related TagAtomsConnections match this filter */
  atomsConnection_NONE?: InputMaybe<TagAtomsConnectionWhere>
  /** Return Tags where one of the related TagAtomsConnections match this filter */
  atomsConnection_SINGLE?: InputMaybe<TagAtomsConnectionWhere>
  /** Return Tags where some of the related TagAtomsConnections match this filter */
  atomsConnection_SOME?: InputMaybe<TagAtomsConnectionWhere>
  /** Return Tags where all of the related Atoms match this filter */
  atoms_ALL?: InputMaybe<AtomWhere>
  /** Return Tags where none of the related Atoms match this filter */
  atoms_NONE?: InputMaybe<AtomWhere>
  /** Return Tags where one of the related Atoms match this filter */
  atoms_SINGLE?: InputMaybe<AtomWhere>
  /** Return Tags where some of the related Atoms match this filter */
  atoms_SOME?: InputMaybe<AtomWhere>
  childrenAggregate?: InputMaybe<TagChildrenAggregateInput>
  /** Return Tags where all of the related TagChildrenConnections match this filter */
  childrenConnection_ALL?: InputMaybe<TagChildrenConnectionWhere>
  /** Return Tags where none of the related TagChildrenConnections match this filter */
  childrenConnection_NONE?: InputMaybe<TagChildrenConnectionWhere>
  /** Return Tags where one of the related TagChildrenConnections match this filter */
  childrenConnection_SINGLE?: InputMaybe<TagChildrenConnectionWhere>
  /** Return Tags where some of the related TagChildrenConnections match this filter */
  childrenConnection_SOME?: InputMaybe<TagChildrenConnectionWhere>
  /** Return Tags where all of the related Tags match this filter */
  children_ALL?: InputMaybe<TagWhere>
  /** Return Tags where none of the related Tags match this filter */
  children_NONE?: InputMaybe<TagWhere>
  /** Return Tags where one of the related Tags match this filter */
  children_SINGLE?: InputMaybe<TagWhere>
  /** Return Tags where some of the related Tags match this filter */
  children_SOME?: InputMaybe<TagWhere>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<TagOwnerAggregateInput>
  ownerConnection?: InputMaybe<TagOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<TagOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  parent?: InputMaybe<TagWhere>
  parentAggregate?: InputMaybe<TagParentAggregateInput>
  parentConnection?: InputMaybe<TagParentConnectionWhere>
  parentConnection_NOT?: InputMaybe<TagParentConnectionWhere>
  parent_NOT?: InputMaybe<TagWhere>
}

export type TagsConnection = {
  __typename?: 'TagsConnection'
  edges: Array<TagEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export enum TypeKind {
  ActionType = 'ActionType',
  AppType = 'AppType',
  ArrayType = 'ArrayType',
  CodeMirrorType = 'CodeMirrorType',
  ElementType = 'ElementType',
  EnumType = 'EnumType',
  InterfaceType = 'InterfaceType',
  LambdaType = 'LambdaType',
  PageType = 'PageType',
  PrimitiveType = 'PrimitiveType',
  ReactNodeType = 'ReactNodeType',
  RenderPropType = 'RenderPropType',
  UnionType = 'UnionType',
}

export type TypeReference = {
  __typename?: 'TypeReference'
  /** The type of resource - Atom, InterfaceType, etc. */
  label: Scalars['String']['output']
  /** The name of the resource referencing the type */
  name: Scalars['String']['output']
}

export type TypeReferenceAggregateSelection = {
  __typename?: 'TypeReferenceAggregateSelection'
  count: Scalars['Int']['output']
  label: StringAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type TypeReferenceCreateInput = {
  label: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type TypeReferenceEdge = {
  __typename?: 'TypeReferenceEdge'
  cursor: Scalars['String']['output']
  node: TypeReference
}

export type TypeReferenceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more TypeReferenceSort objects to sort TypeReferences by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeReferenceSort>>
}

/** Fields to sort TypeReferences by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeReferenceSort object. */
export type TypeReferenceSort = {
  label?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type TypeReferenceUpdateInput = {
  label?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type TypeReferenceWhere = {
  AND?: InputMaybe<Array<TypeReferenceWhere>>
  NOT?: InputMaybe<TypeReferenceWhere>
  OR?: InputMaybe<Array<TypeReferenceWhere>>
  label?: InputMaybe<Scalars['String']['input']>
  label_CONTAINS?: InputMaybe<Scalars['String']['input']>
  label_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  label_IN?: InputMaybe<Array<Scalars['String']['input']>>
  label_MATCHES?: InputMaybe<Scalars['String']['input']>
  label_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
}

export type TypeReferencesConnection = {
  __typename?: 'TypeReferencesConnection'
  edges: Array<TypeReferenceEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

/** Allows picking one of a set of types */
export type UnionType = IBaseType &
  WithDescendants & {
    __typename?: 'UnionType'
    descendantTypesIds: Array<Scalars['ID']['output']>
    id: Scalars['ID']['output']
    kind: TypeKind
    name: Scalars['String']['output']
    owner: User
    ownerAggregate?: Maybe<UnionTypeUserOwnerAggregationSelection>
    ownerConnection: IBaseTypeOwnerConnection
    typesOfUnionType: Array<AnyType>
    typesOfUnionTypeConnection: UnionTypeTypesOfUnionTypeConnection
  }

/** Allows picking one of a set of types */
export type UnionTypeOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<UserOptions>
  where?: InputMaybe<UserWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<UserWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<IBaseTypeOwnerConnectionSort>>
  where?: InputMaybe<IBaseTypeOwnerConnectionWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeTypesOfUnionTypeArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<QueryOptions>
  where?: InputMaybe<AnyTypeWhere>
}

/** Allows picking one of a set of types */
export type UnionTypeTypesOfUnionTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
}

export type UnionTypeAggregateSelection = {
  __typename?: 'UnionTypeAggregateSelection'
  count: Scalars['Int']['output']
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type UnionTypeConnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeConnectInput>
}

export type UnionTypeConnectOrCreateInput = {
  owner?: InputMaybe<IBaseTypeOwnerConnectOrCreateFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeConnectOrCreateInput>
}

export type UnionTypeConnectOrCreateWhere = {
  node: UnionTypeUniqueWhere
}

export type UnionTypeConnectWhere = {
  node: UnionTypeWhere
}

export type UnionTypeCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
  owner?: InputMaybe<IBaseTypeOwnerFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeCreateInput>
}

export type UnionTypeDeleteInput = {
  owner?: InputMaybe<IBaseTypeOwnerDeleteFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeDeleteInput>
}

export type UnionTypeDisconnectInput = {
  owner?: InputMaybe<IBaseTypeOwnerDisconnectFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeDisconnectInput>
}

export type UnionTypeEdge = {
  __typename?: 'UnionTypeEdge'
  cursor: Scalars['String']['output']
  node: UnionType
}

export type UnionTypeOnCreateInput = {
  id: Scalars['ID']['input']
  kind?: TypeKind
  name: Scalars['String']['input']
}

export type UnionTypeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more UnionTypeSort objects to sort UnionTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UnionTypeSort>>
}

export type UnionTypeOwnerAggregateInput = {
  AND?: InputMaybe<Array<UnionTypeOwnerAggregateInput>>
  NOT?: InputMaybe<UnionTypeOwnerAggregateInput>
  OR?: InputMaybe<Array<UnionTypeOwnerAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<UnionTypeOwnerNodeAggregationWhereInput>
}

export type UnionTypeOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UnionTypeOwnerNodeAggregationWhereInput>>
  NOT?: InputMaybe<UnionTypeOwnerNodeAggregationWhereInput>
  OR?: InputMaybe<Array<UnionTypeOwnerNodeAggregationWhereInput>>
  auth0Id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  auth0Id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  auth0Id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  auth0Id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type UnionTypeRelationInput = {
  owner?: InputMaybe<IBaseTypeOwnerCreateFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeCreateFieldInput>
}

/** Fields to sort UnionTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one UnionTypeSort object. */
export type UnionTypeSort = {
  id?: InputMaybe<SortDirection>
  kind?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type UnionTypeTypesOfUnionTypeActionTypeConnectFieldInput = {
  connect?: InputMaybe<Array<ActionTypeConnectInput>>
  where?: InputMaybe<ActionTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeActionTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeActionTypeConnectOrCreateFieldInputOnCreate
  where: ActionTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeActionTypeConnectOrCreateFieldInputOnCreate =
  {
    node: ActionTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeActionTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeActionTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeActionTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeActionTypeConnectionWhere>>
  node?: InputMaybe<ActionTypeWhere>
}

export type UnionTypeTypesOfUnionTypeActionTypeCreateFieldInput = {
  node: ActionTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeActionTypeDeleteFieldInput = {
  delete?: InputMaybe<ActionTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeActionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeActionTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<ActionTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeActionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeActionTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeActionTypeUpdateConnectionInput = {
  node?: InputMaybe<ActionTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeActionTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeActionTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeActionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeAppTypeConnectFieldInput = {
  connect?: InputMaybe<Array<AppTypeConnectInput>>
  where?: InputMaybe<AppTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeAppTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeAppTypeConnectOrCreateFieldInputOnCreate
  where: AppTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeAppTypeConnectOrCreateFieldInputOnCreate =
  {
    node: AppTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeAppTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeAppTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeConnectionWhere>>
  node?: InputMaybe<AppTypeWhere>
}

export type UnionTypeTypesOfUnionTypeAppTypeCreateFieldInput = {
  node: AppTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeAppTypeDeleteFieldInput = {
  delete?: InputMaybe<AppTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeAppTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeAppTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<AppTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeAppTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeAppTypeFieldInput = {
  connect?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeAppTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeCreateFieldInput>>
}

export type UnionTypeTypesOfUnionTypeAppTypeUpdateConnectionInput = {
  node?: InputMaybe<AppTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeAppTypeUpdateFieldInput = {
  connect?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeConnectFieldInput>>
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeAppTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeCreateFieldInput>>
  delete?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeDeleteFieldInput>>
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeAppTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeAppTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeAppTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeArrayTypeConnectFieldInput = {
  connect?: InputMaybe<Array<ArrayTypeConnectInput>>
  where?: InputMaybe<ArrayTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeArrayTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeArrayTypeConnectOrCreateFieldInputOnCreate
  where: ArrayTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeArrayTypeConnectOrCreateFieldInputOnCreate =
  {
    node: ArrayTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere>>
  node?: InputMaybe<ArrayTypeWhere>
}

export type UnionTypeTypesOfUnionTypeArrayTypeCreateFieldInput = {
  node: ArrayTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeArrayTypeDeleteFieldInput = {
  delete?: InputMaybe<ArrayTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeArrayTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrayTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeArrayTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeArrayTypeCreateFieldInput>>
}

export type UnionTypeTypesOfUnionTypeArrayTypeUpdateConnectionInput = {
  node?: InputMaybe<ArrayTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeArrayTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeArrayTypeCreateFieldInput>>
  delete?: InputMaybe<Array<UnionTypeTypesOfUnionTypeArrayTypeDeleteFieldInput>>
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeArrayTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectFieldInput = {
  connect?: InputMaybe<Array<CodeMirrorTypeConnectInput>>
  where?: InputMaybe<CodeMirrorTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectOrCreateFieldInputOnCreate
  where: CodeMirrorTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectOrCreateFieldInputOnCreate =
  {
    node: CodeMirrorTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere = {
  AND?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere>
  >
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere>>
  node?: InputMaybe<CodeMirrorTypeWhere>
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeCreateFieldInput = {
  node: CodeMirrorTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeDeleteFieldInput = {
  delete?: InputMaybe<CodeMirrorTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<CodeMirrorTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeUpdateConnectionInput = {
  node?: InputMaybe<CodeMirrorTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeCodeMirrorTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeCodeMirrorTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeConnectInput = {
  ActionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeConnectFieldInput>
  >
  AppType?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeConnectFieldInput>>
  ArrayType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeConnectFieldInput>
  >
  CodeMirrorType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectFieldInput>
  >
  ElementType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeConnectFieldInput>
  >
  EnumType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeConnectFieldInput>
  >
  InterfaceType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectFieldInput>
  >
  LambdaType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectFieldInput>
  >
  PageType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeConnectFieldInput>
  >
  PrimitiveType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectFieldInput>
  >
  ReactNodeType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectFieldInput>
  >
  RenderPropType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectFieldInput>
  >
  UnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeConnectFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeConnectOrCreateInput = {
  ActionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeConnectOrCreateFieldInput>
  >
  AppType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeAppTypeConnectOrCreateFieldInput>
  >
  ArrayType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeConnectOrCreateFieldInput>
  >
  CodeMirrorType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectOrCreateFieldInput>
  >
  ElementType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeConnectOrCreateFieldInput>
  >
  EnumType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeConnectOrCreateFieldInput>
  >
  InterfaceType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectOrCreateFieldInput>
  >
  LambdaType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectOrCreateFieldInput>
  >
  PageType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeConnectOrCreateFieldInput>
  >
  PrimitiveType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectOrCreateFieldInput>
  >
  ReactNodeType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectOrCreateFieldInput>
  >
  RenderPropType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectOrCreateFieldInput>
  >
  UnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeConnectOrCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeConnection = {
  __typename?: 'UnionTypeTypesOfUnionTypeConnection'
  edges: Array<UnionTypeTypesOfUnionTypeRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UnionTypeTypesOfUnionTypeConnectionWhere = {
  ActionType?: InputMaybe<UnionTypeTypesOfUnionTypeActionTypeConnectionWhere>
  AppType?: InputMaybe<UnionTypeTypesOfUnionTypeAppTypeConnectionWhere>
  ArrayType?: InputMaybe<UnionTypeTypesOfUnionTypeArrayTypeConnectionWhere>
  CodeMirrorType?: InputMaybe<UnionTypeTypesOfUnionTypeCodeMirrorTypeConnectionWhere>
  ElementType?: InputMaybe<UnionTypeTypesOfUnionTypeElementTypeConnectionWhere>
  EnumType?: InputMaybe<UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere>
  InterfaceType?: InputMaybe<UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere>
  LambdaType?: InputMaybe<UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere>
  PageType?: InputMaybe<UnionTypeTypesOfUnionTypePageTypeConnectionWhere>
  PrimitiveType?: InputMaybe<UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere>
  ReactNodeType?: InputMaybe<UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere>
  RenderPropType?: InputMaybe<UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere>
  UnionType?: InputMaybe<UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeCreateFieldInput = {
  ActionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeCreateFieldInput>
  >
  AppType?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeCreateFieldInput>>
  ArrayType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeCreateFieldInput>
  >
  CodeMirrorType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeCreateFieldInput>
  >
  ElementType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeCreateFieldInput>
  >
  EnumType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeCreateFieldInput>
  >
  InterfaceType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeCreateFieldInput>
  >
  LambdaType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeCreateFieldInput>
  >
  PageType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeCreateFieldInput>
  >
  PrimitiveType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeCreateFieldInput>
  >
  ReactNodeType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeCreateFieldInput>
  >
  RenderPropType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeCreateFieldInput>
  >
  UnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeCreateInput = {
  ActionType?: InputMaybe<UnionTypeTypesOfUnionTypeActionTypeFieldInput>
  AppType?: InputMaybe<UnionTypeTypesOfUnionTypeAppTypeFieldInput>
  ArrayType?: InputMaybe<UnionTypeTypesOfUnionTypeArrayTypeFieldInput>
  CodeMirrorType?: InputMaybe<UnionTypeTypesOfUnionTypeCodeMirrorTypeFieldInput>
  ElementType?: InputMaybe<UnionTypeTypesOfUnionTypeElementTypeFieldInput>
  EnumType?: InputMaybe<UnionTypeTypesOfUnionTypeEnumTypeFieldInput>
  InterfaceType?: InputMaybe<UnionTypeTypesOfUnionTypeInterfaceTypeFieldInput>
  LambdaType?: InputMaybe<UnionTypeTypesOfUnionTypeLambdaTypeFieldInput>
  PageType?: InputMaybe<UnionTypeTypesOfUnionTypePageTypeFieldInput>
  PrimitiveType?: InputMaybe<UnionTypeTypesOfUnionTypePrimitiveTypeFieldInput>
  ReactNodeType?: InputMaybe<UnionTypeTypesOfUnionTypeReactNodeTypeFieldInput>
  RenderPropType?: InputMaybe<UnionTypeTypesOfUnionTypeRenderPropTypeFieldInput>
  UnionType?: InputMaybe<UnionTypeTypesOfUnionTypeUnionTypeFieldInput>
}

export type UnionTypeTypesOfUnionTypeDeleteInput = {
  ActionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeDeleteFieldInput>
  >
  AppType?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeDeleteFieldInput>>
  ArrayType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeDeleteFieldInput>
  >
  CodeMirrorType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeDeleteFieldInput>
  >
  ElementType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeDeleteFieldInput>
  >
  EnumType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeDeleteFieldInput>
  >
  InterfaceType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeDeleteFieldInput>
  >
  LambdaType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeDeleteFieldInput>
  >
  PageType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeDeleteFieldInput>
  >
  PrimitiveType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeDeleteFieldInput>
  >
  ReactNodeType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeDeleteFieldInput>
  >
  RenderPropType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeDeleteFieldInput>
  >
  UnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeDeleteFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeDisconnectInput = {
  ActionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeDisconnectFieldInput>
  >
  AppType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeAppTypeDisconnectFieldInput>
  >
  ArrayType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeDisconnectFieldInput>
  >
  CodeMirrorType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeDisconnectFieldInput>
  >
  ElementType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeDisconnectFieldInput>
  >
  EnumType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeDisconnectFieldInput>
  >
  InterfaceType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeDisconnectFieldInput>
  >
  LambdaType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeDisconnectFieldInput>
  >
  PageType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeDisconnectFieldInput>
  >
  PrimitiveType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeDisconnectFieldInput>
  >
  ReactNodeType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeDisconnectFieldInput>
  >
  RenderPropType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeDisconnectFieldInput>
  >
  UnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeDisconnectFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeElementTypeConnectFieldInput = {
  connect?: InputMaybe<Array<ElementTypeConnectInput>>
  where?: InputMaybe<ElementTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeElementTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeElementTypeConnectOrCreateFieldInputOnCreate
  where: ElementTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeElementTypeConnectOrCreateFieldInputOnCreate =
  {
    node: ElementTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeElementTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeElementTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeElementTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeElementTypeConnectionWhere>>
  node?: InputMaybe<ElementTypeWhere>
}

export type UnionTypeTypesOfUnionTypeElementTypeCreateFieldInput = {
  node: ElementTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeElementTypeDeleteFieldInput = {
  delete?: InputMaybe<ElementTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeElementTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeElementTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeElementTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeElementTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeElementTypeUpdateConnectionInput = {
  node?: InputMaybe<ElementTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeElementTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeElementTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeElementTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeEnumTypeConnectFieldInput = {
  connect?: InputMaybe<Array<EnumTypeConnectInput>>
  where?: InputMaybe<EnumTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeEnumTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeEnumTypeConnectOrCreateFieldInputOnCreate
  where: EnumTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeEnumTypeConnectOrCreateFieldInputOnCreate =
  {
    node: EnumTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere>>
  node?: InputMaybe<EnumTypeWhere>
}

export type UnionTypeTypesOfUnionTypeEnumTypeCreateFieldInput = {
  node: EnumTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeEnumTypeDeleteFieldInput = {
  delete?: InputMaybe<EnumTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeEnumTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<EnumTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeEnumTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeEnumTypeCreateFieldInput>>
}

export type UnionTypeTypesOfUnionTypeEnumTypeUpdateConnectionInput = {
  node?: InputMaybe<EnumTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeEnumTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeEnumTypeCreateFieldInput>>
  delete?: InputMaybe<Array<UnionTypeTypesOfUnionTypeEnumTypeDeleteFieldInput>>
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeEnumTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeEnumTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeConnectFieldInput = {
  connect?: InputMaybe<Array<InterfaceTypeConnectInput>>
  where?: InputMaybe<InterfaceTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeInterfaceTypeConnectOrCreateFieldInputOnCreate
  where: InterfaceTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeConnectOrCreateFieldInputOnCreate =
  {
    node: InterfaceTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere>>
  node?: InputMaybe<InterfaceTypeWhere>
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeCreateFieldInput = {
  node: InterfaceTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeDeleteFieldInput = {
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeUpdateConnectionInput = {
  node?: InputMaybe<InterfaceTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeInterfaceTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeInterfaceTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeInterfaceTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeLambdaTypeConnectFieldInput = {
  connect?: InputMaybe<Array<LambdaTypeConnectInput>>
  where?: InputMaybe<LambdaTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeLambdaTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeLambdaTypeConnectOrCreateFieldInputOnCreate
  where: LambdaTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeLambdaTypeConnectOrCreateFieldInputOnCreate =
  {
    node: LambdaTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere>>
  node?: InputMaybe<LambdaTypeWhere>
}

export type UnionTypeTypesOfUnionTypeLambdaTypeCreateFieldInput = {
  node: LambdaTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeLambdaTypeDeleteFieldInput = {
  delete?: InputMaybe<LambdaTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeLambdaTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<LambdaTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeLambdaTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeLambdaTypeUpdateConnectionInput = {
  node?: InputMaybe<LambdaTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeLambdaTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeLambdaTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeLambdaTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypePageTypeConnectFieldInput = {
  connect?: InputMaybe<Array<PageTypeConnectInput>>
  where?: InputMaybe<PageTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypePageTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypePageTypeConnectOrCreateFieldInputOnCreate
  where: PageTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypePageTypeConnectOrCreateFieldInputOnCreate =
  {
    node: PageTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypePageTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypePageTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypePageTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypePageTypeConnectionWhere>>
  node?: InputMaybe<PageTypeWhere>
}

export type UnionTypeTypesOfUnionTypePageTypeCreateFieldInput = {
  node: PageTypeCreateInput
}

export type UnionTypeTypesOfUnionTypePageTypeDeleteFieldInput = {
  delete?: InputMaybe<PageTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypePageTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypePageTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<PageTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypePageTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypePageTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypePageTypeCreateFieldInput>>
}

export type UnionTypeTypesOfUnionTypePageTypeUpdateConnectionInput = {
  node?: InputMaybe<PageTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypePageTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypePageTypeCreateFieldInput>>
  delete?: InputMaybe<Array<UnionTypeTypesOfUnionTypePageTypeDeleteFieldInput>>
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypePageTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypePageTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeConnectFieldInput = {
  connect?: InputMaybe<Array<PrimitiveTypeConnectInput>>
  where?: InputMaybe<PrimitiveTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypePrimitiveTypeConnectOrCreateFieldInputOnCreate
  where: PrimitiveTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeConnectOrCreateFieldInputOnCreate =
  {
    node: PrimitiveTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere>>
  node?: InputMaybe<PrimitiveTypeWhere>
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeCreateFieldInput = {
  node: PrimitiveTypeCreateInput
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeDeleteFieldInput = {
  delete?: InputMaybe<PrimitiveTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<PrimitiveTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeUpdateConnectionInput = {
  node?: InputMaybe<PrimitiveTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypePrimitiveTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypePrimitiveTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypePrimitiveTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeConnectFieldInput = {
  connect?: InputMaybe<Array<ReactNodeTypeConnectInput>>
  where?: InputMaybe<ReactNodeTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeReactNodeTypeConnectOrCreateFieldInputOnCreate
  where: ReactNodeTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeConnectOrCreateFieldInputOnCreate =
  {
    node: ReactNodeTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere>>
  node?: InputMaybe<ReactNodeTypeWhere>
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeCreateFieldInput = {
  node: ReactNodeTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeDeleteFieldInput = {
  delete?: InputMaybe<ReactNodeTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<ReactNodeTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeUpdateConnectionInput = {
  node?: InputMaybe<ReactNodeTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeReactNodeTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeReactNodeTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeReactNodeTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeRelationship = {
  __typename?: 'UnionTypeTypesOfUnionTypeRelationship'
  cursor: Scalars['String']['output']
  node: AnyType
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeConnectFieldInput = {
  connect?: InputMaybe<Array<RenderPropTypeConnectInput>>
  where?: InputMaybe<RenderPropTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeRenderPropTypeConnectOrCreateFieldInputOnCreate
  where: RenderPropTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeConnectOrCreateFieldInputOnCreate =
  {
    node: RenderPropTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere = {
  AND?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere>
  >
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere>>
  node?: InputMaybe<RenderPropTypeWhere>
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeCreateFieldInput = {
  node: RenderPropTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeDeleteFieldInput = {
  delete?: InputMaybe<RenderPropTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<RenderPropTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeCreateFieldInput>
  >
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeUpdateConnectionInput = {
  node?: InputMaybe<RenderPropTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeRenderPropTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeCreateFieldInput>
  >
  delete?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeDeleteFieldInput>
  >
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeRenderPropTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeRenderPropTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeUnionTypeConnectFieldInput = {
  connect?: InputMaybe<Array<UnionTypeConnectInput>>
  where?: InputMaybe<UnionTypeConnectWhere>
}

export type UnionTypeTypesOfUnionTypeUnionTypeConnectOrCreateFieldInput = {
  onCreate: UnionTypeTypesOfUnionTypeUnionTypeConnectOrCreateFieldInputOnCreate
  where: UnionTypeConnectOrCreateWhere
}

export type UnionTypeTypesOfUnionTypeUnionTypeConnectOrCreateFieldInputOnCreate =
  {
    node: UnionTypeOnCreateInput
  }

export type UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere = {
  AND?: InputMaybe<Array<UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere>>
  NOT?: InputMaybe<UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere>
  OR?: InputMaybe<Array<UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere>>
  node?: InputMaybe<UnionTypeWhere>
}

export type UnionTypeTypesOfUnionTypeUnionTypeCreateFieldInput = {
  node: UnionTypeCreateInput
}

export type UnionTypeTypesOfUnionTypeUnionTypeDeleteFieldInput = {
  delete?: InputMaybe<UnionTypeDeleteInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeUnionTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<UnionTypeDisconnectInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeUnionTypeFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeUnionTypeCreateFieldInput>>
}

export type UnionTypeTypesOfUnionTypeUnionTypeUpdateConnectionInput = {
  node?: InputMaybe<UnionTypeUpdateInput>
}

export type UnionTypeTypesOfUnionTypeUnionTypeUpdateFieldInput = {
  connect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeConnectFieldInput>
  >
  connectOrCreate?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeConnectOrCreateFieldInput>
  >
  create?: InputMaybe<Array<UnionTypeTypesOfUnionTypeUnionTypeCreateFieldInput>>
  delete?: InputMaybe<Array<UnionTypeTypesOfUnionTypeUnionTypeDeleteFieldInput>>
  disconnect?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeDisconnectFieldInput>
  >
  update?: InputMaybe<UnionTypeTypesOfUnionTypeUnionTypeUpdateConnectionInput>
  where?: InputMaybe<UnionTypeTypesOfUnionTypeUnionTypeConnectionWhere>
}

export type UnionTypeTypesOfUnionTypeUpdateInput = {
  ActionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeActionTypeUpdateFieldInput>
  >
  AppType?: InputMaybe<Array<UnionTypeTypesOfUnionTypeAppTypeUpdateFieldInput>>
  ArrayType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeArrayTypeUpdateFieldInput>
  >
  CodeMirrorType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeCodeMirrorTypeUpdateFieldInput>
  >
  ElementType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeElementTypeUpdateFieldInput>
  >
  EnumType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeEnumTypeUpdateFieldInput>
  >
  InterfaceType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeInterfaceTypeUpdateFieldInput>
  >
  LambdaType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeLambdaTypeUpdateFieldInput>
  >
  PageType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePageTypeUpdateFieldInput>
  >
  PrimitiveType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypePrimitiveTypeUpdateFieldInput>
  >
  ReactNodeType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeReactNodeTypeUpdateFieldInput>
  >
  RenderPropType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeRenderPropTypeUpdateFieldInput>
  >
  UnionType?: InputMaybe<
    Array<UnionTypeTypesOfUnionTypeUnionTypeUpdateFieldInput>
  >
}

export type UnionTypeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type UnionTypeUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<IBaseTypeOwnerUpdateFieldInput>
  typesOfUnionType?: InputMaybe<UnionTypeTypesOfUnionTypeUpdateInput>
}

export type UnionTypeUserOwnerAggregationSelection = {
  __typename?: 'UnionTypeUserOwnerAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<UnionTypeUserOwnerNodeAggregateSelection>
}

export type UnionTypeUserOwnerNodeAggregateSelection = {
  __typename?: 'UnionTypeUserOwnerNodeAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type UnionTypeWhere = {
  AND?: InputMaybe<Array<UnionTypeWhere>>
  NOT?: InputMaybe<UnionTypeWhere>
  OR?: InputMaybe<Array<UnionTypeWhere>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  kind?: InputMaybe<TypeKind>
  kind_IN?: InputMaybe<Array<TypeKind>>
  name?: InputMaybe<Scalars['String']['input']>
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>
  name_MATCHES?: InputMaybe<Scalars['String']['input']>
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  owner?: InputMaybe<UserWhere>
  ownerAggregate?: InputMaybe<UnionTypeOwnerAggregateInput>
  ownerConnection?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  ownerConnection_NOT?: InputMaybe<IBaseTypeOwnerConnectionWhere>
  owner_NOT?: InputMaybe<UserWhere>
  /** Return UnionTypes where all of the related UnionTypeTypesOfUnionTypeConnections match this filter */
  typesOfUnionTypeConnection_ALL?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
  /** Return UnionTypes where none of the related UnionTypeTypesOfUnionTypeConnections match this filter */
  typesOfUnionTypeConnection_NONE?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
  /** Return UnionTypes where one of the related UnionTypeTypesOfUnionTypeConnections match this filter */
  typesOfUnionTypeConnection_SINGLE?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
  /** Return UnionTypes where some of the related UnionTypeTypesOfUnionTypeConnections match this filter */
  typesOfUnionTypeConnection_SOME?: InputMaybe<UnionTypeTypesOfUnionTypeConnectionWhere>
}

export type UnionTypesConnection = {
  __typename?: 'UnionTypesConnection'
  edges: Array<UnionTypeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UpdateActionTypesMutationResponse = {
  __typename?: 'UpdateActionTypesMutationResponse'
  actionTypes: Array<ActionType>
  info: UpdateInfo
}

export type UpdateApiActionsMutationResponse = {
  __typename?: 'UpdateApiActionsMutationResponse'
  apiActions: Array<ApiAction>
  info: UpdateInfo
}

export type UpdateAppTypesMutationResponse = {
  __typename?: 'UpdateAppTypesMutationResponse'
  appTypes: Array<AppType>
  info: UpdateInfo
}

export type UpdateAppsMutationResponse = {
  __typename?: 'UpdateAppsMutationResponse'
  apps: Array<App>
  info: UpdateInfo
}

export type UpdateArrayTypesMutationResponse = {
  __typename?: 'UpdateArrayTypesMutationResponse'
  arrayTypes: Array<ArrayType>
  info: UpdateInfo
}

export type UpdateAtomsMutationResponse = {
  __typename?: 'UpdateAtomsMutationResponse'
  atoms: Array<Atom>
  info: UpdateInfo
}

export type UpdateCodeActionsMutationResponse = {
  __typename?: 'UpdateCodeActionsMutationResponse'
  codeActions: Array<CodeAction>
  info: UpdateInfo
}

export type UpdateCodeMirrorTypesMutationResponse = {
  __typename?: 'UpdateCodeMirrorTypesMutationResponse'
  codeMirrorTypes: Array<CodeMirrorType>
  info: UpdateInfo
}

export type UpdateComponentsMutationResponse = {
  __typename?: 'UpdateComponentsMutationResponse'
  components: Array<Component>
  info: UpdateInfo
}

export type UpdateDomainsMutationResponse = {
  __typename?: 'UpdateDomainsMutationResponse'
  domains: Array<Domain>
  info: UpdateInfo
}

export type UpdateElementTypesMutationResponse = {
  __typename?: 'UpdateElementTypesMutationResponse'
  elementTypes: Array<ElementType>
  info: UpdateInfo
}

export type UpdateElementsMutationResponse = {
  __typename?: 'UpdateElementsMutationResponse'
  elements: Array<Element>
  info: UpdateInfo
}

export type UpdateEnumTypeValuesMutationResponse = {
  __typename?: 'UpdateEnumTypeValuesMutationResponse'
  enumTypeValues: Array<EnumTypeValue>
  info: UpdateInfo
}

export type UpdateEnumTypesMutationResponse = {
  __typename?: 'UpdateEnumTypesMutationResponse'
  enumTypes: Array<EnumType>
  info: UpdateInfo
}

export type UpdateFieldsMutationResponse = {
  __typename?: 'UpdateFieldsMutationResponse'
  fields: Array<Field>
  info: UpdateInfo
}

export type UpdateGetBaseTypesReturnsMutationResponse = {
  __typename?: 'UpdateGetBaseTypesReturnsMutationResponse'
  getBaseTypesReturns: Array<GetBaseTypesReturn>
  info: UpdateInfo
}

export type UpdateHooksMutationResponse = {
  __typename?: 'UpdateHooksMutationResponse'
  hooks: Array<Hook>
  info: UpdateInfo
}

export type UpdateInfo = {
  __typename?: 'UpdateInfo'
  bookmark?: Maybe<Scalars['String']['output']>
  nodesCreated: Scalars['Int']['output']
  nodesDeleted: Scalars['Int']['output']
  relationshipsCreated: Scalars['Int']['output']
  relationshipsDeleted: Scalars['Int']['output']
}

export type UpdateInterfaceTypesMutationResponse = {
  __typename?: 'UpdateInterfaceTypesMutationResponse'
  info: UpdateInfo
  interfaceTypes: Array<InterfaceType>
}

export type UpdateLambdaTypesMutationResponse = {
  __typename?: 'UpdateLambdaTypesMutationResponse'
  info: UpdateInfo
  lambdaTypes: Array<LambdaType>
}

export type UpdatePageTypesMutationResponse = {
  __typename?: 'UpdatePageTypesMutationResponse'
  info: UpdateInfo
  pageTypes: Array<PageType>
}

export type UpdatePagesMutationResponse = {
  __typename?: 'UpdatePagesMutationResponse'
  info: UpdateInfo
  pages: Array<Page>
}

export type UpdatePrimitiveTypesMutationResponse = {
  __typename?: 'UpdatePrimitiveTypesMutationResponse'
  info: UpdateInfo
  primitiveTypes: Array<PrimitiveType>
}

export type UpdatePropsMutationResponse = {
  __typename?: 'UpdatePropsMutationResponse'
  info: UpdateInfo
  props: Array<Prop>
}

export type UpdateReactNodeTypesMutationResponse = {
  __typename?: 'UpdateReactNodeTypesMutationResponse'
  info: UpdateInfo
  reactNodeTypes: Array<ReactNodeType>
}

export type UpdateRenderPropTypesMutationResponse = {
  __typename?: 'UpdateRenderPropTypesMutationResponse'
  info: UpdateInfo
  renderPropTypes: Array<RenderPropType>
}

export type UpdateResourcesMutationResponse = {
  __typename?: 'UpdateResourcesMutationResponse'
  info: UpdateInfo
  resources: Array<Resource>
}

export type UpdateStoresMutationResponse = {
  __typename?: 'UpdateStoresMutationResponse'
  info: UpdateInfo
  stores: Array<Store>
}

export type UpdateTagsMutationResponse = {
  __typename?: 'UpdateTagsMutationResponse'
  info: UpdateInfo
  tags: Array<Tag>
}

export type UpdateTypeReferencesMutationResponse = {
  __typename?: 'UpdateTypeReferencesMutationResponse'
  info: UpdateInfo
  typeReferences: Array<TypeReference>
}

export type UpdateUnionTypesMutationResponse = {
  __typename?: 'UpdateUnionTypesMutationResponse'
  info: UpdateInfo
  unionTypes: Array<UnionType>
}

export type User = {
  __typename?: 'User'
  apps: Array<App>
  appsAggregate?: Maybe<UserAppAppsAggregationSelection>
  appsConnection: UserAppsConnection
  atoms: Array<Atom>
  atomsAggregate?: Maybe<UserAtomAtomsAggregationSelection>
  atomsConnection: UserAtomsConnection
  auth0Id: Scalars['String']['output']
  components: Array<Component>
  componentsAggregate?: Maybe<UserComponentComponentsAggregationSelection>
  componentsConnection: UserComponentsConnection
  elements: Array<Element>
  elementsAggregate?: Maybe<UserElementElementsAggregationSelection>
  elementsConnection: UserElementsConnection
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  roles?: Maybe<Array<Role>>
  tags: Array<Tag>
  tagsAggregate?: Maybe<UserTagTagsAggregationSelection>
  tagsConnection: UserTagsConnection
  types: Array<BaseType>
  typesAggregate?: Maybe<UserBaseTypeTypesAggregationSelection>
  typesConnection: UserTypesConnection
  username: Scalars['String']['output']
}

export type UserAppsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}

export type UserAppsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AppWhere>
}

export type UserAppsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<UserAppsConnectionSort>>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserAtomsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}

export type UserAtomsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AtomWhere>
}

export type UserAtomsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<UserAtomsConnectionSort>>
  where?: InputMaybe<UserAtomsConnectionWhere>
}

export type UserComponentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ComponentOptions>
  where?: InputMaybe<ComponentWhere>
}

export type UserComponentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ComponentWhere>
}

export type UserComponentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<UserComponentsConnectionSort>>
  where?: InputMaybe<UserComponentsConnectionWhere>
}

export type UserElementsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}

export type UserElementsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<ElementWhere>
}

export type UserElementsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<UserElementsConnectionSort>>
  where?: InputMaybe<UserElementsConnectionWhere>
}

export type UserTagsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}

export type UserTagsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<TagWhere>
}

export type UserTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<UserTagsConnectionSort>>
  where?: InputMaybe<UserTagsConnectionWhere>
}

export type UserTypesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  options?: InputMaybe<BaseTypeOptions>
  where?: InputMaybe<BaseTypeWhere>
}

export type UserTypesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<BaseTypeWhere>
}

export type UserTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  directed?: InputMaybe<Scalars['Boolean']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<UserTypesConnectionSort>>
  where?: InputMaybe<UserTypesConnectionWhere>
}

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection'
  auth0Id: StringAggregateSelectionNonNullable
  count: Scalars['Int']['output']
  email: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
  username: StringAggregateSelectionNonNullable
}

export type UserAppAppsAggregationSelection = {
  __typename?: 'UserAppAppsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<UserAppAppsNodeAggregateSelection>
}

export type UserAppAppsNodeAggregateSelection = {
  __typename?: 'UserAppAppsNodeAggregateSelection'
  _compoundName: StringAggregateSelectionNonNullable
  id: IdAggregateSelectionNonNullable
}

export type UserAppsAggregateInput = {
  AND?: InputMaybe<Array<UserAppsAggregateInput>>
  NOT?: InputMaybe<UserAppsAggregateInput>
  OR?: InputMaybe<Array<UserAppsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<UserAppsNodeAggregationWhereInput>
}

export type UserAppsConnectFieldInput = {
  connect?: InputMaybe<Array<AppConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AppConnectWhere>
}

export type UserAppsConnectOrCreateFieldInput = {
  onCreate: UserAppsConnectOrCreateFieldInputOnCreate
  where: AppConnectOrCreateWhere
}

export type UserAppsConnectOrCreateFieldInputOnCreate = {
  node: AppOnCreateInput
}

export type UserAppsConnection = {
  __typename?: 'UserAppsConnection'
  edges: Array<UserAppsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UserAppsConnectionSort = {
  node?: InputMaybe<AppSort>
}

export type UserAppsConnectionWhere = {
  AND?: InputMaybe<Array<UserAppsConnectionWhere>>
  NOT?: InputMaybe<UserAppsConnectionWhere>
  OR?: InputMaybe<Array<UserAppsConnectionWhere>>
  node?: InputMaybe<AppWhere>
}

export type UserAppsCreateFieldInput = {
  node: AppCreateInput
}

export type UserAppsDeleteFieldInput = {
  delete?: InputMaybe<AppDeleteInput>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserAppsDisconnectFieldInput = {
  disconnect?: InputMaybe<AppDisconnectInput>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserAppsFieldInput = {
  connect?: InputMaybe<Array<UserAppsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserAppsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserAppsCreateFieldInput>>
}

export type UserAppsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAppsNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserAppsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<UserAppsNodeAggregationWhereInput>>
  _compoundName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  _compoundName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  _compoundName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  _compoundName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type UserAppsRelationship = {
  __typename?: 'UserAppsRelationship'
  cursor: Scalars['String']['output']
  node: App
}

export type UserAppsUpdateConnectionInput = {
  node?: InputMaybe<AppUpdateInput>
}

export type UserAppsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserAppsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserAppsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserAppsCreateFieldInput>>
  delete?: InputMaybe<Array<UserAppsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UserAppsDisconnectFieldInput>>
  update?: InputMaybe<UserAppsUpdateConnectionInput>
  where?: InputMaybe<UserAppsConnectionWhere>
}

export type UserAtomAtomsAggregationSelection = {
  __typename?: 'UserAtomAtomsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<UserAtomAtomsNodeAggregateSelection>
}

export type UserAtomAtomsNodeAggregateSelection = {
  __typename?: 'UserAtomAtomsNodeAggregateSelection'
  externalCssSource: StringAggregateSelectionNullable
  externalJsSource: StringAggregateSelectionNullable
  externalSourceType: StringAggregateSelectionNullable
  icon: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type UserAtomsAggregateInput = {
  AND?: InputMaybe<Array<UserAtomsAggregateInput>>
  NOT?: InputMaybe<UserAtomsAggregateInput>
  OR?: InputMaybe<Array<UserAtomsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<UserAtomsNodeAggregationWhereInput>
}

export type UserAtomsConnectFieldInput = {
  connect?: InputMaybe<Array<AtomConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<AtomConnectWhere>
}

export type UserAtomsConnectOrCreateFieldInput = {
  onCreate: UserAtomsConnectOrCreateFieldInputOnCreate
  where: AtomConnectOrCreateWhere
}

export type UserAtomsConnectOrCreateFieldInputOnCreate = {
  node: AtomOnCreateInput
}

export type UserAtomsConnection = {
  __typename?: 'UserAtomsConnection'
  edges: Array<UserAtomsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UserAtomsConnectionSort = {
  node?: InputMaybe<AtomSort>
}

export type UserAtomsConnectionWhere = {
  AND?: InputMaybe<Array<UserAtomsConnectionWhere>>
  NOT?: InputMaybe<UserAtomsConnectionWhere>
  OR?: InputMaybe<Array<UserAtomsConnectionWhere>>
  node?: InputMaybe<AtomWhere>
}

export type UserAtomsCreateFieldInput = {
  node: AtomCreateInput
}

export type UserAtomsDeleteFieldInput = {
  delete?: InputMaybe<AtomDeleteInput>
  where?: InputMaybe<UserAtomsConnectionWhere>
}

export type UserAtomsDisconnectFieldInput = {
  disconnect?: InputMaybe<AtomDisconnectInput>
  where?: InputMaybe<UserAtomsConnectionWhere>
}

export type UserAtomsFieldInput = {
  connect?: InputMaybe<Array<UserAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserAtomsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserAtomsCreateFieldInput>>
}

export type UserAtomsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAtomsNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserAtomsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<UserAtomsNodeAggregationWhereInput>>
  externalCssSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalCssSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalCssSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalJsSource_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalJsSource_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  externalSourceType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  externalSourceType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  externalSourceType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  icon_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  icon_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  icon_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type UserAtomsRelationship = {
  __typename?: 'UserAtomsRelationship'
  cursor: Scalars['String']['output']
  node: Atom
}

export type UserAtomsUpdateConnectionInput = {
  node?: InputMaybe<AtomUpdateInput>
}

export type UserAtomsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserAtomsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserAtomsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserAtomsCreateFieldInput>>
  delete?: InputMaybe<Array<UserAtomsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UserAtomsDisconnectFieldInput>>
  update?: InputMaybe<UserAtomsUpdateConnectionInput>
  where?: InputMaybe<UserAtomsConnectionWhere>
}

export type UserBaseTypeTypesAggregationSelection = {
  __typename?: 'UserBaseTypeTypesAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<UserBaseTypeTypesNodeAggregateSelection>
}

export type UserBaseTypeTypesNodeAggregateSelection = {
  __typename?: 'UserBaseTypeTypesNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type UserComponentComponentsAggregationSelection = {
  __typename?: 'UserComponentComponentsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<UserComponentComponentsNodeAggregateSelection>
}

export type UserComponentComponentsNodeAggregateSelection = {
  __typename?: 'UserComponentComponentsNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  keyGenerator: StringAggregateSelectionNullable
  name: StringAggregateSelectionNonNullable
}

export type UserComponentsAggregateInput = {
  AND?: InputMaybe<Array<UserComponentsAggregateInput>>
  NOT?: InputMaybe<UserComponentsAggregateInput>
  OR?: InputMaybe<Array<UserComponentsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<UserComponentsNodeAggregationWhereInput>
}

export type UserComponentsConnectFieldInput = {
  connect?: InputMaybe<Array<ComponentConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ComponentConnectWhere>
}

export type UserComponentsConnectOrCreateFieldInput = {
  onCreate: UserComponentsConnectOrCreateFieldInputOnCreate
  where: ComponentConnectOrCreateWhere
}

export type UserComponentsConnectOrCreateFieldInputOnCreate = {
  node: ComponentOnCreateInput
}

export type UserComponentsConnection = {
  __typename?: 'UserComponentsConnection'
  edges: Array<UserComponentsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UserComponentsConnectionSort = {
  node?: InputMaybe<ComponentSort>
}

export type UserComponentsConnectionWhere = {
  AND?: InputMaybe<Array<UserComponentsConnectionWhere>>
  NOT?: InputMaybe<UserComponentsConnectionWhere>
  OR?: InputMaybe<Array<UserComponentsConnectionWhere>>
  node?: InputMaybe<ComponentWhere>
}

export type UserComponentsCreateFieldInput = {
  node: ComponentCreateInput
}

export type UserComponentsDeleteFieldInput = {
  delete?: InputMaybe<ComponentDeleteInput>
  where?: InputMaybe<UserComponentsConnectionWhere>
}

export type UserComponentsDisconnectFieldInput = {
  disconnect?: InputMaybe<ComponentDisconnectInput>
  where?: InputMaybe<UserComponentsConnectionWhere>
}

export type UserComponentsFieldInput = {
  connect?: InputMaybe<Array<UserComponentsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserComponentsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserComponentsCreateFieldInput>>
}

export type UserComponentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserComponentsNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserComponentsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<UserComponentsNodeAggregationWhereInput>>
  keyGenerator_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  keyGenerator_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  keyGenerator_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type UserComponentsRelationship = {
  __typename?: 'UserComponentsRelationship'
  cursor: Scalars['String']['output']
  node: Component
}

export type UserComponentsUpdateConnectionInput = {
  node?: InputMaybe<ComponentUpdateInput>
}

export type UserComponentsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserComponentsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserComponentsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserComponentsCreateFieldInput>>
  delete?: InputMaybe<Array<UserComponentsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UserComponentsDisconnectFieldInput>>
  update?: InputMaybe<UserComponentsUpdateConnectionInput>
  where?: InputMaybe<UserComponentsConnectionWhere>
}

export type UserConnectInput = {
  apps?: InputMaybe<Array<UserAppsConnectFieldInput>>
  atoms?: InputMaybe<Array<UserAtomsConnectFieldInput>>
  components?: InputMaybe<Array<UserComponentsConnectFieldInput>>
  elements?: InputMaybe<Array<UserElementsConnectFieldInput>>
  tags?: InputMaybe<Array<UserTagsConnectFieldInput>>
  types?: InputMaybe<Array<UserTypesConnectFieldInput>>
}

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere
}

export type UserConnectWhere = {
  node: UserWhere
}

export type UserCreateInput = {
  apps?: InputMaybe<UserAppsFieldInput>
  atoms?: InputMaybe<UserAtomsFieldInput>
  auth0Id: Scalars['String']['input']
  components?: InputMaybe<UserComponentsFieldInput>
  elements?: InputMaybe<UserElementsFieldInput>
  email: Scalars['String']['input']
  id: Scalars['ID']['input']
  roles?: InputMaybe<Array<Role>>
  tags?: InputMaybe<UserTagsFieldInput>
  types?: InputMaybe<UserTypesFieldInput>
  username: Scalars['String']['input']
}

export type UserDeleteInput = {
  apps?: InputMaybe<Array<UserAppsDeleteFieldInput>>
  atoms?: InputMaybe<Array<UserAtomsDeleteFieldInput>>
  components?: InputMaybe<Array<UserComponentsDeleteFieldInput>>
  elements?: InputMaybe<Array<UserElementsDeleteFieldInput>>
  tags?: InputMaybe<Array<UserTagsDeleteFieldInput>>
  types?: InputMaybe<Array<UserTypesDeleteFieldInput>>
}

export type UserDisconnectInput = {
  apps?: InputMaybe<Array<UserAppsDisconnectFieldInput>>
  atoms?: InputMaybe<Array<UserAtomsDisconnectFieldInput>>
  components?: InputMaybe<Array<UserComponentsDisconnectFieldInput>>
  elements?: InputMaybe<Array<UserElementsDisconnectFieldInput>>
  tags?: InputMaybe<Array<UserTagsDisconnectFieldInput>>
  types?: InputMaybe<Array<UserTypesDisconnectFieldInput>>
}

export type UserEdge = {
  __typename?: 'UserEdge'
  cursor: Scalars['String']['output']
  node: User
}

export type UserElementElementsAggregationSelection = {
  __typename?: 'UserElementElementsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<UserElementElementsNodeAggregateSelection>
}

export type UserElementElementsNodeAggregateSelection = {
  __typename?: 'UserElementElementsNodeAggregateSelection'
  childMapperPropKey: StringAggregateSelectionNullable
  customCss: StringAggregateSelectionNullable
  guiCss: StringAggregateSelectionNullable
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
  propTransformationJs: StringAggregateSelectionNullable
  renderForEachPropKey: StringAggregateSelectionNullable
  renderIfExpression: StringAggregateSelectionNullable
}

export type UserElementsAggregateInput = {
  AND?: InputMaybe<Array<UserElementsAggregateInput>>
  NOT?: InputMaybe<UserElementsAggregateInput>
  OR?: InputMaybe<Array<UserElementsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<UserElementsNodeAggregationWhereInput>
}

export type UserElementsConnectFieldInput = {
  connect?: InputMaybe<Array<ElementConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<ElementConnectWhere>
}

export type UserElementsConnectOrCreateFieldInput = {
  onCreate: UserElementsConnectOrCreateFieldInputOnCreate
  where: ElementConnectOrCreateWhere
}

export type UserElementsConnectOrCreateFieldInputOnCreate = {
  node: ElementOnCreateInput
}

export type UserElementsConnection = {
  __typename?: 'UserElementsConnection'
  edges: Array<UserElementsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UserElementsConnectionSort = {
  node?: InputMaybe<ElementSort>
}

export type UserElementsConnectionWhere = {
  AND?: InputMaybe<Array<UserElementsConnectionWhere>>
  NOT?: InputMaybe<UserElementsConnectionWhere>
  OR?: InputMaybe<Array<UserElementsConnectionWhere>>
  node?: InputMaybe<ElementWhere>
}

export type UserElementsCreateFieldInput = {
  node: ElementCreateInput
}

export type UserElementsDeleteFieldInput = {
  delete?: InputMaybe<ElementDeleteInput>
  where?: InputMaybe<UserElementsConnectionWhere>
}

export type UserElementsDisconnectFieldInput = {
  disconnect?: InputMaybe<ElementDisconnectInput>
  where?: InputMaybe<UserElementsConnectionWhere>
}

export type UserElementsFieldInput = {
  connect?: InputMaybe<Array<UserElementsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserElementsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserElementsCreateFieldInput>>
}

export type UserElementsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserElementsNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserElementsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<UserElementsNodeAggregationWhereInput>>
  childMapperPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  childMapperPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  childMapperPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  childMapperPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  customCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  customCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  customCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  guiCss_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  guiCss_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  guiCss_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  propTransformationJs_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  propTransformationJs_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  propTransformationJs_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  propTransformationJs_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_GTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderForEachPropKey_AVERAGE_LENGTH_LTE?: InputMaybe<
    Scalars['Float']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_EQUAL?: InputMaybe<
    Scalars['Int']['input']
  >
  renderForEachPropKey_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderForEachPropKey_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_AVERAGE_LENGTH_EQUAL?: InputMaybe<
    Scalars['Float']['input']
  >
  renderIfExpression_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  renderIfExpression_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  renderIfExpression_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type UserElementsRelationship = {
  __typename?: 'UserElementsRelationship'
  cursor: Scalars['String']['output']
  node: Element
}

export type UserElementsUpdateConnectionInput = {
  node?: InputMaybe<ElementUpdateInput>
}

export type UserElementsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserElementsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserElementsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserElementsCreateFieldInput>>
  delete?: InputMaybe<Array<UserElementsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UserElementsDisconnectFieldInput>>
  update?: InputMaybe<UserElementsUpdateConnectionInput>
  where?: InputMaybe<UserElementsConnectionWhere>
}

export type UserOnCreateInput = {
  auth0Id: Scalars['String']['input']
  email: Scalars['String']['input']
  id: Scalars['ID']['input']
  roles?: InputMaybe<Array<Role>>
  username: Scalars['String']['input']
}

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>
}

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  auth0Id?: InputMaybe<SortDirection>
  email?: InputMaybe<SortDirection>
  id?: InputMaybe<SortDirection>
  username?: InputMaybe<SortDirection>
}

export type UserTagTagsAggregationSelection = {
  __typename?: 'UserTagTagsAggregationSelection'
  count: Scalars['Int']['output']
  node?: Maybe<UserTagTagsNodeAggregateSelection>
}

export type UserTagTagsNodeAggregateSelection = {
  __typename?: 'UserTagTagsNodeAggregateSelection'
  id: IdAggregateSelectionNonNullable
  name: StringAggregateSelectionNonNullable
}

export type UserTagsAggregateInput = {
  AND?: InputMaybe<Array<UserTagsAggregateInput>>
  NOT?: InputMaybe<UserTagsAggregateInput>
  OR?: InputMaybe<Array<UserTagsAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<UserTagsNodeAggregationWhereInput>
}

export type UserTagsConnectFieldInput = {
  connect?: InputMaybe<Array<TagConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<TagConnectWhere>
}

export type UserTagsConnectOrCreateFieldInput = {
  onCreate: UserTagsConnectOrCreateFieldInputOnCreate
  where: TagConnectOrCreateWhere
}

export type UserTagsConnectOrCreateFieldInputOnCreate = {
  node: TagOnCreateInput
}

export type UserTagsConnection = {
  __typename?: 'UserTagsConnection'
  edges: Array<UserTagsRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UserTagsConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type UserTagsConnectionWhere = {
  AND?: InputMaybe<Array<UserTagsConnectionWhere>>
  NOT?: InputMaybe<UserTagsConnectionWhere>
  OR?: InputMaybe<Array<UserTagsConnectionWhere>>
  node?: InputMaybe<TagWhere>
}

export type UserTagsCreateFieldInput = {
  node: TagCreateInput
}

export type UserTagsDeleteFieldInput = {
  delete?: InputMaybe<TagDeleteInput>
  where?: InputMaybe<UserTagsConnectionWhere>
}

export type UserTagsDisconnectFieldInput = {
  disconnect?: InputMaybe<TagDisconnectInput>
  where?: InputMaybe<UserTagsConnectionWhere>
}

export type UserTagsFieldInput = {
  connect?: InputMaybe<Array<UserTagsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserTagsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserTagsCreateFieldInput>>
}

export type UserTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserTagsNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserTagsNodeAggregationWhereInput>
  OR?: InputMaybe<Array<UserTagsNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type UserTagsRelationship = {
  __typename?: 'UserTagsRelationship'
  cursor: Scalars['String']['output']
  node: Tag
}

export type UserTagsUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type UserTagsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserTagsConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserTagsConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserTagsCreateFieldInput>>
  delete?: InputMaybe<Array<UserTagsDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UserTagsDisconnectFieldInput>>
  update?: InputMaybe<UserTagsUpdateConnectionInput>
  where?: InputMaybe<UserTagsConnectionWhere>
}

export type UserTypesAggregateInput = {
  AND?: InputMaybe<Array<UserTypesAggregateInput>>
  NOT?: InputMaybe<UserTypesAggregateInput>
  OR?: InputMaybe<Array<UserTypesAggregateInput>>
  count?: InputMaybe<Scalars['Int']['input']>
  count_GT?: InputMaybe<Scalars['Int']['input']>
  count_GTE?: InputMaybe<Scalars['Int']['input']>
  count_LT?: InputMaybe<Scalars['Int']['input']>
  count_LTE?: InputMaybe<Scalars['Int']['input']>
  node?: InputMaybe<UserTypesNodeAggregationWhereInput>
}

export type UserTypesConnectFieldInput = {
  connect?: InputMaybe<Array<BaseTypeConnectInput>>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<BaseTypeConnectWhere>
}

export type UserTypesConnectOrCreateFieldInput = {
  onCreate: UserTypesConnectOrCreateFieldInputOnCreate
  where: BaseTypeConnectOrCreateWhere
}

export type UserTypesConnectOrCreateFieldInputOnCreate = {
  node: BaseTypeOnCreateInput
}

export type UserTypesConnection = {
  __typename?: 'UserTypesConnection'
  edges: Array<UserTypesRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type UserTypesConnectionSort = {
  node?: InputMaybe<BaseTypeSort>
}

export type UserTypesConnectionWhere = {
  AND?: InputMaybe<Array<UserTypesConnectionWhere>>
  NOT?: InputMaybe<UserTypesConnectionWhere>
  OR?: InputMaybe<Array<UserTypesConnectionWhere>>
  node?: InputMaybe<BaseTypeWhere>
}

export type UserTypesCreateFieldInput = {
  node: BaseTypeCreateInput
}

export type UserTypesDeleteFieldInput = {
  delete?: InputMaybe<BaseTypeDeleteInput>
  where?: InputMaybe<UserTypesConnectionWhere>
}

export type UserTypesDisconnectFieldInput = {
  disconnect?: InputMaybe<BaseTypeDisconnectInput>
  where?: InputMaybe<UserTypesConnectionWhere>
}

export type UserTypesFieldInput = {
  connect?: InputMaybe<Array<UserTypesConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserTypesConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserTypesCreateFieldInput>>
}

export type UserTypesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserTypesNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserTypesNodeAggregationWhereInput>
  OR?: InputMaybe<Array<UserTypesNodeAggregationWhereInput>>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>
}

export type UserTypesRelationship = {
  __typename?: 'UserTypesRelationship'
  cursor: Scalars['String']['output']
  node: BaseType
}

export type UserTypesUpdateConnectionInput = {
  node?: InputMaybe<BaseTypeUpdateInput>
}

export type UserTypesUpdateFieldInput = {
  connect?: InputMaybe<Array<UserTypesConnectFieldInput>>
  connectOrCreate?: InputMaybe<Array<UserTypesConnectOrCreateFieldInput>>
  create?: InputMaybe<Array<UserTypesCreateFieldInput>>
  delete?: InputMaybe<Array<UserTypesDeleteFieldInput>>
  disconnect?: InputMaybe<Array<UserTypesDisconnectFieldInput>>
  update?: InputMaybe<UserTypesUpdateConnectionInput>
  where?: InputMaybe<UserTypesConnectionWhere>
}

export type UserUniqueWhere = {
  auth0Id?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UserUpdateInput = {
  apps?: InputMaybe<Array<UserAppsUpdateFieldInput>>
  atoms?: InputMaybe<Array<UserAtomsUpdateFieldInput>>
  auth0Id?: InputMaybe<Scalars['String']['input']>
  components?: InputMaybe<Array<UserComponentsUpdateFieldInput>>
  elements?: InputMaybe<Array<UserElementsUpdateFieldInput>>
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  roles?: InputMaybe<Array<Role>>
  tags?: InputMaybe<Array<UserTagsUpdateFieldInput>>
  types?: InputMaybe<Array<UserTypesUpdateFieldInput>>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>
  NOT?: InputMaybe<UserWhere>
  OR?: InputMaybe<Array<UserWhere>>
  appsAggregate?: InputMaybe<UserAppsAggregateInput>
  /** Return Users where all of the related UserAppsConnections match this filter */
  appsConnection_ALL?: InputMaybe<UserAppsConnectionWhere>
  /** Return Users where none of the related UserAppsConnections match this filter */
  appsConnection_NONE?: InputMaybe<UserAppsConnectionWhere>
  /** Return Users where one of the related UserAppsConnections match this filter */
  appsConnection_SINGLE?: InputMaybe<UserAppsConnectionWhere>
  /** Return Users where some of the related UserAppsConnections match this filter */
  appsConnection_SOME?: InputMaybe<UserAppsConnectionWhere>
  /** Return Users where all of the related Apps match this filter */
  apps_ALL?: InputMaybe<AppWhere>
  /** Return Users where none of the related Apps match this filter */
  apps_NONE?: InputMaybe<AppWhere>
  /** Return Users where one of the related Apps match this filter */
  apps_SINGLE?: InputMaybe<AppWhere>
  /** Return Users where some of the related Apps match this filter */
  apps_SOME?: InputMaybe<AppWhere>
  atomsAggregate?: InputMaybe<UserAtomsAggregateInput>
  /** Return Users where all of the related UserAtomsConnections match this filter */
  atomsConnection_ALL?: InputMaybe<UserAtomsConnectionWhere>
  /** Return Users where none of the related UserAtomsConnections match this filter */
  atomsConnection_NONE?: InputMaybe<UserAtomsConnectionWhere>
  /** Return Users where one of the related UserAtomsConnections match this filter */
  atomsConnection_SINGLE?: InputMaybe<UserAtomsConnectionWhere>
  /** Return Users where some of the related UserAtomsConnections match this filter */
  atomsConnection_SOME?: InputMaybe<UserAtomsConnectionWhere>
  /** Return Users where all of the related Atoms match this filter */
  atoms_ALL?: InputMaybe<AtomWhere>
  /** Return Users where none of the related Atoms match this filter */
  atoms_NONE?: InputMaybe<AtomWhere>
  /** Return Users where one of the related Atoms match this filter */
  atoms_SINGLE?: InputMaybe<AtomWhere>
  /** Return Users where some of the related Atoms match this filter */
  atoms_SOME?: InputMaybe<AtomWhere>
  auth0Id?: InputMaybe<Scalars['String']['input']>
  auth0Id_CONTAINS?: InputMaybe<Scalars['String']['input']>
  auth0Id_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  auth0Id_IN?: InputMaybe<Array<Scalars['String']['input']>>
  auth0Id_MATCHES?: InputMaybe<Scalars['String']['input']>
  auth0Id_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  componentsAggregate?: InputMaybe<UserComponentsAggregateInput>
  /** Return Users where all of the related UserComponentsConnections match this filter */
  componentsConnection_ALL?: InputMaybe<UserComponentsConnectionWhere>
  /** Return Users where none of the related UserComponentsConnections match this filter */
  componentsConnection_NONE?: InputMaybe<UserComponentsConnectionWhere>
  /** Return Users where one of the related UserComponentsConnections match this filter */
  componentsConnection_SINGLE?: InputMaybe<UserComponentsConnectionWhere>
  /** Return Users where some of the related UserComponentsConnections match this filter */
  componentsConnection_SOME?: InputMaybe<UserComponentsConnectionWhere>
  /** Return Users where all of the related Components match this filter */
  components_ALL?: InputMaybe<ComponentWhere>
  /** Return Users where none of the related Components match this filter */
  components_NONE?: InputMaybe<ComponentWhere>
  /** Return Users where one of the related Components match this filter */
  components_SINGLE?: InputMaybe<ComponentWhere>
  /** Return Users where some of the related Components match this filter */
  components_SOME?: InputMaybe<ComponentWhere>
  elementsAggregate?: InputMaybe<UserElementsAggregateInput>
  /** Return Users where all of the related UserElementsConnections match this filter */
  elementsConnection_ALL?: InputMaybe<UserElementsConnectionWhere>
  /** Return Users where none of the related UserElementsConnections match this filter */
  elementsConnection_NONE?: InputMaybe<UserElementsConnectionWhere>
  /** Return Users where one of the related UserElementsConnections match this filter */
  elementsConnection_SINGLE?: InputMaybe<UserElementsConnectionWhere>
  /** Return Users where some of the related UserElementsConnections match this filter */
  elementsConnection_SOME?: InputMaybe<UserElementsConnectionWhere>
  /** Return Users where all of the related Elements match this filter */
  elements_ALL?: InputMaybe<ElementWhere>
  /** Return Users where none of the related Elements match this filter */
  elements_NONE?: InputMaybe<ElementWhere>
  /** Return Users where one of the related Elements match this filter */
  elements_SINGLE?: InputMaybe<ElementWhere>
  /** Return Users where some of the related Elements match this filter */
  elements_SOME?: InputMaybe<ElementWhere>
  email?: InputMaybe<Scalars['String']['input']>
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>
  email_MATCHES?: InputMaybe<Scalars['String']['input']>
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>
  id_MATCHES?: InputMaybe<Scalars['String']['input']>
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>
  roles?: InputMaybe<Array<Role>>
  roles_INCLUDES?: InputMaybe<Role>
  tagsAggregate?: InputMaybe<UserTagsAggregateInput>
  /** Return Users where all of the related UserTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<UserTagsConnectionWhere>
  /** Return Users where none of the related UserTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<UserTagsConnectionWhere>
  /** Return Users where one of the related UserTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<UserTagsConnectionWhere>
  /** Return Users where some of the related UserTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<UserTagsConnectionWhere>
  /** Return Users where all of the related Tags match this filter */
  tags_ALL?: InputMaybe<TagWhere>
  /** Return Users where none of the related Tags match this filter */
  tags_NONE?: InputMaybe<TagWhere>
  /** Return Users where one of the related Tags match this filter */
  tags_SINGLE?: InputMaybe<TagWhere>
  /** Return Users where some of the related Tags match this filter */
  tags_SOME?: InputMaybe<TagWhere>
  typesAggregate?: InputMaybe<UserTypesAggregateInput>
  /** Return Users where all of the related UserTypesConnections match this filter */
  typesConnection_ALL?: InputMaybe<UserTypesConnectionWhere>
  /** Return Users where none of the related UserTypesConnections match this filter */
  typesConnection_NONE?: InputMaybe<UserTypesConnectionWhere>
  /** Return Users where one of the related UserTypesConnections match this filter */
  typesConnection_SINGLE?: InputMaybe<UserTypesConnectionWhere>
  /** Return Users where some of the related UserTypesConnections match this filter */
  typesConnection_SOME?: InputMaybe<UserTypesConnectionWhere>
  /** Return Users where all of the related BaseTypes match this filter */
  types_ALL?: InputMaybe<BaseTypeWhere>
  /** Return Users where none of the related BaseTypes match this filter */
  types_NONE?: InputMaybe<BaseTypeWhere>
  /** Return Users where one of the related BaseTypes match this filter */
  types_SINGLE?: InputMaybe<BaseTypeWhere>
  /** Return Users where some of the related BaseTypes match this filter */
  types_SOME?: InputMaybe<BaseTypeWhere>
  username?: InputMaybe<Scalars['String']['input']>
  username_CONTAINS?: InputMaybe<Scalars['String']['input']>
  username_ENDS_WITH?: InputMaybe<Scalars['String']['input']>
  username_IN?: InputMaybe<Array<Scalars['String']['input']>>
  username_MATCHES?: InputMaybe<Scalars['String']['input']>
  username_STARTS_WITH?: InputMaybe<Scalars['String']['input']>
}

export type UsersConnection = {
  __typename?: 'UsersConnection'
  edges: Array<UserEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type VercelDomainConfig = {
  __typename?: 'VercelDomainConfig'
  misconfigured: Scalars['Boolean']['output']
}

export type VercelProjectDomain = {
  __typename?: 'VercelProjectDomain'
  verified: Scalars['Boolean']['output']
}

export type WithDescendants = {
  descendantTypesIds: Array<Scalars['ID']['output']>
}

export type WithOwner = {
  owner: User
  ownerConnection: WithOwnerOwnerConnection
}

export type WithOwnerOwnerConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input']
  where?: InputMaybe<UserConnectWhere>
}

export type WithOwnerOwnerConnectOrCreateFieldInput = {
  onCreate: WithOwnerOwnerConnectOrCreateFieldInputOnCreate
  where: UserConnectOrCreateWhere
}

export type WithOwnerOwnerConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput
}

export type WithOwnerOwnerConnection = {
  __typename?: 'WithOwnerOwnerConnection'
  edges: Array<WithOwnerOwnerRelationship>
  pageInfo: PageInfo
  totalCount: Scalars['Int']['output']
}

export type WithOwnerOwnerConnectionSort = {
  node?: InputMaybe<UserSort>
}

export type WithOwnerOwnerConnectionWhere = {
  AND?: InputMaybe<Array<WithOwnerOwnerConnectionWhere>>
  NOT?: InputMaybe<WithOwnerOwnerConnectionWhere>
  OR?: InputMaybe<Array<WithOwnerOwnerConnectionWhere>>
  node?: InputMaybe<UserWhere>
}

export type WithOwnerOwnerCreateFieldInput = {
  node: UserCreateInput
}

export type WithOwnerOwnerDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>
  where?: InputMaybe<WithOwnerOwnerConnectionWhere>
}

export type WithOwnerOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>
  where?: InputMaybe<WithOwnerOwnerConnectionWhere>
}

export type WithOwnerOwnerFieldInput = {
  connect?: InputMaybe<WithOwnerOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<WithOwnerOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<WithOwnerOwnerCreateFieldInput>
}

export type WithOwnerOwnerRelationship = {
  __typename?: 'WithOwnerOwnerRelationship'
  cursor: Scalars['String']['output']
  node: User
}

export type WithOwnerOwnerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>
}

export type WithOwnerOwnerUpdateFieldInput = {
  connect?: InputMaybe<WithOwnerOwnerConnectFieldInput>
  connectOrCreate?: InputMaybe<WithOwnerOwnerConnectOrCreateFieldInput>
  create?: InputMaybe<WithOwnerOwnerCreateFieldInput>
  delete?: InputMaybe<WithOwnerOwnerDeleteFieldInput>
  disconnect?: InputMaybe<WithOwnerOwnerDisconnectFieldInput>
  update?: InputMaybe<WithOwnerOwnerUpdateConnectionInput>
  where?: InputMaybe<WithOwnerOwnerConnectionWhere>
}

type BaseAction_ApiAction_Fragment = {
  __typename: 'ApiAction'
  id: string
  name: string
  type: ActionKind
  store: { __typename?: 'Store'; id: string; name: string }
}

type BaseAction_CodeAction_Fragment = {
  __typename: 'CodeAction'
  id: string
  name: string
  type: ActionKind
  store: { __typename?: 'Store'; id: string; name: string }
}

export type BaseActionFragment =
  | BaseAction_ApiAction_Fragment
  | BaseAction_CodeAction_Fragment

type Action_ApiAction_Fragment = {
  __typename?: 'ApiAction'
} & ApiActionFragment &
  BaseAction_ApiAction_Fragment

type Action_CodeAction_Fragment = {
  __typename?: 'CodeAction'
} & CodeActionFragment &
  BaseAction_CodeAction_Fragment

export type ActionFragment =
  | Action_ApiAction_Fragment
  | Action_CodeAction_Fragment

export type ApiActionFragment = {
  __typename?: 'ApiAction'
  successAction?:
    | ({ __typename?: 'ApiAction' } & BaseAction_ApiAction_Fragment)
    | ({ __typename?: 'CodeAction' } & BaseAction_CodeAction_Fragment)
    | null
  errorAction?:
    | ({ __typename?: 'ApiAction' } & BaseAction_ApiAction_Fragment)
    | ({ __typename?: 'CodeAction' } & BaseAction_CodeAction_Fragment)
    | null
  resource: { __typename?: 'Resource' } & ResourceFragment
  config: { __typename?: 'Prop'; id: string; data: string }
} & BaseAction_ApiAction_Fragment

export type CodeActionFragment = {
  __typename?: 'CodeAction'
  code: string
} & BaseAction_CodeAction_Fragment

export type AppPreviewFragment = {
  __typename?: 'App'
  id: string
  name: string
  slug: string
  owner: { __typename?: 'User' } & OwnerFragment
  pages: Array<{ __typename?: 'Page'; id: string }>
}

export type AppFragment = {
  __typename?: 'App'
  id: string
  name: string
  slug: string
  owner: { __typename?: 'User' } & OwnerFragment
  pages: Array<{ __typename?: 'Page' } & PageFragment>
  domains: Array<{ __typename?: 'Domain' } & DomainFragment>
}

export type PageBuilderAppFragment = {
  __typename?: 'App'
  id: string
  name: string
  slug: string
  owner: { __typename?: 'User' } & OwnerFragment
  pages: Array<{ __typename?: 'Page' } & BuilderPageFragment>
}

export type AtomFragment = {
  __typename?: 'Atom'
  icon?: string | null
  id: string
  name: string
  type: AtomType
  externalCssSource?: string | null
  externalJsSource?: string | null
  externalSourceType?: string | null
  owner: { __typename?: 'User' } & OwnerFragment
  tags: Array<{ __typename?: 'Tag' } & TagFragment>
  api: { __typename?: 'InterfaceType' } & InterfaceTypeFragment
  suggestedChildren: Array<{
    __typename?: 'Atom'
    id: string
    name: string
    type: AtomType
  }>
  requiredParents: Array<{
    __typename?: 'Atom'
    id: string
    name: string
    type: AtomType
  }>
}

export type RenderAtomFragment = {
  __typename?: 'Atom'
  icon?: string | null
  id: string
  name: string
  type: AtomType
}

export type RenderedComponentFragment = {
  __typename?: 'Component'
  rootElement: {
    __typename?: 'Element'
    descendantElements: Array<{ __typename?: 'Element' } & ElementFragment>
  } & ElementFragment
} & ComponentFragment

export type ComponentFragment = {
  __typename?: 'Component'
  id: string
  name: string
  keyGenerator?: string | null
  rootElement: { __typename?: 'Element'; id: string; name: string }
  owner: { __typename?: 'User' } & OwnerFragment
  api: { __typename?: 'InterfaceType' } & InterfaceTypeFragment
  props: { __typename?: 'Prop' } & PropFragment
  childrenContainerElement: { __typename?: 'Element'; id: string }
  store: { __typename?: 'Store' } & StoreFragment
}

export type DomainFragment = {
  __typename?: 'Domain'
  id: string
  name: string
  app: { __typename?: 'App'; id: string }
  domainConfig: { __typename?: 'VercelDomainConfig'; misconfigured: boolean }
  projectDomain: { __typename?: 'VercelProjectDomain'; verified: boolean }
}

export type ElementFragment = {
  __typename: 'Element'
  id: string
  name: string
  customCss?: string | null
  guiCss?: string | null
  childMapperPropKey?: string | null
  renderForEachPropKey?: string | null
  renderIfExpression?: string | null
  propTransformationJs?: string | null
  page?: { __typename?: 'Page'; id: string } | null
  renderComponentType?: { __typename?: 'Component'; id: string } | null
  renderAtomType?: ({ __typename?: 'Atom' } & AtomFragment) | null
  renderType?: {
    __typename?: 'RenderType'
    id: string
    kind: RenderTypeKind
  } | null
  prevSibling?: { __typename?: 'Element'; id: string } | null
  nextSibling?: { __typename?: 'Element'; id: string } | null
  parentComponent?: { __typename?: 'Component'; id: string } | null
  parent?: { __typename?: 'Element'; id: string } | null
  firstChild?: { __typename?: 'Element'; id: string } | null
  props: { __typename?: 'Prop' } & PropFragment
  childMapperPreviousSibling?: { __typename?: 'Element'; id: string } | null
  childMapperComponent?: {
    __typename?: 'Component'
    id: string
    name: string
  } | null
  preRenderAction?:
    | { __typename?: 'ApiAction'; id: string; type: ActionKind }
    | { __typename?: 'CodeAction'; id: string; type: ActionKind }
    | null
  postRenderAction?:
    | { __typename?: 'ApiAction'; id: string; type: ActionKind }
    | { __typename?: 'CodeAction'; id: string; type: ActionKind }
    | null
}

export type HookPropFragment = { __typename?: 'Prop'; id: string; data: string }

export type HookFragment = {
  __typename?: 'Hook'
  id: string
  type: AtomType
  config: { __typename?: 'Prop' } & HookPropFragment
  element: { __typename?: 'Element'; id: string; name: string }
}

export type PageFragment = {
  __typename?: 'Page'
  id: string
  name: string
  slug: string
  kind: PageKind
  url: string
  app: { __typename?: 'App'; id: string }
  rootElement: {
    __typename?: 'Element'
    descendantElements: Array<{ __typename?: 'Element' } & ElementFragment>
  } & ElementFragment
  pageContentContainer?: { __typename?: 'Element'; id: string } | null
  store: { __typename?: 'Store' } & StoreFragment
}

export type BuilderPageFragment = {
  __typename?: 'Page'
  id: string
  name: string
  slug: string
  kind: PageKind
  url: string
  rootElement: {
    __typename?: 'Element'
    descendantElements: Array<{ __typename?: 'Element' } & ElementFragment>
  } & ElementFragment
  app: { __typename?: 'App'; id: string }
  store: { __typename?: 'Store' } & StoreFragment
  pageContentContainer?: { __typename?: 'Element'; id: string } | null
}

export type PropFragment = { __typename?: 'Prop'; id: string; data: string }

export type ResourceFragment = {
  __typename?: 'Resource'
  id: string
  name: string
  type: ResourceType
  config: { __typename?: 'Prop' } & PropFragment
  owner: { __typename?: 'User'; id: string; auth0Id: string }
}

export type StoreFragment = {
  __typename?: 'Store'
  id: string
  name: string
  api: { __typename?: 'InterfaceType' } & InterfaceTypeFragment
  component?: { __typename?: 'Component'; id: string } | null
  page?: { __typename?: 'Page'; id: string } | null
  actions: Array<
    | ({ __typename?: 'ApiAction' } & Action_ApiAction_Fragment)
    | ({ __typename?: 'CodeAction' } & Action_CodeAction_Fragment)
  >
}

export type TagFragment = {
  __typename?: 'Tag'
  id: string
  name: string
  isRoot?: boolean | null
  parent?: { __typename?: 'Tag'; id: string } | null
  children: Array<{ __typename?: 'Tag'; id: string }>
  descendants: Array<{ __typename?: 'Tag'; id: string }>
  owner: { __typename?: 'User' } & OwnerFragment
}

export type TagPreviewFragment = {
  __typename?: 'Tag'
  id: string
  name: string
}

export type ActionTypeFragment = {
  __typename?: 'ActionType'
} & BaseType_ActionType_Fragment

export type AppTypeFragment = {
  __typename?: 'AppType'
} & BaseType_AppType_Fragment

export type ArrayTypeFragment = {
  __typename?: 'ArrayType'
  itemType:
    | { __typename?: 'ActionType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'AppType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'ArrayType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'BaseType'; id: string; name: string; kind: TypeKind }
    | {
        __typename?: 'CodeMirrorType'
        id: string
        name: string
        kind: TypeKind
      }
    | { __typename?: 'ElementType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'EnumType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'InterfaceType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'LambdaType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'PageType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'PrimitiveType'; id: string; name: string; kind: TypeKind }
    | { __typename?: 'ReactNodeType'; id: string; name: string; kind: TypeKind }
    | {
        __typename?: 'RenderPropType'
        id: string
        name: string
        kind: TypeKind
      }
    | { __typename?: 'UnionType'; id: string; name: string; kind: TypeKind }
} & BaseType_ArrayType_Fragment

type BaseType_ActionType_Fragment = {
  __typename: 'ActionType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_AppType_Fragment = {
  __typename: 'AppType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_ArrayType_Fragment = {
  __typename: 'ArrayType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_BaseType_Fragment = {
  __typename: 'BaseType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_CodeMirrorType_Fragment = {
  __typename: 'CodeMirrorType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_ElementType_Fragment = {
  __typename: 'ElementType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_EnumType_Fragment = {
  __typename: 'EnumType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_InterfaceType_Fragment = {
  __typename: 'InterfaceType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_LambdaType_Fragment = {
  __typename: 'LambdaType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_PageType_Fragment = {
  __typename: 'PageType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_PrimitiveType_Fragment = {
  __typename: 'PrimitiveType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_ReactNodeType_Fragment = {
  __typename: 'ReactNodeType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_RenderPropType_Fragment = {
  __typename: 'RenderPropType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

type BaseType_UnionType_Fragment = {
  __typename: 'UnionType'
  kind: TypeKind
  id: string
  name: string
  owner: { __typename?: 'User' } & OwnerFragment
}

export type BaseTypeFragment =
  | BaseType_ActionType_Fragment
  | BaseType_AppType_Fragment
  | BaseType_ArrayType_Fragment
  | BaseType_BaseType_Fragment
  | BaseType_CodeMirrorType_Fragment
  | BaseType_ElementType_Fragment
  | BaseType_EnumType_Fragment
  | BaseType_InterfaceType_Fragment
  | BaseType_LambdaType_Fragment
  | BaseType_PageType_Fragment
  | BaseType_PrimitiveType_Fragment
  | BaseType_ReactNodeType_Fragment
  | BaseType_RenderPropType_Fragment
  | BaseType_UnionType_Fragment

export type CodeMirrorTypeFragment = {
  __typename?: 'CodeMirrorType'
  language: CodeMirrorLanguage
} & BaseType_CodeMirrorType_Fragment

export type ElementTypeFragment = {
  __typename?: 'ElementType'
  elementKind: ElementTypeKind
} & BaseType_ElementType_Fragment

export type EnumTypeValueFragment = {
  __typename?: 'EnumTypeValue'
  id: string
  key: string
  value: string
}

export type EnumTypeFragment = {
  __typename?: 'EnumType'
  allowedValues: Array<{ __typename?: 'EnumTypeValue' } & EnumTypeValueFragment>
} & BaseType_EnumType_Fragment

export type FieldFragment = {
  __typename?: 'Field'
  id: string
  key: string
  name?: string | null
  description?: string | null
  validationRules?: string | null
  defaultValues?: string | null
  prevSibling?: { __typename?: 'Field'; id: string } | null
  nextSibling?: { __typename?: 'Field'; id: string } | null
  fieldType:
    | { __typename: 'ActionType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'AppType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'ArrayType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'BaseType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'CodeMirrorType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'ElementType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'EnumType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'InterfaceType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'LambdaType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'PageType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'PrimitiveType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'ReactNodeType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'RenderPropType'; id: string; kind: TypeKind; name: string }
    | { __typename: 'UnionType'; id: string; kind: TypeKind; name: string }
  api: { __typename?: 'InterfaceType'; id: string }
}

export type InterfaceTypeFragment = {
  __typename?: 'InterfaceType'
  fields: Array<{ __typename?: 'Field' } & FieldFragment>
} & BaseType_InterfaceType_Fragment

export type LambdaTypeFragment = {
  __typename?: 'LambdaType'
} & BaseType_LambdaType_Fragment

export type PageTypeFragment = {
  __typename?: 'PageType'
} & BaseType_PageType_Fragment

export type PrimitiveTypeFragment = {
  __typename?: 'PrimitiveType'
  primitiveKind: PrimitiveTypeKind
} & BaseType_PrimitiveType_Fragment

export type ReactNodeTypeFragment = {
  __typename?: 'ReactNodeType'
} & BaseType_ReactNodeType_Fragment

export type RenderPropTypeFragment = {
  __typename?: 'RenderPropType'
} & BaseType_RenderPropType_Fragment

type Type_ActionType_Fragment = {
  __typename?: 'ActionType'
} & ActionTypeFragment

type Type_AppType_Fragment = { __typename?: 'AppType' } & AppTypeFragment

type Type_ArrayType_Fragment = { __typename?: 'ArrayType' } & ArrayTypeFragment

type Type_BaseType_Fragment = { __typename?: 'BaseType' }

type Type_CodeMirrorType_Fragment = {
  __typename?: 'CodeMirrorType'
} & CodeMirrorTypeFragment

type Type_ElementType_Fragment = {
  __typename?: 'ElementType'
} & ElementTypeFragment

type Type_EnumType_Fragment = { __typename?: 'EnumType' } & EnumTypeFragment

type Type_InterfaceType_Fragment = {
  __typename?: 'InterfaceType'
} & InterfaceTypeFragment

type Type_LambdaType_Fragment = {
  __typename?: 'LambdaType'
} & LambdaTypeFragment

type Type_PageType_Fragment = { __typename?: 'PageType' } & PageTypeFragment

type Type_PrimitiveType_Fragment = {
  __typename?: 'PrimitiveType'
} & PrimitiveTypeFragment

type Type_ReactNodeType_Fragment = {
  __typename?: 'ReactNodeType'
} & ReactNodeTypeFragment

type Type_RenderPropType_Fragment = {
  __typename?: 'RenderPropType'
} & RenderPropTypeFragment

type Type_UnionType_Fragment = { __typename?: 'UnionType' } & UnionTypeFragment

export type TypeFragment =
  | Type_ActionType_Fragment
  | Type_AppType_Fragment
  | Type_ArrayType_Fragment
  | Type_BaseType_Fragment
  | Type_CodeMirrorType_Fragment
  | Type_ElementType_Fragment
  | Type_EnumType_Fragment
  | Type_InterfaceType_Fragment
  | Type_LambdaType_Fragment
  | Type_PageType_Fragment
  | Type_PrimitiveType_Fragment
  | Type_ReactNodeType_Fragment
  | Type_RenderPropType_Fragment
  | Type_UnionType_Fragment

export type UnionTypeFragment = {
  __typename?: 'UnionType'
  typesOfUnionType: Array<
    | { __typename?: 'ActionType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'AppType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'ArrayType'; id: string; kind: TypeKind; name: string }
    | {
        __typename?: 'CodeMirrorType'
        id: string
        kind: TypeKind
        name: string
      }
    | { __typename?: 'ElementType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'EnumType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'InterfaceType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'LambdaType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'PageType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'PrimitiveType'; id: string; kind: TypeKind; name: string }
    | { __typename?: 'ReactNodeType'; id: string; kind: TypeKind; name: string }
    | {
        __typename?: 'RenderPropType'
        id: string
        kind: TypeKind
        name: string
      }
    | { __typename?: 'UnionType'; id: string; kind: TypeKind; name: string }
  >
} & BaseType_UnionType_Fragment

export type OwnerFragment = { __typename?: 'User'; auth0Id: string }

export type UserFragment = {
  __typename?: 'User'
  id: string
  username: string
  email: string
  auth0Id: string
  roles?: Array<Role> | null
  apps: Array<{ __typename?: 'App' } & AppFragment>
}

export type ResetDatabaseMutationVariables = Exact<{ [key: string]: never }>

export type ResetDatabaseMutation = {
  __typename?: 'Mutation'
  resetDatabase?: {
    __typename?: 'ResetDatabaseMutationResponse'
    success?: boolean | null
  } | null
}

export type CreateAppsMutationVariables = Exact<{
  input: Array<AppCreateInput> | AppCreateInput
}>

export type CreateAppsMutation = {
  __typename?: 'Mutation'
  createApps: {
    __typename?: 'CreateAppsMutationResponse'
    apps: Array<{ __typename?: 'App'; id: string }>
  }
}

export type UpdateAppsMutationVariables = Exact<{
  where: AppWhere
  update: AppUpdateInput
}>

export type UpdateAppsMutation = {
  __typename?: 'Mutation'
  updateApps: {
    __typename?: 'UpdateAppsMutationResponse'
    apps: Array<{ __typename?: 'App'; id: string }>
  }
}

export type DeleteAppsMutationVariables = Exact<{
  where: AppWhere
  delete?: InputMaybe<AppDeleteInput>
}>

export type DeleteAppsMutation = {
  __typename?: 'Mutation'
  deleteApps: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type GetAppsQueryVariables = Exact<{
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}>

export type GetAppsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'AppAggregateSelection'; count: number }
  items: Array<{ __typename?: 'App' } & AppFragment>
}

export type CreateAtomsMutationVariables = Exact<{
  input: Array<AtomCreateInput> | AtomCreateInput
}>

export type CreateAtomsMutation = {
  __typename?: 'Mutation'
  createAtoms: {
    __typename?: 'CreateAtomsMutationResponse'
    info: {
      __typename?: 'CreateInfo'
      nodesCreated: number
      relationshipsCreated: number
    }
    atoms: Array<{ __typename?: 'Atom'; id: string }>
  }
}

export type DeleteAtomsMutationVariables = Exact<{
  where: AtomWhere
}>

export type DeleteAtomsMutation = {
  __typename?: 'Mutation'
  deleteAtoms: {
    __typename?: 'DeleteInfo'
    nodesDeleted: number
    relationshipsDeleted: number
  }
}

export type GetAtomsQueryVariables = Exact<{
  where?: InputMaybe<AtomWhere>
  options?: InputMaybe<AtomOptions>
}>

export type GetAtomsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'AtomAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Atom' } & AtomFragment>
}

export type GetAtomOptionsQueryVariables = Exact<{ [key: string]: never }>

export type GetAtomOptionsQuery = {
  __typename?: 'Query'
  atoms: Array<{
    __typename?: 'Atom'
    id: string
    name: string
    type: AtomType
  }>
}

export type UpdateAtomsMutationVariables = Exact<{
  where?: InputMaybe<AtomWhere>
  update?: InputMaybe<AtomUpdateInput>
}>

export type UpdateAtomsMutation = {
  __typename?: 'Mutation'
  updateAtoms: {
    __typename?: 'UpdateAtomsMutationResponse'
    atoms: Array<{ __typename?: 'Atom'; id: string }>
  }
}

export type CreateComponentsMutationVariables = Exact<{
  input: Array<ComponentCreateInput> | ComponentCreateInput
}>

export type CreateComponentsMutation = {
  __typename?: 'Mutation'
  createComponents: {
    __typename?: 'CreateComponentsMutationResponse'
    components: Array<{ __typename?: 'Component'; id: string }>
  }
}

export type DeleteComponentsMutationVariables = Exact<{
  where?: InputMaybe<ComponentWhere>
  delete?: InputMaybe<ComponentDeleteInput>
}>

export type DeleteComponentsMutation = {
  __typename?: 'Mutation'
  deleteComponents: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type UpdateComponentsMutationVariables = Exact<{
  where?: InputMaybe<ComponentWhere>
  update?: InputMaybe<ComponentUpdateInput>
}>

export type UpdateComponentsMutation = {
  __typename?: 'Mutation'
  updateComponents: {
    __typename?: 'UpdateComponentsMutationResponse'
    components: Array<{ __typename?: 'Component'; id: string }>
  }
}

export type GetComponentsQueryVariables = Exact<{
  options?: InputMaybe<ComponentOptions>
  where?: InputMaybe<ComponentWhere>
}>

export type GetComponentsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'ComponentAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Component' } & RenderedComponentFragment>
}

export type GetDomainsQueryVariables = Exact<{
  options?: InputMaybe<DomainOptions>
  where?: InputMaybe<DomainWhere>
}>

export type GetDomainsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'DomainAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Domain' } & DomainFragment>
}

export type CreateDomainsMutationVariables = Exact<{
  input: Array<DomainCreateInput> | DomainCreateInput
}>

export type CreateDomainsMutation = {
  __typename?: 'Mutation'
  createDomains: {
    __typename?: 'CreateDomainsMutationResponse'
    domains: Array<{ __typename?: 'Domain'; id: string }>
  }
}

export type UpdateDomainsMutationVariables = Exact<{
  where: DomainWhere
  update: DomainUpdateInput
}>

export type UpdateDomainsMutation = {
  __typename?: 'Mutation'
  updateDomains: {
    __typename?: 'UpdateDomainsMutationResponse'
    domains: Array<{ __typename?: 'Domain'; id: string }>
  }
}

export type DeleteDomainsMutationVariables = Exact<{
  where: DomainWhere
}>

export type DeleteDomainsMutation = {
  __typename?: 'Mutation'
  deleteDomains: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type CreateElementsMutationVariables = Exact<{
  input: Array<ElementCreateInput> | ElementCreateInput
}>

export type CreateElementsMutation = {
  __typename?: 'Mutation'
  createElements: {
    __typename?: 'CreateElementsMutationResponse'
    elements: Array<{ __typename?: 'Element'; id: string }>
  }
}

export type DeleteElementsMutationVariables = Exact<{
  where: ElementWhere
  delete?: InputMaybe<ElementDeleteInput>
}>

export type DeleteElementsMutation = {
  __typename?: 'Mutation'
  deleteElements: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type UpdateElementsMutationVariables = Exact<{
  where?: InputMaybe<ElementWhere>
  update?: InputMaybe<ElementUpdateInput>
}>

export type UpdateElementsMutation = {
  __typename?: 'Mutation'
  updateElements: {
    __typename?: 'UpdateElementsMutationResponse'
    elements: Array<{ __typename?: 'Element'; id: string }>
  }
}

export type GetElementsQueryVariables = Exact<{
  options?: InputMaybe<ElementOptions>
  where?: InputMaybe<ElementWhere>
}>

export type GetElementsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'ElementAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Element' } & ElementFragment>
}

export type CreateHooksMutationVariables = Exact<{
  input: Array<HookCreateInput> | HookCreateInput
}>

export type CreateHooksMutation = {
  __typename?: 'Mutation'
  createHooks: {
    __typename?: 'CreateHooksMutationResponse'
    hooks: Array<{ __typename?: 'Hook' } & HookFragment>
  }
}

export type DeleteHooksMutationVariables = Exact<{
  where: HookWhere
}>

export type DeleteHooksMutation = {
  __typename?: 'Mutation'
  deleteHooks: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type CreatePagesMutationVariables = Exact<{
  input: Array<PageCreateInput> | PageCreateInput
}>

export type CreatePagesMutation = {
  __typename?: 'Mutation'
  createPages: {
    __typename?: 'CreatePagesMutationResponse'
    pages: Array<{ __typename?: 'Page'; id: string }>
  }
}

export type DeletePagesMutationVariables = Exact<{
  where?: InputMaybe<PageWhere>
  delete?: InputMaybe<PageDeleteInput>
}>

export type DeletePagesMutation = {
  __typename?: 'Mutation'
  deletePages: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type UpdatePagesMutationVariables = Exact<{
  where?: InputMaybe<PageWhere>
  update?: InputMaybe<PageUpdateInput>
}>

export type UpdatePagesMutation = {
  __typename?: 'Mutation'
  updatePages: {
    __typename?: 'UpdatePagesMutationResponse'
    pages: Array<{ __typename?: 'Page'; id: string }>
  }
}

export type GetPagesQueryVariables = Exact<{
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}>

export type GetPagesQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'PageAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Page' } & PageFragment>
}

export type GetRenderedPageAndCommonAppDataQueryVariables = Exact<{
  appName: Scalars['String']['input']
  pageName: Scalars['String']['input']
}>

export type GetRenderedPageAndCommonAppDataQuery = {
  __typename?: 'Query'
  apps: Array<{ __typename?: 'App' } & PageBuilderAppFragment>
  resources: Array<{ __typename?: 'Resource' } & ResourceFragment>
}

export type GetRenderedPageQueryVariables = Exact<{
  pageId: Scalars['ID']['input']
}>

export type GetRenderedPageQuery = {
  __typename?: 'Query'
  pages: Array<{ __typename?: 'Page' } & BuilderPageFragment>
}

export type CreatePropsMutationVariables = Exact<{
  input: Array<PropCreateInput> | PropCreateInput
}>

export type CreatePropsMutation = {
  __typename?: 'Mutation'
  createProps: {
    __typename?: 'CreatePropsMutationResponse'
    props: Array<{ __typename?: 'Prop'; id: string }>
  }
}

export type UpdatePropsMutationVariables = Exact<{
  where?: InputMaybe<PropWhere>
  update?: InputMaybe<PropUpdateInput>
}>

export type UpdatePropsMutation = {
  __typename?: 'Mutation'
  updateProps: {
    __typename?: 'UpdatePropsMutationResponse'
    props: Array<{ __typename?: 'Prop'; id: string }>
  }
}

export type DeletePropsMutationVariables = Exact<{
  where: PropWhere
}>

export type DeletePropsMutation = {
  __typename?: 'Mutation'
  deleteProps: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type GetPropsQueryVariables = Exact<{
  options?: InputMaybe<PropOptions>
  where?: InputMaybe<PropWhere>
}>

export type GetPropsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'PropAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Prop' } & PropFragment>
}

export type GetResourcesQueryVariables = Exact<{
  options?: InputMaybe<ResourceOptions>
  where?: InputMaybe<ResourceWhere>
}>

export type GetResourcesQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'ResourceAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Resource' } & ResourceFragment>
}

export type CreateResourcesMutationVariables = Exact<{
  input: Array<ResourceCreateInput> | ResourceCreateInput
}>

export type CreateResourcesMutation = {
  __typename?: 'Mutation'
  createResources: {
    __typename?: 'CreateResourcesMutationResponse'
    resources: Array<{ __typename?: 'Resource'; id: string }>
  }
}

export type UpdateResourceMutationVariables = Exact<{
  where?: InputMaybe<ResourceWhere>
  update?: InputMaybe<ResourceUpdateInput>
}>

export type UpdateResourceMutation = {
  __typename?: 'Mutation'
  updateResources: {
    __typename?: 'UpdateResourcesMutationResponse'
    resources: Array<{ __typename?: 'Resource'; id: string }>
  }
}

export type DeleteResourcesMutationVariables = Exact<{
  where?: InputMaybe<ResourceWhere>
}>

export type DeleteResourcesMutation = {
  __typename?: 'Mutation'
  deleteResources: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type CreateCodeActionsMutationVariables = Exact<{
  input: Array<CodeActionCreateInput> | CodeActionCreateInput
}>

export type CreateCodeActionsMutation = {
  __typename?: 'Mutation'
  createCodeActions: {
    __typename?: 'CreateCodeActionsMutationResponse'
    codeActions: Array<{ __typename?: 'CodeAction'; id: string }>
  }
}

export type CreateApiActionsMutationVariables = Exact<{
  input: Array<ApiActionCreateInput> | ApiActionCreateInput
}>

export type CreateApiActionsMutation = {
  __typename?: 'Mutation'
  createApiActions: {
    __typename?: 'CreateApiActionsMutationResponse'
    apiActions: Array<{ __typename?: 'ApiAction'; id: string }>
  }
}

export type DeleteCodeActionsMutationVariables = Exact<{
  where: CodeActionWhere
  delete?: InputMaybe<CodeActionDeleteInput>
}>

export type DeleteCodeActionsMutation = {
  __typename?: 'Mutation'
  deleteCodeActions: {
    __typename?: 'DeleteInfo'
    nodesDeleted: number
    relationshipsDeleted: number
  }
}

export type DeleteApiActionsMutationVariables = Exact<{
  where: ApiActionWhere
  delete?: InputMaybe<ApiActionDeleteInput>
}>

export type DeleteApiActionsMutation = {
  __typename?: 'Mutation'
  deleteApiActions: {
    __typename?: 'DeleteInfo'
    nodesDeleted: number
    relationshipsDeleted: number
  }
}

export type GetActionsQueryVariables = Exact<{
  codeActionWhere?: InputMaybe<CodeActionWhere>
  apiActionWhere?: InputMaybe<ApiActionWhere>
}>

export type GetActionsQuery = {
  __typename?: 'Query'
  codeActions: Array<{ __typename?: 'CodeAction' } & Action_CodeAction_Fragment>
  apiActions: Array<{ __typename?: 'ApiAction' } & Action_ApiAction_Fragment>
}

export type CreateStoresMutationVariables = Exact<{
  input: Array<StoreCreateInput> | StoreCreateInput
}>

export type CreateStoresMutation = {
  __typename?: 'Mutation'
  createStores: {
    __typename?: 'CreateStoresMutationResponse'
    info: {
      __typename?: 'CreateInfo'
      nodesCreated: number
      relationshipsCreated: number
    }
    stores: Array<{ __typename?: 'Store'; id: string }>
  }
}

export type DeleteStoresMutationVariables = Exact<{
  where?: InputMaybe<StoreWhere>
  delete?: InputMaybe<StoreDeleteInput>
}>

export type DeleteStoresMutation = {
  __typename?: 'Mutation'
  deleteStores: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type GetStoresQueryVariables = Exact<{
  where?: InputMaybe<StoreWhere>
  options?: InputMaybe<StoreOptions>
}>

export type GetStoresQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'StoreAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Store' } & StoreFragment>
}

export type UpdateStoresMutationVariables = Exact<{
  where?: InputMaybe<StoreWhere>
  update?: InputMaybe<StoreUpdateInput>
}>

export type UpdateStoresMutation = {
  __typename?: 'Mutation'
  updateStores: {
    __typename?: 'UpdateStoresMutationResponse'
    stores: Array<{ __typename?: 'Store'; id: string }>
  }
}

export type UpdateCodeActionsMutationVariables = Exact<{
  connect?: InputMaybe<CodeActionConnectInput>
  create?: InputMaybe<CodeActionRelationInput>
  delete?: InputMaybe<CodeActionDeleteInput>
  disconnect?: InputMaybe<CodeActionDisconnectInput>
  update?: InputMaybe<CodeActionUpdateInput>
  where?: InputMaybe<CodeActionWhere>
}>

export type UpdateCodeActionsMutation = {
  __typename?: 'Mutation'
  updateCodeActions: {
    __typename?: 'UpdateCodeActionsMutationResponse'
    codeActions: Array<{ __typename?: 'CodeAction'; id: string }>
  }
}

export type UpdateApiActionsMutationVariables = Exact<{
  connect?: InputMaybe<ApiActionConnectInput>
  create?: InputMaybe<ApiActionRelationInput>
  delete?: InputMaybe<ApiActionDeleteInput>
  disconnect?: InputMaybe<ApiActionDisconnectInput>
  update?: InputMaybe<ApiActionUpdateInput>
  where?: InputMaybe<ApiActionWhere>
}>

export type UpdateApiActionsMutation = {
  __typename?: 'Mutation'
  updateApiActions: {
    __typename?: 'UpdateApiActionsMutationResponse'
    apiActions: Array<{ __typename?: 'ApiAction'; id: string }>
  }
}

export type CreateTagsMutationVariables = Exact<{
  input: Array<TagCreateInput> | TagCreateInput
}>

export type CreateTagsMutation = {
  __typename?: 'Mutation'
  createTags: {
    __typename?: 'CreateTagsMutationResponse'
    tags: Array<{ __typename?: 'Tag'; id: string }>
  }
}

export type UpdateTagsMutationVariables = Exact<{
  where: TagWhere
  update: TagUpdateInput
}>

export type UpdateTagsMutation = {
  __typename?: 'Mutation'
  updateTags: {
    __typename?: 'UpdateTagsMutationResponse'
    tags: Array<{ __typename?: 'Tag'; id: string }>
  }
}

export type DeleteTagsMutationVariables = Exact<{
  where: TagWhere
}>

export type DeleteTagsMutation = {
  __typename?: 'Mutation'
  deleteTags: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type GetTagsQueryVariables = Exact<{
  options?: InputMaybe<TagOptions>
  where?: InputMaybe<TagWhere>
}>

export type GetTagsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'TagAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Tag' } & TagFragment>
}

export type CreatePrimitiveTypesMutationVariables = Exact<{
  input: Array<PrimitiveTypeCreateInput> | PrimitiveTypeCreateInput
}>

export type CreatePrimitiveTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreatePrimitiveTypesMutationResponse'
    types: Array<{ __typename?: 'PrimitiveType'; id: string }>
  }
}

export type CreateArrayTypesMutationVariables = Exact<{
  input: Array<ArrayTypeCreateInput> | ArrayTypeCreateInput
}>

export type CreateArrayTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateArrayTypesMutationResponse'
    types: Array<{ __typename?: 'ArrayType'; id: string }>
  }
}

export type CreateUnionTypesMutationVariables = Exact<{
  input: Array<UnionTypeCreateInput> | UnionTypeCreateInput
}>

export type CreateUnionTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateUnionTypesMutationResponse'
    types: Array<{ __typename?: 'UnionType'; id: string }>
  }
}

export type CreateInterfaceTypesMutationVariables = Exact<{
  input: Array<InterfaceTypeCreateInput> | InterfaceTypeCreateInput
}>

export type CreateInterfaceTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateInterfaceTypesMutationResponse'
    types: Array<{ __typename?: 'InterfaceType'; id: string }>
  }
}

export type CreateElementTypesMutationVariables = Exact<{
  input: Array<ElementTypeCreateInput> | ElementTypeCreateInput
}>

export type CreateElementTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateElementTypesMutationResponse'
    types: Array<{ __typename?: 'ElementType'; id: string }>
  }
}

export type CreateRenderPropTypesMutationVariables = Exact<{
  input: Array<RenderPropTypeCreateInput> | RenderPropTypeCreateInput
}>

export type CreateRenderPropTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateRenderPropTypesMutationResponse'
    types: Array<{ __typename?: 'RenderPropType'; id: string }>
  }
}

export type CreateReactNodeTypesMutationVariables = Exact<{
  input: Array<ReactNodeTypeCreateInput> | ReactNodeTypeCreateInput
}>

export type CreateReactNodeTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateReactNodeTypesMutationResponse'
    types: Array<{ __typename?: 'ReactNodeType'; id: string }>
  }
}

export type CreateEnumTypesMutationVariables = Exact<{
  input: Array<EnumTypeCreateInput> | EnumTypeCreateInput
}>

export type CreateEnumTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateEnumTypesMutationResponse'
    types: Array<{ __typename?: 'EnumType'; id: string }>
  }
}

export type CreateLambdaTypesMutationVariables = Exact<{
  input: Array<LambdaTypeCreateInput> | LambdaTypeCreateInput
}>

export type CreateLambdaTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateLambdaTypesMutationResponse'
    types: Array<{ __typename?: 'LambdaType'; id: string }>
  }
}

export type CreatePageTypesMutationVariables = Exact<{
  input: Array<PageTypeCreateInput> | PageTypeCreateInput
}>

export type CreatePageTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreatePageTypesMutationResponse'
    types: Array<{ __typename?: 'PageType'; id: string }>
  }
}

export type CreateAppTypesMutationVariables = Exact<{
  input: Array<AppTypeCreateInput> | AppTypeCreateInput
}>

export type CreateAppTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateAppTypesMutationResponse'
    types: Array<{ __typename?: 'AppType'; id: string }>
  }
}

export type CreateActionTypesMutationVariables = Exact<{
  input: Array<ActionTypeCreateInput> | ActionTypeCreateInput
}>

export type CreateActionTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateActionTypesMutationResponse'
    types: Array<{ __typename?: 'ActionType'; id: string }>
  }
}

export type CreateCodeMirrorTypesMutationVariables = Exact<{
  input: Array<CodeMirrorTypeCreateInput> | CodeMirrorTypeCreateInput
}>

export type CreateCodeMirrorTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'CreateCodeMirrorTypesMutationResponse'
    types: Array<{ __typename?: 'CodeMirrorType'; id: string }>
  }
}

export type DeletePrimitiveTypesMutationVariables = Exact<{
  delete?: InputMaybe<PrimitiveTypeDeleteInput>
  where?: InputMaybe<PrimitiveTypeWhere>
}>

export type DeletePrimitiveTypesMutation = {
  __typename?: 'Mutation'
  deletePrimitiveTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteArrayTypesMutationVariables = Exact<{
  delete?: InputMaybe<ArrayTypeDeleteInput>
  where?: InputMaybe<ArrayTypeWhere>
}>

export type DeleteArrayTypesMutation = {
  __typename?: 'Mutation'
  deleteArrayTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteReactNodeTypesMutationVariables = Exact<{
  delete?: InputMaybe<ReactNodeTypeDeleteInput>
  where?: InputMaybe<ReactNodeTypeWhere>
}>

export type DeleteReactNodeTypesMutation = {
  __typename?: 'Mutation'
  deleteReactNodeTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteUnionTypesMutationVariables = Exact<{
  delete?: InputMaybe<UnionTypeDeleteInput>
  where?: InputMaybe<UnionTypeWhere>
}>

export type DeleteUnionTypesMutation = {
  __typename?: 'Mutation'
  deleteUnionTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteInterfaceTypesMutationVariables = Exact<{
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  where?: InputMaybe<InterfaceTypeWhere>
}>

export type DeleteInterfaceTypesMutation = {
  __typename?: 'Mutation'
  deleteInterfaceTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteElementTypesMutationVariables = Exact<{
  delete?: InputMaybe<ElementTypeDeleteInput>
  where?: InputMaybe<ElementTypeWhere>
}>

export type DeleteElementTypesMutation = {
  __typename?: 'Mutation'
  deleteElementTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteRenderPropTypesMutationVariables = Exact<{
  delete?: InputMaybe<RenderPropTypeDeleteInput>
  where?: InputMaybe<RenderPropTypeWhere>
}>

export type DeleteRenderPropTypesMutation = {
  __typename?: 'Mutation'
  deleteRenderPropTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteEnumTypesMutationVariables = Exact<{
  delete?: InputMaybe<EnumTypeDeleteInput>
  where?: InputMaybe<EnumTypeWhere>
}>

export type DeleteEnumTypesMutation = {
  __typename?: 'Mutation'
  deleteEnumTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
  deleteEnumTypeValues: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type DeleteLambdaTypesMutationVariables = Exact<{
  delete?: InputMaybe<LambdaTypeDeleteInput>
  where?: InputMaybe<LambdaTypeWhere>
}>

export type DeleteLambdaTypesMutation = {
  __typename?: 'Mutation'
  deleteLambdaTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeletePageTypesMutationVariables = Exact<{
  delete?: InputMaybe<PageTypeDeleteInput>
  where?: InputMaybe<PageTypeWhere>
}>

export type DeletePageTypesMutation = {
  __typename?: 'Mutation'
  deletePageTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteAppTypesMutationVariables = Exact<{
  delete?: InputMaybe<AppTypeDeleteInput>
  where?: InputMaybe<AppTypeWhere>
}>

export type DeleteAppTypesMutation = {
  __typename?: 'Mutation'
  deleteAppTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteActionTypesMutationVariables = Exact<{
  delete?: InputMaybe<ActionTypeDeleteInput>
  where?: InputMaybe<ActionTypeWhere>
}>

export type DeleteActionTypesMutation = {
  __typename?: 'Mutation'
  deleteActionTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type DeleteCodeMirrorTypesMutationVariables = Exact<{
  delete?: InputMaybe<CodeMirrorTypeDeleteInput>
  where?: InputMaybe<CodeMirrorTypeWhere>
}>

export type DeleteCodeMirrorTypesMutation = {
  __typename?: 'Mutation'
  deleteCodeMirrorTypes: {
    __typename?: 'DeleteInfo'
    relationshipsDeleted: number
    nodesDeleted: number
  }
}

export type CreateFieldsMutationVariables = Exact<{
  input: Array<FieldCreateInput> | FieldCreateInput
}>

export type CreateFieldsMutation = {
  __typename?: 'Mutation'
  createFields: {
    __typename?: 'CreateFieldsMutationResponse'
    fields: Array<{ __typename?: 'Field'; id: string }>
  }
}

export type UpdateFieldsMutationVariables = Exact<{
  where: FieldWhere
  update: FieldUpdateInput
}>

export type UpdateFieldsMutation = {
  __typename?: 'Mutation'
  updateFields: {
    __typename?: 'UpdateFieldsMutationResponse'
    fields: Array<{ __typename?: 'Field'; id: string }>
  }
}

export type DeleteFieldsMutationVariables = Exact<{
  where: FieldWhere
}>

export type DeleteFieldsMutation = {
  __typename?: 'Mutation'
  deleteFields: { __typename?: 'DeleteInfo'; nodesDeleted: number }
}

export type GetFieldsQueryVariables = Exact<{
  where?: InputMaybe<FieldWhere>
  options?: InputMaybe<FieldOptions>
}>

export type GetFieldsQuery = {
  __typename?: 'Query'
  aggregate: { __typename?: 'FieldAggregateSelection'; count: number }
  items: Array<{ __typename?: 'Field' } & FieldFragment>
}

export type GetBaseTypesQueryVariables = Exact<{
  options?: InputMaybe<GetBaseTypesOptions>
}>

export type GetBaseTypesQuery = {
  __typename?: 'Query'
  baseTypes: {
    __typename?: 'GetBaseTypesReturn'
    totalCount: number
    items: Array<{ __typename?: 'BaseType' } & BaseType_BaseType_Fragment>
  }
}

export type GetTypesQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
}>

export type GetTypesQuery = {
  __typename?: 'Query'
  primitiveTypes: Array<
    { __typename?: 'PrimitiveType' } & Type_PrimitiveType_Fragment
  >
  arrayTypes: Array<{ __typename?: 'ArrayType' } & Type_ArrayType_Fragment>
  unionTypes: Array<{ __typename?: 'UnionType' } & Type_UnionType_Fragment>
  interfaceTypes: Array<
    { __typename?: 'InterfaceType' } & Type_InterfaceType_Fragment
  >
  elementTypes: Array<
    { __typename?: 'ElementType' } & Type_ElementType_Fragment
  >
  renderPropTypes: Array<
    { __typename?: 'RenderPropType' } & Type_RenderPropType_Fragment
  >
  reactNodeTypes: Array<
    { __typename?: 'ReactNodeType' } & Type_ReactNodeType_Fragment
  >
  enumTypes: Array<{ __typename?: 'EnumType' } & Type_EnumType_Fragment>
  lambdaTypes: Array<{ __typename?: 'LambdaType' } & Type_LambdaType_Fragment>
  pageTypes: Array<{ __typename?: 'PageType' } & Type_PageType_Fragment>
  appTypes: Array<{ __typename?: 'AppType' } & Type_AppType_Fragment>
  actionTypes: Array<{ __typename?: 'ActionType' } & Type_ActionType_Fragment>
  codeMirrorTypes: Array<
    { __typename?: 'CodeMirrorType' } & Type_CodeMirrorType_Fragment
  >
}

export type GetDescendantsQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>
}>

export type GetDescendantsQuery = {
  __typename?: 'Query'
  arrayTypes: Array<{
    __typename?: 'ArrayType'
    descendantTypesIds: Array<string>
  }>
  unionTypes: Array<{
    __typename?: 'UnionType'
    descendantTypesIds: Array<string>
  }>
  interfaceTypes: Array<{
    __typename?: 'InterfaceType'
    descendantTypesIds: Array<string>
  }>
}

export type GetPrimitiveTypesQueryVariables = Exact<{
  options?: InputMaybe<PrimitiveTypeOptions>
  where?: InputMaybe<PrimitiveTypeWhere>
}>

export type GetPrimitiveTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'PrimitiveType' } & Type_PrimitiveType_Fragment>
}

export type GetArrayTypesQueryVariables = Exact<{
  options?: InputMaybe<ArrayTypeOptions>
  where?: InputMaybe<ArrayTypeWhere>
}>

export type GetArrayTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'ArrayType' } & Type_ArrayType_Fragment>
}

export type GetUnionTypesQueryVariables = Exact<{
  options?: InputMaybe<UnionTypeOptions>
  where?: InputMaybe<UnionTypeWhere>
}>

export type GetUnionTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'UnionType' } & Type_UnionType_Fragment>
}

export type GetInterfaceTypesQueryVariables = Exact<{
  options?: InputMaybe<InterfaceTypeOptions>
  where?: InputMaybe<InterfaceTypeWhere>
}>

export type GetInterfaceTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'InterfaceType' } & Type_InterfaceType_Fragment>
}

export type GetElementTypesQueryVariables = Exact<{
  options?: InputMaybe<ElementTypeOptions>
  where?: InputMaybe<ElementTypeWhere>
}>

export type GetElementTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'ElementType' } & Type_ElementType_Fragment>
}

export type GetRenderPropTypesQueryVariables = Exact<{
  options?: InputMaybe<RenderPropTypeOptions>
  where?: InputMaybe<RenderPropTypeWhere>
}>

export type GetRenderPropTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'RenderPropType' } & Type_RenderPropType_Fragment>
}

export type GetReactNodeTypesQueryVariables = Exact<{
  options?: InputMaybe<ReactNodeTypeOptions>
  where?: InputMaybe<ReactNodeTypeWhere>
}>

export type GetReactNodeTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'ReactNodeType' } & ReactNodeTypeFragment>
}

export type GetEnumTypesQueryVariables = Exact<{
  options?: InputMaybe<EnumTypeOptions>
  where?: InputMaybe<EnumTypeWhere>
}>

export type GetEnumTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'EnumType' } & Type_EnumType_Fragment>
}

export type GetLambdaTypesQueryVariables = Exact<{
  options?: InputMaybe<LambdaTypeOptions>
  where?: InputMaybe<LambdaTypeWhere>
}>

export type GetLambdaTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'LambdaType' } & Type_LambdaType_Fragment>
}

export type GetPageTypesQueryVariables = Exact<{
  options?: InputMaybe<PageTypeOptions>
  where?: InputMaybe<PageTypeWhere>
}>

export type GetPageTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'PageType' } & Type_PageType_Fragment>
}

export type GetAppTypesQueryVariables = Exact<{
  options?: InputMaybe<AppTypeOptions>
  where?: InputMaybe<AppTypeWhere>
}>

export type GetAppTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'AppType' } & Type_AppType_Fragment>
}

export type GetActionTypesQueryVariables = Exact<{
  options?: InputMaybe<ActionTypeOptions>
  where?: InputMaybe<ActionTypeWhere>
}>

export type GetActionTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'ActionType' } & Type_ActionType_Fragment>
}

export type GetCodeMirrorTypesQueryVariables = Exact<{
  options?: InputMaybe<CodeMirrorTypeOptions>
  where?: InputMaybe<CodeMirrorTypeWhere>
}>

export type GetCodeMirrorTypesQuery = {
  __typename?: 'Query'
  types: Array<{ __typename?: 'CodeMirrorType' } & Type_CodeMirrorType_Fragment>
}

export type GetTypeOptionsQueryVariables = Exact<{ [key: string]: never }>

export type GetTypeOptionsQuery = {
  __typename?: 'Query'
  baseTypes: {
    __typename?: 'GetBaseTypesReturn'
    items: Array<{
      __typename?: 'BaseType'
      id: string
      name: string
      kind: TypeKind
    }>
  }
}

export type InterfaceForm_GetAppsQueryVariables = Exact<{
  options?: InputMaybe<AppOptions>
  where?: InputMaybe<AppWhere>
}>

export type InterfaceForm_GetAppsQuery = {
  __typename?: 'Query'
  apps: Array<{ __typename?: 'App'; id: string; name: string }>
}

export type InterfaceForm_GetAtomsQueryVariables = Exact<{
  options?: InputMaybe<AtomOptions>
  where?: InputMaybe<AtomWhere>
}>

export type InterfaceForm_GetAtomsQuery = {
  __typename?: 'Query'
  atoms: Array<{
    __typename?: 'Atom'
    id: string
    name: string
    type: AtomType
  }>
}

export type InterfaceForm_GetActionsQueryVariables = Exact<{
  appId?: InputMaybe<Scalars['ID']['input']>
}>

export type InterfaceForm_GetActionsQuery = {
  __typename?: 'Query'
  codeActions: Array<{ __typename?: 'CodeAction'; id: string; name: string }>
  apiActions: Array<{ __typename?: 'ApiAction'; id: string; name: string }>
}

export type InterfaceForm_GetStoresQueryVariables = Exact<{
  options?: InputMaybe<StoreOptions>
  where?: InputMaybe<StoreWhere>
}>

export type InterfaceForm_GetStoresQuery = {
  __typename?: 'Query'
  stores: Array<{ __typename?: 'Store'; id: string; name: string }>
}

export type InterfaceForm_GetResourceQueryVariables = Exact<{
  options?: InputMaybe<ResourceOptions>
  where?: InputMaybe<ResourceWhere>
}>

export type InterfaceForm_GetResourceQuery = {
  __typename?: 'Query'
  resources: Array<{ __typename?: 'Resource'; id: string; name: string }>
}

export type InterfaceForm_GetPagesQueryVariables = Exact<{
  options?: InputMaybe<PageOptions>
  where?: InputMaybe<PageWhere>
}>

export type InterfaceForm_GetPagesQuery = {
  __typename?: 'Query'
  pages: Array<{ __typename?: 'Page'; id: string; name: string }>
}

export type IsTypeDescendantOfQueryVariables = Exact<{
  descendantTypeId: Scalars['ID']['input']
  parentTypeId: Scalars['ID']['input']
}>

export type IsTypeDescendantOfQuery = {
  __typename?: 'Query'
  isTypeDescendantOf?: boolean | null
}

export type GetTypeReferencesQueryVariables = Exact<{
  typeId: Scalars['ID']['input']
}>

export type GetTypeReferencesQuery = {
  __typename?: 'Query'
  getTypeReferences?: Array<{
    __typename?: 'TypeReference'
    name: string
    label: string
  }> | null
}

export type UpdatePrimitiveTypesMutationVariables = Exact<{
  connect?: InputMaybe<PrimitiveTypeConnectInput>
  create?: InputMaybe<PrimitiveTypeRelationInput>
  delete?: InputMaybe<PrimitiveTypeDeleteInput>
  disconnect?: InputMaybe<PrimitiveTypeDisconnectInput>
  update?: InputMaybe<PrimitiveTypeUpdateInput>
  where?: InputMaybe<PrimitiveTypeWhere>
}>

export type UpdatePrimitiveTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdatePrimitiveTypesMutationResponse'
    types: Array<{ __typename?: 'PrimitiveType'; id: string }>
  }
}

export type UpdateArrayTypesMutationVariables = Exact<{
  connect?: InputMaybe<ArrayTypeConnectInput>
  create?: InputMaybe<ArrayTypeRelationInput>
  delete?: InputMaybe<ArrayTypeDeleteInput>
  disconnect?: InputMaybe<ArrayTypeDisconnectInput>
  update?: InputMaybe<ArrayTypeUpdateInput>
  where?: InputMaybe<ArrayTypeWhere>
}>

export type UpdateArrayTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateArrayTypesMutationResponse'
    types: Array<{ __typename?: 'ArrayType'; id: string }>
  }
}

export type UpdateUnionTypesMutationVariables = Exact<{
  connect?: InputMaybe<UnionTypeConnectInput>
  create?: InputMaybe<UnionTypeRelationInput>
  delete?: InputMaybe<UnionTypeDeleteInput>
  disconnect?: InputMaybe<UnionTypeDisconnectInput>
  update?: InputMaybe<UnionTypeUpdateInput>
  where?: InputMaybe<UnionTypeWhere>
}>

export type UpdateUnionTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateUnionTypesMutationResponse'
    types: Array<{ __typename?: 'UnionType'; id: string }>
  }
}

export type UpdateInterfaceTypesMutationVariables = Exact<{
  connect?: InputMaybe<InterfaceTypeConnectInput>
  create?: InputMaybe<InterfaceTypeRelationInput>
  delete?: InputMaybe<InterfaceTypeDeleteInput>
  disconnect?: InputMaybe<InterfaceTypeDisconnectInput>
  update?: InputMaybe<InterfaceTypeUpdateInput>
  where?: InputMaybe<InterfaceTypeWhere>
}>

export type UpdateInterfaceTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateInterfaceTypesMutationResponse'
    types: Array<{ __typename?: 'InterfaceType'; id: string }>
  }
}

export type UpdateReactNodeTypesMutationVariables = Exact<{
  connect?: InputMaybe<ReactNodeTypeConnectInput>
  create?: InputMaybe<ReactNodeTypeRelationInput>
  delete?: InputMaybe<ReactNodeTypeDeleteInput>
  disconnect?: InputMaybe<ReactNodeTypeDisconnectInput>
  update?: InputMaybe<ReactNodeTypeUpdateInput>
  where?: InputMaybe<ReactNodeTypeWhere>
}>

export type UpdateReactNodeTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateReactNodeTypesMutationResponse'
    types: Array<{ __typename?: 'ReactNodeType'; id: string }>
  }
}

export type UpdateElementTypesMutationVariables = Exact<{
  connect?: InputMaybe<ElementTypeConnectInput>
  create?: InputMaybe<ElementTypeRelationInput>
  delete?: InputMaybe<ElementTypeDeleteInput>
  disconnect?: InputMaybe<ElementTypeDisconnectInput>
  update?: InputMaybe<ElementTypeUpdateInput>
  where?: InputMaybe<ElementTypeWhere>
}>

export type UpdateElementTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateElementTypesMutationResponse'
    types: Array<{ __typename?: 'ElementType'; id: string }>
  }
}

export type UpdateRenderPropTypesMutationVariables = Exact<{
  connect?: InputMaybe<RenderPropTypeConnectInput>
  create?: InputMaybe<RenderPropTypeRelationInput>
  delete?: InputMaybe<RenderPropTypeDeleteInput>
  disconnect?: InputMaybe<RenderPropTypeDisconnectInput>
  update?: InputMaybe<RenderPropTypeUpdateInput>
  where?: InputMaybe<RenderPropTypeWhere>
}>

export type UpdateRenderPropTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateRenderPropTypesMutationResponse'
    types: Array<{ __typename?: 'RenderPropType'; id: string }>
  }
}

export type UpdateEnumTypesMutationVariables = Exact<{
  connect?: InputMaybe<EnumTypeConnectInput>
  create?: InputMaybe<EnumTypeRelationInput>
  delete?: InputMaybe<EnumTypeDeleteInput>
  disconnect?: InputMaybe<EnumTypeDisconnectInput>
  update?: InputMaybe<EnumTypeUpdateInput>
  where?: InputMaybe<EnumTypeWhere>
}>

export type UpdateEnumTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateEnumTypesMutationResponse'
    types: Array<{ __typename?: 'EnumType'; id: string }>
  }
}

export type UpdateLambdaTypesMutationVariables = Exact<{
  connect?: InputMaybe<LambdaTypeConnectInput>
  create?: InputMaybe<LambdaTypeRelationInput>
  delete?: InputMaybe<LambdaTypeDeleteInput>
  disconnect?: InputMaybe<LambdaTypeDisconnectInput>
  update?: InputMaybe<LambdaTypeUpdateInput>
  where?: InputMaybe<LambdaTypeWhere>
}>

export type UpdateLambdaTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateLambdaTypesMutationResponse'
    types: Array<{ __typename?: 'LambdaType'; id: string }>
  }
}

export type UpdatePageTypesMutationVariables = Exact<{
  connect?: InputMaybe<PageTypeConnectInput>
  create?: InputMaybe<PageTypeRelationInput>
  delete?: InputMaybe<PageTypeDeleteInput>
  disconnect?: InputMaybe<PageTypeDisconnectInput>
  update?: InputMaybe<PageTypeUpdateInput>
  where?: InputMaybe<PageTypeWhere>
}>

export type UpdatePageTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdatePageTypesMutationResponse'
    types: Array<{ __typename?: 'PageType'; id: string }>
  }
}

export type UpdateAppTypesMutationVariables = Exact<{
  connect?: InputMaybe<AppTypeConnectInput>
  create?: InputMaybe<AppTypeRelationInput>
  delete?: InputMaybe<AppTypeDeleteInput>
  disconnect?: InputMaybe<AppTypeDisconnectInput>
  update?: InputMaybe<AppTypeUpdateInput>
  where?: InputMaybe<AppTypeWhere>
}>

export type UpdateAppTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateAppTypesMutationResponse'
    types: Array<{ __typename?: 'AppType'; id: string }>
  }
}

export type UpdateActionTypesMutationVariables = Exact<{
  connect?: InputMaybe<ActionTypeConnectInput>
  create?: InputMaybe<ActionTypeRelationInput>
  delete?: InputMaybe<ActionTypeDeleteInput>
  disconnect?: InputMaybe<ActionTypeDisconnectInput>
  update?: InputMaybe<ActionTypeUpdateInput>
  where?: InputMaybe<ActionTypeWhere>
}>

export type UpdateActionTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateActionTypesMutationResponse'
    types: Array<{ __typename?: 'ActionType'; id: string }>
  }
}

export type UpdateCodeMirrorTypesMutationVariables = Exact<{
  connect?: InputMaybe<CodeMirrorTypeConnectInput>
  create?: InputMaybe<CodeMirrorTypeRelationInput>
  delete?: InputMaybe<CodeMirrorTypeDeleteInput>
  disconnect?: InputMaybe<CodeMirrorTypeDisconnectInput>
  update?: InputMaybe<CodeMirrorTypeUpdateInput>
  where?: InputMaybe<CodeMirrorTypeWhere>
}>

export type UpdateCodeMirrorTypesMutation = {
  __typename?: 'Mutation'
  types: {
    __typename?: 'UpdateCodeMirrorTypesMutationResponse'
    types: Array<{ __typename?: 'CodeMirrorType'; id: string }>
  }
}

export type GetUsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhere>
}>

export type GetUsersQuery = {
  __typename?: 'Query'
  users: Array<{ __typename?: 'User' } & UserFragment>
}

export type CreateUserMutationVariables = Exact<{
  input: Array<UserCreateInput> | UserCreateInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUsers: {
    __typename?: 'CreateUsersMutationResponse'
    users: Array<{ __typename?: 'User'; id: string; email: string }>
  }
}
