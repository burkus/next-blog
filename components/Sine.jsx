import { useEffect, useState, useRef } from "react"
import tw, { styled } from 'twin.macro'

const SvgWrapper = styled.svg(({ theme }) => [
    `
        fill: currentColor;
    `,
    tw`w-full`
])

const Sine = ({ }) => {
    const [points, setPoints] = useState([])
    const svgRef = useRef(null)
    const interval = useRef(0)
    const theta = useRef(0)
    const xSpacing = 16
    const period = 50
    const dx = ((Math.PI * 2) / period) * xSpacing;

    useEffect(() => {
        const sine = () => {
            const points = []
            const width = svgRef.current.width.baseVal.value
            const height = svgRef.current.height.baseVal.value
            let x = theta.current
            theta.current = theta.current + 0.02
            for (let i = 0; i < width / xSpacing; i++) {
                const y = height * Math.sin(x) + height / 2
                points.push({
                    x: i * xSpacing + xSpacing,
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
        <SvgWrapper ref={svgRef} height={100}>
            {
                points.map(point => (
                    <circle
                        key={point.x}
                        cx={point.x}
                        cy={point.y}
                        r={7}
                    />
                ))
            }
        </SvgWrapper>
    )
}

export default Sine