import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

const rotatingList = ['Web Developer', 'Game Developer', 'Cybersecurity Enthusiast']
const period = 2000

export default function Banner() {
    const [loopNum, SetLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - (Math.random() * 100))

    const tick = () => {
        const i = loopNum % rotatingList.length
        const fullText = rotatingList[i]
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting)
            setDelta(prevDelta => prevDelta / 2)

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            SetLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    useEffect(() => {
        const ticker = setInterval(() => {
            tick()
        }, delta)

        return () => clearInterval(ticker)
    }, [text])

    const connectWithMe = () => {
        console.log('Connect button clicked')
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>
                            {`Hi I'm Tarun Jeevan `}
                            <span className='wrap'>{text}</span>
                        </h1>
                        <p>About myself stuff...</p>
                        <button onClick={connectWithMe}>
                            Let&apos;s connect
                            <ArrowRightCircle size={25} />
                        </button>
                    </Col>

                    <Col xs={12} md={6} xl={7}>
                        <img src="" alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
