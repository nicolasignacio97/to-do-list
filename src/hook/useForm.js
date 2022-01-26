import { useState } from "react";

export default function useForm(inicialState = {}) {

    const [values, setvalues] = useState(inicialState);

    const reset = () =>{
        setvalues(inicialState);
    }

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange,reset];
}
 