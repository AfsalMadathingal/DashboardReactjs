import ReactLoading from "react-loading";

const LoadingPage = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <ReactLoading
                type="spin"
                color="rgb(0, 0, 0)"
                height={100}
                width={100}
            />
        </div>
    );
};

export default LoadingPage;