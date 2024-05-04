export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T

export type MaybePromise<T> = Promise<T> | T

/**
 * Match the promise behavior of TOut with TIn
 */
export type InferPromise<TIn, TOut> = TIn extends PromiseLike<unknown>
  ? Promise<TOut>
  : TOut
