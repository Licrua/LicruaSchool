# Outschool — Образовательная платформа

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Outschool — это современная образовательная платформа, созданная для онлайн-обучения, покупки курсов и управления подписками. Проект реализован на Next.js с использованием TypeScript, Redux Toolkit, Firebase и Clerk для аутентификации.

## Основные возможности

- Просмотр и покупка онлайн-курсов
- Управление корзиной и заказами
- Система подписок с пробным периодом
- Личный кабинет пользователя
- Современный UI с TailwindCSS и DaisyUI
- Адаптивная верстка для мобильных и десктопных устройств
- Интеграция с Firebase Firestore для хранения данных
- Аутентификация через Clerk

## Технологии

- **Next.js** — SSR/SSG React-фреймворк
- **TypeScript** — строгая типизация
- **Redux Toolkit** — глобальное управление состоянием
- **Firebase** — хранение данных и подписки
- **Clerk** — аутентификация пользователей
- **TailwindCSS & DaisyUI** — стилизация и UI-компоненты

## Структура проекта

- `/src/app` — страницы приложения (Next.js App Router)
- `/src/components` — переиспользуемые UI-компоненты
- `/src/data` — статические данные (курсы, навигация и т.д.)
- `/src/slices` — Redux Toolkit слайсы
- `/src/store` — конфигурация Redux store
- `/src/utils` — утилиты и функции для работы с Firebase
- `/public/images` — изображения для карточек, логотипов и т.д.

## Быстрый старт

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Licrua/Outschool.git
   cd Outschool
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите проект:
   ```bash
   npm run dev
   ```
4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.



## Контакты

- Telegram: [@licrua](https://t.me/licrua)
- Email: info@Outschool.com

---

**Outschool** — учись, развивайся, достигай большего!
