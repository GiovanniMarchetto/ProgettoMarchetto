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