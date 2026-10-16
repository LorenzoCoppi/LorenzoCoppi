/* Dati dei progetti. Per modificare testi, ordine o immagini lavora qui.
   Ogni progetto: titolo, categoria, meta, text (paragrafi), open (immagine di apertura),
   sections (blocchi testo + immagini: "t" sono gli indici dei paragrafi), video (opzionale).
   Immagini: fit cover/contain, big true = occupa tutta la larghezza. Campi "en": inglese. */

window.PROJECTS = [
 {
  "slug": "zeta",
  "title": "Zeta",
  "sub": "Lampada antizanzare da esterni",
  "cat": "Prodotto",
  "period": "2025–26",
  "year": "2026",
  "cover": {
   "src": "assets/zeta/allestito.jpg",
   "w": 921,
   "h": 585,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Wood Design"
   ],
   [
    "Presso",
    "Politecnico di Milano"
   ],
   [
    "Docenti",
    "Mariano Chernicoff, Marco Splendore"
   ],
   [
    "Ruolo",
    "Progettazione arredo"
   ],
   [
    "Team",
    "Adezio, Colaluce, Menzolini, Vergani"
   ],
   [
    "Esposizione",
    "Fuori Salone 2026, sede di Assolombarda"
   ]
  ],
  "text": [
   "Zeta nasce per colmare un vuoto di mercato: trasformare la tradizionale (e spesso sgradevole) lampada antizanzare in un sofisticato elemento d’arredo. Lo sviluppo verticale si basa su una geometria rigorosa: l’intersezione di tre moduli circolari, in cui l’asse centrale inclinato delinea visivamente le linee latenti di una “Zeta”.",
   "L’involucro esterno è scandito da lamelle in compensato di okumè. La loro spaziatura è ingegnerizzata per consentire il passaggio di luce e insetti, impedendo però l’accesso accidentale alla griglia interna, garantendo così la massima sicurezza. Il layout tecnico è perfettamente concentrico: dal profilo metallico centrale con i LED, si passa al diffusore satinato, fino al reticolo elettrificato, il tutto serrato da una base e un anello in acciaio.",
   "L’anima del progetto risiede nella sua duplice valenza. Un sistema LED a doppia modalità permette di alternare la luce ultravioletta (funzionale contro gli insetti) a una luce bianco calda, rendendo Zeta un oggetto dinamico utilizzabile anche nelle stagioni prive di zanzare. Grande attenzione è stata dedicata all’uso quotidiano e alla manutenzione: il coperchio superiore in legno è sollevabile per gli interventi tecnici, mentre una strategica apertura alla base permette di aspirare comodamente gli insetti depositati sul fondo. Durante lo sviluppo, l’allungamento delle proporzioni (da 1,20 m a 1,40 m) ha rivelato l’eccellente modularità della struttura. Questa intuizione ha trasformato il concept in una vera e propria Collezione: alla lampada antizanzare si affiancano oggi una piantana decorativa e un tavolino con piano in vetro, uniti dalla medesima cifra stilistica.",
   "La validazione si è basata su un prototipo funzionante e ottimizzato, che ibrida artigianato e fabbricazione digitale. I pannelli in okumè sono stati lavorati tramite fresatura CNC (Politecnico di Milano) e l’elettronica è stata fornita da Assolombarda. Gli snodi e le parti strutturali sono stati realizzati in stampa 3D (PLA), una soluzione adottata esclusivamente per questa fase di validazione e test. Il modello integra un diffusore in metacrilato satinato per ammorbidire l’illuminazione e celare i dettagli tecnici. Progettata per resistere all’umidità (ma non alla pioggia diretta), la collezione è destinata a spazi outdoor al coperto come verande, patii e gazebi. Con il suo posizionamento in una fascia di mercato medio-alta, Zeta rappresenta la soluzione ideale sia per l’arredo residenziale privato sia per il settore contract (dehors e ristorazione)."
  ],
  "open": {
   "src": "assets/zeta/cover.jpg",
   "w": 694,
   "h": 1099,
   "cap": "Zeta.",
   "fit": "cover",
   "cap_en": "Zeta."
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/zeta/forma.jpg",
      "w": 921,
      "h": 520,
      "cap": "Studio della forma e render.",
      "fit": "cover",
      "cap_en": "Form study and render."
     },
     {
      "src": "assets/zeta/allestito.jpg",
      "w": 921,
      "h": 585,
      "cap": "Render allestito.",
      "fit": "cover",
      "cap_en": "Staged render."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/zeta/esploso.jpg",
      "w": 768,
      "h": 901,
      "cap": "Esploso e componenti.",
      "fit": "contain",
      "cap_en": "Exploded view and components."
     }
    ]
   },
   {
    "t": [
     2
    ],
    "imgs": [
     {
      "src": "assets/zeta/coperchio.jpg",
      "w": 547,
      "h": 656,
      "cap": "Coperchio in legno sollevabile.",
      "fit": "cover",
      "cap_en": "Liftable wooden lid."
     },
     {
      "src": "assets/zeta/base.jpg",
      "w": 415,
      "h": 559,
      "cap": "Apertura alla base per la pulizia.",
      "fit": "cover",
      "cap_en": "Opening at the base for cleaning."
     },
     {
      "src": "assets/zeta/collezione.jpg",
      "w": 921,
      "h": 656,
      "cap": "Render della collezione Zeta: lampada, lampada antizanzare e tavolino.",
      "fit": "cover",
      "big": true,
      "cap_en": "Render of the Zeta collection: floor lamp, mosquito-repellent lamp and coffee table."
     }
    ]
   },
   {
    "t": [
     3
    ],
    "imgs": [
     {
      "src": "assets/zeta/dettaglio.jpg",
      "w": 405,
      "h": 516,
      "cap": "Dettaglio lamellare del prototipo.",
      "fit": "cover",
      "cap_en": "Slat detail of the prototype."
     },
     {
      "src": "assets/zeta/prototipo.jpg",
      "w": 507,
      "h": 674,
      "cap": "Prototipo finale.",
      "fit": "cover",
      "cap_en": "Final prototype."
     }
    ]
   }
  ],
  "en": {
   "sub": "Outdoor mosquito-repellent lamp",
   "cat": "Product",
   "text": [
    "Zeta fills a gap in the market: turning the traditional (and often unsightly) mosquito-repellent lamp into a sophisticated piece of furniture. Its vertical development rests on a rigorous geometry: the intersection of three circular modules, in which the tilted central axis visually traces the latent lines of a “Z”.",
    "The outer shell is marked by okoumé plywood slats. Their spacing is engineered to let light and insects through while preventing accidental access to the inner grid, ensuring maximum safety. The technical layout is perfectly concentric: from the central metal profile with the LEDs, to the frosted diffuser, to the electrified mesh, all clamped between a steel base and ring.",
    "The soul of the project lies in its dual nature. A dual-mode LED system alternates ultraviolet light (effective against insects) with warm white light, making Zeta a dynamic object that can also be used in mosquito-free seasons. Great attention went into daily use and maintenance: the wooden top lid lifts for technical work, while a strategic opening at the base lets you easily vacuum up the insects that collect at the bottom. During development, stretching the proportions (from 1.20 m to 1.40 m) revealed the excellent modularity of the structure. This insight turned the concept into a true Collection: alongside the mosquito-repellent lamp there is now a decorative floor lamp and a coffee table with a glass top, united by the same stylistic signature.",
    "Validation was based on a working, optimised prototype that blends craftsmanship and digital fabrication. The okoumé panels were machined by CNC milling (Politecnico di Milano) and the electronics were supplied by Assolombarda. Joints and structural parts were 3D printed (PLA), a solution adopted exclusively for this validation and testing phase. The model includes a frosted methacrylate diffuser to soften the light and hide technical details. Designed to withstand humidity (but not direct rain), the collection is intended for covered outdoor spaces such as verandas, patios and gazebos. Positioned in the upper-middle market segment, Zeta is an ideal solution for both private residential furnishing and the contract sector (outdoor dining and restaurants)."
   ],
   "meta": [
    [
     "Course",
     "Wood Design"
    ],
    [
     "At",
     "Politecnico di Milano"
    ],
    [
     "Instructors",
     "Mariano Chernicoff, Marco Splendore"
    ],
    [
     "Role",
     "Furniture design"
    ],
    [
     "Team",
     "Adezio, Colaluce, Menzolini, Vergani"
    ],
    [
     "Exhibited",
     "Fuori Salone 2026, Assolombarda venue"
    ]
   ]
  }
 },
 {
  "slug": "vega",
  "title": "Vega",
  "sub": "Mobile contenitore",
  "cat": "Prodotto",
  "period": "2025–26",
  "year": "2026",
  "cover": {
   "src": "assets/vega/render.jpg",
   "w": 1166,
   "h": 787,
   "cap": "",
   "fit": "cover",
   "big": true
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Progetto personale"
   ],
   [
    "Presso",
    "Politecnico di Milano"
   ],
   [
    "Docenti",
    "Mariano Chernicoff"
   ],
   [
    "Ruolo",
    "Ricerca e progettazione"
   ],
   [
    "Team",
    "Adezio, Menzolini"
   ]
  ],
  "text": [
   "Il progetto della libreria Vega nasce con l’obiettivo di instaurare un dialogo profondo e strutturale con il divano Sirio, arredo già a catalogo per l’azienda Carpanelli. In questo progetto, Sirio non funge da semplice suggestione estetica, ma rappresenta la matrice generatrice dell’intero sistema. Il processo creativo parte, infatti, da un’analisi rigorosa degli ingombri del divano: le sue esatte proporzioni geometriche sono state estrapolate per diventare il modulo base su cui è stata calibrata l’intera architettura della libreria.",
   "Attraverso un attento esercizio di trasposizione formale, gli elementi caratteristici dell’imbottito mutano funzione e matericità, mantenendo intatto il loro DNA proporzionale. La base orizzontale del divano Sirio si evolve e si slancia nello spazio, definendo l’ossatura portante e i ripiani di Vega. Parallelamente, le volumetrie originarie di braccioli e sedute vengono decostruite e reinterpretate, trasformandosi in eleganti pannelli divisori e moduli contenitore. Si crea così un legame visivo immediato e coerente tra i due arredi, pur garantendo a Vega una spiccata identità indipendente.",
   "Gli elementi così generati convivono in un’architettura “elastica” che fa propria la teoria della Gestalt, per cui il tutto è maggiore della somma delle singole parti: la composizione finale, infatti, supera il valore estetico e funzionale dei singoli moduli isolati. Dal punto di vista tecnico e strutturale, gli ingombri degli elementi sono standardizzati – mantenendo una fedele coerenza con i rigidi rapporti di scala dettati in origine dal divano Sirio – garantendo non solo armonia visiva, ma anche un’eccellente portata di carico e usabilità quotidiana.",
   "Il vero punto di forza di Vega risiede proprio nella sua versatilità, derivazione diretta dallo studio volumetrico fatto sul suo “progenitore”. I moduli vivono in una perfetta simbiosi proporzionale: i pannelli condividono altezze fisse e lunghezze scalari, mentre i ripiani si adattano per creare svariate declinazioni spaziali a partire dall’unica matrice iniziale. Questa flessibilità rende la libreria una vera e propria “tela bianca”, personalizzabile con combinazioni pressoché infinite di materiali e finiture. Per la validazione estetica ed espositiva, infine, è stata selezionata una palette cromatica dai toni caldi e dai forti contrasti materici, studiata appositamente per far risaltare il rigore geometrico delle linee e la purezza dell’intero processo di design."
  ],
  "open": {
   "src": "assets/vega/cover.jpg",
   "w": 785,
   "h": 1114,
   "cap": "",
   "fit": "cover"
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/vega/render.jpg",
      "w": 1166,
      "h": 787,
      "cap": "Render della collezione Vega.",
      "fit": "cover",
      "big": true,
      "cap_en": "Render of the Vega collection."
     },
     {
      "src": "assets/vega/sirio.jpg",
      "w": 586,
      "h": 169,
      "cap": "Il divano Sirio, dal catalogo Carpanelli.",
      "fit": "contain",
      "cap_en": "The Sirio sofa, from the Carpanelli catalogue."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/vega/libreria1.jpg",
      "w": 714,
      "h": 473,
      "cap": "Libreria singola.",
      "fit": "cover",
      "cap_en": "Single shelving unit."
     },
     {
      "src": "assets/vega/libreria2.jpg",
      "w": 715,
      "h": 471,
      "cap": "Libreria doppia.",
      "fit": "cover",
      "cap_en": "Double shelving unit."
     }
    ]
   },
   {
    "t": [
     2
    ],
    "imgs": [
     {
      "src": "assets/vega/madia.jpg",
      "w": 505,
      "h": 344,
      "cap": "Madia.",
      "fit": "cover",
      "cap_en": "Sideboard."
     },
     {
      "src": "assets/vega/tavolino.jpg",
      "w": 507,
      "h": 344,
      "cap": "Tavolino.",
      "fit": "cover",
      "cap_en": "Coffee table."
     },
     {
      "src": "assets/vega/contenitore.jpg",
      "w": 812,
      "h": 615,
      "cap": "Dettaglio del contenitore.",
      "fit": "cover",
      "cap_en": "Detail of the storage unit."
     }
    ]
   },
   {
    "t": [
     3
    ],
    "imgs": [
     {
      "src": "assets/vega/collezione.jpg",
      "w": 922,
      "h": 617,
      "cap": "La collezione.",
      "fit": "cover",
      "big": true,
      "cap_en": "The collection."
     },
     {
      "src": "assets/vega/tavola-misure.jpg",
      "w": 2200,
      "h": 1335,
      "cap": "Moduli, misure e finiture.",
      "fit": "contain",
      "cap_en": "Modules, dimensions and finishes."
     },
     {
      "src": "assets/vega/tavola-prospetti.jpg",
      "w": 2200,
      "h": 618,
      "cap": "Prospetti delle composizioni.",
      "fit": "contain",
      "cap_en": "Elevations of the compositions."
     }
    ]
   }
  ],
  "en": {
   "sub": "Storage shelving system",
   "cat": "Product",
   "text": [
    "The Vega shelving project was conceived to build a deep, structural dialogue with the Sirio sofa, a piece already in the catalogue of the company Carpanelli. Here Sirio is not a mere aesthetic suggestion but the generating matrix of the whole system. The creative process starts from a rigorous analysis of the sofa’s dimensions: its exact geometric proportions were extracted to become the base module on which the entire architecture of the shelving was calibrated.",
    "Through a careful exercise in formal transposition, the characteristic elements of the upholstered piece change function and materiality while keeping their proportional DNA intact. The horizontal base of the Sirio sofa evolves and stretches into space, defining the load-bearing frame and the shelves of Vega. At the same time, the original volumes of armrests and seats are deconstructed and reinterpreted, becoming elegant divider panels and storage modules. This creates an immediate, coherent visual link between the two pieces, while giving Vega a distinct independent identity.",
    "The resulting elements coexist in an “elastic” architecture that embraces Gestalt theory, whereby the whole is greater than the sum of its parts: the final composition exceeds the aesthetic and functional value of the individual modules. Technically and structurally, the dimensions of the elements are standardised – staying faithful to the strict scale relationships originally set by the Sirio sofa – ensuring not only visual harmony but also excellent load capacity and everyday usability.",
    "Vega’s real strength lies in its versatility, a direct result of the volumetric study carried out on its “progenitor”. The modules live in perfect proportional symbiosis: the panels share fixed heights and scaled lengths, while the shelves adapt to create a variety of spatial configurations from a single initial matrix. This flexibility makes the shelving a true “blank canvas”, customisable with almost endless combinations of materials and finishes. For aesthetic and display validation, finally, a palette of warm tones and strong material contrasts was selected, designed to bring out the geometric rigour of the lines and the purity of the whole design process."
   ],
   "meta": [
    [
     "Course",
     "Personal project"
    ],
    [
     "At",
     "Politecnico di Milano"
    ],
    [
     "Instructors",
     "Mariano Chernicoff"
    ],
    [
     "Role",
     "Research and design"
    ],
    [
     "Team",
     "Adezio, Menzolini"
    ]
   ]
  }
 },
 {
  "slug": "cameretta",
  "title": "Cameretta su misura",
  "sub": "Letto, divano e armadio per due bambine",
  "cat": "Prodotto",
  "period": "2026",
  "year": "2026",
  "cover": {
   "src": "assets/camera/chiuso.jpg",
   "w": 1462,
   "h": 1022,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Tipo",
    "Progetto site specific"
   ],
   [
    "Ruolo",
    "Progettazione"
   ],
   [
    "Team",
    "Giacomo Caroli, Lorenzo Coppi"
   ],
   [
    "Data",
    "30.09.2026"
   ]
  ],
  "text": [
   "Una cameretta progettata su misura per due bambine, sviluppata insieme a Giacomo Caroli. Un unico sistema in multistrato di pino cileno riunisce letto a castello, divanetto, letto estraibile su ruote, cassettone su ruote e armadio.",
   "Il letto alto poggia su una struttura che ospita sotto un divanetto, con un letto estraibile su ruote. Accanto, un cassettone su ruote raccoglie i giochi e regge l’armadio, un modello Platsa di IKEA. Una fiancata con un oculo circolare chiude il letto a castello. I materassi misurano 190 × 80 cm."
  ],
  "open": {
   "src": "assets/camera/chiuso.jpg",
   "w": 1462,
   "h": 1022,
   "cap": "Vista frontale, a mobile chiuso.",
   "fit": "cover",
   "cap_en": "Front view, closed."
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/camera/letto.jpg",
      "w": 1462,
      "h": 1022,
      "cap": "Vista frontale, letto aperto.",
      "fit": "cover",
      "cap_en": "Front view, bed open."
     },
     {
      "src": "assets/camera/cassettone.jpg",
      "w": 1462,
      "h": 1022,
      "cap": "Vista frontale, letto e cassettone aperti.",
      "fit": "cover",
      "cap_en": "Front view, bed and drawer open."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/camera/sinistra.jpg",
      "w": 1462,
      "h": 1022,
      "cap": "Vista laterale sinistra.",
      "fit": "cover",
      "cap_en": "Left side view."
     },
     {
      "src": "assets/camera/destra.jpg",
      "w": 1462,
      "h": 1022,
      "cap": "Vista laterale destra.",
      "fit": "cover",
      "cap_en": "Right side view."
     }
    ]
   },
   {
    "t": [],
    "imgs": [
     {
      "src": "assets/camera/ai1.jpg",
      "w": 1462,
      "h": 1022,
      "cap": "Studio d’atmosfera con strumenti di AI.",
      "fit": "cover",
      "cap_en": "Mood study made with AI tools."
     },
     {
      "src": "assets/camera/ai2.jpg",
      "w": 1462,
      "h": 1022,
      "cap": "",
      "fit": "cover"
     }
    ]
   },
   {
    "t": [],
    "imgs": [
     {
      "src": "assets/camera/disegno.jpg",
      "w": 1800,
      "h": 1273,
      "cap": "Disegni di massima, con misure e componenti.",
      "fit": "contain",
      "big": true,
      "cap_en": "Preliminary drawings, with dimensions and components."
     }
    ]
   }
  ],
  "en": {
   "sub": "Bed, sofa and wardrobe for two girls",
   "cat": "Product",
   "text": [
    "A bedroom designed to measure for two girls, developed together with Giacomo Caroli. A single system in Chilean pine plywood brings together a bunk bed, a small sofa, a pull-out bed on wheels, a drawer on wheels and a wardrobe.",
    "The upper bed rests on a structure that houses a small sofa below, with a pull-out bed on wheels. Next to it, a drawer on wheels holds the toys and supports the wardrobe, an IKEA Platsa model. A side panel with a circular opening encloses the bunk bed. The mattresses measure 190 × 80 cm."
   ],
   "meta": [
    [
     "Type",
     "Site-specific project"
    ],
    [
     "Role",
     "Design"
    ],
    [
     "Team",
     "Giacomo Caroli, Lorenzo Coppi"
    ],
    [
     "Date",
     "30.09.2026"
    ]
   ]
  }
 },
 {
  "slug": "pito-paintings",
  "title": "Pito's Paintings",
  "sub": "Sito portfolio di un giovane artista milanese",
  "cat": "Web design",
  "period": "2023–24",
  "year": "2024",
  "cover": {
   "src": "assets/pito/home.jpg",
   "w": 830,
   "h": 610,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Fondamenti di informatica"
   ],
   [
    "Presso",
    "Politecnico di Milano"
   ],
   [
    "Docenti",
    "Cristian Pilato"
   ],
   [
    "Ruolo",
    "Progettazione grafica e programmazione"
   ],
   [
    "Team",
    "Matteo Guerra"
   ]
  ],
  "text": [
   "Pito’s Paintings è un progetto digitale concepito per raccogliere e valorizzare l’intera produzione artistica di Pietro Coppi, includendo dipinti, performance, testi e fotografie. Abbiamo sviluppato questo sito web su misura per il giovane artista milanese, studente dell’Accademia di Belle Arti di Brera ormai prossimo alla laurea in Pittura.",
   "Il processo di design è partito da un’attenta indagine sull’artista, studiando a fondo le sue opere e la sua personalità. Per catturare la sua vera essenza, l’ho seguito in prima persona durante il suo lavoro pittorico in studio, realizzando uno shooting fotografico dedicato, utile sia per completare l’estetica del sito che per la sua promozione personale.",
   "Dal punto di vista dell’interfaccia, traendo ispirazione dall’impostazione visiva di Illo Studio, abbiamo progettato una galleria organizzata per tipologia di output. L’architettura del sito si chiude con una pagina “About” e una sezione Contatti. A livello tecnico, la piattaforma è completamente responsive, garantendo una navigazione fluida su qualsiasi dispositivo, ed è dotata di una modalità Dark Mode per un’esperienza visiva immersiva."
  ],
  "open": {
   "src": "assets/pito/cover.jpg",
   "w": 1080,
   "h": 1531,
   "cap": "Pietro Giovanni Coppi.",
   "fit": "cover",
   "cap_en": "Pietro Giovanni Coppi."
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/pito/home.jpg",
      "w": 830,
      "h": 610,
      "cap": "Schermata home del sito.",
      "fit": "cover",
      "cap_en": "Website home screen."
     },
     {
      "src": "assets/pito/mobile.jpg",
      "w": 726,
      "h": 817,
      "cap": "Intro del sito, versione responsive.",
      "fit": "cover",
      "cap_en": "Website intro, responsive version."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/pito/p1.jpg",
      "w": 904,
      "h": 1600,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/pito/p2.jpg",
      "w": 716,
      "h": 403,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/pito/p3.jpg",
      "w": 1600,
      "h": 897,
      "cap": "Dettaglio.",
      "fit": "cover",
      "cap_en": "Detail."
     },
     {
      "src": "assets/pito/p4.jpg",
      "w": 1600,
      "h": 900,
      "cap": "",
      "fit": "cover"
     }
    ]
   },
   {
    "t": [
     2
    ],
    "imgs": [
     {
      "src": "assets/pito/shapes.jpg",
      "w": 919,
      "h": 681,
      "cap": "Schermate del sito.",
      "fit": "cover",
      "cap_en": "Website screens."
     },
     {
      "src": "assets/pito/pitture.jpg",
      "w": 828,
      "h": 501,
      "cap": "Sezione pitture.",
      "fit": "contain",
      "cap_en": "Paintings section."
     },
     {
      "src": "assets/pito/dark.jpg",
      "w": 571,
      "h": 345,
      "cap": "Schermata del sito in dark mode.",
      "fit": "contain",
      "cap_en": "Website screen in dark mode."
     }
    ]
   }
  ],
  "en": {
   "sub": "Portfolio website for a young Milanese artist",
   "cat": "Web design",
   "text": [
    "Pito’s Paintings is a digital project designed to collect and showcase the entire artistic output of Pietro Coppi, including paintings, performances, texts and photographs. We built this tailor-made website for the young Milanese artist, a student at the Brera Academy of Fine Arts about to graduate in Painting.",
    "The design process started with a careful investigation of the artist, studying his works and personality in depth. To capture his true essence, I followed him in person while he painted in his studio, carrying out a dedicated photo shoot, useful both to complete the look of the site and for his personal promotion.",
    "As for the interface, drawing inspiration from the visual approach of Illo Studio, we designed a gallery organised by type of output. The site architecture closes with an “About” page and a Contacts section. Technically, the platform is fully responsive, ensuring smooth navigation on any device, and includes a Dark Mode for an immersive visual experience."
   ],
   "meta": [
    [
     "Course",
     "Fundamentals of Computer Science"
    ],
    [
     "At",
     "Politecnico di Milano"
    ],
    [
     "Instructors",
     "Cristian Pilato"
    ],
    [
     "Role",
     "Graphic design and programming"
    ],
    [
     "Team",
     "Matteo Guerra"
    ]
   ]
  }
 },
 {
  "slug": "the-gospels",
  "title": "The Gospels",
  "sub": "Sito di data visualization",
  "cat": "Web design",
  "period": "2023–24",
  "year": "2024",
  "cover": {
   "src": "assets/gospels/luke.jpg",
   "w": 1223,
   "h": 843,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Laboratorio di computer grafica per l’Information design"
   ],
   [
    "Presso",
    "Politecnico di Milano"
   ],
   [
    "Docenti",
    "Mauri"
   ],
   [
    "Ruolo",
    "Progettazione informatica"
   ],
   [
    "Team",
    "Martina Ghezzi, Matteo Guerra, Alice Miyake, Lucia Zerboni"
   ]
  ],
  "text": [
   "The Gospels è un progetto digitale realizzato durante il secondo anno del corso di studi in Design della Comunicazione. Il brief richiedeva di rappresentare un fenomeno invisibile attraverso la rappresentazione grafica di dati complessi.",
   "Il progetto consiste in un’analisi della struttura narrativa dei Vangeli. Il sito web è completamente navigabile: dalla Home page, gli utenti possono selezionare il Vangelo che desiderano esplorare. Una volta aperto, uno slider interattivo permette la navigazione tra i capitoli, con un’infografica che illustra gli eventi principali e i personaggi coinvolti nel capitolo selezionato."
  ],
  "open": {
   "src": "assets/gospels/cover.jpg",
   "w": 1022,
   "h": 1453,
   "cap": "Home page del sito.",
   "fit": "cover",
   "cap_en": "Website home page."
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/gospels/scegli.jpg",
      "w": 855,
      "h": 533,
      "cap": "Schermata di selezione del Vangelo.",
      "fit": "contain",
      "cap_en": "Gospel selection screen."
     },
     {
      "src": "assets/gospels/luke.jpg",
      "w": 1223,
      "h": 843,
      "cap": "Gospel of Luke.",
      "fit": "cover",
      "cap_en": "Gospel of Luke."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/gospels/mark.jpg",
      "w": 829,
      "h": 520,
      "cap": "Gospel of Mark.",
      "fit": "contain",
      "cap_en": "Gospel of Mark."
     },
     {
      "src": "assets/gospels/mark3.jpg",
      "w": 518,
      "h": 328,
      "cap": "Gospel of Mark, capitolo 3.",
      "fit": "contain",
      "cap_en": "Gospel of Mark, chapter 3."
     },
     {
      "src": "assets/gospels/john.jpg",
      "w": 507,
      "h": 316,
      "cap": "Gospel of John.",
      "fit": "contain",
      "cap_en": "Gospel of John."
     },
     {
      "src": "assets/gospels/matthew.jpg",
      "w": 610,
      "h": 374,
      "cap": "Gospel of Matthew.",
      "fit": "contain",
      "cap_en": "Gospel of Matthew."
     },
     {
      "src": "assets/gospels/matthew4.jpg",
      "w": 611,
      "h": 382,
      "cap": "Gospel of Matthew, capitolo 4.",
      "fit": "contain",
      "cap_en": "Gospel of Matthew, chapter 4."
     }
    ]
   }
  ],
  "en": {
   "sub": "Data visualisation website",
   "cat": "Web design",
   "text": [
    "The Gospels is a digital project made during the second year of the Communication Design degree. The brief asked us to represent an invisible phenomenon through the graphic representation of complex data.",
    "The project is an analysis of the narrative structure of the Gospels. The website is fully navigable: from the home page, users choose the Gospel they want to explore. Once opened, an interactive slider lets them move between chapters, with an infographic showing the main events and characters involved in the selected chapter."
   ],
   "meta": [
    [
     "Course",
     "Computer Graphics Lab for Information Design"
    ],
    [
     "At",
     "Politecnico di Milano"
    ],
    [
     "Instructors",
     "Mauri"
    ],
    [
     "Role",
     "Interaction and web development"
    ],
    [
     "Team",
     "Martina Ghezzi, Matteo Guerra, Alice Miyake, Lucia Zerboni"
    ]
   ]
  }
 },
 {
  "slug": "unifest",
  "title": "UniFest",
  "sub": "Università delle feste e celebrazioni del mondo",
  "cat": "Branding",
  "period": "2023–24",
  "year": "2024",
  "cover": {
   "src": "assets/unifest/open-day.jpg",
   "w": 818,
   "h": 532,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Laboratorio di Corporate Identity"
   ],
   [
    "Presso",
    "Politecnico di Milano"
   ],
   [
    "Docenti",
    "Guida, Buffa"
   ],
   [
    "Ruolo",
    "Progettazione identità visiva"
   ],
   [
    "Team",
    "Scotti, Guerra, Petronille, Zoli"
   ]
  ],
  "text": [
   "Cosa significa fare festa oggi? Lontano dagli estremi dello “sballo” fine a se stesso e della “noia” dei riti svuotati di senso, UNIFEST nasce per restituire valore alla celebrazione. È la prima università internazionale dedicata allo studio delle feste come espressione di gioia autentica e condivisa. La sfida è stata creare un’identità visiva capace di unire la solennità accademica delle tradizioni culturali con l’energia pop e vitale dei traguardi personali.",
   "Il fil rouge dell’intera brand identity è il Nastro. Simbolo universale di dono, unione e festa, il nastro attraversa i layout, connette culture diverse e guida lo sguardo. Nella logo animation, prende vita e compie un volteggio trasformandosi nella “F” allargata, l’elemento distintivo del logotipo UNIFEST.",
   "Tipografia: un contrasto calibrato tra il font Transforma (bold e giocoso, le cui forme richiamano le pieghe del nastro) e Instrument (sobrio e strutturato per i testi lunghi), unendo così autorevolezza accademica e freschezza contemporanea. Palette cromatica: una doppia anima. Toni istituzionali (Oro, Verde Smeraldo, Rosso, Blu Viola) per comunicare prestigio e radicamento; toni “light” (Rosa Antico, Giallo Burro, Verde Menta, Lavanda) per evocare accoglienza, empatia e vitalità.",
   "Fotografia: un approccio documentaristico immersivo e caldo. Ritratti intimi e spontanei che celebrano la diversità dei cinque continenti, mettendo in luce l’umanità nella sua pluralità.",
   "Il posizionamento prende vita con la campagna manifesto “Celebration makes...”. Un format flessibile per OOH e billboard dove il nastro interagisce con copy d’impatto (es. COMMUNITY, DANCE, JOY), dimostrando il potere trasformativo della celebrazione. L’identità si declina su un sistema omnicanale che include un’interfaccia web modulare e inclusiva, affiancata da un calendario editoriale (cartaceo e digitale) che esplora le festività mondiali dal punto di vista antropologico. UNIFEST è un branding con un’anima: un sistema visivo strutturato, poetico e funzionale che comunica rispetto e appartenenza, trasformando la festa in uno strumento universale di connessione e inclusione globale."
  ],
  "open": {
   "src": "assets/unifest/cover.jpg",
   "w": 1024,
   "h": 1456,
   "cap": "",
   "fit": "cover"
  },
  "sections": [
   {
    "t": [
     0,
     1
    ],
    "imgs": [
     {
      "src": "assets/unifest/open-day.jpg",
      "w": 818,
      "h": 532,
      "cap": "Billboard Open day.",
      "fit": "cover",
      "cap_en": "Open Day billboard."
     },
     {
      "src": "assets/unifest/billboard.jpg",
      "w": 830,
      "h": 513,
      "cap": "Billboard promozionale.",
      "fit": "cover",
      "cap_en": "Promotional billboard."
     },
     {
      "src": "assets/unifest/billboard2.jpg",
      "w": 518,
      "h": 292,
      "cap": "Billboard “Celebration makes”.",
      "fit": "cover",
      "cap_en": "“Celebration makes” billboard."
     },
     {
      "src": "assets/unifest/manifesto.jpg",
      "w": 608,
      "h": 371,
      "cap": "Manifesto singolo.",
      "fit": "cover",
      "cap_en": "Single poster."
     }
    ]
   },
   {
    "t": [
     2,
     3
    ],
    "imgs": [
     {
      "src": "assets/unifest/brochure.jpg",
      "w": 714,
      "h": 402,
      "cap": "Brochure.",
      "fit": "cover",
      "cap_en": "Brochure."
     },
     {
      "src": "assets/unifest/cartoline.jpg",
      "w": 714,
      "h": 403,
      "cap": "Cartoline.",
      "fit": "cover",
      "cap_en": "Postcards."
     },
     {
      "src": "assets/unifest/cal-cover.jpg",
      "w": 505,
      "h": 286,
      "cap": "Calendario.",
      "fit": "cover",
      "cap_en": "Calendar."
     },
     {
      "src": "assets/unifest/cal-feb.jpg",
      "w": 505,
      "h": 284,
      "cap": "",
      "fit": "cover"
     }
    ]
   },
   {
    "t": [
     4
    ],
    "imgs": [
     {
      "src": "assets/unifest/manifesti.jpg",
      "w": 1212,
      "h": 673,
      "cap": "Manifesti, campagna “Celebration makes”.",
      "fit": "cover",
      "big": true,
      "cap_en": "Posters, “Celebration makes” campaign."
     },
     {
      "src": "assets/unifest/cal-may.jpg",
      "w": 505,
      "h": 595,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/unifest/sito.jpg",
      "w": 714,
      "h": 428,
      "cap": "Sito UniFest.",
      "fit": "contain",
      "cap_en": "UniFest website."
     },
     {
      "src": "assets/unifest/calendario-sito.jpg",
      "w": 714,
      "h": 428,
      "cap": "Sito UniFest, calendario.",
      "fit": "contain",
      "cap_en": "UniFest website, calendar."
     }
    ]
   }
  ],
  "video": {
   "src": "assets/unifest/brandreel.mp4",
   "poster": "assets/unifest/brandreel-poster.jpg",
   "w": 1280,
   "h": 720,
   "label": "Brand reel"
  },
  "en": {
   "sub": "The university of the world’s festivals and celebrations",
   "cat": "Branding",
   "text": [
    "What does it mean to celebrate today? Far from the extremes of aimless “partying” and the “boredom” of rituals emptied of meaning, UNIFEST was born to give value back to celebration. It is the first international university devoted to the study of festivals as an expression of authentic, shared joy. The challenge was to create a visual identity able to combine the academic solemnity of cultural traditions with the pop, vital energy of personal milestones.",
    "The common thread of the entire brand identity is the Ribbon. A universal symbol of gift, union and celebration, the ribbon runs through the layouts, connects different cultures and guides the eye. In the logo animation it comes alive and performs a twirl, turning into the widened “F”, the distinctive element of the UNIFEST logotype.",
    "Typography: a calibrated contrast between Transforma (bold and playful, its shapes recalling the folds of a ribbon) and Instrument (sober and structured for long texts), combining academic authority with contemporary freshness. Colour palette: a double soul. Institutional tones (Gold, Emerald Green, Red, Blue Violet) to convey prestige and roots; “light” tones (Antique Pink, Butter Yellow, Mint Green, Lavender) to evoke warmth, empathy and vitality.",
    "Photography: an immersive, warm documentary approach. Intimate, spontaneous portraits that celebrate the diversity of the five continents, highlighting humanity in its plurality.",
    "The positioning comes to life with the “Celebration makes...” poster campaign. A flexible format for OOH and billboards where the ribbon interacts with punchy copy (e.g. COMMUNITY, DANCE, JOY), demonstrating the transformative power of celebration. The identity extends into an omnichannel system that includes a modular, inclusive web interface, alongside an editorial calendar (print and digital) that explores world festivities from an anthropological point of view. UNIFEST is a brand with a soul: a structured, poetic and functional visual system that communicates respect and belonging, turning celebration into a universal tool for connection and global inclusion."
   ],
   "meta": [
    [
     "Course",
     "Corporate Identity Lab"
    ],
    [
     "At",
     "Politecnico di Milano"
    ],
    [
     "Instructors",
     "Guida, Buffa"
    ],
    [
     "Role",
     "Visual identity design"
    ],
    [
     "Team",
     "Scotti, Guerra, Petronille, Zoli"
    ]
   ]
  }
 },
 {
  "slug": "lungo-linea",
  "title": "Lungo Linea",
  "sub": "Muri che raccontano",
  "cat": "Editoria",
  "period": "2023–24",
  "year": "2024",
  "cover": {
   "src": "assets/lungolinea/indice.jpg",
   "w": 922,
   "h": 726,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Laboratorio di Fondamenti del Progetto"
   ],
   [
    "Presso",
    "Politecnico di Milano"
   ],
   [
    "Docenti",
    "Elena Caratti"
   ],
   [
    "Ruolo",
    "Progettazione grafica e impaginazione"
   ],
   [
    "Team",
    "Federico Bolletta, Pietro Ferri, Andrea Romani"
   ]
  ],
  "text": [
   "Lungo Linea – Muri che raccontano è un magazine illustrato nato dalla reinterpretazione contemporanea della fiaba Il lupo e i sette capretti dei Fratelli Grimm. Il progetto indaga il dialogo tra racconto tradizionale e cultura urbana, trasportando la storia originale nella città di Milano e nel mondo della street art. Il lavoro è iniziato con la progettazione della testata e dell’identità visiva del magazine.",
   "Nella riscrittura della fiaba, i sette capretti restano i protagonisti della storia e vengono rappresentati come sette fratelli curiosi e intraprendenti che si avvicinano al mondo dei graffiti senza conoscerne le regole e i codici. Dopo essere usciti di casa contro il volere della madre, si ritrovano coinvolti in una serie di avventure per le strade di Milano, inseguiti da un poliziotto raffigurato come un maiale. Durante il loro percorso incontrano il lupo, reinterpretato come Wenz, un vero street artist che li introduce alla cultura urbana e diventa il loro maestro.",
   "L’intero magazine è stato realizzato attraverso illustrazioni originali disegnate a mano in bianco e nero. Questa scelta grafica richiama il segno spontaneo del disegno sui muri e valorizza il tratto illustrato, mentre la carta scelta per la stampa richiama la texture delle superfici urbane e dei muri cittadini. La struttura editoriale si sviluppa attraverso una serie di doppie pagine che accompagnano il lettore nella scoperta del progetto: un editoriale introduttivo, il riassunto della fiaba originale, la sua reinterpretazione contemporanea, lo schema narrativo, un fumetto riassuntivo della nuova storia, l’intervista a uno dei personaggi, una ricetta ironica dedicata al “capretto alla milanese”, una sezione di giochi e una quarta di copertina progettata come una pubblicità.",
   "L’identità visiva combina illustrazione, fumetto, lettering e riferimenti al mondo dei graffiti, dando vita a un linguaggio giovane, dinamico e di strada. Il progetto trasforma una fiaba classica in un racconto contemporaneo capace di raccontare Milano attraverso i suoi muri, le sue storie e le sue forme di espressione artistica."
  ],
  "open": {
   "src": "assets/lungolinea/cover.jpg",
   "w": 1453,
   "h": 1022,
   "cap": "Copertina.",
   "fit": "cover",
   "cap_en": "Cover."
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/lungolinea/indice.jpg",
      "w": 922,
      "h": 726,
      "cap": "Doppia pagina indice.",
      "fit": "cover",
      "cap_en": "Contents spread."
     },
     {
      "src": "assets/lungolinea/riassunto.jpg",
      "w": 726,
      "h": 570,
      "cap": "Doppia pagina, riassunto della fiaba originale.",
      "fit": "cover",
      "cap_en": "Spread: summary of the original fairy tale."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/lungolinea/intervista.jpg",
      "w": 734,
      "h": 532,
      "cap": "Doppia pagina, intervista a Wenz.",
      "fit": "cover",
      "cap_en": "Spread: interview with Wenz."
     },
     {
      "src": "assets/lungolinea/dettaglio.jpg",
      "w": 481,
      "h": 358,
      "cap": "Dettaglio della pagina intervista.",
      "fit": "cover",
      "cap_en": "Detail of the interview page."
     }
    ]
   },
   {
    "t": [
     2,
     3
    ],
    "imgs": [
     {
      "src": "assets/lungolinea/indice2.jpg",
      "w": 533,
      "h": 398,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/lungolinea/schema.jpg",
      "w": 532,
      "h": 398,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/lungolinea/fumetto.jpg",
      "w": 532,
      "h": 398,
      "cap": "Doppie pagine del magazine.",
      "fit": "cover",
      "cap_en": "Magazine spreads."
     }
    ]
   }
  ],
  "en": {
   "sub": "Walls that tell stories",
   "cat": "Editorial",
   "text": [
    "Lungo Linea – Walls that tell stories is an illustrated magazine born from a contemporary reinterpretation of the Brothers Grimm fairy tale The Wolf and the Seven Little Kids. The project explores the dialogue between traditional storytelling and urban culture, transporting the original story to the city of Milan and the world of street art. The work began with the design of the masthead and the magazine’s visual identity.",
    "In the rewriting of the tale, the seven kids remain the protagonists and are portrayed as seven curious, enterprising siblings who approach the world of graffiti without knowing its rules and codes. After leaving home against their mother’s wishes, they get caught up in a series of adventures on the streets of Milan, chased by a policeman depicted as a pig. Along the way they meet the wolf, reinterpreted as Wenz, a real street artist who introduces them to urban culture and becomes their master.",
    "The whole magazine is made of original hand-drawn black-and-white illustrations. This graphic choice recalls the spontaneous mark of drawing on walls and enhances the illustrated line, while the paper chosen for printing recalls the texture of urban surfaces and city walls. The editorial structure unfolds through a series of spreads that guide the reader through the project: an introductory editorial, a summary of the original fairy tale, its contemporary reinterpretation, the narrative diagram, a comic summarising the new story, an interview with one of the characters, an ironic recipe for “kid alla milanese”, a games section and a back cover designed as an advertisement.",
    "The visual identity combines illustration, comics, lettering and references to the world of graffiti, creating a young, dynamic, street-level language. The project turns a classic fairy tale into a contemporary story able to portray Milan through its walls, its stories and its forms of artistic expression."
   ],
   "meta": [
    [
     "Course",
     "Design Fundamentals Lab"
    ],
    [
     "At",
     "Politecnico di Milano"
    ],
    [
     "Instructors",
     "Elena Caratti"
    ],
    [
     "Role",
     "Graphic design and layout"
    ],
    [
     "Team",
     "Federico Bolletta, Pietro Ferri, Andrea Romani"
    ]
   ]
  }
 },
 {
  "slug": "il-milione",
  "title": "Il Milione",
  "sub": "Redesign del libro Il Milione di Marco Polo",
  "cat": "Editoria",
  "period": "2025–26",
  "year": "2026",
  "cover": {
   "src": "assets/milione/copertina.jpg",
   "w": 922,
   "h": 656,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Laboratorio di Sintesi Finale"
   ],
   [
    "Presso",
    "Politecnico di Milano"
   ],
   [
    "Docenti",
    "Pea, Pedron, Pitoni, Pinotti"
   ],
   [
    "Ruolo",
    "Ricerca e progettazione grafica"
   ],
   [
    "Team",
    "Lucia Zerboni"
   ]
  ],
  "text": [
   "Questo progetto nasce dalla volontà di reinterpretare editorialmente Il Milione di Marco Polo, una delle opere più significative della letteratura di viaggio, trasformandola in uno strumento di consultazione e scoperta più accessibile al lettore contemporaneo. Il testo originale presenta infatti una straordinaria quantità di informazioni riguardanti territori, popoli, merci, religioni, attività economiche, animali e caratteristiche geografiche, raccolte nel corso dei viaggi di Marco Polo attraverso l’Asia del XIII secolo.",
   "L’analisi dell’opera ha evidenziato come la sua ricchezza descrittiva rappresenti al tempo stesso un valore e una complessità. La struttura frammentata del racconto e la grande densità di contenuti rendono difficile costruire una visione d’insieme dei luoghi e delle relazioni che emergono nel testo. Da questa riflessione nasce l’obiettivo progettuale: utilizzare il design editoriale come strumento di interpretazione, capace di supportare la lettura e facilitare la comprensione delle informazioni.",
   "Il progetto sviluppa quindi un sistema integrato di mappe, icone e infografiche che affianca il testo e ne rende visibili strutture, connessioni e ricorrenze. Le visualizzazioni non derivano da dati quantitativi certi, ma dall’analisi delle descrizioni contenute nell’opera. Le informazioni vengono estratte, organizzate e tradotte in un linguaggio grafico che permette di evidenziare rapporti, frequenze e proporzioni tra gli elementi raccontati da Marco Polo, offrendo una lettura complementare a quella testuale.",
   "La progettazione ha coinvolto ogni aspetto del libro: dalla definizione del formato e della griglia alla scelta tipografica, dalla costruzione del sistema iconografico alla realizzazione delle cartografie tematiche e dei diagrammi informativi, fino alla selezione dei materiali e delle soluzioni di stampa e rilegatura. Ogni elemento è stato sviluppato per contribuire a un’esperienza di lettura più intuitiva, dinamica e coinvolgente. Il risultato è un atlante narrativo che combina racconto e visualizzazione delle informazioni, valorizzando il contenuto dell’opera attraverso gli strumenti del design contemporaneo e dimostrando come il progetto editoriale possa diventare un mezzo attivo di mediazione tra testo e lettore."
  ],
  "open": {
   "src": "assets/milione/cover.jpg",
   "w": 1022,
   "h": 1439,
   "cap": "",
   "fit": "cover"
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/milione/copertina.jpg",
      "w": 922,
      "h": 656,
      "cap": "Copertina.",
      "fit": "cover",
      "cap_en": "Cover."
     },
     {
      "src": "assets/milione/concept.jpg",
      "w": 714,
      "h": 427,
      "cap": "Il concept del libro.",
      "fit": "cover",
      "cap_en": "The book concept."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/milione/indice.jpg",
      "w": 922,
      "h": 656,
      "cap": "Doppia pagina indice.",
      "fit": "cover",
      "cap_en": "Contents spread."
     },
     {
      "src": "assets/milione/mappa.jpg",
      "w": 1327,
      "h": 922,
      "cap": "Aletta con mappa.",
      "fit": "cover",
      "cap_en": "Flap with map."
     }
    ]
   },
   {
    "t": [
     2
    ],
    "imgs": [
     {
      "src": "assets/milione/coltivazioni.jpg",
      "w": 1327,
      "h": 859,
      "cap": "Infografica coltivazioni.",
      "fit": "contain",
      "cap_en": "Crops infographic."
     },
     {
      "src": "assets/milione/animali.jpg",
      "w": 660,
      "h": 440,
      "cap": "Infografica animali.",
      "fit": "contain",
      "cap_en": "Animals infographic."
     },
     {
      "src": "assets/milione/religioni.jpg",
      "w": 668,
      "h": 440,
      "cap": "Infografica religioni.",
      "fit": "contain",
      "cap_en": "Religions infographic."
     }
    ]
   },
   {
    "t": [
     3
    ],
    "imgs": [
     {
      "src": "assets/milione/tipografia.jpg",
      "w": 507,
      "h": 285,
      "cap": "Tipografia.",
      "fit": "cover",
      "cap_en": "Typography."
     },
     {
      "src": "assets/milione/rilegatura.jpg",
      "w": 507,
      "h": 284,
      "cap": "Rilegatura.",
      "fit": "cover",
      "cap_en": "Binding."
     },
     {
      "src": "assets/milione/aletta.jpg",
      "w": 507,
      "h": 284,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/milione/capitolo.jpg",
      "w": 738,
      "h": 492,
      "cap": "Doppie pagine di inizio capitolo.",
      "fit": "cover",
      "cap_en": "Chapter opening spreads."
     },
     {
      "src": "assets/milione/capitolo2.jpg",
      "w": 741,
      "h": 493,
      "cap": "",
      "fit": "cover"
     }
    ]
   }
  ],
  "en": {
   "sub": "Redesign of Marco Polo’s The Travels",
   "cat": "Editorial",
   "text": [
    "This project grew from the desire to reinterpret Marco Polo’s The Travels (Il Milione) editorially, one of the most significant works of travel literature, turning it into a tool for consultation and discovery that is more accessible to the contemporary reader. The original text contains an extraordinary amount of information about territories, peoples, goods, religions, economic activities, animals and geographical features, gathered during Marco Polo’s journeys across 13th-century Asia.",
    "Analysing the work showed that its descriptive richness is at once a value and a complexity. The fragmented structure of the narrative and the great density of content make it hard to build an overall picture of the places and relationships that emerge from the text. From this reflection comes the design goal: to use editorial design as a tool of interpretation, able to support reading and make the information easier to understand.",
    "The project therefore develops an integrated system of maps, icons and infographics that sits alongside the text and makes its structures, connections and recurrences visible. The visualisations do not derive from reliable quantitative data, but from analysing the descriptions contained in the work. The information is extracted, organised and translated into a graphic language that highlights relationships, frequencies and proportions among the elements described by Marco Polo, offering a reading that complements the text.",
    "The design involved every aspect of the book: from the definition of format and grid to the choice of typefaces, from the construction of the icon system to the creation of thematic maps and information diagrams, through to the selection of materials and printing and binding solutions. Every element was developed to contribute to a more intuitive, dynamic and engaging reading experience. The result is a narrative atlas that combines storytelling and information visualisation, enhancing the content of the work through the tools of contemporary design and showing how editorial design can become an active means of mediation between text and reader."
   ],
   "meta": [
    [
     "Course",
     "Final Synthesis Lab"
    ],
    [
     "At",
     "Politecnico di Milano"
    ],
    [
     "Instructors",
     "Pea, Pedron, Pitoni, Pinotti"
    ],
    [
     "Role",
     "Research and graphic design"
    ],
    [
     "Team",
     "Lucia Zerboni"
    ]
   ]
  }
 },
 {
  "slug": "mud",
  "title": "MuD",
  "sub": "Milano University District",
  "cat": "Eventi",
  "period": "2025–26",
  "year": "2026",
  "cover": {
   "src": "assets/mud/team.jpg",
   "w": 921,
   "h": 614,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Progetto personale"
   ],
   [
    "Presso",
    "Piazza Leonardo, Milano"
   ],
   [
    "Ruolo",
    "Organizzazione, produzione e allestimento"
   ],
   [
    "Team",
    "Amici universitari"
   ]
  ],
  "text": [
   "Milano University District è un grande evento no-profit nato dalla sinergia di studenti provenienti da diversi atenei milanesi, tra cui il Politecnico, l’Università Statale e le facoltà di Scienze. È un vero e proprio polo di aggregazione cittadino che trasforma gli spazi universitari in luoghi di incontro e cultura. Giunto alla sua terza edizione, quest’anno il festival ha preso vita in Piazza Leonardo, sviluppandosi attorno al tema “E sogno la libertà”. Attraverso un ricco palinsesto di mostre, dibattiti, eventi e spettacoli, l’intera comunità è stata invitata a esplorare e vivere in prima persona questo concetto in tutte le sue sfaccettature.",
   "La realizzazione di un evento di questa portata ha richiesto una gestione a 360 gradi, frutto di un grande lavoro di squadra tra amici e universitari che ha unito logistica, produzione e creatività. L’organizzazione pratica si è snodata attraverso la ricerca attiva degli sponsor per sostenere l’iniziativa, la pianificazione capillare del volantinaggio e il fondamentale coordinamento dei numerosi volontari, vero motore del festival durante i giorni dell’evento.",
   "Parallelamente, è stato curato ogni aspetto visivo e materiale del distretto. Il lavoro ha coperto la progettazione e l’allestimento del palco principale, l’impaginazione e il setup dei pannelli per le mostre, fino ad arrivare alla creazione di tutto il materiale di supporto: poster, gadget personalizzati e persino gli elementi d’arredo per gli stand, come le tovaglie.",
   "Per promuovere l’evento si è scelto di unire il mondo digitale a quello fisico in modo diretto e coinvolgente. Oltre alla realizzazione del sito web e alla cura del profilo Instagram con contenuti e format dedicati, l’iniziativa è stata portata fisicamente tra i banchi delle università. Per incuriosire gli studenti sono stati posizionati nei vari atenei dei pannelli interattivi con una domanda provocatoria legata al tema della libertà, invitando i passanti a fermarsi e a lasciare la propria risposta tramite dei post-it colorati. Un’installazione semplice ma di grande impatto, che ha acceso il dialogo ancor prima dell’inizio del festival, trasformando una visione condivisa in un grande momento di partecipazione collettiva."
  ],
  "open": {
   "src": "assets/mud/cover.jpg",
   "w": 1020,
   "h": 1453,
   "cap": "Banner dell’evento.",
   "fit": "cover",
   "cap_en": "Event banner."
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/mud/team.jpg",
      "w": 921,
      "h": 614,
      "cap": "Il team responsabile di MuD.",
      "fit": "cover",
      "cap_en": "The MuD team."
     },
     {
      "src": "assets/mud/palco.jpg",
      "w": 726,
      "h": 466,
      "cap": "Palco.",
      "fit": "cover",
      "cap_en": "Stage."
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/mud/infopoint.jpg",
      "w": 921,
      "h": 614,
      "cap": "Info point.",
      "fit": "cover",
      "cap_en": "Info point."
     },
     {
      "src": "assets/mud/infopoint2.jpg",
      "w": 634,
      "h": 357,
      "cap": "Info point, Piazza Leonardo.",
      "fit": "cover",
      "cap_en": "Info point, Piazza Leonardo."
     },
     {
      "src": "assets/mud/ristoro.jpg",
      "w": 634,
      "h": 356,
      "cap": "Area ristoro.",
      "fit": "cover",
      "cap_en": "Refreshment area."
     }
    ]
   },
   {
    "t": [
     2
    ],
    "imgs": [
     {
      "src": "assets/mud/pannelli.jpg",
      "w": 830,
      "h": 476,
      "cap": "Pannelli mostre.",
      "fit": "cover",
      "cap_en": "Exhibition panels."
     },
     {
      "src": "assets/mud/pannelli2.jpg",
      "w": 830,
      "h": 473,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/mud/poster.jpg",
      "w": 416,
      "h": 623,
      "cap": "Poster promozionale.",
      "fit": "cover",
      "cap_en": "Promotional poster."
     },
     {
      "src": "assets/mud/maglietta.jpg",
      "w": 714,
      "h": 451,
      "cap": "Maglietta dei volontari.",
      "fit": "cover",
      "cap_en": "Volunteers’ T-shirt."
     },
     {
      "src": "assets/mud/gadget.jpg",
      "w": 436,
      "h": 645,
      "cap": "Gadget.",
      "fit": "cover",
      "cap_en": "Gadgets."
     },
     {
      "src": "assets/mud/volantini.jpg",
      "w": 830,
      "h": 467,
      "cap": "Volantini e gadget.",
      "fit": "cover",
      "cap_en": "Flyers and gadgets."
     }
    ]
   },
   {
    "t": [
     3
    ],
    "imgs": [
     {
      "src": "assets/mud/installazione.jpg",
      "w": 311,
      "h": 477,
      "cap": "Installazione interattiva.",
      "fit": "cover",
      "cap_en": "Interactive installation."
     },
     {
      "src": "assets/mud/mappa.jpg",
      "w": 748,
      "h": 430,
      "cap": "Mappa del sito.",
      "fit": "contain",
      "cap_en": "Site map."
     },
     {
      "src": "assets/mud/home.jpg",
      "w": 748,
      "h": 430,
      "cap": "Home del sito.",
      "fit": "contain",
      "cap_en": "Website home."
     }
    ]
   }
  ],
  "en": {
   "sub": "Milano University District",
   "cat": "Events",
   "text": [
    "Milano University District is a large non-profit event born from the synergy of students from different Milanese universities, including the Politecnico, the Università Statale and the Science faculties. It is a true city hub that turns university spaces into places of encounter and culture. Now in its third edition, this year the festival took place in Piazza Leonardo, built around the theme “And I dream of freedom”. Through a rich programme of exhibitions, debates, events and performances, the whole community was invited to explore and experience this concept first-hand in all its facets.",
    "Making an event of this scale happen required all-round management, the result of great teamwork among friends and university students combining logistics, production and creativity. The practical organisation ran through actively seeking sponsors to support the initiative, detailed planning of the flyer distribution and the essential coordination of the many volunteers, the real engine of the festival during the days of the event.",
    "At the same time, every visual and material aspect of the district was taken care of. The work covered the design and set-up of the main stage, the layout and setup of the exhibition panels, and the creation of all the supporting material: posters, custom gadgets and even the furnishings for the stands, such as the tablecloths.",
    "To promote the event, we chose to join the digital and physical worlds in a direct and engaging way. Besides building the website and running the Instagram profile with dedicated content and formats, the initiative was taken physically to the university campuses. To spark students’ curiosity, interactive panels with a provocative question about freedom were placed in the various universities, inviting passers-by to stop and leave their answer on coloured post-its. A simple but high-impact installation that started the conversation well before the festival began, turning a shared vision into a great moment of collective participation."
   ],
   "meta": [
    [
     "Course",
     "Personal project"
    ],
    [
     "At",
     "Piazza Leonardo, Milan"
    ],
    [
     "Role",
     "Organisation, production and set-up"
    ],
    [
     "Team",
     "University friends"
    ]
   ]
  }
 },
 {
  "slug": "immagini",
  "title": "Immagini",
  "sub": "Le mie inquadrature",
  "cat": "Fotografia",
  "period": "2023–24",
  "year": "2024",
  "cover": {
   "src": "assets/immagini/d.jpg",
   "w": 921,
   "h": 520,
   "cap": "",
   "fit": "cover"
  },
  "cover_pos": "center",
  "meta": [
   [
    "Corso",
    "Progetto personale"
   ],
   [
    "Ruolo",
    "Fotografia"
   ],
   [
    "Team",
    "Individuale"
   ]
  ],
  "text": [
   "Questo progetto è un diario visivo e intimo, scattato interamente tra le mura della mia abitazione in diversi momenti della giornata. Le immagini esplorano la vita casalinga non come un semplice rifugio, ma come il luogo primario in cui la realtà con il suo carico di malattie, fatiche e sfide impreviste viene accolta e trasformata. Non c’è la volontà di nascondere il dramma, ma di raccontare come questo venga affrontato: insieme, con una gioia e un amore eterno.",
   "Al centro di questo racconto c’è una presenza costante e luminosa, mia madre. I ritratti catturano la sua vulnerabilità e la sua straordinaria forza. La malattia spesso la costringe al sonno e al riposo, eppure non si ferma. Tra i momenti di abbandono alla stanchezza, emerge nei piccoli gesti quotidiani, come lo stendere i panni.",
   "Queste fotografie sono una testimonianza di come, anche nelle difficoltà più profonde, non si smetta mai di essere madre, figli, amici, di amare e di trovare la luce nella quotidianità."
  ],
  "open": {
   "src": "assets/immagini/cover.jpg",
   "w": 1022,
   "h": 1453,
   "cap": "",
   "fit": "cover"
  },
  "sections": [
   {
    "t": [
     0
    ],
    "imgs": [
     {
      "src": "assets/immagini/a.jpg",
      "w": 660,
      "h": 368,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/b.jpg",
      "w": 517,
      "h": 919,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/c.jpg",
      "w": 921,
      "h": 518,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/d.jpg",
      "w": 921,
      "h": 520,
      "cap": "",
      "fit": "cover"
     }
    ]
   },
   {
    "t": [
     1
    ],
    "imgs": [
     {
      "src": "assets/immagini/e.jpg",
      "w": 1600,
      "h": 900,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/f.jpg",
      "w": 695,
      "h": 391,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/g.jpg",
      "w": 1600,
      "h": 900,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/h.jpg",
      "w": 1600,
      "h": 900,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/i.jpg",
      "w": 1600,
      "h": 900,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/l.jpg",
      "w": 1600,
      "h": 945,
      "cap": "",
      "fit": "cover"
     }
    ]
   },
   {
    "t": [
     2
    ],
    "imgs": [
     {
      "src": "assets/immagini/m.jpg",
      "w": 726,
      "h": 408,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/n.jpg",
      "w": 921,
      "h": 524,
      "cap": "",
      "fit": "cover"
     },
     {
      "src": "assets/immagini/o.jpg",
      "w": 1600,
      "h": 900,
      "cap": "",
      "fit": "cover"
     }
    ]
   }
  ],
  "en": {
   "sub": "My frames",
   "cat": "Photography",
   "text": [
    "This project is an intimate visual diary, shot entirely within the walls of my home at different moments of the day. The images explore home life not as a simple refuge, but as the primary place where reality, with its load of illness, hardship and unexpected challenges, is welcomed and transformed. There is no wish to hide the drama, but to show how it is faced: together, with joy and an everlasting love.",
    "At the centre of this story is a constant, luminous presence, my mother. The portraits capture her vulnerability and her extraordinary strength. Illness often forces her to sleep and rest, yet she does not stop. Between moments of surrender to tiredness, she emerges in small everyday gestures, like hanging out the laundry.",
    "These photographs bear witness to how, even in the deepest difficulties, one never stops being a mother, children, friends, loving and finding light in everyday life."
   ],
   "meta": [
    [
     "Course",
     "Personal project"
    ],
    [
     "Role",
     "Photography"
    ],
    [
     "Team",
     "Individual"
    ]
   ]
  }
 }
];
