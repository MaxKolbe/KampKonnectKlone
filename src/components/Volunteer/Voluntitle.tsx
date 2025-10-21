import "./Voluntitle.css"

const Voluntitle = (props: {heading: string, subHeading?: string}) => {

    return(
        <div className="voluntitle">
            <h1>{props.heading}</h1>
            <div className="voluntitleDiv"></div>
            <p>{props.subHeading}</p>
        </div>
    )
}

export default Voluntitle