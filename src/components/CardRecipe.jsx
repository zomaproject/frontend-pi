import { Card } from '../styles/Card'

export default function CardRecipe({ recipe }) {
  const { image, title, Types } = recipe
  return (
    <Card>
      <div className='card'>
        <img src={image} alt='Avatar' />
        <div className='container'>
          <h3>{title}</h3>
          <h4>Diets</h4>
          <div className='flex'>
            {Types.map((type) => (
              <span key={type.name}>{type.name}</span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
