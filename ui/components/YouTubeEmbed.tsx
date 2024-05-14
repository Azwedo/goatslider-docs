import { Fragment } from "react"

const YouTubeEmbed = ({ url, title }) => {
    return (
        <Fragment>
            <iframe 
                width="620" 
                height="400" 
                src={url} 
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            />
        </Fragment>
    )
}

export default YouTubeEmbed