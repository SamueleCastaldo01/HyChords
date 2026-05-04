import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import ColorfulText from '../../components/ColorfulText';

export default function UnVasoDAlabastro ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

              {accordiStru == "Elettrica" &&
                  <>
                  
                     <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
                           <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                              <Text style={globalStyles.textCanticoColo}>2 parte p.m.:</Text> 1pp 2pp 3pp 1.pp 1h2 7
                           </Text>
                     </View>

                     <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
                           <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                              ripetere il pattern andando indietro con la scala sulla stessa corda, fino al 5 e poi andare avanti nota per nota 5 6 7 1 2 3 4 3
                           </Text>
                     </View>

                     <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
                           <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                              <Text style={globalStyles.textCanticoColo}>Coro Ciclo:</Text> 5 h 6 3 (per tre volte leggera pausa sul 6 poi si ripete e si torna indietro sulla scala pentatonica stesso pattern, non è veloce bisogna essere precisi) quando si ripete il giro fare il primo pattern bending di un 1/5 e tornare sul 6
                           </Text>
                     </View>


                     <View style={globalStyles.SpazioCantico}></View>
                  </>
               }

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text>La sola cosa c</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>he, di più prezioso </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ho,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>è un vaso d'alab</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>astro, lo rompo ai piedi t</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uoi,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu v</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ali molto </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>più, dell’olio oh mio Ges</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ù,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> dei desideri m</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>iei, la gi</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oia trovo in te</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
         {accordiStru == "Elettrica" &&<View><ColorfulText>    -3       2   1       1       1      1     1   h2   2  1       3 </ColorfulText></View>  }
            <Text  style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>spando il</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text  style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}> mio cuore dav</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text  style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>anti al Re, </Text>
        </View>

        <View style={globalStyles.righeCantico}>
         {accordiStru == "Elettrica" &&<View><ColorfulText>      3           2      1       1        1     1     5         5  Slide e passare ai p.c. </ColorfulText></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>che il suo </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>sangue versò per </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>me!</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
         {accordiStru == "Elettrica" &&<View><ColorfulText>                                                                                           -5 3 1 H 2-</ColorfulText></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>Ecc</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>omi Sign</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>or, io mi o</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ffro a</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}> te,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
          {accordiStru == "Elettrica" &&<View><ColorfulText>                                          3      5     5    1 </ColorfulText></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>pr</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>endim</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>i ti d</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>o, ogni p</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>arte,</Text>
        </View>
        
        <View style={globalStyles.righeCantico}>
         {accordiStru == "Elettrica" &&<View><ColorfulText>    3        5        5     1         2   1   -3 </ColorfulText></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>del mio </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>cuore, Ges</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ù.</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2 Parte </Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro (Bis) </Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
         {accordiStru == "Elettrica" &&<View><ColorfulText>                        3      2     4       3     3     2     4      3</ColorfulText></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Ponte: "</Text></Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>Santo, santo, </Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>tu sei santo,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
         {accordiStru == "Elettrica" &&<View><ColorfulText>    3     2    4       3      1      2-</ColorfulText></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}></Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>santo sei Sign</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>or!<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro (Bis) </Text></Text>
        </View>

    </View>
    </>
    )
}