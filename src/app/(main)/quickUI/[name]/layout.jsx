import GoBackBtn from "@/components/btn/goback-btn"

const layout = ({ children }) => {
  return (
    <div className='pt-20'>
      <GoBackBtn />
      {children}
    </div>
  )
}

export default layout
