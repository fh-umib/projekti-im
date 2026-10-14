# Tri idetë

## 1. Gjaku

**Kërkesat urgjente për gjak nga Facebook-u kthehen në sistem të verifikuar.**

**Problemi:** Kur dikujt i duhet gjak urgjent, familja shkruan në Facebook, Viber ose WhatsApp: "Duhet gjak A-, QKUK, sot!" Postimi përhapet pa kontroll, nuk dihet a është ende i vlefshëm, dhe dhuruesit e duhur nuk e shohin kurrë. Të njëjtat kërkesa qarkullojnë ditë pas dite, edhe pasi nevoja është plotësuar.

**Rrjedha:** Familja ose personeli bën foto të fletës së spitalit ose shkruan/thotë kërkesën. AI e kthen në `{blood_type, units, hospital, deadline, contact}`. Aplikacioni njofton vetëm dhuruesit e regjistruar që përputhen me grupin e gjakut, janë afër dhe mund të dhurojnë sipas datës së dhurimit të fundit. Kur kërkesa plotësohet, mbyllet automatikisht dhe njoftimi pushon.

**Çka e bën unik:** AI-ja nuk është dekor. Ajo merr tekst të çrregullt ose foto dhe e bën kërkesë të strukturuar, dhe zbulon kërkesat e dyfishta ose të vjetruara. Askush nuk e ka bërë këtë të lidhur me spitalet e vendit.

**Telefoni:** Notifications (kryesori), GPS (kush është afër) dhe kamera (fleta e kërkesës).

**Dëshmia:** Rruga 3: 5 intervista (stafi i qendrës së transfuzionit, dhurues të rregullt, një familje që ka kërkuar gjak) dhe një letër interesi nga Qendra e Transfuzionit ose Kryqi i Kuq. Si fillim mjaftojnë dhuruesit në shoqatat studentore ose në grupet e dhuruesve.

**Zgjidhjet:**

- **Mashtrimi (kërkesë e rreme):** Çdo kërkesë ka status "e verifikuar" vetëm kur një njeri i autorizuar nga spitali e miraton. Ndërkohë shfaqet e shënuar si "e paverifikuar".
- **Privatësia e grupit të gjakut:** Ruaj vetëm grupin dhe afërsinë e përafërt, jo adresën e saktë. Dhuruesi zgjedh vetë kur është i disponueshëm. RLS e ndan çdo rol.
- **Spitali s'e pranon:** Aplikacioni funksionon edhe pa integrim. Qytetarët dhe dhuruesit e përdorin vetë, dhe spitali merr vetëm rezultatin.

**Një punë e përsosur:** Një kërkesë për gjak arrin te dhuruesit e duhur brenda një minute, e verifikuar.

---

## 2. Adresa

**Adresa e shtëpisë suaj, edhe kur nuk ka numër ose rrugë.**

**Problemi:** Në shumë zona, sidomos në fshatra dhe lagje të reja, shtëpitë nuk kanë numër ose emër rruge që funksionon në praktikë. Ambulanca, zjarrfikësit, kurierët dhe shërbimet komunale gjejnë shtëpinë me telefonata si "kthehu te xhamia, pastaj te shtëpia e kuqe". Në një emergjencë, çdo minutë humbur është e rrezikshme.

**Rrjedha:** Pronari fotografon shtëpinë dhe hyrjen, aplikacioni merr GPS-in dhe ai e përshkruan me zë se si arrihet ("pas furrës, porta e gjelbër, hyrja nga ana e majtë"). AI i kthen këto në një udhëzim të strukturuar ("Adresë me pika referimi") dhe një kod të shkurtër unik. Pronari e ndan kodin me mjekun, kurierin ose familjen. Kur dikush e hap kodin, sheh hartën, fotot dhe udhëzimin hap pas hapi.

**Çka e bën unik:** Nuk e zëvendëson sistemin zyrtar të adresave. Është shtresa praktike që funksionon sot, dhe të dhënat mund t'i ndihmojnë më vonë komunat të plotësojnë adresimin e saktë.

**Telefoni:** Kamera, GPS dhe zëri.

**Dëshmia:** Rruga 3 ose 1. Intervistoni shoferë të ambulancës, kurierë dhe banorë të një fshati. Letra e interesit mund të vijë nga një kompani kurierësh ose një njësi komunale. Për 10 përdoruesit javorë mjafton një fshat ose lagje ku e promovoni.

**Zgjidhjet:**

- **Privatësia:** Çdo adresë është private si parazgjedhje. Pronari vendos kush e sheh, dhe mund ta fikë kodin kurdoherë.
- **Të dhëna të gabuara:** Aplikacioni verifikon që GPS-i përputhet me foton dhe lejon vetëm pronarin ta ndryshojë.
- **Nuk ka internet në fshat:** Kodi dhe udhëzimi ruhen offline te marrësi pasi hapen një herë.

**Një punë e përsosur:** Cilido që të vijë në shtëpinë tënde, e gjen pa asnjë telefonatë.

---

## 3. Epikriza

**Udhëzimet e daljes nga spitali kthehen në plan të qartë për pacientin.**

**Problemi:** Kur pacienti del nga spitali, merr letër me terma mjekësorë dhe doza të shkruara shpejt. Pjesa më e madhe e tij nuk e kupton ç'duhet të bëjë: cilat ilaçe, kur të vijë në kontroll, çfarë shenjash duhen shqetësuar. Kjo çon në ndërlikime dhe rikthime të panevojshme.

**Rrjedha:** Infermieri ose mjeku diktojnë shkurt udhëzimet ose bëjnë foto të letrës. AI e kthen në `{medications, follow_up_date, warning_signs, diet_notes}` dhe e shkruan në shqip të thjeshtë. Mjeku e rishikon dhe e miraton. Pacienti merr një plan me kujtesa për ilaçet dhe kontrollin, dhe një buton për familjen.

**Çka e bën unik:** Mjeku është gjithmonë në qark. AI-ja nuk jep diagnozë dhe nuk shton asgjë që mjeku nuk e ka thënë. Vetëm e bën tekstin e kuptueshëm.

**Telefoni:** Zëri, kamera dhe notifications.

**Dëshmia:** Rruga 3, por kërkon institucion. Letra e interesit mund të vijë nga një mjek familjar, një klinikë private ose një njësi e QKMF-së. Si alternativë, intervistoni mjekë dhe pacientë të kaluar për sjelljen e tyre aktuale.

**Zgjidhjet:**

- **Rreziku mjekësor:** Asnjë udhëzim nuk i shfaqet pacientit pa miratimin e mjekut. Aplikacioni ka tekst të qartë se nuk zëvendëson këshillën mjekësore.
- **Të dhënat shëndetësore:** RLS strikte, enkriptim, privacy text i hollësishëm dhe asnjë ruajtje e panevojshme.
- **Spitalet publike janë të ngadalta për pilot:** Nisu me një klinikë private ose mjek familjar, ku vendimi merret më shpejt.

**Një punë e përsosur:** Pacienti del nga spitali duke ditur saktësisht çfarë të bëjë.

Hapi B: E pyeta AI-n si ta ndërtoj komponentin KartaKerkeses me type Props. Mbajta strukturën e Props (me union te statusi dhe afati? opsional) dhe përdorimin tri herë te index.tsx.