import bw from '../assets/bw-portrait.jpg'
import color from '../assets/color-portrait.jpg'

export default function ImageBox() {

    return (
        <div className="img-box">
            <img src={bw} className="main-img" />
        </div>
    )
}