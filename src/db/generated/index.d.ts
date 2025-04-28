
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model AirportLounge
 * 
 */
export type AirportLounge = $Result.DefaultSelection<Prisma.$AirportLoungePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airportLounge`: Exposes CRUD operations for the **AirportLounge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AirportLounges
    * const airportLounges = await prisma.airportLounge.findMany()
    * ```
    */
  get airportLounge(): Prisma.AirportLoungeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Card: 'Card',
    AirportLounge: 'AirportLounge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "card" | "airportLounge"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CardFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CardAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      AirportLounge: {
        payload: Prisma.$AirportLoungePayload<ExtArgs>
        fields: Prisma.AirportLoungeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirportLoungeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirportLoungeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload>
          }
          findFirst: {
            args: Prisma.AirportLoungeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirportLoungeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload>
          }
          findMany: {
            args: Prisma.AirportLoungeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload>[]
          }
          create: {
            args: Prisma.AirportLoungeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload>
          }
          createMany: {
            args: Prisma.AirportLoungeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AirportLoungeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload>
          }
          update: {
            args: Prisma.AirportLoungeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload>
          }
          deleteMany: {
            args: Prisma.AirportLoungeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirportLoungeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirportLoungeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportLoungePayload>
          }
          aggregate: {
            args: Prisma.AirportLoungeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirportLounge>
          }
          groupBy: {
            args: Prisma.AirportLoungeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirportLoungeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AirportLoungeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AirportLoungeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AirportLoungeCountArgs<ExtArgs>
            result: $Utils.Optional<AirportLoungeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    card?: CardOmit
    airportLounge?: AirportLoungeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    credit_card_id: number | null
    card_issuer: number | null
  }

  export type CardSumAggregateOutputType = {
    credit_card_id: number | null
    card_issuer: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    credit_card_id: number | null
    card_name: string | null
    card_issuer: number | null
    welcome_offers: string | null
    apply_link: string | null
    featured_text: string | null
    issuer_name: string | null
    website: string | null
    url_launch_apply: boolean | null
    cc_apply_now_web: boolean | null
    apply_link_web: string | null
    for_apply_card: boolean | null
    url: string | null
    card_type: string | null
    joining_fees: string | null
    renewal_fees: string | null
    bsf_movies: boolean | null
    bsf_travel: boolean | null
    bsf_dining: boolean | null
    bsf_fuel: boolean | null
    bsf_shopping: boolean | null
    movie: string | null
    dining: string | null
    travel: string | null
    lounge: string | null
    golf: string | null
    fuel: string | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    credit_card_id: number | null
    card_name: string | null
    card_issuer: number | null
    welcome_offers: string | null
    apply_link: string | null
    featured_text: string | null
    issuer_name: string | null
    website: string | null
    url_launch_apply: boolean | null
    cc_apply_now_web: boolean | null
    apply_link_web: string | null
    for_apply_card: boolean | null
    url: string | null
    card_type: string | null
    joining_fees: string | null
    renewal_fees: string | null
    bsf_movies: boolean | null
    bsf_travel: boolean | null
    bsf_dining: boolean | null
    bsf_fuel: boolean | null
    bsf_shopping: boolean | null
    movie: string | null
    dining: string | null
    travel: string | null
    lounge: string | null
    golf: string | null
    fuel: string | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    credit_card_id: number
    card_name: number
    card_issuer: number
    highlights: number
    welcome_offers: number
    apply_link: number
    featured_text: number
    issuer_name: number
    website: number
    url_launch_apply: number
    cc_apply_now_web: number
    apply_link_web: number
    for_apply_card: number
    url: number
    card_type: number
    joining_fees: number
    renewal_fees: number
    bsf_movies: number
    bsf_travel: number
    bsf_dining: number
    bsf_fuel: number
    bsf_shopping: number
    rewards: number
    movie: number
    dining: number
    travel: number
    lounge: number
    golf: number
    fuel: number
    reward_redemption: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    credit_card_id?: true
    card_issuer?: true
  }

  export type CardSumAggregateInputType = {
    credit_card_id?: true
    card_issuer?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    credit_card_id?: true
    card_name?: true
    card_issuer?: true
    welcome_offers?: true
    apply_link?: true
    featured_text?: true
    issuer_name?: true
    website?: true
    url_launch_apply?: true
    cc_apply_now_web?: true
    apply_link_web?: true
    for_apply_card?: true
    url?: true
    card_type?: true
    joining_fees?: true
    renewal_fees?: true
    bsf_movies?: true
    bsf_travel?: true
    bsf_dining?: true
    bsf_fuel?: true
    bsf_shopping?: true
    movie?: true
    dining?: true
    travel?: true
    lounge?: true
    golf?: true
    fuel?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    credit_card_id?: true
    card_name?: true
    card_issuer?: true
    welcome_offers?: true
    apply_link?: true
    featured_text?: true
    issuer_name?: true
    website?: true
    url_launch_apply?: true
    cc_apply_now_web?: true
    apply_link_web?: true
    for_apply_card?: true
    url?: true
    card_type?: true
    joining_fees?: true
    renewal_fees?: true
    bsf_movies?: true
    bsf_travel?: true
    bsf_dining?: true
    bsf_fuel?: true
    bsf_shopping?: true
    movie?: true
    dining?: true
    travel?: true
    lounge?: true
    golf?: true
    fuel?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    credit_card_id?: true
    card_name?: true
    card_issuer?: true
    highlights?: true
    welcome_offers?: true
    apply_link?: true
    featured_text?: true
    issuer_name?: true
    website?: true
    url_launch_apply?: true
    cc_apply_now_web?: true
    apply_link_web?: true
    for_apply_card?: true
    url?: true
    card_type?: true
    joining_fees?: true
    renewal_fees?: true
    bsf_movies?: true
    bsf_travel?: true
    bsf_dining?: true
    bsf_fuel?: true
    bsf_shopping?: true
    rewards?: true
    movie?: true
    dining?: true
    travel?: true
    lounge?: true
    golf?: true
    fuel?: true
    reward_redemption?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    credit_card_id: number
    card_name: string
    card_issuer: number
    highlights: string[]
    welcome_offers: string | null
    apply_link: string | null
    featured_text: string | null
    issuer_name: string | null
    website: string | null
    url_launch_apply: boolean
    cc_apply_now_web: boolean
    apply_link_web: string | null
    for_apply_card: boolean
    url: string | null
    card_type: string | null
    joining_fees: string | null
    renewal_fees: string | null
    bsf_movies: boolean
    bsf_travel: boolean
    bsf_dining: boolean
    bsf_fuel: boolean
    bsf_shopping: boolean
    rewards: string[]
    movie: string | null
    dining: string | null
    travel: string | null
    lounge: string | null
    golf: string | null
    fuel: string | null
    reward_redemption: string[]
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credit_card_id?: boolean
    card_name?: boolean
    card_issuer?: boolean
    highlights?: boolean
    welcome_offers?: boolean
    apply_link?: boolean
    featured_text?: boolean
    issuer_name?: boolean
    website?: boolean
    url_launch_apply?: boolean
    cc_apply_now_web?: boolean
    apply_link_web?: boolean
    for_apply_card?: boolean
    url?: boolean
    card_type?: boolean
    joining_fees?: boolean
    renewal_fees?: boolean
    bsf_movies?: boolean
    bsf_travel?: boolean
    bsf_dining?: boolean
    bsf_fuel?: boolean
    bsf_shopping?: boolean
    rewards?: boolean
    movie?: boolean
    dining?: boolean
    travel?: boolean
    lounge?: boolean
    golf?: boolean
    fuel?: boolean
    reward_redemption?: boolean
  }, ExtArgs["result"]["card"]>



  export type CardSelectScalar = {
    id?: boolean
    credit_card_id?: boolean
    card_name?: boolean
    card_issuer?: boolean
    highlights?: boolean
    welcome_offers?: boolean
    apply_link?: boolean
    featured_text?: boolean
    issuer_name?: boolean
    website?: boolean
    url_launch_apply?: boolean
    cc_apply_now_web?: boolean
    apply_link_web?: boolean
    for_apply_card?: boolean
    url?: boolean
    card_type?: boolean
    joining_fees?: boolean
    renewal_fees?: boolean
    bsf_movies?: boolean
    bsf_travel?: boolean
    bsf_dining?: boolean
    bsf_fuel?: boolean
    bsf_shopping?: boolean
    rewards?: boolean
    movie?: boolean
    dining?: boolean
    travel?: boolean
    lounge?: boolean
    golf?: boolean
    fuel?: boolean
    reward_redemption?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "credit_card_id" | "card_name" | "card_issuer" | "highlights" | "welcome_offers" | "apply_link" | "featured_text" | "issuer_name" | "website" | "url_launch_apply" | "cc_apply_now_web" | "apply_link_web" | "for_apply_card" | "url" | "card_type" | "joining_fees" | "renewal_fees" | "bsf_movies" | "bsf_travel" | "bsf_dining" | "bsf_fuel" | "bsf_shopping" | "rewards" | "movie" | "dining" | "travel" | "lounge" | "golf" | "fuel" | "reward_redemption", ExtArgs["result"]["card"]>

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      credit_card_id: number
      card_name: string
      card_issuer: number
      highlights: string[]
      welcome_offers: string | null
      apply_link: string | null
      featured_text: string | null
      issuer_name: string | null
      website: string | null
      url_launch_apply: boolean
      cc_apply_now_web: boolean
      apply_link_web: string | null
      for_apply_card: boolean
      url: string | null
      card_type: string | null
      joining_fees: string | null
      renewal_fees: string | null
      bsf_movies: boolean
      bsf_travel: boolean
      bsf_dining: boolean
      bsf_fuel: boolean
      bsf_shopping: boolean
      rewards: string[]
      movie: string | null
      dining: string | null
      travel: string | null
      lounge: string | null
      golf: string | null
      fuel: string | null
      reward_redemption: string[]
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * @param {CardFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const card = await prisma.card.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CardFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Card.
     * @param {CardAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const card = await prisma.card.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CardAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly credit_card_id: FieldRef<"Card", 'Int'>
    readonly card_name: FieldRef<"Card", 'String'>
    readonly card_issuer: FieldRef<"Card", 'Int'>
    readonly highlights: FieldRef<"Card", 'String[]'>
    readonly welcome_offers: FieldRef<"Card", 'String'>
    readonly apply_link: FieldRef<"Card", 'String'>
    readonly featured_text: FieldRef<"Card", 'String'>
    readonly issuer_name: FieldRef<"Card", 'String'>
    readonly website: FieldRef<"Card", 'String'>
    readonly url_launch_apply: FieldRef<"Card", 'Boolean'>
    readonly cc_apply_now_web: FieldRef<"Card", 'Boolean'>
    readonly apply_link_web: FieldRef<"Card", 'String'>
    readonly for_apply_card: FieldRef<"Card", 'Boolean'>
    readonly url: FieldRef<"Card", 'String'>
    readonly card_type: FieldRef<"Card", 'String'>
    readonly joining_fees: FieldRef<"Card", 'String'>
    readonly renewal_fees: FieldRef<"Card", 'String'>
    readonly bsf_movies: FieldRef<"Card", 'Boolean'>
    readonly bsf_travel: FieldRef<"Card", 'Boolean'>
    readonly bsf_dining: FieldRef<"Card", 'Boolean'>
    readonly bsf_fuel: FieldRef<"Card", 'Boolean'>
    readonly bsf_shopping: FieldRef<"Card", 'Boolean'>
    readonly rewards: FieldRef<"Card", 'String[]'>
    readonly movie: FieldRef<"Card", 'String'>
    readonly dining: FieldRef<"Card", 'String'>
    readonly travel: FieldRef<"Card", 'String'>
    readonly lounge: FieldRef<"Card", 'String'>
    readonly golf: FieldRef<"Card", 'String'>
    readonly fuel: FieldRef<"Card", 'String'>
    readonly reward_redemption: FieldRef<"Card", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card findRaw
   */
  export type CardFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Card aggregateRaw
   */
  export type CardAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
  }


  /**
   * Model AirportLounge
   */

  export type AggregateAirportLounge = {
    _count: AirportLoungeCountAggregateOutputType | null
    _avg: AirportLoungeAvgAggregateOutputType | null
    _sum: AirportLoungeSumAggregateOutputType | null
    _min: AirportLoungeMinAggregateOutputType | null
    _max: AirportLoungeMaxAggregateOutputType | null
  }

  export type AirportLoungeAvgAggregateOutputType = {
    total_rated_user: number | null
    min_rated: number | null
    max_rated: number | null
    average_rated: number | null
    total_rating_count: number | null
    amenities_id: number | null
    amenities_order: number | null
    amenities_component_id: number | null
    amenities_lounge_detail_id: number | null
  }

  export type AirportLoungeSumAggregateOutputType = {
    total_rated_user: number | null
    min_rated: number | null
    max_rated: number | null
    average_rated: number | null
    total_rating_count: number | null
    amenities_id: number | null
    amenities_order: number | null
    amenities_component_id: number | null
    amenities_lounge_detail_id: number | null
  }

  export type AirportLoungeMinAggregateOutputType = {
    id: string | null
    airport_id: string | null
    airport_city: string | null
    airport_name: string | null
    lounge_name: string | null
    lounge_id: string | null
    lounge_timing: string | null
    directions: string | null
    important_information: string | null
    main_summary: string | null
    introduction: string | null
    airport: string | null
    lounge_name_public: string | null
    international_lounge: boolean | null
    terminals_select: string | null
    location: string | null
    lounge_status: boolean | null
    meta_title: string | null
    meta_description: string | null
    total_rated_user: number | null
    min_rated: number | null
    max_rated: number | null
    average_rated: number | null
    total_rating_count: number | null
    airport_image_map: string | null
    amenities_id: number | null
    amenities_field: string | null
    amenities_order: number | null
    amenities_component_type: string | null
    amenities_component_id: number | null
    amenities_lounge_detail_id: number | null
    amenities_food: boolean | null
    amenities_disabled_access: boolean | null
    amenities_tv: boolean | null
    amenities_internet: boolean | null
    amenities_no_smoking: boolean | null
    amenities_smoking_area: boolean | null
    amenities_alcoholic_drinks: boolean | null
    amenities_newspapers_magazines: boolean | null
    amenities_wifi: boolean | null
    amenities_air_conditioning: boolean | null
    amenities_television: boolean | null
    amenities_shower: boolean | null
    amenities_spa: boolean | null
    amenities_printer: boolean | null
  }

  export type AirportLoungeMaxAggregateOutputType = {
    id: string | null
    airport_id: string | null
    airport_city: string | null
    airport_name: string | null
    lounge_name: string | null
    lounge_id: string | null
    lounge_timing: string | null
    directions: string | null
    important_information: string | null
    main_summary: string | null
    introduction: string | null
    airport: string | null
    lounge_name_public: string | null
    international_lounge: boolean | null
    terminals_select: string | null
    location: string | null
    lounge_status: boolean | null
    meta_title: string | null
    meta_description: string | null
    total_rated_user: number | null
    min_rated: number | null
    max_rated: number | null
    average_rated: number | null
    total_rating_count: number | null
    airport_image_map: string | null
    amenities_id: number | null
    amenities_field: string | null
    amenities_order: number | null
    amenities_component_type: string | null
    amenities_component_id: number | null
    amenities_lounge_detail_id: number | null
    amenities_food: boolean | null
    amenities_disabled_access: boolean | null
    amenities_tv: boolean | null
    amenities_internet: boolean | null
    amenities_no_smoking: boolean | null
    amenities_smoking_area: boolean | null
    amenities_alcoholic_drinks: boolean | null
    amenities_newspapers_magazines: boolean | null
    amenities_wifi: boolean | null
    amenities_air_conditioning: boolean | null
    amenities_television: boolean | null
    amenities_shower: boolean | null
    amenities_spa: boolean | null
    amenities_printer: boolean | null
  }

  export type AirportLoungeCountAggregateOutputType = {
    id: number
    airport_id: number
    airport_city: number
    airport_name: number
    lounge_name: number
    lounge_id: number
    lounge_timing: number
    directions: number
    important_information: number
    main_summary: number
    introduction: number
    airport: number
    lounge_name_public: number
    international_lounge: number
    terminals_select: number
    location: number
    lounge_status: number
    meta_title: number
    meta_description: number
    total_rated_user: number
    min_rated: number
    max_rated: number
    average_rated: number
    total_rating_count: number
    airport_image_map: number
    lounge_images: number
    amenities_id: number
    amenities_field: number
    amenities_order: number
    amenities_component_type: number
    amenities_component_id: number
    amenities_lounge_detail_id: number
    amenities_food: number
    amenities_disabled_access: number
    amenities_tv: number
    amenities_internet: number
    amenities_no_smoking: number
    amenities_smoking_area: number
    amenities_alcoholic_drinks: number
    amenities_newspapers_magazines: number
    amenities_wifi: number
    amenities_air_conditioning: number
    amenities_television: number
    amenities_shower: number
    amenities_spa: number
    amenities_printer: number
    _all: number
  }


  export type AirportLoungeAvgAggregateInputType = {
    total_rated_user?: true
    min_rated?: true
    max_rated?: true
    average_rated?: true
    total_rating_count?: true
    amenities_id?: true
    amenities_order?: true
    amenities_component_id?: true
    amenities_lounge_detail_id?: true
  }

  export type AirportLoungeSumAggregateInputType = {
    total_rated_user?: true
    min_rated?: true
    max_rated?: true
    average_rated?: true
    total_rating_count?: true
    amenities_id?: true
    amenities_order?: true
    amenities_component_id?: true
    amenities_lounge_detail_id?: true
  }

  export type AirportLoungeMinAggregateInputType = {
    id?: true
    airport_id?: true
    airport_city?: true
    airport_name?: true
    lounge_name?: true
    lounge_id?: true
    lounge_timing?: true
    directions?: true
    important_information?: true
    main_summary?: true
    introduction?: true
    airport?: true
    lounge_name_public?: true
    international_lounge?: true
    terminals_select?: true
    location?: true
    lounge_status?: true
    meta_title?: true
    meta_description?: true
    total_rated_user?: true
    min_rated?: true
    max_rated?: true
    average_rated?: true
    total_rating_count?: true
    airport_image_map?: true
    amenities_id?: true
    amenities_field?: true
    amenities_order?: true
    amenities_component_type?: true
    amenities_component_id?: true
    amenities_lounge_detail_id?: true
    amenities_food?: true
    amenities_disabled_access?: true
    amenities_tv?: true
    amenities_internet?: true
    amenities_no_smoking?: true
    amenities_smoking_area?: true
    amenities_alcoholic_drinks?: true
    amenities_newspapers_magazines?: true
    amenities_wifi?: true
    amenities_air_conditioning?: true
    amenities_television?: true
    amenities_shower?: true
    amenities_spa?: true
    amenities_printer?: true
  }

  export type AirportLoungeMaxAggregateInputType = {
    id?: true
    airport_id?: true
    airport_city?: true
    airport_name?: true
    lounge_name?: true
    lounge_id?: true
    lounge_timing?: true
    directions?: true
    important_information?: true
    main_summary?: true
    introduction?: true
    airport?: true
    lounge_name_public?: true
    international_lounge?: true
    terminals_select?: true
    location?: true
    lounge_status?: true
    meta_title?: true
    meta_description?: true
    total_rated_user?: true
    min_rated?: true
    max_rated?: true
    average_rated?: true
    total_rating_count?: true
    airport_image_map?: true
    amenities_id?: true
    amenities_field?: true
    amenities_order?: true
    amenities_component_type?: true
    amenities_component_id?: true
    amenities_lounge_detail_id?: true
    amenities_food?: true
    amenities_disabled_access?: true
    amenities_tv?: true
    amenities_internet?: true
    amenities_no_smoking?: true
    amenities_smoking_area?: true
    amenities_alcoholic_drinks?: true
    amenities_newspapers_magazines?: true
    amenities_wifi?: true
    amenities_air_conditioning?: true
    amenities_television?: true
    amenities_shower?: true
    amenities_spa?: true
    amenities_printer?: true
  }

  export type AirportLoungeCountAggregateInputType = {
    id?: true
    airport_id?: true
    airport_city?: true
    airport_name?: true
    lounge_name?: true
    lounge_id?: true
    lounge_timing?: true
    directions?: true
    important_information?: true
    main_summary?: true
    introduction?: true
    airport?: true
    lounge_name_public?: true
    international_lounge?: true
    terminals_select?: true
    location?: true
    lounge_status?: true
    meta_title?: true
    meta_description?: true
    total_rated_user?: true
    min_rated?: true
    max_rated?: true
    average_rated?: true
    total_rating_count?: true
    airport_image_map?: true
    lounge_images?: true
    amenities_id?: true
    amenities_field?: true
    amenities_order?: true
    amenities_component_type?: true
    amenities_component_id?: true
    amenities_lounge_detail_id?: true
    amenities_food?: true
    amenities_disabled_access?: true
    amenities_tv?: true
    amenities_internet?: true
    amenities_no_smoking?: true
    amenities_smoking_area?: true
    amenities_alcoholic_drinks?: true
    amenities_newspapers_magazines?: true
    amenities_wifi?: true
    amenities_air_conditioning?: true
    amenities_television?: true
    amenities_shower?: true
    amenities_spa?: true
    amenities_printer?: true
    _all?: true
  }

  export type AirportLoungeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirportLounge to aggregate.
     */
    where?: AirportLoungeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirportLounges to fetch.
     */
    orderBy?: AirportLoungeOrderByWithRelationInput | AirportLoungeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirportLoungeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirportLounges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirportLounges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AirportLounges
    **/
    _count?: true | AirportLoungeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirportLoungeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirportLoungeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirportLoungeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirportLoungeMaxAggregateInputType
  }

  export type GetAirportLoungeAggregateType<T extends AirportLoungeAggregateArgs> = {
        [P in keyof T & keyof AggregateAirportLounge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirportLounge[P]>
      : GetScalarType<T[P], AggregateAirportLounge[P]>
  }




  export type AirportLoungeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportLoungeWhereInput
    orderBy?: AirportLoungeOrderByWithAggregationInput | AirportLoungeOrderByWithAggregationInput[]
    by: AirportLoungeScalarFieldEnum[] | AirportLoungeScalarFieldEnum
    having?: AirportLoungeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirportLoungeCountAggregateInputType | true
    _avg?: AirportLoungeAvgAggregateInputType
    _sum?: AirportLoungeSumAggregateInputType
    _min?: AirportLoungeMinAggregateInputType
    _max?: AirportLoungeMaxAggregateInputType
  }

  export type AirportLoungeGroupByOutputType = {
    id: string
    airport_id: string
    airport_city: string
    airport_name: string
    lounge_name: string | null
    lounge_id: string | null
    lounge_timing: string | null
    directions: string | null
    important_information: string | null
    main_summary: string | null
    introduction: string | null
    airport: string | null
    lounge_name_public: string | null
    international_lounge: boolean | null
    terminals_select: string | null
    location: string | null
    lounge_status: boolean | null
    meta_title: string | null
    meta_description: string | null
    total_rated_user: number | null
    min_rated: number | null
    max_rated: number | null
    average_rated: number | null
    total_rating_count: number | null
    airport_image_map: string | null
    lounge_images: string[]
    amenities_id: number | null
    amenities_field: string | null
    amenities_order: number | null
    amenities_component_type: string | null
    amenities_component_id: number | null
    amenities_lounge_detail_id: number | null
    amenities_food: boolean | null
    amenities_disabled_access: boolean | null
    amenities_tv: boolean | null
    amenities_internet: boolean | null
    amenities_no_smoking: boolean | null
    amenities_smoking_area: boolean | null
    amenities_alcoholic_drinks: boolean | null
    amenities_newspapers_magazines: boolean | null
    amenities_wifi: boolean | null
    amenities_air_conditioning: boolean | null
    amenities_television: boolean | null
    amenities_shower: boolean | null
    amenities_spa: boolean | null
    amenities_printer: boolean | null
    _count: AirportLoungeCountAggregateOutputType | null
    _avg: AirportLoungeAvgAggregateOutputType | null
    _sum: AirportLoungeSumAggregateOutputType | null
    _min: AirportLoungeMinAggregateOutputType | null
    _max: AirportLoungeMaxAggregateOutputType | null
  }

  type GetAirportLoungeGroupByPayload<T extends AirportLoungeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirportLoungeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirportLoungeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirportLoungeGroupByOutputType[P]>
            : GetScalarType<T[P], AirportLoungeGroupByOutputType[P]>
        }
      >
    >


  export type AirportLoungeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airport_id?: boolean
    airport_city?: boolean
    airport_name?: boolean
    lounge_name?: boolean
    lounge_id?: boolean
    lounge_timing?: boolean
    directions?: boolean
    important_information?: boolean
    main_summary?: boolean
    introduction?: boolean
    airport?: boolean
    lounge_name_public?: boolean
    international_lounge?: boolean
    terminals_select?: boolean
    location?: boolean
    lounge_status?: boolean
    meta_title?: boolean
    meta_description?: boolean
    total_rated_user?: boolean
    min_rated?: boolean
    max_rated?: boolean
    average_rated?: boolean
    total_rating_count?: boolean
    airport_image_map?: boolean
    lounge_images?: boolean
    amenities_id?: boolean
    amenities_field?: boolean
    amenities_order?: boolean
    amenities_component_type?: boolean
    amenities_component_id?: boolean
    amenities_lounge_detail_id?: boolean
    amenities_food?: boolean
    amenities_disabled_access?: boolean
    amenities_tv?: boolean
    amenities_internet?: boolean
    amenities_no_smoking?: boolean
    amenities_smoking_area?: boolean
    amenities_alcoholic_drinks?: boolean
    amenities_newspapers_magazines?: boolean
    amenities_wifi?: boolean
    amenities_air_conditioning?: boolean
    amenities_television?: boolean
    amenities_shower?: boolean
    amenities_spa?: boolean
    amenities_printer?: boolean
  }, ExtArgs["result"]["airportLounge"]>



  export type AirportLoungeSelectScalar = {
    id?: boolean
    airport_id?: boolean
    airport_city?: boolean
    airport_name?: boolean
    lounge_name?: boolean
    lounge_id?: boolean
    lounge_timing?: boolean
    directions?: boolean
    important_information?: boolean
    main_summary?: boolean
    introduction?: boolean
    airport?: boolean
    lounge_name_public?: boolean
    international_lounge?: boolean
    terminals_select?: boolean
    location?: boolean
    lounge_status?: boolean
    meta_title?: boolean
    meta_description?: boolean
    total_rated_user?: boolean
    min_rated?: boolean
    max_rated?: boolean
    average_rated?: boolean
    total_rating_count?: boolean
    airport_image_map?: boolean
    lounge_images?: boolean
    amenities_id?: boolean
    amenities_field?: boolean
    amenities_order?: boolean
    amenities_component_type?: boolean
    amenities_component_id?: boolean
    amenities_lounge_detail_id?: boolean
    amenities_food?: boolean
    amenities_disabled_access?: boolean
    amenities_tv?: boolean
    amenities_internet?: boolean
    amenities_no_smoking?: boolean
    amenities_smoking_area?: boolean
    amenities_alcoholic_drinks?: boolean
    amenities_newspapers_magazines?: boolean
    amenities_wifi?: boolean
    amenities_air_conditioning?: boolean
    amenities_television?: boolean
    amenities_shower?: boolean
    amenities_spa?: boolean
    amenities_printer?: boolean
  }

  export type AirportLoungeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "airport_id" | "airport_city" | "airport_name" | "lounge_name" | "lounge_id" | "lounge_timing" | "directions" | "important_information" | "main_summary" | "introduction" | "airport" | "lounge_name_public" | "international_lounge" | "terminals_select" | "location" | "lounge_status" | "meta_title" | "meta_description" | "total_rated_user" | "min_rated" | "max_rated" | "average_rated" | "total_rating_count" | "airport_image_map" | "lounge_images" | "amenities_id" | "amenities_field" | "amenities_order" | "amenities_component_type" | "amenities_component_id" | "amenities_lounge_detail_id" | "amenities_food" | "amenities_disabled_access" | "amenities_tv" | "amenities_internet" | "amenities_no_smoking" | "amenities_smoking_area" | "amenities_alcoholic_drinks" | "amenities_newspapers_magazines" | "amenities_wifi" | "amenities_air_conditioning" | "amenities_television" | "amenities_shower" | "amenities_spa" | "amenities_printer", ExtArgs["result"]["airportLounge"]>

  export type $AirportLoungePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AirportLounge"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      airport_id: string
      airport_city: string
      airport_name: string
      lounge_name: string | null
      lounge_id: string | null
      lounge_timing: string | null
      directions: string | null
      important_information: string | null
      main_summary: string | null
      introduction: string | null
      airport: string | null
      lounge_name_public: string | null
      international_lounge: boolean | null
      terminals_select: string | null
      location: string | null
      lounge_status: boolean | null
      meta_title: string | null
      meta_description: string | null
      total_rated_user: number | null
      min_rated: number | null
      max_rated: number | null
      average_rated: number | null
      total_rating_count: number | null
      airport_image_map: string | null
      lounge_images: string[]
      amenities_id: number | null
      amenities_field: string | null
      amenities_order: number | null
      amenities_component_type: string | null
      amenities_component_id: number | null
      amenities_lounge_detail_id: number | null
      amenities_food: boolean | null
      amenities_disabled_access: boolean | null
      amenities_tv: boolean | null
      amenities_internet: boolean | null
      amenities_no_smoking: boolean | null
      amenities_smoking_area: boolean | null
      amenities_alcoholic_drinks: boolean | null
      amenities_newspapers_magazines: boolean | null
      amenities_wifi: boolean | null
      amenities_air_conditioning: boolean | null
      amenities_television: boolean | null
      amenities_shower: boolean | null
      amenities_spa: boolean | null
      amenities_printer: boolean | null
    }, ExtArgs["result"]["airportLounge"]>
    composites: {}
  }

  type AirportLoungeGetPayload<S extends boolean | null | undefined | AirportLoungeDefaultArgs> = $Result.GetResult<Prisma.$AirportLoungePayload, S>

  type AirportLoungeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirportLoungeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirportLoungeCountAggregateInputType | true
    }

  export interface AirportLoungeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AirportLounge'], meta: { name: 'AirportLounge' } }
    /**
     * Find zero or one AirportLounge that matches the filter.
     * @param {AirportLoungeFindUniqueArgs} args - Arguments to find a AirportLounge
     * @example
     * // Get one AirportLounge
     * const airportLounge = await prisma.airportLounge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirportLoungeFindUniqueArgs>(args: SelectSubset<T, AirportLoungeFindUniqueArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AirportLounge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirportLoungeFindUniqueOrThrowArgs} args - Arguments to find a AirportLounge
     * @example
     * // Get one AirportLounge
     * const airportLounge = await prisma.airportLounge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirportLoungeFindUniqueOrThrowArgs>(args: SelectSubset<T, AirportLoungeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AirportLounge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportLoungeFindFirstArgs} args - Arguments to find a AirportLounge
     * @example
     * // Get one AirportLounge
     * const airportLounge = await prisma.airportLounge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirportLoungeFindFirstArgs>(args?: SelectSubset<T, AirportLoungeFindFirstArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AirportLounge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportLoungeFindFirstOrThrowArgs} args - Arguments to find a AirportLounge
     * @example
     * // Get one AirportLounge
     * const airportLounge = await prisma.airportLounge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirportLoungeFindFirstOrThrowArgs>(args?: SelectSubset<T, AirportLoungeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AirportLounges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportLoungeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AirportLounges
     * const airportLounges = await prisma.airportLounge.findMany()
     * 
     * // Get first 10 AirportLounges
     * const airportLounges = await prisma.airportLounge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airportLoungeWithIdOnly = await prisma.airportLounge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirportLoungeFindManyArgs>(args?: SelectSubset<T, AirportLoungeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AirportLounge.
     * @param {AirportLoungeCreateArgs} args - Arguments to create a AirportLounge.
     * @example
     * // Create one AirportLounge
     * const AirportLounge = await prisma.airportLounge.create({
     *   data: {
     *     // ... data to create a AirportLounge
     *   }
     * })
     * 
     */
    create<T extends AirportLoungeCreateArgs>(args: SelectSubset<T, AirportLoungeCreateArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AirportLounges.
     * @param {AirportLoungeCreateManyArgs} args - Arguments to create many AirportLounges.
     * @example
     * // Create many AirportLounges
     * const airportLounge = await prisma.airportLounge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirportLoungeCreateManyArgs>(args?: SelectSubset<T, AirportLoungeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AirportLounge.
     * @param {AirportLoungeDeleteArgs} args - Arguments to delete one AirportLounge.
     * @example
     * // Delete one AirportLounge
     * const AirportLounge = await prisma.airportLounge.delete({
     *   where: {
     *     // ... filter to delete one AirportLounge
     *   }
     * })
     * 
     */
    delete<T extends AirportLoungeDeleteArgs>(args: SelectSubset<T, AirportLoungeDeleteArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AirportLounge.
     * @param {AirportLoungeUpdateArgs} args - Arguments to update one AirportLounge.
     * @example
     * // Update one AirportLounge
     * const airportLounge = await prisma.airportLounge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirportLoungeUpdateArgs>(args: SelectSubset<T, AirportLoungeUpdateArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AirportLounges.
     * @param {AirportLoungeDeleteManyArgs} args - Arguments to filter AirportLounges to delete.
     * @example
     * // Delete a few AirportLounges
     * const { count } = await prisma.airportLounge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirportLoungeDeleteManyArgs>(args?: SelectSubset<T, AirportLoungeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AirportLounges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportLoungeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AirportLounges
     * const airportLounge = await prisma.airportLounge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirportLoungeUpdateManyArgs>(args: SelectSubset<T, AirportLoungeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AirportLounge.
     * @param {AirportLoungeUpsertArgs} args - Arguments to update or create a AirportLounge.
     * @example
     * // Update or create a AirportLounge
     * const airportLounge = await prisma.airportLounge.upsert({
     *   create: {
     *     // ... data to create a AirportLounge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AirportLounge we want to update
     *   }
     * })
     */
    upsert<T extends AirportLoungeUpsertArgs>(args: SelectSubset<T, AirportLoungeUpsertArgs<ExtArgs>>): Prisma__AirportLoungeClient<$Result.GetResult<Prisma.$AirportLoungePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AirportLounges that matches the filter.
     * @param {AirportLoungeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const airportLounge = await prisma.airportLounge.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AirportLoungeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AirportLounge.
     * @param {AirportLoungeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const airportLounge = await prisma.airportLounge.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AirportLoungeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AirportLounges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportLoungeCountArgs} args - Arguments to filter AirportLounges to count.
     * @example
     * // Count the number of AirportLounges
     * const count = await prisma.airportLounge.count({
     *   where: {
     *     // ... the filter for the AirportLounges we want to count
     *   }
     * })
    **/
    count<T extends AirportLoungeCountArgs>(
      args?: Subset<T, AirportLoungeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirportLoungeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AirportLounge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportLoungeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirportLoungeAggregateArgs>(args: Subset<T, AirportLoungeAggregateArgs>): Prisma.PrismaPromise<GetAirportLoungeAggregateType<T>>

    /**
     * Group by AirportLounge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportLoungeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirportLoungeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirportLoungeGroupByArgs['orderBy'] }
        : { orderBy?: AirportLoungeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirportLoungeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirportLoungeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AirportLounge model
   */
  readonly fields: AirportLoungeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AirportLounge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirportLoungeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AirportLounge model
   */
  interface AirportLoungeFieldRefs {
    readonly id: FieldRef<"AirportLounge", 'String'>
    readonly airport_id: FieldRef<"AirportLounge", 'String'>
    readonly airport_city: FieldRef<"AirportLounge", 'String'>
    readonly airport_name: FieldRef<"AirportLounge", 'String'>
    readonly lounge_name: FieldRef<"AirportLounge", 'String'>
    readonly lounge_id: FieldRef<"AirportLounge", 'String'>
    readonly lounge_timing: FieldRef<"AirportLounge", 'String'>
    readonly directions: FieldRef<"AirportLounge", 'String'>
    readonly important_information: FieldRef<"AirportLounge", 'String'>
    readonly main_summary: FieldRef<"AirportLounge", 'String'>
    readonly introduction: FieldRef<"AirportLounge", 'String'>
    readonly airport: FieldRef<"AirportLounge", 'String'>
    readonly lounge_name_public: FieldRef<"AirportLounge", 'String'>
    readonly international_lounge: FieldRef<"AirportLounge", 'Boolean'>
    readonly terminals_select: FieldRef<"AirportLounge", 'String'>
    readonly location: FieldRef<"AirportLounge", 'String'>
    readonly lounge_status: FieldRef<"AirportLounge", 'Boolean'>
    readonly meta_title: FieldRef<"AirportLounge", 'String'>
    readonly meta_description: FieldRef<"AirportLounge", 'String'>
    readonly total_rated_user: FieldRef<"AirportLounge", 'Int'>
    readonly min_rated: FieldRef<"AirportLounge", 'Int'>
    readonly max_rated: FieldRef<"AirportLounge", 'Int'>
    readonly average_rated: FieldRef<"AirportLounge", 'Float'>
    readonly total_rating_count: FieldRef<"AirportLounge", 'Int'>
    readonly airport_image_map: FieldRef<"AirportLounge", 'String'>
    readonly lounge_images: FieldRef<"AirportLounge", 'String[]'>
    readonly amenities_id: FieldRef<"AirportLounge", 'Int'>
    readonly amenities_field: FieldRef<"AirportLounge", 'String'>
    readonly amenities_order: FieldRef<"AirportLounge", 'Int'>
    readonly amenities_component_type: FieldRef<"AirportLounge", 'String'>
    readonly amenities_component_id: FieldRef<"AirportLounge", 'Int'>
    readonly amenities_lounge_detail_id: FieldRef<"AirportLounge", 'Int'>
    readonly amenities_food: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_disabled_access: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_tv: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_internet: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_no_smoking: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_smoking_area: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_alcoholic_drinks: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_newspapers_magazines: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_wifi: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_air_conditioning: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_television: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_shower: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_spa: FieldRef<"AirportLounge", 'Boolean'>
    readonly amenities_printer: FieldRef<"AirportLounge", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AirportLounge findUnique
   */
  export type AirportLoungeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * Filter, which AirportLounge to fetch.
     */
    where: AirportLoungeWhereUniqueInput
  }

  /**
   * AirportLounge findUniqueOrThrow
   */
  export type AirportLoungeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * Filter, which AirportLounge to fetch.
     */
    where: AirportLoungeWhereUniqueInput
  }

  /**
   * AirportLounge findFirst
   */
  export type AirportLoungeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * Filter, which AirportLounge to fetch.
     */
    where?: AirportLoungeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirportLounges to fetch.
     */
    orderBy?: AirportLoungeOrderByWithRelationInput | AirportLoungeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirportLounges.
     */
    cursor?: AirportLoungeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirportLounges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirportLounges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirportLounges.
     */
    distinct?: AirportLoungeScalarFieldEnum | AirportLoungeScalarFieldEnum[]
  }

  /**
   * AirportLounge findFirstOrThrow
   */
  export type AirportLoungeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * Filter, which AirportLounge to fetch.
     */
    where?: AirportLoungeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirportLounges to fetch.
     */
    orderBy?: AirportLoungeOrderByWithRelationInput | AirportLoungeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirportLounges.
     */
    cursor?: AirportLoungeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirportLounges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirportLounges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirportLounges.
     */
    distinct?: AirportLoungeScalarFieldEnum | AirportLoungeScalarFieldEnum[]
  }

  /**
   * AirportLounge findMany
   */
  export type AirportLoungeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * Filter, which AirportLounges to fetch.
     */
    where?: AirportLoungeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirportLounges to fetch.
     */
    orderBy?: AirportLoungeOrderByWithRelationInput | AirportLoungeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AirportLounges.
     */
    cursor?: AirportLoungeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirportLounges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirportLounges.
     */
    skip?: number
    distinct?: AirportLoungeScalarFieldEnum | AirportLoungeScalarFieldEnum[]
  }

  /**
   * AirportLounge create
   */
  export type AirportLoungeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * The data needed to create a AirportLounge.
     */
    data: XOR<AirportLoungeCreateInput, AirportLoungeUncheckedCreateInput>
  }

  /**
   * AirportLounge createMany
   */
  export type AirportLoungeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AirportLounges.
     */
    data: AirportLoungeCreateManyInput | AirportLoungeCreateManyInput[]
  }

  /**
   * AirportLounge update
   */
  export type AirportLoungeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * The data needed to update a AirportLounge.
     */
    data: XOR<AirportLoungeUpdateInput, AirportLoungeUncheckedUpdateInput>
    /**
     * Choose, which AirportLounge to update.
     */
    where: AirportLoungeWhereUniqueInput
  }

  /**
   * AirportLounge updateMany
   */
  export type AirportLoungeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AirportLounges.
     */
    data: XOR<AirportLoungeUpdateManyMutationInput, AirportLoungeUncheckedUpdateManyInput>
    /**
     * Filter which AirportLounges to update
     */
    where?: AirportLoungeWhereInput
    /**
     * Limit how many AirportLounges to update.
     */
    limit?: number
  }

  /**
   * AirportLounge upsert
   */
  export type AirportLoungeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * The filter to search for the AirportLounge to update in case it exists.
     */
    where: AirportLoungeWhereUniqueInput
    /**
     * In case the AirportLounge found by the `where` argument doesn't exist, create a new AirportLounge with this data.
     */
    create: XOR<AirportLoungeCreateInput, AirportLoungeUncheckedCreateInput>
    /**
     * In case the AirportLounge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirportLoungeUpdateInput, AirportLoungeUncheckedUpdateInput>
  }

  /**
   * AirportLounge delete
   */
  export type AirportLoungeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
    /**
     * Filter which AirportLounge to delete.
     */
    where: AirportLoungeWhereUniqueInput
  }

  /**
   * AirportLounge deleteMany
   */
  export type AirportLoungeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirportLounges to delete
     */
    where?: AirportLoungeWhereInput
    /**
     * Limit how many AirportLounges to delete.
     */
    limit?: number
  }

  /**
   * AirportLounge findRaw
   */
  export type AirportLoungeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AirportLounge aggregateRaw
   */
  export type AirportLoungeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AirportLounge without action
   */
  export type AirportLoungeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportLounge
     */
    select?: AirportLoungeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirportLounge
     */
    omit?: AirportLoungeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    credit_card_id: 'credit_card_id',
    card_name: 'card_name',
    card_issuer: 'card_issuer',
    highlights: 'highlights',
    welcome_offers: 'welcome_offers',
    apply_link: 'apply_link',
    featured_text: 'featured_text',
    issuer_name: 'issuer_name',
    website: 'website',
    url_launch_apply: 'url_launch_apply',
    cc_apply_now_web: 'cc_apply_now_web',
    apply_link_web: 'apply_link_web',
    for_apply_card: 'for_apply_card',
    url: 'url',
    card_type: 'card_type',
    joining_fees: 'joining_fees',
    renewal_fees: 'renewal_fees',
    bsf_movies: 'bsf_movies',
    bsf_travel: 'bsf_travel',
    bsf_dining: 'bsf_dining',
    bsf_fuel: 'bsf_fuel',
    bsf_shopping: 'bsf_shopping',
    rewards: 'rewards',
    movie: 'movie',
    dining: 'dining',
    travel: 'travel',
    lounge: 'lounge',
    golf: 'golf',
    fuel: 'fuel',
    reward_redemption: 'reward_redemption'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const AirportLoungeScalarFieldEnum: {
    id: 'id',
    airport_id: 'airport_id',
    airport_city: 'airport_city',
    airport_name: 'airport_name',
    lounge_name: 'lounge_name',
    lounge_id: 'lounge_id',
    lounge_timing: 'lounge_timing',
    directions: 'directions',
    important_information: 'important_information',
    main_summary: 'main_summary',
    introduction: 'introduction',
    airport: 'airport',
    lounge_name_public: 'lounge_name_public',
    international_lounge: 'international_lounge',
    terminals_select: 'terminals_select',
    location: 'location',
    lounge_status: 'lounge_status',
    meta_title: 'meta_title',
    meta_description: 'meta_description',
    total_rated_user: 'total_rated_user',
    min_rated: 'min_rated',
    max_rated: 'max_rated',
    average_rated: 'average_rated',
    total_rating_count: 'total_rating_count',
    airport_image_map: 'airport_image_map',
    lounge_images: 'lounge_images',
    amenities_id: 'amenities_id',
    amenities_field: 'amenities_field',
    amenities_order: 'amenities_order',
    amenities_component_type: 'amenities_component_type',
    amenities_component_id: 'amenities_component_id',
    amenities_lounge_detail_id: 'amenities_lounge_detail_id',
    amenities_food: 'amenities_food',
    amenities_disabled_access: 'amenities_disabled_access',
    amenities_tv: 'amenities_tv',
    amenities_internet: 'amenities_internet',
    amenities_no_smoking: 'amenities_no_smoking',
    amenities_smoking_area: 'amenities_smoking_area',
    amenities_alcoholic_drinks: 'amenities_alcoholic_drinks',
    amenities_newspapers_magazines: 'amenities_newspapers_magazines',
    amenities_wifi: 'amenities_wifi',
    amenities_air_conditioning: 'amenities_air_conditioning',
    amenities_television: 'amenities_television',
    amenities_shower: 'amenities_shower',
    amenities_spa: 'amenities_spa',
    amenities_printer: 'amenities_printer'
  };

  export type AirportLoungeScalarFieldEnum = (typeof AirportLoungeScalarFieldEnum)[keyof typeof AirportLoungeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    credit_card_id?: IntFilter<"Card"> | number
    card_name?: StringFilter<"Card"> | string
    card_issuer?: IntFilter<"Card"> | number
    highlights?: StringNullableListFilter<"Card">
    welcome_offers?: StringNullableFilter<"Card"> | string | null
    apply_link?: StringNullableFilter<"Card"> | string | null
    featured_text?: StringNullableFilter<"Card"> | string | null
    issuer_name?: StringNullableFilter<"Card"> | string | null
    website?: StringNullableFilter<"Card"> | string | null
    url_launch_apply?: BoolFilter<"Card"> | boolean
    cc_apply_now_web?: BoolFilter<"Card"> | boolean
    apply_link_web?: StringNullableFilter<"Card"> | string | null
    for_apply_card?: BoolFilter<"Card"> | boolean
    url?: StringNullableFilter<"Card"> | string | null
    card_type?: StringNullableFilter<"Card"> | string | null
    joining_fees?: StringNullableFilter<"Card"> | string | null
    renewal_fees?: StringNullableFilter<"Card"> | string | null
    bsf_movies?: BoolFilter<"Card"> | boolean
    bsf_travel?: BoolFilter<"Card"> | boolean
    bsf_dining?: BoolFilter<"Card"> | boolean
    bsf_fuel?: BoolFilter<"Card"> | boolean
    bsf_shopping?: BoolFilter<"Card"> | boolean
    rewards?: StringNullableListFilter<"Card">
    movie?: StringNullableFilter<"Card"> | string | null
    dining?: StringNullableFilter<"Card"> | string | null
    travel?: StringNullableFilter<"Card"> | string | null
    lounge?: StringNullableFilter<"Card"> | string | null
    golf?: StringNullableFilter<"Card"> | string | null
    fuel?: StringNullableFilter<"Card"> | string | null
    reward_redemption?: StringNullableListFilter<"Card">
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    credit_card_id?: SortOrder
    card_name?: SortOrder
    card_issuer?: SortOrder
    highlights?: SortOrder
    welcome_offers?: SortOrder
    apply_link?: SortOrder
    featured_text?: SortOrder
    issuer_name?: SortOrder
    website?: SortOrder
    url_launch_apply?: SortOrder
    cc_apply_now_web?: SortOrder
    apply_link_web?: SortOrder
    for_apply_card?: SortOrder
    url?: SortOrder
    card_type?: SortOrder
    joining_fees?: SortOrder
    renewal_fees?: SortOrder
    bsf_movies?: SortOrder
    bsf_travel?: SortOrder
    bsf_dining?: SortOrder
    bsf_fuel?: SortOrder
    bsf_shopping?: SortOrder
    rewards?: SortOrder
    movie?: SortOrder
    dining?: SortOrder
    travel?: SortOrder
    lounge?: SortOrder
    golf?: SortOrder
    fuel?: SortOrder
    reward_redemption?: SortOrder
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    credit_card_id?: IntFilter<"Card"> | number
    card_name?: StringFilter<"Card"> | string
    card_issuer?: IntFilter<"Card"> | number
    highlights?: StringNullableListFilter<"Card">
    welcome_offers?: StringNullableFilter<"Card"> | string | null
    apply_link?: StringNullableFilter<"Card"> | string | null
    featured_text?: StringNullableFilter<"Card"> | string | null
    issuer_name?: StringNullableFilter<"Card"> | string | null
    website?: StringNullableFilter<"Card"> | string | null
    url_launch_apply?: BoolFilter<"Card"> | boolean
    cc_apply_now_web?: BoolFilter<"Card"> | boolean
    apply_link_web?: StringNullableFilter<"Card"> | string | null
    for_apply_card?: BoolFilter<"Card"> | boolean
    url?: StringNullableFilter<"Card"> | string | null
    card_type?: StringNullableFilter<"Card"> | string | null
    joining_fees?: StringNullableFilter<"Card"> | string | null
    renewal_fees?: StringNullableFilter<"Card"> | string | null
    bsf_movies?: BoolFilter<"Card"> | boolean
    bsf_travel?: BoolFilter<"Card"> | boolean
    bsf_dining?: BoolFilter<"Card"> | boolean
    bsf_fuel?: BoolFilter<"Card"> | boolean
    bsf_shopping?: BoolFilter<"Card"> | boolean
    rewards?: StringNullableListFilter<"Card">
    movie?: StringNullableFilter<"Card"> | string | null
    dining?: StringNullableFilter<"Card"> | string | null
    travel?: StringNullableFilter<"Card"> | string | null
    lounge?: StringNullableFilter<"Card"> | string | null
    golf?: StringNullableFilter<"Card"> | string | null
    fuel?: StringNullableFilter<"Card"> | string | null
    reward_redemption?: StringNullableListFilter<"Card">
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    credit_card_id?: SortOrder
    card_name?: SortOrder
    card_issuer?: SortOrder
    highlights?: SortOrder
    welcome_offers?: SortOrder
    apply_link?: SortOrder
    featured_text?: SortOrder
    issuer_name?: SortOrder
    website?: SortOrder
    url_launch_apply?: SortOrder
    cc_apply_now_web?: SortOrder
    apply_link_web?: SortOrder
    for_apply_card?: SortOrder
    url?: SortOrder
    card_type?: SortOrder
    joining_fees?: SortOrder
    renewal_fees?: SortOrder
    bsf_movies?: SortOrder
    bsf_travel?: SortOrder
    bsf_dining?: SortOrder
    bsf_fuel?: SortOrder
    bsf_shopping?: SortOrder
    rewards?: SortOrder
    movie?: SortOrder
    dining?: SortOrder
    travel?: SortOrder
    lounge?: SortOrder
    golf?: SortOrder
    fuel?: SortOrder
    reward_redemption?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    credit_card_id?: IntWithAggregatesFilter<"Card"> | number
    card_name?: StringWithAggregatesFilter<"Card"> | string
    card_issuer?: IntWithAggregatesFilter<"Card"> | number
    highlights?: StringNullableListFilter<"Card">
    welcome_offers?: StringNullableWithAggregatesFilter<"Card"> | string | null
    apply_link?: StringNullableWithAggregatesFilter<"Card"> | string | null
    featured_text?: StringNullableWithAggregatesFilter<"Card"> | string | null
    issuer_name?: StringNullableWithAggregatesFilter<"Card"> | string | null
    website?: StringNullableWithAggregatesFilter<"Card"> | string | null
    url_launch_apply?: BoolWithAggregatesFilter<"Card"> | boolean
    cc_apply_now_web?: BoolWithAggregatesFilter<"Card"> | boolean
    apply_link_web?: StringNullableWithAggregatesFilter<"Card"> | string | null
    for_apply_card?: BoolWithAggregatesFilter<"Card"> | boolean
    url?: StringNullableWithAggregatesFilter<"Card"> | string | null
    card_type?: StringNullableWithAggregatesFilter<"Card"> | string | null
    joining_fees?: StringNullableWithAggregatesFilter<"Card"> | string | null
    renewal_fees?: StringNullableWithAggregatesFilter<"Card"> | string | null
    bsf_movies?: BoolWithAggregatesFilter<"Card"> | boolean
    bsf_travel?: BoolWithAggregatesFilter<"Card"> | boolean
    bsf_dining?: BoolWithAggregatesFilter<"Card"> | boolean
    bsf_fuel?: BoolWithAggregatesFilter<"Card"> | boolean
    bsf_shopping?: BoolWithAggregatesFilter<"Card"> | boolean
    rewards?: StringNullableListFilter<"Card">
    movie?: StringNullableWithAggregatesFilter<"Card"> | string | null
    dining?: StringNullableWithAggregatesFilter<"Card"> | string | null
    travel?: StringNullableWithAggregatesFilter<"Card"> | string | null
    lounge?: StringNullableWithAggregatesFilter<"Card"> | string | null
    golf?: StringNullableWithAggregatesFilter<"Card"> | string | null
    fuel?: StringNullableWithAggregatesFilter<"Card"> | string | null
    reward_redemption?: StringNullableListFilter<"Card">
  }

  export type AirportLoungeWhereInput = {
    AND?: AirportLoungeWhereInput | AirportLoungeWhereInput[]
    OR?: AirportLoungeWhereInput[]
    NOT?: AirportLoungeWhereInput | AirportLoungeWhereInput[]
    id?: StringFilter<"AirportLounge"> | string
    airport_id?: StringFilter<"AirportLounge"> | string
    airport_city?: StringFilter<"AirportLounge"> | string
    airport_name?: StringFilter<"AirportLounge"> | string
    lounge_name?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_id?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_timing?: StringNullableFilter<"AirportLounge"> | string | null
    directions?: StringNullableFilter<"AirportLounge"> | string | null
    important_information?: StringNullableFilter<"AirportLounge"> | string | null
    main_summary?: StringNullableFilter<"AirportLounge"> | string | null
    introduction?: StringNullableFilter<"AirportLounge"> | string | null
    airport?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_name_public?: StringNullableFilter<"AirportLounge"> | string | null
    international_lounge?: BoolNullableFilter<"AirportLounge"> | boolean | null
    terminals_select?: StringNullableFilter<"AirportLounge"> | string | null
    location?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_status?: BoolNullableFilter<"AirportLounge"> | boolean | null
    meta_title?: StringNullableFilter<"AirportLounge"> | string | null
    meta_description?: StringNullableFilter<"AirportLounge"> | string | null
    total_rated_user?: IntNullableFilter<"AirportLounge"> | number | null
    min_rated?: IntNullableFilter<"AirportLounge"> | number | null
    max_rated?: IntNullableFilter<"AirportLounge"> | number | null
    average_rated?: FloatNullableFilter<"AirportLounge"> | number | null
    total_rating_count?: IntNullableFilter<"AirportLounge"> | number | null
    airport_image_map?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_images?: StringNullableListFilter<"AirportLounge">
    amenities_id?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_field?: StringNullableFilter<"AirportLounge"> | string | null
    amenities_order?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_component_type?: StringNullableFilter<"AirportLounge"> | string | null
    amenities_component_id?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_lounge_detail_id?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_food?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_disabled_access?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_tv?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_internet?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_no_smoking?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_smoking_area?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_alcoholic_drinks?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_newspapers_magazines?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_wifi?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_air_conditioning?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_television?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_shower?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_spa?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_printer?: BoolNullableFilter<"AirportLounge"> | boolean | null
  }

  export type AirportLoungeOrderByWithRelationInput = {
    id?: SortOrder
    airport_id?: SortOrder
    airport_city?: SortOrder
    airport_name?: SortOrder
    lounge_name?: SortOrder
    lounge_id?: SortOrder
    lounge_timing?: SortOrder
    directions?: SortOrder
    important_information?: SortOrder
    main_summary?: SortOrder
    introduction?: SortOrder
    airport?: SortOrder
    lounge_name_public?: SortOrder
    international_lounge?: SortOrder
    terminals_select?: SortOrder
    location?: SortOrder
    lounge_status?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    total_rated_user?: SortOrder
    min_rated?: SortOrder
    max_rated?: SortOrder
    average_rated?: SortOrder
    total_rating_count?: SortOrder
    airport_image_map?: SortOrder
    lounge_images?: SortOrder
    amenities_id?: SortOrder
    amenities_field?: SortOrder
    amenities_order?: SortOrder
    amenities_component_type?: SortOrder
    amenities_component_id?: SortOrder
    amenities_lounge_detail_id?: SortOrder
    amenities_food?: SortOrder
    amenities_disabled_access?: SortOrder
    amenities_tv?: SortOrder
    amenities_internet?: SortOrder
    amenities_no_smoking?: SortOrder
    amenities_smoking_area?: SortOrder
    amenities_alcoholic_drinks?: SortOrder
    amenities_newspapers_magazines?: SortOrder
    amenities_wifi?: SortOrder
    amenities_air_conditioning?: SortOrder
    amenities_television?: SortOrder
    amenities_shower?: SortOrder
    amenities_spa?: SortOrder
    amenities_printer?: SortOrder
  }

  export type AirportLoungeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AirportLoungeWhereInput | AirportLoungeWhereInput[]
    OR?: AirportLoungeWhereInput[]
    NOT?: AirportLoungeWhereInput | AirportLoungeWhereInput[]
    airport_id?: StringFilter<"AirportLounge"> | string
    airport_city?: StringFilter<"AirportLounge"> | string
    airport_name?: StringFilter<"AirportLounge"> | string
    lounge_name?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_id?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_timing?: StringNullableFilter<"AirportLounge"> | string | null
    directions?: StringNullableFilter<"AirportLounge"> | string | null
    important_information?: StringNullableFilter<"AirportLounge"> | string | null
    main_summary?: StringNullableFilter<"AirportLounge"> | string | null
    introduction?: StringNullableFilter<"AirportLounge"> | string | null
    airport?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_name_public?: StringNullableFilter<"AirportLounge"> | string | null
    international_lounge?: BoolNullableFilter<"AirportLounge"> | boolean | null
    terminals_select?: StringNullableFilter<"AirportLounge"> | string | null
    location?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_status?: BoolNullableFilter<"AirportLounge"> | boolean | null
    meta_title?: StringNullableFilter<"AirportLounge"> | string | null
    meta_description?: StringNullableFilter<"AirportLounge"> | string | null
    total_rated_user?: IntNullableFilter<"AirportLounge"> | number | null
    min_rated?: IntNullableFilter<"AirportLounge"> | number | null
    max_rated?: IntNullableFilter<"AirportLounge"> | number | null
    average_rated?: FloatNullableFilter<"AirportLounge"> | number | null
    total_rating_count?: IntNullableFilter<"AirportLounge"> | number | null
    airport_image_map?: StringNullableFilter<"AirportLounge"> | string | null
    lounge_images?: StringNullableListFilter<"AirportLounge">
    amenities_id?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_field?: StringNullableFilter<"AirportLounge"> | string | null
    amenities_order?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_component_type?: StringNullableFilter<"AirportLounge"> | string | null
    amenities_component_id?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_lounge_detail_id?: IntNullableFilter<"AirportLounge"> | number | null
    amenities_food?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_disabled_access?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_tv?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_internet?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_no_smoking?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_smoking_area?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_alcoholic_drinks?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_newspapers_magazines?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_wifi?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_air_conditioning?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_television?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_shower?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_spa?: BoolNullableFilter<"AirportLounge"> | boolean | null
    amenities_printer?: BoolNullableFilter<"AirportLounge"> | boolean | null
  }, "id">

  export type AirportLoungeOrderByWithAggregationInput = {
    id?: SortOrder
    airport_id?: SortOrder
    airport_city?: SortOrder
    airport_name?: SortOrder
    lounge_name?: SortOrder
    lounge_id?: SortOrder
    lounge_timing?: SortOrder
    directions?: SortOrder
    important_information?: SortOrder
    main_summary?: SortOrder
    introduction?: SortOrder
    airport?: SortOrder
    lounge_name_public?: SortOrder
    international_lounge?: SortOrder
    terminals_select?: SortOrder
    location?: SortOrder
    lounge_status?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    total_rated_user?: SortOrder
    min_rated?: SortOrder
    max_rated?: SortOrder
    average_rated?: SortOrder
    total_rating_count?: SortOrder
    airport_image_map?: SortOrder
    lounge_images?: SortOrder
    amenities_id?: SortOrder
    amenities_field?: SortOrder
    amenities_order?: SortOrder
    amenities_component_type?: SortOrder
    amenities_component_id?: SortOrder
    amenities_lounge_detail_id?: SortOrder
    amenities_food?: SortOrder
    amenities_disabled_access?: SortOrder
    amenities_tv?: SortOrder
    amenities_internet?: SortOrder
    amenities_no_smoking?: SortOrder
    amenities_smoking_area?: SortOrder
    amenities_alcoholic_drinks?: SortOrder
    amenities_newspapers_magazines?: SortOrder
    amenities_wifi?: SortOrder
    amenities_air_conditioning?: SortOrder
    amenities_television?: SortOrder
    amenities_shower?: SortOrder
    amenities_spa?: SortOrder
    amenities_printer?: SortOrder
    _count?: AirportLoungeCountOrderByAggregateInput
    _avg?: AirportLoungeAvgOrderByAggregateInput
    _max?: AirportLoungeMaxOrderByAggregateInput
    _min?: AirportLoungeMinOrderByAggregateInput
    _sum?: AirportLoungeSumOrderByAggregateInput
  }

  export type AirportLoungeScalarWhereWithAggregatesInput = {
    AND?: AirportLoungeScalarWhereWithAggregatesInput | AirportLoungeScalarWhereWithAggregatesInput[]
    OR?: AirportLoungeScalarWhereWithAggregatesInput[]
    NOT?: AirportLoungeScalarWhereWithAggregatesInput | AirportLoungeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AirportLounge"> | string
    airport_id?: StringWithAggregatesFilter<"AirportLounge"> | string
    airport_city?: StringWithAggregatesFilter<"AirportLounge"> | string
    airport_name?: StringWithAggregatesFilter<"AirportLounge"> | string
    lounge_name?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    lounge_id?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    lounge_timing?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    directions?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    important_information?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    main_summary?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    introduction?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    airport?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    lounge_name_public?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    international_lounge?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    terminals_select?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    location?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    lounge_status?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    meta_title?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    meta_description?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    total_rated_user?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    min_rated?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    max_rated?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    average_rated?: FloatNullableWithAggregatesFilter<"AirportLounge"> | number | null
    total_rating_count?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    airport_image_map?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    lounge_images?: StringNullableListFilter<"AirportLounge">
    amenities_id?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    amenities_field?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    amenities_order?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    amenities_component_type?: StringNullableWithAggregatesFilter<"AirportLounge"> | string | null
    amenities_component_id?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    amenities_lounge_detail_id?: IntNullableWithAggregatesFilter<"AirportLounge"> | number | null
    amenities_food?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_disabled_access?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_tv?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_internet?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_no_smoking?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_smoking_area?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_alcoholic_drinks?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_newspapers_magazines?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_wifi?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_air_conditioning?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_television?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_shower?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_spa?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
    amenities_printer?: BoolNullableWithAggregatesFilter<"AirportLounge"> | boolean | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardCreateInput = {
    id?: string
    credit_card_id: number
    card_name: string
    card_issuer: number
    highlights?: CardCreatehighlightsInput | string[]
    welcome_offers?: string | null
    apply_link?: string | null
    featured_text?: string | null
    issuer_name?: string | null
    website?: string | null
    url_launch_apply: boolean
    cc_apply_now_web: boolean
    apply_link_web?: string | null
    for_apply_card: boolean
    url?: string | null
    card_type?: string | null
    joining_fees?: string | null
    renewal_fees?: string | null
    bsf_movies: boolean
    bsf_travel: boolean
    bsf_dining: boolean
    bsf_fuel: boolean
    bsf_shopping: boolean
    rewards?: CardCreaterewardsInput | string[]
    movie?: string | null
    dining?: string | null
    travel?: string | null
    lounge?: string | null
    golf?: string | null
    fuel?: string | null
    reward_redemption?: CardCreatereward_redemptionInput | string[]
  }

  export type CardUncheckedCreateInput = {
    id?: string
    credit_card_id: number
    card_name: string
    card_issuer: number
    highlights?: CardCreatehighlightsInput | string[]
    welcome_offers?: string | null
    apply_link?: string | null
    featured_text?: string | null
    issuer_name?: string | null
    website?: string | null
    url_launch_apply: boolean
    cc_apply_now_web: boolean
    apply_link_web?: string | null
    for_apply_card: boolean
    url?: string | null
    card_type?: string | null
    joining_fees?: string | null
    renewal_fees?: string | null
    bsf_movies: boolean
    bsf_travel: boolean
    bsf_dining: boolean
    bsf_fuel: boolean
    bsf_shopping: boolean
    rewards?: CardCreaterewardsInput | string[]
    movie?: string | null
    dining?: string | null
    travel?: string | null
    lounge?: string | null
    golf?: string | null
    fuel?: string | null
    reward_redemption?: CardCreatereward_redemptionInput | string[]
  }

  export type CardUpdateInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    card_issuer?: IntFieldUpdateOperationsInput | number
    highlights?: CardUpdatehighlightsInput | string[]
    welcome_offers?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    featured_text?: NullableStringFieldUpdateOperationsInput | string | null
    issuer_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    url_launch_apply?: BoolFieldUpdateOperationsInput | boolean
    cc_apply_now_web?: BoolFieldUpdateOperationsInput | boolean
    apply_link_web?: NullableStringFieldUpdateOperationsInput | string | null
    for_apply_card?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
    joining_fees?: NullableStringFieldUpdateOperationsInput | string | null
    renewal_fees?: NullableStringFieldUpdateOperationsInput | string | null
    bsf_movies?: BoolFieldUpdateOperationsInput | boolean
    bsf_travel?: BoolFieldUpdateOperationsInput | boolean
    bsf_dining?: BoolFieldUpdateOperationsInput | boolean
    bsf_fuel?: BoolFieldUpdateOperationsInput | boolean
    bsf_shopping?: BoolFieldUpdateOperationsInput | boolean
    rewards?: CardUpdaterewardsInput | string[]
    movie?: NullableStringFieldUpdateOperationsInput | string | null
    dining?: NullableStringFieldUpdateOperationsInput | string | null
    travel?: NullableStringFieldUpdateOperationsInput | string | null
    lounge?: NullableStringFieldUpdateOperationsInput | string | null
    golf?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: NullableStringFieldUpdateOperationsInput | string | null
    reward_redemption?: CardUpdatereward_redemptionInput | string[]
  }

  export type CardUncheckedUpdateInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    card_issuer?: IntFieldUpdateOperationsInput | number
    highlights?: CardUpdatehighlightsInput | string[]
    welcome_offers?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    featured_text?: NullableStringFieldUpdateOperationsInput | string | null
    issuer_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    url_launch_apply?: BoolFieldUpdateOperationsInput | boolean
    cc_apply_now_web?: BoolFieldUpdateOperationsInput | boolean
    apply_link_web?: NullableStringFieldUpdateOperationsInput | string | null
    for_apply_card?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
    joining_fees?: NullableStringFieldUpdateOperationsInput | string | null
    renewal_fees?: NullableStringFieldUpdateOperationsInput | string | null
    bsf_movies?: BoolFieldUpdateOperationsInput | boolean
    bsf_travel?: BoolFieldUpdateOperationsInput | boolean
    bsf_dining?: BoolFieldUpdateOperationsInput | boolean
    bsf_fuel?: BoolFieldUpdateOperationsInput | boolean
    bsf_shopping?: BoolFieldUpdateOperationsInput | boolean
    rewards?: CardUpdaterewardsInput | string[]
    movie?: NullableStringFieldUpdateOperationsInput | string | null
    dining?: NullableStringFieldUpdateOperationsInput | string | null
    travel?: NullableStringFieldUpdateOperationsInput | string | null
    lounge?: NullableStringFieldUpdateOperationsInput | string | null
    golf?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: NullableStringFieldUpdateOperationsInput | string | null
    reward_redemption?: CardUpdatereward_redemptionInput | string[]
  }

  export type CardCreateManyInput = {
    id?: string
    credit_card_id: number
    card_name: string
    card_issuer: number
    highlights?: CardCreatehighlightsInput | string[]
    welcome_offers?: string | null
    apply_link?: string | null
    featured_text?: string | null
    issuer_name?: string | null
    website?: string | null
    url_launch_apply: boolean
    cc_apply_now_web: boolean
    apply_link_web?: string | null
    for_apply_card: boolean
    url?: string | null
    card_type?: string | null
    joining_fees?: string | null
    renewal_fees?: string | null
    bsf_movies: boolean
    bsf_travel: boolean
    bsf_dining: boolean
    bsf_fuel: boolean
    bsf_shopping: boolean
    rewards?: CardCreaterewardsInput | string[]
    movie?: string | null
    dining?: string | null
    travel?: string | null
    lounge?: string | null
    golf?: string | null
    fuel?: string | null
    reward_redemption?: CardCreatereward_redemptionInput | string[]
  }

  export type CardUpdateManyMutationInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    card_issuer?: IntFieldUpdateOperationsInput | number
    highlights?: CardUpdatehighlightsInput | string[]
    welcome_offers?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    featured_text?: NullableStringFieldUpdateOperationsInput | string | null
    issuer_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    url_launch_apply?: BoolFieldUpdateOperationsInput | boolean
    cc_apply_now_web?: BoolFieldUpdateOperationsInput | boolean
    apply_link_web?: NullableStringFieldUpdateOperationsInput | string | null
    for_apply_card?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
    joining_fees?: NullableStringFieldUpdateOperationsInput | string | null
    renewal_fees?: NullableStringFieldUpdateOperationsInput | string | null
    bsf_movies?: BoolFieldUpdateOperationsInput | boolean
    bsf_travel?: BoolFieldUpdateOperationsInput | boolean
    bsf_dining?: BoolFieldUpdateOperationsInput | boolean
    bsf_fuel?: BoolFieldUpdateOperationsInput | boolean
    bsf_shopping?: BoolFieldUpdateOperationsInput | boolean
    rewards?: CardUpdaterewardsInput | string[]
    movie?: NullableStringFieldUpdateOperationsInput | string | null
    dining?: NullableStringFieldUpdateOperationsInput | string | null
    travel?: NullableStringFieldUpdateOperationsInput | string | null
    lounge?: NullableStringFieldUpdateOperationsInput | string | null
    golf?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: NullableStringFieldUpdateOperationsInput | string | null
    reward_redemption?: CardUpdatereward_redemptionInput | string[]
  }

  export type CardUncheckedUpdateManyInput = {
    credit_card_id?: IntFieldUpdateOperationsInput | number
    card_name?: StringFieldUpdateOperationsInput | string
    card_issuer?: IntFieldUpdateOperationsInput | number
    highlights?: CardUpdatehighlightsInput | string[]
    welcome_offers?: NullableStringFieldUpdateOperationsInput | string | null
    apply_link?: NullableStringFieldUpdateOperationsInput | string | null
    featured_text?: NullableStringFieldUpdateOperationsInput | string | null
    issuer_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    url_launch_apply?: BoolFieldUpdateOperationsInput | boolean
    cc_apply_now_web?: BoolFieldUpdateOperationsInput | boolean
    apply_link_web?: NullableStringFieldUpdateOperationsInput | string | null
    for_apply_card?: BoolFieldUpdateOperationsInput | boolean
    url?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
    joining_fees?: NullableStringFieldUpdateOperationsInput | string | null
    renewal_fees?: NullableStringFieldUpdateOperationsInput | string | null
    bsf_movies?: BoolFieldUpdateOperationsInput | boolean
    bsf_travel?: BoolFieldUpdateOperationsInput | boolean
    bsf_dining?: BoolFieldUpdateOperationsInput | boolean
    bsf_fuel?: BoolFieldUpdateOperationsInput | boolean
    bsf_shopping?: BoolFieldUpdateOperationsInput | boolean
    rewards?: CardUpdaterewardsInput | string[]
    movie?: NullableStringFieldUpdateOperationsInput | string | null
    dining?: NullableStringFieldUpdateOperationsInput | string | null
    travel?: NullableStringFieldUpdateOperationsInput | string | null
    lounge?: NullableStringFieldUpdateOperationsInput | string | null
    golf?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: NullableStringFieldUpdateOperationsInput | string | null
    reward_redemption?: CardUpdatereward_redemptionInput | string[]
  }

  export type AirportLoungeCreateInput = {
    id?: string
    airport_id: string
    airport_city: string
    airport_name: string
    lounge_name?: string | null
    lounge_id?: string | null
    lounge_timing?: string | null
    directions?: string | null
    important_information?: string | null
    main_summary?: string | null
    introduction?: string | null
    airport?: string | null
    lounge_name_public?: string | null
    international_lounge?: boolean | null
    terminals_select?: string | null
    location?: string | null
    lounge_status?: boolean | null
    meta_title?: string | null
    meta_description?: string | null
    total_rated_user?: number | null
    min_rated?: number | null
    max_rated?: number | null
    average_rated?: number | null
    total_rating_count?: number | null
    airport_image_map?: string | null
    lounge_images?: AirportLoungeCreatelounge_imagesInput | string[]
    amenities_id?: number | null
    amenities_field?: string | null
    amenities_order?: number | null
    amenities_component_type?: string | null
    amenities_component_id?: number | null
    amenities_lounge_detail_id?: number | null
    amenities_food?: boolean | null
    amenities_disabled_access?: boolean | null
    amenities_tv?: boolean | null
    amenities_internet?: boolean | null
    amenities_no_smoking?: boolean | null
    amenities_smoking_area?: boolean | null
    amenities_alcoholic_drinks?: boolean | null
    amenities_newspapers_magazines?: boolean | null
    amenities_wifi?: boolean | null
    amenities_air_conditioning?: boolean | null
    amenities_television?: boolean | null
    amenities_shower?: boolean | null
    amenities_spa?: boolean | null
    amenities_printer?: boolean | null
  }

  export type AirportLoungeUncheckedCreateInput = {
    id?: string
    airport_id: string
    airport_city: string
    airport_name: string
    lounge_name?: string | null
    lounge_id?: string | null
    lounge_timing?: string | null
    directions?: string | null
    important_information?: string | null
    main_summary?: string | null
    introduction?: string | null
    airport?: string | null
    lounge_name_public?: string | null
    international_lounge?: boolean | null
    terminals_select?: string | null
    location?: string | null
    lounge_status?: boolean | null
    meta_title?: string | null
    meta_description?: string | null
    total_rated_user?: number | null
    min_rated?: number | null
    max_rated?: number | null
    average_rated?: number | null
    total_rating_count?: number | null
    airport_image_map?: string | null
    lounge_images?: AirportLoungeCreatelounge_imagesInput | string[]
    amenities_id?: number | null
    amenities_field?: string | null
    amenities_order?: number | null
    amenities_component_type?: string | null
    amenities_component_id?: number | null
    amenities_lounge_detail_id?: number | null
    amenities_food?: boolean | null
    amenities_disabled_access?: boolean | null
    amenities_tv?: boolean | null
    amenities_internet?: boolean | null
    amenities_no_smoking?: boolean | null
    amenities_smoking_area?: boolean | null
    amenities_alcoholic_drinks?: boolean | null
    amenities_newspapers_magazines?: boolean | null
    amenities_wifi?: boolean | null
    amenities_air_conditioning?: boolean | null
    amenities_television?: boolean | null
    amenities_shower?: boolean | null
    amenities_spa?: boolean | null
    amenities_printer?: boolean | null
  }

  export type AirportLoungeUpdateInput = {
    airport_id?: StringFieldUpdateOperationsInput | string
    airport_city?: StringFieldUpdateOperationsInput | string
    airport_name?: StringFieldUpdateOperationsInput | string
    lounge_name?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_id?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_timing?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    important_information?: NullableStringFieldUpdateOperationsInput | string | null
    main_summary?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    airport?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_name_public?: NullableStringFieldUpdateOperationsInput | string | null
    international_lounge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    terminals_select?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    total_rated_user?: NullableIntFieldUpdateOperationsInput | number | null
    min_rated?: NullableIntFieldUpdateOperationsInput | number | null
    max_rated?: NullableIntFieldUpdateOperationsInput | number | null
    average_rated?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    airport_image_map?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_images?: AirportLoungeUpdatelounge_imagesInput | string[]
    amenities_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_field?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_order?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_component_type?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_component_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_lounge_detail_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_disabled_access?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_tv?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_internet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_no_smoking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_smoking_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_alcoholic_drinks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_newspapers_magazines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_air_conditioning?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_television?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_shower?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_spa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_printer?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AirportLoungeUncheckedUpdateInput = {
    airport_id?: StringFieldUpdateOperationsInput | string
    airport_city?: StringFieldUpdateOperationsInput | string
    airport_name?: StringFieldUpdateOperationsInput | string
    lounge_name?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_id?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_timing?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    important_information?: NullableStringFieldUpdateOperationsInput | string | null
    main_summary?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    airport?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_name_public?: NullableStringFieldUpdateOperationsInput | string | null
    international_lounge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    terminals_select?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    total_rated_user?: NullableIntFieldUpdateOperationsInput | number | null
    min_rated?: NullableIntFieldUpdateOperationsInput | number | null
    max_rated?: NullableIntFieldUpdateOperationsInput | number | null
    average_rated?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    airport_image_map?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_images?: AirportLoungeUpdatelounge_imagesInput | string[]
    amenities_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_field?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_order?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_component_type?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_component_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_lounge_detail_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_disabled_access?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_tv?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_internet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_no_smoking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_smoking_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_alcoholic_drinks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_newspapers_magazines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_air_conditioning?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_television?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_shower?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_spa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_printer?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AirportLoungeCreateManyInput = {
    id?: string
    airport_id: string
    airport_city: string
    airport_name: string
    lounge_name?: string | null
    lounge_id?: string | null
    lounge_timing?: string | null
    directions?: string | null
    important_information?: string | null
    main_summary?: string | null
    introduction?: string | null
    airport?: string | null
    lounge_name_public?: string | null
    international_lounge?: boolean | null
    terminals_select?: string | null
    location?: string | null
    lounge_status?: boolean | null
    meta_title?: string | null
    meta_description?: string | null
    total_rated_user?: number | null
    min_rated?: number | null
    max_rated?: number | null
    average_rated?: number | null
    total_rating_count?: number | null
    airport_image_map?: string | null
    lounge_images?: AirportLoungeCreatelounge_imagesInput | string[]
    amenities_id?: number | null
    amenities_field?: string | null
    amenities_order?: number | null
    amenities_component_type?: string | null
    amenities_component_id?: number | null
    amenities_lounge_detail_id?: number | null
    amenities_food?: boolean | null
    amenities_disabled_access?: boolean | null
    amenities_tv?: boolean | null
    amenities_internet?: boolean | null
    amenities_no_smoking?: boolean | null
    amenities_smoking_area?: boolean | null
    amenities_alcoholic_drinks?: boolean | null
    amenities_newspapers_magazines?: boolean | null
    amenities_wifi?: boolean | null
    amenities_air_conditioning?: boolean | null
    amenities_television?: boolean | null
    amenities_shower?: boolean | null
    amenities_spa?: boolean | null
    amenities_printer?: boolean | null
  }

  export type AirportLoungeUpdateManyMutationInput = {
    airport_id?: StringFieldUpdateOperationsInput | string
    airport_city?: StringFieldUpdateOperationsInput | string
    airport_name?: StringFieldUpdateOperationsInput | string
    lounge_name?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_id?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_timing?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    important_information?: NullableStringFieldUpdateOperationsInput | string | null
    main_summary?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    airport?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_name_public?: NullableStringFieldUpdateOperationsInput | string | null
    international_lounge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    terminals_select?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    total_rated_user?: NullableIntFieldUpdateOperationsInput | number | null
    min_rated?: NullableIntFieldUpdateOperationsInput | number | null
    max_rated?: NullableIntFieldUpdateOperationsInput | number | null
    average_rated?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    airport_image_map?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_images?: AirportLoungeUpdatelounge_imagesInput | string[]
    amenities_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_field?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_order?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_component_type?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_component_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_lounge_detail_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_disabled_access?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_tv?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_internet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_no_smoking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_smoking_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_alcoholic_drinks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_newspapers_magazines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_air_conditioning?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_television?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_shower?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_spa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_printer?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AirportLoungeUncheckedUpdateManyInput = {
    airport_id?: StringFieldUpdateOperationsInput | string
    airport_city?: StringFieldUpdateOperationsInput | string
    airport_name?: StringFieldUpdateOperationsInput | string
    lounge_name?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_id?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_timing?: NullableStringFieldUpdateOperationsInput | string | null
    directions?: NullableStringFieldUpdateOperationsInput | string | null
    important_information?: NullableStringFieldUpdateOperationsInput | string | null
    main_summary?: NullableStringFieldUpdateOperationsInput | string | null
    introduction?: NullableStringFieldUpdateOperationsInput | string | null
    airport?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_name_public?: NullableStringFieldUpdateOperationsInput | string | null
    international_lounge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    terminals_select?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    meta_title?: NullableStringFieldUpdateOperationsInput | string | null
    meta_description?: NullableStringFieldUpdateOperationsInput | string | null
    total_rated_user?: NullableIntFieldUpdateOperationsInput | number | null
    min_rated?: NullableIntFieldUpdateOperationsInput | number | null
    max_rated?: NullableIntFieldUpdateOperationsInput | number | null
    average_rated?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    airport_image_map?: NullableStringFieldUpdateOperationsInput | string | null
    lounge_images?: AirportLoungeUpdatelounge_imagesInput | string[]
    amenities_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_field?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_order?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_component_type?: NullableStringFieldUpdateOperationsInput | string | null
    amenities_component_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_lounge_detail_id?: NullableIntFieldUpdateOperationsInput | number | null
    amenities_food?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_disabled_access?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_tv?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_internet?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_no_smoking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_smoking_area?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_alcoholic_drinks?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_newspapers_magazines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_wifi?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_air_conditioning?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_television?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_shower?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_spa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amenities_printer?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    credit_card_id?: SortOrder
    card_name?: SortOrder
    card_issuer?: SortOrder
    highlights?: SortOrder
    welcome_offers?: SortOrder
    apply_link?: SortOrder
    featured_text?: SortOrder
    issuer_name?: SortOrder
    website?: SortOrder
    url_launch_apply?: SortOrder
    cc_apply_now_web?: SortOrder
    apply_link_web?: SortOrder
    for_apply_card?: SortOrder
    url?: SortOrder
    card_type?: SortOrder
    joining_fees?: SortOrder
    renewal_fees?: SortOrder
    bsf_movies?: SortOrder
    bsf_travel?: SortOrder
    bsf_dining?: SortOrder
    bsf_fuel?: SortOrder
    bsf_shopping?: SortOrder
    rewards?: SortOrder
    movie?: SortOrder
    dining?: SortOrder
    travel?: SortOrder
    lounge?: SortOrder
    golf?: SortOrder
    fuel?: SortOrder
    reward_redemption?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    credit_card_id?: SortOrder
    card_issuer?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    credit_card_id?: SortOrder
    card_name?: SortOrder
    card_issuer?: SortOrder
    welcome_offers?: SortOrder
    apply_link?: SortOrder
    featured_text?: SortOrder
    issuer_name?: SortOrder
    website?: SortOrder
    url_launch_apply?: SortOrder
    cc_apply_now_web?: SortOrder
    apply_link_web?: SortOrder
    for_apply_card?: SortOrder
    url?: SortOrder
    card_type?: SortOrder
    joining_fees?: SortOrder
    renewal_fees?: SortOrder
    bsf_movies?: SortOrder
    bsf_travel?: SortOrder
    bsf_dining?: SortOrder
    bsf_fuel?: SortOrder
    bsf_shopping?: SortOrder
    movie?: SortOrder
    dining?: SortOrder
    travel?: SortOrder
    lounge?: SortOrder
    golf?: SortOrder
    fuel?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    credit_card_id?: SortOrder
    card_name?: SortOrder
    card_issuer?: SortOrder
    welcome_offers?: SortOrder
    apply_link?: SortOrder
    featured_text?: SortOrder
    issuer_name?: SortOrder
    website?: SortOrder
    url_launch_apply?: SortOrder
    cc_apply_now_web?: SortOrder
    apply_link_web?: SortOrder
    for_apply_card?: SortOrder
    url?: SortOrder
    card_type?: SortOrder
    joining_fees?: SortOrder
    renewal_fees?: SortOrder
    bsf_movies?: SortOrder
    bsf_travel?: SortOrder
    bsf_dining?: SortOrder
    bsf_fuel?: SortOrder
    bsf_shopping?: SortOrder
    movie?: SortOrder
    dining?: SortOrder
    travel?: SortOrder
    lounge?: SortOrder
    golf?: SortOrder
    fuel?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    credit_card_id?: SortOrder
    card_issuer?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type AirportLoungeCountOrderByAggregateInput = {
    id?: SortOrder
    airport_id?: SortOrder
    airport_city?: SortOrder
    airport_name?: SortOrder
    lounge_name?: SortOrder
    lounge_id?: SortOrder
    lounge_timing?: SortOrder
    directions?: SortOrder
    important_information?: SortOrder
    main_summary?: SortOrder
    introduction?: SortOrder
    airport?: SortOrder
    lounge_name_public?: SortOrder
    international_lounge?: SortOrder
    terminals_select?: SortOrder
    location?: SortOrder
    lounge_status?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    total_rated_user?: SortOrder
    min_rated?: SortOrder
    max_rated?: SortOrder
    average_rated?: SortOrder
    total_rating_count?: SortOrder
    airport_image_map?: SortOrder
    lounge_images?: SortOrder
    amenities_id?: SortOrder
    amenities_field?: SortOrder
    amenities_order?: SortOrder
    amenities_component_type?: SortOrder
    amenities_component_id?: SortOrder
    amenities_lounge_detail_id?: SortOrder
    amenities_food?: SortOrder
    amenities_disabled_access?: SortOrder
    amenities_tv?: SortOrder
    amenities_internet?: SortOrder
    amenities_no_smoking?: SortOrder
    amenities_smoking_area?: SortOrder
    amenities_alcoholic_drinks?: SortOrder
    amenities_newspapers_magazines?: SortOrder
    amenities_wifi?: SortOrder
    amenities_air_conditioning?: SortOrder
    amenities_television?: SortOrder
    amenities_shower?: SortOrder
    amenities_spa?: SortOrder
    amenities_printer?: SortOrder
  }

  export type AirportLoungeAvgOrderByAggregateInput = {
    total_rated_user?: SortOrder
    min_rated?: SortOrder
    max_rated?: SortOrder
    average_rated?: SortOrder
    total_rating_count?: SortOrder
    amenities_id?: SortOrder
    amenities_order?: SortOrder
    amenities_component_id?: SortOrder
    amenities_lounge_detail_id?: SortOrder
  }

  export type AirportLoungeMaxOrderByAggregateInput = {
    id?: SortOrder
    airport_id?: SortOrder
    airport_city?: SortOrder
    airport_name?: SortOrder
    lounge_name?: SortOrder
    lounge_id?: SortOrder
    lounge_timing?: SortOrder
    directions?: SortOrder
    important_information?: SortOrder
    main_summary?: SortOrder
    introduction?: SortOrder
    airport?: SortOrder
    lounge_name_public?: SortOrder
    international_lounge?: SortOrder
    terminals_select?: SortOrder
    location?: SortOrder
    lounge_status?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    total_rated_user?: SortOrder
    min_rated?: SortOrder
    max_rated?: SortOrder
    average_rated?: SortOrder
    total_rating_count?: SortOrder
    airport_image_map?: SortOrder
    amenities_id?: SortOrder
    amenities_field?: SortOrder
    amenities_order?: SortOrder
    amenities_component_type?: SortOrder
    amenities_component_id?: SortOrder
    amenities_lounge_detail_id?: SortOrder
    amenities_food?: SortOrder
    amenities_disabled_access?: SortOrder
    amenities_tv?: SortOrder
    amenities_internet?: SortOrder
    amenities_no_smoking?: SortOrder
    amenities_smoking_area?: SortOrder
    amenities_alcoholic_drinks?: SortOrder
    amenities_newspapers_magazines?: SortOrder
    amenities_wifi?: SortOrder
    amenities_air_conditioning?: SortOrder
    amenities_television?: SortOrder
    amenities_shower?: SortOrder
    amenities_spa?: SortOrder
    amenities_printer?: SortOrder
  }

  export type AirportLoungeMinOrderByAggregateInput = {
    id?: SortOrder
    airport_id?: SortOrder
    airport_city?: SortOrder
    airport_name?: SortOrder
    lounge_name?: SortOrder
    lounge_id?: SortOrder
    lounge_timing?: SortOrder
    directions?: SortOrder
    important_information?: SortOrder
    main_summary?: SortOrder
    introduction?: SortOrder
    airport?: SortOrder
    lounge_name_public?: SortOrder
    international_lounge?: SortOrder
    terminals_select?: SortOrder
    location?: SortOrder
    lounge_status?: SortOrder
    meta_title?: SortOrder
    meta_description?: SortOrder
    total_rated_user?: SortOrder
    min_rated?: SortOrder
    max_rated?: SortOrder
    average_rated?: SortOrder
    total_rating_count?: SortOrder
    airport_image_map?: SortOrder
    amenities_id?: SortOrder
    amenities_field?: SortOrder
    amenities_order?: SortOrder
    amenities_component_type?: SortOrder
    amenities_component_id?: SortOrder
    amenities_lounge_detail_id?: SortOrder
    amenities_food?: SortOrder
    amenities_disabled_access?: SortOrder
    amenities_tv?: SortOrder
    amenities_internet?: SortOrder
    amenities_no_smoking?: SortOrder
    amenities_smoking_area?: SortOrder
    amenities_alcoholic_drinks?: SortOrder
    amenities_newspapers_magazines?: SortOrder
    amenities_wifi?: SortOrder
    amenities_air_conditioning?: SortOrder
    amenities_television?: SortOrder
    amenities_shower?: SortOrder
    amenities_spa?: SortOrder
    amenities_printer?: SortOrder
  }

  export type AirportLoungeSumOrderByAggregateInput = {
    total_rated_user?: SortOrder
    min_rated?: SortOrder
    max_rated?: SortOrder
    average_rated?: SortOrder
    total_rating_count?: SortOrder
    amenities_id?: SortOrder
    amenities_order?: SortOrder
    amenities_component_id?: SortOrder
    amenities_lounge_detail_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type CardCreatehighlightsInput = {
    set: string[]
  }

  export type CardCreaterewardsInput = {
    set: string[]
  }

  export type CardCreatereward_redemptionInput = {
    set: string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdatehighlightsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CardUpdaterewardsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CardUpdatereward_redemptionInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AirportLoungeCreatelounge_imagesInput = {
    set: string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type AirportLoungeUpdatelounge_imagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}