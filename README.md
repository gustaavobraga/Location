# Location

Esse projeto pegar a localização do usuário, usando o método `Location.getCurrentPositionAsync()`, e armazenar em uma API **Django REST framework**.

No **admin** da API, mostra uma lista com a data e a longitude e latitude de cada localização que foi inserida no banco. Ao clicar em algum elemento dessa lista, irá aparecer uma nova tela com um mapa da localização do usuário.

![](https://github.com/gusttaa/Location/blob/master/src/images/20210322_073003.jpg)
![](https://github.com/gusttaa/Location/blob/master/src/images/captura1.png)
![](https://github.com/gusttaa/Location/blob/master/src/images/captura2.png)


* **Django** = 3.1.7
* **djangorestframework** = 3.12.2
* **djangorestframework-gis** = 0.17
* **python** = 3.8.5
* **psycopg2** = 2.8.6
* **npm** = 6.14.11
* **node** = v14.16.0
* **Expo** = 4.3.0
* **PostgreSQL** = 12.6
