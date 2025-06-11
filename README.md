<p align="center"><a href="#"><img src="./public/Logo EEPROM nobg.png" width="300" alt="Logo EEPROM"></a></p>

## Website resmi EEPROM Polinema!

🚀 Website resmi EEPROM Polinema berisi tentang informasi organisasi, anggota aktif, pengalaman lomba, behind the scene dan masih banyak lagi. Dikembangkan dengan Laravel 12 & Inertia.js.

## Contributors

[<img src="https://avatars.githubusercontent.com/u/89091156?v=4" width="54" height="54" style="border-radius: 50%; margin-right: 0.5rem;">](https://github.com/andidprastyo)


## How to launch

1. Clone repository

```sh
git clone https://github.com/EEPROM-Polinema/eeprom-website.git
```

2. Install & Update Composer

```sh
composer update
```

3. Install NPM dependencies

```sh
npm install
```

4. Copy .env.example to .env

```sh
copy .env.example .env
```

5. Generate Key

```sh
php artisan key:generate
```

6. Migration database

```sh
php artisan migrate
```

7. Create the symbolic link

```sh
php artisan storage:link
```

8. Run the development server

```sh
npm run dev
```

9. Run the Laravel server

```sh
php artisan serve
```
