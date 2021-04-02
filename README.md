ProgettoMarchetto
============================
Progetto per l'esame di programmazione web sviluppato in base alle specifiche.

## Mappa del progetto
Parte back-end (src/main/java/it/units):
- api: contiene i web services esposti
- assistant: contiene classi di supporto che assistono in varie operazioni ma che non fanno direttamente alcuna operazione
- entities:
    - proxies, entità che servono al filtraggio delle informazioni che poi verranno passate al front-end
    - storage, entità che vengono effettivamente salvate nel database
    - support, entità di supporto per la ricezione dei dati o altre operazioni interne
- filters: contiene le classi che filtrano le richieste
- listners: contiene le classi che servono all'inizializzazione di ogni istanza
- persistance: contiene le classi che accedono direttamente alle informazioni del database
- utils: contiene altre classi che possono essere utili per varie operazioni

Parte del front-end (src/main/webapp)
- WEB-INF: contiene i file a cui nessuno esterno al progettista può avere accesso
- il resto viene dalla compilazione del progetto di Vue

pom.xml: contiene le dipendenze necessarie per il progetto

Default_README: contiene delle informazioni legate alla creazione del progetto

## Descrizione back-end

### api
I vari web service qui contenuti contengono ciascuno anche una breve documentazione, inoltre si può ottenere la documentazione anche con swagger poiché è stato aggiunto anch'esso nel progetto.

- AttoriManager.java, accessibile al path "/attori", espone 4 web services:
    - /reigstration, serve per la registrazione di un utente tramite una POST.
    - /modInfo, permetta la modifica, se si hanno i privilegi, di un utente tramite una POST. Se non vengono fatte effettive modifiche allora viene ritornato un messaggio di warning.
    - /delete/{username}, serve ad eliminare l'utente passato nell'URI tramite una DELETE. Se viene eliminato un consumer allora il contenuto dei suoi files viene eliminato. Se viene eliminato un uploader allora tutti i files ad esso collegati vengono eliminati completamente dal database.

- FilesManager.java, accessibile al path "/files", espone 4 web services:
    - /download/{id}, serve per il download di un file dal sito tramite una GET. Dopo aver controllato il token si affida al metodo downloadFile.
    - /downloadDirect/{fileId}/{tokenDownload}, serve per il download diretto tramite il link che viene mandato per mail al consumer. Viene eseguito tramite una GET. Dopo il controllo del token inserito nell'URI si affida al metodo downloadFile
    - downloadFile, metodo che viene utilizzato per fare il download del file. Se è il primo download allora salva anche l'indirizzo IP e la data del download. Siccome *deve* essere utilizzato solo in questa classe si è deciso di lasciarlo al suo interno.
    - /upload, serve (ad un Uploader) per caricare il file tramite una POST.
    - /delete/{fileId}, serve (ad un Uploader) per eliminare un certo file tramite una DELETE.

- ListManager.java, accessibile al path "/list", espone 6 web services:
    - /uploaders, serve ad ottenere tutti gli uploader che hanno caricato files per il consumer che richiede il servizio tramite GET.
    - /filesConsumer, serve ad ottenere tutti i file appartenenti al consumer che richiede il servizio tramite GET.
    - /consumers, serve ad ottenere tutti i consumer all'uploader che richiede il servizio tramite GET.
    - /filesUploader, serve ad ottenere tutti i files caricati dall'uploader che richiede il servizio tramite GET.
    - /resumeForAdmin, serve ad ottenere il resoconto dei file caricati da ogni uploader nel periodo specificato nella richiesta dell'amministratore che richiede il servizio tramite POST.
    - /administrators, serve ad ottenere la lista di tutti gli amministratori per l'amministratore che richiede il servizio tramite GET.

- LoginManager.java, accessibile al path "/login", espone il web service per i login.

### assistant
- FilterAssistant: contiene il metodo per filtrare le richieste in base al token jwt e, se indicato, in base ad un ruolo. Viene utilizzato in tutti i filtri di questo genere.
- JWTAssistant: gestisce la creazione, la decodifica (e il recupero di informazioni) e la verifica dei token jwt. Viene utilizzato ovunque si interagisca con il token jwt.
- ListToProxiesAssistant: gestisce il filtraggio delle informazioni dalle entità storage a quelle proxies. In particolare si occupa delle liste (ordinate).
- MailAssistant: gestisce l'invio delle mail. Ci sono due configurazioni per due tipologie di e-mail: per la notifica e per la creazione di un utente.
- PasswordAssistant: gestiscono la crittografia delle password con il metodo del hash&salt. Si può cambiare la lunghezza e l'algoritmo a piacere.
- TokenDownloadAssistant: gestiscono la creazione e la verifica del token per il download diretto. Esso consiste in un jwt con un segreto diverso dagli altri jwt e con un diverso soggetto.

## Proposte finali per miglioramenti
Varie proposte finali per migliorare alcuni aspetti, ma che richiederebbero troppo tempo e si sono reputate superflue per l'esame:
- Astrazione dell'entità dell'attore così da eliminare il campo stringa con il ruolo. Era stato fatto nel primo approccio al progetto ma poi per scelte seguenti si era scelto per l'approccio corrente.
- Aggiunta di Firebase per il login e la gestione password.L'autenticazione verrebbe fatta su Firebase e nel datastore verrebbero salvate solo le altre informazioni per ogni utente. Il vincolo del login con username e password potrebbe essere sorpassato obbligando ogni utente ad avere anche una mail univoca.
Ci sarebbe anche la possibilità di aggiungerlo direttamente nel client.
- Mettere una scadenza ai token mandati via mail. Non si è messa per una supposizione sulle specifiche del progetto.
- Creare la parte di test.