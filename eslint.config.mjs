import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    rules: {
      // Disable semua error ANY
      "@typescript-eslint/no-explicit-any": "off",

      // Disable unused-vars warnings (opsional)
      "@typescript-eslint/no-unused-vars": "off",

      // Disable react-hooks missing dependencies
      "react-hooks/exhaustive-deps": "off",
    }
  },
];

export default eslintConfig;
