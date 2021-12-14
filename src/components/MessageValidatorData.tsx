import { Alert } from 'react-native'


export const MessageValidatorData = (mensaje: string) => {
    Alert.alert(
        "Datos no validos",
        `${mensaje}`,
        [
            {
                text: "Aceptar",
                onPress: () => {
                },
                style: "destructive",
            },
        ],
        {
            cancelable: true,
            onDismiss: () => {
            },
        }
    );
}

