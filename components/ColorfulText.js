import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

const ColorfulText = ({ children }) => {
  const pattern = /(#\d+|@\d+|\d+|\s+)/g;
  const parts = children.match(pattern);

  return (
    <Text style={globalStyles.AccordoCanticoMel}>
      {parts.map((part, index) => {
        let color = globalStyles.AccordoCanticoMel.color; // Colore di default

        if (part.startsWith('#')) {
          color = '#D84B20';
          part = part.substring(1); // Rimuovi il prefisso '#'
        } else if (part.startsWith('@')) {
          color = 'green';
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
