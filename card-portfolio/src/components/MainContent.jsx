const MainContent = () => {
  return (
    <main className='px-6 pt-8 pb-10 sm:px-12 sm:py-12'>
        <div className='mb-6'>
          <h3 className='sm:text-2xl font-semibold mb-1 sm:mb-2'>About</h3>
          <p className='text-slate-600 text-sm sm:text-base'>
            I am a frontend developer with a particulat interest in making things simple and automating daily tasks. I try to keep with security and best practices, and am always looking for new things to learn.
          </p>
        </div>

        <div>
          <h3 className='sm:text-2xl font-semibold mb-1 sm:mb-2'>Interests</h3>
          <p className='text-slate-600 text-sm sm:text-base'>
            Food expert, Music scholar, Reader, Internet fanatic, Bacon buff, Entrepreneur, Travel geek, Pop culture ninja, Tea fanatic and Kpopper.
          </p>
        </div>
    </main>
  )
}

export default MainContent