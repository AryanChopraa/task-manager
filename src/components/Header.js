import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) =>{
    const clickfn = ()=>{onAdd()}
    return(

        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd?'red':'green'} text={showAdd?'Close':'Add'} func={clickfn}  />
        </header>
    )
}


Header.defaultProps ={
    title:"A REACT APP",
}


Header.propTypes={
    title: PropTypes.string.isRequired,
}

export default Header;