import "./Badge.css";


export const Badge = ({title}) => {
    const className = `${title.replaceAll(" ", "")}Badge`;
    return (
        <>
            <div className="badges">
                <button className={className}>{title}</button>
            </div>
        </>
    );
}