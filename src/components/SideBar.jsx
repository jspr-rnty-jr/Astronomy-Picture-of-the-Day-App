import ParticlesBg from 'particles-bg'

const SideBar = (props) => {
    const {handleToggleModal, data} = props;

    return ( 
    <div className="sidebar">
        <div className="bgOverlay" onClick={handleToggleModal}>
            <ParticlesBg color="#ffffff" num={30} type="cobweb" bg={true} />
        </div>
        <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <p className="descriptionDate">{data?.date}</p>
            <div className="descriptionContainer">
                <p className="descriptionExplanation"> {data?.explanation}</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <ParticlesBg color="#ffffff" num={10} type="cobweb" bg={true} />
        </div>
    </div>
     );
}
 
export default SideBar;