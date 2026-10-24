import './backToTopButton.css'

interface Props {
  scrollToHero : React.MouseEventHandler<HTMLButtonElement>;
}

export default function BackToTopButton ({scrollToHero}: Props) {
  return (
    <button className='back-to-top-button' onClick={scrollToHero}>
      ︿
    </button>
  )
}