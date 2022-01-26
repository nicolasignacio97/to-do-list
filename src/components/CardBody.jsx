import React from 'react';

export const CardBody = ({ tarea, dispatch }) => {

    const pendiente = (idTodo) => {
        const action = {
            type: 'toggle',
            payload: idTodo
        }
        dispatch(action)
    }
    const Eliminar = (idTodo) => {
        const action = {
            type: 'delete',
            payload: idTodo
        }
        dispatch(action)
    }
    const handleCheked = () => {
    }
    return <>
        <div className="list-group">

            {
                tarea.length >= 1 ?
                    tarea.map(tarea => (

                        <label className={`list-group-item tarea-color list letra-color ${tarea.done && 'completado'}`} key={tarea.id}>
                            <input type="checkbox"
                                className='form-check-input me-5 align-middle'
                                onClick={() => pendiente(tarea.id)}
                                onChange={handleCheked}
                                checked={tarea.done}
                            />
                            {tarea.desc}
                            <button className='float-end btn colorBoton'
                                onClick={() => Eliminar(tarea.id)}>Borrar</button>
                        </label>

                    ))
                    :
                    <div className="alert alert-warning text-center" role="alert">
                        No tienes tareas pendientes!
                    </div>

            }
        </div>
    </>;
};
