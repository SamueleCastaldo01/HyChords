import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import ColorfulText from '../../components/ColorfulText';

export default function IlNomeGesu ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
                                   <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                                      <Text style={globalStyles.textCanticoColo}>Intro: </Text> 3 4  5 7 8 (due v.)| 4 5 4 7 8 3 
                                   </Text>
        </View>

        <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
            <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                <Text style={globalStyles.textCanticoColo}>V1: </Text> Ambientale. 
                <Text style={globalStyles.textCanticoColo}> Interm: </Text> Riff
            </Text>
        </View>

        <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
            <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                <Text style={globalStyles.textCanticoColo}>V2: </Text>Arpeggio  5585 
                <Text style={globalStyles.textCanticoColo}> Coro: </Text> Accordi sulla prima corda
            </Text>
        </View>

         <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
            <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                <Text style={globalStyles.textCanticoColo}>V3: </Text>
                <ColorfulText>Arpeggio  #5#5 1#5 (loop) 23   |  #5#5 1#5   53 rip.</ColorfulText>
            </Text>
        </View>

         <View style={[globalStyles.righeCantico, { marginTop: 0 }]}>
            <Text style={accordiStru != "Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
                <Text style={globalStyles.textCanticoColo}>Ponte: </Text> P.C. P.M.
            </Text>
        </View>

         <View style={globalStyles.SpazioCantico}></View>
        


        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Voglio dichiarare il nome Gesù</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Sopra ogni cuore e anima</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Perché c'è pace nella sua presenza</Text>
        </View>

        <View style={globalStyles.righeCantico}>
             <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Solo G</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>esù</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* V.2 (Struttura senza testo) */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>V.2 </Text>...</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* CORO */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoColo}>CORO: </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>In Te po</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tenza e </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>guarig</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ione, c'è vit</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>a in Te</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Non più fo</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rtezze, sp</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lendi nel </Text>
               {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>buio, u</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>n fuoco sei</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* V.3 (Struttura senza testo) */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>V.3 </Text>...</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* BRIDGE */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoColo}>BRIDGE: </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>[Gesù sulle vette, Gesù nelle strade</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{cDiesis}-</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù sui nemici, dentro l'oscurità</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Sulla mia famiglia dichiaro il santo nome</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù] <Text style={globalStyles.textCanticoColo}>(X2)</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* CORO (Struttura) */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>CORO...</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* FINALE (Struttura) */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>FINALE - V.1...</Text></Text>
        </View>

    </View>
    </>
    )
}