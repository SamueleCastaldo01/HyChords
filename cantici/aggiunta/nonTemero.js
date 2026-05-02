import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function NonTemero ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>

        {/* STROFA 1 */}
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text></Text>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Io non ho preteso mai dal momento in cui ho</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Deciso di appartenere a Te</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Di avere sempre giorni facili e felici</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E nemmeno di avere sempre il sole</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Chissà quanta pioggia che cadrà</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Su questa vita mia</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* STROFA 2 (Condizionale: Nascosta in modalità accordi, visibile in modalità testo) */}
        {accordiStru != "Testo" ? (
            <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCantico}><Text style={globalStyles.textCanticoColo}>2. </Text>Quante volte ancor dovrò affrontare situazioni...</Text>
            </View>
        ) : (
            <>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2. </Text>Quante volte ancor dovrò affrontare situazioni</Text>
                </View>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}>Che vogliono far cadere l'anima mia</Text>
                </View>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}>Certamente io da solo quanto poco riuscirei</Text>
                </View>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}>A resistere se non ci fossi Tu</Text>
                </View>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}>Mio grande amico sei, Gesù</Text>
                </View>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}>T'amerò ancor di più</Text>
                </View>
            </>
        )}

        <View style={globalStyles.SpazioCantico}></View>

        {/* CORO */}
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoColo}>Coro: </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E quando passerò per delle acque non avrò paura</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Perché Tu sei con me, Signor</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E quando attraverserò i fiumi della vita</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            {accordiStru != "Testo" && <View><Text style={globalStyles.AccordoCantico}> </Text></View>}
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Non verrò sommerso mai</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        {/* STROFA 3 (Manca il testo, impostata come condizionale) */}
        {accordiStru != "Testo" ? (
            <View style={globalStyles.righeCantico}>
                <Text style={globalStyles.textCantico}><Text style={globalStyles.textCanticoColo}>3. </Text>[Inserisci testo strofa 3 qui]...</Text>
            </View>
        ) : (
            <>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>3. </Text>[Inserisci prima riga strofa 3]</Text>
                </View>
                <View style={globalStyles.righeCantico}>
                    <Text style={globalStyles.textCanticoNo}>[Inserisci seconda riga strofa 3]</Text>
                </View>
            </>
        )}

        <View style={globalStyles.SpazioCantico}></View>

        {/* RIPETIZIONE CORO */}
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro... (Bis)</Text></Text>
        </View>

    </View>
    </>
    )
}