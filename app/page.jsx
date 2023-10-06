import Image from 'next/image';

const Page = () => {
  return (
    <section className="w-full flex-center flex-col pb-20">
      {/* <div className='overflow-hidden rounded-3xl shadow-lg'>
        <Image src="/profile.jpg" width={250}
          height={250} objectFit="cover" />
      </div> */}
      <h1 className="head_text text-center pt-10">Hello, my name is
        <div className="mt-4"></div>
        <span className="blue_gradient text-center sm:text-8xl text-7xl">Jonathan Le</span>
      </h1>

      <p className="text-center px-10 pb-20 pt-10 sm:mx-10 text-lg">
      I am a passionate and recently graduated software developer from Texas A&M. 
      My expertise lies in crafting captivating mobile applications, robust full-stack solutions, and everything in between. 
      I'm driven by a deep enthusiasm for creating innovative and user-friendly software that enhances people's lives.
      </p>

      <div className='w-full shadow-lg bg-sky-100 flex-start flex-col md:flex-row md:p-20 p-10 rounded-xl'>
        <div className='w-full md:w-1/2 flex-col'>
          <h1 className='font-bold text-3xl pb-5'>What I do</h1>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>


        </div>
        <div className='w-full md:w-1/2 flex-col py-5 md:py-0'>
          <h1 className='font-bold text-3xl pb-5'>What I do</h1>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>
          <p className=''>I build both web and mobile applications to allow for...</p>

        </div>
      </div>
    </section>
  );
}

export default Page;
