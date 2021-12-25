import * as Font from 'expo-font';
import { Nunito_700Bold,Nunito_900Black_Italic,Nunito_300Light_Italic } from '@expo-google-fonts/nunito';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
export const fetchFont=async()=>{
    await Font.loadAsync({
      'Pacifico': Pacifico_400Regular,
      'Nunito': Nunito_700Bold,
      'Merriweather': Nunito_300Light_Italic,
      'IndieFlower': IndieFlower_400Regular,
      'Cairo': Nunito_900Black_Italic,
    });
}