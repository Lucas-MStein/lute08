import React, { useEffect } from 'react';

const TikTokEmbed = ({ url }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <blockquote
            className="tiktok-embed"
            cite={url}
            data-video-id={url.split('/video/')[1]}
            style={{ maxWidth: '100%', margin: '0 auto' }}
        >
            <section></section>
        </blockquote>
    );
};

export default TikTokEmbed;