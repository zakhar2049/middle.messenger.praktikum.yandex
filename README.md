Данный проект - это браузерный мессенджер, каких сейчас полно.
Планируемый функционал:
    - сохранение профиля пользователя - регистрация;
    - изменение данных пользователя, в том числе аватара;
    - отображение списка чатов с другими пользователями;
    - прием и отправка сообщений в выбранном чате.

Проект развёрнут на netlify:
[Список страниц](https://vocal-dango-d73cbd.netlify.app/),
[Авторизация](https://vocal-dango-d73cbd.netlify.app/authorization),
[Регистрация](https://vocal-dango-d73cbd.netlify.app/registration),
[Профиль](https://vocal-dango-d73cbd.netlify.app/profile),
[404](https://vocal-dango-d73cbd.netlify.app/error404),
[500](https://vocal-dango-d73cbd.netlify.app/error500),
[Чаты](https://vocal-dango-d73cbd.netlify.app/chats).


Страницы в проекте:
[Список страниц](src/index.html),
[Авторизация](src/pages/authorization/authorization.html),
[Регистрация](src/pages/registration/registration.html),
[Профиль](src/pages/profile/profile.html),
[404](src/pages/error404/error404.html),
[500](src/pages/error500/error500.html),
[Чаты](src/pages/chats/chats.html).

Команды:

npm run build - собирает проект в папку dist;
npm run server - запускает раздачу из папки dist на 3000 порту;
npm run start - собирает и запускает проект на 3000 порту.
