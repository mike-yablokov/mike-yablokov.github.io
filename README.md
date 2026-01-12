# ymike.ru v2.0

Официальный сайт Михаила Яблокова - эксперта по территориальной охране природы.

## О проекте

Сайт разработан с использованием Jekyll framework и размещается на GitHub Pages.

### Основные возможности

- 🌿 Главная страница с презентацией услуг
- 📊 5 лендингов по направлениям работы
- 📋 Кейсы в модальных окнах
- 📱 Полная адаптивность (desktop-first подход)
- 🎨 Современный дизайн с цветовой схемой
- 🖼️ Оптимизированные изображения (WebP + JPEG fallback)

### Технологии

- **Jekyll 4.3** - статический генератор сайтов
- **Vanilla JavaScript** - для интерактивности
- **CSS Grid/Flexbox** - для адаптивной верстки
- **GitHub Pages** - хостинг

## Локальная разработка

### Требования

- Ruby 2.7+
- Bundler
- Jekyll 4.3+

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/YOUR_USERNAME/ymike.ru.git
cd ymike.ru
```

2. Установите зависимости:
```bash
bundle install
```

3. Запустите локальный сервер:
```bash
bundle exec jekyll serve
```

4. Откройте в браузере: http://127.0.0.1:4000

### Команды разработки

```bash
# Запуск сервера
bundle exec jekyll serve

# Сборка сайта
bundle exec jekyll build

# Сборка с черновиками
bundle exec jekyll serve --drafts

# Очистка кэша
bundle exec jekyll clean
```

## Структура проекта

```
v2.0/
├── _layouts/          # Шаблоны страниц
│   ├── default.html   # Базовый layout
│   ├── home.html      # Layout главной страницы
│   └── direction.html # Layout лендингов направлений
├── _includes/         # Переиспользуемые компоненты
│   ├── head.html      # <head> секция
│   ├── header.html    # Header сайта
│   └── footer.html    # Footer сайта
├── _data/             # Структурированные данные
├── _cases/            # Коллекция кейсов (Markdown)
├── assets/
│   ├── css/           # Стили
│   │   └── main.css   # Главный CSS файл
│   ├── js/            # JavaScript
│   │   └── main.js    # Главный JS файл
│   └── images/        # Изображения
│       ├── hero/      # Hero-секции
│       ├── sections/  # Фото-секции лендингов
│       ├── cards/     # Карточки направлений
│       ├── cases/     # Фото кейсов
│       └── logos/     # Логотипы клиентов
├── pdfs/              # PDF файлы (резюме, кейсы)
├── index.md           # Главная страница
├── strategic.md       # Лендинг "Стратегии устойчивости"
├── social.md          # Лендинг "Социальные решения"
├── tourism.md         # Лендинг "Устойчивый туризм"
├── digital.md         # Лендинг "Цифровые решения"
├── education.md       # Лендинг "Обучение и развитие"
├── _config.yml        # Конфигурация Jekyll
├── Gemfile            # Зависимости Ruby
└── README.md          # Этот файл
```

## Деплой на GitHub Pages

Сайт автоматически деплоится на GitHub Pages при push в ветку `main`.

URL: https://ymike.ru

### Настройка custom domain

1. Добавьте файл `CNAME` с доменом `ymike.ru`
2. Настройте DNS записи у регистратора домена:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```

## Контент

### Главная страница

Контент главной страницы находится в `index.md` и использует layout `home`.

### Лендинги направлений

Каждое направление - отдельный Markdown файл с Front Matter:

```yaml
---
layout: direction
title: "Название направления"
permalink: /strategic/
direction_id: 1
hero_image: ymike.ru_1.1.jpg
num_for_whom_cards: 4
num_uniqueness_cards: 4
num_process_steps: 6
---
```

### Кейсы

Кейсы хранятся в коллекции `_cases/` в формате Markdown с Front Matter.

## Цветовая схема

Цветовая схема определена в CSS переменных (`assets/css/main.css`):

- **Главная:** `--color-m-primary`, `--color-m-secondary`
- **Направление 1-5:** `--color-1-primary` ... `--color-5-primary`
- **Общие:** `--color-background`, `--color-accent`, `--color-hf`

## Адаптивность

Сайт использует desktop-first подход с breakpoints:

- **Desktop:** >1024px
- **Tablet:** 768px - 1024px
- **Mobile:** <768px

## Изображения

Все изображения оптимизированы в 3 размерах (desktop/tablet/mobile) и 2 форматах (WebP + JPEG fallback).

## Лицензия

© 2026 Михаил Яблоков. Все права защищены.

## Контакты

- **Email:** ymike@mail.ru
- **Сайт:** https://ymike.ru
