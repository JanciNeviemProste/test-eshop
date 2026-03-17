export default function WaveDivider({ fillColor = 'fill-gray-900' }) {
  return (
    <div className="w-full overflow-hidden leading-none -mb-1">
      <svg viewBox="0 0 1440 100" className={`w-full block ${fillColor}`}>
        <path d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  )
}
