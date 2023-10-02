import Image from 'next/image';

const Page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className='overflow-hidden rounded-3xl shadow-lg'>
        <Image src="/profile.jpg" width={250}
          height={250} objectFit="cover" />
      </div>
      <h1 className="head_text text-center">Hello, my name is
        <div className="mt-4"></div>
        <span className="blue_gradient text-center sm:text-8xl text-7xl">Jonathan Le</span>
      </h1>

      <p className="text-center p-10 sm:mx-10 text-lg">
        I am a recently graduated software developer based in Houston, Texas. I specialize
        in building mobile applications, fullstack applications, and everything in between.
      </p>

    </section>
  );
}

export default Page;
