import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
    const p = await params
    const serviceCollection = await dbConnect(collectionNameObj.servicesCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
    return NextResponse.json(data)
}