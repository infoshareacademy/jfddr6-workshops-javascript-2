2021-12-08 JavaScript - obsługa zdarzeń i callback
==================================================

Prowadzący zajęcia: Jacek Mikrut

Katalogi:
- `exercises` - początkowe wersje plików, na których możesz pracować
- `exercises-solutions` - gotowe (przykładowe) rozwiązania

Ćwiczenie: 1-counter
--------------------

Licznik, który można inkrementować lub dekrementować klikając przyciski `+` i `-`.

### Zadania:
- po kliknięciu przycisku `+` licznik powinien zwiększyć wartość o `1`
- po kliknięciu przycisku `-` licznik powinien zmniejszyć wartość o `1`
- gdy licznik ma wartość `0` przycisk `-` powinien być zablokowany (`disabled`)
- gdy licznik ma wartość większą od `0` przycisk `-` powinien być odblokowany

Ćwiczenie: 2-window-resize
--------------------------

Przy zmianie rozmiaru okna na środku ekranu pojawia się informacja z aktualną szerokością i wysokością okna.

### Zadania:
- przy zmianie rozmiaru okna powinna pojawić się informacja z aktualną szerokością i wysokością okna
- po 1 sekundzie informacja powinna zacząć znikać (fade-out) i po kolejnej 1 sekundzie stać się niewidoczna
- po tym jak informacja stanie się niewidoczna, element z informacją powinien zostać usunięty z DOM

Ćwiczenie: 3-scroll-progress
----------------------------

Podczas scrollowania w dół dokumentu, na górze okna pojawia się pasek postępu pokazujący jak daleko przescrollowano.

### Uwagi:
- plik js zawiera kod generujący losową treść strony (używając wyrazów związanych z programowaniem) i używa go do wygenerowania wysokiego bloku tekstu, aby można było scrollować stronę

### Zadania:
- gdy dokument nie jest przescrollowany ani trochę, pasek postępu powinien być niewidoczny (mieć szerokość `0`)
- gdy dokument jest przescrollowany do końca, pasek postępu powinien być szeroki na całą szerokość okna
- pasek postępu powinien reagować na scrollowanie jak również na zmianę wielkości okna

Ćwiczenie: 4-message-form
-------------------------

Prosty formularz z jednym polem textarea na wiadomość i przyciskiem "send".

### Zadania:
- formularz nie powinien nigdzie wysyłać wiadomości, a jedynie symulować jej wysłanie poprzez wypisanie wiadomości do konsoli devtools
- wysłanie wiadomości nie powinno przeładowywać strony (domyślne działanie formularza)
- powinno być ograniczenie liczby znaków w polu wiadomości (np. 100)
- pod polem wiadomości powinna być pokazana i na bieżąco aktualizowana informacja ile jeszcze można wpisać znaków
- po symulowanym wysłaniu wiadomości pole z wiadomością powinno zostać wyczyszczone
- poza kliknięciem w przycisk "send" formularz powinno dać się też wysłać naciskając ctrl+enter będąc w polu wiadomości

Ćwiczenie: 5-propagation
------------------------

Prosta struktura DOM gdzie w elemencie `body` umieszczone są kolejno zagnieżdżone trzy elementy `div` (id `#a`, `#b` i `#3`).

### Zadania:
- dodając handlery na event `click` na elementach `#a`, `#b`, `#c`, `body`, `document` i `window` na fazy `capture` i na `bubble` przetestować:
  - w jakiej kolejności uruchamiają się zarejestrowane handlery
  - w jakiej kolejności uruchamiają się handlery zarejestrowane na tym samym elemencie na tę samą fazę (`capture` lub `bubble`)
  - jaka w każdym z handlerów jest wartość:
    - `event.eventPhase`
    - `event.target`
    - `event.currentTarget`
    - `this`
  - sprawdzić jaki skutek przyniesie uruchomienie:
    - `event.preventDefault()` (sprwdzić `event.defaultPrevented`)
    - `event.stopPropagation()`
    - `event.stopImmediatePropagation()`
  - sprawdzić jaki skutek będzie miało zarejestrowanie handlera przez `element.onclick = handleClick`
