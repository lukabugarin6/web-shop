export default function CustomContainer({ className='', children }) {
    return <div className={`${className} custom-container mx-auto px-5`}>{children}</div>
  }