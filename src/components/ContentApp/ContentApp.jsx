import Qrcode from "../../assets/png/qrcode.png";
import lain from "../../assets/gif/lain.gif";
import "./ContentApp.css";
import {Card} from "../Card/Card.jsx";
import {Switch} from "../Switch/Switch.jsx";

export const ContentApp = () => {


    const data = {
        "etapa": [
            {
                "nome": "Planejamento",
                "status": "Completed",
                "data_prevista": "03/03/2025",
                "tarefas": [
                    {"nome": "Definir escopo", "status": "Completed"},
                    {"nome": "Referências", "status": "Completed"}
                ]
            },
            {
                "nome": "UI/UX",
                "status": "Completed",
                "data_prevista": "04/03/2025",
                "tarefas": [
                    {"nome": "Criando protótipo no Figma", "status": "Completed"},
                    {"nome": "Criando Design System", "status": "Completed"},
                    {"nome": "Criando icones e personagens (base)", "status": "Completed"}
                ]
            },
            {
                "nome": "Mobile",
                "status": "In Progress",
                "data_prevista": "12/03/2025",
                "tarefas": [
                    {"nome": "Criando app architecture", "status": "Completed"},
                    {"nome": "Aplicando o Design System", "status": "Completed"},
                    {"nome": "Criando fluxos de telas", "status": "Completed"},
                    {"nome": "Criando flashcards", "status": "Completed"},
                    {"nome": "Criando trilhas de aprendizado", "status": "Completed"},
                    {"nome": "Criando Gráficos", "status": "In Progress"},
                ]
            },
            {
                "nome": "Animações e Interface",
                "status": "In Progress",
                "data_prevista": "25/03/2025",
                "tarefas": [
                    {"nome": "Estudando animações (Rive e Flutter)", "status": "Pending"},
                    {"nome": "Implementando animações", "status": "Pending"}
                ]
            },
            {
                "nome": "Testing",
                "status": "Pending",
                "data_prevista": "26/03/2025",
                "tarefas": [
                    {"nome": "Testando em dispositivos (Android e iOS)", "status": "Pending"},
                    {"nome": "Corrigindo problemas identificados", "status": "Pending"}
                ]
            },
            {
                "nome": "MVP & Feedback",
                "status": "Pending",
                "data_prevista": "31/03/2025",
                "tarefas": [
                    {"nome": "Primeira Entrega", "status": "Pending"},
                    {"nome": "Feedback e corrigindo problemas identificados", "status": "Pending"}
                ]
            },
        ]
    };

    return (
        <>
            <div className={"column-flex"}>
                <div>
                    <div>
                        <div className={"hover-container"}>
                            <h2><span className={"hover-text"}>「<span
                                className={"null-style"}>Null</span>Academy」</span></h2>
                            <img src={lain} alt="lain dancing" className="hover-image"/>
                        </div>
                        <p>O jeito divertido de programar</p>
                    </div>
                    <div style={{width: "20%", minWidth: "350px", margin: "auto"}}>
                        <a style={{display: "flex", justifyContent: "center", alignItems: "center"}} target={"_blank"}
                           href="https://forms.gle/u7ULRgp12CLiNKtj7">
                            <img width={60} src={Qrcode} alt="Qrcode"/>
                            <p style={{margin: "10px"}}><b>Participe da pesquisa!</b></p>
                        </a>
                    </div>
                </div>
                <div style={{margin: "auto", height: "100px", width: "28%", minWidth: "350px", display: "flex", alignItems: "center"}}>
                    <p>Acompanhe cada etapa do desenvolvimento do Null Academy.</p>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <Switch/>
                    <Card data={data}/>
                </div>
            </div>
        </>
    )
}
