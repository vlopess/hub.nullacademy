import "./Dropdown.css";
import "./../Status/Status.css"
import {Status} from "../Status/Status.jsx";
import {Badge} from "../Badge/Badge.jsx";

export const Dropdown = ({title, id, status, date, tarefas}) => {
    return (
        <>
            <div className="dropdown">
                <input
                    hidden=""
                    className="sr-only"
                    type="checkbox"
                    name={id.replaceAll(" ", "")}
                    id={id.replaceAll(" ", "")}
                />
                <label
                    aria-label="dropdown scrollbar"
                    htmlFor={id.replaceAll(" ", "")}
                    className="trigger"
                >
                    <p className={"title"} >{title}</p>
                    <p className={"status"}><Status title={status}/></p>
                    <p className={"dataPrevista"}>{date}</p>
                    <div></div>
                </label>
                <ul className="list webkit-scrollbar" role="list" dir="auto">
                    {
                        tarefas.map(e => (
                            <li className="listitem" role="listitem">
                                <article className="article">
                                    <p style={{margin: 0}}>{e.nome}</p>
                                    <Badge title={e.status}/>
                                </article>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}