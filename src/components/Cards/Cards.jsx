import Card from './Card';
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return <div className={style.hola}>
      {
         characters.map(pj => {
            return <Card 
            key = {pj.id} 
            id = {pj.id}
            name = {pj.name} 
            species = {pj.species}  
            gender = {pj.gender} image = {pj.image} 
            status = {pj.status} 
            origin = {pj.origin.name}
            onClose = {onClose} />
         })
      }
   </div>;
}
