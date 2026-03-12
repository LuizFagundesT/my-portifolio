export default function SpotifyPlayer({ linkMusica, className }) {
  return (
    <div className={className}>
      <iframe
        src={linkMusica}
        width="100%"
        height="200"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
