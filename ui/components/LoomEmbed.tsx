const LoomEmbed = ({ url, title }) => {
    return (
        <div className='mb-4' style={{ position: 'relative', paddingBottom: '56.25%', height: '0', width: '85%' }}>
            <iframe 
                src={`${url}&hide_owner=true&hideEmbedTopBar=true&hide_share=true&hide_title=true&hide_owner=true`} 
                frameBorder="0" 
                title={title}
                allowFullScreen
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
    )
}

export default LoomEmbed