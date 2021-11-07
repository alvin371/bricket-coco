import './loading.css'
const Loading = () => {
    return (
        <div className="flex justify-center mt-80">
            <svg width={200} height={200} id="svg">
                <circle id="dot1" className="shape" />
                <circle id="dot2" className="shape" />
                <circle id="dot3" className="shape" />
                <circle id="dot4" className="shape" />
            </svg>
        </div>
    );
}

export default Loading;