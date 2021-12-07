import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = (name : string, value : string) => {

        setValues({
            ...values,
            [ name ]: value
        });

    }

    return [ values, handleInputChange, reset ];

}