import { useEffect, useState } from "react";
import { IShoeCardProps } from "../../interfaces/props/IShoeCardProps"
import './ShoeCard.css';



export const ShoeCard = (props: IShoeCardProps) => {

  const shoe = props.shoe;
  const [mainImageSrc, setMainImageSrc] = useState<string>('');

  const getMainImage = () => {
    shoe.shoeFiles.map(file => {
      if (file.mainImage) {
        setMainImageSrc(file.secureUrl);
      }
    })
  };

  useEffect(() => {

    getMainImage()
  }, [])

  return (
    <div className="shoe-card">
      <div className="shoe-img-container">
        <img src={mainImageSrc} alt={`${shoe.name}-img-${shoe.id}`} key={`${shoe.name}-img-${shoe.id}`} />
      </div>
      <div className="shoe-info-container">
        <div className="shoe-titles-container">

          <h3 className="shoe-title">{shoe.name}</h3>
          <h4>{shoe.colorName}</h4>
          <p className="shoe-brand-name">{shoe.brand.name}</p>
        </div>
        <div className="shoe-stock-container">
          <h4>Talles</h4>
          <ul className="sizes-container">
            {
              shoe.stockShoesSizes.map((size, i) => {
                const stockSize = size.sizeNumber.number;
                let parsedSize = stockSize % 1 === 0 ? Math.trunc(stockSize) : stockSize;
                return (
                  <p className="stock-size" key={`${size.id}-${i}`}>{parsedSize}</p>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}