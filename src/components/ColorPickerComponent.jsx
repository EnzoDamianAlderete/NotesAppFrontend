import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

const ColorPickerComponent =()=>{

    const {setBgColor} = useContext(AppContext);

    const onColorChange=(color)=>{
        setBgColor(color);
    }


    return(
        <div className="flex gap-2 pt-4">
                    <p>Selecciona color de nota: </p>
                    <div 
                    className="rounded-full" 
                    style={{ backgroundColor: '#F7C8E0', padding: '1rem', border:'1px solid #000', cursor:'pointer' }} onClick={()=>onColorChange('#F7C8E0')}></div>
                    <div 
                    className="rounded-full" 
                    style={{ backgroundColor: '#FFF6BD', padding: '1rem', border:'1px solid #000', cursor:'pointer' }}  
                    onClick={()=>onColorChange('#FFF6BD')}></div>
                    <div 
                    className="rounded-full" 
                    style={{ backgroundColor: '#B4E4FF', padding: '1rem', border:'1px solid #000', cursor:'pointer' }}  
                    onClick={()=>onColorChange('#B4E4FF')}></div>
                    <div 
                    className="rounded-full" 
                    style={{ backgroundColor: '#B5F1CC', padding: '1rem', border:'1px solid #000' , cursor:'pointer'}}  
                    onClick={()=>onColorChange('#B5F1CC')}></div>
                </div>
    )
}

export default ColorPickerComponent;