import React from 'react';
import './Card.scss'; 
import DeleteIcon from '@material-ui/icons/Delete';


const Card =(props)=> {
    const {
        index,
        title,
        description,
        deleteTask,
        img
        
    }= props

    return(
    <div id="card">
        <div className="container">
            <img id="image1" src={img} alt={title}/>
            <div className="centered">{title}</div>
        </div>
        <div>
            <h5 id="desc">
                {description}
            </h5>
        </div>
        <div id="line"></div> 
        <div>
        <DeleteIcon className='delete' onClick={()=>{ 
            deleteTask(index)
           
        }
        }
            />
        </div>
    </div>

    )
}

export default Card; 



