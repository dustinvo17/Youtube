import React from 'react'

const VideoDetail = ({video}) => {
    
    if (video) {
        return (
            <div>
                <div className="ui embed">
                   <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="video player" allowFullScreen></iframe>
                </div>
                <div className="ui segment">
                    <h4 className='ui header'>{video.snippet.title}
                    </h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )

    }
    return <div>Loading...</div>

}

export default VideoDetail