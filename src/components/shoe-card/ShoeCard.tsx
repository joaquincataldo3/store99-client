import { IShoeCardProps } from "../../interfaces/props/IShoeCardProps"
import './ShoeCard.css';



export const ShoeCard = (props: IShoeCardProps) => {
  
  const shoe = props.shoe;
  
  return (
    <div className="shoe-card">
      <div className="shoe-img-container">
        {
          shoe.shoeFiles.map(shoeFile => {
            if(shoeFile.mainImage){
              return (
                <img src={shoeFile.secureUrl} alt={`${shoe.name}-img-${shoe.id}`} key={`${shoe.name}-img-${shoe.id}`} />
              )
            }
          })
        }
        <img src="" alt="" />
      </div>
    </div>
  )
}
