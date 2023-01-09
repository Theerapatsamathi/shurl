import { NextApiRequest, NextApiResponse } from "next";
import { URLStore } from "../../models/URLs";
import crypto from 'crypto';

const handler = async (req: NextApiRequest, res:NextApiResponse) => {
    const { url, url_hash } = req.body;

    if(!url || !url_hash)
     return res
     .status(400)
     .json({success: false, message: 'URL Not Provided'});

    // const urlHash = await crypto.generateKey('aes', {length:5})

    await URLStore.create({
        url_hash, url
    });

    res.status(200).json({ success: true, message: "URL Added Successfully"});
};

export default handler;