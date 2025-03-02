import "./Switch.css";



export const Switch = () => {


    const onCLick = () => {
        const dropdown = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdown.length; i++) {
            dropdown.item(i).firstChild.checked = !dropdown.item(i).firstChild.checked;
        }

    }

    return (
        <>
            <div style={{width: "27.5%", alignSelf: "end"}}>
                <label className="switch">
                    <input onClick={onCLick} className="toggle" type="checkbox"/>
                    <span className="slider"></span>
                    <span className="card-side"></span>
                </label>
            </div>
        </>
    );
}