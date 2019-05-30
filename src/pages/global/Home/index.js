import React from 'react'
import workImage from 'assets/images/work.jpg'
import { makeStyles } from '@material-ui/core/styles';
//components
import { CategoryContainer } from "../../../components";

const useStyles = makeStyles({
    imgContainer:{
      display:'flex',
      justifyContent:'center',
      width:'100%',
      height:'50%'
    },
    image:{
      width:'inherit',
      height:'inherit'
    }
})

export default function Home() {
  const { imgContainer, image } = useStyles();
  return (
    <div>
      <div className={imgContainer}>
        <img src={workImage} alt="Work" className={image} />
      </div>
      <CategoryContainer />
    </div>
  )
}
