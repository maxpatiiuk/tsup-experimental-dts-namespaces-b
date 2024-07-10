# tsup: broken `.d.ts` when using namespaces

tsup generates a `.d.ts` file with a syntax error when namespaces are used

## Reproduction

1. Clone this repository

   ```sh
   git clone https://github.com/maxpatiiuk/tsup-experimental-dts-namespaces-bug
   ```

2. Install dependencies

   ```sh
   cd tsup-experimental-dts-namespaces-bug
   npm install
   ```

3. Run `tsup`

   ```sh
   npx tsup
   ```

4. See syntax error in
   [`dist/_tsup-dts-rollup.d.ts`](./dist/_tsup-dts-rollup.d.ts) on line 10

   Should be:

   ```ts
   export type { A as B };
   ```

   But instead received:

   ```ts
   export declare type { A as B };
   ```
