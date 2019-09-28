const fs = require('fs')

let path = 'BookList'
let template = `# 良かった点\n- \n# 気になった点\n- \n# その他`
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
    let fileDirectory = `./${path}/Feedback_${numberAndName}.md`
    if (fs.existsSync(fileDirectory)){
        console.warn(`${fileDirectory} already exist`)
    }else{
        fs.writeFile(fileDirectory, template, (err) => {
            bool(err) ? console.log(err) : console.log(`Feedback_${numberAndName}.md generated`)
        })
    }
})

