import "./Title.css"
const Title = (props: {heading: string; subHeading?: string; hideDisplay?: string}) => {

    return(
        <div className="title">
            <h1>{props.heading}</h1>
            <p>{props.subHeading}</p>
            <div style={{
                    width: "6rem", 
                    height: "0.25rem", 
                    background: "linear-gradient(to right, #ec4899, #a855f7)",
                    marginLeft: "auto", 
                    marginRight: "auto",
                    marginTop: "1rem", 
                    borderRadius: "9999px", 
                    display: `${props.hideDisplay}`
                }}>
            </div>
        </div>
    )
}

export default Title