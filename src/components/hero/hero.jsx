import './hero.scss'

const hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Owais Rafiq</h2>
                    <h1>Front End Developer and Graphic Designer</h1>
                    <div className="buttons">
                        <button>See the latest work</button>
                        <button>Contact Me</button>
                    </div>
                    <img src="scroll.png" alt="" />
                </div>
            </div>
            <div className="imageContainer">
                <img src="./gif1.gif" alt="" />
            </div>
        </div>
    )
}

export default hero
