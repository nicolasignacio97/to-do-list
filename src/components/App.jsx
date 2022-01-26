import React, { useEffect, useReducer } from 'react';
import { AgregarTarea } from './AgregarTarea';
import { CardBody } from './CardBody';
import { todoReducer } from './todoReducer';

const init = () => {
 
    return JSON.parse(localStorage.getItem('Todos')) || []

}

export const App = () => {
    const [Tarea, dispatch] = useReducer(todoReducer, [], init);
 
    useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(Tarea));
    }, [Tarea]);


    return <div className='container'>
        <div className="row mt-5 d-flex justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
                <div className="card shadow card-color">
                    <div className="card-header ">
                        <h1 className='text-center letra-color letra'>To-Do React</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <AgregarTarea dispatch = {dispatch} tarea={Tarea} />
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <CardBody tarea ={ Tarea }
                                dispatch = {dispatch} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
