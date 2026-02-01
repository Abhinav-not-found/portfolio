// change bento to large span to columns not rows
const All = () => {
  return (
    <section className='mt-8'>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4'
      >
        <Large />
        <Medium />
        <Small />
        <Small />
        <Small />
        <Medium />
        <Small />
      </div>
    </section>
  )
}
const Large = () => {
  return (
    <div className='col-span-2 h-96 row-span-2 rounded-xl bg-linear-to-b from-transparent via-transparent via-60% to-neutral-200 dark:to-neutral-700 flex items-end p-3'>
      <p className='text-4xl text-muted-foreground font-bold'>Title</p>
    </div>
  )
}
const Medium = () => {
  return <div className='col-span-2 h-48 rounded-xl bg-muted' />
}
const Small = () => {
  return <div className='rounded-xl h-48 bg-muted' />
}

export default All
