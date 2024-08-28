import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function GesuSeiIlMioSignor ({ a, b, c, d, e, f, g, cDiesis, eBemolle, fDiesis, aBemolle, bBemolle, accordiStru }) {
    return (
    <>
    <View style={globalStyles.containerCantico}>
    { accordiStru != "Elettrica" && 
    <>
                <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Gesù </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sei il mio Sig</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle} {e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>nor,</Text>
        </View>

        
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> Gesù io </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mai ti lasce</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò,</Text>
        </View>

        
        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>solo tu </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>m’hai potuto libe</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle} {e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rar,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>m’hai sal</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vato col tuo a</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mor e adesso</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> so: </Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>Ti amo,</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>             di t</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle} {e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>e io</Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ho bi</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>sogno e mai </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>più ti lasce</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rò, </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}></Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>mio Amico,</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>         mio</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> Salvator</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}> </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>ti ado</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>rerò finch</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>é io vita a</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {g}</Text></View> }
            <Text style={accordiStru!="Testo"? globalStyles.textCantico: globalStyles.textCanticoNo}>vrò</Text>
        </View>
    </> 
    }


{ accordiStru === "Elettrica" && 
    <>
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoMel}> </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
             {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>      3   3   2               2     1    -3  2</Text></View>  }
            <Text style={globalStyles.textCanticoMel}>Gesù </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>sei il mio Sig</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle} {e}-</Text></View> }
            <Text style={globalStyles.textCanticoMel}>nor,</Text>
        </View>

        
        <View style={globalStyles.righeCantico}>
            {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>       1   1  1 6      1    1   1     6   5</Text></View>  }
            <Text style={globalStyles.textCanticoMel}> Gesù io </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>mai ti lasce</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>rò,</Text>
        </View>

        
        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoMel}> </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
             {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>   3   3    3        2          1   2   1    2  1   3  2</Text></View>  }
            <Text style={globalStyles.textCanticoMel}>solo tu </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>m’hai potuto libe</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle} {e}-</Text></View> }
            <Text style={globalStyles.textCanticoMel}>rar,</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>        1         6    1  6     1      6             1         1    1     1  6 5</Text></View>  }
            <Text style={globalStyles.textCanticoMel}>m’hai sal</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>vato col tuo a</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>mor e adesso</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={globalStyles.textCanticoMel}> so: </Text>
        </View>

        <View style={globalStyles.SpazioCantico}></View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoMel}> </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
             {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>  B3 1      5                   1h2  1  7 7</Text></View>  }
            <Text style={globalStyles.textCanticoMel}>Ti amo,</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>             di t</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle} {e}-</Text></View> }
            <Text style={globalStyles.textCanticoMel}>e io</Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>   1      2   3      2  1       2       3     2   1   2  2  1 </Text></View>  }
            <Text style={globalStyles.textCanticoMel}>ho bi</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>sogno e mai </Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>più ti lasce</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>rò, </Text>
        </View>

        <View style={globalStyles.righeCantico}>
            <Text style={globalStyles.textCanticoMel}></Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{g}</Text></View> }
             {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>      3            4   3  2               5        5    3  3  2</Text></View>  }
            <Text style={globalStyles.textCanticoMel}>mio Amico,</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{a}-/{fDiesis}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>         mio</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{b}/{eBemolle}</Text></View> }
            <Text style={globalStyles.textCanticoMel}> Salvator</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{e}-</Text></View> }
            <Text style={globalStyles.textCanticoMel}> </Text>
        </View>

        <View style={globalStyles.righeCantico}>
        {accordiStru == "Elettrica" &&<View><Text style={globalStyles.AccordoCanticoMel}>  1   2   3  2   1    2        3   2      1  2  2      1 </Text></View>  }
            <Text style={globalStyles.textCanticoMel}>ti ado</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>rerò finch</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{c}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>é io vita a</Text>
             {accordiStru != "Testo" &&<View><Text style={globalStyles.AccordoCantico}>{d} {g}</Text></View> }
            <Text style={globalStyles.textCanticoMel}>vrò</Text>
        </View>
    </> 
    }




    </View>
    
    </>
    )
}