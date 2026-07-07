export interface CardProps {
  /** The card heading, e.g. "The best quarter". */
  title: string
  /** true → green triangle pointing up; false → red triangle pointing down. */
  positive: boolean
  /** The emphasized datum, e.g. "Q4" or "152". */
  value: string
}

export default function Card({ title, positive, value }: CardProps) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <div className="card-value-row">
        <span
          className={`card-triangle ${positive ? 'card-triangle--up' : 'card-triangle--down'}`}
          aria-label={positive ? 'Trending up' : 'Trending down'}
          role="img"
        />
        <span className="card-value">{value}</span>
      </div>
    </div>
  )
}
