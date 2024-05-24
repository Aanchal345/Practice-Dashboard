import { FC } from 'react'

interface CircularProgressBarProps {
    strokeWidth?: number
    sqSize?: number
    percentage?: number
    count?: number
    title?: string
}

const CircularProgressBar: FC<CircularProgressBarProps> = (props) => {
  const { strokeWidth = 8, sqSize = 160, percentage, count, title } = props
  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100

  return (
    <svg
      width="100%"
      height="auto"
      viewBox={viewBox}
      className="max-w-full h-auto"
    >
      <circle
        className="fill-none stroke-gray-200"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none stroke-purple-600 transition-all ease-in delay-200"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        className="text-center text-2xl text-purple-600 font-semibold"
        x="50%"
        y="45%"
        dy=".3em"
        textAnchor="middle"
        fill="#000000"
      >
        {`${count}`}
      </text>
      <text
        className="text-center text-xs text-purple-600 font-semibold"
        x="50%"
        y="60%"
        dy=".3em"
        textAnchor="middle"
        fill="#000000"
      >
        {`${title}`}
      </text>
    </svg>
  )
}

export default CircularProgressBar
