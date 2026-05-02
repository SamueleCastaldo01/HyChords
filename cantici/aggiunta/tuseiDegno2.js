import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function TuSeiDegno2 ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        {/* STROFA 1 */}
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text></Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tu sei degno, sei l'agn</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ello </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Santo sei Sign</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>or</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Al tuo trono, </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>un canto nuovo </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Innalziamo a </Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Te</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* CORO */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoColo}>Coro: </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>santo santo santo </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>È Dio onnipotente </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Che era e sempre sa</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rà </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Tutto il mondo canta, </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lodi al Re dei re </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tutto tu sei per me </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{f}</Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e io ti ad</Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}  {g}-  {bBemolle}  {f}</Text></View>}
             <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>oro, ti adoro </Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* STRUTTURA RESTANTE (Senza testo/accordi come richiesto) */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text>Seconda parte...</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro...</Text></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>3. </Text>Terza parte...</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro...</Text></Text>
        </View>

    </View>
    </>
    )
}