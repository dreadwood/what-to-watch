# Проект «Что посмотреть» [![Netlify Status][netlify-img]][netlify-deploy]

**Опубликованная версия доступна _[тут][deploy]_**

## О проекте

«Что посмотреть» — SPA проект написанный на React+Redux и typescript, онлайн кинотеатр с авторизацией, возможностью создавать список любимых фильмов, просматривать подробную информацию о фильмах и добавлять оценки.

![Главный экран][screenshot]

## Основные функции

- Загрузка списка фильмов с сервера и отображение их
- Авторизация пользователя и создания персонального списка "к просмотру"
- Добавления текстовых отзывов (для авторизованных пользователей)
- Просмотр фильмов (в качестве примера используется демо-видеофайлы)

### Авторизация

Для авторизации необходимо ввести любой email и пароль, после чего сервер создат пользователя и сгенерирует персональный токен. Аватар пользователя добавится случайный.

## Используемые технологии

- [create react app](https://create-react-app.dev/) — конфигурирования среды для разработки
- [typescript](https://www.typescriptlang.org/) — основной язык приложения
- [redux](https://redux.js.org/) и [redux toolkit](https://redux-toolkit.js.org/) — state менеджер приложения
- [redux thunk](https://github.com/reduxjs/redux-thunk) — middleware для ассинхронных запросов 
- [react router](https://reactrouter.com/en/main) — роутинг страниц
- [axios](https://axios-http.com/) — конфигурирование REST запросов для данных
- [eslint](https://eslint.org/), [jest](https://jestjs.io/ru/) для линтинга и тестирования (_в процессе_), [husky](https://www.npmjs.com/package/husky) для запуска тестов перед отправкой кода на github
- [netlify](https://www.netlify.com/) — деплой проекта
- [react-spinners](https://github.com/davidhu2000/react-spinners) — библиотека спиннеров для реакт


## Разработка

Основные команды:

- `npm start` — запуск режима разработки
- `npm test` — запуск тестов (jest)
- `npm run lint` — проверка линтером (eslint)
- `npm run build` — запуск сборки приложения
- `npm run eject` — извлечение конфигурации проекта (отменить извлечение невозможно, [подробней](https://create-react-app.dev/docs/available-scripts/#npm-run-eject))


## Структура проекта:

- `public` — размещение статических файлов
- `src` — исходный код проекта (страницы, модули, тесты)
- `markup` — первоначальный макет (html, css, fonts)


[screenshot]:     doc/screenshot-wtw.jpg
[deploy]:         https://srg-wtw.netlify.app/
[netlify-img]:    https://api.netlify.com/api/v1/badges/d82e612b-0365-4f8b-8863-6cbb888e9bbd/deploy-status
[netlify-deploy]: https://app.netlify.com/sites/srg-wtw/deploys
