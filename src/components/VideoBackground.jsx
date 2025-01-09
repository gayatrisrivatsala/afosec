const VideoBackground = () => {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="videoBackground"
        
      >
        <source src="/afosec_ad.mp4" type="video/mp4" />
      </video>
    )
  }
  
  export default VideoBackground
  
  