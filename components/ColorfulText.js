import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const ColorfulText = ({ children }) => {
  // Espressione regolare che cattura numeri, lettere, e il carattere "-", con o senza prefissi
  const pattern = /(#\d+|@\d+|#[A-Za-z-]|@[A-Za-z-]|[A-Za-z-]|\d+|-|\s+)/g;
  const parts = children.match(pattern);

  return (
    <Text style={globalStyles.AccordoCanticoMel}>
      {parts.map((part, index) => {
        let color = globalStyles.AccordoCanticoMel.color; // Colore di default

        if (part.startsWith('#')) {
          color = '#D84B20'; // Arancione per prefisso #
          part = part.substring(1); // Rimuovi il prefisso '#'
        } else if (part.startsWith('@')) {
          color = 'green'; // Verde per prefisso @
          part = part.substring(1); // Rimuovi il prefisso '@'
        }

        return (
          <Text key={index} style={{ color }}>
            {part}
          </Text>
        );
      })}
    </Text>
  );
};

export default ColorfulText;
