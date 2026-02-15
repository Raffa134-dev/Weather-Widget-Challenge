# Weather Widget Challenge 

Questa è la mia soluzione per la prova tecnica di Freedome. Si tratta di un widget meteo interattivo che permette di visualizzare il meteo attuale e le previsioni orarie e giornaliere.

## Caratteristiche
* **Visualizzazione dinamica**: Dati meteo recuperati tramite OpenWeather API.
* **Struttura a tre viste**: Meteo attuale, prossime ore e prossimi 5 giorni.
* **Sviluppo Vanilla**: Realizzato esclusivamente con HTML, CSS e JavaScript, senza l'uso di librerie esterne o framework.

## Sicurezza e API Key
**Nota importante**: Per ragioni di sicurezza e per seguire le "best practice" dello sviluppo, ho rimosso la mia **API Key personale** dal file `script.js`. 
Per far funzionare il widget localmente, è necessario inserire una chiave valida di OpenWeather nella variabile `apiKey`.

## Sviluppo e uso dell'AI
Per la realizzazione di questo progetto mi sono avvalso del supporto dell'intelligenza artificiale, che mi ha aiutato a:
* Gestire il filtraggio dei dati dell'API per estrarre correttamente le previsioni giornaliere.
* Strutturare il CSS per rispettare il mockup fornito.
* Organizzare la documentazione di questo file README.

## Miglioramenti Futuri (Todo)
Il widget attualmente supporta lo swipe touch e la navigazione tramite tastiera. Tra i prossimi aggiornamenti che vorrei implementare c'è:
* **Scroll con il mouse**: Aggiungere la possibilità di trascinare le card (drag-to-scroll) anche tramite mouse su desktop per migliorare l'accessibilità cross-device.
* **Sfondi dinamici**: Cambiare il background del widget in base alle condizioni meteo (es. pioggia, sole, neve).

## Come avviarlo
1. Clona la repository.
2. Inserisci una chiave valida in `script.js`.
3. Apri `index.html` nel tuo browser.

---

Sviluppato da: [@Raffa134-dev]

