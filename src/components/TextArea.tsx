import React from 'react';
import { View, TextInput } from 'react-native';

export const TextArea = (props: any) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={200}
    />
  );
}