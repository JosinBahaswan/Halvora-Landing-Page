import astro from 'eslint-plugin-astro';
import betterTailwind from 'eslint-plugin-better-tailwindcss';

// Class buatan sendiri di src/styles/global.css (bukan bawaan Tailwind)
const customClasses = [
  'btn-interactive', 'nav-link', 'fade-up-init', 'float-primary', 'float-secondary',
  'catalog-card', 'catalog-grid', 'card-img', 'craft-card', 'craft-img',
  'tab-btn', 'size-row', 'size-pill',
].map((c) => `^${c}$`);

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/'] },
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    plugins: { 'better-tailwindcss': betterTailwind },
    rules: {
      ...betterTailwind.configs.recommended.rules,
      'better-tailwindcss/no-unknown-classes': ['error', { ignore: customClasses }],
    },
    settings: {
      'better-tailwindcss': { entryPoint: 'src/styles/global.css' },
    },
  },
];