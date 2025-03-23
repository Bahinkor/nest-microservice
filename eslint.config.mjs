import { init } from "@fullstacksjs/eslint-config";

export default init({
  node: true,
  typescript: true,
  rules: {
    "perfectionist/sort-classes": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/consistent-type-imports": "off",
  },
}); // enable eslint configuration
