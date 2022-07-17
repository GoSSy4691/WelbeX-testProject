## Тестовое задание на позицию "Web-программист Node.js" в компанию [WelbeX](https://welbex.ru/)

### Задание:
Реализовать SPA приложение (таблица) на react с серверной частью на Node.js и PostgreSQL

### Требования:
✔️ Таблица должна содержать 4 колонки:<br>
&emsp;    1. Дата<br>
&emsp;    2. Название<br>
&emsp;    3. Количество<br>
&emsp;    4. Расстояние<br>
✔️ Таблица должна иметь сортировку по всем полям кроме даты. Фильтрация должна быть в виде двух выпадающих списков и текстового поля:<br>
&emsp;    1. Выбор колонки, по которой будет фильтрация<br>
&emsp;    2. Выбор условия (равно, больше, меньше)<br>
&emsp;    3. Поле для ввода значения для фильтрации<br>
✔️ Таблица должна содержать пагинацию<br>
✔️ Вся таблица должна работать без перезагрузки страницы<br>

## Как запуситить приложение:
### 1) Создайте таблицу в PostgreSQL:
```
psql -U yourPostgresUserName

create TABLE items(
    id SERIAL PRIMARY KEY,
    date DATE,
    name VARCHAR(255),
    quantity INT,
    distance INT
);
```
### 2) Запустите backend часть приложения:
Укажите данные СУБД в файле `backend/db.ts` <br>
Запустите node.js :
```
cd backend/
npm i
npm run dev
```

### 3) Запустите frontend часть приложения:
Создайте `.env` файл в папке `web/` (пример файла в `web/.env.example`) и укажите там url адрес node.js приложения <br>
Запустите приложение:
```
cd web/
npm i
npm start
```
## P.S.
На задание было выделено 72 часа. Из запланированных МНОЙ задач не было реализовано: <br>
- [ ] Перевод frontend части приложения в TypeScript <br>
- [ ] Рефакторинг frontend части приложения <br>
- [ ] Docker файлы для более простого развертывания приложения <br>
