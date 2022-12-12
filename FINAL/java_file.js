function retour_fil(filiere)
{
	var chaine_fil="";
	
	switch(filiere)
	{
		
		case "DCG":
		chaine_fil = "Diplôme de Comptabilité et de Gestion|";
		break;
		case "BTS - Services":
		chaine_fil = "Analyses de biologie médicale|Comptabilité et gestion|Négociation et digitalisation de la Relation Client|Podo-orthésiste|Prothésiste orthésiste|Gestion de la PME|Commerce International|Management Commercial Opérationnel|Service et prestation des secteurs sanitaire et social|Diététique|Services informatiques aux organisations|Notariat|Professions immobilières|Communication|Support à l'action managériale|Economie sociale familiale|Tourisme|Banque conseiller de clientèle|Métiers de l'esthétique-cosmétique-parfumerie|Conseil et commercialisation de solutions techniques|Management en hôtellerie restauration|Métiers de l'audio-visuel opt : métiers du son|Métiers de l'audio-visuel opt : gestion de la production|Gestion des transports et logistique associée|Opticien-Lunetier|Métiers des Services à l'environnement|Métiers de la coiffure|Prothésiste dentaire|Assurance|Edition|Photographie|Métiers de l'audio-visuel opt : métiers de l'image|Métiers de l'audio-visuel opt : techn. d'ingeniérie et exploit. équipements|Etudes de réalisation d'un projet de communication - 1ère année commune|Management opérationnel de la sécurité|Métiers de l'audio-visuel opt : montage et post-production|";
		break;
		case "BTS - Agricole":
		chaine_fil = "Analyse, conduite et stratégie de l'entreprise agricole|Aquaculture|Aménagements paysagers|Gestion et protection de la nature|Production horticole|Gestion et maitrise de l'eau|Technico-commercial (BTSA)|Développement, animation des territoires ruraux|Développement de l'agriculture des régions chaudes|productions animales|Agronomie : Productions végétales|Gestion forestière|Sciences et technologies des aliments spécialité Aliments et processus technologiques|Viticulture-Oenologie|Sciences et technologies des aliments spécialité Produits laitiers|génie des équipements agricoles|Analyses agricoles biologiques et biotechnologiques|Sciences et technologies des aliments spécialité Viandes et produits de la pêche|Gestion et protection de la nature / DE d'alpinisme-accompagnateur en moyenne montagne|Sciences et technologies des aliments spécialité Produits céréaliers|";
		break;
		case "BUT - Production":
		chaine_fil = "Génie mécanique et productique|Qualité, logistique industrielle et organisation|Réseaux et télécommunications|Génie électrique et informatique industrielle|Génie thermique et énergie|Métiers du multimédia et de l'internet|Génie industriel et maintenance|Hygiène Sécurité Environnement|Génie biologique parcours sciences de l'aliment et biotechnologie|Informatique|Mesures physiques|Génie biologique parcours sciences de l'environnement et écotechnologies|Génie civil - Construction durable|Chimie|Génie biologique Parcours diététique et nutrition|Génie chimique génie des procédés|Packaging, emballage et conditionnement|Génie biologique parcours biologie médicale et biotechnologie|Science et génie des matériaux|Génie biologique Parcours agronomie|";
		break;
		case "Classe préparatoire économique et commerciale":
		chaine_fil = "ENS Rennes D1|ECT - Option technologique|ENS Cachan D2|ECG - Mathématiques appliquées + ESH|ECG - Mathématiques approfondies + HGG|ECG - Mathématiques appliquées + HGG|ECG - Mathématiques approfondies + ESH|";
		break;
		case "Classe préparatoire scientifique":
		chaine_fil = "BCPST|MPSI|PCSI|PTSI|TB|TSI|Ecole normale supérieure Paris Saclay ? arts et design|TPC|MP2I|";
		break;
		case "Classe préparatoire littéraire":
		chaine_fil = "Ecole nationale des Chartes|Lettres|B/L - Lettres et sciences sociales|Option lettres et sciences humaines (St Cyr)|";
		break;
		case "BTS - Production":
		chaine_fil = "Métiers du géomètre-topographe et de la modélisation numérique|Etude et réalisation d'agencement|Métiers de la chimie|Maintenance des systèmes - option B Systèmes énergétiques et fluidiques|Systèmes photoniques|Conception de produits industriels|Conception et Réalisation de Systèmes Automatiques|Systèmes numériques - Option électronique et communication|Contrôle industriel et régulation automatique|Conception des processus de réalisation de produits (1ère année commune)|Electrotechnique|Bioanalyses et contrôles|Enveloppe des bâtiments : conception et réalisation|Assistance technique d'ingénieur|Maintenance des matériels de construction et de manutention|Conception et réalisation de carrosseries|Systèmes numériques - Option informatique et réseaux|Fluide, énergie, domotique - option C domotique et bâtiment communicants|Management économique de la construction|Maintenance des véhicules option voitures particulières|Maintenance des systèmes - option A Systèmes de production|Systèmes constructifs bois et habitat|Europlastics et composites à référentiel commun européen - option Pilotage et Optimisation de la production|Conception et réalisation en chaudronnerie industrielle|Moteur à combustion interne|Biotechnologies|Bioqualité|Travaux publics|Conception et industrialisation en microtechniques|Bâtiment|Métiers de la mode-vêtements|Environnement nucléaire|Métiers de la mode-chaussure et maroquinerie|Métiers de l'eau|Maintenance des véhicules option véhicules de transport routier|Développement et Réalisation Bois|Fluide, énergie, domotique - option A génie climatique et fluidique|Maintenance des systèmes - option C Systèmes éoliens|Pilotage des procédés|Architectures en Métal : conception et Réalisation|Europlastics et composites à référentiel commun européen - option Conception d'Outillage|Finitions, aménagement des bâtiments: conception et réalisation|Traitement des matériaux|Métiers de la mesure|Fluide, énergie, domotique - option B froid et conditionnement d'air|Techniques et services en matériels agricoles|Aéronautique|Conception et industrialisation en construction navale|Industries céramiques|Fonderie|Innovations textiles - Option A : Structures|Géologie appliquée|Forge|Innovations textiles - Option B : Traitements|Maintenance des véhicules option motocycles|Conception de processus de découpe et d'emboutissage|";
		break;
		case "Licence - Sciences humaines et sociales":
		chaine_fil = "Histoire de l'art et archéologie|Sciences sociales|Sciences du langage|Histoire|Géographie et aménagement|Philosophie|Sociologie|Psychologie|Administration économique et sociale|Information et communication|Sciences de l'éducation|Sciences et Techniques des Activités Physiques et Sportives|Théologie Catholique|Humanités|Histoire / Anglais|Théologie|Sciences de l'Homme, Anthropologie, Ethnologie|Sciences sanitaires et sociales|Santé et société|Mathématiques et informatique appliquées aux sciences humaines et sociales|Musicologie|Théologie Protestante|Science politique|Histoire / Géographie|Histoire / Allemand|Tourisme|";
		break;
		case "Licence - Droit-économie-gestion":
		chaine_fil = "Droit|Economie|Administration économique et sociale|Economie et gestion|Administration et Echanges internationaux|Science politique|Gestion|Sciences sociales|Droit français - Droit étranger|Administration publique|Droit, Informatique|Droit, Economie|Sciences sanitaires et sociales|";
		break;
		case "Licence - Arts-lettres-langues":
		chaine_fil = "Cinéma et Audiovisuel|Langues étrangères appliquées|Langues, littératures & civilisations étrangères et régionales|Lettres|Histoire de l'art et archéologie|Musicologie|Arts|Etudes européennes et internationales|Information et communication|Arts du spectacle|Humanités|Sciences du langage|Lettres, langues|Philosophie|Arts plastiques|Etudes théâtrales|Lettres / Anglais|Etudes culturelles|Pluridisciplinaire|Cinéma|Histoire des Arts|Anglais / Langue asiatique|Lettres / Histoire|Lettres / Sciences du langage|";
		break;
		case "CUPGE - Sciences, technologie, santé":
		chaine_fil = "Cycle universitaire préparatoire aux grandes écoles|Parcours scientifique renforcé|Cycle Universitaire de Préparation aux Grandes Ecoles Scientifiques|Classe Préparatoire Universitaire - Physique - Chimie|Parcours mathématiques-physique|Sciences pour l'ingénieur|Cycle universitaire préparatoire aux grandes écoles - Parcours Informatique, Mathématiques|Cycle préparatoire Physique Chimie, parcours renforcé|Sciences de la Vie et de la Terre : préparation aux concours B Agro et Véto (Sites Saint Charles)|Cycle Universitaire Préparatoire aux Grandes Ecoles - Mathématiques et Physique|Cycle Universitaire Préparatoire aux Grandes Ecoles - Physique et Mathématiques|Cycle Universitaire Préparatoire aux Grandes Ecoles|Cycle universitaire préparatoire aux grandes écoles - Mécanique|Cycle universitaire préparatoire aux grandes écoles - Physique|Mathématique - Préparation aux écoles d'ingénieurs|Prep'ISIMA|Cycle universitaire préparatoire aux grandes écoles - Parcours Sciences pour l'ingénieur|Parcours physique-chimie|Classe Préparatoire Universitaire Mathématiques - Physique - Informatique|Cursus préparatoire aux concours des grandes écoles d'ingénieurs|";
		break;
		case "BUT - Service":
		chaine_fil = "Carrières sociales Parcours assistance sociale|Information communication Parcours publicité|Information communication Parcours communication des organisations|Techniques de commercialisation|Carrières juridiques|Carrières sociales Parcours animation sociale et socioculturelle|Gestion administrative et commerciale des organisations|Statistique et informatique décisionnelle|Information communication Parcours métiers du livre et du patrimoine|Gestion des entreprises et des administrations|Gestion logistique et transport|Carrières sociales parcours villes et territoires durables|Carrières sociales parcours coordination et gestion des établissements et services sanitaires et sociaux|Information communication Parcours journalisme|Carrières sociales Parcours éducation spécialisée|Information communication Parcours information numérique dans les organisations|";
		break;		
		case "Formations Bac + 5":
		chaine_fil = "Architecture|Paysage|Bicursus Architecture Ingénieur|Conservation-restauration des biens culturels|";
		break;
		case "Licence - Sciences - technologies - santé":
		chaine_fil = "Mathématiques|Physique, chimie|Mathématiques et informatique appliquées aux sciences humaines et sociales|Chimie|Informatique|Sciences de la vie|Physique|Sciences pour la santé|Mathématiques, physique, chimie, informatique|Sciences et Humanités|Sciences et Techniques des Activités Physiques et Sportives|Sciences pour l'ingénieur|Sciences et technologies|Sciences de la terre|Sciences de la vie et de la terre|Sciences sanitaires et sociales|Génie civil|Electronique, énergie électrique, automatique|Parcours d'Accès Spécifique Santé (PASS)|Mécanique|Chimie, Sciences de la vie|Sciences biomédicales|Mathématiques et applications|Mathématiques, Physique et Sciences pour l'Ingénieur|Informatique, Mathématiques|Informatique, Sciences de la vie|Informatique, Management|Droit, Sciences et Innovation|Frontières du vivant|Mathématiques, Sciences de la vie|Sciences de la Terre et Sciences Physiques|Sciences de la Terre et environnement|Economie, Mathématiques|Acoustique et Vibrations|";
		break;
		case "D.E secteur sanitaire":
		chaine_fil = "DTS Imagerie médicale et radiologie thérapeutique|D.E manipulateur/trice en électroradiologie médicale|D.E Infirmier|D.E Technicien de Laboratoire Médical|D.E Ergothérapeute|D.E Pédicure-Podologue|Certificat de capacité d'Orthophoniste|D.E Audioprothésiste|Certificat de capacité d'Orthoptiste|D.E Psychomotricien|";
		break;
		case "Formations  des écoles ingénieurs":
		chaine_fil = "Formation ingénieur Bac + 5|Formation Bac + 3|Formation Bac + 4|";
		break;
		case "Mise à niveau":
		chaine_fil = "Hôtellerie restauration|Classe de mise à niveau au BTS Maritime Pêche et Gestion de l'Environnement Marin|Mise à niveau pour l'accès au BTS MASEN|";
		break;
		case "Licence - Droit-économie-gestion / Arts-lettres-langues":
		chaine_fil = "Droit|";
		break;
		case "Année préparatoire":
		chaine_fil = "Année préparatoire|Année préparatoire à l'École Nationale de la Marine Marchande - Officier 1ère classe|";
		break;
		case "Diplôme National d'Art":
		chaine_fil = "Diplôme National d'Art|Diplôme National d'Art option art, mention conservation-restauration des biens culturels|Diplôme National d'Art option art|Diplôme National d'Art option design|Diplôme National d'Art option design, mention design graphique et interactivité|";
		break;
		case "Formation des écoles de commerce et de management":
		chaine_fil = "Formation des écoles de commerce et de management Bac + 3|Formation des écoles de commerce et de management Bac + 5|Formation des écoles de commerce et de management Bac + 4|";
		break;		
		
		case "Mention complémentaire":
		chaine_fil = "Technicien ascensoriste, service et modernisation|Technicien en énergies renouvelables (option thermique)|Technicien en énergies renouvelables (option énergie électrique)|Aéronautique option avions à moteur à pistons|Accueil réception|Agent de contrôle non destructif|Aéronautique option avions à moteur à turbines|Organisateur de réception|Technicien(ne) en soudage|Aéronautique - option avionique|Mécatronique navale|Vendeur-conseil en produits techniques pour l'habitat|Technicien(ne) en tuyauterie|Technicien en chaudronnerie aéronautique et spatiale|Aéronautique option hélicoptère moteur à turbines|Maintenance des installations oléohydrauliques et pneumatiques|Animation-gestion de projets dans le secteur sportif|FCIL classe passerelle BTS|FCIL classe passerelle BTS option service|FCIL classe passerelle BTS option production|FCIL Nivoculteur|Maquettes et prototypes|Accueil dans transports|Assistance Conseil Vente à distance|Dispositif SAS - Préparation à l'apprentissage|FCIL Domotique appliquée à la santé / gestion technique de bâtiment|FCIL Contrôle Technique|FCIL E-Commerce|FCIL Scénographie de la communication|FCIL Mécanicien circuit auto|FCIL Secrétaire juridique|FCIL secrétariat médical|FCIL Techniques spécifiques Couture et Luxe|FCIL maintenance équipements audiovisuels et électroménager|FCIL Electricien du spectacle|FCIL Chef de rang|Technicien en réseau électrique|FCIL Technicien de maintenance et de déploiement numérique|FCIL Fibre optique|FCIL - CAES - Option Services|FCIL - CAES - Option Production|Technicien en peinture aéronautique|FCIL Véhicules nautiques motorisés (Jet ski)|Services numériques aux organisations|FCIL Smart Home|FCIL BARISTA|FCIL agent hydrothermal|FCIL Secrétariat Médico Social|FCIL - Tourneur fraiseur sur machines conventionnelles dans l'aéronautique et l'aérospatiale|FCIL Adjoint des cadres sanitaires et sociaux - Secrétariat médico-social|FCIL Mécanique de compétition - préparation moteurs|FCIL Assistant(e) gouvernant|FCIL préparation aux concours de la sécurité publique et civile|FCIL Préparation aux concours de la fonction publique concernant les métiers de la sécurité|FCIL Administrateur réseau, infrastructure et système numérique|FCIL Santé et bien être de la personne âgée|FCIL Technicien des systèmes auxiliaires et véhicules électriques|FCIL - SVDI (Sureté vidéo détection incendie)|FCIL Conseiller commercial en automobile|FCIL Technicien réseaux très haut débit fibre optique|FCIL Restauration Meubles Anciens|FCIL DAide déclarant en douane|FCIL Formation aux compétences numériques de la vente dans l'entreprise|FCIL Technicien polyvalent dans les systèmes audiovisuels professionnels|FCIL Ouvrier voilier polyvalent|FCIL Agent de maitrise de 'métré bois'|FCIL Technicien sur centre d'usinage bois 3 et 5 axes - Concepteur sur modeleur 3D|FCIL Commerce international des vins, spiritueux et oenotourisme|FCIL Esquisse|Services financiers|Technicien des services à l'énergie|FCIL Prototypiste Mécanicien(ne) Modèle|FCIL Services aéroportuaires|FCIL Technicien de prise en charge de la personne âgée non autonome option maladie d'alzheimer|FCIL Sociale Esthétique|FCIL Technicien en Maintenance et Conduite de Centrales Photovoltaïques|FCIL Sommellerie|FCIL - Environnement Numérique au Service de l'Autonomie de la Personne|FCIL - Mobilités Urbaines, maintenances des véhicules électriques légers (Vélos électriques, trottinettes, hoverboards, ...)|FCIL -  Métiers du plâtre|FCIL - Parcours polyvalent en recyclage et réhabilitation des véhicules|FCIL - Entreprenariat Hôtellerie|FCIL Assistant gestion site web et communication numérique multimédia, à destination des clients et des usagers|FCIL Hydro - esthétique|FCIL CAO - DAO du bâtiment|FCIL Technico-commercial en équipement de la maison et du multimédia|FCIL Technicien(ne) réseaux et services numériques|FCIL Electromobilité|FCIL Formation graphisme et communication visuelle|FCIL Technicien motoriste option Mécanique Hors Bord|FCIL Projeteur/euse Building Information Modeling (BIM)|FCIL Communication web et webmarketing|FCIL Moteurs hors bord haute technicité|FCIL Visual Merchandising|FCIL Mécanicien en compétition automobile - Option monoplace|Assistant ingénieur en biologie, biochimie, biotechnologie|Peinture décoration|FCIL Maintenance de 1er niveau des véhicules routiers|FCIL Son et éclairage en spectacle vivant|FCIL Technicien sur Lignes de Productions Industrielles|FCIL Responsable d'exécution de travaux de réhabilitation : reprise et rénovation d'ouvrage de Gros ?uvre|FCIL Technicien de la Transition Energétique du Bâtiment|FCIL Service aux personnes en environnement numérique|FCIL Maintenance Milieu Nucléaire|FCIL Gestion dossier retraite prévoyance et santé|FCIL Ecole européenne du goût et art de la table|FCIL Métiers de Laboratoire|FCIL Technicien de systèmes de sécurité et d'incendie|FCIL Multimédia|FCIL administration de projets dans le secteur du tourisme|FCIL Crémier-fromager : territoire, art culinaire et vins de champagne|FCIL Chef de rang à la française - Relais & Chateaux|FCIL Technicien motoriste option Mécanique In Bord|FCIL Secrétariat Assistant Médico-Social|FCIL Art et Couture|FCIL Maroquinerie / Gainerie / Sellerie de luxe|FCIL - Marchandiseur Visuel Cross Canal|";
		break;
				
		case "Formation professionnelle":
		chaine_fil = "Chargé de mission qualité, sécurité, santé au travail et environnement (Bac + 3)|Chargé de projet en aménagement durable du territoire (bac +2)|Gestionnaire d'unité commerciale (option généraliste / option spécialisée) (bac +2)|Géomètre-Géomaticien (bac +2)|Responsable technique en bâtiment et travaux publics (bac +2)|Manager en Biotechnologies (bac +5)|Responsable de projets informatiques (bac +3)|Titre professionnel - Organisateur de transports aériens ou maritimes de marchandises (Bac +2)|Technicien supérieur de maintenance et d'exploitation en climatique (bac +2)|Technicien(ne) supérieur(e) en maintenance industrielle (bac +2)|Assistant ingénieur en biologie-biochimie - biotechnologies (bac +3)|Techniciens Spécialisés de la Construction|";
		break;
		case "CUPGE - Droit-économie-gestion":
		chaine_fil = "Préparation aux concours des écoles de commerce, Parcours Economie- Finance|Préparation aux concours des écoles de commerce, Parcours Gestion|Droit et Culture Juridique - Classe Préparatoire (Prépa D1)|Cycle Universitaire Préparatoire aux Grandes Écoles de commerce|";
		break;
		case "C.M.I - Cursus Master en Ingénierie":
		chaine_fil = "Mécanique|Sciences pour l'ingénieur|Génie civil|Physique, chimie|Informatique|Géographie et aménagement|Chimie|Economie et gestion|Electronique, énergie électrique, automatique|Mathématiques|Sciences de la vie et de la terre|Sciences de la terre|Physique|Sciences pour la santé|Sciences de la vie|Langues étrangères appliquées|Sciences et Techniques des Activités Physiques et Sportives|Information et communication|Acoustique et Vibrations|Histoire|";
		break;
		case "CUPGE - Arts Lettres Langues":
		chaine_fil = "Cycle Préparatoire Lettres  - Licence renforcée|";
		break;
		case "Licence - Droit-économie-gestion / Sciences humaines et sociales":
		chaine_fil = "Droit|Histoire|";
		break;
		case "Classe préparatoire aux études supérieures":
		chaine_fil = "CPES - Arts|CPES - Littéraire|CPES - Scientifique|CPES - Générale|CPES - Sciences économiques|";
		break;
		case "DEUST":
		chaine_fil = "Formation de base aux métiers du théâtre|Métiers de la forme|Analyse des milieux biologiques|Animation et gestion des activités physiques, sportives ou culturelles|Métiers du livre|Animation et gestion des activités sportives, physiques ou culturelles, parcours agent de développement de club sportif|Animation et gestion des activités sportives, physiques ou culturelles, parcours animation|Technologies de l'organisation dans les professions de santé|Technicien de la mer et du littoral|Activités physiques et sportives adaptées : déficiences intellectuelles, troubles psychiques|Pratique et gestion des activités physiques, sportives et de loisirs pour les publics séniors|Bâtiment et Construction|Médiations citoyennes : éducation, culture, social, environnement|Bureautique et Communication Multimédia|Production, contrôles et qualité des produits de santé|Animation et gestion des activités sportives, physiques ou culturelles, parcours activités aquatiques|Animation et gestion des activités sportives, physiques ou culturelles, parcours activités de pleine nature|Assistant juridique|Santé environnement : Techniques de laboratoire|Métiers des bibliothèques et de la documentation|Animation, commercialisation des services sportifs|Bâtiment et travaux publics|Informatique d'Organisation des Systèmes d'Information|Intervention Sociale|Webmaster et gestionnaire d'intranet|Maintenance hôtelière, hospitalière et immobilière|Activités physiques et sportives et inadaptations sociales|Accueil d'excellence en tourisme|Métiers de l'animation sociale, socio-éducative et socio-culturelle|Métiers de la cohésion sociale|";
		break;
		case "BPJEPS":
		chaine_fil = "Activités aquatiques et de la natation|Activités de la forme|Activités physiques pour tous|Judo-Jujitsu|Activités physiques pour tous / Activités sports collectifs|Activités sports collectifs|Canoë-Kayak|Surf|Tennis de table|Voile multi-supports jusqu'à 6 miles nautique d'un abri|";
		break;
		case "DN MADE":
		chaine_fil = "Matériaux|Graphisme|Mode|Espace|Objet|Spectacle|Numérique|Événement|Livre|Patrimoine|Animation|Ornement|Innovation sociale|Instrument|";
		break;
		case "D.E secteur social":
		chaine_fil = "D.E Assistant de Service Social|D.E Educateur Spécialisé|D.E Educateur de Jeunes Enfants|D.E Educateur Technique Spécialisé|";
		break;
		case "Diplôme d'établissement":
		chaine_fil = "Paysagiste concepteur|";
		break;
		case "Licence - Sciences humaines et sociales / Sciences - technologies - santé":
		chaine_fil = "Sciences pour l'ingénieur|";
		break;
		case "Diplôme d'Université":
		chaine_fil = "Diplôme d'Université|Diplôme d'Université - PAREO|Formation Supérieure de Spécialisation|Diplôme d'Université CAES|";
		break;
		case "Licence - Arts-lettres-langues / Sciences humaines et sociales":
		chaine_fil = "Lettres|Sciences du langage|";
		break;
		case "CPES":
		chaine_fil = "Cycle pluridisciplinaire d'Études Supérieures - SESJ|Cycle pluridisciplinaire d'Études Supérieures - Sciences|Cycle pluridisciplinaire d'Études Supérieures - Sciences et sociétés|Cycle pluridisciplinaire d'Études Supérieures - Humanités|";
		break;
		case "DEJEPS":
		chaine_fil = "Vélo tout terrain|Judo-Jujitsu|";
		break;
		case "Cadre Technique":
		chaine_fil = "Cadre technique génie de l'environnement marin|Cadre technique production et valorisation des ressources marines|";
		break;
		case "Diplôme d'Etablissement":
		chaine_fil = "Diplôme d'Etablissement|";
		break;
		case "BTS - Maritime":
		chaine_fil = "Pêche et gestion de l'environnement marin|Maintenance des systèmes électro-navals|";
		break;
		case "Sciences politiques":
		chaine_fil = "Sciences Po / Instituts d'études politiques - Sciences Humaines et Sociales - Grade Master|Sciences Po / Instituts d'études politiques - Sciences Humaines et Sociales - Grade Licence|";
		break;
		case "Formation des écoles supérieure d'art":
		chaine_fil = "Formation des écoles supérieure d'art Bac + 3|Formation des écoles supérieure d'art Bac + 5|";
		break;
		case "Licence - STAPS":
		chaine_fil = "Sciences et Techniques des Activités Physiques et Sportives|STAPS, Sciences pour l'ingénieur|";
		break;
		case "Formations des écoles nationales vétérinaires":
		chaine_fil = "Formation Bac+6|";
		break;
		case "Formation valant grade de licence":
		chaine_fil = "Formation valant grade de licence|";
		break;
		case "Formation des écoles supérieures de cuisine":
		chaine_fil = "Formation des écoles supérieures de cuisine Bac +3|Formation des écoles supérieures de cuisine Bac +4|";
		break;
		case "Formations Bac + 3":
		chaine_fil = "Archéologie, histoire de l'art, anthropologie|";
		break;
		case "LP - Droit-économie-gestion":
		chaine_fil = "Licence professionnelle|";
		break;
		case "Licence - Droit-économie-gestion / Sciences - technologies - santé":
		chaine_fil = "Mathématiques|";
		break;
		
		


	}
	
	return chaine_fil;
}


function retour_villes(le_dep)
{
	var chaine_villes="";
	
	switch(le_dep)
	{
		case "Autre formation":
		chaine_villes = "DCG|CUPGE - Sciences, technologie, santé|Formations Bac + 5|D.E secteur sanitaire|Mise à niveau|Année préparatoire|Diplôme National d'Art|Mention complémentaire|Formation professionnelle|CUPGE - Droit-économie-gestion|C.M.I - Cursus Master en Ingénierie|CUPGE - Arts Lettres Langues|Classe préparatoire aux études supérieures|DEUST|BPJEPS|DN MADE|Diplôme d'établissement|Diplôme d'Université|CPES|DEJEPS|Cadre Technique|Diplôme d'Etablissement|Sciences politiques|Formation des écoles supérieure d'art|Formations des écoles nationales vétérinaires|Formation valant grade de licence|Formation des écoles supérieures de cuisine|Formations Bac + 3|LP - Droit-économie-gestion";
		break;
		case "BTS":
		chaine_villes = "BTS - Services|BTS - Agricole|BTS - Production|BTS - Maritime";
		break;
		case "BUT":
		chaine_villes = "BUT - Production|BUT - Service";
		break;
		case "CPGE":
		chaine_villes = "Classe préparatoire économique et commerciale|Classe préparatoire scientifique|Classe préparatoire littéraire";
		break;
		case "Licence":
		chaine_villes = "Licence - Sciences humaines et sociales|Licence - Droit-économie-gestion|Licence - Arts-lettres-langues|Licence - Sciences - technologies - santé|Licence - Droit-économie-gestion / Arts-lettres-langues|Licence - Droit-économie-gestion / Sciences humaines et sociales|Licence - Sciences humaines et sociales / Sciences - technologies - santé|Licence - Arts-lettres-langues / Sciences humaines et sociales|Licence - STAPS|Licence - Droit-économie-gestion / Sciences - technologies - santé";
		break;
		case "Ecole Ingénieur":
		chaine_villes = "Formations  des écoles ingénieurs";
		break;
		case "Ecole de Commerce":
		chaine_villes = "Formation des écoles de commerce et de management";
		break;
		case "IFSI":
		chaine_villes = "D.E secteur sanitaire";
		break;
		case "EFTS":
		chaine_villes = "D.E secteur social";
		break;
		case "PASS":
		chaine_villes = "Licence - Sciences - technologies - santé";
		break;
		case "Licence_Las":
		chaine_villes = "Licence - Sciences humaines et sociales|Licence - Arts-lettres-langues|Licence - Sciences - technologies - santé|Licence - Droit-économie-gestion|Licence - STAPS|Formations  des écoles d'ingénieurs";
		break;
		case "BTS - Services":
		chaine_villes = "BTS - Services|BTS - Agriiiicole|BTS - Production|BTS - Maritime";
		break;
	}
	
	return chaine_villes;
}

function mettre_proba(filiere){
var li = []
if (filiere == "Autre formation"){
li.push('47.25 %', '30.93 %', '21.82 %')
}
if (filiere == "BTS"){
li.push('18.04 %', '44.78 %', '37.18 %')
}
if (filiere == "BUT"){
li.push('57.98 %', '2.14 %', '39.87 %')
}
if (filiere == "CPGE"){
li.push('89.48 %', '0.62 %', '9.89 %')
}
if (filiere == "Licence"){
li.push('82.48 %', '6.34 %', '11.18 %')
}
if (filiere == "Ecole Ingénieur"){
li.push('75.57 %', '0.11 %', '24.32 %')
}
if (filiere == "Ecole de Commerce"){
li.push('85.17 %', '2.1 %', '12.73 %')
}
if (filiere == "IFSI"){
li.push('39.46 %', '23.37 %', '37.17 %')
}
if (filiere == "EFTS"){
li.push('41.62 %', '22.96 %', '35.42 %')
}
if (filiere == "PASS"){
li.push('96.73 %', '0.82 %', '2.45 %')
}
if (filiere == "Licence_Las"){
li.push('87.03 %', '2.45 %', '10.52 %')
}

return li;
//return "La proba d'être en général est de : "+li[0]+" La proba d'être en pro est de : "+li[1]+" La proba d'être en techno est de : "+li[2];
}


function mettre_proba_detaillee(filiere){
var li = []
if (filiere == "DCG"){
li.push('69.67 %', '0.3 %', '30.03 %')
}
if (filiere == "BTS - Services"){
li.push('20.56 %', '39.99 %', '39.45 %')
}
if (filiere == "BTS - Agricole"){
li.push('23.14 %', '43.8 %', '33.06 %')
}
if (filiere == "BUT - Production"){
li.push('60.98 %', '1.84 %', '37.18 %')
}
if (filiere == "Classe préparatoire économique et commerciale"){
li.push('88.13 %', '0.83 %', '11.04 %')
}
if (filiere == "Classe préparatoire scientifique"){
li.push('87.55 %', '0.64 %', '11.81 %')
}
if (filiere == "Classe préparatoire littéraire"){
li.push('99.76 %', '0.03 %', '0.21 %')
}
if (filiere == "BTS - Production"){
li.push('11.94 %', '53.6 %', '34.46 %')
}
if (filiere == "Licence - Sciences humaines et sociales"){
li.push('82.0 %', '5.55 %', '12.45 %')
}
if (filiere == "Licence - Droit-économie-gestion"){
li.push('86.79 %', '3.3 %', '9.91 %')
}
if (filiere == "Licence - Arts-lettres-langues"){
li.push('77.23 %', '9.85 %', '12.92 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé"){
li.push('98.81 %', '1.19 %', '0.0 %')
}
if (filiere == "BUT - Service"){
li.push('53.48 %', '2.61 %', '43.91 %')
}
if (filiere == "Formations Bac + 5"){
li.push('85.18 %', '3.42 %', '11.4 %')
}
if (filiere == "Licence - Sciences - technologies - santé"){
li.push('91.63 %', '1.5 %', '6.87 %')
}
if (filiere == "D.E secteur sanitaire"){
li.push('50.7 %', '16.39 %', '32.91 %')
}
if (filiere == "Formations  des écoles ingénieurs"){
li.push('75.7 %', '0.11 %', '24.19 %')
}
if (filiere == "Mise à niveau"){
li.push('54.96 %', '20.65 %', '24.38 %')
}
if (filiere == "Licence - Droit-économie-gestion / Arts-lettres-langues"){
li.push('98.5 %', '0.3 %', '1.2 %')
}
if (filiere == "Année préparatoire"){
li.push('70.42 %', '9.27 %', '20.31 %')
}
if (filiere == "Diplôme National d'Art"){
li.push('85.87 %', '3.88 %', '10.26 %')
}
if (filiere == "Formation des écoles de commerce et de management"){
li.push('85.17 %', '2.1 %', '12.73 %')
}
if (filiere == "Mention complémentaire"){
li.push('3.93 %', '83.27 %', '12.8 %')
}
if (filiere == "Formation professionnelle"){
li.push('52.8 %', '17.88 %', '29.31 %')
}
if (filiere == "CUPGE - Droit-économie-gestion"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie"){
li.push('99.31 %', '0.19 %', '0.51 %')
}
if (filiere == "CUPGE - Arts Lettres Langues"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Droit-économie-gestion / Sciences humaines et sociales"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire aux études supérieures"){
li.push('84.97 %', '6.61 %', '8.42 %')
}
if (filiere == "DEUST"){
li.push('54.04 %', '16.03 %', '29.91 %')
}
if (filiere == "BPJEPS"){
li.push('50.83 %', '20.64 %', '28.52 %')
}
if (filiere == "DN MADE"){
li.push('47.98 %', '10.98 %', '41.03 %')
}
if (filiere == "D.E secteur social"){
li.push('41.62 %', '22.96 %', '35.42 %')
}
if (filiere == "Diplôme d'établissement"){
li.push('81.8 %', '9.1 %', '9.1 %')
}
if (filiere == "Licence - Sciences humaines et sociales / Sciences - technologies - santé"){
li.push('94.69 %', '0.0 %', '5.3 %')
}
if (filiere == "Diplôme d'Université"){
li.push('41.05 %', '31.24 %', '27.71 %')
}
if (filiere == "Licence - Arts-lettres-langues / Sciences humaines et sociales"){
li.push('91.45 %', '2.85 %', '5.7 %')
}
if (filiere == "CPES"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "DEJEPS"){
li.push('33.3 %', '33.3 %', '33.3 %')
}
if (filiere == "Cadre Technique"){
li.push('90.0 %', '5.0 %', '5.0 %')
}
if (filiere == "Diplôme d'Etablissement"){
li.push('74.45 %', '5.41 %', '20.14 %')
}
if (filiere == "BTS - Maritime"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Sciences politiques"){
li.push('99.88 %', '0.0 %', '0.12 %')
}
if (filiere == "Formation des écoles supérieure d'art"){
li.push('76.56 %', '5.8 %', '17.65 %')
}
if (filiere == "Licence - STAPS"){
li.push('86.31 %', '3.45 %', '10.21 %')
}
if (filiere == "Formations des écoles nationales vétérinaires"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Formation valant grade de licence"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Formation des écoles supérieures de cuisine"){
li.push('81.95 %', '2.56 %', '15.48 %')
}
if (filiere == "Formations Bac + 3"){
li.push('95.19 %', '0.5 %', '4.3 %')
}
if (filiere == "LP - Droit-économie-gestion"){
li.push('45.5 %', '42.4 %', '12.15 %')
}
if (filiere == "Licence - Droit-économie-gestion / Sciences - technologies - santé"){
li.push('100.0 %', '0.0 %', '0.0 %')
}



return li;
//return "La proba d'être en général est de : "+li[0]+" La proba d'être en pro est de : "+li[1]+" La proba d'être en techno est de : "+li[2];
}


function mettre_proba_bis(filiere,filiere_bis)
{
var li = []
	
if (filiere == "DCG" && filiere_bis == "Diplôme de Comptabilité et de Gestion"){
li.push('69.67 %', '0.3 %', '30.03 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Analyses de biologie médicale"){
li.push('29.24 %', '9.75 %', '61.02 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Comptabilité et gestion"){
li.push('18.19 %', '37.38 %', '44.43 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Négociation et digitalisation de la Relation Client"){
li.push('12.81 %', '46.5 %', '40.68 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Podo-orthésiste"){
li.push('44.47 %', '27.77 %', '27.77 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Prothésiste orthésiste"){
li.push('42.3 %', '19.77 %', '37.95 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Gestion de la PME"){
li.push('11.62 %', '48.08 %', '40.29 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Commerce International"){
li.push('39.59 %', '18.29 %', '42.11 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Management Commercial Opérationnel"){
li.push('14.59 %', '44.39 %', '41.01 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Service et prestation des secteurs sanitaire et social"){
li.push('11.82 %', '50.32 %', '37.85 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Diététique"){
li.push('50.3 %', '8.21 %', '41.47 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Services informatiques aux organisations"){
li.push('24.02 %', '38.25 %', '37.73 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Notariat"){
li.push('46.64 %', '12.59 %', '40.77 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Professions immobilières"){
li.push('34.48 %', '26.23 %', '39.28 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Communication"){
li.push('39.66 %', '20.65 %', '39.68 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Support à l'action managériale"){
li.push('8.61 %', '45.8 %', '45.59 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Economie sociale familiale"){
li.push('16.41 %', '46.1 %', '37.48 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Tourisme"){
li.push('41.12 %', '29.83 %', '29.05 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Banque conseiller de clientèle"){
li.push('25.68 %', '28.44 %', '45.88 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers de l'esthétique-cosmétique-parfumerie"){
li.push('24.42 %', '50.12 %', '25.44 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Conseil et commercialisation de solutions techniques"){
li.push('8.49 %', '51.54 %', '39.97 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Management en hôtellerie restauration"){
li.push('0.0 %', '59.03 %', '40.97 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers de l'audio-visuel opt : métiers du son"){
li.push('63.73 %', '19.83 %', '16.44 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers de l'audio-visuel opt : gestion de la production"){
li.push('61.2 %', '24.78 %', '14.02 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Gestion des transports et logistique associée"){
li.push('10.58 %', '60.82 %', '28.61 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Opticien-Lunetier"){
li.push('45.62 %', '30.63 %', '23.73 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers des Services à l'environnement"){
li.push('20.95 %', '45.48 %', '33.56 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers de la coiffure"){
li.push('18.62 %', '50.76 %', '30.62 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Prothésiste dentaire"){
li.push('2.78 %', '94.45 %', '2.78 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Assurance"){
li.push('23.28 %', '29.08 %', '47.64 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Edition"){
li.push('23.1 %', '30.8 %', '46.2 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Photographie"){
li.push('62.4 %', '22.57 %', '15.07 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers de l'audio-visuel opt : métiers de l'image"){
li.push('57.74 %', '22.73 %', '19.51 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers de l'audio-visuel opt : techn. d'ingeniérie et exploit. équipements"){
li.push('38.42 %', '27.33 %', '34.25 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Etudes de réalisation d'un projet de communication - 1ère année commune"){
li.push('12.74 %', '71.62 %', '15.65 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Management opérationnel de la sécurité"){
li.push('14.19 %', '61.22 %', '24.59 %')
}
if (filiere == "BTS - Services" && filiere_bis == "Métiers de l'audio-visuel opt : montage et post-production"){
li.push('69.57 %', '19.47 %', '10.96 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Analyse, conduite et stratégie de l'entreprise agricole"){
li.push('13.7 %', '52.26 %', '34.04 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Aquaculture"){
li.push('20.87 %', '50.4 %', '28.72 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Aménagements paysagers"){
li.push('26.1 %', '45.13 %', '28.77 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Gestion et protection de la nature"){
li.push('35.08 %', '34.12 %', '30.8 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Production horticole"){
li.push('22.34 %', '57.89 %', '19.76 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Gestion et maitrise de l'eau"){
li.push('31.04 %', '19.24 %', '49.73 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Technico-commercial (BTSA)"){
li.push('11.15 %', '61.06 %', '27.78 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Développement, animation des territoires ruraux"){
li.push('14.84 %', '65.87 %', '19.29 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Développement de l'agriculture des régions chaudes"){
li.push('27.02 %', '47.05 %', '25.95 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "productions animales"){
li.push('29.27 %', '30.9 %', '39.82 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Agronomie : Productions végétales"){
li.push('26.85 %', '36.94 %', '36.22 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Gestion forestière"){
li.push('37.49 %', '30.21 %', '32.29 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Sciences et technologies des aliments spécialité Aliments et processus technologiques"){
li.push('24.46 %', '29.92 %', '45.61 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Viticulture-Oenologie"){
li.push('41.3 %', '28.08 %', '30.62 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Sciences et technologies des aliments spécialité Produits laitiers"){
li.push('36.0 %', '27.32 %', '36.66 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "génie des équipements agricoles"){
li.push('8.39 %', '52.34 %', '39.26 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Analyses agricoles biologiques et biotechnologiques"){
li.push('38.88 %', '22.17 %', '38.95 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Sciences et technologies des aliments spécialité Viandes et produits de la pêche"){
li.push('6.25 %', '16.25 %', '77.5 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Gestion et protection de la nature / DE d'alpinisme-accompagnateur en moyenne montagne"){
li.push('88.89 %', '0.0 %', '11.1 %')
}
if (filiere == "BTS - Agricole" && filiere_bis == "Sciences et technologies des aliments spécialité Produits céréaliers"){
li.push('25.0 %', '75.0 %', '0.0 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie mécanique et productique"){
li.push('57.8 %', '2.38 %', '39.82 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Qualité, logistique industrielle et organisation"){
li.push('53.75 %', '3.96 %', '42.28 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Réseaux et télécommunications"){
li.push('57.3 %', '4.83 %', '37.86 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie électrique et informatique industrielle"){
li.push('60.17 %', '3.3 %', '36.52 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie thermique et énergie"){
li.push('49.79 %', '3.66 %', '46.55 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Métiers du multimédia et de l'internet"){
li.push('50.0 %', '1.74 %', '48.26 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie industriel et maintenance"){
li.push('51.21 %', '2.71 %', '46.07 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Hygiène Sécurité Environnement"){
li.push('61.03 %', '2.53 %', '36.43 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie biologique parcours sciences de l'aliment et biotechnologie"){
li.push('65.77 %', '0.0 %', '34.22 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Informatique"){
li.push('60.56 %', '0.43 %', '39.01 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Mesures physiques"){
li.push('86.4 %', '0.07 %', '13.53 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie biologique parcours sciences de l'environnement et écotechnologies"){
li.push('70.28 %', '0.0 %', '29.71 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie civil - Construction durable"){
li.push('52.35 %', '3.66 %', '43.99 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Chimie"){
li.push('73.94 %', '0.0 %', '26.06 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie biologique Parcours diététique et nutrition"){
li.push('57.03 %', '0.0 %', '42.96 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie chimique génie des procédés"){
li.push('74.18 %', '0.12 %', '25.7 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Packaging, emballage et conditionnement"){
li.push('62.02 %', '0.62 %', '37.36 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie biologique parcours biologie médicale et biotechnologie"){
li.push('56.08 %', '0.0 %', '43.91 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Science et génie des matériaux"){
li.push('73.89 %', '0.11 %', '25.98 %')
}
if (filiere == "BUT - Production" && filiere_bis == "Génie biologique Parcours agronomie"){
li.push('65.84 %', '0.0 %', '34.15 %')
}
if (filiere == "Classe préparatoire économique et commerciale" && filiere_bis == "ENS Rennes D1"){
li.push('98.46 %', '0.0 %', '1.53 %')
}
if (filiere == "Classe préparatoire économique et commerciale" && filiere_bis == "ECT - Option technologique"){
li.push('0.0 %', '7.14 %', '92.86 %')
}
if (filiere == "Classe préparatoire économique et commerciale" && filiere_bis == "ENS Cachan D2"){
li.push('96.31 %', '0.0 %', '3.69 %')
}
if (filiere == "Classe préparatoire économique et commerciale" && filiere_bis == "ECG - Mathématiques appliquées + ESH"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire économique et commerciale" && filiere_bis == "ECG - Mathématiques approfondies + HGG"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire économique et commerciale" && filiere_bis == "ECG - Mathématiques appliquées + HGG"){
li.push('99.84 %', '0.0 %', '0.16 %')
}
if (filiere == "Classe préparatoire économique et commerciale" && filiere_bis == "ECG - Mathématiques approfondies + ESH"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "BCPST"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "MPSI"){
li.push('99.98 %', '0.0 %', '0.02 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "PCSI"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "PTSI"){
li.push('99.82 %', '0.0 %', '0.18 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "TB"){
li.push('0.0 %', '0.0 %', '100.0 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "TSI"){
li.push('0.0 %', '6.67 %', '93.33 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "Ecole normale supérieure Paris Saclay ? arts et design"){
li.push('72.63 %', '0.0 %', '27.36 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "TPC"){
li.push('0.0 %', '0.0 %', '100.0 %')
}
if (filiere == "Classe préparatoire scientifique" && filiere_bis == "MP2I"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire littéraire" && filiere_bis == "Ecole nationale des Chartes"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire littéraire" && filiere_bis == "Lettres"){
li.push('99.68 %', '0.04 %', '0.28 %')
}
if (filiere == "Classe préparatoire littéraire" && filiere_bis == "B/L - Lettres et sciences sociales"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire littéraire" && filiere_bis == "Option lettres et sciences humaines (St Cyr)"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Métiers du géomètre-topographe et de la modélisation numérique"){
li.push('28.79 %', '40.28 %', '30.93 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Etude et réalisation d'agencement"){
li.push('19.31 %', '52.12 %', '28.56 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Métiers de la chimie"){
li.push('33.34 %', '11.4 %', '55.27 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Maintenance des systèmes - option B Systèmes énergétiques et fluidiques"){
li.push('4.4 %', '80.04 %', '15.55 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Systèmes photoniques"){
li.push('23.78 %', '23.23 %', '52.98 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception de produits industriels"){
li.push('9.08 %', '35.09 %', '55.82 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception et Réalisation de Systèmes Automatiques"){
li.push('6.88 %', '53.52 %', '39.6 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Systèmes numériques - Option électronique et communication"){
li.push('11.78 %', '57.43 %', '30.78 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Contrôle industriel et régulation automatique"){
li.push('11.72 %', '28.99 %', '59.29 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception des processus de réalisation de produits (1ère année commune)"){
li.push('4.94 %', '56.54 %', '38.52 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Electrotechnique"){
li.push('4.95 %', '67.71 %', '27.34 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Bioanalyses et contrôles"){
li.push('35.89 %', '7.51 %', '56.6 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Enveloppe des bâtiments : conception et réalisation"){
li.push('12.74 %', '54.02 %', '33.24 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Assistance technique d'ingénieur"){
li.push('16.29 %', '40.75 %', '42.96 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Maintenance des matériels de construction et de manutention"){
li.push('0.0 %', '82.29 %', '17.71 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception et réalisation de carrosseries"){
li.push('6.29 %', '65.3 %', '28.43 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Systèmes numériques - Option informatique et réseaux"){
li.push('17.38 %', '44.39 %', '38.24 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Fluide, énergie, domotique - option C domotique et bâtiment communicants"){
li.push('5.54 %', '72.79 %', '21.67 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Management économique de la construction"){
li.push('18.24 %', '50.44 %', '31.32 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Maintenance des véhicules option voitures particulières"){
li.push('8.31 %', '73.86 %', '17.83 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Maintenance des systèmes - option A Systèmes de production"){
li.push('3.55 %', '72.85 %', '23.6 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Systèmes constructifs bois et habitat"){
li.push('18.86 %', '53.67 %', '27.48 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Europlastics et composites à référentiel commun européen - option Pilotage et Optimisation de la production"){
li.push('3.17 %', '83.84 %', '12.97 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception et réalisation en chaudronnerie industrielle"){
li.push('2.87 %', '79.3 %', '17.82 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Moteur à combustion interne"){
li.push('19.17 %', '48.54 %', '32.27 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Biotechnologies"){
li.push('34.53 %', '2.85 %', '62.62 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Bioqualité"){
li.push('23.37 %', '22.76 %', '53.88 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Travaux publics"){
li.push('15.91 %', '43.09 %', '41.01 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception et industrialisation en microtechniques"){
li.push('7.65 %', '55.81 %', '36.54 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Bâtiment"){
li.push('14.3 %', '42.48 %', '43.21 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Métiers de la mode-vêtements"){
li.push('16.49 %', '72.72 %', '10.77 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Environnement nucléaire"){
li.push('9.52 %', '57.94 %', '32.56 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Métiers de la mode-chaussure et maroquinerie"){
li.push('9.0 %', '81.76 %', '9.24 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Métiers de l'eau"){
li.push('26.39 %', '28.13 %', '45.49 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Maintenance des véhicules option véhicules de transport routier"){
li.push('5.43 %', '83.34 %', '11.23 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Développement et Réalisation Bois"){
li.push('12.92 %', '69.1 %', '17.99 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Fluide, énergie, domotique - option A génie climatique et fluidique"){
li.push('4.39 %', '68.03 %', '27.59 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Maintenance des systèmes - option C Systèmes éoliens"){
li.push('7.52 %', '55.61 %', '36.87 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Pilotage des procédés"){
li.push('9.89 %', '57.66 %', '32.45 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Architectures en Métal : conception et Réalisation"){
li.push('13.66 %', '46.72 %', '39.61 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Europlastics et composites à référentiel commun européen - option Conception d'Outillage"){
li.push('6.04 %', '69.79 %', '24.17 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Finitions, aménagement des bâtiments: conception et réalisation"){
li.push('1.43 %', '73.57 %', '25.0 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Traitement des matériaux"){
li.push('26.72 %', '21.85 %', '51.44 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Métiers de la mesure"){
li.push('24.48 %', '10.75 %', '64.76 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Fluide, énergie, domotique - option B froid et conditionnement d'air"){
li.push('3.28 %', '77.23 %', '19.48 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Techniques et services en matériels agricoles"){
li.push('2.84 %', '78.82 %', '18.34 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Aéronautique"){
li.push('30.78 %', '36.25 %', '32.94 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception et industrialisation en construction navale"){
li.push('29.4 %', '23.5 %', '47.09 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Industries céramiques"){
li.push('42.9 %', '28.6 %', '28.6 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Fonderie"){
li.push('12.37 %', '50.78 %', '36.85 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Innovations textiles - Option A : Structures"){
li.push('9.1 %', '45.5 %', '45.5 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Géologie appliquée"){
li.push('93.8 %', '0.0 %', '6.3 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Forge"){
li.push('0.0 %', '16.7 %', '83.3 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Innovations textiles - Option B : Traitements"){
li.push('22.2 %', '22.2 %', '55.59 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Maintenance des véhicules option motocycles"){
li.push('8.32 %', '67.07 %', '24.6 %')
}
if (filiere == "BTS - Production" && filiere_bis == "Conception de processus de découpe et d'emboutissage"){
li.push('5.57 %', '40.0 %', '54.43 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Histoire de l'art et archéologie"){
li.push('78.33 %', '7.54 %', '14.15 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Sciences sociales"){
li.push('79.92 %', '5.58 %', '14.51 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Sciences du langage"){
li.push('81.98 %', '4.6 %', '13.41 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Histoire"){
li.push('82.64 %', '5.63 %', '11.72 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Géographie et aménagement"){
li.push('82.68 %', '5.96 %', '11.37 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Philosophie"){
li.push('84.09 %', '4.36 %', '11.56 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Sociologie"){
li.push('74.32 %', '8.87 %', '16.81 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Psychologie"){
li.push('83.16 %', '5.31 %', '11.52 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Administration économique et sociale"){
li.push('71.03 %', '8.55 %', '20.42 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Information et communication"){
li.push('88.0 %', '3.54 %', '8.44 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Sciences de l'éducation"){
li.push('78.83 %', '4.86 %', '16.31 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Sciences et Techniques des Activités Physiques et Sportives"){
li.push('89.61 %', '2.81 %', '7.57 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Théologie Catholique"){
li.push('75.0 %', '0.0 %', '25.0 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Humanités"){
li.push('88.09 %', '3.72 %', '8.19 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Histoire / Anglais"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Théologie"){
li.push('58.32 %', '20.82 %', '20.82 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Sciences de l'Homme, Anthropologie, Ethnologie"){
li.push('80.1 %', '6.94 %', '12.97 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Sciences sanitaires et sociales"){
li.push('51.16 %', '12.73 %', '36.1 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Santé et société"){
li.push('81.6 %', '0.0 %', '18.4 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Mathématiques et informatique appliquées aux sciences humaines et sociales"){
li.push('90.86 %', '3.32 %', '5.87 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Musicologie"){
li.push('96.0 %', '2.67 %', '1.33 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Théologie Protestante"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Science politique"){
li.push('97.59 %', '1.0 %', '1.45 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Histoire / Géographie"){
li.push('94.69 %', '0.0 %', '5.3 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Histoire / Allemand"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences humaines et sociales" && filiere_bis == "Tourisme"){
li.push('82.8 %', '6.9 %', '10.3 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Droit"){
li.push('89.35 %', '2.15 %', '8.5 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Economie"){
li.push('89.2 %', '3.24 %', '7.56 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Administration économique et sociale"){
li.push('69.35 %', '9.47 %', '21.17 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Economie et gestion"){
li.push('84.38 %', '4.01 %', '11.61 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Administration et Echanges internationaux"){
li.push('95.42 %', '0.06 %', '4.51 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Science politique"){
li.push('93.87 %', '2.09 %', '4.04 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Gestion"){
li.push('91.59 %', '1.86 %', '6.55 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Sciences sociales"){
li.push('99.23 %', '0.0 %', '0.77 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Droit français - Droit étranger"){
li.push('95.47 %', '0.0 %', '4.52 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Administration publique"){
li.push('63.3 %', '18.6 %', '18.1 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Droit, Informatique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Droit, Economie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Droit-économie-gestion" && filiere_bis == "Sciences sanitaires et sociales"){
li.push('48.9 %', '4.5 %', '46.59 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Cinéma et Audiovisuel"){
li.push('85.14 %', '8.7 %', '6.15 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Langues étrangères appliquées"){
li.push('75.59 %', '9.23 %', '15.18 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Langues, littératures & civilisations étrangères et régionales"){
li.push('75.07 %', '11.99 %', '12.94 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Lettres"){
li.push('79.86 %', '9.47 %', '10.67 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Histoire de l'art et archéologie"){
li.push('80.15 %', '8.77 %', '11.09 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Musicologie"){
li.push('80.03 %', '3.61 %', '16.36 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Arts"){
li.push('79.57 %', '7.46 %', '12.98 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Etudes européennes et internationales"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Information et communication"){
li.push('93.07 %', '1.3 %', '5.63 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Arts du spectacle"){
li.push('83.75 %', '6.47 %', '9.78 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Humanités"){
li.push('80.7 %', '8.25 %', '11.05 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Sciences du langage"){
li.push('84.54 %', '5.53 %', '9.92 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Lettres, langues"){
li.push('75.2 %', '6.82 %', '17.96 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Philosophie"){
li.push('82.31 %', '5.05 %', '12.63 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Arts plastiques"){
li.push('75.78 %', '11.52 %', '12.71 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Etudes théâtrales"){
li.push('87.66 %', '4.15 %', '8.17 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Lettres / Anglais"){
li.push('69.19 %', '15.4 %', '15.4 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Etudes culturelles"){
li.push('84.02 %', '8.12 %', '7.82 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Pluridisciplinaire"){
li.push('90.43 %', '0.0 %', '9.57 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Cinéma"){
li.push('93.8 %', '3.0 %', '3.2 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Histoire des Arts"){
li.push('79.19 %', '10.8 %', '10.0 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Anglais / Langue asiatique"){
li.push('85.69 %', '14.3 %', '0.0 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Lettres / Histoire"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Arts-lettres-langues" && filiere_bis == "Lettres / Sciences du langage"){
li.push('75.0 %', '25.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle universitaire préparatoire aux grandes écoles"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Parcours scientifique renforcé"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle Universitaire de Préparation aux Grandes Ecoles Scientifiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Classe Préparatoire Universitaire - Physique - Chimie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Parcours mathématiques-physique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Sciences pour l'ingénieur"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle universitaire préparatoire aux grandes écoles - Parcours Informatique, Mathématiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle préparatoire Physique Chimie, parcours renforcé"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Sciences de la Vie et de la Terre : préparation aux concours B Agro et Véto (Sites Saint Charles)"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle Universitaire Préparatoire aux Grandes Ecoles - Mathématiques et Physique"){
li.push('75.0 %', '25.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle Universitaire Préparatoire aux Grandes Ecoles - Physique et Mathématiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle Universitaire Préparatoire aux Grandes Ecoles"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle universitaire préparatoire aux grandes écoles - Mécanique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle universitaire préparatoire aux grandes écoles - Physique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Mathématique - Préparation aux écoles d'ingénieurs"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Prep'ISIMA"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cycle universitaire préparatoire aux grandes écoles - Parcours Sciences pour l'ingénieur"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Parcours physique-chimie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Classe Préparatoire Universitaire Mathématiques - Physique - Informatique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Sciences, technologie, santé" && filiere_bis == "Cursus préparatoire aux concours des grandes écoles d'ingénieurs"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Carrières sociales Parcours assistance sociale"){
li.push('41.8 %', '3.5 %', '54.7 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Information communication Parcours publicité"){
li.push('60.04 %', '0.6 %', '39.36 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Information communication Parcours communication des organisations"){
li.push('66.45 %', '0.32 %', '33.23 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Techniques de commercialisation"){
li.push('48.28 %', '2.63 %', '49.08 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Carrières juridiques"){
li.push('47.83 %', '0.94 %', '51.23 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Carrières sociales Parcours animation sociale et socioculturelle"){
li.push('34.61 %', '8.12 %', '57.26 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Gestion administrative et commerciale des organisations"){
li.push('48.52 %', '1.1 %', '50.38 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Statistique et informatique décisionnelle"){
li.push('80.4 %', '0.89 %', '18.7 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Information communication Parcours métiers du livre et du patrimoine"){
li.push('79.67 %', '2.75 %', '17.57 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Gestion des entreprises et des administrations"){
li.push('53.96 %', '0.5 %', '45.53 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Gestion logistique et transport"){
li.push('48.35 %', '9.54 %', '42.1 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Carrières sociales parcours villes et territoires durables"){
li.push('63.71 %', '1.82 %', '34.45 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Carrières sociales parcours coordination et gestion des établissements et services sanitaires et sociaux"){
li.push('35.96 %', '11.63 %', '52.4 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Information communication Parcours journalisme"){
li.push('87.77 %', '0.0 %', '12.23 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Carrières sociales Parcours éducation spécialisée"){
li.push('39.35 %', '5.68 %', '54.94 %')
}
if (filiere == "BUT - Service" && filiere_bis == "Information communication Parcours information numérique dans les organisations"){
li.push('63.51 %', '0.83 %', '35.65 %')
}
if (filiere == "Formations Bac + 5" && filiere_bis == "Architecture"){
li.push('83.49 %', '4.31 %', '12.2 %')
}
if (filiere == "Formations Bac + 5" && filiere_bis == "Paysage"){
li.push('83.32 %', '1.12 %', '15.52 %')
}
if (filiere == "Formations Bac + 5" && filiere_bis == "Bicursus Architecture Ingénieur"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Formations Bac + 5" && filiere_bis == "Conservation-restauration des biens culturels"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Mathématiques"){
li.push('92.82 %', '1.37 %', '5.81 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Physique, chimie"){
li.push('87.7 %', '1.56 %', '10.75 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Mathématiques et informatique appliquées aux sciences humaines et sociales"){
li.push('92.1 %', '2.56 %', '5.34 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Chimie"){
li.push('90.02 %', '0.77 %', '9.2 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Informatique"){
li.push('88.29 %', '2.7 %', '9.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences de la vie"){
li.push('92.62 %', '0.52 %', '6.86 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Physique"){
li.push('90.59 %', '1.32 %', '8.08 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences pour la santé"){
li.push('90.42 %', '0.8 %', '8.77 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Mathématiques, physique, chimie, informatique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences et Humanités"){
li.push('95.0 %', '2.5 %', '2.5 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences et Techniques des Activités Physiques et Sportives"){
li.push('86.11 %', '3.79 %', '10.11 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences pour l'ingénieur"){
li.push('85.39 %', '3.59 %', '11.02 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences et technologies"){
li.push('90.99 %', '1.32 %', '7.68 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences de la terre"){
li.push('92.91 %', '1.47 %', '5.63 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences de la vie et de la terre"){
li.push('94.89 %', '0.96 %', '4.14 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences sanitaires et sociales"){
li.push('53.73 %', '3.29 %', '42.97 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Génie civil"){
li.push('74.53 %', '3.49 %', '21.96 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Electronique, énergie électrique, automatique"){
li.push('78.41 %', '4.11 %', '17.47 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Parcours d'Accès Spécifique Santé (PASS)"){
li.push('96.73 %', '0.82 %', '2.45 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Mécanique"){
li.push('85.63 %', '1.8 %', '12.57 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Chimie, Sciences de la vie"){
li.push('98.45 %', '0.0 %', '1.55 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences biomédicales"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Mathématiques et applications"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Mathématiques, Physique et Sciences pour l'Ingénieur"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Informatique, Mathématiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Informatique, Sciences de la vie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Informatique, Management"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Droit, Sciences et Innovation"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Frontières du vivant"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Mathématiques, Sciences de la vie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences de la Terre et Sciences Physiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Sciences de la Terre et environnement"){
li.push('97.65 %', '1.15 %', '1.15 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Economie, Mathématiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Sciences - technologies - santé" && filiere_bis == "Acoustique et Vibrations"){
li.push('92.0 %', '0.0 %', '8.0 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "DTS Imagerie médicale et radiologie thérapeutique"){
li.push('46.88 %', '0.0 %', '53.12 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "D.E manipulateur/trice en électroradiologie médicale"){
li.push('67.8 %', '0.0 %', '32.2 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "D.E Infirmier"){
li.push('39.46 %', '23.37 %', '37.17 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "D.E Technicien de Laboratoire Médical"){
li.push('70.83 %', '1.67 %', '27.53 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "D.E Ergothérapeute"){
li.push('81.14 %', '1.98 %', '16.88 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "D.E Pédicure-Podologue"){
li.push('73.33 %', '0.43 %', '26.24 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "Certificat de capacité d'Orthophoniste"){
li.push('99.1 %', '0.15 %', '0.74 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "D.E Audioprothésiste"){
li.push('92.19 %', '0.0 %', '7.81 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "Certificat de capacité d'Orthoptiste"){
li.push('91.02 %', '1.43 %', '7.55 %')
}
if (filiere == "D.E secteur sanitaire" && filiere_bis == "D.E Psychomotricien"){
li.push('83.0 %', '0.0 %', '17.0 %')
}
if (filiere == "Formations  des écoles ingénieurs" && filiere_bis == "Formation ingénieur Bac + 5"){
li.push('75.8 %', '0.0 %', '24.2 %')
}
if (filiere == "Formations  des écoles ingénieurs" && filiere_bis == "Formation Bac + 3"){
li.push('74.47 %', '1.45 %', '24.08 %')
}
if (filiere == "Formations  des écoles ingénieurs" && filiere_bis == "Formation Bac + 4"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mise à niveau" && filiere_bis == "Hôtellerie restauration"){
li.push('55.94 %', '19.73 %', '24.33 %')
}
if (filiere == "Mise à niveau" && filiere_bis == "Classe de mise à niveau au BTS Maritime Pêche et Gestion de l'Environnement Marin"){
li.push('44.4 %', '22.2 %', '33.3 %')
}
if (filiere == "Mise à niveau" && filiere_bis == "Mise à niveau pour l'accès au BTS MASEN"){
li.push('9.1 %', '72.69 %', '18.2 %')
}
if (filiere == "Licence - Droit-économie-gestion / Arts-lettres-langues" && filiere_bis == "Droit"){
li.push('98.5 %', '0.3 %', '1.2 %')
}
if (filiere == "Année préparatoire" && filiere_bis == "Année préparatoire"){
li.push('69.4 %', '9.59 %', '21.01 %')
}
if (filiere == "Année préparatoire" && filiere_bis == "Année préparatoire à l'École Nationale de la Marine Marchande - Officier 1ère classe"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Diplôme National d'Art" && filiere_bis == "Diplôme National d'Art"){
li.push('87.03 %', '3.62 %', '9.36 %')
}
if (filiere == "Diplôme National d'Art" && filiere_bis == "Diplôme National d'Art option art, mention conservation-restauration des biens culturels"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Diplôme National d'Art" && filiere_bis == "Diplôme National d'Art option art"){
li.push('81.07 %', '8.07 %', '10.85 %')
}
if (filiere == "Diplôme National d'Art" && filiere_bis == "Diplôme National d'Art option design"){
li.push('83.39 %', '0.0 %', '16.6 %')
}
if (filiere == "Diplôme National d'Art" && filiere_bis == "Diplôme National d'Art option design, mention design graphique et interactivité"){
li.push('90.0 %', '0.0 %', '10.0 %')
}
if (filiere == "Formation des écoles de commerce et de management" && filiere_bis == "Formation des écoles de commerce et de management Bac + 3"){
li.push('79.78 %', '3.53 %', '16.69 %')
}
if (filiere == "Formation des écoles de commerce et de management" && filiere_bis == "Formation des écoles de commerce et de management Bac + 5"){
li.push('91.27 %', '0.4 %', '8.32 %')
}
if (filiere == "Formation des écoles de commerce et de management" && filiere_bis == "Formation des écoles de commerce et de management Bac + 4"){
li.push('92.56 %', '0.27 %', '7.16 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien ascensoriste, service et modernisation"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien en énergies renouvelables (option thermique)"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien en énergies renouvelables (option énergie électrique)"){
li.push('0.0 %', '99.23 %', '0.77 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Aéronautique option avions à moteur à pistons"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Accueil réception"){
li.push('3.18 %', '88.84 %', '7.97 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Agent de contrôle non destructif"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Aéronautique option avions à moteur à turbines"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Organisateur de réception"){
li.push('0.0 %', '94.05 %', '5.95 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien(ne) en soudage"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Aéronautique - option avionique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Mécatronique navale"){
li.push('0.0 %', '98.07 %', '1.92 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Vendeur-conseil en produits techniques pour l'habitat"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien(ne) en tuyauterie"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien en chaudronnerie aéronautique et spatiale"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Aéronautique option hélicoptère moteur à turbines"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Maintenance des installations oléohydrauliques et pneumatiques"){
li.push('1.82 %', '98.18 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Animation-gestion de projets dans le secteur sportif"){
li.push('16.63 %', '57.44 %', '25.93 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL classe passerelle BTS"){
li.push('0.13 %', '82.02 %', '17.85 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL classe passerelle BTS option service"){
li.push('0.69 %', '72.98 %', '26.32 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL classe passerelle BTS option production"){
li.push('0.0 %', '85.17 %', '14.83 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Nivoculteur"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Maquettes et prototypes"){
li.push('0.0 %', '95.83 %', '4.17 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Accueil dans transports"){
li.push('9.72 %', '81.8 %', '8.47 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Assistance Conseil Vente à distance"){
li.push('0.0 %', '93.46 %', '6.54 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Dispositif SAS - Préparation à l'apprentissage"){
li.push('0.0 %', '59.27 %', '40.72 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Domotique appliquée à la santé / gestion technique de bâtiment"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Contrôle Technique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL E-Commerce"){
li.push('7.13 %', '76.33 %', '16.53 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Scénographie de la communication"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Mécanicien circuit auto"){
li.push('0.0 %', '87.5 %', '12.5 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Secrétaire juridique"){
li.push('5.9 %', '90.97 %', '3.12 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL secrétariat médical"){
li.push('8.93 %', '72.28 %', '18.77 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Techniques spécifiques Couture et Luxe"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL maintenance équipements audiovisuels et électroménager"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Electricien du spectacle"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Chef de rang"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien en réseau électrique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien de maintenance et de déploiement numérique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Fibre optique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - CAES - Option Services"){
li.push('0.0 %', '94.38 %', '5.61 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - CAES - Option Production"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien en peinture aéronautique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Véhicules nautiques motorisés (Jet ski)"){
li.push('0.0 %', '66.69 %', '33.3 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Services numériques aux organisations"){
li.push('4.55 %', '70.95 %', '24.51 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Smart Home"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL BARISTA"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL agent hydrothermal"){
li.push('25.0 %', '50.0 %', '25.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Secrétariat Médico Social"){
li.push('5.57 %', '72.9 %', '21.57 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - Tourneur fraiseur sur machines conventionnelles dans l'aéronautique et l'aérospatiale"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Adjoint des cadres sanitaires et sociaux - Secrétariat médico-social"){
li.push('5.55 %', '88.9 %', '5.55 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Mécanique de compétition - préparation moteurs"){
li.push('0.0 %', '88.89 %', '11.1 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Assistant(e) gouvernant"){
li.push('0.0 %', '50.0 %', '50.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL préparation aux concours de la sécurité publique et civile"){
li.push('15.83 %', '63.26 %', '20.87 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Préparation aux concours de la fonction publique concernant les métiers de la sécurité"){
li.push('14.3 %', '85.69 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Administrateur réseau, infrastructure et système numérique"){
li.push('16.67 %', '45.56 %', '37.77 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Santé et bien être de la personne âgée"){
li.push('0.0 %', '0.0 %', '100.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien des systèmes auxiliaires et véhicules électriques"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - SVDI (Sureté vidéo détection incendie)"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Conseiller commercial en automobile"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien réseaux très haut débit fibre optique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Restauration Meubles Anciens"){
li.push('8.35 %', '75.0 %', '16.65 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL DAide déclarant en douane"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Formation aux compétences numériques de la vente dans l'entreprise"){
li.push('0.0 %', '88.89 %', '11.1 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien polyvalent dans les systèmes audiovisuels professionnels"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Ouvrier voilier polyvalent"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Agent de maitrise de 'métré bois'"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien sur centre d'usinage bois 3 et 5 axes - Concepteur sur modeleur 3D"){
li.push('0.0 %', '50.0 %', '50.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Commerce international des vins, spiritueux et oenotourisme"){
li.push('0.0 %', '0.0 %', '100.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Esquisse"){
li.push('50.0 %', '50.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Services financiers"){
li.push('0.0 %', '96.3 %', '3.7 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Technicien des services à l'énergie"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Prototypiste Mécanicien(ne) Modèle"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Services aéroportuaires"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien de prise en charge de la personne âgée non autonome option maladie d'alzheimer"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Sociale Esthétique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien en Maintenance et Conduite de Centrales Photovoltaïques"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Sommellerie"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - Environnement Numérique au Service de l'Autonomie de la Personne"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - Mobilités Urbaines, maintenances des véhicules électriques légers (Vélos électriques, trottinettes, hoverboards, ...)"){
li.push('25.0 %', '75.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL -  Métiers du plâtre"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - Parcours polyvalent en recyclage et réhabilitation des véhicules"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - Entreprenariat Hôtellerie"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Assistant gestion site web et communication numérique multimédia, à destination des clients et des usagers"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Hydro - esthétique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL CAO - DAO du bâtiment"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technico-commercial en équipement de la maison et du multimédia"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien(ne) réseaux et services numériques"){
li.push('0.0 %', '91.65 %', '8.35 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Electromobilité"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Formation graphisme et communication visuelle"){
li.push('11.1 %', '88.89 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien motoriste option Mécanique Hors Bord"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Projeteur/euse Building Information Modeling (BIM)"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Communication web et webmarketing"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Moteurs hors bord haute technicité"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Visual Merchandising"){
li.push('20.0 %', '70.0 %', '10.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Mécanicien en compétition automobile - Option monoplace"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Assistant ingénieur en biologie, biochimie, biotechnologie"){
li.push('93.3 %', '0.0 %', '6.7 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "Peinture décoration"){
li.push('16.7 %', '66.69 %', '16.7 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Maintenance de 1er niveau des véhicules routiers"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Son et éclairage en spectacle vivant"){
li.push('0.0 %', '0.0 %', '100.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien sur Lignes de Productions Industrielles"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Responsable d'exécution de travaux de réhabilitation : reprise et rénovation d'ouvrage de Gros ?uvre"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien de la Transition Energétique du Bâtiment"){
li.push('0.0 %', '80.0 %', '20.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Service aux personnes en environnement numérique"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Maintenance Milieu Nucléaire"){
li.push('0.0 %', '50.0 %', '50.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Gestion dossier retraite prévoyance et santé"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Ecole européenne du goût et art de la table"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Métiers de Laboratoire"){
li.push('0.0 %', '16.7 %', '83.3 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien de systèmes de sécurité et d'incendie"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Multimédia"){
li.push('33.3 %', '55.59 %', '11.1 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL administration de projets dans le secteur du tourisme"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Crémier-fromager : territoire, art culinaire et vins de champagne"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Chef de rang à la française - Relais & Chateaux"){
li.push('12.5 %', '75.0 %', '12.5 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Technicien motoriste option Mécanique In Bord"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Secrétariat Assistant Médico-Social"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Art et Couture"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL Maroquinerie / Gainerie / Sellerie de luxe"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Mention complémentaire" && filiere_bis == "FCIL - Marchandiseur Visuel Cross Canal"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Chargé de mission qualité, sécurité, santé au travail et environnement (Bac + 3)"){
li.push('81.8 %', '0.0 %', '18.2 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Chargé de projet en aménagement durable du territoire (bac +2)"){
li.push('51.65 %', '0.0 %', '48.34 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Gestionnaire d'unité commerciale (option généraliste / option spécialisée) (bac +2)"){
li.push('11.1 %', '33.33 %', '55.56 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Géomètre-Géomaticien (bac +2)"){
li.push('90.89 %', '9.1 %', '0.0 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Responsable technique en bâtiment et travaux publics (bac +2)"){
li.push('23.1 %', '38.5 %', '38.5 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Manager en Biotechnologies (bac +5)"){
li.push('96.19 %', '0.0 %', '3.8 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Responsable de projets informatiques (bac +3)"){
li.push('71.39 %', '0.0 %', '28.6 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Titre professionnel - Organisateur de transports aériens ou maritimes de marchandises (Bac +2)"){
li.push('16.7 %', '83.3 %', '0.0 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Technicien supérieur de maintenance et d'exploitation en climatique (bac +2)"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Technicien(ne) supérieur(e) en maintenance industrielle (bac +2)"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Assistant ingénieur en biologie-biochimie - biotechnologies (bac +3)"){
li.push('80.3 %', '1.6 %', '18.0 %')
}
if (filiere == "Formation professionnelle" && filiere_bis == "Techniciens Spécialisés de la Construction"){
li.push('89.5 %', '0.0 %', '10.5 %')
}
if (filiere == "CUPGE - Droit-économie-gestion" && filiere_bis == "Préparation aux concours des écoles de commerce, Parcours Economie- Finance"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Droit-économie-gestion" && filiere_bis == "Préparation aux concours des écoles de commerce, Parcours Gestion"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Droit-économie-gestion" && filiere_bis == "Droit et Culture Juridique - Classe Préparatoire (Prépa D1)"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Droit-économie-gestion" && filiere_bis == "Cycle Universitaire Préparatoire aux Grandes Écoles de commerce"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Mécanique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Sciences pour l'ingénieur"){
li.push('99.34 %', '0.0 %', '0.66 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Génie civil"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Physique, chimie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Informatique"){
li.push('98.99 %', '0.0 %', '1.01 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Géographie et aménagement"){
li.push('96.42 %', '3.57 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Chimie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Economie et gestion"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Electronique, énergie électrique, automatique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Mathématiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Sciences de la vie et de la terre"){
li.push('97.61 %', '0.0 %', '2.38 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Sciences de la terre"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Physique"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Sciences pour la santé"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Sciences de la vie"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Langues étrangères appliquées"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Sciences et Techniques des Activités Physiques et Sportives"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Information et communication"){
li.push('92.3 %', '0.0 %', '7.7 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Acoustique et Vibrations"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "C.M.I - Cursus Master en Ingénierie" && filiere_bis == "Histoire"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CUPGE - Arts Lettres Langues" && filiere_bis == "Cycle Préparatoire Lettres  - Licence renforcée"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Droit-économie-gestion / Sciences humaines et sociales" && filiere_bis == "Droit"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Droit-économie-gestion / Sciences humaines et sociales" && filiere_bis == "Histoire"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire aux études supérieures" && filiere_bis == "CPES - Arts"){
li.push('88.36 %', '4.0 %', '7.64 %')
}
if (filiere == "Classe préparatoire aux études supérieures" && filiere_bis == "CPES - Littéraire"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire aux études supérieures" && filiere_bis == "CPES - Scientifique"){
li.push('80.22 %', '12.67 %', '7.11 %')
}
if (filiere == "Classe préparatoire aux études supérieures" && filiere_bis == "CPES - Générale"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Classe préparatoire aux études supérieures" && filiere_bis == "CPES - Sciences économiques"){
li.push('54.9 %', '11.77 %', '33.33 %')
}
if (filiere == "DEUST" && filiere_bis == "Formation de base aux métiers du théâtre"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Métiers de la forme"){
li.push('57.53 %', '8.33 %', '34.11 %')
}
if (filiere == "DEUST" && filiere_bis == "Analyse des milieux biologiques"){
li.push('70.0 %', '0.0 %', '30.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Animation et gestion des activités physiques, sportives ou culturelles"){
li.push('48.33 %', '18.14 %', '33.5 %')
}
if (filiere == "DEUST" && filiere_bis == "Métiers du livre"){
li.push('91.69 %', '0.0 %', '8.3 %')
}
if (filiere == "DEUST" && filiere_bis == "Animation et gestion des activités sportives, physiques ou culturelles, parcours agent de développement de club sportif"){
li.push('71.39 %', '7.1 %', '21.4 %')
}
if (filiere == "DEUST" && filiere_bis == "Animation et gestion des activités sportives, physiques ou culturelles, parcours animation"){
li.push('44.4 %', '44.4 %', '11.1 %')
}
if (filiere == "DEUST" && filiere_bis == "Technologies de l'organisation dans les professions de santé"){
li.push('35.3 %', '0.0 %', '64.69 %')
}
if (filiere == "DEUST" && filiere_bis == "Technicien de la mer et du littoral"){
li.push('58.8 %', '0.0 %', '41.2 %')
}
if (filiere == "DEUST" && filiere_bis == "Activités physiques et sportives adaptées : déficiences intellectuelles, troubles psychiques"){
li.push('50.0 %', '25.0 %', '25.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Pratique et gestion des activités physiques, sportives et de loisirs pour les publics séniors"){
li.push('41.7 %', '26.8 %', '31.5 %')
}
if (filiere == "DEUST" && filiere_bis == "Bâtiment et Construction"){
li.push('68.0 %', '4.0 %', '28.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Médiations citoyennes : éducation, culture, social, environnement"){
li.push('18.2 %', '59.09 %', '22.7 %')
}
if (filiere == "DEUST" && filiere_bis == "Bureautique et Communication Multimédia"){
li.push('37.34 %', '28.35 %', '34.35 %')
}
if (filiere == "DEUST" && filiere_bis == "Production, contrôles et qualité des produits de santé"){
li.push('62.5 %', '0.0 %', '37.5 %')
}
if (filiere == "DEUST" && filiere_bis == "Animation et gestion des activités sportives, physiques ou culturelles, parcours activités aquatiques"){
li.push('91.1 %', '4.43 %', '4.43 %')
}
if (filiere == "DEUST" && filiere_bis == "Animation et gestion des activités sportives, physiques ou culturelles, parcours activités de pleine nature"){
li.push('43.46 %', '26.73 %', '29.8 %')
}
if (filiere == "DEUST" && filiere_bis == "Assistant juridique"){
li.push('41.7 %', '8.3 %', '50.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Santé environnement : Techniques de laboratoire"){
li.push('58.3 %', '0.0 %', '41.7 %')
}
if (filiere == "DEUST" && filiere_bis == "Métiers des bibliothèques et de la documentation"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Animation, commercialisation des services sportifs"){
li.push('80.95 %', '4.15 %', '14.85 %')
}
if (filiere == "DEUST" && filiere_bis == "Bâtiment et travaux publics"){
li.push('12.5 %', '0.0 %', '87.5 %')
}
if (filiere == "DEUST" && filiere_bis == "Informatique d'Organisation des Systèmes d'Information"){
li.push('66.69 %', '0.0 %', '33.3 %')
}
if (filiere == "DEUST" && filiere_bis == "Intervention Sociale"){
li.push('6.7 %', '31.1 %', '62.2 %')
}
if (filiere == "DEUST" && filiere_bis == "Webmaster et gestionnaire d'intranet"){
li.push('83.3 %', '8.3 %', '8.3 %')
}
if (filiere == "DEUST" && filiere_bis == "Maintenance hôtelière, hospitalière et immobilière"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Activités physiques et sportives et inadaptations sociales"){
li.push('70.0 %', '10.0 %', '20.0 %')
}
if (filiere == "DEUST" && filiere_bis == "Accueil d'excellence en tourisme"){
li.push('39.3 %', '14.3 %', '46.4 %')
}
if (filiere == "DEUST" && filiere_bis == "Métiers de l'animation sociale, socio-éducative et socio-culturelle"){
li.push('33.3 %', '33.3 %', '33.3 %')
}
if (filiere == "DEUST" && filiere_bis == "Métiers de la cohésion sociale"){
li.push('33.3 %', '25.0 %', '41.7 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Activités aquatiques et de la natation"){
li.push('62.94 %', '12.92 %', '24.13 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Activités de la forme"){
li.push('55.83 %', '15.11 %', '29.05 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Activités physiques pour tous"){
li.push('33.64 %', '31.42 %', '34.93 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Judo-Jujitsu"){
li.push('50.0 %', '25.0 %', '25.0 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Activités physiques pour tous / Activités sports collectifs"){
li.push('50.0 %', '0.0 %', '50.0 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Activités sports collectifs"){
li.push('22.23 %', '33.33 %', '44.46 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Canoë-Kayak"){
li.push('66.69 %', '33.3 %', '0.0 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Surf"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Tennis de table"){
li.push('66.69 %', '33.3 %', '0.0 %')
}
if (filiere == "BPJEPS" && filiere_bis == "Voile multi-supports jusqu'à 6 miles nautique d'un abri"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "DN MADE" && filiere_bis == "Matériaux"){
li.push('43.85 %', '5.98 %', '50.16 %')
}
if (filiere == "DN MADE" && filiere_bis == "Graphisme"){
li.push('46.88 %', '13.68 %', '39.44 %')
}
if (filiere == "DN MADE" && filiere_bis == "Mode"){
li.push('37.66 %', '8.16 %', '54.19 %')
}
if (filiere == "DN MADE" && filiere_bis == "Espace"){
li.push('55.11 %', '6.48 %', '38.4 %')
}
if (filiere == "DN MADE" && filiere_bis == "Objet"){
li.push('45.24 %', '12.31 %', '42.45 %')
}
if (filiere == "DN MADE" && filiere_bis == "Spectacle"){
li.push('60.42 %', '13.37 %', '26.22 %')
}
if (filiere == "DN MADE" && filiere_bis == "Numérique"){
li.push('46.9 %', '17.81 %', '35.3 %')
}
if (filiere == "DN MADE" && filiere_bis == "Événement"){
li.push('50.29 %', '12.09 %', '37.62 %')
}
if (filiere == "DN MADE" && filiere_bis == "Livre"){
li.push('33.12 %', '2.5 %', '64.37 %')
}
if (filiere == "DN MADE" && filiere_bis == "Patrimoine"){
li.push('36.65 %', '26.65 %', '36.65 %')
}
if (filiere == "DN MADE" && filiere_bis == "Animation"){
li.push('47.58 %', '4.16 %', '48.23 %')
}
if (filiere == "DN MADE" && filiere_bis == "Ornement"){
li.push('30.33 %', '10.33 %', '59.36 %')
}
if (filiere == "DN MADE" && filiere_bis == "Innovation sociale"){
li.push('56.65 %', '13.62 %', '29.75 %')
}
if (filiere == "DN MADE" && filiere_bis == "Instrument"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "D.E secteur social" && filiere_bis == "D.E Assistant de Service Social"){
li.push('50.3 %', '17.39 %', '32.32 %')
}
if (filiere == "D.E secteur social" && filiere_bis == "D.E Educateur Spécialisé"){
li.push('43.26 %', '20.45 %', '36.29 %')
}
if (filiere == "D.E secteur social" && filiere_bis == "D.E Educateur de Jeunes Enfants"){
li.push('36.12 %', '26.46 %', '37.41 %')
}
if (filiere == "D.E secteur social" && filiere_bis == "D.E Educateur Technique Spécialisé"){
li.push('14.17 %', '47.84 %', '37.99 %')
}
if (filiere == "Diplôme d'établissement" && filiere_bis == "Paysagiste concepteur"){
li.push('81.8 %', '9.1 %', '9.1 %')
}
if (filiere == "Licence - Sciences humaines et sociales / Sciences - technologies - santé" && filiere_bis == "Sciences pour l'ingénieur"){
li.push('94.69 %', '0.0 %', '5.3 %')
}
if (filiere == "Diplôme d'Université" && filiere_bis == "Diplôme d'Université"){
li.push('61.33 %', '14.84 %', '23.83 %')
}
if (filiere == "Diplôme d'Université" && filiere_bis == "Diplôme d'Université - PAREO"){
li.push('42.04 %', '24.78 %', '33.17 %')
}
if (filiere == "Diplôme d'Université" && filiere_bis == "Formation Supérieure de Spécialisation"){
li.push('29.97 %', '43.77 %', '26.25 %')
}
if (filiere == "Diplôme d'Université" && filiere_bis == "Diplôme d'Université CAES"){
li.push('62.33 %', '17.73 %', '19.93 %')
}
if (filiere == "Licence - Arts-lettres-langues / Sciences humaines et sociales" && filiere_bis == "Lettres"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Licence - Arts-lettres-langues / Sciences humaines et sociales" && filiere_bis == "Sciences du langage"){
li.push('82.89 %', '5.7 %', '11.4 %')
}
if (filiere == "CPES" && filiere_bis == "Cycle pluridisciplinaire d'Études Supérieures - SESJ"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CPES" && filiere_bis == "Cycle pluridisciplinaire d'Études Supérieures - Sciences"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CPES" && filiere_bis == "Cycle pluridisciplinaire d'Études Supérieures - Sciences et sociétés"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "CPES" && filiere_bis == "Cycle pluridisciplinaire d'Études Supérieures - Humanités"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "DEJEPS" && filiere_bis == "Vélo tout terrain"){
li.push('33.3 %', '33.3 %', '33.3 %')
}
if (filiere == "DEJEPS" && filiere_bis == "Judo-Jujitsu"){
li.push('nan %', 'nan %', 'nan %')
}
if (filiere == "Cadre Technique" && filiere_bis == "Cadre technique génie de l'environnement marin"){
li.push('90.0 %', '0.0 %', '10.0 %')
}
if (filiere == "Cadre Technique" && filiere_bis == "Cadre technique production et valorisation des ressources marines"){
li.push('90.0 %', '10.0 %', '0.0 %')
}
if (filiere == "Diplôme d'Etablissement" && filiere_bis == "Diplôme d'Etablissement"){
li.push('74.45 %', '5.41 %', '20.14 %')
}
if (filiere == "BTS - Maritime" && filiere_bis == "Pêche et gestion de l'environnement marin"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "BTS - Maritime" && filiere_bis == "Maintenance des systèmes électro-navals"){
li.push('0.0 %', '100.0 %', '0.0 %')
}
if (filiere == "Sciences politiques" && filiere_bis == "Sciences Po / Instituts d'études politiques - Sciences Humaines et Sociales - Grade Master"){
li.push('99.87 %', '0.0 %', '0.13 %')
}
if (filiere == "Sciences politiques" && filiere_bis == "Sciences Po / Instituts d'études politiques - Sciences Humaines et Sociales - Grade Licence"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Formation des écoles supérieure d'art" && filiere_bis == "Formation des écoles supérieure d'art Bac + 3"){
li.push('75.96 %', '6.39 %', '17.67 %')
}
if (filiere == "Formation des écoles supérieure d'art" && filiere_bis == "Formation des écoles supérieure d'art Bac + 5"){
li.push('78.11 %', '4.26 %', '17.6 %')
}
if (filiere == "Licence - STAPS" && filiere_bis == "Sciences et Techniques des Activités Physiques et Sportives"){
li.push('85.55 %', '3.64 %', '10.78 %')
}
if (filiere == "Licence - STAPS" && filiere_bis == "STAPS, Sciences pour l'ingénieur"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Formations des écoles nationales vétérinaires" && filiere_bis == "Formation Bac+6"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Formation valant grade de licence" && filiere_bis == "Formation valant grade de licence"){
li.push('100.0 %', '0.0 %', '0.0 %')
}
if (filiere == "Formation des écoles supérieures de cuisine" && filiere_bis == "Formation des écoles supérieures de cuisine Bac +3"){
li.push('80.77 %', '2.42 %', '16.81 %')
}
if (filiere == "Formation des écoles supérieures de cuisine" && filiere_bis == "Formation des écoles supérieures de cuisine Bac +4"){
li.push('86.3 %', '3.1 %', '10.6 %')
}
if (filiere == "Formations Bac + 3" && filiere_bis == "Archéologie, histoire de l'art, anthropologie"){
li.push('95.19 %', '0.5 %', '4.3 %')
}
if (filiere == "LP - Droit-économie-gestion" && filiere_bis == "Licence professionnelle"){
li.push('45.5 %', '42.4 %', '12.15 %')
}
if (filiere == "Licence - Droit-économie-gestion / Sciences - technologies - santé" && filiere_bis == "Mathématiques"){
li.push('100.0 %', '0.0 %', '0.0 %')
}



return li
//return li
}


function charger_villes()
{

var tab_villes=""; var nb_villes=0; var chaine_liste="";
var dep_texte = document.getElementById("choix_dep").value;
var le_dep = dep_texte;

if(le_dep!="00")
{
//alert(le_dep);
document.getElementById("colonne_gauche").innerHTML = "<div style='width:300px;margin-left:10px; text-align:left;'>Vous avez choisi la filière :<br /><font color='#7030a0'>" + le_dep + "</font></div>";


document.getElementById("colonne_droite").innerHTML = "Général : "+mettre_proba(le_dep)[0]+"<br>";
document.getElementById("colonne_droite").innerHTML +="Pro : "+ mettre_proba(le_dep)[1]+"<br>";
document.getElementById("colonne_droite").innerHTML += "Techno :"+mettre_proba(le_dep)[2]+"<br>";



tab_villes = retour_villes(le_dep).split('|');
nb_villes = tab_villes.length;
//alert(nb_villes);


chaine_liste = "<select id='choix_ville' class='liste' onChange='verif_villes(\"" + dep_texte + "\")'>";



chaine_liste += "<option value='Sélection'>Sélectionner une filière détaillée</option>";


for(var defil=0;defil<nb_villes; defil++)
{


chaine_liste += "<option value='" + tab_villes[defil] + "'>" + tab_villes[defil] + "</option>";
}

chaine_liste += "</select>";
document.getElementById("calque_ville").innerHTML = chaine_liste;


}
else alert("Veuillez préciser une filière");
}



function verif_villes(dep_texte)
{

if(document.getElementById("choix_ville").value != "Sélection")
{





var tab_filieres=""; var nb_filieres=0; var chaine_liste="";
var fil_texte = document.getElementById("choix_ville").value; 
var fil = fil_texte;

document.getElementById("colonne_gauche").innerHTML += "<div style='width:300px;margin-left:10px; text-align:left;'>Vous avez choisi la filière :<br /><font color='#7030a0'>" + fil + "</font></div>";


document.getElementById("colonne_droite").innerHTML = "Général  :"+mettre_proba_detaillee(fil_texte)[0]+"<br>";
document.getElementById("colonne_droite").innerHTML +="Pro : "+mettre_proba_detaillee(fil_texte)[1]+"<br>";
document.getElementById("colonne_droite").innerHTML += "Techno :"+mettre_proba_detaillee(fil_texte)[2]+"<br>";

tab_filieres= retour_fil(fil).split('|');

nb_filieres = tab_filieres.length;


// rajouer un onChange='retour_fil(\"" + fil_texte + "\")' juste apres
//alert("fil_texte : "+fil_texte)
chaine_liste = "<select id='choix_fil' class='liste' onChange='verif_filiere(\"" + fil_texte + "\")'>";
chaine_liste += "<option value='Sélection'>filière ENCORE PLUS détaillée</option>";

for(var defil=0;defil<nb_filieres; defil++)
{

chaine_liste += "<option value=\"" + tab_filieres[defil] + "\">" + tab_filieres[defil] + "</option>";
}


chaine_liste += "</select>";
document.getElementById("troisieme_liste").innerHTML = chaine_liste;


}
else
alert("Veuillez préciser une filière");

}

function verif_filiere(fil_texte){
//fil_texte = BUT-Production

if(document.getElementById("choix_fil").value != "Sélection")
{
filiere_bis = document.getElementById("choix_fil").value
document.getElementById("colonne_gauche").innerHTML = "<div style='width:300px;margin-left:10px; text-align:left;'>Vous avez choisi la filière :<br /><font color='#7030a0'>" + document.getElementById("choix_ville").value + "</font></div>";

document.getElementById("colonne_gauche").innerHTML += "<div style='width:300px;margin-left:10px; text-align:left;'>Vous avez choisi la filiere très détaillée :<br /><font color='#7030a0'>" + filiere_bis + "</font></div>";
document.getElementById("colonne_gauche").innerHTML += "<div style='width:300px;margin-left:10px; text-align:left;'>Pour la ville de :<br /><font color='#7030a0'>" + "<input list=\"lieu_"+filiere_bis+fil_texte+"\" type='text' id='choix_lieu' size=30 placeholder='Veuillez entrer une ville' onChange = 'change_lieu(\"" + filiere_bis + "\")'> "+ "</font></div>";

//alert(fil_texte)
//alert(filiere_bis)
//alert(mettre_proba_bis(fil_texte,filiere_bis)[0])
document.getElementById("colonne_droite").innerHTML = "Général  :"+mettre_proba_bis(fil_texte,filiere_bis)[0]+"<br>";
document.getElementById("colonne_droite").innerHTML +="Pro : "+mettre_proba_bis(fil_texte,filiere_bis)[1]+"<br>";
document.getElementById("colonne_droite").innerHTML += "Techno :"+mettre_proba_bis(fil_texte,filiere_bis)[2]+"<br>";
//alert("fin")
}
else
alert("Veuillez préciser une filière");


}

function change_lieu(filiere){
lieu = document.getElementById("choix_lieu").value
//alert(filiere)Analyses de biologie médicale
alert(lieu) 
document.getElementById("colonne_droite").innerHTML = "Général  :"+mettre_proba_lieu(filiere,lieu)[0]+"<br>";
document.getElementById("colonne_droite").innerHTML +="Pro : "+mettre_proba_lieu(filiere,lieu)[1]+"<br>";
document.getElementById("colonne_droite").innerHTML += "Techno :"+mettre_proba_lieu(filiere,lieu)[2]+"<br>";
fin()
// A FAIRE : FINIR LA FONCTION mettre_proba_lieu POUR METTRE LES DIFFéRENTES PROBAS DES LIEUX --> python 
}
function fin(){
alert("fin")
}