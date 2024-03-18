import { useEffect, useState } from "react";
import { IShoeCardProps } from "../../interfaces/props/IShoeCardProps"
import './ShoeCard.css';

export const ShoeCard = (props: IShoeCardProps) => {

  const { shoe, param } = props;
  const [mainImageSrc, setMainImageSrc] = useState<string>('');
  const [cardHeight, setCardHeight] = useState<string>('');

  const getMainImage = () => {
    shoe.shoeFiles.map(file => {
      if (file.mainImage) {
        setMainImageSrc(file.secureUrl);
      }
    })
  };

  const getCardHeight = () => {
    let height;
    let windowHeight = window.innerWidth;
    switch (param) {
      case 'stock':
        if (windowHeight > 1024) {
          height = '550';
        } else if (windowHeight > 768 && windowHeight < 1024) {
          height = '500';
        }
        else {
          height = '450';
        }
        break;
      case 'encargue':
        if (windowHeight > 1024) {
          height = '450';
        } else if (windowHeight > 768 && windowHeight < 1024) {
          height = '400';
        } else {
          height = '350';
        }
        break;
      default:
        return "Invalid param";
    }
    setCardHeight(height);
  }

  useEffect(() => {
    getMainImage();
    getCardHeight();
  }, [])

  return (
    <div className="shoe-card" style={{ height: `${cardHeight}px` }}>
      <div className="shoe-img-container" style={{ height: param === 'stock' ? '50%' : '70%' }}>
        <img src={mainImageSrc} alt={`${shoe.name}-img-${shoe.id}`} key={`${shoe.name}-img-${shoe.id}`} />
      </div>
      <div className="shoe-info-container" style={{ height: param === 'stock' ? '30%' : '25%' }}>
        <div className="shoe-titles-container">
          <h3 className="shoe-title">{shoe.name}</h3>
          <h4>{shoe.colorName}</h4>
          <p className="shoe-brand-name">{shoe.brand.name}</p>
        </div>
        {
          param === 'stock' &&
          <div className="shoe-stock-container">
            <h4>Talles</h4>
            <ul className="sizes-container">
              {
                shoe.stockShoeSizes.map((size, i) => {
                  const stockSize = size.sizeNumber.number;
                  let parsedSize = stockSize % 1 === 0 ? Math.trunc(stockSize) : stockSize;
                  return (
                    <p className="stock-size" key={`${size.id}-${i}`}>{parsedSize}</p>
                  )
                })
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}