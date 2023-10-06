import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center mb-4'>Experiences</h1>
      <h2 className='text-center mb-4'>Here are some of my experiences.</h2>
      <Link href="" className="mb-4">
        <Image className="object-cover w-full h-48 md:h-36 md:w-36 rounded-lg shadow-2xl border-black border-solid border-1"
          src="/images/kpos.jpg"s
          width={100}
          height={100}
          alt="KwickPOS"
        />
      </Link>
    </section>
  )
}

export default page