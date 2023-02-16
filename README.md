# Formularz

Projekt prostego formularza zbudowanego przy użyciu React, HTML, CSS i JavaScript.

#### O projekcie

Ten projekt jest aktualnie w fazie rozwoju. Formularz zbiera od użytkownika dane: adres e-mail, imię i numer telefonu. Dane te są wysyłane do bazy danych. Istnieje możliwość edycji wcześniej wysłanych danych. <br>

<img src="image1.png" align="center" alt="zdjęcie podklądowe formularza" /> <br>

# Instrukcja instalacji i konfuguracji:

### Programy wymagane do otworzenia projektu
Aby wystartować projekt będziesz potrzebował zainstalowanych na twoim komputerze danych programów: <br><br>
NodeJS:  <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a> <br>
XAMPP:  <a href="https://www.apachefriends.org/pl/index.html">https://www.apachefriends.org/pl/index.html</a> <br>

W panelu XAMPP włącz moduł MySQL oraz Apache:<br>
<img src="image2.png" align="center" alt="zdjęcie podklądowe panelu XAMPP"><br>

Następnie utwórz bazę danych w o nazwię "users" oraz zaimportuj plik user.sql z folderu `react-form`.

### Dalsza konfiguracja
Sklonuj to repozytorium. Otwórz je w edytorze kodu źródłowego. W terminalu wpisz kolejno komendy:

`cd my-app` - przejście do folderu my-app <br>
`npm install` - zainstalowanie paczki node_modules <br>
`npm start` - uruchomienie servera<br>

Otwórz drugi terminal, a następnie wpisz poniższe komendy:

`cd server` - przejście do folderu server<br>
`npm install` - instalacja paczki node_modules w folderze server<br> 
`node server.js` - uruchomienie pliku server.js <br><br>

Po wykonaniu wszystkich powyższych instrukcji server z formularzem powinien odpalić się samoistnie. W innym przypadku należy wpisać w przeglądarkę adres <br>`localhost:3000`<br>

# Działanie formularza

W formularz wpisujemy dane: adres e-mail, imię oraz numer telefonu. Po wpisaniu danych klikamy na przycisk `Submit` - następuje wysłanie wpisanych informacji do bazy danych. <br><br>
<br><img src="image3.png" align="center"/> <br>
<br><img src="image4.png" align="center"/> <br>
<br><img src="image5.png" align="center"/> <br>
<br><img src="image6.png" align="center"/> <br>
<br><img src="image7.png" align="center"/> <br>
