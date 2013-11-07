﻿define(
({
		viewer: {
			loading: {
				step1: "LADATAAN SOVELLUSTA",
				step2: "LADATAAN DATAA",
				step3: "ALUSTETAAN KIERROSTA",
				loadBuilder: "VAIHDETAAN RAKENNUSTILAAN",
				fail: "Karttakierroksen lataus epäonnistui",
				failButton: "Yritä uudelleen"
			},
			errors: {
				boxTitle: "Tapahtui virhe",
				portalSelf: "Vakavavirhe: portaalin määritysten haku epäonnistui",
				invalidConfig: "Vakava virhe: virheellinen kokoonpano",
				invalidConfigOwner: "Vakava virhe: virheellinen kokoonpano (valtuutettu omistaja vaaditaan)",
				invalidConfigNoWebmap: "Vakava virhe: virheellinen kokoonpano (web-karttaa tai sovelluksen tunnistetta ei ole määritetty index.html-tiedostoon)",
				createMap: "Karttaa ei voi luoda",
				invalidApp: "Vakava virhe: sovellusta ei voi ladata",
				noLayer: "Web-kartta ei sisällä kelvollista datatasoa karttakierrokselle.",
				noLayerMobile: "Tervetuloa Karttakierros-Web-sovellukseen. Sovellusta ei ole määritetty. Karttakierroksen muodostusohjelmaa ei tueta mobiililaitteissa.",
				noLayerView: "Tervetuloa Karttakierros-Web-sovellukseen.<br />Sovellusta ei ole vielä määritetty.",
				appSave: "Virhe tallennettaessa Web-sovellusta",
				mapSave: "Virhe tallennettaessa Web-karttaa",
				featureServiceLoad: "Virhe ladattaessa kohdepalvelua",
				notAuthorized: "Sinulla ei ole tämän sovelluksen käyttöoikeuksia",
				oldBrowserTitle: "Selainta ei tueta täysin",
				noBuilderIE8: "Internet Explorer ei tue karttakierroksen muodostusohjelmaa ennen versiota 9.",
				ie10Win7Explain: "Internet Explorer 10 ei tue Map Tour -mallipohjan interaktiivista rakennustilaa Windows 7 -käyttöjärjestelmässä, kun aineistolähteenä on liitteitä sisältävä kohdepalvelu. Jotta voit käyttää liitteitä sisältävää kohdepalvelua, sinun on <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>pakotettava asiakirjatila manuaalisesti Internet Explorer 9:n standardeihin</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>päivitettävä takaisin Internet Explorer 9:ään</a> tai päivitettävä Windows 8:aan.",
				oldBrowserExplain: "Tämä selain ei tue automaattista pikkukuvien luontia karttakierrokseesi lataamistasi kuvista. Voit luoda karttakierroksen käyttämällä tätä selainta, mutta sinun on järjestettävä erillinen pikkukuva kullekin ladattavista kuvista.",
				oldBrowserExplain2: "Paranna käyttäjäkokemustasi <a href='http://browsehappy.com/' target='_blank'>päivittämällä selaimesi</a> tai <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>aktivoimalla Google Chrome Frame Internet Exploreria varten</a>.",
				oldBrowserExplain3: "Map Tour -mallipohjan rakentaja ei toimi Windows XP:n Internet Explorer 10:ssä.",
				oldBrowserClose: "Sulje"
			},
			mobileHTML: {
				showIntro: "NÄYTÄ OTSIKKO",
				hideIntro: "PIILOTA OTSIKKO",
				navList: "Luettelo",
				navMap: "Kartta",
				navInfo: "Å_Medias_ö",
				introStartBtn: "Aloitus"
			},
			desktopHTML: {
				storymapsText: "Tarinakartta",
				builderButton: "Vaihda muodostusohjelman tilaan",
				bitlyTooltip: "Hanki lyhyt linkki sovellukseen",
				bitlyStartIndex: "Å_Start on point no._ö"
			},
			builderHTML: {
				panelHeader: "SOVELLUKSEN MÄÄRITYS",
				buttonSave: "TALLENNA",
				buttonDiscard: "PERUUTA",
				buttonSettings: "Asetukset",
				buttonView: "Näytä tila",
				buttonItem: "Avaa web-sovelluskohde",
				buttonHelp: "Ohje",
				buttonOrganize: "Järjestä",
				buttonAdd: "Lisää",
				buttonImport: "Tuo",
				buttonImportDisabled: "Tuonti ei ole käytettävissä käytettäessä liitteitä sisältävää kohdepalvelua",
				dataEditionDisabled: "Tietojen muokkaus on poistettu käytöstä CSV-tietolähteessä",
				dataSourceWarning: "Karttakierroksen datatasoa on muutettu. Jos kohteiden tunnukset eivät ole samat, nollaa järjestys ja piilotetut kentät <b>Järjestä</b>-valikon avulla. Jos kenttien nimet eivät täsmää, nollaa kenttien asetukset <b>Asetukset-näytön datavälilehdessä</b>.",
				organizeWarning: "Å_One or multiple points added outside of the interactive builder are hidden._ö",
				dataPicError0a: "Tämä kierros sisältää <b>%NB%</b> yhteensopimatonta kuvan URL-osoitetta.",
				dataPicError0b: "Tämä kierros saattaa sisältää <b>%NB%</b> yhteensopimatonta kuvan URL-osoitetta.",
				dataPicError1: "Karttakierros edellyttää nyt, että kuvan URL-osoite päättyy johonkin seuraavista tunnisteista: .jp(e)g, .png, .gif tai .bmp.",
				dataPicError2: "Tämä vaatimus ei vaikuta nykyiseen julkaistuun karttakierrokseesi. Voidaksesi kuitenkin käyttää interaktiivista muodostusohjelmaa sinun on ensin ratkaistava URL-ongelma tekemällä jompikumpi seuraavista toimista:",
				dataPicError3: "Muokkaa URL-osoitteita",
				dataPicError4: "Å_This will add <i>#isImage</i> to the end of unsupported picture URLs. Most server support URL appendages. However, once you have performed that action, you should verify that the updated picture URLs are functional by navigating through your points. If each pictures loads, you can now save the Map Tour. If <b>pictures are broken, don’t save the Map Tour</b>. Instead, reload the builder and perform the second action._ö",
				dataPicError5: "Rajoita kierros kuviin",
				dataPicError6: "Kun valitset tämän vaihtoehdon, kaikki URL-osoitteet tulkitaan kuviksi. Et voi kuitenkaan lisätä videoita interaktiivisen muodostusohjelman avulla. Voit peruuttaa tämän, mikäli muutat mielesi ja haluat lisätä videon myöhemmin.",
				dataPicError7: "Karttakierroksesi on rajoitettu kuviin eikä videoita voi käyttää. Jos haluat poistaa rajoituksen, tarkista ennen karttakierroksen tallentamista, että kaikki kuvasi latautuvat oikein. Voit tarvittaessa ottaa rajoituksen uudelleen käyttöön myöhemmin.",
				dataPicError8: "Poista kuvarajoitus",
				dataPicError9: "Jos nämä URL-osoitteet osoittavat videoihin, voit jättää tämän varoituksen huomiotta. Jos ne osoittavat kuvaan, tee jompikumpi seuraavista toimista:",
				modalCancel: "Peruuta",
				modalApply: "Käytä",
				organizeHeader: "Järjestä kierros",
				organizeGeneralCaption: "Käytä vetämistä ja tiputtamista kierroksen pisteiden lajittelemiseksi",
				organizeDelete: "Poista",
				organizeHide: "Piilota",
				organizeReset: "Nollaa järjestys ja piilotetut pisteet",
				addMaxPointReached: "Olet saavuttanut kuvakejoukon valtuuttaman enimmäismäärän pisteitä etkä voi lisätä toista kierroksen pistettä.<br /><br />Huomaa, että jos poistat olemassa olevat pisteet, sinun on ladattava sovellus uudelleen.",
				addMaxPointReachedMobile: "Olet saavuttanut valtuutettujen pisteiden enimmäismäärän etkä voi lisätä tätä kuvaa.",
				addClose: "Sulje",
				addHeader: "Lisää uusi reittipiste",
				addTabPicture: "Media",
				addTabInformation: "Tiedot",
				addTabLocation: "Sijainti",
				addSelectCaption: "Valitse tai pudota kuva",
				addNoteVideo: "Å_Consult Help for instructions on using videos_ö",		
				addSelectCaptionNoFileReader: "Å_Select picture_ö",	
				addChangePhoto: "Vaihda kuva ja pikkukuva",
				addPictureResolutionIntro: "Kuvan resoluutio on vaadittua suurempi:",
				addPictureResolutionOldBrowser: "Kuvan resoluutio on vaadittua suurempi. Optimoi karttakierroskokemuksesi määrittämällä resoluutioksi pienempi kuin %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Vaihda kuvan resoluutioksi %RESOLUTION%",
				addPictureResolutionKeep: "Säilytä alkuperäinen resoluutio %RESOLUTION%",
				addSelectThumbnail: "Valitse pikkukuva",
				addNoThumbSelected: "Pikkukuvaa ei ole valittu",
				addThumbSelected: "Valitut",
				addCameraSettingsHeader: "KAMERAN ASETUKSET",
				addThumbnailHeader: "PIKKUKUVA",
				addLabelPicUrl: "Kuva",
				addLabelThumbUrl: "Pikkukuva",
				addTextPlaceholderUrl: "Anna kuvan URL-osoite",
				addTextPlaceholderUrl2: "Anna Youtube-sivun URL-osoite",
				addTextPlaceholderUrl3: "Anna Vimeo-sivun URL-osoite",
				addTextPlaceholderUrl4: "Anna upotetun videon URL-osoite",
				addLabelVideo: "Video",
				addMediaVideoOther: "Muu",
				addMediaVideoHelp: "Tarkista URL-osoite ja hae oletuspikkukuva",
				addMediaVideoHelpTooltip1: "Tarkistus onnistui",
				addMediaVideoHelpTooltip2: "Tarkistus epäonnistui",
				addMediaVideoHelpTooltip4: "Etsi videon upotusasetus ja kopioi koodiin sisältyvä videon URL-osoite",
				addLabelName: "Nimi",
				addLabelDescription: "Seloste",
				addTextPlaceholder: "Kirjoita jotain",
				addLocatePlaceholder: "Etsi osoite tai paikka",
				addPinColor: "Väri",
				addLatitude: "Leveysaste",
				addLongitude: "Pituusaste",
				addLatitudePlaceholder: "esim. 34.056",
				addLongitudePlaceholder: "esim. -117.195",
				addUploading: "Ladataan kierroksen pistettä palvelimelle",
				addSave: "Lisää reittipiste",
				addMobileUploading: "Ladataan kuvaa palvelimelle",
				addMobileName: "Anna nimi",
				addMobileNameMandatory: "Virhe, anna nimi.",
				addMobileError: "Jossain tapahtui valitettavasti virhe.",
				settingsHeader: "Sovellusasetukset",
				settingsTabLayout: "Asettelu",
				settingsTabColor: "Värit",
				settingsTabLogo: "Ylätunniste",
				settingsTabFields: "Data",
				settingsTabExtent: "Laajuus",
				settingsTabZoom: "Zoomaustaso",
				settingsLayoutExplain: "Valitse haluamasi sovelluksen asettelu.",
				settingsLayoutProfessional: "Kolmen ruudun asettelu",
				settingsLayoutModern: "Integroitu asettelu",
				settingsLayoutSelected: "Valittu asettelu",
				settingsLayoutSelect: "Valitse tämä asettelu",
				settingsLayoutNote: "Huomaa, että videoita käyttävissä pisteissä kyltti sijoitetaan aina videon alapuolelle, vaikka tätä asetusta ei olisi valittu.",
				settingsLayoutLocBtn: "Å_Display a locate button on supported browser_ö",
				settingsLayoutLocBtnHelp: "Å_That functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)._ö",
				settingsColorExplain: "Muuta ulkoasua valitsemalla ennalta määritetty teema tai luo omasi.",
				settingsLabelColor: "Ylätunnisteen, sisällön ja alatunnisteen värit",
				settingsLogoExplain: "Mukauta ylätunnisteen logo (enimmäiskoko on 250 x 50 pikseliä).",
				settingsLogoEsri: "Esri-logo",
				settingsLogoNone: "Ei logoa",
				settingsLogoCustom: "Mukautettu logo",
				settingsLogoCustomPlaceholder: "Kuvan URL",
				settingsLogoCustomTargetPlaceholder: "Click-through-linkki",
				settingsLogoSocialExplain: "Mukauta ylätunnisteen oikean yläkulman linkki.",
				settingsLogoSocialText: "Teksti",
				settingsLogoSocialLink: "Linkki",
				settingsLogoSocialDisabled: "Järjestelmänvalvoja on poistanut tämän toiminnon käytöstä",
				settingsDataFieldsExplain: "Valitse valokuvan nimi-, seloste- ja värikentät.",
				settingsDataFieldsError: "Sovellus ei pysty määrittämään sopivaa nimeä, selostetta tai väritietoja. Valitse tässä käytettävät kentät. Näitä asetuksia voi muuttaa myöhemmin.",
				settingsFieldsLabelName: "Nimi",
				settingsFieldsLabelDescription: "Seloste",
				settingsFieldsLabelColor: "Väri",
				settingsFieldsReset: "Nollaa kenttien valinta",
				settingsExtentExplain: "Määritä karttakierroksen alkuperäinen laajuus alla olevan vuorovaikutteisen kartan avulla.",
				settingsExtentExplainBottom: "Määrittämäsi laajuus määrittää web-kartan alkuperäisen laajuuden. Huomaa, että tätä laajuutta käytetään vain, jos se sisältää kierroksen ensimmäisen pisteen. Muussa tapauksessa kierros avautuu ensimmäiseen pisteeseen kohdistettuna.",
				settingsExtentDateLineError: "Laajuus ei saa ylittää 180° pituusasteen meridiaania",
				settingsExtentDateLineError2: "Virhe laajuuden laskennassa",
				settingsExtentDrawBtn: "Piirrä uusi laajuus",
				settingsExtentModifyBtn: "Muokkaa laajuutta",
				settingsExtentApplyBtn: "Esikatsele karttakierroksella",
				settingsExtentUseMainMap: "Käytä pääkartan laajuutta",
				settingsZoomExplain: "Määritä zoomaus johdannon jälkeisille tarinan pisteille (valinnainen).",
				settingsLabelZoom: "Mittakaava/taso",
				settingsZoomFirstValue: "Ei mitään",
				settingsFieldError: "Valitse kenttä jokaisesta luettelosta",
				dataExplain: "Kohdepalvelu lisätään web-karttaasi. Sitä ei jaeta kenenkään kanssa, ja vain sinulla on sen lisäys-, muokkaus- ja poisto-oikeudet.<br /><br />Jos muutat sovelluksen jakamisoikeuksia, järjestelmä kysyy, haluatko päivittää kohdepalvelusi jakamisasetuksia. Tämä on pakollinen toiminto, jotta muut käyttäjät voivat käyttää tietojasi. Vain sinulla on muokkausoikeudet.",
				dataNameLbl: "Palvelun nimi",
				dataFolderListLbl: "Kansio",
				dataFolderListFetching: "Haetaan kansioita...",
				dataRootFolder: "Juuri",
				dataNameError: "Anna kohdepalvelulle nimi",
				dataFolderError: "Valitse kelvollinen kansio",
				dataSrcContainsInvalidChar: "Kohdepalvelun nimi sisältää vähintään yhden virheellisen merkin (-, <, >, #, %, :, \", ?, &, +, / tai \).",
				dataSrvAlreadyExistsError: "Tämänniminen palvelu on jo olemassa organisaatiossa. Valitse eri nimi.",
				dataBtnSave: "Luo palvelu",
				dataFooterProgress: "Luonti on käynnissä",
				dataFooterSucceed: "Luonti onnistui. Ladataan",
				dataFooterError: "Luonti epäonnistui. Yritä uudelleen.",
				tabError: "Tarkista virheet kaikista välilehdistä",
				introRecordBtn: "Esittely",
				introRecordActivate: "Käytä ensimmäistä pistettä aloituskohtana (ei näy pyörivässä näkymässä)"
			},
			addPopupJS: {
				uploadingPicture: "Ladataan kuvaa palvelimelle",
				uploadSuccess: "Palvelimelle lataus onnistui",
				uploadError: "Virhe ladattaessa kuvaa palvelimelle",
				uploadError2: "Å_Error adding the feature (invalid html tag)_ö",
				notJpg: "Valitse palvelimelle ladattava jpeg-valokuva",
				errorNoPhoto: "Valitse ladattava kuva",
				errorNoThumbnail: "Valitse ladattava pikkukuva",
				errorInvalidPicUrl: "Å_Enter a valid picture (starts with http(s)://, ends with jpg, png, gif or bmp). You can end the URL with '#isImage' to override that rule._ö",
				errorInvalidThumbUrl: "Anna kelvollinen pikkukuva (alkaa merkkijonolla http(s):// ja päättyy tunnisteeseen jpg, png, gif tai bmp).",
				errorInvalidVideoUrl: "Anna kelvollinen videon URL-osoite (alkaa merkeillä http(s)://)",
				errorNoName: "Anna tälle reittipisteelle nimi",
				errorNoDescription: "Anna tämän kierroksen pisteen seloste",
				errorNoLocation: "Määritä tämän kierroksen pisteen sijainti"
			},
			builderJS: {
				noPendingChange: "Ei odottavaa muutosta",
				unSavedChangeSingular: "1 tallentamaton muutos",
				unSavedChangePlural: "tallentamattomat muutokset",
				popoverDiscard: "Haluatko varmasti hylätä kaikki tallentamattomat muutokset?",
				yes: "Kyllä",
				no: "Ei",
				popoverLoseSave: "Kun avaat katseluohjelman, kaikki tallentamattomat muutokset häviävät.",
				ok: "OK",
				popoverSaveWhenDone: "Älä unohda tallentaa, kun olet valmis",
				closeWithPendingChange: "Haluatko varmasti vahvistaa toiminnon? Muutoksesi häviävät.",
				gotIt: "OK",
				savingApplication: "Tallennetaan sovellusta",
				saveSuccess: "Sovelluksen tallennus onnistui",
				saveError: "Tallennus epäonnistui, yritä uudelleen",
				saveError2: "Å_Save failed due to an invalid html tag in a name or description_ö",
				dragColorPicker: "Siirrä minua<br />tai vaihda värini",
				dataWarningExtent: "Sinulla on tietoja Web-kartan laajuuden ulkopuolelta. Näitä tietoja ei käytetä kierrospisteinämme. Vaihda kartan laajuutta, jos haluat käyttää niitä.",
				dataWarningVisibi: "Karttakierros-karttatasosi ei näy nykyisessä Web-kartan laajuudessa. Vahvista, että Karttakierros-karttatasosi näkyy %MAPSIZE% -koon kartassa.",
				dataWarningEdit: "Muokkaa Web-karttaa",
				dataWarningClose: "Sulje",
				signIn: "Kirjaudu sisään tilillä palvelussa",
				signInTwo: "sovelluksen tallentamiseksi."
			},
			organizePopupJS: {
				messageStart: "Olet päättänyt poistaa",
				messageSinglePoint: "yksi reittipiste",
				messageMultiPoint: "kierroksen pisteet",
				messagePermantRemove: "Tämä poistaa pysyvästi seuraavan:",
				messageRecord: "tietue",
				messageRecordPlural: "tietueet",
				messageConfirm: "tietokannastasi. Haluatko jatkaa?",
				labelButtonShow: "Näytä",
				labelButtonHide: "Piilota"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "Tämä poistaa kuvan ja pikkukuvan pysyvästi",
				popoverDeleteWarningThumb: "Tämä poistaa pikkukuvan pysyvästi",
				popoverUploadingPhoto: "Ladataan kuvaa ja pikkukuvaa palvelimelle",
				popoverUploadingThumbnail: "Ladataan pikkukuvaa",
				popoverUploadSuccessful: "Palvelimelle lataus onnistui",
				popoverUploadError: "Päivitys epäonnistui. Yritä uudelleen myöhemmin",
				changePicAndThumb: "Vaihda kuva",
				changeThumb: "Vaihda pikkukuva",
				selectPic: "Vaihda media",
				selectThumb: "Vaihda pikkukuva",
				uploadPicAndThumb: "Käytä"
			},
			headerJS:{
				editMe: "Muokkaa minua!",
				templateTitle: "Määritä mallin nimi",
				templateSubtitle: "Määritä mallin alaotsikko"
			},
			crossFaderJS:{
				setPicture: "Määritä kuvan nimi",
				setCaption: "Määritä kuvan seloste"
			},
			importPopup: {
				title: "Tuo",
				prevBtn: "Takaosa",
				nextBtn: "Seuraava"
			},
			importPopupHome: {
				header: "Mihin kuvasi on tallennettu?"
			},
			onlinePhotoSharingCommon: {
				pictures: "Å_pictures_ö",
				videos: "Å_videos_ö",
				disabled: "Järjestelmänvalvoja on poistanut tämän toiminnon käytöstä",
				disabledPortal: "Tämä toiminto on poistettu käytöstä ArcGIS-portaalissa",
				header1: "Kuvien on oltava julkisesti jaettuja.",
				header2: "Å_The import will be limited to the first %NB1% %MEDIA% to respect the limit of %NB2% points per tour._ö",
				emptyDataset: "Virhe. Kuvia ei löydy",
				footerImport: "Tuo",
				selectAlbum: "Valitse julkinen albumi",
				selectAlbum2: "Valitse albumi",
				pleaseChoose: "Valitse",
				userLookup: "Hae",
				userLookingup: "Haetaan",
				csv: "Viitattu CSV-tiedostossa",
				advanced: "Å_Advanced options_ö",
				select: "Tee valinta",
				locUse: "Käytä kuvien sijaintia",
				locUse2: "Å_Use videos location_ö",
				locExplain: "Et ehkä halua käyttää kuvien sijaintia, koska ne voivat olla peräisin albumista. Tällöin kaikki valokuvat ovat samassa sijainnissa.",
				locExplain2: "Å_You may not want to use videos location as they can be inherited from the user settings, resulting in all videos being at the same location._ö"
			},
			viewFlickr: {
				header: "Anna Flickr-käyttäjätunnus ja valitse tuotava valokuvasarja tai tunniste.",
				userInputLbl: "Kirjoita käyttäjänimi",
				signInMsg2: "Käyttäjää ei löydy",
				selectSet: "Valitse valokuvasarja",
				selectTag: "tai valitse tunniste",
				footerImportTag: "Tuo valittu tunniste",
				footerImportSet: "Tuo valittu sarja"
			},
			viewFacebook: {
				header: "Todenna Facebook-käyttäjätilin avulla tai käytä julkista sivua. Voit luoda yksityisten albumien avulla julkisen karttakierroksen, joka ei edellytä Facebook-käyttäjätodennusta. Näin kommentit ja tykkäykset säilyvät yksityisinä.",
				leftHeader: "Facebook-käyttäjä",
				rightHeader: "Facebook-sivu",
				pageExplain: "Facebook-sivu on julkinen tuotemerkki tai tunnettu tuote, kuten <b>esrigis</b>. Saat sivun nimen sivun URL-osoitteessa olevan ensimmäisen vinoviivan (/) jälkeen.",
				pageInputLbl: "Kirjoita sivun nimi",
				lookupMsgError: "Sivua ei löydy"
			},
			viewPicasa: {
				header: "Kirjoita sähköpostiosoite tai Picasa- tai Google+-tilin tunnus.",
				userInputLbl: "Kirjoita sähköpostiosoite tai tunnus",
				signInMsg2: "Tiliä ei löydy",
				howToFind: "Tilitunnuksen etsiminen",
				howToFind2: "Kopioi minkä tahansa Picasa- tai Google+-sivun ensimmäisen ja toisen vinoviivan (/) välissä olevat luvut"
			},
			viewCSV: {
				uploadBtn: "Valitse tai pudota CSV-tiedosto",
				resultHeaderEmpty: "CSV-tiedosto on tyhjä",
				resultHeaderSuccess: "%NB_POINTS% pisteen lataus onnistui",
				resultHasBeenLimited: "Tuonti on rajoitettu ensimmäiseen %VAL1% pisteeseen %VAL2% pisteestä, jotta se on kierroskohtaisen %VAL3% pisteen rajoituksen mukainen",
				browserSupport: "Selaintasi ei tueta. Jotta voit käyttää CSV-tiedostoa, sinun on <a href='http://browsehappy.com/' target='_blank'>päivitettävä selaimesi</a> tai käytettävä ArcGIS.com-palvelussa käytettävissä olevaa karttojen Web-katseluohjelmaa (lisätietoja on ohjeessa).",
				errorLatLng: "Leveys- ja pituusasteiden kenttiä ei löytynyt. Leveysasteen mahdollisia arvoja ovat seuraavat: <i>%LAT%</i>. Pituusasteen mahdollisia arvoja ovat seuraavat: <i>%LONG%</i>.",
				errorFieldsExplain: "Lataus epäonnistui, koska seuraavia vaadittuja kenttiä ei löytynyt",
				errorFieldsName: "<b>Nimen</b> mahdollisia arvoja ovat seuraavat: %VAL%",
				errorFieldsDesc: "<b>Kuvauksen</b> mahdollisia arvoja ovat seuraavat: %VAL%",
				errorFieldsUrl: "<b>Kuvan URL-osoitteen</b> mahdollisia arvoja ovat seuraavat: %VAL%",
				errorFieldsThumb: "<b>Pikkukuvan URL-osoitteen</b> mahdollisia arvoja ovat seuraavat: %VAL%",
				errorFields2Explain: "Lataus epäonnistui, koska CSV-tiedosto ei käytä samoja ominaisuustietoja kuin taso, jossa on seuraavia ominaisuustietoja",
				errorFields2Name: "<b>Nimi</b> käyttää arvoa %VAL1% arvon %VAL2% sijaan",
				errorFields2Desc: "<b>Kuvaus</b> käyttää arvoa %VAL1% arvon %VAL2% sijaan",
				errorFields2Url: "<b>Kuvan URL-osoite</b> käyttää arvoa %VAL1% arvon %VAL2% sijaan",
				errorFields2Thumb: "<b>Pikkukuvan URL-osoite</b> käyttää arvoa %VAL1% arvon %VAL2% sijaan",
				resultFieldsAll: "Kaikki ominaisuustiedot on tuotu",
				resultFieldsNotAll: "Seuraavia ominaisuustietoja ei ole tuotu, koska niitä ei ole karttatasolla",
				resultFieldsNotAll2: "Seuraavat ominaisuustiedot on tuotu",
				footerNextBtnResult: "Tuo Web-karttaan",
				footerProgress: "Tuonti on käynnissä",
				footerSucceed: "Tuonti onnistui. Ladataan"
			},
			viewYoutube: {
				header: "Å_Look for publicly shared videos using an user name._ö",
				pageInputLbl: "Å_Enter a Youtube user name_ö",
				lookupMsgError: "Å_User not found_ö",
				howToFind: "Å_How to find a Youtube user name_ö",
				howToFind2: "Å_User name is displayed under videos_ö",
				found: "Å_Found_ö",
				noData: "Å_No public videos found_ö"
			},
			viewGeoTag: {
				header: "Å_Click or tap the pictures you want to import to locate them._ö",
				headerMore: "Miksei kuviani paikanneta?",
				headerExplain: "Jos kuviesi sijainti on kelvollinen, ne paikannetaan automaattisesti kartalle ja listataan toisessa välilehdessä.<br /><br />Oletusarvon mukaan Picasa ja Flickr eivät hyödynnä kuvien sijaintia koskevia EXIF-metatietoja. Tarkista Flickr- tai Picasa-palvelun asetukset Tietosuoja-välilehdessä ja ota käyttöön kuvien sijaintietojen käyttö. Sinun on ehkä tuotava kuvasi kokonaan uudelleen Flickr- tai Picasa-palveluun.<br /><br />Facebookissa sinun on siirryttävä jokaisen kuvan kohdalle, valittava muokkaus ja valittava sijainti ehdotetuista vaihtoehdoista, jotka perustuvat kuvien EXIF-metatietoihin.",
				leftPanelTab1: "Paikannettava",
				leftPanelTab2: "Paikannettu",
				clickOrTap: "Paikanna napsauttamalla tai napauttamalla karttaa",
				clickDrop: "Älä tuo",
				footerImport: "Tuo",
				footerProgress: "Tuonti on käynnissä",
				footerSucceed: "Tuonti onnistui. Ladataan...",
				loading: "Ladataan",
				error: "Kuvien sijainnin tuonti epäonnistui, ja sijainnit on jätetty huomiotta."
			},
			initPopup: {
				title: "Tervetuloa Map Tourin rakentamisohjelmaan",
				prevBtn: "Takaosa",
				nextBtn: "Seuraava"
			},
			initPopupHome: {
				header1: "Å_Where are your medias?_ö",
				header2: "Tämän avustusohjelman avulla voit luoda karttakierroksen verkkoon aiemmin tallennetuista kuvista tai tuoda ne ArcGIS Online for Organization -tiliisi.",
				title1: "Å_My medias are already hosted_ö",
				title2: "Minun on isännöitävä kuviani",
				hostedFSTooltip: "Å_Use ArcGIS Online to host your pictures (doesn't support videos)._ö",
				hostedFsNA: "Käytettävissä vain henkilöille, joilla on ArcGIS for Organization -tilin julkaisijan tai järjestelmänvalvojan käyttöoikeudet",
				footer1: "Kun olet valmis, muista jakaa karttakierroksesi yleisösi kanssa sovelluskohteen sivulla.",
				footer2: "Karttakierroksen ohje",
				footer3: "Lataa CSV-malli",
				footer4: "\"Tallenna nimellä\", jos kohde ei lataudu",
				footer5: "Å_Learn about hosting options_ö",
				footerProgress: "Luonti on käynnissä",
				footerSucceed: "Luonti onnistui. Ladataan..."
			},
			helpPopup: {
				title: "Ohje",
				close: "Sulje",
				tab1: {
					title: "Johdanto",
					div1: "Map Tour -mallipohja on suunniteltu sellaisten maantieteellisten tietojen esittämiseen, jotka sisältävät jonkin kerrottavaan tarinaan liittyvän mukaansatempaavan valokuvauksellisen elementin.",
					div2: "Mallipohja tuottaa kiinnostavan, helppokäyttöisen web-sovelluksen, jonka avulla voit näyttää kartalla numerojärjestyksessä paikkoja, joita käyttäjät voivat katsoa selaamalla. Mallia voidaan käyttää minkä tahansa laitteen, kuten älylaitteen tai taulutietokoneen, selaimissa.",
					div3: "Tämän ohjeen avulla opit julkaisemaan esimerkiksi seuraavat karttakierrokset:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Palm Springs -karttakierros</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Hollannin maaseudun parhaat pyöräilyreitit</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Los Angeles -joen karttakierros</a></li></ul>",
					div5: "Haluamme kuulla sinusta! Jaa karttakierroksesi kanssamme:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>StoryMaps-sivusto</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Löysitkö ohjelmointivirheen tai haluatko ehdottaa uutta toimintoa? Kerro meille asiasta <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub-projektisivulla</a>."
				},
				tab2: {
					title: "Data",
					div1: "Karttakierrosta luotaessa on tärkeää miettiä, mihin kuvat tallennetaan. Karttakierros voi käyttää tunnetuimpiin valokuvien jakamispalveluihin, web-palvelimiin tai liitteinä kohdepalveluihin tallennettuja kuvia.",
					div1a: "Lisätietoja tuetuista kuvamuodoista ja videoista on tämän välilehden viimeisessä osassa.",
					div2: "Interaktiivisen rakentajan avulla voit käsitellä karttakierroksesi kuvia kahdella tavalla:",
					div3: "<ul><li>Voit käyttää <b>aiemmin verkkoon</b>, kuten Flickrin kaltaiseen valokuvien jakamispalveluun, tallennettuja kuvia tai omaan web-sivustoosi tallennettuja kuvia. Kyseisiin kuviin viitataan karttakierroksella niiden URL-osoitteiden avulla.</li><li>Voit myös <b>ladata valokuvia tietokoneestasi</b> suoraan karttakierroksellesi. Tämä lataustoiminto edellyttää ArcGIS Online -tilausta ja julkaisijan tai järjestelmänvalvojan oikeuksia, koska isännöity kohdepalvelu, johon valokuvasi tallennetaan liitteinä, luodaan automaattisesti puolestasi.</li></ul>",
					div4: "Pääasialliset käyttötilanteet ovat seuraavat:",
					div4b: "<b>Valokuviasi ei isännöidä</b> vielä, ja sinulla on ArcGIS Online -tilaus: paras vaihtoehto on käyttää isännöityä kohdepalvelua. Valokuvien jakamispalveluiden tavoin luomme nopeasti latautuvia kuvia optimoimalla ne, ja voit käyttää kaikkia ArcGIS-ympäristön järjestelmänvalvojan ja tietojenhallinnan toimintoja.",
					div5: "<b>Et ole organisaation jäsen</b>: sinun on ensin ladattava kuvasi valokuvien jakamispalveluun tai omaan web-palvelimeesi. Voit sitten muodostusohjelman avulla käyttää kyseisiä kuvia, jotka ovat edelleen isännöityinä niiden alkuperäisessä sijainnissa.",
					div6: "<b>Haluat käyttää uudelleen nykyistä kohdepalvelua</b>, johon kuvasi on tallennettu liitteinä tai joka viittaa ulkoisiin kuviin. Lisätietoja on alla olevassa osassa.",
					div7: "<b>Olet karttakierrosmallin aiemman version</b> käyttäjä, ja sinulla on jo CSV-tiedosto, joka viittaa kuviisi ja pikkukuvaan: voit tuoda sen ja muokata tietojasi. Muodostusohjelma tukee vain pituus- ja leveysasteiden kenttiä käyttäviä CSV-tiedostoja. Osoitteeseen perustuvia CSV-tiedostoja voi edelleen käyttää web-kartan kautta (lisätietoja on alla olevassa osassa).",
					div8: "Valokuvien verkkojakamispalveluista tuominen",
					div9: "Tuontitoiminto viittaa jo isännöityihin kuviin tallentamalla niiden URL-osoitteet web-kartan kohdekokoelmaan. Kuvia ei ole tallennettu ArcGIS Onlineen. Jos isännöityjä kuvia ei voi käyttää, ne eivät ole käytettävissä karttakierroksella ja näet Kuva ei ole käytettävissä -kuvan. Se, tuoko karttakierros kuvien nimen, kuvauksen ja sijainnin, määräytyy valokuvan palveluntarjoajan mukaan. Kyseiset määritteet tallennetaan web-kartalle. Web-palveluihin tehdyt muutokset eivät näy karttakierroksella.",
					div10: "Kuvien tallentaminen web-palvelimeen",
					div11: "Jos haluat isännöidä kuvia itse, sinun on luotava kuvien pikkukuvat manuaalisesti. Täyden tarkkuuden kuvien käyttäminen pikkukuvina heikentää laatua. Siksi suosittelemme käyttämään valokuvien verkkojakamispalvelua tai kohdepalvelua, joka tekee tämän puolestasi.",
					div12: "Olemassa olevan kohdepalvelun tai Shapefile-tiedoston käyttäminen",
					div13: "Karttakierroksen aineistolähteenä voidaan käyttää minkä tahansa pisteen kohdepalvelua tai shapefile-tiedostoa. Se on vain lisättävä tasona web-kartalle arcgis.com-palvelun karttojen katseluohjelman avulla. Jos sovellus löytää odotetut määritteet tasolta, kaikki muodostusohjelman toiminnot ovat käytettävissä.",
					div14: "Odotetut kentät ovat (merkkien koolla ei ole merkitystä):",
					div151: "Nimi",
					div152: "Kuvaus",
					div153: "Kuva",
					div154: "Pikkukuva",
					div155: "Väri (valinnainen)",
					div16: "Nimi- ja kuvauskentät ovat pakolliset. Jos sovellus ei löydä vastaavia kenttiä kohdepalvelua käytettäessä, katseluohjelma ei toimi, ennen kuin muodostusohjelman käyttämät kentät määritetään. Web-kartalle lisätyillä CSV- ja shapefile-tasoilla on oltava kaikki pakolliset kentät, jotta muodostusohjelma toimii.",
					div162: "Käytettäessä kuvat liitteinä tallentavaa kohdepalvelua <b>käytetään vain kohdepalveluita, jotka sisältävät kaksi liitettä</b>. Ensimmäinen liite määrittää pääkuvan ja toinen liite määrittää pikkukuvan.",
					div17: "Kuva- ja pikkukuvakentät ovat pakolliset käytettäessä kohdepalvelua ilman liitteitä ja valinnaiset (vaikkakin suositeltavat) käytettäessä liitteitä sisältävää kohdepalvelua. Jos liitteet ovat käytössä palvelussa, muodostusohjelma sallii kuvien lataamisen liitteinä. Jos ne eivät ole käytössä palvelussa, voit ainoastaan muokata kuvan ja pikkukuvan URL-osoitteita.",
					div172: "Jos kuva- ja pikkukuvakentät ovat käytettävissä, niitä käytetään aina eikä kohdepalvelun liitteisiin kohdistuvia hakuja tehdä.",
					div173: "CSV- ja shapefile-esimerkkitiedostot voi ladata kohteesta",
					div18: "Isännöityjen kohdepalvelujen luominen CSV- tai shapefile-tiedostosta",
					div19: "Kun luot isännöidyn kohdepalvelun CSV- tai shapefile-tiedostosta, liitteet eivät ole käytössä oletusarvon mukaan. Voit ottaa ne käyttöön avaamalla kohdepalvelun tietosivun ja napsauttamalla taso-osassa olevaa pientä nuolta, jolloin kyseinen vaihtoehto tulee näkyviin. Karttakierros käyttää uudelleen kuvia ja pikkukuvia, joihin olet viitannut määritteiden avulla. Voit vaihtoehtoisesti ladata kuvasi kohdepalvelun liitteinä kuvaruudun kahden painikkeen avulla (\"Vaihda kuva\" ja \"Vaihda pikkukuva\").",
					div20: "Tuetut  kuvamuodot ja videot",
					div21: "Seuraavia kuvamuotoja tuetaan: <b>.jpg, .jpeg, .png, .gif ja .bmp</b>. Jos mediasi ei pääty johonkin näistä tunnisteista, karttakierros tulkitsee sen videoksi kaikissa muissa tilanteissa paitsi käytettäessä kohdepalvelua (lisätietoja on alla).",
					div22: "Karttakierrosmalli ei sisällä videosoitinta, joten sinun on käytettävä ulkoista videosoitinta (etsi videon upottamisasetus ja kopioi annetussa koodissa oleva URL-osoite). Jos haluat isännöidä videota itse, voit luoda videosoittimen, kuten <a href='http://www.videojs.com/'>Video.js</a>, sisältävän HTML-sivun.",
					div23: "Interaktiivinen muodostusohjelma ei sisällä videon sisällyttämisen valintaikkunaa käytettäessä liitteitä sisältäviä kohdepalveluita. Voit kuitenkin sisällyttää videon muokkaamalla tietojasi interaktiivisen muodostusohjelman ulkopuolella. Jos muokkaat kuvakenttiä arcgis.com-palvelun karttojen katseluohjelmassa niin, että ne osoittavat ulkoiseen videoon ja lisäät URL-osoitteen loppuun parametrin #isVideo, mediasi tulkitaan videoksi.",
					div24: "Huomaa, ettei pistettä käytetä, ellei sinulla ole kahta kelvollista kuvaliitettä. Videoita ei voi käyttää, kun kohdepalvelun liitteitä käytetään ilman kuva- ja pikkukuvakenttiä."
				},
				tab3: {
					title: "Mukauttaminen",
					div1: "Rakentaja sisältää useita räätälöintivaihtoehtoja, joihin voi siirtyä valitsemalla yläreunan ASETUKSET-painikkeen. Jos et löydä haluamaasi asetusta, käytettävissä on myös ladattava versio. Voit ottaa ladattavan version käyttöön web-palvelimellasi ja parantaa sitä tarpeisiisi sopivaksi.",
					div2: "Suosittelemme isännöidyn version käyttämistä kaikissa muissa tilanteissa paitsi seuraavissa:",
					div3: "<li>Se ei tarjoa haluamaasi käyttöliittymän mukautusta, kuten ylätunnisteen taustakuvan käyttämistä.</li><li>Olet kehittäjä ja haluat parantaa sovellusta.</li>",
					div4: "Ladattava versio voidaan määrittää web-kartan tai web-sovelluksen tunnisteen avulla. Pääasialliset käyttötapaukset ovat seuraavat:",
					div41: "Luot karttakierroksen käyttämällä interaktiivista muodostusohjelmaa isännöidyssä ympäristössä ja määrität mallin web-karttasovelluksen tunnisteen avulla. Järjestelmä käyttää interaktiivisen muodostusohjelman kanssa määrittämiäsi asetuksia.",
					div42: "Luot web-kartan interaktiivisen muodostusohjelman ulkopuolella ja määrität mallin web-kartan tunnisteen avulla. Lisätietoja mallin määrittämisestä on ohjeissa.",
					div43: "Huomaa, että interaktiivinen muodostusohjelma on käytettävissä ladattavana versiona. Siihen liittyy kuitenkin joitakin selaimiin, kuten Internet Explorer 10:tä vanhempiin selaimiin, liittyviä teknisiä rajoituksia.",
					div5: "Lisätietoja ladattavasta versiosta on <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub-projektisivulla</a>."
				},
				tab4: {
					title: "Vinkkejä",
					div0: "Tuetut selaimet",
					div0a: "Internet Explorer 8 ja sitä uudemmat versiot tukevat karttakierroksen katseluohjelmaa. Internet Explorer 9 ja sitä uudemmat versiot tukevat interaktiivista muodostusohjelmaa. Testaamme ohjelmia jatkuvasti käytetyimmissä selaimissa. Ongelmien ilmetessä on kuitenkin suositeltavaa käyttää Chromea.",
					div0b: "Jos sinulla on ongelmia, ilmoita asiasta meille. Luomalla karttakierroksen CSV-mallin avulla minimoit muodostusohjelman käyttöliittymän käytön.",
					div1: "Kuvat",
					div2: "Suosittelemme käyttämään vaakasuuntaisia valokuvia pystysuuntaisten sijaan. Voit käyttää pystysuuntaisia valokuvia pienissä näytöissä, kuten iPadissa. Seloste saattaa peittää suuren osan valokuvasta (koska teksti vie enemmän tilaa, kun se näytetään korkealla alueella leveän alueen sijaan). Vaikka yhdellä karttakierroksella voidaan käyttää eri kokoisia, muotoisia ja suuntaisia kuvia, suosittelemme käyttämään täsmälleen samaa kokoa ja muotoa kaikissa kuvissa. Näin erikokoiset kuvat eivät häiritse käyttäjää hänen seuratessa kierrosta.",
					div2a: "Jos isännöit kuvia itse, pääkuvien tarkkuuden on suositeltavaa olla enintään <b>1 090 x 725</b> ja pikkukuvien <b>140 x 93</b>.",
					div3: "Selostetekstin muotoileminen HTML-tunnisteiden avulla",
					div4: "Ylätunniste ja kuvan otsikko tai seloste voivat sisältää HTML-tunnisteita muotoilun ja linkkien määrittämistä varten. Seuraava koodi esimerkiksi lisää keltaisen linkin:",
					div5: "Tukitasot",
					div6: "Voit lisätä karttakierrokselle kontekstia ylimääräisten tukitasojen avulla. Voit esimerkiksi lisätä karttakierroksen pisteiden lisäksi maantieteellisiä kohteita, kuten tutkimusalueen ja kierroksen pisteet yhdistävän kävely- tai ajoreitin. Karttakierrosmalli näyttää nämä ylimääräiset tukitasot symbolien avulla, jotka olet määrittänyt web-kartalla. Pop-up-ikkunat eivät ole käytettävissä.",
					div7: "Pidä kierros lyhyenä ja hauskana",
					div8: "Kierroksella voi olla enintään 99 pistettä. Useimmat karttakierrokset ovat yleensä tätä rajoitusta huomattavasti lyhyempiä. Yleisösi ei välttämättä halua käydä läpi liian montaa kierroksen pistettä. Kohde on varmasti omasta mielestäsi mielenkiintoinen, mutta älä odota muiden ajattelevan samoin.",
					div9: "Lisätietoja on <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>yksityiskohtaisessa oppaassa</a>.",
					div10: "Upotustila",
					div11: "Jos haluat upottaa mallin toiseen verkkosivustoon iframe-elementin avulla, valinnaisen parametrin \"&embed\" lisääminen URL-osoitteen loppuun poistaa ylätunnisteen. Kyseisen tilan voi määrittää myös ladattavassa versiossa määritystiedoston avulla." 
				},
				tab5: {
					title: "Julkaiseminen",
					div1: "Kun olet valmis, muista jakaa karttakierroksesi yleisösi kanssa ArcGIS Onlinen sovelluksen tietosivulla. Kyseisen prosessin aikana ArcGIS Online pyytää sinua tarvittaessa päivittämään resurssit, joista se on riippuvainen (Web-kartta ja kohdepalvelu) ja joita ei jaeta samalla tavalla. Jos et jaa kaikkia resurssejasi yleisösi kanssa, käyttäjät ohjataan uudelleen ArcGIS Onlinen kirjautumissivulle.",
					div2: "Jos käytät karttakierroksen muodostusohjelman avulla luotua isännöityä kohdepalvelua, sovellus huolehtii palvelun suojaamisesta puolestasi säilyttäen muokkausoikeudet vain itsellään, vaikka palvelu jaettaisiinkin julkisesti.",
					div3: "Varmista ennen karttakierroksen jakamista julkisesti, että se toimii, kun et ole kirjautuneena ArcGIS.com-tiliisi.",
					div4: "Kannattaa katsoa, miltä karttakierros näyttää vaakasuuntaisella iPadilla. Näin voit tarkistaa, peittävätkö kuvatekstit liian suuren osan kuvista."
				}
			}
        }
    })
);
