import Image from 'next/image'
import React from 'react'
import InnerBanner from '../components/inner-banner/innerBanner'

const Cart = () => {
  return (
    <>
      <h1>Shooping Cart</h1>
      <InnerBanner />
      <section>
        <div className="container">
          <div className="flex">
            <div className="w-7/12">
              <div className="bg-white shadow-2xl p-5">
                
                <div className="flex justify-between max-w-40">
                  <Image
                    src='/images/frame-photo-3.png'
                    width={400}
                    height={400}
                    alt='Frame Photo'
                    loading='lazy'
                  />
                  <div className="">
                    <p>About Frame</p>
                    <p>Price</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="bg-pink-100/10 border border-pink-100 p-2 size-5 flex justify-center items-center">
                      -
                    </button>
                    <div className="">
                      1
                    </div>
                    <button className="">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
