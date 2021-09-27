import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
  
        <div className='app'>
            <Loader
            type="Hearts"
            color="#2c8880"
            height={100}
            width={150}
            timeout={1000}
            />
       </div>
    );
}
export default LoaderComp
