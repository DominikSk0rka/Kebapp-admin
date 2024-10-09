# Dominik Skórka 42086 Kebapp, STRONA ADMINA


![NPM Version](https://img.shields.io/npm/v/npm?color=orange)
![React Version](https://img.shields.io/badge/react-v17.0.2-brightgreen)
![Next.js Version](https://img.shields.io/badge/next-v12.0.7-blue)
![TypeScript Version](https://img.shields.io/badge/typescript-v4.5.4-lightblue)
![Cypress](https://img.shields.io/badge/cypress-tests-fuchsia)
![Open Issues](https://img.shields.io/badge/open%20issues-0-yellow)
![Closed Issues](https://img.shields.io/badge/closed%20issues-17-brightgreen)

| [Admin website](https://kebap.vercel.app/)                                                                             | Strona Administartora                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/438d36d8-8edd-4223-a734-d149555f17cb" alt="ComfyUI" width="800"/> | <span style="font-size: 18px; font-weight: normal; font-family: Arial, sans-serif;">Witaj w panelu administracyjnym Kebapp! Ta strona została zaprojektowana, aby ułatwić zarządzanie informacjami o kebabach w Legnicy. Znajdziesz tu wszystkie niezbędne narzędzia do dodawania, edytowania oraz usuwania kebabów, a także do przeglądania ich lokalizacji na interaktywnej mapie. </span> |

| Nr  | Wymaganie funkcjonalne panelu administratora                                                             |
| --- | -------------------------------------------------------------------------------------------------------- |
| 1   | Administrator zarządza bazą kebabów poprzez dedykowany panel administracyjny                             |
| 2   | Przy pierwszym logowaniu administrator musi stworzyć sobie hasło                                         |
| 3   | Administrator widzi listę zgłoszonych sugestii i akceptuje je lub odrzuca                                |
| 4   | Administrator ma możliwość dodawania, edytowania i usuwania kebabów z bazy danych                        |
| 5   | Administrator może przeglądać szczegółowe informacje o każdym kebabie, w tym dane podstawowe i dodatkowe |
| 6   | Administrator może przeglądać i zarządzać linkami do social media dla każdego kebaba                     |
| 7   | Administrator może modyfikować statusy kebabów (otwarte, zamknięte, planowane)                           |
| 8   | Każdy kebab powinien mieć przypisane informacje podstawowe:                                              |
| 8.1 | - Logo                                                                                                   |
| 8.2 | - Nazwę                                                                                                  |
| 8.3 | - Adres                                                                                                  |
| 8.4 | - Koordynaty geograficzne                                                                                |
| 8.5 | - Rok otwarcia i zamknięcia (jeżeli informacje są znane)                                                 |
| 9   | Każdy kebab powinien mieć przypisane informacje dodatkowe:                                               |
| 9.1 | - Godziny otwarcia w poszczególnych dniach tygodnia                                                      |
| 9.2 | - Dostępne rodzaje mięs (kurczak, wołowina, baranina, falafel itp.)                                      |
| 9.3 | - Dostępne sosy (czosnkowy, ostry itp.)                                                                  |
| 9.4 | - Informację nt. statusu (punkt 3 OPZ)                                                                   |
| 9.5 | - Informację, czy kebab jest "kraftowy"                                                                  |
| 9.6 | - Informację, czy kebab jest ulokowany w nieruchomości, czy w "budzie"                                   |
| 9.7 | - Informację, czy kebab jest oddziałem sieci kebabów                                                     |
| 9.8 | - Informację, jak można zamówić kebab (telefon, Pyszne, Glovo, Uber Eats, własna aplikacja/strona)       |

## Proces Planowania Issue

Zagadnienia (issues) zostały zaimplementowane w celu efektywnego zarządzania rozwojem aplikacji Kebapp. Dzięki nim możliwe było:

- **Śledzenie Postępów**
- **Dokumentacja Postępów**

- **Komunikacja w Zespole**

- **Priorytezacja Zadań**

| Nr Issue | Issue                                                                             | Status |
| -------- | --------------------------------------------------------------------------------- | ------ |
| 1        | Initialize Next.js project                                                        | ✅     |
| 2        | Create Admin Layout                                                               | ✅     |
| 3        | Create "Add kebab" view page                                                      | ✅     |
| 4        | Create "Map" page with Leafet                                                     | ✅     |
| 5        | Create a kebab management page with all the necessary components (Tabels Buttons) | ✅     |
| 6        | Create "Logs" view page                                                           | ✅     |
| 7        | Create Login form                                                                 | ✅     |
| 8        | Create "Admin Messages" View page                                                 | ✅     |
| 9        | Create Edit form for kebabs                                                       | ✅     |
| 10       | Connected login to API                                                            | ✅     |
| 12       | Connect Add page to API                                                           | ✅     |
| 13       | Connect Manage page with API & Pagination                                         | ✅     |
| 14       | Connect Map page with API                                                         | ✅     |
| 15       | Protect admin & logout API & create middleware                                    | ✅     |
| 16       | Connect Api to log page & display logs                                            | ✅     |
| 17       | Connect Edit form to API                                                          | ✅     |
| 18       | Connect Admin Messages page to API                                                | ✅     |
| 19       | Frist Login create password                                                       | ⏳     |
| 20       | Perform a test with Cypress                                                       | ⏳     |
| 21       | Deploy website on Vercel                                                          | ✅     |

## Widok Strony Administartora

| Obrazek                                                                                                                 | Opis                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/8c02bd99-ff44-4a3f-a36c-812959eb79af" width="500" alt="Obrazek 1"> | Widok głównej strony administratora na której administrator może akceptować bądź odrzucać zgłoszone sugestie                 |
| <img src="https://github.com/user-attachments/assets/87dca779-fc5e-4812-8b95-e49867281816" width="500" alt="Obrazek 2"> | Widok strony zarządzania kebabami                                                                                            |
| <img src="https://github.com/user-attachments/assets/1b7cdc4d-be62-49fb-9057-cdadc8fa1fcd" width="500" alt="Obrazek 3"> | Widok formularza edycji kebaba na którym administrator może edytować wszystkie dane o kebabie                                |
| <img src="https://github.com/user-attachments/assets/b623c88d-aade-426e-9b36-ab838540be11" width="500" alt="Obrazek 4"> | Widok mapy z zaznaczonymi kebabami z bazy danych                                                                             |
| <img src="https://github.com/user-attachments/assets/622ead9c-2433-4c9f-8793-04c4f0f40a8c" width="500" alt="Obrazek 5"> | Widok logów, rejestrowane są operacje takie jak (Dodawanie, edytowanie, likowanie itp), zarówno na stronie jak i w aplikacji |
| <img src="https://github.com/user-attachments/assets/f51a322d-8a82-4208-a43d-793d3f6a92b2" width="500" alt="Obrazek 5"> | Widok strony dodawania kebabów do bazy danych                                                                                |

## Biblioteki i Frameworki użyte w projekcie

| Biblioteka/Framework | Opis                                                                                                                                                                                                                                                                                            | Link                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Next.js**          | Framework React do budowania aplikacji renderowanych po stronie serwera.                                                                                                                                                                                                                        | [Next.js](https://nextjs.org/)                       |
| **React**            | Biblioteka JavaScript do budowania interfejsów użytkownika.                                                                                                                                                                                                                                     | [React](https://react.dev/)                          |
| **Leaflet**          | Biblioteka JavaScript do interaktywnych map.                                                                                                                                                                                                                                                    | [Leaflet](https://leafletjs.com/)                    |
| **js-cookie**        | Prosty interfejs API JavaScript do obsługi ciasteczek.                                                                                                                                                                                                                                          | [js-cookie](https://www.npmjs.com/package/js-cookie) |
| **React Hook Form**  | Biblioteka do zarządzania formularzami w aplikacjach React.                                                                                                                                                                                                                                     | [React Hook Form](https://react-hook-form.com/)      |
| **React Hot Toast**  | Biblioteka do wyświetlania powiadomień typu toast w React.                                                                                                                                                                                                                                      | [React Hot Toast](https://react-hot-toast.com/)      |
| **Axios**            | Używany do wykonywania żądań HTTP do API w celu pobierania, usuwania oraz modyfikowania wiadomości.                                                                                                                                                                                             | [Axios](https://axios-http.com/docs/intro)           |
| **Tailwind CSS**     | Framework CSS typu utility-first do tworzenia niestandardowych projektów.                                                                                                                                                                                                                       | [Tailwind CSS](https://tailwindcss.com/)             |
| **TypeScript**       | Używany do dodania statycznego typowania w projekcie, co pozwala na wcześniejsze wykrywanie błędów podczas kompilacji. Dzięki niemu łatwiej zarządzać typami danych, np. w hookach useState, które w tym przypadku przyjmują typy number i any[], co poprawia czytelność i bezpieczeństwo kodu. | [TypeScript](https://www.typescriptlang.org/)        |

## Testowanie

Do przeprowadzenia testów został wykorzystany Cypress

## Wymagania wstępne

Aby uruchomić testy, upewnij się, że masz zainstalowane:

- [Node.js] (zalecana wersja: LTS)
- [npm]

## Instalacja

1. Sklonuj repozytorium
2. Przeprowadz testy w trybie headless: `npx cypress run`, w trype graficznym `npx cypress open`
    


![image](https://github.com/user-attachments/assets/24f2fe43-749a-42c5-8611-2da8f08de467)

## Wdrożenie

Projekt został wdrożony na platformie Vercel, ponieważ jest to idealne rozwiązanie dla aplikacji opartych na Next.js. Vercel oferuje automatyczne wdrożenia, łatwą integrację z GitHub oraz natywną obsługę funkcji Next.js, takich jak SSR (Server-Side Rendering) i SSG (Static Site Generation).
![ver](https://github.com/user-attachments/assets/4c685c77-26a2-4d77-ac4b-69b96d613a42)

## Inne Repozytoria

### 1. Aplikacja mobilna (Kotlin) (Paweł Wyszyński 42094 & Michał Turowski 42088)

- **Link do repozytorium**: [Kebapp Android](https://github.com/Pawel-Wyszynski/Kebapp-android/)
- **Opis**: Aplikacja mobilna przeznaczona dla systemu Android, która umożliwia użytkownikom łatwy dostęp do funkcjonalności kebabów, takich jak przeglądanie kebabów w legnicy, śledzenie statusu dostepności kebabów, wyświetlania na mapie punktów kebabowych, sortowanie ich i itp.
- **Technologie**: Kotlin, Jetpack compose, Retrofit, Coil, Okhttp, viewmodel compose, Navigation compose, Android Studio

### 2. API (Laravel) (Kacper Preyzner 42084)

- **Link do repozytorium**: [Kebapp API](https://github.com/prezeswastaken/kebapp.php)
- **Opis**: Backend aplikacji, zbudowany przy użyciu frameworka Laravel. API obsługuje wszystkie żądania związane z aplikacją mobilną, oraz panelem administracyjnym (webówką).
- **Technologie**: PHP, Laravel, sqlite

## Jak uruchomić projekt

### Aplikacja mobilna:

1. Skopiuj repozytorium na swoje lokalne środowisko.
2. Otwórz projekt w Android Studio.
3. Zsynchornizuj wszystkie niezbędne zależności.
4. Uruchom aplikację na emulatorze lub fizycznym urządzeniu.

### API:

1. Skopiuj repozytorium na swoje lokalne środowisko.
2. Skonfiguruj plik `.env` z odpowiednimi danymi bazy danych.
3. Zainstaluj niezbędne zależności za pomocą composer install
4. Uruchom migracje bazy danych: `php artisan migrate`
5. Uruchom serwer: `php artisan serve`

### Strona admina:

1. Skopiuj repozytorium na swoje lokalne środowisko.
2. Wpisz komende npm install`
3. Uruchom serwer w środowisku lokalnym za pomocą komendy `npm run dev`
4. Wejdz na [http://localhost:3000](http://localhost:3000) żeby skorzystać z panelu administratora

<p align="center"">
  <img src="https://github.com/user-attachments/assets/fe8378b6-1cf6-4ca8-b224-7be74dbdd783" alt="2020 meme" width="700px" />
</p>
=======

![NPM Version](https://img.shields.io/npm/v/npm?color=orange)
![React Version](https://img.shields.io/badge/react-v17.0.2-brightgreen)
![Next.js Version](https://img.shields.io/badge/next-v12.0.7-blue)
![TypeScript Version](https://img.shields.io/badge/typescript-v4.5.4-lightblue)
![Cypress](https://img.shields.io/badge/cypress-tests-fuchsia)
![Open Issues](https://img.shields.io/badge/open%20issues-0-yellow)
![Closed Issues](https://img.shields.io/badge/closed%20issues-17-brightgreen)


| [Admin website](https://kebap.vercel.app/) | Strona Administartora |
| -- | -- |
| <img src="https://github.com/user-attachments/assets/438d36d8-8edd-4223-a734-d149555f17cb" alt="ComfyUI" width="800"/> | <span style="font-size: 18px; font-weight: normal; font-family: Arial, sans-serif;">Witaj w panelu administracyjnym Kebapp! Ta strona została zaprojektowana, aby ułatwić zarządzanie informacjami o kebabach w Legnicy. Znajdziesz tu wszystkie niezbędne narzędzia do dodawania, edytowania oraz usuwania kebabów, a także do przeglądania ich lokalizacji na interaktywnej mapie. </span> |











| Nr  | Wymaganie funkcjonalne panelu administratora                                                                                         |
|-----|------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Administrator zarządza bazą kebabów poprzez dedykowany panel administracyjny                                                            |
| 2   | Przy pierwszym logowaniu administrator musi stworzyć sobie hasło                                                                        |
| 3   | Administrator widzi listę zgłoszonych sugestii i akceptuje je lub odrzuca                                                                |
| 4   | Administrator ma możliwość dodawania, edytowania i usuwania kebabów z bazy danych                                                       |
| 5   | Administrator może przeglądać szczegółowe informacje o każdym kebabie, w tym dane podstawowe i dodatkowe                               |
| 6   | Administrator może przeglądać i zarządzać linkami do social media dla każdego kebaba                                                   |
| 7   | Administrator może modyfikować statusy kebabów (otwarte, zamknięte, planowane)                                                          |
| 8   | Każdy kebab powinien mieć przypisane informacje podstawowe:                                                                             |
| 8.1 | - Logo                                                                                                                                   |
| 8.2 | - Nazwę                                                                                                                                  |
| 8.3 | - Adres                                                                                                                                  |
| 8.4 | - Koordynaty geograficzne                                                                                                               |
| 8.5 | - Rok otwarcia i zamknięcia (jeżeli informacje są znane)                                                                                |
| 9   | Każdy kebab powinien mieć przypisane informacje dodatkowe:                                                                             |
| 9.1 | - Godziny otwarcia w poszczególnych dniach tygodnia                                                                                     |
| 9.2 | - Dostępne rodzaje mięs (kurczak, wołowina, baranina, falafel itp.)                                                                    |
| 9.3 | - Dostępne sosy (czosnkowy, ostry itp.)                                                                                                  |
| 9.4 | - Informację nt. statusu (punkt 3 OPZ)                                                                                                  |
| 9.5 | - Informację, czy kebab jest "kraftowy"                                                                                                  |
| 9.6 | - Informację, czy kebab jest ulokowany w nieruchomości, czy w "budzie"                                                                  |
| 9.7 | - Informację, czy kebab jest oddziałem sieci kebabów                                                                                     |
| 9.8 | - Informację, jak można zamówić kebab (telefon, Pyszne, Glovo, Uber Eats, własna aplikacja/strona)                                      |



## Proces Planowania Issue

Zagadnienia (issues) zostały zaimplementowane w celu efektywnego zarządzania rozwojem aplikacji Kebapp. Dzięki nim możliwe było:

- **Śledzenie Postępów:**
  
- **Dokumentacja Postępów:**

- **Komunikacja w Zespole:** 

- **Priorytezacja Zadań:** 


| Nr Issue |  Issue                          | Status |
|----------|--------------------------------------|--------|
| 1        | Initialize Next.js project            | ✅     |
| 2        | Create Admin Layout                   | ✅   |
| 3        | Create "Add kebab" view page     | ✅     |
| 4        |   Create "Map" page with Leafet   |    ✅  |
| 5        |Create a kebab management page with all the necessary components (Tabels Buttons)      | ✅     |
| 6        | Create "Logs" view page  | ✅     |
| 7        |Create Login form | ✅   |
| 8        | Create "Admin Messages" View page     | ✅     |
| 9        |  Create Edit form for kebabs    |    ✅  |
| 10        | Connected login to API    | ✅     |
| 12        |  Connect Add page to API | ✅     |
| 13        | Connect Manage page with API & Pagination| ✅   |
| 14        |  Connect Map page with API  | ✅     |
| 15        |   Protect admin & logout API & create middleware    |    ✅  |
| 16        | Connect Api to log page & display logs  | ✅     |
| 17        | Connect Edit form to API | ✅     |
| 18        |Connect Admin Messages page to API| ✅   |
| 19        |  Frist Login create password   | ⏳     |
| 20        |   Perform a test with Cypress   |  ⏳    |
| 21        |  Deploy website on Vercel   |   ⏳  |


## Widok Strony Administartora

| Obrazek | Opis |
|---------|------|
| <img src="https://github.com/user-attachments/assets/8c02bd99-ff44-4a3f-a36c-812959eb79af" width="500" alt="Obrazek 1"> | Widok głównej strony administratora na której administrator może akceptować bądź odrzucać zgłoszone sugestie |
| <img src="https://github.com/user-attachments/assets/87dca779-fc5e-4812-8b95-e49867281816" width="500" alt="Obrazek 2"> | Widok strony zarządzania kebabami |
| <img src="https://github.com/user-attachments/assets/1b7cdc4d-be62-49fb-9057-cdadc8fa1fcd" width="500" alt="Obrazek 3"> | Widok formularza edycji kebaba na którym administrator może edytować wszystkie dane o kebabie |
| <img src="https://github.com/user-attachments/assets/b623c88d-aade-426e-9b36-ab838540be11" width="500" alt="Obrazek 4"> | Widok mapy z zaznaczonymi kebabami z bazy danych |
| <img src="https://github.com/user-attachments/assets/622ead9c-2433-4c9f-8793-04c4f0f40a8c" width="500" alt="Obrazek 5"> | Widok logów, rejestrowane są operacje takie jak (Dodawanie, edytowanie, likowanie itp), zarówno na stronie jak i w aplikacji |
| <img src="https://github.com/user-attachments/assets/f51a322d-8a82-4208-a43d-793d3f6a92b2" width="500" alt="Obrazek 5"> | Widok strony dodawania kebabów do bazy danych |


## Biblioteki i Frameworki użyte w projekcie


| Biblioteka/Framework          | Opis                                                          | Link                               |
|-------------------------------|---------------------------------------------------------------|------------------------------------|
| **Next.js**                   | Framework React do budowania aplikacji renderowanych po stronie serwera. | [Next.js](https://nextjs.org/)     |
| **React**                     | Biblioteka JavaScript do budowania interfejsów użytkownika.   | [React](https://react.dev/)        |
| **Leaflet**                   | Biblioteka JavaScript do interaktywnych map.                  | [Leaflet](https://leafletjs.com/)  |
| **js-cookie**                 | Prosty interfejs API JavaScript do obsługi ciasteczek.        | [js-cookie](https://www.npmjs.com/package/js-cookie) |
| **React Hook Form**           | Biblioteka do zarządzania formularzami w aplikacjach React.   | [React Hook Form](https://react-hook-form.com/) |
| **React Hot Toast**           | Biblioteka do wyświetlania powiadomień typu toast w React.    | [React Hot Toast](https://react-hot-toast.com/) |
| **Axios**                     | Używany do wykonywania żądań HTTP do API w celu pobierania, usuwania oraz modyfikowania wiadomości.  | [Axios](https://axios-http.com/docs/intro) |
| **Tailwind CSS**              | Framework CSS typu utility-first do tworzenia niestandardowych projektów. | [Tailwind CSS](https://tailwindcss.com/) |
| **TypeScript**                | Używany do dodania statycznego typowania w projekcie, co pozwala na wcześniejsze wykrywanie błędów podczas kompilacji. Dzięki niemu łatwiej zarządzać typami danych, np. w hookach useState, które w tym przypadku przyjmują typy number i any[], co poprawia czytelność i bezpieczeństwo kodu.            | [TypeScript](https://www.typescriptlang.org/) |




## Testowanie
Do przeprowadzenia testów został wykorzystany Cypress



Zdjęcie



## Wdrożenie
Projekt został wdrożony na platformie Vercel, ponieważ jest to idealne rozwiązanie dla aplikacji opartych na Next.js. Vercel oferuje automatyczne wdrożenia, łatwą integrację z GitHub oraz natywną obsługę funkcji Next.js, takich jak SSR (Server-Side Rendering) i SSG (Static Site Generation).
![ver](https://github.com/user-attachments/assets/4c685c77-26a2-4d77-ac4b-69b96d613a42)


## Inne Repozytoria

### 1. Aplikacja mobilna (Kotlin) (Paweł Wyszyński 42094 & Michał Turowski 42088)
- **Link do repozytorium**: [Kebapp Android](https://github.com/Pawel-Wyszynski/Kebapp-android/)
- **Opis**: Aplikacja mobilna przeznaczona dla systemu Android, która umożliwia użytkownikom łatwy dostęp do funkcjonalności kebabów, takich jak przeglądanie kebabów w legnicy, śledzenie statusu dostepności kebabów, wyświetlania na mapie punktów kebabowych, sortowanie ich i itp.
- **Technologie**: Kotlin, Jetpack compose, Retrofit, Coil, Okhttp, viewmodel compose, Navigation compose, Android Studio

### 2. API (Laravel) (Kacper Preyzner 42084)
- **Link do repozytorium**: [Kebapp API](https://github.com/prezeswastaken/kebapp.php)
- **Opis**: Backend aplikacji, zbudowany przy użyciu frameworka Laravel. API obsługuje wszystkie żądania związane z aplikacją mobilną, oraz panelem administracyjnym (webówką).
- **Technologie**: PHP, Laravel, sqlite

## Jak uruchomić projekt

### Aplikacja mobilna:
1. Skopiuj repozytorium na swoje lokalne środowisko.
2. Otwórz projekt w Android Studio.
3. Zsynchornizuj wszystkie niezbędne zależności.
4. Uruchom aplikację na emulatorze lub fizycznym urządzeniu.

### API:
1. Skopiuj repozytorium na swoje lokalne środowisko.
2. Skonfiguruj plik `.env` z odpowiednimi danymi bazy danych.
3. Zainstaluj niezbędne zależności za pomocą composer install
4. Uruchom migracje bazy danych: `php artisan migrate`
5. Uruchom serwer: `php artisan serve`

### Strona admina: 
1. Skopiuj repozytorium na swoje lokalne środowisko.
2. Wpisz komende  `npm install`
3. Uruchom serwer w środowisku lokalnym za pomocą komendy  `npm run dev`
4. Wejdz na [http://localhost:3000](http://localhost:3000) żeby skorzystać z panelu administratora




   
<p align="center"">
  <img src="https://github.com/user-attachments/assets/fe8378b6-1cf6-4ca8-b224-7be74dbdd783" alt="2020 meme" width="700px" />
</p>

