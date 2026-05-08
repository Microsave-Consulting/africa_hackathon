export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div style={{ paddingTop: 'clamp(64px, 5.8vw, 84px)' }}>
      <img
        src={`${basePath}/banner_africa.svg`}
        alt="Africa Digital ID Hackathon"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
}
