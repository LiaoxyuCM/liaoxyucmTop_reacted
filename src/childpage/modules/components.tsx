interface CardProps {
  title: string,
  content: string,
  link: string,
  targetblank?: boolean
}

export function Card({ title, content, link, targetblank = false }: CardProps) {
  return (
    <a
      href={link ? link : "#"}
      onClick={
        link ?
          () => { } :
          (e) => { e.preventDefault() }
      }
      target={targetblank ? "_blank" : ""}
    >
      <div className="card">
        <h3>{title}</h3>
        <p className="description">
          {content}
        </p>
      </div>
    </a>
  )
}

interface CardFriendlyLinkProps extends CardProps {
  imagesrc: string
}

export function CardFriendlyLink({ title, content, link, imagesrc, targetblank = false }: CardFriendlyLinkProps) {
  return (
    <a
      href={link ? link : "#"}
      onClick={
        link ?
          () => { } :
          (e) => { e.preventDefault() }
      }
      target={targetblank ? "_blank" : ""}
    >
      <div className="card">
        <img src={imagesrc} style={{ width: 40 + 'px', height: 40 + 'px', marginRight: 3 + 'px' }}></img>
        <div>
          <h3>{title}</h3>
          <p className="description">
            {content}
          </p>
        </div>
      </div>
    </a>
  )
}

interface TimelineProps {
  datetime: string,
  content: string
}

export function Timeline({ datetime, content }: TimelineProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-date">{datetime}</div>
      <div className="timeline-content">
        <p>{content}</p>
      </div>
    </div>
  )
}
