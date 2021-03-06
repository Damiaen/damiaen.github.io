function random(min, max, delen) {
    if(delen == undefined || delen == 0) {
        return Math.floor(Math.random() * max) + min;
    }
    else
    {
        return (Math.floor(Math.random() * max) + min) / delen;
    }
}

function toggleStatus(message)
{       setTimeout(function() {
        $('#status').html(message);
    }, 200);
}

function disableButton(id, state) {
    if($('#' + id).val != undefined)
    {
        if(state == 1)
        {
            $('#' + id).addClass("disableButton");
        }
        else if(state == 0)
        {
            $('#' + id).removeClass("disableButton");
        }
    }
}
                                                                                                             /// vragen \\\

//question1
var q1_first = random(25, 15, 10);
var q1_second = random(200, 100);
var q1_desc = 'Op dit lotnummer is een hoofdprijs van ' + q1_first + ' miljoen euro en nog een kleinere prijs ' +
    'van €' + q1_second + ',- euro gevallen, Omdat dit een 1/5 lot is, krijgt de winnaar 1/5 deel van de prijs';
var q1_question = 'Hoeveel euro krijgt de winnaar?<small> rond af op een heel getal</small>';
var q1_answer = Math.round(((q1_first * 1000000) + q1_second)/5);
var q1_image = 'img1.jpg';
var q1_selectoptions = '';
var q1_calculator = '1';

//question2
var q2_first = random(25, 15, 10);
var q2_second = random(20, 10, 10);
var q2_desc = 'Patrick legt parket in twee kamers:<br><br> Woonkamer:  5.20 bij 5.60 meter.<br>  Slaapkamer: '+ q2_first + '0 bij ' +q2_second + '0 meter.<br><br> Hij neemt 5% extra parket.';
var q2_question = 'Hoeveel euro moet Patrick betalen?<small> rond af op 2 decimalen</small>';
var q2_calc = (((5.2 * 5.6) + (q2_first * q2_second))*1.05)*44.95;
var q2_answer = Math.round(q2_calc *100)/100;
var q2_image = 'img2.jpg';
var q2_selectoptions = '';
var q2_calculator = '1';

//question3
var q3_desc = 'Usaint Bolt (Jamaica) liep op 16 augustus 2009 in Berlijn een wereldrecord op de 100 meter.<br>Hij liep deze afstand in 9.58 seconden.<br><br>';
var q3_question = 'Wat was zijn gemiddelde snelheid in kilometer per uur?<small> Rond af op één decimaal</small>';
var q3_answer = 37.6;
var q3_image = 'img3.jpg';
var q3_selectoptions = '';
var q3_calculator = '1';

//question4
var q4_desc = 'In april 2012 zijn 76800 Red-phones verkocht.<br><br>';
var q4_question = 'Hoeveel Blue-phones zijn er in dezelde maand verkocht?';
var q4_answer = 103200;
var q4_image = 'img4.jpg';
var q4_selectoptions = '';
var q4_calculator = '1';

//question5
var q5_desc = 'Aanbieding 1:        6 dagen Rome voor € 369,- <br> Aanbieding 2:        8 dagen Rome voor € 495,- <br>Aanbieding 3:        10 dagen Rome voor € 595,- <br>Aanbieding 4:        14 dagen Rome voor € 868,- <br><br>';
var q5_question = 'Welke reis is naar verhouding het voordeligst?';
var q5_answer = 3;
var q5_image = 'img5.jpg';
var q5_selectoptions = {1: 'aanbieding 1', 2: 'aanbieding 2', 3: 'aanbieding 3', 4: 'aanbieding 4'};
var q5_calculator = '1';

//question6
var q6_first = random(110,30);
var q6_second = random(10,20);
var q6_desc = 'Bij een zorgverzekeraar moet een volwassene in 2012 €'+ q6_first +' premie per maand betalen.<br> Dit is een stijging van €'+ q6_second +',- per jaar ten opzichte van 2011.<br><br>';
var q6_question = 'Met hoeveel procent is de premie in 2012 ten opzichte van 2011 gestegen?<small>Rond af op één decimaal.</small>';
var q6_calc = ((q6_first/(q6_first - q6_second)) * 100)-100;
var q6_answer = Math.round((q6_calc)*10)/10 ;
var q6_image = '';
var q6_selectoptions = '';
var q6_calculator = '1';

//question7
var q7_first = random(250,100,100);
var q7_second = random(100,20,100);
var q7_third = random(1,5);
var q7_desc = '' ;
var q7_question ='Wat is '+ q7_first +' x '+q7_second+' x '+q7_third+' ? ';
var q7_answer =Math.round((( q7_first * q7_second)* q7_third)*100)/100;
var q7_image = '';
var q7_selectoptions = '';
var q7_calculator = '';

//question8
var q8_first = random(12,10);
var q8_second = random(4,2);
var q8_third = random(12,6);
var q8_desc = 'De vader van Rob is gestopt met roken.<br>Hij rookte gemiddeld '+ q8_first +' sigaretten per dag.<br><br> De prijs per pakje is  € '+q8_second+',-.<br> Aantal sigaretten per pakje: '+q8_third+'.';
var q8_question ='Hoeveel euro betaalde hij per jaar aan sigaretten?<br>Rond af op heel bedrag';
var q8_answer  =Math.round((( q8_first * 365)/q8_third)*q8_second);
var q8_image = 'img6.jpg';
var q8_selectoptions = '';
var q8_calculator = '1';

//question9
var q9_first = random(70,20);
var q9_desc = 'In Bobeldijk worden verkeerboetes voor te hard rijden berekend met de volgende berekening:<br><br> Boete in euro = (aantal km/u te snel)² /5 <br><br>Rogier rijdt op deze weg '+q9_first+' ' +
    ' kilometer per uur en krijgt daarvoor een boete.';
var q9_question ='Hoeeel euro boete moet hij betalen?';
var q9_answer  =((q9_first -50)*(q9_first -50))/5;
var q9_image = 'img7.png';
var q9_selectoptions = '';
var q9_calculator = '1';

//question10
var q10_desc = 'Jaike krijgt een loonsverhoging van 4%.<br>Een jaar later krijgt ze nog eens een verhoging van 3%.';
var q10_question ='Hoeveel is haar loon in totaal gestegen?';
var q10_answer  =3;
var q10_image = '';
var q10_selectoptions = {1: '7%', 2: '7.07%', 3: '7.12%', 4: '12%'};
var q10_calculator = '1';

//question11
var q11_first = random(200,120);
var q11_desc = 'in dit cirkeldiagram is de favoriete sport weergegeven van de leerlingen van een school.<br>Hockey is met '+q11_first+' leerlingen het meest favoriet';
var q11_question ='Van hoeveel leerlingen is handbal de favoriete sport? <small>Rond af op hele leerlingen</small>';
var q11_answer  = Math.round((q11_first/28)*9);
var q11_image = 'img8.png';
var q11_selectoptions = '';
var q11_calculator = '1';

//question12
var q12_desc = 'Eengezin van vier personen kan in 2011 met dit doucheschuim een half jaar douchen.<br>';
var q12_question ='Hoeveel cent kost het doucheschuim per douchebeurt?<small>Rond af op 1 decimaal.</small>';
var q12_answer  =4.8;
var q12_image = 'img9.png';
var q12_selectoptions = '';
var q12_calculator = '1';

//question13
var q13_desc = '';
var q13_question = 'In welke maand werden de meeste bolletjes ijs verkocht?';
var q13_answer = 3;
var q13_image = 'img10.png';
var q13_selectoptions = {1: 'Mei', 2: 'Juni', 3: 'Juli', 4: 'Augustus'};
var q13_calculator = '1';

//question14
var q14_first = random(15,5);
var q14_second = random(200,30);
var q14_desc = 'Marieke ligt in het ziekenhuis en krijgt via een infuus medicijnen toegediend.<br> De snelheid wordt ingesteld op het aantal druppels per minuut.<br><br> ' +
    'Er zitten '+q14_first+' druppels in een ml.<br> in 3 uur moet zij '+q14_second+' ml toegediend krijgen.';
var q14_question ='Op welk aantal druppels per minuut moet het infuus worden ingesteld? <small>Rond af op een heel getal</small>';
var q14_answer  = Math.round((q14_second/180)*q14_first);
var q14_image = 'img11.png';
var q14_selectoptions = '';
var q14_calculator = '1';

//question15
var q15_first = random(50,20);
var q15_second = random(2000000,500000);
var q15_desc = 'Wanneer er per honderdduizend inwoners minstens '+q15_first+' mensen griep hebben, wordt er gesproken van een griepepidimie.<br> De provincie Gelderland had begin 2011 te maken met een griepepedemie.<br> ' +
    'Het aantal inwoners van Gelderland was toen '+q15_second+'.';
var q15_question ='Vanaf welk aantal griepgevallen was er toen sprake van een griepepidemie? <small>Rond af op een heel getal</small>';
var q15_answer  = Math.round((q15_first/100000)*q15_second);
var q15_image = '';
var q15_selectoptions = '';
var q15_calculator = '1';

//question16
var q16_desc = 'Geef het antwoordt als kommagetal!';
var q16_question ='1 ¾ + 2 ½ =';
var q16_answer  = 4.25;
var q16_image = '';
var q16_selectoptions = '';
var q16_calculator = '';

//question17
var q17_first = random(50,20);
var q17_second = random(2000000,500000);
var q17_desc = 'Bij de Vierdaagse wordt vier dagen achtereen een lange afstand gewandeld.';
var q17_question ='Hoeveel procent van de ingeschreven wandelaars heeft de Vierdaagse van 2011 uitgelopen?<br><small>Rond af op hele procenten</small>';
var q17_answer  = 93;
var q17_image = 'img12.png';
var q17_selectoptions = '';
var q17_calculator = '1';

//question18
var q18_desc = '';
var q18_question ='Welke van de volgende inhouden is het grootst?';
var q18_answer  = 2;
var q18_image = '';
var q18_selectoptions = {1: '0.1 m3', 2: '100hl', 3: '1000 liter', 4: '10000 cm3'};
var q18_calculator = '1';

//question19
var q19_desc = 'Claudia vliegt naar Nassau (Bahama). <br>het is in Nassau zet uur vroeger dan in Nederland.';
var q19_question ='Hoelang duurt de totale reis in minuten?';
var q19_answer  = 830;
var q19_image = 'img13.png';
var q19_selectoptions = '';
var q19_calculator = '1';

//question20
var q20_desc = '';
var q20_question ='Hoeveel Volkswagens Polo zijn er in 2010 meer verkocht dan in 2009';
var q20_answer  = 7416;
var q20_image = 'img14.png';
var q20_selectoptions = '';
var q20_calculator = '1';

//question21
var q21_desc = '';
var q21_question ='Hoeveel leerlingen haalden een cijfer hoger dan een 8?';
var q21_answer  = 672;
var q21_image = 'img15.png';
var q21_selectoptions = '';
var q21_calculator = '1';

//question22
var q22_first=random(400,100);
var q22_second=random(6,2);
var q22_third=random(4,2);
var q22_desc = '';
var q22_question ='Wat is '+q22_first+' x '+q22_second+' : '+q22_third+' ? ';
var q22_answer  = q22_first * q22_second / q22_third;
var q22_image = '';
var q22_selectoptions = '';
var q22_calculator = '';

//question23
var q23_desc = '';
var q23_question ='Hoeveelste deel van de wereldbevolking woont in Nederland?';
var q23_answer  =2;
var q23_image = 'img16.png';
var q23_selectoptions = {1: 'ongeveer 1/200 deel', 2: 'ongeveer 1/500 deel', 3: 'ongeveer 1/2000 deel', 4: 'ongeveer 1/5000 deel'};
var q23_calculator = '1';

//question24
var q24_first=random(14,2);
var q24_second=random(8,2);
var q24_third=random(90,10);
var q24_fourth=random(60,5);
var q24_desc = 'Dagkaarten volwassenen: €'+q24_first+',-<br> Dagkaarten jeugd t/m 14 jaar en 65+: €'+q24_second+',-<br> Passe-partout volwassenen (alle dagen toegang): €'+q24_third+',-<br> Passe-partout jeugd t/m 14 jaar en 65+: €'+q24_fourth+',-<br><br>' +
    'Vader (48 jaar) neemt Michael (18 jaar) mee naar het honkbal.<br>Ze bezoeken alle wedstrijden, behalve die van 27 juni en 30 juni.<br>Vader koopt twee passepartouts in plaats van losse dagkaarten.<br>';
var q24_question ='Hoeveel euro is dat goedkoper?';
var q24_answer  = (18*q24_first)-(q24_third*2);
var q24_image = 'img17.png';
var q24_selectoptions = '';
var q24_calculator = '1';

//question25
var q25_desc = 'Roland heeft een CD-speler gekocht. Deze week geldt er een kortingsactie in de winkel.';
var q25_question ='Hoeveel procent korting heeft hij gekregen?';
var q25_answer  = 25;
var q25_image = 'img18.png';
var q25_selectoptions = '';
var q25_calculator = '1';

//question26
var q26_desc = 'Een jaarabonement op de HITKRANT kost € 53,-';
var q26_question ='Hoeveel kost 1 nummer zonder dit abonement?<small>Rond af op 2 decimalen</small>';
var q26_answer  = 2.25 ;
var q26_image = 'img19.png';
var q26_selectoptions = '';
var q26_calculator = '1';

//question27
var q27_first = random(300,60);
var q27_desc = 'rond het antwoord af op 2 decimalen als dat moet';
var q27_question ='¾ x '+q27_first+' = ';
var q27_answer  = 0.75 * q27_first;
var q27_image = '';
var q27_selectoptions = '';
var q27_calculator = '';

//question28
var q28_first = random(27000,4000);
var q28_desc = 'Een liter olijfolie weegt 920 gram.<br> Een tankwagen vervoert '+q28_first+' liter olijflie van Italië naar Nederland.';
var q28_question ='Hoeveel ton weegt deze olijfolie?<small>Rond af naar hele tonnen</small>';
var q28_answer  = Math.round((q28_first *920)/1000000);
var q28_image = '';
var q28_selectoptions = '';
var q28_calculator = '1';

//question29
var q29_first = random(5,4);
var q29_second = random(4,1);
var q29_desc = 'Je wil een kamer van '+q29_first+' meter bij '+q29_second+' meter te bedekken met dit tapijt, je moet ook het ondertapijt halen';
var q29_question ='Hoeveel euro kost het?<small>Rond af naar 2 decimalen</small>';
var q29_som  = ((q29_first*q29_second)*29.90) + (((q29_first*q29_second)/4)*18);
var q29_answer = q29_som.toFixed(2);
var q29_image = 'img20.png';
var q29_selectoptions = '';
var q29_calculator = '1';

//question30
var q30_first = random(40,10);
var q30_desc = 'Remco wil met de scooter van Barendrecht naar Utrecht.<br> Hij weet dat hij gemiddeld '+q30_first+' km per uur zou zal rijden.';
var q30_question ='Hoeveel minuten doet hij er ongeveer over?<small>Rond af op hele minuten</small>';
var q30_answer =Math.round(73.2/(q30_first/60));
var q30_image = 'img21.png';
var q30_selectoptions = '';
var q30_calculator = '1';

//question31
var q31_desc = 'Als van een artikel de prijs lager wordt, worden er meer van verkocht.<br> Ook de omzet (hoeveel geld het kosten alle verkochte artikelen samen) kan veranderen.<br><br> In de grafiek is de omzet weergegeven bij verschillende aantallen verkochte artikelen.';
var q31_question ='Wat is de prijs van één artikel als de omzet € 200.000,- is?';
var q31_answer =1000;
var q31_image = 'img22.png';
var q31_selectoptions = '';
var q31_calculator = '1';

//question32
var q32_desc = 'Om het volume van een steen te meten legt Sylvia een steen in deze bak water.<br>Het water stijgt met een halve centimeter';
var q32_question ='Hoeveel liter is het volume van de steen?';
var q32_answer =0.6;
var q32_image = 'img23.png';
var q32_selectoptions = '';
var q32_calculator = '1';

//question33
var q33_first = random(300,100,100);
var q33_desc = 'Een brood kost € '+q33_first+'.<br> Dit bedrag is inclusief 6% belasting. De regering wil de belasting op brood verhogen van 6% naar 19%.';
var q33_question ='Hoeveel cent wordt het brood dan duurder?<small>Geef het antwoord in hele centen</small>';
var q33_som = ((q33_first/106)*119) - q33_first;
var q33_answer = Math.round(q33_som *100);
var q33_image = 'img24.png';
var q33_selectoptions = '';
var q33_calculator = '1';

//question34
var q34_first=random(40,10);
var q34_second=random(6,2);
var q34_third=random(15,3);
var q34_fourth=random(40,4);
var q34_desc = '';
var q34_question ='Wat is '+q34_first+' x '+q34_second+' + '+q34_third+' x '+q34_fourth+' ?';
var q34_answer  = q34_first * q34_second + q34_third * q34_fourth;
var q34_image = '';
var q34_selectoptions = '';
var q34_calculator = '';

//question35
var q35_first=random(15,5);
var q35_second=random(500,100);
var q35_desc = '';
var q35_question ='Wat is '+q35_first+' % van '+q35_second+' ?';
var q35_answer  = Math.round(((q35_second/100)*q35_first)*100)/100;
var q35_image = '';
var q35_selectoptions = '';
var q35_calculator = '';

//question36
var q36_first=random(30,5);
var q36_second=random(500,100);
var q36_desc = 'De snoepverkoper verdeelt '+q36_first+' kilo paaseieren in zakjes van '+q36_second+' gram.';
var q36_question ='Hoeveel zakjes paaseieren kan hij vullen<small>Rond af op hele zakjes</small>';
var q36_answer  = Math.round((q36_first *1000) / q36_second);
var q36_image = '';
var q36_selectoptions = '';
var q36_calculator = '1';

//question37
var q37_desc = 'De toets Geschiedenis heeft 12 vragen.<br>Voor elke vraag kun je maximaal 5 punten halen.<br>Het cijfer van deze toets wordt berekend op de manier die je hiernaast ziet.<br><br> Jan wil een 7.0 halen.';
var q37_question ='Hoeveel punten moet hij dan halen?';
var q37_answer  = 40;
var q37_image = 'img25.png';
var q37_selectoptions = '';
var q37_calculator = '1';

//question38
var q38_first=random(300,50);
var q38_second=random(50000,10000,100);
var q38_desc = 'Piter leest deze advertentie.<br>Hij bestelt een laptop van € '+q38_first+',- en krijgt deze korting.<br>De verzendkosten bedragen € 7,95.<br>Pieter heeft '+q38_second+' op zijn bankrekening staan.';
var q38_question ='Hoeveel euro heeft Pieter na aankoop van deze laptop op zijn bankrekening staan?';
var q38_calc  = q38_second - (((q38_first/100)*80)+7.95);
var q38_answer = Math.round(q38_calc *100)/100;
var q38_image = 'img26.png';
var q38_selectoptions = '';
var q38_calculator = '';

//question39
var q39_first=random(100,20);
var q39_second=random(200,30);
var q39_third=random(300,50);
var q39_fourth=random(410,20);
var q39_fifth=random(500,50);
var q39_sixtynine= random(600,40);
var q39_desc = '';
var q39_question ='wat is '+q39_first+' + '+q39_second+' + '+q39_third+' + '+q39_fourth+' + '+q39_fifth+' + '+q39_sixtynine+' ?';
var q39_answer  = q39_first + q39_second + q39_third + q39_fourth + q39_fifth + q39_sixtynine;
var q39_image = '';
var q39_selectoptions = '';
var q39_calculator = '1';

//question40
var q40_desc = '';
var q40_question ='Met hoeveel procent is de bevolking van China in 10 jaar toegenomen?<small>Rond af op 1 decimaal</small>';
var q40_answer  = 3.6;
var q40_image = 'img27.png';
var q40_selectoptions = '';
var q40_calculator = '1';

//question41
var q41_desc = 'Schoolfeest 18 juni, alle drankjes 1 muntje.';
var q41_question ='Hoeveel liter aan drankjes is deze avond in totaal verkocht?<small>rond af met 1 decimaal</small>';
var q41_answer  = 134.7 ;
var q41_image = 'img28.png';
var q41_selectoptions = '';
var q41_calculator = '1';

//question42
var q42_first=random(8,3);
var q42_desc = 'Familie de Groot (vader, moeder, Tim van 17 jaar, Lot van 15 jaar) gaat '+q42_first+' nachten naar de camping "In de Polder".<br><br>Ze zetten een grote tent en een bijzettentje op.<br>Ze maken dagelijks gebruik van de douche en elektriciteit.';
var q42_question ='Hoeveel euro moeten ze betalen?';
var q42_answer  =((4 * 4.75)+14) * q42_first;
var q42_image = 'img29.png';
var q42_selectoptions = '';
var q42_calculator = '1';

//question43
var q43_desc = 'De Eiffeltoren in Parijs is 324 m hoog.<br>In het schaalmodel staan de pilaren 1,4 cm uit elkaar.';
var q43_question ='Hoeveel meter staaaan de pilaren van de echte Eiffeltoren uit elkaar?';
var q43_answer  =   75.6;
var q43_image = 'img30.png';
var q43_selectoptions = '';
var q43_calculator = '1';

//question44
var q44_first=random(800,200);
var q44_desc = 'Linda, Mandy en Carolien kopen een nieuwe televisie voor hun ouders.<br>Linda betaalt de helft,Mandy 1/4 deel en Carolien de rest.<br>De televisie kost zonder korting '+q44_first+',- euro.';
var q44_question ='Hoeveel moet Carolien betalen?<small>rond af op 2 decimalen</small>';
var q44_som  =(((q44_first/100)*55)/100) *25;
var q44_answer = Math.round(q44_som *100)/100;
var q44_image = 'img31.png';
var q44_selectoptions = '';
var q44_calculator = '1';

//question45
var q45_first=random(35000,2000);
var q45_second=random(160,20);
var q45_desc = 'Wat is '+q45_first+' : '+q45_second+' ?';
var q45_question ='Rond af op 2 decimalen';
var q45_answer = Math.round((q45_first / q45_second)*100)/100;
var q45_image = '';
var q45_selectoptions = '';
var q45_calculator = '';

//question46
var q46_first=random(1000,200);
var q46_second=random(800,100);
var q46_desc = 'een gemeente heeft '+q46_first+' ton strooizout in voorraad.<br>De hoeveelheid zout bij een strooibeurt is 10 gram per m2.<br><br>In deze gemeente hebben de wegen een totale lengte van '+q46_second+' km.<br>De breedte van de wegen is gemiddeld 5 meter.';
var q46_question ='Hoeveel keer kunnen de wegen gestrooid worden? <small>rond af naar hele strooibeurten</small>';
var q46_calc =  (q46_first * 1000000)/10 ;
var q46_answer = Math.round(q46_calc / ((q46_second * 1000 )*5));
var q46_image = '';
var q46_selectoptions = '';
var q46_calculator = '1';

//question47
var q47_first=random(1000,200);
var q47_second=random(800,100);
var q47_desc = 'Ruud wil dubbel glas in zijn vakantiehuisje.<br>De maten van de ramen zijn:<br><br>Achterkant:<br>1 raam van 70cm x 90cm<br><br>Zijkanten:<br>2 ramen van 58cm x 90cm en 2 ramen van 42cm x 90cm<br><br>Ruud kiest HR+ glas, hij laat het glas plaatsen.';
var q47_question ='Hoeveel euro moet Ruud betalen? <small>als het moet, rond af op 2 decimalen</small>';
var q47_answer = 355.38;
var q47_image = 'img31.png';
var q47_selectoptions = '';
var q47_calculator = '1';

//question48
var q48_desc = '';
var q48_question ='Uit hoeveel blokjes bestaat dit bouwsel?';
var q48_answer = 65;
var q48_image = 'img32.png';
var q48_selectoptions = '';
var q48_calculator = '1';

//question49
var q49_desc = '';
var q49_question ='Van welke figuur staat hier de bouwplaat?';
var q49_answer = 2;
var q49_image = 'img33.png';
var q49_selectoptions = {1: 'Cilinder', 2: 'Prisma', 3: 'Kegel', 4: 'Piramide'};
var q49_calculator = '';

//question50
var q50_desc = 'Onno heeft per ongeluk 300 gram boter in de kom gedaan';
var q50_question ='Hoe kan hij dit het beste corrigeren?';
var q50_answer = 4;
var q50_image = 'img34.png';
var q50_selectoptions = {1: 'nog 1/2 ei en 100 gram cakemeel erbij', 2: 'nog ½ ei en 150 gram cakemeel erbij', 3: 'nog 1 ei en 100 gram cakemeel erbij', 4: 'nog 1 ei en 150 gram cakemeel erbij'};
var q50_calculator = '1';

//question51
var q51_first=  random(12000,2000,100);
var q51_desc = 'Erik wil deze spelcomputer kopen.<br>Hij heeft  € '+q51_first+' gespaard';
var q51_question ='Hoeveel geld komt Erik tekort?<small>als het moet, rond af op 2 decimalen</small>';
var q51_answer = Math.round((((177/100)*89) - q51_first)*100)/100;
var q51_image = 'img35.png';
var q51_selectoptions = '';
var q51_calculator = '1';

//question52
var q52_first=random(420,40);
var q52_second=random(200,30);
var q52_third=random(20,5);
var q52_desc = '';
var q52_question ='wat is '+q52_first+' - ('+q52_second+' + '+q52_third+') ?';
var q52_answer  = q52_first - (q52_second + q52_third);
var q52_image = '';
var q52_selectoptions = '';
var q52_calculator = '';

//question53
var q53_first=random(4000,500,100);
var q53_second=random(6,2);
var q53_desc = '';
var q53_question ='wat is '+q53_first+' : '+q53_second+' ?';
var q53_answer  = Math.round((q53_first /q53_second)*100)/100;
var q53_image = '';
var q53_selectoptions = '';
var q53_calculator = '';

//question54
var q54_desc = 'Murat gaat met het vliegtuig naar zijn familie in Turkije en neemt potten jam mee. Zijn eigen bagage weegt 13½ kg.<br>Hij mag maximaal 20kg bagage meenemen.';
var q54_question ='Hoeveel van deze potten jam kan Murat maximaal meenemen?';
var q54_answer  = 14;
var q54_image = 'img36.png';
var q54_selectoptions = '';
var q54_calculator = '1';

//question55
var q55_desc = 'Deze kaart heeft een schaal van 1: 51 400 000.<br>De afstand tussen Algiers in Algarije en Caïro in Egypte op de kaart is 5,3 cm.';
var q55_question ='Wat is de afstand in kilometers in werkelijkheid?<br><small>Rond af op kilometers</small>';
var q55_answer  = 2724;
var q55_image = 'img37.png';
var q55_selectoptions = '';
var q55_calculator = '1';

//question56
var q56_desc = 'Mariska en Sjors vertrekken tegelijk.';
var q56_question ='Hoeveel minuten is Mariska eerder op de bestemming als Sjors?';
var q56_answer  = 104;
var q56_image = 'img38.png';
var q56_selectoptions = '';
var q56_calculator = '1';

//question57
var q57_first = random(35,5);
var q57_second =random(40,10);
var q57_desc = 'De spoorbaan tussen Arnhem en Doetinchem heeft een lengte van '+q57_first+' kilometer. Een trein doet '+q57_second+' minuten over de hele reis.';
var q57_question ='Wat is de gemiddelde snelheid in kilometers per uur?<br><small>rond af op hele kilometers</small>';
var q57_answer  = Math.round((q57_first/q57_second)*60) ;
var q57_image = '';
var q57_selectoptions = '';
var q57_calculator = '1';

//question58
var q58_first = random(110,10);
var q58_second =random(130,30);
var q58_desc = 'Op 1 januari 2010 krijgt Carice € '+q58_first+',- van haar opa.<br>Ze zet dit geld de volgende dag op een spaarrekening met 4% rente per jaar.<br>Precies een jaar later, op 2 januari 2011, zet ze nog eens €'+q58_second+',- op de rekening.';
var q58_question ='Welk bedrag staat er op 2 januari 2012 op de spaarrekening?';
var q58_2010 = (q58_first/100)*104;
var q58_2011 = ((q58_2010 + q58_second)/100)*104;
var q58_answer  = Math.round((((q58_2011 /100)*104)*100)/100);
var q58_image = '';
var q58_selectoptions = '';
var q58_calculator = '1';

//question59
var q59_first=random(2200,250);
var q59_second=random(850,150);
var q59_third=random(140,30);
var q59_desc = '';
var q59_question ='wat is '+q59_first+' - '+q59_second+' + '+q59_third+' ?';
var q59_answer  = q59_first - q59_second + q59_third;
var q59_image = '';
var q59_selectoptions = '';
var q59_calculator = '';

//question60
var q60_first=random(60,10);
var q60_second=random(40,15,100);
var q60_desc = '';
var q60_question ='wat is '+q60_first+' : '+q60_second+' ?';
var q60_answer  =Math.round(((q60_first / q60_second)*100)/100);
var q60_image = '';
var q60_selectoptions = '';
var q60_calculator = '';
                                                                                                                /// einde vragen \\\


function loadTest()
{
    window.answers = {};
    window.giveanswers = {};
    $('.imageBox').hide();
    $('#inputDesc').html('Welkom bij het oefenexamen rekenen van 2012 niveau 3F. <br>Voor het berekenen van de antwoorden mag je een kladblok gebruiken. Als er bij een vraag een rekenmachine symbool staat, kun je daar op klikken om de rekenmachine te gebruiken.<br> ' +
    'Je kunt het antwoordt verbeteren zolang je in het scherm van de betreffende vraag bent. <br><br> Je kunt NIET terug naar een vorige opgave! <br><br>');
    $('#inputQuestion').html(' Klik op "volgende" om te beginnen.');
    $('#inputField').hide();
    $('.calculatorButton').hide();
}

function getQuestion(id)
{
    if(eval("q" + id + "_answer") != undefined)
    {
        var question = {
            id: id,
            question: eval("q" + id + "_question"),
            answer: eval("q" + id + "_answer"),
        };
        if(eval("q" + id + "_image") != '')
        {
            question['image'] = eval("q" + id + "_image");
        }
        if(eval("q" + id + "_desc") != '')
        {
            question['desc'] = eval("q" + id + "_desc");
        }
        if(eval("q" + id + "_selectoptions") != '')
        {
            question['selectOptions'] = eval("q" + id + "_selectoptions");
            question['type'] = 2;
        }
        else
        {
            question['type'] = 1;
        }
        if(eval("q" + id + "_calculator") != '')
        {
            question['calculator'] = eval("q" + id + "_calculator");
        }
        return question;
    }
    else
    {
        return 0;
}

}

function nextQuestion()
{
    if(window.question == undefined)
    {
        window.question = 1;
        toggleStatus("Vraag " + window.question + " van de 60");
    }
    else
    {
        var question = getQuestion(window.question);
        if($('#answer').val().replace(',', '.') == question.answer)
        {
            window.answers[window.question] = 1;
        }
        else
        {
            window.answers[window.question] = 0;
            window.giveanswers[window.question] = $('#answer').val();
        }
        if(window.question == 60)
        {
            toggleStatus("Einde van het oefenexamen");
        }
        else
        {
            toggleStatus("Vraag " + (window.question + 1) + " van de 60");
        }
        window.question++;
    }
    $('.allContent').slideUp();
    setTimeout(function() {
        if(window.question <= 60)
        {
            var question = getQuestion(window.question);
            $('#inputQuestion').html(question.question);
            if(question.image != undefined)
            {
                $('#inputImage').attr("src", "img/" + question.image);
                $('.imageBox').show();
            }
            else
            {
                $('.imageBox').hide();
            }
            if(question.desc != undefined)
            {
                $('#inputDesc').html(question.desc);
                $('#inputDesc').show();
            }
            else
            {
                $('#inputDesc').hide();
            }
            if(question.type == 1)
            {
                $('#inputField').html('<input type="text" id="answer"/>');
                $('#inputField').show();
            }
            else {
                var count = 0;
                var i;
                for (i in question.selectOptions) {
                    if (question.selectOptions.hasOwnProperty(i)) {
                        count++;
                    }
                }
                var options = "";
                for (check = 1; check <= count; check++) {
                    var options = options + "<option value=\"" + check + "\">" + question.selectOptions[check] + "</option>";
                }
                $('#inputField').html('<select id="answer">' + options + '</select>');
                $('#inputField').show();
            }
            if(question.calculator != undefined)   
            {
                $('#inputCalculator').attr("src", "img/calculator_img.png");
                $('.calculatorButton').show();
                $('#Calculator').hide();
            }
            else
            {
                $('.calculatorButton').hide();
                $('#Calculator').hide();

            }
        }
        clearTimeout(secondTimeout);
        var secondTimeout = setTimeout(function() {
            if(window.question <= 60)
            {
                $('.allContent').slideDown();
            }
            else
            {
                showEnd();
            }
        }, 300);
    }, 300);
}

function getObject(array)
{
    var count = 0;
    var i;
    var newarray = [];
    for (i in array)
    {
        if (array.hasOwnProperty(i))
        {
            newarray[i] = array[i];
            count++;
        }
    }
    return newarray;
}

function showEnd()
{
    var wrong = "";
    var quest = "";
    $('.allContent').slideUp();
    disableButton('volgende', 1);
    if(window.answers != undefined)
    {
        var good = 0;
        var bad = 0;
        var count = 0;
        var i;
        for (i in window.answers) {
            quest = "";
            options = "";
            if (window.answers.hasOwnProperty(i)) {
                if(window.answers[i] == 1)
                {
                    good++;
                }
                else
                {
                    bad++;
                }
                if(window.giveanswers[i] != undefined)
                {
                    quest = "<div class=\"whole\">";
                    var question = getQuestion(i);
                    if(question['image'] != undefined)
                    {
                        quest = quest + '<div class="imageABox"><img id="inputImage" src="img/' + question['image'] + '" width="425"></div>'
                    }
                    quest = quest + '<div class="contentBox">';
                    if(question['desc'] != undefined)
                    {
                        quest = quest + '<div class="inputDesc" style="text-align: center;">' + question['desc'] + '</div>';
                    }
                    quest = quest + '<div class="inputQuestion" style="font-weight: bolt; text-align: center;">' + question['question'] + '</div>';
                    if(question['type'] == 1)
                    {
                        quest = quest + '<div class="inputField" style="text-align: center;"><input type="text" value="' + question['answer'].toString().replace('.', ',') + '"/><br />';
                        if(window.giveanswers[i] != '')
                        {
                            quest = quest + ' <font color="red">(' + window.giveanswers[i] + ')</font></div>';
                        }
                        else
                        {
                            quest = quest + '<font color="red">Geen antwoord gegeven</font></div>';
                        }
                    }
                    else
                    {
                        var values = getObject(question.selectOptions);
                        for(c = 1; c < values.length; c++)
                        {
                            if(question['answer'] == c)
                            {
                                var options = options + "<option value=\"" + c + "\" SELECTED>" + values[c] + "</option>";
                            }
                            else
                            {
                                var options = options + "<option value=\"" + c + "\">" + values[c] + "</option>";
                            }
                        }
                        var answer = window.giveanswers[i];
                        quest = quest + '<div class="inputField" style="text-align: center;"><select>' + options + '</select><br /><font color=\"red\">Jij antwoorde: ' + values[answer] + '</font></div>';
                    }
                    quest = quest + '</div></div>';
                    wrong = wrong + quest;
                }
                count++;
            }
        }
        if(good == 60)
        {
            $('#gameOver').addClass('green');
            $('#gameOverText').html('Goed gedaan!, je hebt alle vragen goed beantwoord!');
        }
        else
        {
            $('#gameOver').addClass('red');
            $('#gameOverText').html('Je hebt niet alle vragen goed beantwoord, kijk hieronder wat je hebt fout gedaan.');
        }
        $('#gameOverText').html($('#gameOverText').html() + '<br />Goed: ' + good + ' Fout: ' + bad);
        $('#gameOverAnswers').html(wrong);
    }
    else
    {
        alert('System failure.');
    }
    $('#gameOver').slideDown();
    $('#gameOverAnswers').slideDown();
}

function Show_Calculator(){
        $('#Calculator').toggle();
}