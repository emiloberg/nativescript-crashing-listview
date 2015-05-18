'use strict';

import {inspect} from './debug';

export function getMasterData() {
	return masterData;
}

let masterData = [
	{
		"advice": true,
		"chapters": [
			{
				"advice": true,
				"drugs": true,
				"id": "Allergi_-_Andning_-_ONH/Astma_barn",
				"name": "Astma barn"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Allergi_-_Andning_-_ONH/Astma_vuxna",
				"name": "Astma vuxna"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Allergi_-_Andning_-_ONH/KOL",
				"name": "KOL"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Allergi_-_Andning_-_ONH/Hosta",
				"name": "Hosta"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Allergi_-_Andning_-_ONH/Allergi",
				"name": "Allergi"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Allergi_-_Andning_-_ONH/Anafylaxi",
				"name": "Anafylaxi"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Allergi_-_Andning_-_ONH/Oron_-_nasa_-_hals",
				"name": "\u00d6ron - n\u00e4sa - hals"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Allergi_-_Andning_-_ONH/Allmant_om_Astma-KOL",
				"name": "Allm\u00e4nt om Astma-KOL"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Allergi_-_Andning_-_ONH/Akut_obstruktion_vid_astma",
				"name": "Akut obstruktion vid astma"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Allergi_-_Andning_-_ONH/Rekommenderad_fysisk_traning_vid_astma",
				"name": "Rekommenderad fysisk tr\u00e4ning vid astma"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Allergi_-_Andning_-_ONH/Rekommenderad_fysisk_traning_vid_KOL",
				"name": "Rekommenderad fysisk tr\u00e4ning vid KOL"
			}
		],
		"drugs": true,
		"id": "Allergi_-_Andning_-_ONH",
		"name": "Allergi - Andning - \u00d6NH"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Barn_och_ungdom/",
				"name": ""
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Barn_och_ungdom/Allmant_om_barn_och_lakemedel",
				"name": "Allm\u00e4nt om barn och l\u00e4kemedel"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Barn_och_ungdom/Rekommenderad_fysisk_traning_till_barn_och_unga",
				"name": "Rekommenderad fysisk tr\u00e4ning till barn och unga"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Barn_och_ungdom/Vad_kan_alla_gora_for_sakrare_lakemedelsbehandling_av_barn?",
				"name": "Vad kan alla g\u00f6ra f\u00f6r s\u00e4krare l\u00e4kemedelsbehandling av barn?"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Barn_och_ungdom/Sakerhetsaspekter_nar_barn_behandlas_med_lakemedel",
				"name": "S\u00e4kerhetsaspekter n\u00e4r barn behandlas med l\u00e4kemedel"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Barn_och_ungdom/Praktiska_synpunkter",
				"name": "Praktiska synpunkter"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Barn_och_ungdom/Lakemedelstillforsel_till_barn_med_gastrostomi",
				"name": "L\u00e4kemedelstillf\u00f6rsel till barn med gastrostomi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Barn_och_ungdom/Mer_information",
				"name": "Mer information"
			}
		],
		"drugs": true,
		"id": "Barn_och_ungdom",
		"name": "Barn och ungdom"
	},
	{
		"advice": false,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Blod9/TrombosD",
				"name": "TrombosD"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Blod9/Blodning",
				"name": "Bl\u00f6dning"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Blod9/Anemier",
				"name": "Anemier"
			}
		],
		"drugs": true,
		"id": "Blod9",
		"name": "Blod9"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Diabetes/Insuliner",
				"name": "Insuliner"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Diabetes/Perorala_medel",
				"name": "Perorala medel"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Diabetes/Svar_hypoglykemi",
				"name": "Sv\u00e5r hypoglykemi"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Diabetes/Obesitas",
				"name": "Obesitas"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Riktvarden_och_omvandlingstabell",
				"name": "Riktv\u00e4rden och omvandlingstabell"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Rekommenderad_fysisk_traning_vid_diabetes",
				"name": "Rekommenderad fysisk tr\u00e4ning vid diabetes"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Diabetes_typ_2_behandlingsalgoritm_for_VGR",
				"name": "Diabetes typ 2 behandlingsalgoritm f\u00f6r VGR"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Diabetes_typ_1",
				"name": "Diabetes typ 1"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Diabetes_typ_2",
				"name": "Diabetes typ 2"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Hypoglykemi",
				"name": "Hypoglykemi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Aldre_aldre",
				"name": "\u00c4ldre \u00e4ldre"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Barn",
				"name": "Barn"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Lakemedelsval_vid_typ_2",
				"name": "L\u00e4kemedelsval vid typ 2"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Egenmatning_av_blodglukos",
				"name": "Egenm\u00e4tning av blodglukos"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Diabetes/Mer_information",
				"name": "Mer information"
			}
		],
		"drugs": true,
		"id": "Diabetes",
		"name": "Diabetes"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Endokrinologi/Endokrinologi",
				"name": "Endokrinologi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Endokrinologi/Systemiska_kortikosteroider",
				"name": "Systemiska kortikosteroider"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Endokrinologi/Systemiska_kortikosteroider_till_barn",
				"name": "Systemiska kortikosteroider till barn"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Endokrinologi/Levotyroxin",
				"name": "Levotyroxin"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Endokrinologi/Vitamin_D",
				"name": "Vitamin D"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Endokrinologi/Hypofyssvikt_utlost_av_opioider",
				"name": "Hypofyssvikt utl\u00f6st av opioider"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Endokrinologi/Testosteronsubstitution_vuxna_man",
				"name": "Testosteronsubstitution vuxna m\u00e4n"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Endokrinologi/Tillvaxthormoner",
				"name": "Tillv\u00e4xthormoner"
			}
		],
		"drugs": true,
		"id": "Endokrinologi",
		"name": "Endokrinologi"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Fysisk_aktivitet/",
				"name": ""
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Fysisk_aktivitet/Allmant",
				"name": "Allm\u00e4nt"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Fysisk_aktivitet/Allmanna_rekommendationer_for_vuxna",
				"name": "Allm\u00e4nna rekommendationer f\u00f6r vuxna"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Fysisk_aktivitet/Allmanna_rekommendationer_for_barn",
				"name": "Allm\u00e4nna rekommendationer f\u00f6r barn"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Fysisk_aktivitet/Fysisk_aktivitet_pa_recept_(FaR)",
				"name": "Fysisk aktivitet p\u00e5 recept (FaR)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Fysisk_aktivitet/Diagnosspecifika_rekommendationer",
				"name": "Diagnosspecifika rekommendationer"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Fysisk_aktivitet/Ett_enkelt_satt_att_mata_anstrangning!_Borgskalan",
				"name": "Ett enkelt s\u00e4tt att m\u00e4ta anstr\u00e4ngning! Borgskalan"
			}
		],
		"drugs": true,
		"id": "Fysisk_aktivitet",
		"name": "Fysisk aktivitet"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Candidavaginit",
				"name": "Candidavaginit"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Candidavulvit",
				"name": "Candidavulvit"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Vaginos",
				"name": "Vaginos"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Lichen_sclerosus_i_vulva",
				"name": "Lichen sclerosus i vulva"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Cervicit-Salpingit",
				"name": "Cervicit-Salpingit"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Herpes_genitalis",
				"name": "Herpes genitalis"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Kondylom",
				"name": "Kondylom"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/HPV-vaccin",
				"name": "HPV-vaccin"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Dysmenorre",
				"name": "Dysmenorr\u00e9"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Menorragi",
				"name": "Menorragi"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Menstruationsforskjutning",
				"name": "Menstruationsf\u00f6rskjutning"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Endometriosbehandling",
				"name": "Endometriosbehandling"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/PMS",
				"name": "PMS"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Medelsvar_akne-hirsutism",
				"name": "Medelsv\u00e5r akne-hirsutism"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Graviditetsillamaende",
				"name": "Graviditetsillam\u00e5ende"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Amningsnedlaggning",
				"name": "Amningsnedl\u00e4ggning"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Antikonception",
				"name": "Antikonception"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/Inkontinens",
				"name": "Inkontinens"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Gynekologi/Lokala_ostrogenbristsymtom",
				"name": "Lokala \u00f6strogenbristsymtom"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Gynekologi/",
				"name": ""
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Gynekologi/Candidainfektion",
				"name": "Candidainfektion"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Gynekologi/Lichen_sclerosus",
				"name": "Lichen sclerosus"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Gynekologi/Akne-hirsutis",
				"name": "Akne-hirsutis"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Gynekologi/Rekommenderad_fysisk_traning_i_klimakteriet",
				"name": "Rekommenderad fysisk tr\u00e4ning i klimakteriet"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Gynekologi/Generella_ostrogenbristsymtom",
				"name": "Generella \u00f6strogenbristsymtom"
			}
		],
		"drugs": true,
		"id": "Gynekologi",
		"name": "Gynekologi"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Hjarta_-_karl/PUBLICERAD",
				"name": "PUBLICERAD"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hjarta_-_karl/Lipidrubbningar",
				"name": "Lipidrubbningar"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Hjarta_-_karl/Ischemisk_hjartsjukdom",
				"name": "Ischemisk hj\u00e4rtsjukdom"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hjarta_-_karl/Hjartsvikt",
				"name": "Hj\u00e4rtsvikt"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hjarta_-_karl/Formaksflimmer",
				"name": "F\u00f6rmaksflimmer"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Rekommenderad_fysisk_traning_vid_hjart-karlsjukdom",
				"name": "Rekommenderad fysisk tr\u00e4ning vid hj\u00e4rt-k\u00e4rlsjukdom"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Hypertoni",
				"name": "Hypertoni"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Trombocythammande_medel",
				"name": "Trombocyth\u00e4mmande medel"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Symtomgivande_angina_pectoris",
				"name": "Symtomgivande angina pectoris"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Sekundarprofylax_vid_ischemisk_hjartsjukdom",
				"name": "Sekund\u00e4rprofylax vid ischemisk hj\u00e4rtsjukdom"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Emboliprofylax",
				"name": "Emboliprofylax"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Risskattning_vid_primarprevention",
				"name": "Risskattning vid prim\u00e4rprevention"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Relativ_riskskattning_vid_primarprevention",
				"name": "Relativ riskskattning vid prim\u00e4rprevention"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hjarta_-_karl/Heartscore",
				"name": "Heartscore"
			}
		],
		"drugs": true,
		"id": "Hjarta_-_karl",
		"name": "Hj\u00e4rta - k\u00e4rl"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Hud/Acne_vulgaris",
				"name": "Acne vulgaris"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Rosacea",
				"name": "Rosacea"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Hud/Eksem",
				"name": "Eksem"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Mjukgorare",
				"name": "Mjukg\u00f6rare"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Psoriasis",
				"name": "Psoriasis"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Hud/Svampinfektion",
				"name": "Svampinfektion"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Huvudloss",
				"name": "Huvudl\u00f6ss"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Skabb",
				"name": "Skabb"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Kondylom",
				"name": "Kondylom"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Klamydia",
				"name": "Klamydia"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Hud/Impetigo",
				"name": "Impetigo"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hud/Acne_vulgaris-inflammatorisk_akne",
				"name": "Acne vulgaris-inflammatorisk akne"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hud/Glukokortikoider",
				"name": "Glukokortikoider"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hud/Innunmodulerande_medel",
				"name": "Innunmodulerande medel"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hud/Svampinfektioner",
				"name": "Svampinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hud/Forteckning_ovre_kompressionsforband_och_sarlakningsartiklar_i_Vastra_Gotaland",
				"name": "F\u00f6rteckning \u00f6vre kompressionsf\u00f6rband och s\u00e5rl\u00e4kningsartiklar i V\u00e4stra G\u00f6taland"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Hud/Sarforband",
				"name": "S\u00e5rf\u00f6rband"
			}
		],
		"drugs": true,
		"id": "Hud",
		"name": "Hud"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Infektion/Bakteriella_infektioner",
				"name": "Bakteriella infektioner"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Infektion/Svampinfektioner",
				"name": "Svampinfektioner"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Infektion/Herpesvirusinfektioner",
				"name": "Herpesvirusinfektioner"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Infektion/Maskinfektioner",
				"name": "Maskinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Allmanna_terapirad_for_infektion",
				"name": "Allm\u00e4nna terapir\u00e5d f\u00f6r infektion"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Barn_-_Luftvagsinfektioner",
				"name": "Barn - Luftv\u00e4gsinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Barn_-_Urinvagsinfektioner",
				"name": "Barn - Urinv\u00e4gsinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Barn_-_Hud-_och_mjukdelsinfektioner",
				"name": "Barn - Hud- och mjukdelsinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Barn_-_Herpesinfektioner",
				"name": "Barn - Herpesinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Vuxna_-_Luftvagsinfektioner",
				"name": "Vuxna - Luftv\u00e4gsinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Vuxna_-_Urinvagsinfektioner",
				"name": "Vuxna - Urinv\u00e4gsinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Vuxna_-_Hud-_&_mjukdelsinfektioner",
				"name": "Vuxna - Hud- & mjukdelsinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Borrelia",
				"name": "Borrelia"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Vid_pc-allergi",
				"name": "Vid pc-allergi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Antibiotika_under_graviditet",
				"name": "Antibiotika under graviditet"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Dosering_av_antibiotika_vid_nedsatt_njurfunktion",
				"name": "Dosering av antibiotika vid nedsatt njurfunktion"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Infektion/Herpesinfektioner_hos_vuxna",
				"name": "Herpesinfektioner hos vuxna"
			}
		],
		"drugs": true,
		"id": "Infektion",
		"name": "Infektion"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Tillfallig_forstoppning",
				"name": "Tillf\u00e4llig f\u00f6rstoppning"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Langvarig_forstoppning",
				"name": "L\u00e5ngvarig f\u00f6rstoppning"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Opioidinducerad_forstoppning",
				"name": "Opioidinducerad f\u00f6rstoppning"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Diarre",
				"name": "Diarr\u00e9"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Hemorrojder",
				"name": "Hemorrojder"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Mage_-_tarm/Tarmrengoring",
				"name": "Tarmreng\u00f6ring"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Syrarelaterade_sjukdomar",
				"name": "Syrarelaterade sjukdomar"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/HP-eradikering",
				"name": "HP-eradikering"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Syrarelaterade_sjukdomar_hos_barn",
				"name": "Syrarelaterade sjukdomar hos barn"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Illamaende_vid_rorelsesjuka",
				"name": "Illam\u00e5ende vid r\u00f6relsesjuka"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Illamaende_i_samband_med_cytostatikabehandling",
				"name": "Illam\u00e5ende i samband med cytostatikabehandling"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Illamaende_i_samband_med_migran_och_illamaende_av_annan_genes",
				"name": "Illam\u00e5ende i samband med migr\u00e4n och illam\u00e5ende av annan genes"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Mage_-_tarm/Inflammatorisk_tarmsjukdom",
				"name": "Inflammatorisk tarmsjukdom"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Forstoppning",
				"name": "F\u00f6rstoppning"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/IBS_\u2013_Irritable_Bowel_Syndrome",
				"name": "IBS \u2013 Irritable Bowel Syndrome"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Ulcus",
				"name": "Ulcus"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Profylax_med_PPI_vid_behandling_med_COX-hammare",
				"name": "Profylax med PPI vid behandling med COX-h\u00e4mmare"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Profylax_med_PPI_vid_lagdos_ASA-terapi",
				"name": "Profylax med PPI vid l\u00e5gdos ASA-terapi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Gastroesofageal_refluxsjukdom_med_esofagit_(endoskopiverifierad)",
				"name": "Gastroesofageal refluxsjukdom med esofagit (endoskopiverifierad)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Symtomatisk_behandling_av_gastroesofageal_refluxsjukdom_utan_esofagit",
				"name": "Symtomatisk behandling av gastroesofageal refluxsjukdom utan esofagit"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Dyspepsi",
				"name": "Dyspepsi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/PPI_vid_svaljningssvarigheter",
				"name": "PPI vid sv\u00e4ljningssv\u00e5righeter"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Interaktion_PPI_-_klopidogrel",
				"name": "Interaktion PPI - klopidogrel"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Utsattning_av_PPI",
				"name": "Uts\u00e4ttning av PPI"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Illamaende",
				"name": "Illam\u00e5ende"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Gastroesofageal_reflux_hos_barn",
				"name": "Gastroesofageal reflux hos barn"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Mage_-_tarm/Inflammatorisk_tarmsjukdom_(IBD)",
				"name": "Inflammatorisk tarmsjukdom (IBD)"
			}
		],
		"drugs": true,
		"id": "Mage_-_tarm",
		"name": "Mage - tarm"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": true,
				"drugs": true,
				"id": "Neurologi/Migran",
				"name": "Migr\u00e4n"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Neurologi/Tia_och_ischemisk_stroke",
				"name": "Tia och ischemisk stroke"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Neurologi/Nydebuterad_epilepsi",
				"name": "Nydebuterad epilepsi"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Neurologi/Parkinsons_sjukdom",
				"name": "Parkinsons sjukdom"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Neurologi/Restless_legs_syndrom",
				"name": "Restless legs syndrom"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Neurologi/Essentiell_tremor",
				"name": "Essentiell tremor"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Neurologi/Spasticitet",
				"name": "Spasticitet"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Neurologi/Sekundarprofylax_vid_stroke-TIA",
				"name": "Sekund\u00e4rprofylax vid stroke-TIA"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Neurologi/Epilepsi",
				"name": "Epilepsi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Neurologi/Restless_legs_syndrom_(RLS)",
				"name": "Restless legs syndrom (RLS)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Neurologi/Essentiell_tremor_(ET)",
				"name": "Essentiell tremor (ET)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Neurologi/Multipel_Skleros",
				"name": "Multipel Skleros"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Neurologi/Rekommenderad_fysisk_traning_vid_neurologisk_sjukdom",
				"name": "Rekommenderad fysisk tr\u00e4ning vid neurologisk sjukdom"
			}
		],
		"drugs": true,
		"id": "Neurologi",
		"name": "Neurologi"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": true,
				"drugs": true,
				"id": "Osteoporos/Osteoporos",
				"name": "Osteoporos"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Osteoporos/Benskorhet_och_barn",
				"name": "Bensk\u00f6rhet och barn"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Osteoporos/Rekommenderad_fysisk_traning_vid_osteoporos",
				"name": "Rekommenderad fysisk tr\u00e4ning vid osteoporos"
			}
		],
		"drugs": true,
		"id": "Osteoporos",
		"name": "Osteoporos"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": true,
				"drugs": true,
				"id": "Psykiatri/Affektiva_syndrom",
				"name": "Affektiva syndrom"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Psykiatri/Langvarig_angest",
				"name": "L\u00e5ngvarig \u00e5ngest"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Psykiatri/Kortvarig_oro_-_angestproblematik",
				"name": "Kortvarig oro - \u00e5ngestproblematik"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Psykiatri/Somnstorning",
				"name": "S\u00f6mnst\u00f6rning"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Psykiatri/Psykotiska_syndrom",
				"name": "Psykotiska syndrom"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Psykiatri/Demenssjukdomar",
				"name": "Demenssjukdomar"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Psykiatri/Angestsjukdomar",
				"name": "\u00c5ngestsjukdomar"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Psykiatri/Lakemedel_vid_ADHD",
				"name": "L\u00e4kemedel vid ADHD"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Psykiatri/Alkohol_och_tobak",
				"name": "Alkohol och tobak"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Psykiatri/Rekommenderad_fysisk_traning_vid_psykiska_tillstand_och_sjukdomar",
				"name": "Rekommenderad fysisk tr\u00e4ning vid psykiska tillst\u00e5nd och sjukdomar"
			}
		],
		"drugs": true,
		"id": "Psykiatri",
		"name": "Psykiatri"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Reumatologi/Reumatologi",
				"name": "Reumatologi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Reumatologi/Kortison_intra-_och_periartikulart",
				"name": "Kortison intra- och periartikul\u00e4rt"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Reumatologi/Kortison_peroralt",
				"name": "Kortison peroralt"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Reumatologi/Giktlakemedel",
				"name": "Giktl\u00e4kemedel"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Reumatologi/DMARD",
				"name": "DMARD"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Reumatologi/Rekommenderad_fysisk_traning_vid_reumatoid_artrit_och_spondartrit",
				"name": "Rekommenderad fysisk tr\u00e4ning vid reumatoid artrit och spondartrit"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Reumatologi/Mer_information",
				"name": "Mer information"
			}
		],
		"drugs": true,
		"id": "Reumatologi",
		"name": "Reumatologi"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Smarta/Latt_till_mattlig_akut_nociceptiv_smarta",
				"name": "L\u00e4tt till m\u00e5ttlig akut nociceptiv sm\u00e4rta"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Smarta/Svar_akut_nociceptiv_smarta",
				"name": "Sv\u00e5r akut nociceptiv sm\u00e4rta"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Smarta/Neuropatisk_smarta",
				"name": "Neuropatisk sm\u00e4rta"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Smarta/Lokalanestetika",
				"name": "Lokalanestetika"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Smarta/Allmant",
				"name": "Allm\u00e4nt"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Smarta/Opioider",
				"name": "Opioider"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Smarta/Opiodinducerad_obstipation",
				"name": "Opiodinducerad obstipation"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Smarta/Opioidinducerat_illamaende",
				"name": "Opioidinducerat illam\u00e5ende"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Smarta/Akut_smarta",
				"name": "Akut sm\u00e4rta"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Smarta/Langvarig_smarta",
				"name": "L\u00e5ngvarig sm\u00e4rta"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Smarta/Barn_med_akut_smarta",
				"name": "Barn med akut sm\u00e4rta"
			}
		],
		"drugs": true,
		"id": "Smarta",
		"name": "Sm\u00e4rta"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": true,
				"drugs": true,
				"id": "Tandvard/Kariesprevention",
				"name": "Kariesprevention"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Tandvard/Muntorrhet",
				"name": "Muntorrhet"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Tandvard/Smarta",
				"name": "Sm\u00e4rta"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Slemhinnesar",
				"name": "Slemhinnes\u00e5r"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Aftosa_sar",
				"name": "Aft\u00f6sa s\u00e5r"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Lokal_smartbehandling",
				"name": "Lokal sm\u00e4rtbehandling"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Systemisk_smartbehandling",
				"name": "Systemisk sm\u00e4rtbehandling"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Blodningsrisk",
				"name": "Bl\u00f6dningsrisk"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Antibiotikabehandling",
				"name": "Antibiotikabehandling"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Antibiotikaprofylax",
				"name": "Antibiotikaprofylax"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Svampinfektioner",
				"name": "Svampinfektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Tandvard/Mer_information",
				"name": "Mer information"
			}
		],
		"drugs": true,
		"id": "Tandvard",
		"name": "Tandv\u00e5rd"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Urologi/LUTS_-_Benign_prostata-hyperplasi",
				"name": "LUTS - Benign prostata-hyperplasi"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Urologi/Overaktiv_blasa_och_inkontinens",
				"name": "\u00d6veraktiv bl\u00e5sa och inkontinens"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Urologi/Lokalt_avancerad_prostatacancer",
				"name": "Lokalt avancerad prostatacancer"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Urologi/Metastaserad_prostatacancer",
				"name": "Metastaserad prostatacancer"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Urologi/LUTS_(Lower_urinary_tract_symptoms)",
				"name": "LUTS (Lower urinary tract symptoms)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Urologi/Overaktiv_blasa",
				"name": "\u00d6veraktiv bl\u00e5sa"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Urologi/Prostatacancer",
				"name": "Prostatacancer"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Urologi/Erektil_dysfunktion",
				"name": "Erektil dysfunktion"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Urologi/Nykturi",
				"name": "Nykturi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Urologi/Kroniskt_backensmartsyndrom_(kronisk_abakteriell_prostatit)",
				"name": "Kroniskt b\u00e4ckensm\u00e4rtsyndrom (kronisk abakteriell prostatit)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Urologi/Primar_nattlig_enures_hos_barn_over_6_ar",
				"name": "Prim\u00e4r nattlig enures hos barn \u00f6ver 6 \u00e5r"
			}
		],
		"drugs": true,
		"id": "Urologi",
		"name": "Urologi"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Vaccin/Vacciner_mot_virusinfektioner",
				"name": "Vacciner mot virusinfektioner"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Vaccin/Vacciner_mot_bakterieinfektioner",
				"name": "Vacciner mot bakterieinfektioner"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Vaccin/Kombinerade_vacciner_mot_bakterier_och_virus",
				"name": "Kombinerade vacciner mot bakterier och virus"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Influensavaccin",
				"name": "Influensavaccin"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/TBE",
				"name": "TBE"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Hepatit_A_vaccin_infor_utlandsresa",
				"name": "Hepatit A vaccin inf\u00f6r utlandsresa"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Hepatit_A+B",
				"name": "Hepatit A+B"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/MPR-vaccin_infor_utlandsresa",
				"name": "MPR-vaccin inf\u00f6r utlandsresa"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Vattkoppor",
				"name": "Vattkoppor"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/HPV-vaccin",
				"name": "HPV-vaccin"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Rotavirusvaccin",
				"name": "Rotavirusvaccin"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Vaccination_mot_difteri_och_stelkramp",
				"name": "Vaccination mot difteri och stelkramp"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Meningokockvaccin",
				"name": "Meningokockvaccin"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vaccin/Riktlinjer_uppvaccination_av_ofullstandigt_vaccinerade_barn",
				"name": "Riktlinjer uppvaccination av ofullst\u00e4ndigt vaccinerade barn"
			}
		],
		"drugs": true,
		"id": "Vaccin",
		"name": "Vaccin"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Vatskor_och_nutrition/",
				"name": ""
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Vatskebehandling",
				"name": "V\u00e4tskebehandling"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Undernaring",
				"name": "Undern\u00e4ring"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Nutritionsbedomning",
				"name": "Nutritionsbed\u00f6mning"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Bedomning_av_energibehov",
				"name": "Bed\u00f6mning av energibehov"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Val_av_lamplig_tillforselvag_(Oral,_enteral,_parenteral)",
				"name": "Val av l\u00e4mplig tillf\u00f6rselv\u00e4g (Oral, enteral, parenteral)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Parenteral_nutrition",
				"name": "Parenteral nutrition"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Val_av_losning_for_parenteral_nutrition",
				"name": "Val av l\u00f6sning f\u00f6r parenteral nutrition"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Vatskor_och_nutrition/Mer_information",
				"name": "Mer information"
			}
		],
		"drugs": true,
		"id": "Vatskor_och_nutrition",
		"name": "V\u00e4tskor och nutrition"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Aldre_och_lakemedel/",
				"name": ""
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Allmanna_rad",
				"name": "Allm\u00e4nna r\u00e5d"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Njurfunktion",
				"name": "Njurfunktion"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Rad_for_forbattrad_lakemedelsbehandling",
				"name": "R\u00e5d f\u00f6r f\u00f6rb\u00e4ttrad l\u00e4kemedelsbehandling"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Utsattning",
				"name": "Uts\u00e4ttning"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Rekommenderad_fysisk_traning_for_aldre",
				"name": "Rekommenderad fysisk tr\u00e4ning f\u00f6r \u00e4ldre"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Lakemedel_som_bor_undvikas_vid_behandling_av_aldre_enligt_socialstyrelsens_kvalitetsindikatorer",
				"name": "L\u00e4kemedel som b\u00f6r undvikas vid behandling av \u00e4ldre enligt socialstyrelsens kvalitetsindikatorer"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Insatser_for_battre_lakemedelsanvandning",
				"name": "Insatser f\u00f6r b\u00e4ttre l\u00e4kemedelsanv\u00e4ndning"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Exempel_pa_lakemedel_med_hog_biverkningsrisk_hos_aldre",
				"name": "Exempel p\u00e5 l\u00e4kemedel med h\u00f6g biverkningsrisk hos \u00e4ldre"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Exempel_pa_lakemedel_med_risk_for_konfusion",
				"name": "Exempel p\u00e5 l\u00e4kemedel med risk f\u00f6r konfusion"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Exempel_pa_lakemedel_med_ofta_tveksam_indikation_hos_aldre",
				"name": "Exempel p\u00e5 l\u00e4kemedel med ofta tveksam indikation hos \u00e4ldre"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Exempel_pa_symtom_som_kan_forstarkas_av_lakemedel_hos_aldre",
				"name": "Exempel p\u00e5 symtom som kan f\u00f6rst\u00e4rkas av l\u00e4kemedel hos \u00e4ldre"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Lakemedel_att_observera_vid_vatskeforlust",
				"name": "L\u00e4kemedel att observera vid v\u00e4tskef\u00f6rlust"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Trygghetslakemedel_vid_livets_slut",
				"name": "Trygghetsl\u00e4kemedel vid livets slut"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Aldre_och_lakemedel/Tandvard_vid_muntorrhet_hos_aldre",
				"name": "Tandv\u00e5rd vid muntorrhet hos \u00e4ldre"
			}
		],
		"drugs": true,
		"id": "Aldre_och_lakemedel",
		"name": "\u00c4ldre och l\u00e4kemedel"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Ogon/Infektion",
				"name": "Infektion"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Ogon/Allergi",
				"name": "Allergi"
			},
			{
				"advice": true,
				"drugs": true,
				"id": "Ogon/Torra_ogon",
				"name": "Torra \u00f6gon"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Ogon/Diagnostika",
				"name": "Diagnostika"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Ogon/Bakteriella_infektioner",
				"name": "Bakteriella infektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Ogon/Blefarit",
				"name": "Blefarit"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Ogon/Virala_infektioner",
				"name": "Virala infektioner"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Ogon/Ovriga_rad",
				"name": "\u00d6vriga r\u00e5d"
			}
		],
		"drugs": true,
		"id": "Ogon",
		"name": "\u00d6gon"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Alkohol_och_Tobak/Alkohol",
				"name": "Alkohol"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Alkohol_och_Tobak/Nikotin",
				"name": "Nikotin"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Alkohol_och_Tobak/Allmant",
				"name": "Allm\u00e4nt"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Alkohol_och_Tobak/Avvanjningsstod_for_alkohol",
				"name": "Avv\u00e4njningsst\u00f6d f\u00f6r alkohol"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Alkohol_och_Tobak/Avvanjningsstod_for_tobak",
				"name": "Avv\u00e4njningsst\u00f6d f\u00f6r tobak"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Alkohol_och_Tobak/Rekommenderad_fysisk_traning_vid_beroendetillstand",
				"name": "Rekommenderad fysisk tr\u00e4ning vid beroendetillst\u00e5nd"
			}
		],
		"drugs": true,
		"id": "Alkohol_och_Tobak",
		"name": "Alkohol och Tobak"
	},
	{
		"advice": false,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "TEMP:_Huvudtitel/Forsta_Rubrik_Bla_Versaler",
				"name": "F\u00f6rsta Rubrik Bl\u00e5 Versaler"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "TEMP:_Huvudtitel/2Rubrik",
				"name": "2Rubrik"
			}
		],
		"drugs": true,
		"id": "TEMP:_Huvudtitel",
		"name": "TEMP: Huvudtitel"
	},
	{
		"advice": false,
		"chapters": [
			{
				"advice": false,
				"drugs": true,
				"id": "Alla_fallt/Rubrik",
				"name": "Rubrik"
			},
			{
				"advice": false,
				"drugs": true,
				"id": "Alla_fallt/2_Rubrik",
				"name": "2 Rubrik"
			}
		],
		"drugs": true,
		"id": "Alla_fallt",
		"name": "Alla f\u00e4llt"
	},
	{
		"advice": true,
		"chapters": [
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Behandling_av_venos_tromboembolism_hos_vuxna",
				"name": "Behandling av ven\u00f6s tromboembolism hos vuxna"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Andra_perorala_antikoagulantia_vid_VTE",
				"name": "Andra perorala antikoagulantia vid VTE"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Trombosprofylax_vid_elektiv_proteskirurgi_(hoft,_kna)",
				"name": "Trombosprofylax vid elektiv proteskirurgi (h\u00f6ft, kn\u00e4)"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Antikoagulantia_vid_njurinsufficiens",
				"name": "Antikoagulantia vid njurinsufficiens"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Renal_anemi",
				"name": "Renal anemi"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Vitamin_B12-brist",
				"name": "Vitamin B12-brist"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Folatbrist",
				"name": "Folatbrist"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Jarnbrist",
				"name": "J\u00e4rnbrist"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Anemi_hos_barn",
				"name": "Anemi hos barn"
			},
			{
				"advice": true,
				"drugs": false,
				"id": "Blod/Jarnbrist_hos_barn",
				"name": "J\u00e4rnbrist hos barn"
			}
		],
		"drugs": false,
		"id": "Blod",
		"name": "Blod"
	}
];
