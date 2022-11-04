// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs';

export default function handler(req, res) {
    fs.promises.readdir('blogdata').then((files) => {
        const blogs = files.map((file) => {
            return JSON.parse(fs.readFileSync(`blogdata/${file}`, 'utf-8'));
        });
        res.status(200).json(blogs);
    });
}
