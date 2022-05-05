import { useEffect, useState, useRef } from "react"
export default ({  }) => {
    const [points, setPoints] = useState([])
    const svgRef = useRef(null)
    const interval = useRef(0)
    const theta = useRef(0)
    const xSpacing = 16
    const period = 50
    const amplitude = 30
    const dx = ((Math.PI * 2) / period) * xSpacing;

    useEffect(() => {
        console.log(svgRef)
        const sine = () => {
            const points = []
            let x = theta.current
            theta.current = theta.current + 0.02
            for(let i = 0; i < svgRef.current.width.baseVal.value / xSpacing; i++) {
                const y = amplitude * Math.sin(x)
                points.push({
                    x: i * xSpacing,
                    y
                })
                x += dx
            }
            setPoints(points)
            interval.current = window.requestAnimationFrame(sine)
        }
        
        interval.current = window.requestAnimationFrame(sine)

        return () => window.cancelAnimationFrame(interval.current)
    }, [svgRef])

    return (
        <svg ref={svgRef} width={'100%'} height={140}>
            {
                points.map(point => (
                    <circle
                        key={point.x}
                        cx={point.x}
                        cy={point.y}
                        r={7}
                        fill={'black'}
                    />
                ))
            }
        </svg>
    )
}