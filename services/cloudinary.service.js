const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const uploadImage = async () => {
    try {
        cloudinary.uploader
            .upload('my_image.jpg')
            .then((result) => console.log(result));
    } catch (err) {
        console.log(err);
    }
}