# Installing


### Install dependencies:
````
composer install
````

### Copy env example to env: 
````
cp .env.example .env 
````

### Generate application key:
````
php artisan key:generate 
````

### Run migrations and seeds:
````
php artisan migrate --seed 
````

### Build front-end:
````
yarn && yarn build 
````

### Run tests and static analysis:
````
composer test  
````
