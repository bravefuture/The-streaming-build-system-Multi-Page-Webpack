
// 创建数据
const createData = (names = [], dev = true) => {
    let result = [];
    names.forEach((v) => {
        let filename = dev ? `${v}.html` : `../html/${v}.html`;
        result.push({
            title: `${v} title`,
            filename: filename,
            template: `./src/html/${v}.html`,
            chunks: ['manifest', 'vendor', `${v}`]
        });
    });
    return result;
};
// 文件名
const fileNames = ['index', 'detail'];

module.exports = {
    dev: {
        html: createData(fileNames)
    },
    prod: {
        html: createData(fileNames, false)
    }
}