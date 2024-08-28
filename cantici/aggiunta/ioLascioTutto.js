import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function IoLascioTutto ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>
    
    { accordiStru != "Elettrica" &&
      <>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text> Q</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uanto tempo ho vis</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>suto </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Senza mai esser fe</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}- {a}/{cDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>lice,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Q</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uanto buio i</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}/{fDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ntorno a </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>me</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Senza ombra di spe</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ranza</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Per </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>quella mia inutile v</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ita, Viv</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}/{cDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>evo io co</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sì      </Text>
            
        </View>
      </>
    }

{ accordiStru === "Elettrica" &&
      <>
        <View style={globalStyles.righeCantico}>
              {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>            6         1     3        3      2     1     6   6</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>1. </Text> Q</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>uanto tempo ho vis</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>suto </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>    7       7       7    7   1       2 1   7  6</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>Senza mai esser fe</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}- {a}/{cDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>lice,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>      3        3     3  6   6                   5      4 </Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>Q</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>uanto buio i</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}/{fDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ntorno a </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>me</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>     5     5  5           5     5   4      4       3</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}></Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>Senza ombra di spe</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ranza</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>    3           2   2      2 3      4  3  2    1  1        1 7    7    1    2   3</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>Per </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>quella mia inutile v</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ita, Viv</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}/{cDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>evo io co</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>sì      </Text>
            
        </View>
      </>
    }



        <View style={globalStyles.SpazioCantico}></View>

        {accordiStru != "Testo" &&
        <View style={globalStyles.righeCantico}>
        {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2Parte.... </Text></Text>
        </View>
        }

        {accordiStru == "Testo" &&
        <>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>2.</Text>Poi qualcuno mi ha parlato Di Gesù</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e del Suo amore,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Quanta luce ora c’è</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Che risplende intorno a me,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ora io sono pronto a morire</Text>
        </View>
        </>
        }

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Per Cristo mio Signor.</Text>
            {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}/{fDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

      { accordiStru != "Elettrica" &&
      <>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: "</Text>“Io lascio tu</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>tto dietro </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>me</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Non c’è più </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f} {a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>posto nel mio c</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>uore</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> Per la trist</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ezza solo a</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c} {a}/{cDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>more, regne</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-      {d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rà<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>
      </>
      }


{ accordiStru === "Elettrica" &&
      <>
        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>                       3    4      5     4    4      3      4        2</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro: "</Text>“Io lascio tu</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>tto dietro </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>me</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>       2      3        4       3   3      2          3       1    1</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>Non c’è più </Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{f} {a}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>posto nel mio c</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>uore</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>       1    2      3   2      2    2       1     1   7      1       2   3    2 3  |finale: 1 7 6</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}> Per la trist</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}-</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>ezza solo a</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c} {a}/{cDiesis}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>more, regne</Text>
              {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}-      {d}</Text></View>  }
            <Text style={accordiStru!="Testo"? globalStyles.textCanticoMel: globalStyles.textCanticoNo}>rà<Text style={globalStyles.textCanticoColo}>" (Bis)</Text></Text>
        </View>
      </>
      }

        <View style={globalStyles.SpazioCantico}></View>

        {accordiStru != "Testo" &&
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>3Parte....  |Coro...(Bis)</Text></Text>
        </View>
        }
        
        {accordiStru == "Testo" &&
        <>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>3.</Text> La mia vita a Lui ho dato</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Per servirlo sempre più</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Quanto amore ha dato a me</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Io che non ero degno, Ora io,</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Sono pronto a morire</Text>
        </View>
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Per Cristo mio Signor.</Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}><Text style={globalStyles.textCanticoColo}>Coro...(Bis)</Text></Text>
        </View>
        </>
        }

    </View>
    
    </>
    )
}