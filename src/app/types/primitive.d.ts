type Primitive = bigint | boolean | null | number | string | symbol | undefined;

type DefinedPrimitive = Exclude<Primitive, null | undefined>;
