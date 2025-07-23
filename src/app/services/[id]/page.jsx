import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

export default async function ServiceDetailsPage({ params}) {
    const p= await params
    const serviceCollection= await dbConnect(collectionNameObj.servicesCollection)
    const data= await serviceCollection.findOne({ _id: new ObjectId(p.id)})
  return (
    <div>
     <section className="flex justify-center ">
        <figure className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1137}
            height={300}
            alt={"banner"}
          />
          <div className="rounded-lg transparent-layer overlay-bg absolute w-full h-full border-2 border-red-400 top-0">
            <div className="w-full h-full font-bold text-2xl flex items-center ps-16">
              <div>
                <h1 className="text-white">{data.title}</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
    </div>
  )
}
