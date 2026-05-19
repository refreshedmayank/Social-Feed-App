const imageKit = require('@imagekit/nodejs');
const ImageKitclient = new imageKit({
    privateKey: "private_TzUnSPdR3JFttydBJllODooPrDg="
})
async function Uploadfile(Buffer){
 const response =  await ImageKitclient.files.upload({
        file: Buffer.toString('base64'),
        fileName: "Image.jpg"
})
console.log(response);
return response;
}
module.exports = Uploadfile;