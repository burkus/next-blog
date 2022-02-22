import fs from 'fs';
import path from 'path';

export const getBlogFiles = async () => {
    const dir = fs.readdirSync('content');
    const files = dir.map(file => {
        const index = file.indexOf('.');
        return file.substring(0, index);
    })
    return files;
}

export const getBlogFile = async (title) => {
    const file = fs.readFileSync(path.join('content', title + '.mdx'));
    return file;
}