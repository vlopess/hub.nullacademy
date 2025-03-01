import "./Card.css";
import {Dropdown} from "../Dropdown/Dropdown.jsx";






export const Card = ({data}) => {
    return (
        <>
            <div className="card">
                {
                    data.etapa.map(e => (<Dropdown id={e.nome.replaceAll(" ", "")} title={e.nome} status={e.status} date={e.data_prevista} tarefas={e.tarefas}/>))
                }
            </div>
        </>
    );
}