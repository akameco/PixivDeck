declare class Schema {
	define (nestedSchema: Object): void;
}
type SchemaOrObject = Schema | Object;

declare module 'normalizr' {
	declare class Normalizr {
		normalize (obj: Object, schema: SchemaOrObject): {result: Array<number>, entities: Object} & Object;
		Schema (key: string, options?: Object): Schema;
		arrayOf (schema: SchemaOrObject, options?: Object): Schema;
		valuesOf (schema: SchemaOrObject, options?: Object): Schema;
	}
	declare var exports: Normalizr;
}
