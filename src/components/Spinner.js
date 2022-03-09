import { classNames } from '../utils/classNames'

export function Spinner({ centered, className }) {
  return (
    <div
      className={classNames(
        className,
        'text-gray-600',
        !centered && 'inline-block',
        centered && 'flex items-center justify-center'
      )}
    >
     
    </div>
  )
}
