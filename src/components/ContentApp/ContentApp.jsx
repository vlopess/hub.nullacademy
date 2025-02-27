import Qrcode from "../../assets/png/qrcode.png";
import lain from "../../assets/gif/lain.gif";
import "./ContentApp.css";
import {Card} from "../Card/Card.jsx";

export const ContentApp = () => {



    return (
        <>
            <div className={"column-flex"}>
                <div>
                    <div className={"hover-container"}>
                        <h2><span className={"hover-text"}>「<span className={"null-style"}>Null</span>Academy」</span></h2>
                        <img src={lain} alt="lain dancing" className="hover-image"/>
                    </div>
                    <p>O jeito divertido de programar</p>
                </div>
                <div>
                    <a style={{display: "flex", justifyContent: "center", alignItems: "center"}} target={"_blank"} href="https://forms.gle/u7ULRgp12CLiNKtj7">
                        <img width={60} src={Qrcode} alt="Qrcode"/>
                        <p style={{margin: "10px"}}><b>Participe da pesquisa!</b></p>
                    </a>
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <p style={{margin: "10px"}}><b>Site em construção</b></p>
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                </div>
            </div>
        </>
    )
}