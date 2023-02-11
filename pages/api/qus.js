// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from 'middleware/mongoose'
import contacts from '../../models/contacts'
const handler = async (req, res) => {
    if (req.method == 'POST') {
      let u = new contacts(req.body)
      u.save()
        res.status(200).json({ sucess: 'super' });
        
    } else { res.status(400).json({ error: 'THISE method not  allowed jk' }); }



}
export default connectDb(handler)