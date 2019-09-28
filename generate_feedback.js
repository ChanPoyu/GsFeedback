const fs = require('fs')

let inputNameFilePath = `namelist.csv`
let path = '<NEW PATH>'
let template = `# 良かった点\n- \n# 気になった点\n- \n# その他`

let fileContent = fs.readFileSync(inputNameFilePath, { encoding: 'utf8' })
let numberAndNames = fileContent.split(/,| |\n/i).filter(el => el != '')
console.log(numberAndNames)

if (!fs.existsSync(path) && !'<NEW PATH>') {
    fs.mkdirSync(path)
}
else{
    process.exit()
}

numberAndNames.forEach((numberAndName) => {
    let fileDirectory = `./${path}/Feedback_${numberAndName}.md`
    if (fs.existsSync(fileDirectory)){
        console.warn(`${fileDirectory} already exist`)
    }else{
        fs.writeFile(fileDirectory, template, (err) => {
            Boolean(err) ? console.log(err) : console.log(`Feedback_${numberAndName}.md generated`)
        })
    }
})
