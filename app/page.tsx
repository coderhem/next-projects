import Image from "next/image";
import Hero from "./components/hero/hero";
import FrameCard from "./components/cards/frameCard"
import Link from "next/link";
import Customize from "./components/cards/customize";
import CustomizeCard from "./components/cards/customize";

export default function Home() {
  return (
    <div className="">
      <Hero />

      {/* Start Frame Card */}
      <section className="pt-14 lg:pb-24 bg-lovry/50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-y-5 pb-10">
            <div className="w-full lg:w-7/12">
              <h2>Transform Your Walls into <span className='text-primary'>Timeless Art</span></h2>
              <p>Premium photo frames crafted to preserve your memories with style and elegance.</p>
            </div>
            <div className="w-full lg:w-5/12 lg:text-end">
              <Link href="/shop" className='btn btn-secondary'>Explore Frames</Link>
            </div>
          </div>
          <FrameCard />
        </div>
      </section>
      {/* End Frame Card */}

      {/* Start Custimize Card */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="pb-10">
            <div className="max-w-7/12 mx-auto text-center">
              <h2>Customize your photo <span className='text-primary'>on your way.</span></h2>
              <p>Personalize your photo with the perfect size, frame, and style to match your space, turning your favorite moments into beautifully framed wall art that reflects your taste and décor.</p>
            </div>
          </div>
          <div className="shadow">
            <CustomizeCard />
          </div>
        </div>
      </section>
      {/* End Custimize Card */}

    </div>
  );
}
