import pkg from '../../package.json'

export const getAboutInfo = (req,res) => {
    res.status(200).json({
        name: pkg.name,
        author: pkg.author,
        description: pkg.description,
        version: pkg.version
    })
}//getAboutInfo