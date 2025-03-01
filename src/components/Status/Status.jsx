import "./Status.css";




export const Status = ({title}) => {

    const circle = `circle ${title.replaceAll(" ", "")}`;
    return (
        <>
            <div className={"statusContainer"}>
                <div className={circle}></div>
                <span style={{width: "5px"}}></span>
                <p style={{margin:0}}>{title}</p>
            </div>
        </>
    )
}