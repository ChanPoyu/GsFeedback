const fs = require('fs')

let path = 'BookList'
let content = `# 良かった点\n- \n # 気になった点\n- \n # その他`
let numberAndNames = [
    '03_Ito',
    '11_Okumura',
    '20_Saito',
    '30_Tazaki',
    '40_Hataketa',
    '50_Warashina',
]

if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
}

numberAndNames.forEach((numberAndName) => {
    fs.writeFile(`./${path}/Feedback_${numberAndName}.md`, content, (err) => console.log(err))
})



