import { useState } from 'react';

export const useFuentes = (  ) => {
    
    const [values, setValues] = useState("");

    return { values, setValues };

}