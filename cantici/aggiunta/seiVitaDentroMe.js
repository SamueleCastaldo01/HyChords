import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function seiVitaDentroMe({
  a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru,
}) {
  return (
    <>
      <View style={globalStyles.containerCantico}>


        {/* ===================== PARTE IN SOL ===================== */}

        {/* Linea 1: "Sei vita dentro me," (Bis)  -> va a capo qui */}
        <View style={globalStyles.righeCantico}>
          {/* SOL su S di "Sei" */}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
            <Text style={globalStyles.textCanticoColo}>1. "</Text>
          </Text>
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>Sei vita </Text>

          {/* DO su d di "dentro" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>dentro </Text>

          {/* SOL su m di "me," */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>me," <Text style={globalStyles.textCanticoColo}>(Bis)</Text></Text>
        </View>

        {/* Linea 2: la tua presenza, sento, in me. */}
        <View style={globalStyles.righeCantico}>
          {/* MI- su p di "presenza" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>la tua pres</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>enza </Text>

          {/* DO su s di "sento" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>sento, in </Text>

          {/* RE su m di "me." */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>me.</Text>
        </View>

        {/* Linea 3: "Pane di vita sei," (Bis)  -> va a capo qui */}
        <View style={globalStyles.righeCantico}>
          {/* SOL su P di "Pane" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>"Pane di vita </Text>

          {/* DO su s di "sei," */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>sei," <Text style={globalStyles.textCanticoColo}>(Bis)</Text></Text>
        </View>

        {/* Linea 4: la tua parola, parla, a me. */}
        <View style={globalStyles.righeCantico}>
          {/* SOL su p di "parola" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>la tua par</Text>

                    {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ola, </Text>

          {/* MI- su p di "parla" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>parla, a </Text>

          {/* DO su m di "me." + RE chiusura */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}> {d}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>me.</Text>
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        </View>

        <View style={globalStyles.SpazioCantico} />

        {/* CORO in SOL (come tua ultima versione) */}
        <View style={globalStyles.righeCantico}>
        {/* SOL su "ed" */}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
            <Text style={globalStyles.textCanticoColo}>Coro: </Text>
        </Text>
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ed i</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o, oh m</Text>

        {/* RE su "S" di "Signor" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>io Sign</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>or, deside</Text>

        {/* MI- su "deside..." */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ro t</Text>

        {/* DO / LA- / RE su "t" di "te!" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}  {a}-  {d}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>e !</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {/* SOL su "ed" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ed i</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{g}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o, oh m</Text>


        {/* RE su "S" di "Signor" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>io Sign</Text>

        {/* MI- su "s" di "son" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>or, son perso s</Text>

        {/* DO su "s" di "senza" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>enza t</Text>

        {/* LA- / RE su "t" di "te!" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}-  {d}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>e!</Text>
        </View>

        <View style={globalStyles.SpazioCantico} />

        {/* ===================== PARTE IN LA (RIPETIZIONE, STESSI A CAPO) ===================== */}

                {/* Linea 1: "Sei vita dentro me," (Bis)  -> va a capo qui */}
        <View style={globalStyles.righeCantico}>
          {/* SOL su S di "Sei" */}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
            <Text style={globalStyles.textCanticoColo}>1. "</Text>
          </Text>
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>Sei vita </Text>

          {/* DO su d di "dentro" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>dentro </Text>

          {/* SOL su m di "me," */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>me," <Text style={globalStyles.textCanticoColo}>(Bis)</Text></Text>
        </View>

        {/* Linea 2: la tua presenza, sento, in me. */}
        <View style={globalStyles.righeCantico}>
          {/* MI- su p di "presenza" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>la tua pres</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>enza </Text>

          {/* DO su s di "sento" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>sento, in </Text>

          {/* RE su m di "me." */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>me.</Text>
        </View>

        {/* Linea 3: "Pane di vita sei," (Bis)  -> va a capo qui */}
        <View style={globalStyles.righeCantico}>
          {/* SOL su P di "Pane" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>"Pane di vita </Text>

          {/* DO su s di "sei," */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>sei," <Text style={globalStyles.textCanticoColo}>(Bis)</Text></Text>
        </View>

        {/* Linea 4: la tua parola, parla, a me. */}
        <View style={globalStyles.righeCantico}>
          {/* SOL su p di "parola" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>la tua par</Text>

                    {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ola, </Text>

          {/* MI- su p di "parla" */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>parla, a </Text>

          {/* DO su m di "me." + RE chiusura */}
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}> {e}</Text></View>}
          <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>me.</Text>
          {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        </View>

        <View style={globalStyles.SpazioCantico} />

        {/* CORO in LA (come tua ultima versione) */}
        <View style={globalStyles.righeCantico}>
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
            <Text style={globalStyles.textCanticoColo}>Coro: </Text>
        </Text>
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ed i</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o, oh m</Text>

        {/* RE su "S" di "Signor" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>io Sign</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>or, deside</Text>

        {/* MI- su "deside..." */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ro t</Text>

        {/* DO / LA- / RE su "t" di "te!" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}  {b}-  {e}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>e !</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {/* SOL su "ed" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ed i</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o, oh m</Text>


        {/* RE su "S" di "Signor" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{e}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>io Sign</Text>

        {/* MI- su "s" di "son" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{fDiesis}-</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>or, son perso s</Text>

        {/* DO su "s" di "senza" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>enza t</Text>

        {/* LA- / RE su "t" di "te!" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-  {e}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>e!</Text>
        </View>

        <View style={globalStyles.SpazioCantico} />


        <View style={globalStyles.righeCantico}>
        {/* SI- su "S" di "Sei" */}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>
            <Text style={globalStyles.textCanticoColo}>Finale: </Text>
        </Text>
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>Sei vita d</Text>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>entro</Text>

        {/* RE/MI su "P" di "Pane" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d} {e}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}> me, Pane di v</Text>

        {/* SI- su "s" di "sei," */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{b}-</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ita sei, </Text>

        {/* RE/MI chiusura frase */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{d}/{e}</Text></View>}
        </View>

        <View style={globalStyles.righeCantico}>

        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}></Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>son perso senza</Text>
        {/* LA su "s" di "son" */}
        {accordiStru!=="Testo" && <View><Text style={globalStyles.AccordoCantico}>{a}</Text></View>}
        <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}> Te!</Text>
        </View>

      </View>
    </>
  );
}
