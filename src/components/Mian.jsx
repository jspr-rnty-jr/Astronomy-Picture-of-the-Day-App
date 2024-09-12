const Main = (props) => {
    const { data } = props;
    return ( 
        <div className="imgContainer">
            <img src={data?.hdurl} alt="bg-img" className="bgImage" />
        </div>
     );
}
 
export default Main;