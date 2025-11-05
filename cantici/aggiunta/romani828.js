import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

const Acc = ({ show, children }) =>
  show ? (
    <View>
      <Text style={globalStyles.AccordoCantico}>{children}</Text>
    </View>
  ) : null;

export default function Romani828({
  a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru,
}) {
  const show = accordiStru !== "Testo";

  return (
    <>
      <View style={globalStyles.containerCantico}>

        {/* ===================== INTRO ===================== */}
        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Intro: {g}-   {d}-   {eBemolle}   {bBemolle}   {bBemolle}/{f}  </Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>{g}-   {d}-   {eBemolle}   {eBemolle} </Text>
        </View>

                <View style={globalStyles.SpazioCantico} />


        {/* ===================== STROFA 1 ===================== */}
        {/* "Quante domande dentro di me," */}
        <View style={globalStyles.righeCantico}>
          {/* SIb su "te" di Quante */}
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Quan</Text>
          <Acc show={show}>{bBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>te domande dentro</Text>
          {/* SIb su "d" di dentro */}
          <Acc show={show}>{bBemolle}</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* LA su "di me," */}
          <Acc show={show}>{a}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}> di me,</Text>
        </View>

        {/* "Cercavo risposte senza un perché," */}
        <View style={globalStyles.righeCantico}>
          {/* SOLm su "vo" di Cercavo */}
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Cerca</Text>
          <Acc show={show}>{g}-</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>vo risposte senza</Text>
          {/* SOLm su "senza" */}
          <Acc show={show}>{g}-</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* FA su "un perché" */}
          <Acc show={show}>{f}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}> un perché,</Text>
        </View>

        {/* "Della Tua compassione dubitavo io" */}
        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Della Tua</Text>
          {/* MIb su "c" di compassione */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}> compassione dubitavo io</Text>
          {/* FA4 poi FA come cadenza */}
          <Acc show={show}>{f}4</Acc>
          <Acc show={show}>{f}</Acc>
        </View>

        {/* "Potevo sentire il dolore che" */}
        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Pote</Text>
          {/* SIb su "vo" */}
          <Acc show={show}>{bBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>vo sentire il dolo</Text>
          {/* SIb su "dolo..." */}
          <Acc show={show}>{bBemolle}</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* LA su "re che" */}
          <Acc show={show}>{a}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>re che</Text>
        </View>

        {/* "Causava ferite nell'anima" */}
        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Causa</Text>
          {/* SOLm su "va" */}
          <Acc show={show}>{g}-</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>va ferite nell'anima</Text>
          {/* SOLm su "anima" */}
          <Acc show={show}>{g}-</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* FA cadenza */}
          <Acc show={show}>{f}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}> </Text>
        </View>

        {/* "Mi chiedevo: 'Il mio Dio dov'è?'" */}
        <View style={globalStyles.righeCantico}>
          {/* MIb su "mi" */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>mi chiedevo: "Il mio Dio dov'è?"</Text>
          {/* FA4 FA cadenza */}
          <Acc show={show}>{f}4</Acc>
          <Acc show={show}>{f}</Acc>
        </View>

        <View style={globalStyles.SpazioCantico} />

        {/* ===================== PRE-CORO ===================== */}
        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Poi ho compre</Text>
          {/* SOLm su "so" */}
          <Acc show={show}>{g}-</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>so</Text>
        </View>

        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Che nella vi</Text>
          {/* MIb su "ta" */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>ta ogni cosa ha un moti</Text>
          {/* SIb su "vo" */}
          <Acc show={show}>{bBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>vo</Text>
          {/* SIb appoggio sulla pausa */}
          <Acc show={show}>{bBemolle}</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* LA come passaggio */}
          <Acc show={show}>{a}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}> </Text>
        </View>

        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Mi hai rivela</Text>
          {/* SOLm su "to" */}
          <Acc show={show}>{g}-</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>to</Text>
        </View>

        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Che tutto co</Text>
          {/* MIb su "opera" */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>opera al ben</Text>
          {/* FA4 FA cadenza */}
          <Acc show={show}>{f}4</Acc>
          <Acc show={show}>{f}</Acc>
        </View>

        <View style={globalStyles.SpazioCantico} />

        {/* ===================== CORO ===================== */}
        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>E che alla fi</Text>
          {/* SIb su "ne" */}
          <Acc show={show}>{bBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>ne poi</Text>
          {/* SIb appoggio su "poi" */}
          <Acc show={show}>{bBemolle}</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* LA su "tutto" */}
          <Acc show={show}>{a}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>tutto quel</Text>
          {/* MIb su coda di "quello" */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>lo che accadrà</Text>
          {/* SOL su "lo" di "quello che" secondo traccia */}
          <Acc show={show}>{g}</Acc>
          {/* SIb su "accadrà" */}
          <Acc show={show}>{bBemolle}</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* FA cadenza */}
          <Acc show={show}>{f}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}> </Text>
        </View>

        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>È par</Text>
          {/* MIb su "te" di parte */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>te del Tuo pia</Text>
          {/* SIb su "pia..." */}
          <Acc show={show}>{bBemolle}</Acc>
          {/* RE su "-no" */}
          <Acc show={show}>{d}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>no per </Text>
          {/* DOm7 su "la" */}
          <Acc show={show}>{c}-7</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>la vita mia</Text>
          {/* FA4 cadenza */}
          <Acc show={show}>{f}4</Acc>
        </View>

        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>La guida tro</Text>
          {/* SIb su "verò" */}
          <Acc show={show}>{bBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>verò</Text>
          {/* SIb appoggio */}
          <Acc show={show}>{bBemolle}</Acc>
        </View>
        <View style={globalStyles.righeCantico}>
          {/* LA su "solo" */}
          <Acc show={show}>{a}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}> solo ne</Text>
          {/* MIb su "-l" di "nella" */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>lla Tua Paro</Text>
          {/* SOL su "-la" (nella) */}
          <Acc show={show}>{g}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>la</Text>
          {/* SIb su "Parola" */}
          <Acc show={show}>{bBemolle}</Acc>
          {/* FA chiusura riga */}
          <Acc show={show}>{f}</Acc>
        </View>

        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>Il me</Text>
          {/* MIb su "glio" */}
          <Acc show={show}>{eBemolle}</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>glio sei per me, </Text>
          {/* SIb appoggio */}
          <Acc show={show}>{bBemolle}</Acc>
          {/* RE passaggio */}
          <Acc show={show}>{d}</Acc>
        </View>

        <View style={globalStyles.righeCantico}>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>La mia </Text>
          {/* DOm7 su "fiducia" */}
          <Acc show={show}>{c}-7</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>fiducia io </Text>
          {/* FA4 su "ripongo" */}
          <Acc show={show}>{f}4</Acc>
          <Text style={show ? globalStyles.textCantico : globalStyles.textCanticoNo}>ripongo in Te</Text>
          {/* Coda: SOLm REm MIb */}
          <Acc show={show}>{g}-</Acc>
          <Acc show={show}>{d}-</Acc>
          <Acc show={show}>{eBemolle}</Acc>
        </View>

      </View>
    </>
  );
}
