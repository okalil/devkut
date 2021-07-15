import { SiteClient } from 'datocms-client'

export default async function getData(req, res) {
  if (req.method === 'POST') {
    const token = process.env.DATO_FULL_API_KEY

    const client = new SiteClient(token)
    const record = await client.items.create({
      itemType: '968031',
      ...req.body.data
    })

    console.log(record)

    res.json({
      record
    })

    return
  }

  res.status(404).json({
    message: 'Ainda não temos nada'
  })
}
