import global from './global'

const SS = SpreadsheetApp.getActiveSpreadsheet()

global.doGet = () => {
  const title = 'react webapp on google apps script'
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle(`${title}`)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
}
