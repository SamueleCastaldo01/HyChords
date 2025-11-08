import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import ColorfulText from '../../components/ColorfulText';

const Acc = ({ show, children }) =>
  show ? (
    <View>
      <Text style={globalStyles.AccordoCantico}>{children}</Text>
    </View>
  ) : null;

export default function Romani828({
  a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru,
}) {
    return (
    <>
    <View style={globalStyles.containerCantico}>


    { accordiStru == "Elettrica" && 
    <>
    </>
    }

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1.</Text>Qua</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View> }
            <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>nte domande dent</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{a}</Text></View> }
            <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ro di me</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Cerc</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>avo risposte senz</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-/{f}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>a un perché</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Della Tu</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>a compassione dubitavio i</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}4 {f}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Pot</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>vo sentire il dol</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{a}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>r che</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Caus</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ava ferite nell'anim</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-{f}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>a</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View> }
               <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>mi chiedevo: il mio Dio dov'</Text>
               {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}4 {f}</Text></View> }
               <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>è?</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Pre Coro: </Text>Poi ho compr</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View> }
            <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>eso</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Che nella v</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ita ogni cosa ha un mo</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>tiv</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{a}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Mi hai rilev</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ato Che tutto c</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>opera al b</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}4 {f}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>en</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: </Text>E che alla </Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View> }
            <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>fine p</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{a}</Text></View> }
            <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>oi tutto que</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}/{g}</Text></View> }
            <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>llo che accardr</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{f}</Text></View> }
            <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>à</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>E' pa</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>rte del Tuo p</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{d}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>iano p</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}-7</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>er la vita mi</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}4</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>a</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>La guida tr</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>over</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{a}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>ò solo ne</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}/{g}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>lla tua Paro</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{f}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>la</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>il me</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>glio sei per m</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{bBemolle}/{d}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>la mi</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}-7</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>a fiducia i</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}4</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o ripongo in T</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-  {d}-  {eBemolle}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>e</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>


        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.Parte    Pre Coro    Coro</Text></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>la mi</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}-7</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>a fiducia i</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f}4</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>o ripongo in </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{eBemolle}  {bBemolle}/{d}  {d}-7  {f}4  {f}</Text></View> }
              <Text style={accordiStru!=="Testo" ? globalStyles.textCantico : globalStyles.textCanticoNo}>Te</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro</Text></Text>
        </View>

        
    </View>
    
    </>
    )
}