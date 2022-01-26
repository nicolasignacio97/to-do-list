import React from 'react';
import useForm from '../hook/useForm'

export const AgregarTarea = ({ dispatch, Tarea }) => {

    const [{ desc }, handleInputChange, reset] = useForm({
        desc: ''
    })


    const handleSubmit = (e) => {
    
        e.preventDefault();
        if(desc.trim().length <=1){
            return;
        }
        const nuevaTarea = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        };
        const action = {
            type: 'add',
            payload: nuevaTarea,
        }
        dispatch(action);
        reset();
        
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input className='form-control'
                    type="text"
                    placeholder=' '
                    name='desc'
                    autoComplete='off'
                    value={desc}
                    onChange={handleInputChange}
                />
                <label >
                    Agregar Nueva Tarea...
                </label>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <button className='btn colorAgregar w-100'
                        type='submit'
                    >Agregar</button>
                </div>
            </div>

        </form>
    </div>;
};
