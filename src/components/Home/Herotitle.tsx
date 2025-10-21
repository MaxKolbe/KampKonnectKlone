
const Herotitle = (props: {heading: string; subHeading?: string; hideDisplay?: string}) => {

    return(
        <div style={{textAlign: "center", marginBottom: "1.6rem"}}>
            <h1 style={{
                    fontSize: "1.875rem",  
                    fontWeight: "700",     
                    color: "#1f2937",      
                    marginBottom: "1rem",
                }}>{props.heading}
            </h1>
            <p style={{ color: "#4b5563" }}>{props.subHeading}</p>
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

export default Herotitle