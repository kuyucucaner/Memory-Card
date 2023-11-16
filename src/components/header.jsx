import '../styles/header.css' 
import PropTypes from 'prop-types';


const Header = ({ score, bestScore}) => {
    
    return (
        <div className="header">
            <div className="left-side-header">
            <h2 className='header-title'>Pokemon Memory Game</h2>
            </div>
            <div className="right-side-header">
                <h3 className='header-score'>
                    Score : {score} 
                </h3>
                <h3 className='header-best-score'>
                    Best Score : {bestScore}
                </h3>
            </div>
        </div>
    )
}
Header.propTypes = {
    score: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired,
};

export default Header;