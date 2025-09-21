# Линтинг и форматирование кода

В проекте настроены:

- ESLint (Flat Config) для проверки качества кода JS/TS
- Prettier для форматирования
- Интеграция с VS Code (авто-фиксы и форматирование при сохранении)
- pre-commit хуки (husky + lint-staged)
- GitHub Actions (CI) для `yarn lint` и `yarn test`

## TL;DR (как пользоваться)

- Проверка линтера:
  - `yarn lint` — запуск ESLint
  - `yarn lint:fix` — ESLint с автофиксами
- Форматирование:
  - `yarn format` — Prettier форматирует весь репозиторий
- Перед коммитом автоматически запускается `lint-staged` (Prettier + ESLint для изменённых файлов).
- В VS Code при сохранении файла включены авто-формат Prettier и авто-фиксы ESLint.

## Основные файлы конфигурации

- `eslint.config.js` — Flat Config ESLint
  - TypeScript: `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin` (v8)
  - Проект с ссылками (TS Project References): используется `parserOptions.projectService: true`
  - Импорт-правила: `eslint-plugin-import` + `eslint-import-resolver-typescript` (поддержка алиасов `@/*` из `tsconfig.json`)
  - Тесты: `eslint-plugin-jest` с расширенным набором правил
  - Prettier: `eslint-config-prettier` (последним элементом) отключает конфликтующие стилевые ESLint-правила
  - Специальные override:
    - `tests/**/*` — ослаблены «опасные» TS-правила для тестов, включены jest-правила
    - `src/code-basics/**/*` — образовательные примеры не «шумят» (ослаблены unsafe/any)
- `rules/eslint.js` — общий набор правил для проекта (импортируется в `eslint.config.js`)
- `.prettierrc.json` — настройки Prettier (одинарные кавычки, trailingComma: es5, ширина 100, arrowParens: always)
- `.prettierignore` — игноры для форматирования
- `.vscode/settings.json` — настройки VS Code для ESLint + Prettier
- `.vscode/extensions.json` — рекомендованные расширения (ESLint, Prettier)
- `package.json` — скрипты и конфиг `lint-staged`
- `.github/workflows/ci.yml` — CI: lint + test

## Скрипты

- `yarn lint` — запустить ESLint по репозиторию
- `yarn lint:fix` — ESLint с `--fix`
- `yarn format` — Prettier форматирует проект (write)
- `yarn prepare` — инициализация husky (запускается автоматически после `yarn install`)

## Интеграция с VS Code

- Расширения (рекомендуемые):
  - ESLint — `dbaeumer.vscode-eslint`
  - Prettier — `esbenp.prettier-vscode`
- `.vscode/settings.json`:
  - `editor.defaultFormatter: esbenp.prettier-vscode`
  - `editor.formatOnSave: true`
  - `editor.codeActionsOnSave`:
    - `source.fixAll.eslint: "explicit"`
    - `source.organizeImports: "explicit"`
  - `eslint.useFlatConfig: true`, `eslint.validate` для JS/TS
  - `prettier.requireConfig: true`

## Правила ESLint: кратко

- База: `@eslint/js` (recommended)
- TypeScript: `@typescript-eslint/*` (recommended) + проектные правила из `rules/eslint.js`
- Импорты: `eslint-plugin-import` + `import/order`
- Тесты: `eslint-plugin-jest` — consistency (test vs it), предпочтительные матчера (`toBe`, `toBeNull`, ...), корректность `expect`
- Стиль кода управляет Prettier: конфликты отключены `eslint-config-prettier`

## TypeScript: Project References

В `tsconfig.json` используются ссылки (`references`), поэтому для typed linting включён `parserOptions.projectService: true`. Это корректно работает с Flat Config и не требует перечислять все `include` непосредственно.

## Pre-commit: husky + lint-staged

- Конфигурация в `package.json` → `lint-staged`
- Хук `.husky/pre-commit` запускает `yarn lint-staged`
- Поведение: форматирование Prettier + ESLint `--fix` только для изменённых файлов

## CI: GitHub Actions

Workflow: `.github/workflows/ci.yml`

- Node.js 20, cache Yarn
- `yarn install --immutable`
- `yarn lint`
- `yarn test --ci --runInBand`

## Запуск вручную (локально)

- Формат: `yarn format`
- Линт: `yarn lint` или `yarn lint:fix`

## Частые проблемы и решения

- «Definition for rule '@typescript-eslint/...' was not found» — убедитесь, что установлены `@typescript-eslint/eslint-plugin` и `@typescript-eslint/parser`, и подключены в `eslint.config.js`.
- Ошибка парсинга `.ts` с `project` + references — используйте `parserOptions.projectService: true` (уже сделано).
- Импорт-алиасы не резолвятся — установите `eslint-import-resolver-typescript` (установлен) и проверьте `settings['import/resolver']`.
- Конфликты Prettier/ESLint — убедитесь, что `eslint-config-prettier` подключён последним.

## Добавление новых правил

- Общие правила — редактируйте `rules/eslint.js` (лучше логические/качество, не стиль)
- TS/JS overrides — в `eslint.config.js` блоки `files: ['**/*.ts']`, `files: ['**/*.js']`
- Тестовые правила — в блоке `files: ['tests/**/*']` (jest)

## Игнорирование

- Игноры ESLint: секция `ignores` в `eslint.config.js`
- Игноры Prettier: `.prettierignore`
- Локально: `// eslint-disable-next-line <rule>` — по возможности избегать, используйте адресно и с комментарием

---
